// The bookstore stays readable while live inventory and hours load.
(() => {
  const backend = window.FOPL_BACKEND;
  const grid = document.getElementById('bc-grid');
  const status = document.getElementById('bc-status');
  const search = document.getElementById('bc-search');
  const age = document.getElementById('bc-age');
  const condition = document.getElementById('bc-condition');
  let inventory = [];
  let loaded = false;

  function element(tag, className, text) {
    const node = document.createElement(tag);
    node.className = className;
    if (text != null) node.textContent = text;
    return node;
  }

  function render() {
    if (!loaded) return;
    const query = search.value.trim().toLowerCase();
    const books = inventory.filter(book =>
      (!query || [book.title, book.author, book.series, book.genre].some(value => String(value || '').toLowerCase().includes(query))) &&
      (!age.value || book.age_group === age.value) &&
      (!condition.value || book.condition === condition.value)
    );
    grid.replaceChildren();
    status.textContent = !inventory.length ? 'No books are listed yet. Call the bookstore for availability.' :
      !books.length ? 'No books matched. Try another search or clear the filters.' :
      `Showing ${Math.min(books.length, 24)} of ${books.length} matching books. Open the full catalog for more.`;
    books.slice(0, 24).forEach(book => {
      const card = element('a', 'fopl-book-card');
      card.href = grid.dataset.catalogUrl;
      const cover = element('div', 'fopl-book-cover', 'Book cover unavailable');
      const isbn = String(book.isbn || '').replace(/[^0-9Xx]/g, '');
      if (isbn) {
        const image = document.createElement('img');
        image.src = `https://covers.openlibrary.org/b/isbn/${isbn}-M.jpg`;
        image.alt = String(book.title || 'Book cover');
        image.loading = 'lazy';
        image.addEventListener('error', () => { cover.textContent = 'Book cover unavailable'; });
        cover.replaceChildren(image);
      }
      const info = element('div', 'fopl-book-info');
      info.append(element('h3', 'fopl-book-title', book.title || 'Untitled'), element('p', 'fopl-book-author', book.author || 'Author unknown'));
      if (book.series) info.append(element('p', 'fopl-book-series', `${book.series}${book.series_num ? ' #' + book.series_num : ''}`));
      const price = Number.parseFloat(book.price);
      info.append(element('p', 'fopl-book-price', Number.isFinite(price) ? `$${price.toFixed(2)}` : 'Ask for price'));
      info.append(element('p', 'fopl-book-details', [book.age_group, book.condition].filter(Boolean).join(' · ')));
      card.append(cover, info);
      grid.append(card);
    });
  }

  async function loadInventory() {
    try {
      const response = await fetch(`${backend}/api/fopl/books`);
      if (!response.ok) throw new Error('Inventory unavailable');
      const data = await response.json();
      if (!Array.isArray(data)) throw new Error('Invalid inventory');
      inventory = data;
      loaded = true;
      render();
    } catch {
      status.textContent = 'Inventory is unavailable right now. Please check that the local Flask server is running, or call the bookstore.';
    }
  }

  async function loadHours() {
    try {
      const response = await fetch(`${backend}/api/bookstore/info`);
      if (!response.ok) return;
      const data = await response.json();
      if (data.hours) document.getElementById('fopl-hours').textContent = data.hours;
    } catch { /* Keep the visible call-for-hours fallback. */ }
  }

  document.getElementById('book-request-form').addEventListener('submit', async event => {
    event.preventDefault();
    const form = event.currentTarget;
    const message = document.getElementById('fopl-req-msg');
    const button = form.querySelector('button');
    const title = document.getElementById('fopl-req-title').value.trim();
    const name = document.getElementById('fopl-req-name').value.trim();
    const phone = document.getElementById('fopl-req-phone').value.trim();
    if (!title || !name) {
      message.textContent = 'Please enter a book title and your name.';
      return;
    }
    button.disabled = true;
    message.textContent = 'Sending request…';
    try {
      const response = await fetch(`${backend}/api/bookstore/request`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, name, phone })
      });
      if (!response.ok) throw new Error('Request failed');
      const data = await response.json();
      message.textContent = data.message || 'Your book request was submitted.';
      form.reset();
    } catch {
      message.textContent = 'Your request could not be sent. Your entries are still here; please try again or call 858-513-2862.';
    } finally {
      button.disabled = false;
    }
  });

  search.addEventListener('input', render);
  age.addEventListener('change', render);
  condition.addEventListener('change', render);
  loadInventory();
  loadHours();
})();
