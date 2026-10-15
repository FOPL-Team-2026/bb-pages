---
layout: fopl
title: Book Scanner — Friends of the Poway Library
permalink: /book-scan
description: Scan book barcodes to add or remove titles from the FOPL catalog.
fopl_nav_active: admin
---

<style>
  body { background: #f4f8f4; }

  .fopl-hero {
    background: #023b0f; color: #fff; text-align: center; padding: 40px 24px 32px;
  }
  .fopl-hero h1 {
    font-family: 'Cabin', sans-serif; font-size: 2rem; font-weight: 700;
    margin: 0 0 6px; color: #fff; border: none; text-transform: uppercase; letter-spacing: 0.04em;
  }
  .fopl-hero p { font-size: 0.95rem; opacity: 0.8; margin: 0; }

  /* ── Auth gate ── */
  #scan-auth-gate {
    max-width: 400px; margin: 64px auto; background: #fff; border-radius: 8px;
    box-shadow: 0 2px 16px rgba(2,59,15,0.10); border-top: 4px solid #023b0f;
    padding: 36px 32px; text-align: center;
  }
  #scan-auth-gate h2 {
    font-family: 'Cabin', sans-serif; font-size: 1rem; font-weight: 700;
    text-transform: uppercase; letter-spacing: 0.08em; color: #023b0f;
    margin: 0 0 8px; border: none;
  }
  #scan-auth-gate p { font-size: 0.88rem; color: #666; margin: 0 0 16px; }
  #scan-auth-gate a {
    display: inline-block; padding: 10px 28px; background: #023b0f; color: #fff;
    border-radius: 4px; font-family: 'Cabin', sans-serif; font-weight: 700;
    font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.06em; text-decoration: none;
  }

  /* ── Main wrap ── */
  #scan-main { display: none; max-width: 760px; margin: 0 auto; padding: 40px 24px 60px; }

  /* ── Mode tabs ── */
  .scan-tabs {
    display: flex; margin-bottom: 28px;
    border: 1.5px solid #023b0f; border-radius: 6px; overflow: hidden;
  }
  .scan-tab {
    flex: 1; padding: 11px; text-align: center;
    font-family: 'Cabin', sans-serif; font-weight: 700; font-size: 0.85rem;
    text-transform: uppercase; letter-spacing: 0.06em; cursor: pointer;
    background: #fff; color: #023b0f; border: none; transition: all 0.15s;
  }
  .scan-tab.active { background: #023b0f; color: #fff; }
  .scan-tab:not(:last-child) { border-right: 1.5px solid #023b0f; }

  /* ── Scan box ── */
  .scan-box {
    background: #fff; border-radius: 8px;
    box-shadow: 0 2px 12px rgba(2,59,15,0.08);
    border-top: 4px solid #023b0f; padding: 28px; margin-bottom: 24px;
  }
  .scan-box-title {
    font-family: 'Cabin', sans-serif; font-size: 0.8rem; font-weight: 700;
    text-transform: uppercase; letter-spacing: 0.1em; color: #023b0f;
    border-bottom: 1px solid #d0e8d0; padding-bottom: 8px; margin: 0 0 20px;
  }

  /* ── ISBN input ── */
  .scan-input-wrap {
    display: flex; gap: 10px; align-items: center;
  }
  #isbn-input {
    flex: 1; border: 2px solid #023b0f; border-radius: 6px;
    padding: 14px 16px; font-size: 1.2rem; font-family: 'Lato', sans-serif;
    outline: none; letter-spacing: 0.05em; background: #f9fdf9;
    transition: box-shadow 0.15s;
  }
  #isbn-input:focus {
    box-shadow: 0 0 0 3px rgba(2,59,15,0.12);
  }
  #isbn-input.ready {
    border-color: #2e7d32; background: #f1f8f1;
  }
  .scan-hint {
    font-size: 0.82rem; color: #888; margin-top: 8px; text-align: center;
  }
  #scan-status {
    margin-top: 14px; font-size: 0.9rem; font-weight: 600;
    min-height: 22px; text-align: center;
  }
  #scan-status.success { color: #2e7d32; }
  #scan-status.error   { color: #b71c1c; }
  #scan-status.loading { color: #555; }

  /* ── Book preview ── */
  #book-preview { display: none; }
  .book-preview-inner { display: flex; gap: 20px; align-items: flex-start; }
  #book-cover {
    width: 80px; flex-shrink: 0; border-radius: 4px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.15); display: none;
  }
  .book-preview-title {
    font-family: 'Cabin', sans-serif; font-size: 1.05rem; font-weight: 700;
    color: #1b3d1e; margin: 0 0 4px;
  }
  .book-preview-author { font-size: 0.88rem; color: #555; margin: 0 0 8px; }
  .book-preview-tag {
    display: inline-block; font-size: 0.7rem; font-weight: 700; text-transform: uppercase;
    letter-spacing: 0.06em; padding: 2px 8px; background: #e8f5e9;
    border: 1px solid #a5d6a7; border-radius: 3px; color: #1b5e20; margin-right: 4px;
  }

  /* ── Form fields ── */
  .scan-form-grid {
    display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-top: 20px;
  }
  .scan-field { display: flex; flex-direction: column; gap: 5px; }
  .scan-field label {
    font-size: 0.72rem; font-weight: 700; text-transform: uppercase;
    letter-spacing: 0.07em; color: #444; font-family: 'Cabin', sans-serif;
  }
  .scan-field input, .scan-field select {
    border: 1.5px solid #c8dcc8; border-radius: 4px; padding: 9px 12px;
    font-size: 0.9rem; font-family: 'Lato', sans-serif; outline: none;
    background: #f9fdf9; transition: border-color 0.15s;
  }
  .scan-field input:focus, .scan-field select:focus {
    border-color: #023b0f; box-shadow: 0 0 0 3px rgba(2,59,15,0.08);
  }

  .scan-submit-row {
    display: flex; align-items: center; gap: 14px; margin-top: 20px; flex-wrap: wrap;
  }
  .scan-submit-btn {
    padding: 11px 32px; background: #023b0f; color: #fff; border: none;
    border-radius: 4px; font-family: 'Cabin', sans-serif; font-weight: 700;
    font-size: 0.88rem; text-transform: uppercase; letter-spacing: 0.06em;
    cursor: pointer; transition: background 0.2s;
  }
  .scan-submit-btn:hover:not(:disabled) { background: #045218; }
  .scan-submit-btn:disabled { opacity: 0.6; cursor: not-allowed; }
  .scan-submit-btn.danger { background: #b71c1c; }
  .scan-submit-btn.danger:hover:not(:disabled) { background: #c62828; }
  .scan-msg { font-size: 0.88rem; font-weight: 600; display: none; }
  .scan-msg.success { color: #2e7d32; }
  .scan-msg.error   { color: #b71c1c; }

  /* ── Remove card ── */
  .remove-card {
    background: #fff3f3; border: 1.5px solid #ef9a9a; border-radius: 6px;
    padding: 16px; margin-top: 20px;
  }
  .remove-card strong { display: block; font-size: 1rem; color: #1b3d1e; margin-bottom: 4px; }
  .remove-card span   { font-size: 0.88rem; color: #555; }

  @media (max-width: 560px) {
    .scan-form-grid { grid-template-columns: 1fr; }
    .book-preview-inner { flex-direction: column; }
  }
</style>

<div class="fopl-hero">
  <h1>Book Scanner</h1>
  <p>Plug in your USB barcode scanner and scan a book to add or remove it from the catalog.</p>
</div>

<div id="scan-auth-gate">
  <h2>Admin Access Required</h2>
  <p>You need to be signed in as an admin to use the scanner.</p>
  <a href="/login">Sign In</a>
</div>

<div id="scan-main">

  <div class="scan-tabs">
    <button class="scan-tab active" id="tab-add">Add Book</button>
    <button class="scan-tab" id="tab-remove">Remove Book</button>
  </div>

  <!-- Scan input -->
  <div class="scan-box">
    <div class="scan-box-title">Scan or Enter ISBN</div>
    <div class="scan-input-wrap">
      <input type="text" id="isbn-input" placeholder="Click here, then scan…" autocomplete="off" inputmode="numeric">
    </div>
    <p class="scan-hint">Click the field above, then scan the barcode. It will look up the book automatically.</p>
    <div id="scan-status"></div>
  </div>

  <!-- ADD section -->
  <div id="add-section">
    <div id="book-preview" class="scan-box">
      <div class="scan-box-title">Book Details</div>
      <div class="book-preview-inner">
        <img id="book-cover" alt="Cover">
        <div>
          <div class="book-preview-title" id="preview-title"></div>
          <div class="book-preview-author" id="preview-author"></div>
          <div id="preview-tags"></div>
        </div>
      </div>
      <form id="add-form">
        <div class="scan-form-grid">
          <div class="scan-field">
            <label>Price ($)</label>
            <input type="number" id="field-price" step="0.25" min="0" placeholder="1.00" required>
          </div>
          <div class="scan-field">
            <label>Quantity</label>
            <input type="number" id="field-quantity" min="1" value="1" required>
          </div>
          <div class="scan-field">
            <label>Condition</label>
            <select id="field-condition" required>
              <option value="" disabled selected>Select</option>
              <option value="Like New">Like New</option>
              <option value="Very Good">Very Good</option>
              <option value="Good">Good</option>
              <option value="Acceptable">Acceptable</option>
            </select>
          </div>
          <div class="scan-field">
            <label>Age Group</label>
            <select id="field-age" required>
              <option value="" disabled selected>Select</option>
              <option value="Kids">Kids</option>
              <option value="Middle Grade">Middle Grade</option>
              <option value="YA">YA</option>
              <option value="Adult">Adult</option>
            </select>
          </div>
        </div>
        <div class="scan-submit-row">
          <button type="submit" class="scan-submit-btn">Add to Catalog</button>
          <span class="scan-msg" id="add-msg"></span>
        </div>
      </form>
    </div>
  </div>

  <!-- REMOVE section -->
  <div id="remove-section" style="display:none;">
    <div id="remove-result" class="scan-box" style="display:none;">
      <div class="scan-box-title">Found in Catalog</div>
      <div class="remove-card">
        <strong id="remove-title"></strong>
        <span id="remove-author"></span> &nbsp;·&nbsp; <span id="remove-qty"></span>
      </div>
      <div class="scan-submit-row" style="margin-top:16px;">
        <button class="scan-submit-btn" id="btn-decrement">Remove 1 Copy</button>
        <button class="scan-submit-btn danger" id="btn-delete">Delete Entirely</button>
        <span class="scan-msg" id="remove-msg"></span>
      </div>
    </div>
    <div id="remove-not-found" class="scan-box" style="display:none;">
      <p style="color:#b71c1c;margin:0;font-size:0.9rem;">This book was not found in the catalog.</p>
    </div>
  </div>

</div>

<script>
(function () {
  const BACKEND = window.FOPL_BACKEND || 'http://127.0.0.1:8321';

  /* ── Auth ── */
  const user = JSON.parse(localStorage.getItem('fopl_user') || 'null');
  if (!user || user.role !== 'Admin') {
    document.getElementById('scan-auth-gate').style.display = 'block';
  } else {
    document.getElementById('scan-auth-gate').style.display = 'none';
    document.getElementById('scan-main').style.display = 'block';
    focusInput();
  }

  /* ── State ── */
  let mode         = 'add';
  let bookData     = null;
  let removeBookId = null;

  /* ── Auto-focus input ── */
  function focusInput() {
    setTimeout(function () { document.getElementById('isbn-input').focus(); }, 100);
  }

  /* ── Mode tabs ── */
  document.getElementById('tab-add').addEventListener('click', function () {
    mode = 'add';
    this.classList.add('active');
    document.getElementById('tab-remove').classList.remove('active');
    document.getElementById('add-section').style.display = 'block';
    document.getElementById('remove-section').style.display = 'none';
    resetAll(); focusInput();
  });
  document.getElementById('tab-remove').addEventListener('click', function () {
    mode = 'remove';
    this.classList.add('active');
    document.getElementById('tab-add').classList.remove('active');
    document.getElementById('remove-section').style.display = 'block';
    document.getElementById('add-section').style.display = 'none';
    resetAll(); focusInput();
  });

  /* ── ISBN input — fires when scanner sends Enter or user hits Enter ── */
  const isbnInput = document.getElementById('isbn-input');

  isbnInput.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      const isbn = isbnInput.value.trim().replace(/[^0-9X]/gi, '');
      if (isbn.length === 10 || isbn.length === 13) {
        isbnInput.classList.add('ready');
        lookupISBN(isbn);
      } else {
        setStatus('Not a valid ISBN. Make sure the cursor is in the field and scan again.', 'error');
      }
    }
  });

  /* USB scanners fire input rapidly then send Enter — debounce handles fast input */
  let debounceTimer;
  isbnInput.addEventListener('input', function () {
    clearTimeout(debounceTimer);
    const val = isbnInput.value.trim().replace(/[^0-9X]/gi, '');
    if (val.length >= 10) {
      debounceTimer = setTimeout(function () {
        if (val.length === 10 || val.length === 13) {
          isbnInput.classList.add('ready');
          lookupISBN(val);
        }
      }, 200);
    }
  });

  /* ── Lookup ── */
  async function lookupISBN(isbn) {
    resetBookUI();
    setStatus('Looking up ISBN ' + isbn + '…', 'loading');

    if (mode === 'remove') {
      await lookupForRemove(isbn);
      return;
    }

    try {
      const res  = await fetch('https://openlibrary.org/api/books?bibkeys=ISBN:' + isbn + '&format=json&jscmd=data');
      const data = await res.json();
      const book = data['ISBN:' + isbn];

      if (!book) {
        setStatus('Book not found in Open Library. Fill in details manually.', 'error');
        showAddForm({ title: '', author: '', genre: '', isbn });
        return;
      }

      const parsed = {
        title:       book.title || '',
        author:      book.authors ? book.authors.map(a => a.name).join(', ') : '',
        genre:       book.subjects && book.subjects.length ? book.subjects[0].name : 'General',
        description: typeof book.notes === 'string' ? book.notes : '',
        isbn,
        cover:       book.cover ? (book.cover.medium || book.cover.small || '') : '',
      };

      setStatus('Found: ' + parsed.title, 'success');
      showAddForm(parsed);

    } catch (e) {
      setStatus('Lookup failed. Fill in details manually.', 'error');
      showAddForm({ title: '', author: '', genre: '', isbn });
    }
  }

  async function lookupForRemove(isbn) {
    try {
      const res   = await fetch(BACKEND + '/api/fopl/books?isbn=' + isbn, { credentials: 'include' });
      const books = await res.json();
      const match = books.find(b => b.isbn === isbn);

      if (!match) {
        setStatus('Not found in catalog.', 'error');
        document.getElementById('remove-not-found').style.display = 'block';
        return;
      }

      removeBookId = match.id;
      setStatus('Found in catalog.', 'success');
      document.getElementById('remove-result').style.display = 'block';
      document.getElementById('remove-title').textContent  = match.title;
      document.getElementById('remove-author').textContent = match.author;
      document.getElementById('remove-qty').textContent    = match.quantity + ' cop' + (match.quantity === 1 ? 'y' : 'ies');

    } catch (e) {
      setStatus('Error reaching backend.', 'error');
    }
  }

  /* ── Show add form ── */
  function showAddForm(book) {
    bookData = book;
    document.getElementById('book-preview').style.display = 'block';
    document.getElementById('preview-title').textContent  = book.title  || 'Unknown Title';
    document.getElementById('preview-author').textContent = book.author || 'Unknown Author';

    const tagsEl = document.getElementById('preview-tags');
    tagsEl.innerHTML = '';
    if (book.genre) {
      tagsEl.innerHTML = '<span class="book-preview-tag">' + book.genre + '</span>';
    }

    const cover = document.getElementById('book-cover');
    if (book.cover) { cover.src = book.cover; cover.style.display = 'block'; }
    else            { cover.style.display = 'none'; }
  }

  /* ── Add form submit ── */
  document.getElementById('add-form').addEventListener('submit', async function (e) {
    e.preventDefault();
    const msg = document.getElementById('add-msg');
    const btn = this.querySelector('button[type="submit"]');

    const payload = {
      title:       bookData.title   || 'Unknown Title',
      author:      bookData.author  || 'Unknown Author',
      genre:       bookData.genre   || 'General',
      age_group:   document.getElementById('field-age').value,
      price:       parseFloat(document.getElementById('field-price').value),
      condition:   document.getElementById('field-condition').value,
      quantity:    parseInt(document.getElementById('field-quantity').value),
      description: bookData.description || '',
      isbn:        bookData.isbn,
    };

    btn.disabled = true; btn.textContent = 'Adding…';

    try {
      const res = await fetch(BACKEND + '/api/fopl/books', {
        method: 'POST', credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) { const e = await res.json(); throw new Error(e.message || res.status); }

      msg.textContent = 'Added to catalog!';
      msg.className = 'scan-msg success'; msg.style.display = 'inline';
      btn.textContent = 'Add to Catalog'; btn.disabled = false;
      setTimeout(function () { resetAll(); focusInput(); }, 1800);

    } catch (err) {
      msg.textContent = 'Error: ' + err.message;
      msg.className = 'scan-msg error'; msg.style.display = 'inline';
      btn.textContent = 'Add to Catalog'; btn.disabled = false;
    }
  });

  /* ── Remove buttons ── */
  document.getElementById('btn-decrement').addEventListener('click', async function () {
    const qtyText = document.getElementById('remove-qty').textContent;
    const current = parseInt(qtyText);
    if (current <= 1) {
      if (!confirm('This is the last copy. Delete the book entirely?')) return;
      await doRemove('delete');
    } else {
      await doRemove('decrement', current - 1);
    }
  });
  document.getElementById('btn-delete').addEventListener('click', async function () {
    if (!confirm('Delete this book entirely from the catalog?')) return;
    await doRemove('delete');
  });

  async function doRemove(type, newQty) {
    const msg = document.getElementById('remove-msg');
    try {
      let res;
      if (type === 'delete') {
        res = await fetch(BACKEND + '/api/fopl/books/' + removeBookId, {
          method: 'DELETE', credentials: 'include',
        });
      } else {
        res = await fetch(BACKEND + '/api/fopl/books/' + removeBookId, {
          method: 'PUT', credentials: 'include',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ quantity: newQty }),
        });
      }
      if (!res.ok) throw new Error('Server error ' + res.status);
      msg.textContent = type === 'delete' ? 'Book deleted.' : 'Copy removed.';
      msg.className = 'scan-msg success'; msg.style.display = 'inline';
      setTimeout(function () { resetAll(); focusInput(); }, 1800);
    } catch (err) {
      msg.textContent = 'Error: ' + err.message;
      msg.className = 'scan-msg error'; msg.style.display = 'inline';
    }
  }

  /* ── Helpers ── */
  function setStatus(text, cls) {
    const el = document.getElementById('scan-status');
    el.textContent = text; el.className = cls;
  }

  function resetBookUI() {
    document.getElementById('book-preview').style.display     = 'none';
    document.getElementById('remove-result').style.display    = 'none';
    document.getElementById('remove-not-found').style.display = 'none';
    document.getElementById('add-msg').style.display          = 'none';
    document.getElementById('remove-msg').style.display       = 'none';
    isbnInput.value = ''; isbnInput.classList.remove('ready');
    bookData = null; removeBookId = null;
  }

  function resetAll() {
    resetBookUI();
    setStatus('', '');
  }

})();
</script>

<div class="fopl-footer">
  &copy; 2025 Friends of the Poway Library &mdash;
  <a href="https://powayfriends.org">powayfriends.org</a>
</div>
