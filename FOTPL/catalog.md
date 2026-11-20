---
layout: fopl-section
title: Book Catalog — Friends of the Poway Library
permalink: /catalog
description: Browse and search all available books at the Friends of the Poway Library bookstore.
fopl_section: catalog
fopl_nav_active: catalog
---



<!-- Particles -->


<!-- Hero / search -->
<div class="catalog-hero">
  <div class="catalog-hero-label">Explore Our Collection</div>
  <h1>Book catalog</h1>
  <p class="catalog-hero-sub">Search the bookstore inventory by title, author, genre, or series.</p>
  <div class="catalog-search-wrap">
    <input class="catalog-search" id="search-input" type="text" aria-label="Search book catalog"
           placeholder="Search by title, author, genre, or series…" autocomplete="off" />
    <button class="catalog-search-btn" onclick="applySearch()">Search</button>
  </div>
</div>

<!-- Admin bar -->
<div class="admin-bar" id="admin-bar">
  <span>🔧 Admin Mode</span>
  <button class="add-book-btn" onclick="openAddForm()">+ Add Book</button>
</div>

<!-- Body -->
<div class="catalog-body">
  <!-- Filters -->
  <div class="catalog-sidebar" id="sidebar">
    <div class="filter-section">
      <div class="filter-title">Age Group</div>
      <button class="filter-btn active" data-age="" onclick="setAge(this, '')">All Ages <span class="filter-count" id="count-all"></span></button>
      <button class="filter-btn" data-age="Kids" onclick="setAge(this, 'Kids')">Kids (4–10) <span class="filter-count" id="count-kids"></span></button>
      <button class="filter-btn" data-age="Middle Grade" onclick="setAge(this, 'Middle Grade')">Middle Grade <span class="filter-count" id="count-mg"></span></button>
      <button class="filter-btn" data-age="YA" onclick="setAge(this, 'YA')">Young Adult <span class="filter-count" id="count-ya"></span></button>
      <button class="filter-btn" data-age="Adult" onclick="setAge(this, 'Adult')">Adult</button>
    </div>
    <div class="filter-section">
      <div class="filter-title">Condition</div>
      <button class="filter-btn active" data-cond="" onclick="setCond(this, '')">Any</button>
      <button class="filter-btn" data-cond="Like New" onclick="setCond(this, 'Like New')">Like New</button>
      <button class="filter-btn" data-cond="Very Good" onclick="setCond(this, 'Very Good')">Very Good</button>
      <button class="filter-btn" data-cond="Good" onclick="setCond(this, 'Good')">Good</button>
    </div>
  </div>

  <!-- Book grid -->
  <div class="catalog-main">
    <div class="catalog-toolbar">
      <div class="catalog-count" id="result-count">Loading…</div>
      <select class="catalog-sort" id="sort-select" aria-label="Sort books" onchange="renderBooks()">
        <option value="default">Sort: Default</option>
        <option value="price-asc">Price: Low to High</option>
        <option value="price-desc">Price: High to Low</option>
        <option value="title">Title A–Z</option>
        <option value="author">Author A–Z</option>
      </select>
    </div>
    <div class="catalog-grid" id="book-grid"></div>
  </div>
</div>

<!-- Book detail modal -->
<div class="book-overlay" id="book-overlay" onclick="closeBook(event)">
  <div class="book-modal" id="book-modal">
    <button class="book-modal-close" onclick="closeBookModal()">✕</button>
    <div class="book-modal-top" id="book-modal-top"></div>
    <p class="book-modal-desc" id="book-modal-desc"></p>
  </div>
</div>

