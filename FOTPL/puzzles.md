---
layout: fopl-section
title: Puzzles — Friends of the Poway Library
permalink: /puzzles
description: Play word games and puzzles from the Friends of the Poway Library.
fopl_section: puzzles
fopl_nav_active: puzzles
---



<div class="fopl-hero">
  <span class="hero-kicker">Poway Library Game Hub</span>
  <h1>Puzzles &amp; Games</h1>
  <p>Challenge your mind. Track your streaks. Beat your high scores.</p>
</div>

<div class="fopl-overall">
  <div class="overall-card">
    <h2 class="overall-title">Overall Progress</h2>
    <div class="overall-grid">
      <div class="overall-stat"><div class="overall-stat-num" id="overall-level">1</div><div class="overall-stat-lbl">Level</div></div>
      <div class="overall-stat"><div class="overall-stat-num" id="overall-xp">0</div><div class="overall-stat-lbl">Total XP</div></div>
      <div class="overall-stat"><div class="overall-stat-num" id="overall-sessions">0</div><div class="overall-stat-lbl">Sessions</div></div>
      <div class="overall-stat"><div class="overall-stat-num" id="overall-wins">0%</div><div class="overall-stat-lbl">Win Rate</div></div>
    </div>
    <div class="overall-progress">
      <div class="overall-progress-top">
        <span id="overall-next-label">Progress To Level 2</span>
        <span id="overall-next-xp">0 / 500 XP</span>
      </div>
      <div class="overall-progress-track">
        <div class="overall-progress-fill" id="overall-progress-fill"></div>
      </div>
    </div>
  </div>
</div>

<div class="fopl-games">

  <div class="game-card">
    <div class="game-card-icon">WDL</div>
    <span class="game-card-badge">Live</span>
    <h2>PinShelf</h2>
    <p>A clue-based daily challenge inspired by Pinpoint. Guess the hidden library word as clues unlock.</p>
    <div class="game-meta">
      <span class="game-chip">Daily</span>
      <span class="game-chip">Word</span>
      <span class="game-chip">Logic</span>
    </div>
    <a class="play-btn" href="{{ '/wordle' | relative_url }}">Play Now</a>
  </div>

  <div class="game-card">
    <div class="game-card-icon">TRV</div>
    <span class="game-card-badge">Live</span>
    <h2>Book Trivia</h2>
    <p>How well do you know classic literature? Test your knowledge with daily book trivia questions.</p>
    <div class="game-meta">
      <span class="game-chip">Daily</span>
      <span class="game-chip">Quiz</span>
      <span class="game-chip">Classics</span>
    </div>
    <a class="play-btn" href="{{ '/book-trivia' | relative_url }}">Play Now</a>
  </div>

  <div class="game-card">
    <div class="game-card-icon">COV</div>
    <span class="game-card-badge">New</span>
    <h2>Cover Guessr</h2>
    <p>Blurred book covers, rotating clues, and a score that rewards bold guesses before the cover is fully revealed.</p>
    <div class="game-meta">
      <span class="game-chip">Books</span>
      <span class="game-chip">Puzzle</span>
      <span class="game-chip">Covers</span>
    </div>
    <a class="play-btn" href="{{ '/cover-guessr' | relative_url }}">Play Now</a>
  </div>

  <div class="game-card">
    <div class="game-card-icon">SCR</div>
    <span class="game-card-badge">Live</span>
    <h2>Word Scramble</h2>
    <p>Unscramble a new word each day. Earn bonus points for finding it fast.</p>
    <div class="game-meta">
      <span class="game-chip">Speed</span>
      <span class="game-chip">Word</span>
      <span class="game-chip">Daily</span>
    </div>
    <a class="play-btn" href="{{ '/word-scramble' | relative_url }}">Play Now</a>
  </div>

  <div class="game-card">
    <div class="game-card-icon">RUN</div>
    <span class="game-card-badge">Live</span>
    <h2>Library Shelf Run</h2>
    <p>Control the cart, collect misplaced books, and shelve each one in the right call-number zone.</p>
    <div class="game-meta">
      <span class="game-chip">Arcade</span>
      <span class="game-chip">Sorting</span>
      <span class="game-chip">Keyboard</span>
    </div>
    <a class="play-btn" href="{{ '/library-shelf-run' | relative_url }}">Play Now</a>
  </div>

  <div class="game-card">
    <div class="game-card-icon">📸</div>
    <span class="game-card-badge">New</span>
    <h2>Famous Face Match</h2>
    <p>Scan your face and discover which famous author you resemble — then find their book at the library!</p>
    <div class="game-meta">
      <span class="game-chip">Camera</span>
      <span class="game-chip">Fun</span>
      <span class="game-chip">Books</span>
    </div>
    <a class="play-btn" href="{{ '/face-match' | relative_url }}">Play Now</a>
  </div>

  <div class="game-card">
    <div class="game-card-icon">🎮</div>
    <span class="game-card-badge">New</span>
    <h2>Library Dodge</h2>
    <p>Run through the library and dodge flying books! Move, jump, and duck to survive as the books get faster.</p>
    <div class="game-meta">
      <span class="game-chip">Arcade</span>
      <span class="game-chip">Action</span>
      <span class="game-chip">Keyboard</span>
    </div>
    <a class="play-btn" href="{{ '/library-dodge' | relative_url }}">Play Now</a>
  </div>

</div>

<script>
{
  const overall = JSON.parse(localStorage.getItem('fopl_games_overall_v1') || '{"xp":0,"sessions":0,"wins":0}');
  const sessions = Number(overall.sessions || 0);
  const wins = Number(overall.wins || 0);
  const xp = Number(overall.xp || 0);
  const winPct = sessions ? Math.round((wins / sessions) * 100) : 0;
  const level = Math.floor(xp / 500) + 1;
  const xpInLevel = xp % 500;
  const xpNext = 500;
  const progressPct = Math.max(0, Math.min(100, Math.round((xpInLevel / xpNext) * 100)));
  document.getElementById('overall-level').textContent = String(level);
  document.getElementById('overall-xp').textContent = String(xp);
  document.getElementById('overall-sessions').textContent = String(sessions);
  document.getElementById('overall-wins').textContent = `${winPct}%`;
  document.getElementById('overall-next-label').textContent = `Progress To Level ${level + 1}`;
  document.getElementById('overall-next-xp').textContent = `${xpInLevel} / ${xpNext} XP`;
  document.getElementById('overall-progress-fill').style.width = `${progressPct}%`;
}
</script>
