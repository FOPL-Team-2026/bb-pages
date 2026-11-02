---
layout: fopl-section
title: Bookstore
permalink: /bookstore
description: Browse gently used books and request a title from the Friends of the Poway Library bookstore.
fopl_nav_active: bookstore
fopl_section: bookstore
---

<header class="fopl-page-heading">
  <p class="fopl-label">Friends of the Poway Library</p>
  <h1>Library bookstore</h1>
  <p>Gently used books, magazines, DVDs, and puzzles. Purchases support the Poway Library.</p>
</header>

<section class="shop-info" aria-label="Visit the bookstore">
  <div><h2>Location</h2><p>Inside the Poway Branch Library<br>13137 Poway Rd, Poway, CA 92064</p></div>
  <div><h2>Contact &amp; hours</h2><p><a href="tel:8585132862">858-513-2862</a></p><p id="fopl-hours">Call for current bookstore hours.</p></div>
</section>

<section aria-labelledby="inventory-heading">
  <h2 id="inventory-heading">Browse inventory</h2>
  <p>Search donated books by title, author, series, or genre.</p>
  <div class="shop-catalog-controls">
    <label>Search<input type="search" id="bc-search" placeholder="Title, author, series…"></label>
    <label>Age group<select id="bc-age"><option value="">All ages</option><option>Kids</option><option>Middle Grade</option><option>YA</option><option>Adult</option></select></label>
    <label>Condition<select id="bc-condition"><option value="">Any condition</option><option>Like New</option><option>Very Good</option><option>Good</option><option>Fair</option></select></label>
  </div>
  <p id="bc-status" role="status">Loading inventory…</p>
  <div class="shop-catalog-grid" id="bc-grid" data-catalog-url="{{ '/catalog' | relative_url }}"></div>
  <noscript><p>Enable JavaScript to search live inventory. You can call the bookstore for availability.</p></noscript>
  <p><a href="{{ '/catalog' | relative_url }}">Open the full catalog →</a></p>
</section>

<section aria-labelledby="request-heading">
  <h2 id="request-heading">Request a book</h2>
  <p>Tell us which title you are looking for. We can check future donations.</p>
  <form id="book-request-form" class="shop-request-form">
    <label>Book title or author<input type="text" id="fopl-req-title" required></label>
    <label>Your name<input type="text" id="fopl-req-name" autocomplete="name" required></label>
    <label>Phone (optional)<input type="tel" id="fopl-req-phone" autocomplete="tel"></label>
    <button type="submit">Submit request</button>
  </form>
  <p id="fopl-req-msg" role="status"></p>
</section>

<section>
  <h2>Volunteer at the bookstore</h2>
  <p>Help sort donations, organize books, or staff the shop.</p>
  <a href="{{ '/volunteer' | relative_url }}">See volunteer opportunities →</a>
</section>

<script src="{{ '/assets/js/fopl-bookstore.js' | relative_url }}" defer></script>