<!-- Add/Edit book form modal -->
<div class="form-overlay" id="form-overlay" onclick="closeFormOverlay(event)">
  <div class="form-modal" onclick="event.stopPropagation()">
    <h2 id="form-title">Add Book</h2>
    <input type="hidden" id="form-book-id" />
    <div class="form-row">
      <div class="form-field"><label>Title *</label><input id="f-title" /></div>
      <div class="form-field"><label>Author *</label><input id="f-author" /></div>
    </div>
    <div class="form-row">
      <div class="form-field"><label>Series</label><input id="f-series" /></div>
      <div class="form-field"><label>Series #</label><input id="f-series-num" type="number" /></div>
    </div>
    <div class="form-row">
      <div class="form-field">
        <label>Age Group *</label>
        <select id="f-age">
          <option>Kids</option><option>Middle Grade</option><option>YA</option><option>Adult</option>
        </select>
      </div>
      <div class="form-field"><label>Genre *</label><input id="f-genre" /></div>
    </div>
    <div class="form-row">
      <div class="form-field">
        <label>Condition *</label>
        <select id="f-condition">
          <option>Like New</option><option>Very Good</option><option>Good</option>
        </select>
      </div>
      <div class="form-field"><label>Quantity *</label><input id="f-qty" type="number" value="1" min="0" /></div>
    </div>
    <div class="form-row">
      <div class="form-field"><label>Price ($) *</label><input id="f-price" type="number" step="0.25" min="0.25" /></div>
      <div class="form-field"><label>ISBN</label><input id="f-isbn" /></div>
    </div>
    <div class="form-field">
      <label>Description</label>
      <textarea id="f-desc" rows="3" style="resize:vertical"></textarea>
    </div>
    <div class="form-actions">
      <button class="form-submit" onclick="submitBookForm()">Save Book</button>
      <button class="form-cancel" onclick="closeForm()">Cancel</button>
    </div>
    <p id="form-msg" style="margin:10px 0 0;font-size:0.88rem;display:none"></p>
  </div>
</div>

<!-- AI Chat -->
<button class="ai-fab" onclick="toggleAI()"><span class="ai-fab-dot"></span>Ask AI</button>

<div class="ai-panel" id="ai-panel">
  <div class="ai-panel-header">
    <div>
      <div class="ai-panel-title">📚 AI Book Finder</div>
      <div class="ai-panel-sub">Describe what you're looking for</div>
    </div>
    <button class="ai-panel-close" onclick="toggleAI()">✕</button>
  </div>
  <div class="ai-messages" id="ai-messages"></div>
  <div class="ai-input-row">
    <input class="ai-input" id="ai-input" placeholder="e.g. a scary book for my 10-year-old…"
           onkeydown="if(event.key==='Enter') sendAI()" />
    <button class="ai-send" id="ai-send-btn" onclick="sendAI()">Send</button>
  </div>
</div>

<script>
{


const BACKEND = window.FOPL_BACKEND;

// ── State ──
let allBooks     = [];
let allInventory = [];   // full unfiltered list for similarity fallback
let filtered     = [];
let activeAge    = '';
let activeCond   = '';
let searchQ      = '';

const AGE_COLORS = {
  'Kids':         '#ff9100',
  'Middle Grade': '#d4a853',
  'YA':           '#ce93d8',
};

// ── Full inventory (for similarity fallback) ──
async function loadInventory() {
  try {
    const res = await fetch(`${BACKEND}/api/fopl/books`);
    allInventory = (await res.json());
  } catch {}
}

function wordSet(str) {
  return new Set((str || '').toLowerCase().replace(/[^a-z0-9 ]/g, '').split(/\s+/).filter(Boolean));
}

function similarityScore(query, book) {
  const qWords = wordSet(query);
  let score = 0;
  for (const field of [book.title, book.author, book.genre, book.series]) {
    const fWords = wordSet(field);
    for (const w of qWords) if (fWords.has(w) && w.length > 2) score++;
  }
  // bonus if title contains the full query string
  if (book.title.toLowerCase().includes(query.toLowerCase())) score += 5;
  return score;
}

function findSimilar(query, n = 3) {
  return allInventory
    .map(b => ({ ...b, _score: similarityScore(query, b) }))
    .filter(b => b._score > 0)
    .sort((a, b) => b._score - a._score)
    .slice(0, n);
}

// ── Fetch books ──
async function loadBooks() {
  try {
    const params = new URLSearchParams();
    if (searchQ)    params.set('q', searchQ);
    if (activeAge)  params.set('age', activeAge);
    if (activeCond) params.set('condition', activeCond);
    const res  = await fetch(`${BACKEND}/api/fopl/books?${params}`);
    if (!res.ok) throw new Error('Inventory unavailable');
    allBooks   = (await res.json());
    updateCounts();
    renderBooks();
  } catch {
    document.getElementById('book-grid').innerHTML =
      '<p>Inventory is unavailable. Check that the local Flask server is running, or call 858-513-2862.</p>';
  }
}

// ── Count badges ──
function updateCounts() {
  const all  = allBooks;
  const set  = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val || ''; };
  const full = async () => {
    const r = await fetch(`${BACKEND}/api/fopl/books`);
    const b = await r.json();
    const inventory = b;
    const cnt = g => inventory.filter(x => x.age_group === g).length;
    set('count-all',   inventory.length);
    set('count-kids',  cnt('Kids'));
    set('count-mg',    cnt('Middle Grade'));
    set('count-ya',    cnt('YA'));
  };
  full().catch(() => {});
}

