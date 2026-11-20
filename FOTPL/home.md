---
layout: fopl
title: Friends of the Poway Library
permalink: /home
description: Friends of the Poway Library — supporting literacy, community programs, and the Poway Library since 1978.
fopl_nav_active: home
fopl_home: true
---

<div class="fopl-workspace">
  <aside class="fopl-sidebar" aria-label="Project sections">
    <p class="fopl-label">AP CSP · Capstone</p>
    <h2>FOPL project</h2>
    <nav aria-label="On this page">
      <a href="#main-content">Home</a>
      <a href="#library">Library &amp; bookstore</a>
      <a href="#about">Our mission</a>
      <a href="#feedback">Community feedback</a>
      <a href="#project-plan">Project phases</a>
    </nav>
    <h3>Explore FOPL</h3>
    <nav aria-label="Library pages">
      <a href="{{ '/catalog' | relative_url }}">Book catalog</a>
      <a href="{{ '/calendar' | relative_url }}">Events calendar</a>
      <a href="{{ '/history' | relative_url }}">Our history</a>
      <a href="{{ '/puzzles' | relative_url }}">Puzzles &amp; games</a>
      <a href="{{ '/contact' | relative_url }}">Contact us</a>
    </nav>
    <p>Built by the FOPL student team with Open Coding Society.</p>
    <a href="https://pages.opencodingsociety.com/csp/week-11/">Week 11 reference →</a>
  </aside>

  <main id="main-content" class="fopl-home" tabindex="-1">
    <header class="fopl-intro">
      <img src="{{ '/FOTPL/Images/fopllogo.png' | relative_url }}" alt="Friends of the Poway Library logo" width="120">
      <div>
        <p class="fopl-label">Supporting literacy since 1978</p>
        <h1>Friends of the Poway Library</h1>
        <p>A nonprofit volunteer organization supporting the Poway Library through fundraising, advocacy, and community programs.</p>
      </div>
    </header>
    <div class="fopl-actions" aria-label="Get started">
      <a class="fopl-button" href="{{ '/bookstore' | relative_url }}">Visit our bookstore</a>
      <a href="{{ '/volunteer' | relative_url }}">Get involved</a>
      <a href="{{ '/puzzles' | relative_url }}">Play games</a>
    </div>
    <p class="fopl-facts">Founded in 1978 · Serving Poway for {{ 'now' | date: '%Y' | minus: 1978 }} years · 501(c)(3) nonprofit</p>

    <section id="library">
      <h2>At the library</h2>
      <div class="fopl-resource-grid">
        <article>
          <h3><a href="{{ '/bookstore' | relative_url }}">Bookstore</a></h3>
          <p>Gently used books, magazines, DVDs, puzzles and more at affordable prices. Browse titles by genre, with new inventory from community donations.</p>
          <a href="{{ '/catalog' | relative_url }}">Browse the catalog →</a>
        </article>
        <article>
          <h3><a href="{{ '/news' | relative_url }}">Newsletters</a></h3>
          <p>Library news, upcoming events, new arrivals, volunteer spotlights, and community stories.</p>
          <a href="{{ '/news' | relative_url }}">Read newsletters →</a>
        </article>
        <article>
          <h3><a href="{{ '/volunteer' | relative_url }}">Volunteer</a></h3>
          <p>Help sort donations, staff the bookstore, and support your community. Flexible schedules are available.</p>
          <a href="{{ '/contact' | relative_url }}">Ask about joining →</a>
        </article>
        <article>
          <h3>Visit us</h3>
          <p>Inside the Poway Branch Library<br>13137 Poway Rd, Poway CA 92064</p>
          <p>Call <a href="tel:8585132862">858-513-2862</a> for hours and directions.</p>
          <a href="{{ '/contact' | relative_url }}">Contact &amp; directions →</a>
        </article>
      </div>
    </section>

    <section id="about">
      <h2>Our mission</h2>
      <p>We are rebuilding the Friends of the Poway Library website to help visitors find books, events, volunteer opportunities, and interactive games. This is our AP CSP capstone project.</p>
      <p><a href="{{ '/history' | relative_url }}">Learn about FOPL’s history →</a></p>
    </section>

    <section id="feedback">
      <h2>Help us improve this project</h2>
      <p>We plan to talk with library visitors, volunteers, and bookstore staff about what they need. Try finding a book or a volunteer opportunity, then tell us what was useful and where you got stuck.</p>
      <p><a href="{{ '/contact' | relative_url }}">Share feedback through our contact page →</a></p>
      <p class="fopl-note">A dedicated survey is planned for Phase 3.</p>
    </section>

    <section id="project-plan">
      <h2>Project phases</h2>
      <ol class="fopl-phases">
        <li><strong>Phase 1 — Homepage &amp; SASS</strong><br>Organize the homepage, simplify navigation, and review it with library users.</li>
        <li><strong>Phase 2 — Full-stack login</strong><br>Review the <a href="{{ '/login' | relative_url }}">existing sign-in flow</a>, account handling, and backend integration.</li>
        <li><strong>Phase 3 — Full-stack survey</strong><br>Build a survey to collect feedback and use responses to decide what to improve next.</li>
      </ol>
    </section>
  </main>
</div>
