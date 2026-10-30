---
layout: fopl
title: Book Catalog — Friends of the Poway Library
permalink: /catalog
description: Browse and search all available books at the Friends of the Poway Library bookstore.
fopl_nav_active: catalog
---

<style>
  body { 
    background: #0f1a12;
    background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='5' result='noise' /%3E%3CfeColorMatrix in='noise' type='saturate' values='0' /%3E%3CfeBlend in='SourceGraphic' in2='noise' mode='screen' /%3E%3C/filter%3E%3C/defs%3E%3Crect width='100' height='100' fill='%230f1a12' opacity='0.96' filter='url(%23noise)' /%3E%3C/svg%3E");
  }

  .fopl-logo-wrap img { height: 90px; }

  /* ── Particles ── */
  .catalog-particles { position: fixed; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; z-index: 0; }
  .catalog-particle {
    position: absolute; font-family: 'Libre Baskerville', serif; font-size: 2rem;
    opacity: 0.05; animation: float-particle 20s infinite ease-in-out;
    color: #d4a853; text-shadow: 0 0 20px rgba(212, 168, 83, 0.3);
  }
  @keyframes float-particle {
    0%, 100% { transform: translateY(0) translateX(0) rotateZ(0deg); }
    25% { transform: translateY(-20px) translateX(10px) rotateZ(90deg); }
    50% { transform: translateY(-40px) translateX(-10px) rotateZ(180deg); }
    75% { transform: translateY(-20px) translateX(-20px) rotateZ(270deg); }
  }

  /* ── Hero ── */
  .catalog-hero {
    background: linear-gradient(135deg, rgba(15, 26, 18, 0.95) 0%, rgba(50, 60, 45, 0.85) 100%);
    backdrop-filter: blur(10px);
    padding: 60px 32px 48px; color: #fff;
    text-align: center; position: relative; z-index: 1;
    border-bottom: 1px solid rgba(212, 168, 83, 0.15);
  }
  .catalog-hero h1 {
    font-family: 'Libre Baskerville', serif; font-size: 2.8rem; font-weight: 700;
    text-transform: capitalize; letter-spacing: 0.02em; margin: 0 0 12px; border: none; 
    color: #d4a853; text-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
  }
  .catalog-hero-label {
    font-family: 'Cabin', sans-serif; font-size: 0.7rem; font-weight: 700;
    text-transform: uppercase; letter-spacing: 0.1em; color: #d4a853;
    opacity: 0.9; margin-bottom: 8px;
  }
  .catalog-hero-sub {
    font-size: 0.95rem; color: rgba(224, 189, 112, 0.8); margin: 0 0 24px;
    letter-spacing: 0.01em; font-weight: 300;
  }
  .catalog-search-wrap { display: flex; gap: 10px; max-width: 650px; margin: 0 auto; }
  .catalog-search {
    flex: 1; padding: 14px 20px; border: 1px solid rgba(212, 168, 83, 0.3);
    border-radius: 50px; font-family: 'Lato', sans-serif; font-size: 0.95rem;
    outline: none; background: rgba(255, 255, 255, 0.08);
    color: #fff; backdrop-filter: blur(10px);
    transition: all 0.3s ease; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  }
  .catalog-search::placeholder { color: rgba(224, 189, 112, 0.5); }
  .catalog-search:focus {
    background: rgba(255, 255, 255, 0.12);
    border-color: rgba(212, 168, 83, 0.6);
    box-shadow: 0 8px 32px rgba(212, 168, 83, 0.2);
  }
  .catalog-search-btn {
    padding: 14px 32px; background: #d4a853; color: #0f1a12; border: none;
    border-radius: 50px; font-family: 'Cabin', sans-serif; font-weight: 700;
    font-size: 0.88rem; text-transform: uppercase; letter-spacing: 0.05em; cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 6px 20px rgba(212, 168, 83, 0.3);
  }
  .catalog-search-btn:hover { 
    background: #e0bd70;
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(212, 168, 83, 0.4);
  }

  /* ── Layout ── */
  .catalog-body { display: flex; gap: 0; min-height: 60vh; position: relative; z-index: 1; }

  /* ── Sidebar ── */
  .catalog-sidebar {
    width: 240px; min-width: 240px; 
    background: rgba(255, 255, 255, 0.04);
    backdrop-filter: blur(10px);
    border-right: 1px solid rgba(212, 168, 83, 0.15); 
    padding: 28px 24px;
    box-shadow: inset 0 1px 0 rgba(212, 168, 83, 0.1);
  }
  .filter-section { margin-bottom: 28px; }
  .filter-title {
    font-family: 'Cabin', sans-serif; font-size: 0.7rem; font-weight: 700;
    text-transform: uppercase; letter-spacing: 0.1em; color: #d4a853;
    margin-bottom: 12px; opacity: 0.9;
  }
  .filter-btn {
    display: block; width: 100%; text-align: left; padding: 10px 12px;
    background: rgba(212, 168, 83, 0.05); border: 1px solid rgba(212, 168, 83, 0.1);
    border-radius: 6px; cursor: pointer;
    font-family: 'Lato', sans-serif; font-size: 0.9rem; color: #d4a853;
    transition: all 0.2s ease; margin-bottom: 4px;
  }
  .filter-btn:hover { 
    background: rgba(212, 168, 83, 0.18);
    border-color: rgba(212, 168, 83, 0.4);
    color: #fff;
  }
  .filter-btn.active { 
    background: #d4a853; color: #0f1a12; font-weight: 700; 
    box-shadow: 0 4px 12px rgba(212, 168, 83, 0.3);
    border-color: #d4a853;
  }
  .filter-count {
    float: right; font-size: 0.75rem; opacity: 0.7;
    background: rgba(212, 168, 83, 0.15); padding: 2px 8px; border-radius: 10px;
  }
  .filter-btn.active .filter-count { background: rgba(15, 26, 18, 0.3); opacity: 1; }

  /* ── Main ── */
  .catalog-main { flex: 1; padding: 28px; overflow: visible; background: rgba(255, 255, 255, 0.02); }
  .catalog-toolbar {
    display: flex; align-items: center; justify-content: space-between;
    margin-bottom: 24px; flex-wrap: wrap; gap: 12px;
  }
  .catalog-count { font-size: 0.9rem; color: #d4a853; }
  .catalog-count strong { color: #e0bd70; font-weight: 700; }
  .catalog-sort {
    padding: 10px 16px; border: 1px solid rgba(212, 168, 83, 0.3);
    border-radius: 6px; font-family: 'Lato', sans-serif; font-size: 0.9rem;
    background: rgba(255, 255, 255, 0.05); color: #d4a853; cursor: pointer;
    transition: all 0.2s ease; backdrop-filter: blur(10px);
  }
  .catalog-sort:focus { 
    border-color: #d4a853; outline: none;
    background: rgba(212, 168, 83, 0.1);
  }
  .catalog-sort option { background: #0f1a12; color: #d4a853; }

  /* ── Book Grid ── */
  .catalog-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 20px;
  }
  .book-card {
    background: rgba(255, 255, 255, 0.06);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(212, 168, 83, 0.2);
    border-radius: 10px;
    overflow: hidden; display: flex; flex-direction: column;
    transition: all 0.3s ease; cursor: pointer;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
    position: relative;
  }
  .book-card::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background: linear-gradient(135deg, rgba(212, 168, 83, 0.1) 0%, transparent 50%);
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
    z-index: 2;
  }
  .book-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 16px 48px rgba(212, 168, 83, 0.25);
    border-color: rgba(212, 168, 83, 0.4);
  }
  .book-card:hover::before { opacity: 1; }
  .book-cover {
    height: 160px; display: flex; align-items: center; justify-content: center;
    font-family: 'Libre Baskerville', serif; font-size: 1.2rem; font-weight: 700;
    color: #fff; letter-spacing: 0.05em;
    position: relative; overflow: hidden;
  }
  .book-cover-letters { position: relative; z-index: 1; text-shadow: 0 4px 12px rgba(0, 0, 0, 0.5); }
  .book-cover img {
    position: absolute; inset: 0; width: 100%; height: 100%;
    object-fit: cover; object-position: top;
  }
  .book-info { padding: 18px; flex: 1; display: flex; flex-direction: column; gap: 8px; position: relative; z-index: 1; }
  .book-title {
    font-family: 'Libre Baskerville', serif; font-size: 0.95rem; font-weight: 700;
    color: #e0bd70; line-height: 1.3; margin: 0;
  }
  .book-author { font-size: 0.82rem; color: rgba(224, 189, 112, 0.7); margin: 0; }
  .book-series { font-size: 0.78rem; color: rgba(212, 168, 83, 0.6); font-style: italic; }
  .book-tags { display: flex; flex-wrap: wrap; gap: 4px; margin-top: 4px; }
  .book-tag {
    font-size: 0.65rem; font-weight: 700; text-transform: uppercase;
    letter-spacing: 0.04em; padding: 3px 8px; border-radius: 12px; border: 1px solid;
  }
  .tag-age-kids        { background: rgba(230, 81, 0, 0.15); color: #ff9100; border-color: rgba(255, 145, 0, 0.3); }
  .tag-age-middle      { background: rgba(212, 168, 83, 0.15); color: #d4a853; border-color: rgba(212, 168, 83, 0.3); }
  .tag-age-ya          { background: rgba(156, 39, 176, 0.15); color: #ce93d8; border-color: rgba(206, 147, 216, 0.3); }
  .tag-condition-new   { background: rgba(76, 175, 80, 0.15); color: #81c784; border-color: rgba(129, 199, 132, 0.3); }
  .tag-condition-good  { background: rgba(255, 193, 7, 0.15); color: #ffd54f; border-color: rgba(255, 213, 79, 0.3); }
  .tag-condition-vg    { background: rgba(33, 150, 243, 0.15); color: #64b5f6; border-color: rgba(100, 181, 246, 0.3); }
  .book-footer { display: flex; align-items: center; justify-content: space-between; margin-top: auto; padding-top: 8px; border-top: 1px solid rgba(212, 168, 83, 0.1); }
  .book-price { font-family: 'Cabin', sans-serif; font-size: 1.1rem; font-weight: 700; color: #d4a853; }
  .book-qty { font-size: 0.75rem; color: rgba(212, 168, 83, 0.6); }
  .book-qty.low { color: #ff6b6b; font-weight: 700; }

  /* ── Book detail modal ── */
  .book-overlay {
    display: none; position: fixed; inset: 0;
    background: rgba(0, 0, 0, 0.7); z-index: 400; align-items: center; justify-content: center;
    backdrop-filter: blur(4px);
  }
  .book-overlay.open { display: flex; }
  .book-modal {
    background: linear-gradient(135deg, rgba(30, 40, 35, 0.98) 0%, rgba(50, 60, 45, 0.95) 100%);
    border: 1px solid rgba(212, 168, 83, 0.2);
    border-radius: 16px; width: 90%; max-width: 520px;
    max-height: 88vh; overflow-y: auto; position: relative;
    box-shadow: 0 25px 60px rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(10px);
  }
  .book-modal-top { padding: 28px 32px 0; }
  .book-modal-close {
    position: absolute; top: 16px; right: 20px;
    background: rgba(212, 168, 83, 0.2); border: 1px solid rgba(212, 168, 83, 0.3);
    border-radius: 50%; width: 36px; height: 36px;
    font-size: 1.2rem; cursor: pointer; color: #d4a853;
    transition: all 0.2s ease; display: flex; align-items: center; justify-content: center;
  }
  .book-modal-close:hover { background: #d4a853; color: #0f1a12; }
  .book-modal-cover {
    width: 100px; height: 150px; border-radius: 6px; flex-shrink: 0;
    display: flex; align-items: center; justify-content: center;
    font-family: 'Libre Baskerville', serif; font-size: 1rem; font-weight: 700;
    color: #fff; overflow: hidden; position: relative;
    box-shadow: 0 8px 24px rgba(212, 168, 83, 0.2);
  }
  .book-modal-cover img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; }
  .book-modal-header { display: flex; gap: 20px; margin-bottom: 20px; }
  .book-modal-info { flex: 1; }
  .book-modal-title {
    font-family: 'Libre Baskerville', serif; font-size: 1.3rem; font-weight: 700;
    color: #e0bd70; margin: 0 0 4px; border: none;
  }
  .book-modal-author { color: rgba(224, 189, 112, 0.8); margin: 0 0 8px; font-size: 0.95rem; }
  .book-modal-meta { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 12px; }
  .book-modal-desc { font-size: 0.95rem; line-height: 1.7; color: rgba(224, 189, 112, 0.9); padding: 0 32px 24px; }

  /* ── Admin bar ── */
  .admin-bar {
    display: none; background: linear-gradient(90deg, rgba(212, 168, 83, 0.15) 0%, rgba(212, 168, 83, 0.05) 100%);
    border-bottom: 1px solid rgba(212, 168, 83, 0.2);
    padding: 12px 24px; align-items: center; justify-content: space-between; gap: 12px; position: relative; z-index: 1;
  }
  .admin-bar.visible { display: flex; }
  .admin-bar span { font-size: 0.88rem; color: #d4a853; font-weight: 600; }
  .add-book-btn {
    padding: 10px 24px; background: #d4a853; color: #0f1a12; border: none; border-radius: 6px;
    font-family: 'Cabin', sans-serif; font-weight: 700; font-size: 0.82rem;
    text-transform: uppercase; cursor: pointer; transition: all 0.2s;
  }
  .add-book-btn:hover { background: #e0bd70; transform: translateY(-1px); }

  /* ── Form modal ── */
  .form-overlay {
    display: none; position: fixed; inset: 0;
    background: rgba(0, 0, 0, 0.7); z-index: 500; align-items: center; justify-content: center;
    backdrop-filter: blur(4px);
  }
  .form-overlay.open { display: flex; }
  .form-modal {
    background: linear-gradient(135deg, rgba(30, 40, 35, 0.98) 0%, rgba(50, 60, 45, 0.95) 100%);
    border: 1px solid rgba(212, 168, 83, 0.2);
    border-radius: 16px; width: 90%; max-width: 500px;
    max-height: 90vh; overflow-y: auto; padding: 32px;
    box-shadow: 0 25px 60px rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(10px);
  }
  .form-modal h2 {
    font-family: 'Libre Baskerville', serif; font-size: 1.3rem; font-weight: 700;
    text-transform: capitalize; letter-spacing: 0.01em; color: #e0bd70; margin: 0 0 24px; border: none;
  }
  .form-field { margin-bottom: 16px; }
  .form-field label {
    display: block; font-size: 0.75rem; font-weight: 700;
    text-transform: uppercase; letter-spacing: 0.08em; color: #d4a853; margin-bottom: 6px;
  }
  .form-field input, .form-field select, .form-field textarea {
    width: 100%; padding: 12px 16px; border: 1px solid rgba(212, 168, 83, 0.3);
    border-radius: 6px; font-family: 'Lato', sans-serif; font-size: 0.95rem;
    outline: none; background: rgba(255, 255, 255, 0.05);
    color: #d4a853; transition: all 0.2s;
  }
  .form-field input::placeholder { color: rgba(212, 168, 83, 0.4); }
  .form-field input:focus, .form-field select:focus, .form-field textarea:focus {
    border-color: #d4a853; background: rgba(212, 168, 83, 0.1);
    box-shadow: 0 0 0 3px rgba(212, 168, 83, 0.15);
  }
  .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
  .form-actions { display: flex; gap: 12px; margin-top: 24px; }
  .form-submit {
    flex: 1; padding: 12px; background: #d4a853; color: #0f1a12; border: none;
    border-radius: 6px; font-family: 'Cabin', sans-serif; font-weight: 700;
    font-size: 0.88rem; text-transform: uppercase; cursor: pointer;
    transition: all 0.2s;
  }
  .form-submit:hover { background: #e0bd70; transform: translateY(-2px); }
  .form-cancel {
    padding: 12px 20px; background: rgba(212, 168, 83, 0.1); border: 1px solid rgba(212, 168, 83, 0.3);
    border-radius: 6px; font-family: 'Cabin', sans-serif; font-weight: 700; font-size: 0.88rem;
    text-transform: uppercase; cursor: pointer; color: #d4a853; transition: all 0.2s;
  }
  .form-cancel:hover { background: rgba(212, 168, 83, 0.2); }

  /* ── AI Chat ── */
  .ai-fab {
    position: fixed; bottom: 28px; right: 28px; z-index: 300;
    background: #d4a853; color: #0f1a12; border: none; border-radius: 50px;
    padding: 14px 24px; font-family: 'Cabin', sans-serif; font-weight: 700;
    font-size: 0.88rem; text-transform: uppercase; letter-spacing: 0.05em;
    cursor: pointer; box-shadow: 0 6px 24px rgba(212, 168, 83, 0.4);
    display: flex; align-items: center; gap: 8px; transition: all 0.2s;
  }
  .ai-fab:hover { transform: translateY(-3px); box-shadow: 0 10px 32px rgba(212, 168, 83, 0.5); }
  .ai-fab-dot {
    width: 8px; height: 8px; border-radius: 50%; background: #0f1a12;
    animation: pulse 2s infinite;
  }
  @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }

  .ai-panel {
    display: none; position: fixed; bottom: 90px; right: 28px; z-index: 300;
    width: 380px; max-width: calc(100vw - 40px);
    background: linear-gradient(135deg, rgba(30, 40, 35, 0.98) 0%, rgba(50, 60, 45, 0.95) 100%);
    border: 1px solid rgba(212, 168, 83, 0.2);
    border-radius: 16px;
    box-shadow: 0 12px 48px rgba(0, 0, 0, 0.4); overflow: hidden;
    flex-direction: column; backdrop-filter: blur(10px);
  }
  .ai-panel.open { display: flex; }
  .ai-panel-header {
    background: rgba(212, 168, 83, 0.15); color: #d4a853; padding: 16px 20px;
    display: flex; align-items: center; justify-content: space-between;
    border-bottom: 1px solid rgba(212, 168, 83, 0.2);
  }
  .ai-panel-title {
    font-family: 'Libre Baskerville', serif; font-weight: 700; font-size: 1rem;
    text-transform: capitalize; letter-spacing: 0.01em;
  }
  .ai-panel-sub { font-size: 0.78rem; opacity: 0.8; margin-top: 2px; }
  .ai-panel-close {
    background: none; border: none; color: #d4a853; font-size: 1.2rem;
    cursor: pointer; line-height: 1; padding: 0;
  }
  .ai-messages {
    flex: 1; overflow-y: auto; padding: 16px; display: flex;
    flex-direction: column; gap: 12px; max-height: 340px; min-height: 200px;
  }
  .ai-msg { max-width: 85%; padding: 12px 14px; border-radius: 12px; font-size: 0.9rem; line-height: 1.5; }
  .ai-msg.bot { background: rgba(212, 168, 83, 0.1); color: #d4a853; align-self: flex-start; border-bottom-left-radius: 4px; }
  .ai-msg.user { background: #d4a853; color: #0f1a12; align-self: flex-end; border-bottom-right-radius: 4px; font-weight: 500; }
  .ai-msg.typing { color: rgba(212, 168, 83, 0.6); font-style: italic; }
  .ai-input-row { display: flex; gap: 8px; padding: 12px 14px; border-top: 1px solid rgba(212, 168, 83, 0.2); }
  .ai-input {
    flex: 1; padding: 10px 14px; border: 1px solid rgba(212, 168, 83, 0.3);
    border-radius: 20px; font-family: 'Lato', sans-serif; font-size: 0.9rem;
    outline: none; background: rgba(255, 255, 255, 0.05);
    color: #d4a853; transition: all 0.2s;
  }
  .ai-input::placeholder { color: rgba(212, 168, 83, 0.4); }
  .ai-input:focus { border-color: #d4a853; background: rgba(212, 168, 83, 0.1); }
  .ai-send {
    padding: 10px 18px; background: #d4a853; color: #0f1a12; border: none;
    border-radius: 20px; font-family: 'Cabin', sans-serif; font-weight: 700;
    font-size: 0.82rem; cursor: pointer; transition: all 0.2s;
  }
  .ai-send:hover { background: #e0bd70; transform: translateY(-1px); }
  .ai-send:disabled { background: rgba(212, 168, 83, 0.3); cursor: not-allowed; }

  .empty-state { text-align: center; padding: 60px 20px; color: rgba(212, 168, 83, 0.6); }
  .empty-state h3 { font-family: 'Libre Baskerville', serif; color: #e0bd70; margin-bottom: 8px; border: none; }

  /* ── Scrollbar ── */
  .catalog-grid::-webkit-scrollbar { width: 8px; }
  .catalog-grid::-webkit-scrollbar-track { background: rgba(212, 168, 83, 0.05); border-radius: 10px; }
  .catalog-grid::-webkit-scrollbar-thumb { background: rgba(212, 168, 83, 0.3); border-radius: 10px; }
  .catalog-grid::-webkit-scrollbar-thumb:hover { background: rgba(212, 168, 83, 0.5); }

  .fopl-dark .catalog-grid::-webkit-scrollbar-thumb { background: rgba(212, 168, 83, 0.4); }
  .fopl-dark .catalog-grid::-webkit-scrollbar-thumb:hover { background: rgba(212, 168, 83, 0.6); }

  @media (max-width: 700px) {
    .catalog-sidebar { display: none; }
    .catalog-grid { grid-template-columns: repeat(auto-fill, minmax(160px, 1fr)); gap: 14px; }
    .book-cover { height: 130px; }
    .ai-panel { width: calc(100vw - 32px); }
  }
</style>

<!-- Particles -->
<div class="catalog-particles" id="particles-container"></div>

<!-- Hero / search -->
<div class="catalog-hero">
  <div class="catalog-hero-label">Explore Our Collection</div>
  <h1>Browse Our Library</h1>
  <p class="catalog-hero-sub">Discover thousands of carefully curated books, puzzles, DVDs, and more—all at affordable prices</p>
  <div class="catalog-search-wrap">
    <input class="catalog-search" id="search-input" type="text"
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
      <button class="filter-btn" data-age="" onclick="setAge(this, '')">All Ages <span class="filter-count" id="count-all"></span></button>
      <button class="filter-btn" data-age="Kids" onclick="setAge(this, 'Kids')">Kids (4–10) <span class="filter-count" id="count-kids"></span></button>
      <button class="filter-btn" data-age="Middle Grade" onclick="setAge(this, 'Middle Grade')">Middle Grade <span class="filter-count" id="count-mg"></span></button>
      <button class="filter-btn active" data-age="YA" onclick="setAge(this, 'YA')">Young Adult <span class="filter-count" id="count-ya"></span></button>
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
      <select class="catalog-sort" id="sort-select" onchange="renderBooks()">
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
          <option>Kids</option><option>Middle Grade</option><option>YA</option>
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
    <p id="form-msg" style="margin:10px 0 0;font-size:0.88rem;color:#c00;display:none"></p>
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
// ── Floating letter particles ──
const glyphs = ['✦', '✧', '§', '※', '‖', '❧', '⬥', '◆', '❋', '✵', '✶', '✸', '✺', '✿'];
function generateParticles() {
  const container = document.getElementById('particles-container');
  if (!container) return;
  for (let i = 0; i < 12; i++) {
    const el = document.createElement('div');
    el.className = 'catalog-particle';
    el.textContent = glyphs[Math.floor(Math.random() * glyphs.length)];
    el.style.left = Math.random() * 100 + '%';
    el.style.top = Math.random() * 100 + '%';
    el.style.animationDuration = (15 + Math.random() * 15) + 's';
    el.style.animationDelay = Math.random() * 5 + 's';
    container.appendChild(el);
  }
}
generateParticles();

const BACKEND = window.FOPL_BACKEND;

// ── State ──
let allBooks     = [];
let allInventory = [];   // full unfiltered list for similarity fallback
let filtered     = [];
let activeAge    = 'YA';
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
    allInventory = (await res.json()).filter(b => b.age_group !== 'Adult');
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
  const grid = document.getElementById('book-grid');
  const count = document.getElementById('result-count');

  count.textContent = 'Loading books…';
  grid.innerHTML =
    '<div class="empty-state" style="grid-column:1/-1" role="status"><h3>Loading books…</h3><p>Please wait while we retrieve the catalog.</p></div>';

  try {
    const params = new URLSearchParams();
    if (searchQ) params.set('q', searchQ);
    if (activeAge) params.set('age', activeAge);
    if (activeCond) params.set('condition', activeCond);

    const res = await fetch(`${BACKEND}/api/fopl/books?${params}`);
    if (!res.ok) throw new Error('Catalog request failed');

    const data = await res.json();
    if (!Array.isArray(data)) throw new Error('Unexpected catalog response');

    allBooks = data.filter(book => book.age_group !== 'Adult');
    updateCounts();
    renderBooks();
  } catch (error) {
    count.textContent = 'Catalog unavailable';
    grid.innerHTML =
      '<div class="empty-state" style="grid-column:1/-1" role="alert"><h3>We couldn’t load the catalog</h3><p>Please check your connection and refresh the page to try again.</p></div>';
    console.error('Could not load the catalog:', error);
  }
}

// ── Count badges ──
function updateCounts() {
  const all  = allBooks;
  const set  = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val || ''; };
  const full = async () => {
    const r = await fetch(`${BACKEND}/api/fopl/books`);
    const b = await r.json();
    const nonAdult = b.filter(x => x.age_group !== 'Adult');
    const cnt = g => nonAdult.filter(x => x.age_group === g).length;
    set('count-all',   nonAdult.length);
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
               color:#d4a853;border-radius:3px;cursor:pointer;font-family:Cabin,sans-serif;font-weight:700">Edit</button>
      <button onclick="event.stopPropagation();deleteBook(${b.id})"
        style="flex:1;padding:5px;font-size:0.75rem;background:#fff;border:1px solid #c00;
               color:#c00;border-radius:3px;cursor:pointer;font-family:Cabin,sans-serif;font-weight:700">Delete</button>
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
          <div class="book-price">$${b.price.toFixed(2)}</div>
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
  const seriesStr = b.series ? `<div style="font-size:0.85rem;color:#888;font-style:italic;margin-bottom:8px">${b.series}${b.series_num ? ` — Book #${b.series_num}` : ''}</div>` : '';

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
          <span class="book-tag" style="background:#e8f5e9;color:#1b5e20">${b.genre}</span>
        </div>
        <div style="font-size:1.2rem;font-weight:700;color:#d4a853;font-family:Cabin,sans-serif">
          $${b.price.toFixed(2)}
          <span style="font-size:0.82rem;font-weight:400;color:rgba(212,168,83,0.6);margin-left:8px">${b.quantity} in stock</span>
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