// ── Card template ──
function renderCard(b, isAdmin) {
  const color    = AGE_COLORS[b.age_group] || '#d4a853';
  const initials = b.title.split(' ').slice(0,2).map(w=>w[0]).join('').toUpperCase();
  const condTag  = b.condition === 'Like New' ? 'new' : b.condition === 'Very Good' ? 'vg' : 'good';
  const ageTag   = b.age_group.toLowerCase().replace(' ','');
  const seriesStr = b.series ? `<div class="book-series">${b.series}${b.series_num ? ` #${b.series_num}` : ''}</div>` : '';
  const qtyStr   = b.quantity <= 1 ? `<span class="book-qty low">${b.quantity} left</span>` : `<span class="book-qty">${b.quantity} in stock</span>`;
  const adminBtns = isAdmin ? `
    <div style="display:flex;gap:6px;margin-top:8px">
      <button onclick="event.stopPropagation();openEditForm(${b.id})"
        style="flex:1;padding:5px;font-size:0.75rem;background:rgba(212,168,83,0.1);border:1px solid #d4a853;
               border-radius:3px;cursor:pointer;font-family:Cabin,sans-serif;font-weight:700">Edit</button>
      <button onclick="event.stopPropagation();deleteBook(${b.id})"
        style="flex:1;padding:5px;font-size:0.75rem;background:#fff;border:1px solid #c00;
               border-radius:3px;cursor:pointer;font-family:Cabin,sans-serif;font-weight:700">Delete</button>
    </div>` : '';
  return `
    <div class="book-card" onclick="openBook(${b.id})">
      <div class="book-cover" style="background:${color}">
        ${b.isbn ? `<img src="https://covers.openlibrary.org/b/isbn/${b.isbn}-M.jpg"
                     onerror="this.style.display='none'" loading="lazy" alt="${b.title}" />` : ''}
        <span class="book-cover-letters">${initials}</span>
      </div>
      <div class="book-info">
        <div class="book-title">${b.title}</div>
        <div class="book-author">${b.author}</div>
        ${seriesStr}
        <div class="book-tags">
          <span class="book-tag tag-age-${ageTag}">${b.age_group}</span>
          <span class="book-tag tag-condition-${condTag}">${b.condition}</span>
        </div>
        <div class="book-footer">
          <div class="book-price">$${Number(b.price).toFixed(2)}</div>
          ${qtyStr}
        </div>
        ${adminBtns}
      </div>
    </div>`;
}

// ── Render ──
function renderBooks() {
  const sort = document.getElementById('sort-select').value;
  let books  = [...allBooks];
  if (sort === 'price-asc')  books.sort((a,b) => a.price - b.price);
  if (sort === 'price-desc') books.sort((a,b) => b.price - a.price);
  if (sort === 'title')      books.sort((a,b) => a.title.localeCompare(b.title));
  if (sort === 'author')     books.sort((a,b) => a.author.localeCompare(b.author));

  const count = document.getElementById('result-count');
  count.innerHTML = `Showing <strong>${books.length}</strong> book${books.length !== 1 ? 's' : ''}`;

  const grid    = document.getElementById('book-grid');
  const isAdmin = (JSON.parse(localStorage.getItem('fopl_user') || 'null') || {}).role === 'Admin';

  if (!books.length) {
    if (searchQ) {
      const similar = findSimilar(searchQ);
      if (similar.length) {
        grid.innerHTML =
          `<div class="empty-state" style="grid-column:1/-1">
            <h3>We don't have "${searchQ}" in our inventory</h3>
            <p>Here are some similar titles you might enjoy:</p>
          </div>` +
          similar.map(b => renderCard(b, isAdmin)).join('');
        return;
      }
    }
    grid.innerHTML = `<div class="empty-state"><h3>No books found</h3><p>Try adjusting your search or filters.</p></div>`;
    return;
  }

  grid.innerHTML = books.map(b => renderCard(b, isAdmin)).join('');
}

// ── Filters ──
function setAge(btn, age) {
  document.querySelectorAll('[data-age]').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  activeAge = age;
  loadBooks();
}

function setCond(btn, cond) {
  document.querySelectorAll('[data-cond]').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  activeCond = cond;
  loadBooks();
}

function applySearch() {
  searchQ = document.getElementById('search-input').value.trim();
  loadBooks();
}

document.getElementById('search-input').addEventListener('keydown', e => {
  if (e.key === 'Enter') applySearch();
});

// ── Book detail modal ──
function openBook(id) {
  const b = allBooks.find(x => x.id === id);
  if (!b) return;
  const color   = AGE_COLORS[b.age_group] || '#d4a853';
  const initials= b.title.split(' ').slice(0,2).map(w=>w[0]).join('').toUpperCase();
  const condTag = b.condition === 'Like New' ? 'new' : b.condition === 'Very Good' ? 'vg' : 'good';
  const ageTag  = b.age_group.toLowerCase().replace(' ','');
  const seriesStr = b.series ? `<div style="font-size:0.85rem;font-style:italic;margin-bottom:8px">${b.series}${b.series_num ? ` — Book #${b.series_num}` : ''}</div>` : '';

  document.getElementById('book-modal-top').innerHTML = `
    <div class="book-modal-header">
      <div class="book-modal-cover" style="background:${color}">
        ${b.isbn ? `<img src="https://covers.openlibrary.org/b/isbn/${b.isbn}-M.jpg"
                     onerror="this.style.display='none'" loading="lazy" alt="${b.title}" />` : ''}
        <span style="position:relative;z-index:1;font-size:0.9rem;text-align:center;padding:6px">${initials}</span>
      </div>
      <div class="book-modal-info">
        <h2 class="book-modal-title">${b.title}</h2>
        <p class="book-modal-author">by ${b.author}</p>
        ${seriesStr}
        <div class="book-modal-meta">
          <span class="book-tag tag-age-${ageTag}">${b.age_group}</span>
          <span class="book-tag tag-condition-${condTag}">${b.condition}</span>
          <span class="book-tag" style="background:#e8f5e9;">${b.genre}</span>
        </div>
        <div style="font-size:1.2rem;font-weight:700;font-family:Cabin,sans-serif">
          $${Number(b.price).toFixed(2)}
          <span style="font-size:0.82rem;font-weight:400;margin-left:8px">${b.quantity} in stock</span>
        </div>
      </div>
    </div>`;
  document.getElementById('book-modal-desc').textContent = b.description || '';
  document.getElementById('book-overlay').classList.add('open');
}

function closeBook(e) {
  if (e.target === document.getElementById('book-overlay')) closeBookModal();
}
function closeBookModal() {
  document.getElementById('book-overlay').classList.remove('open');
}

// ── Admin: add/edit form ──
function openAddForm() {
  document.getElementById('form-title').textContent = 'Add Book';
  document.getElementById('form-book-id').value = '';
  ['f-title','f-author','f-series','f-genre','f-isbn','f-desc'].forEach(id => document.getElementById(id).value = '');
  document.getElementById('f-series-num').value = '';
  document.getElementById('f-price').value = '';
  document.getElementById('f-qty').value = 1;
  document.getElementById('f-age').value = 'Kids';
  document.getElementById('f-condition').value = 'Like New';
  document.getElementById('form-msg').style.display = 'none';
  document.getElementById('form-overlay').classList.add('open');
}

function openEditForm(id) {
  const b = allBooks.find(x => x.id === id);
  if (!b) return;
  document.getElementById('form-title').textContent = 'Edit Book';
  document.getElementById('form-book-id').value     = b.id;
  document.getElementById('f-title').value          = b.title;
  document.getElementById('f-author').value         = b.author;
  document.getElementById('f-series').value         = b.series || '';
  document.getElementById('f-series-num').value     = b.series_num || '';
  document.getElementById('f-genre').value          = b.genre;
  document.getElementById('f-age').value            = b.age_group;
  document.getElementById('f-condition').value      = b.condition;
  document.getElementById('f-qty').value            = b.quantity;
  document.getElementById('f-price').value          = b.price;
  document.getElementById('f-isbn').value           = b.isbn || '';
  document.getElementById('f-desc').value           = b.description || '';
  document.getElementById('form-msg').style.display = 'none';
  document.getElementById('form-overlay').classList.add('open');
}

function closeFormOverlay(e) {
  if (e.target === document.getElementById('form-overlay')) closeForm();
}
function closeForm() { document.getElementById('form-overlay').classList.remove('open'); }

async function submitBookForm() {
  const id    = document.getElementById('form-book-id').value;
  const body  = {
    title:      document.getElementById('f-title').value.trim(),
    author:     document.getElementById('f-author').value.trim(),
    series:     document.getElementById('f-series').value.trim() || null,
    series_num: parseInt(document.getElementById('f-series-num').value) || null,
    genre:      document.getElementById('f-genre').value.trim(),
    age_group:  document.getElementById('f-age').value,
    condition:  document.getElementById('f-condition').value,
    quantity:   parseInt(document.getElementById('f-qty').value),
    price:      parseFloat(document.getElementById('f-price').value),
    isbn:       document.getElementById('f-isbn').value.trim() || null,
    description:document.getElementById('f-desc').value.trim() || null,
  };
  if (!body.title || !body.author || !body.genre || !body.price) {
    const msg = document.getElementById('form-msg');
    msg.textContent = 'Please fill in all required fields.';
    msg.style.display = 'block';
    return;
  }
  const method = id ? 'PUT' : 'POST';
  const url    = id ? `${BACKEND}/api/fopl/books/${id}` : `${BACKEND}/api/fopl/books`;
  try {
    const res  = await fetch(url, {
      method, credentials: 'include',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(body),
    });
    const data = await res.json();
    if (!res.ok) { document.getElementById('form-msg').textContent = data.message; document.getElementById('form-msg').style.display='block'; return; }
    closeForm();
    loadBooks();
  } catch { document.getElementById('form-msg').textContent = 'Server error.'; document.getElementById('form-msg').style.display='block'; }
}

async function deleteBook(id) {
  if (!confirm('Delete this book?')) return;
  await fetch(`${BACKEND}/api/fopl/books/${id}`, { method: 'DELETE', credentials: 'include' });
  loadBooks();
}

// ── AI Chat ──
let aiOpen = false;
let aiGreeted = false;

function toggleAI() {
  aiOpen = !aiOpen;
  document.getElementById('ai-panel').classList.toggle('open', aiOpen);
  if (aiOpen && !aiGreeted) {
    addAIMsg('bot', "Hi! I'm your AI book finder 📚 Tell me what kind of book you're looking for — age range, favorite genres, or anything else — and I'll recommend books from our current catalog!");
    aiGreeted = true;
  }
  if (aiOpen) setTimeout(() => document.getElementById('ai-input').focus(), 100);
}

function addAIMsg(type, text) {
  const msgs = document.getElementById('ai-messages');
  const el   = document.createElement('div');
  el.className = `ai-msg ${type}`;
  el.textContent = text;
  msgs.appendChild(el);
  msgs.scrollTop = msgs.scrollHeight;
  return el;
}

async function sendAI() {
  const input = document.getElementById('ai-input');
  const query = input.value.trim();
  if (!query) return;
  input.value = '';
  const btn = document.getElementById('ai-send-btn');
  btn.disabled = true;
  addAIMsg('user', query);
  const typing = addAIMsg('bot typing', '…');
  try {
    const res  = await fetch(`${BACKEND}/api/fopl/books/ai`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ query }),
    });
    const data = await res.json();
    typing.remove();
    if (res.ok) {
      addAIMsg('bot', data.response);
    } else {
      addAIMsg('bot', data.message || 'Sorry, something went wrong.');
    }
  } catch {
    typing.remove();
    addAIMsg('bot', 'Could not reach the server. Please try again.');
  }
  btn.disabled = false;
  input.focus();
}

// ── Admin bar visibility ──
const foplUser = JSON.parse(localStorage.getItem('fopl_user') || 'null');
if (foplUser && foplUser.role === 'Admin') document.getElementById('admin-bar').classList.add('visible');

// expose for onclick attrs
window.setAge         = setAge;
window.setCond        = setCond;
window.applySearch    = applySearch;
window.openBook       = openBook;
window.closeBookModal = closeBookModal;
window.closeBook      = closeBook;
window.toggleAI       = toggleAI;
window.sendAI         = sendAI;
window.openAddForm    = openAddForm;
window.openEditForm   = openEditForm;
window.closeForm      = closeForm;
window.closeFormOverlay = closeFormOverlay;
window.submitBookForm = submitBookForm;
window.deleteBook     = deleteBook;

loadInventory();
loadBooks();
}
</script>
