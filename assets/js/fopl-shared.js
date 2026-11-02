/* ═══════════════════════════════════════════
   FOPL shared JavaScript
   Auth nav dropdown, backend URL, game helpers
   ═══════════════════════════════════════════ */

// Shared backend URL — local dev hits localhost, production hits the deployed backend
window.FOPL_BACKEND = (location.hostname === 'localhost' || location.hostname === '127.0.0.1')
  ? 'http://localhost:8321'
  : 'https://fopl-flask.opencodingsociety.com';

// ── Dark mode toggle (persisted via localStorage) ──
(function() {
  // Apply saved preference immediately (before DOMContentLoaded)
  if (localStorage.getItem('fopl_dark') === '1') {
    document.body.classList.add('fopl-dark');
  }
  window.foplToggleDark = function() {
    var isDark = document.body.classList.toggle('fopl-dark');
    localStorage.setItem('fopl_dark', isDark ? '1' : '0');
  };
})();

// ── Auth nav dropdown (runs on every page) ──
document.addEventListener('DOMContentLoaded', function initAuthNav() {
  var foplUser = JSON.parse(localStorage.getItem('fopl_user') || 'null');
  var authItem = document.getElementById('nav-auth-item');
  var authLink = document.getElementById('nav-auth-link');
  var dropdown = document.getElementById('nav-auth-dropdown');
  var signoutBtn = document.getElementById('nav-signout-btn');

  if (foplUser && authLink) {
    authItem.classList.add('fopl-nav-has-dropdown');
    authLink.textContent = foplUser.name.split(' ')[0];
    authLink.href = '#';
    authLink.onclick = function(e) {
      e.preventDefault();
      dropdown.classList.toggle('open');
    };
    document.addEventListener('click', function(e) {
      if (!authItem.contains(e.target)) dropdown.classList.remove('open');
    });
    signoutBtn.onclick = async function(e) {
      e.preventDefault();
      await fetch(window.FOPL_BACKEND + '/api/fopl/login', {
        method: 'DELETE', credentials: 'include'
      }).catch(function() {});
      localStorage.removeItem('fopl_user');
      window.location.href = window.FOPL_HOME;
    };
  }
});

// ── Nav calendar popup ──
(function() {
  var popOpen = false;
  var popEvents = [];
  var popYear = null, popMonth = null;
  var popSelectedDate = null;

  window.foplToggleCalPopup = function() {
    var popup = document.getElementById('fopl-cal-popup');
    if (!popup) return;
    popOpen = !popOpen;
    popup.classList.toggle('open', popOpen);
    if (popOpen) {
      var now = new Date();
      if (popYear === null) { popYear = now.getFullYear(); popMonth = now.getMonth(); }
      popLoadAndRender();
    } else {
      popSelectedDate = null;
    }
  };

  document.addEventListener('click', function(e) {
    if (!popOpen) return;
    var popup = document.getElementById('fopl-cal-popup');
    var btn   = document.getElementById('fopl-cal-pop-btn');
    if (popup && !popup.contains(e.target) && btn && !btn.contains(e.target)) {
      popOpen = false;
      popSelectedDate = null;
      popup.classList.remove('open');
    }
  });

  async function popLoadAndRender() {
    try {
      var res = await fetch(window.FOPL_BACKEND + '/api/fopl/events');
      popEvents = await res.json();
    } catch(e) { popEvents = []; }
    popRender();
  }

  function popRender() {
    var label = new Date(popYear, popMonth, 1)
      .toLocaleString('default', { month: 'long', year: 'numeric' });
    document.getElementById('fopl-pop-month-label').textContent = label;

    var now         = new Date();
    var todayStr    = now.getFullYear() + '-' +
                      String(now.getMonth()+1).padStart(2,'0') + '-' +
                      String(now.getDate()).padStart(2,'0');
    var firstDay    = new Date(popYear, popMonth, 1).getDay();
    var daysInMonth = new Date(popYear, popMonth + 1, 0).getDate();
    var prevDays    = new Date(popYear, popMonth, 0).getDate();

    var dows = ['Su','Mo','Tu','We','Th','Fr','Sa'];
    var html = dows.map(function(d) { return '<div class="fopl-pop-dow">' + d + '</div>'; }).join('');

    var cells = [];
    for (var i = firstDay - 1; i >= 0; i--) cells.push({ day: prevDays - i, cur: false });
    for (var d = 1; d <= daysInMonth; d++)  cells.push({ day: d, cur: true });
    var next = 1;
    while (cells.length % 7 !== 0) cells.push({ day: next++, cur: false });

    cells.forEach(function(cell) {
      var dateStr = cell.cur
        ? popYear + '-' + String(popMonth+1).padStart(2,'0') + '-' + String(cell.day).padStart(2,'0')
        : '';
      var isToday    = dateStr === todayStr;
      var isSelected = dateStr === popSelectedDate;
      var events     = cell.cur ? popEvents.filter(function(e) { return e.date === dateStr; }) : [];
      var dots       = events.map(function(e) {
        return '<span class="fopl-pop-dot" style="background:' + e.color + '"></span>';
      }).join('');
      var cls = 'fopl-pop-cell' +
                (!cell.cur ? ' other' : '') +
                (isToday    ? ' today'    : '') +
                (isSelected ? ' selected' : '');
      var click = cell.cur ? ' onclick="event.stopPropagation();foplPopSelectDay(\'' + dateStr + '\')"' : '';
      html += '<div class="' + cls + '"' + click + '>' +
              '<span class="fopl-pop-day">' + cell.day + '</span>' + dots + '</div>';
    });

    document.getElementById('fopl-pop-grid').innerHTML = html;

    // Auto-select today if on current month and nothing else is selected
    if (!popSelectedDate && popYear === now.getFullYear() && popMonth === now.getMonth()) {
      popSelectedDate = todayStr;
      // Mark today's cell as selected
      var todayCell = document.querySelector('.fopl-pop-cell.today');
      if (todayCell) todayCell.classList.add('selected');
    }

    // re-render detail if a date is selected
    if (popSelectedDate) popShowDetail(popSelectedDate);
  }

  window.foplPopSelectDay = function(dateStr) {
    popSelectedDate = dateStr;
    popRender();
  };

  function popShowDetail(dateStr) {
    var detail = document.getElementById('fopl-pop-detail');
    if (!detail) return;
    var events = popEvents.filter(function(e) { return e.date === dateStr; });
    var parts   = dateStr.split('-');
    var label   = new Date(+parts[0], +parts[1]-1, +parts[2])
                    .toLocaleDateString('default', { weekday:'long', month:'long', day:'numeric' });
    var inner;
    if (events.length === 0) {
      inner = '<div class="fopl-pop-no-events">No events on this day.</div>';
    } else {
      inner = events.map(function(e) {
        return '<div class="fopl-pop-event-row">' +
               '<span class="fopl-pop-event-swatch" style="background:' + e.color + '"></span>' +
               '<div><div class="fopl-pop-event-name">' + e.title + '</div>' +
               (e.description ? '<div class="fopl-pop-event-desc">' + e.description + '</div>' : '') +
               '</div></div>';
      }).join('');
    }
    detail.innerHTML = '<div class="fopl-pop-detail-date">' + label + '</div>' + inner;
    detail.classList.add('open');
  }

  window.foplPopCalPrev = function() {
    if (--popMonth < 0) { popMonth = 11; popYear--; }
    popSelectedDate = null;
    var detail = document.getElementById('fopl-pop-detail');
    if (detail) detail.classList.remove('open');
    popRender();
  };
  window.foplPopCalNext = function() {
    if (++popMonth > 11) { popMonth = 0; popYear++; }
    popSelectedDate = null;
    var detail = document.getElementById('fopl-pop-detail');
    if (detail) detail.classList.remove('open');
    popRender();
  };
})();

// ── Day-ID helper (shared across all daily games) ──
window.foplGetDayId = function() {
  var epoch = new Date('2024-01-01T00:00:00');
  var today = new Date();
  today.setHours(0, 0, 0, 0);
  return String(Math.floor((today - epoch) / 86400000));
};

// ── Overall game-progress tracker (shared across all games) ──
window.foplAddOverallProgress = function(game, points, won) {
  var overall = JSON.parse(
    localStorage.getItem('fopl_games_overall_v1') ||
    '{"xp":0,"sessions":0,"wins":0,"byGame":{}}'
  );
  overall.xp       = Number(overall.xp || 0) + Math.max(0, Number(points || 0));
  overall.sessions  = Number(overall.sessions || 0) + 1;
  if (won) overall.wins = Number(overall.wins || 0) + 1;
  overall.byGame    = overall.byGame || {};
  var current       = Number(overall.byGame[game] || 0);
  overall.byGame[game] = current + Math.max(0, Number(points || 0));
  overall.updatedAt = Date.now();
  localStorage.setItem('fopl_games_overall_v1', JSON.stringify(overall));
};

// ── Shaking tree book-drop easter egg ──
(function() {
  var BOOK_EMOJIS = ['📚','📖','📕','📗','📘','📙'];
  var BOOK_COUNT  = 9;

  function spawnBooks(tree) {
    var scene = tree.closest('.fopl-deco-scene') || tree.parentElement;
    var treeRect  = tree.getBoundingClientRect();
    var sceneRect = scene.getBoundingClientRect();

    // Canopy region: top 65% of the tree image, spanning 80% of its width
    var canopyTop    = treeRect.top  - sceneRect.top;
    var canopyHeight = treeRect.height * 0.65;
    var canopyLeft   = treeRect.left - sceneRect.left + treeRect.width * 0.10;
    var canopyWidth  = treeRect.width * 0.80;

    for (var i = 0; i < BOOK_COUNT; i++) {
      (function(i) {
        var delay = i * 55;
        setTimeout(function() {
          var book = document.createElement('span');
          book.className = 'deco-falling-book';
          book.textContent = BOOK_EMOJIS[Math.floor(Math.random() * BOOK_EMOJIS.length)];

          // Random spot within the canopy
          var x = canopyLeft + Math.random() * canopyWidth;
          var y = canopyTop  + Math.random() * canopyHeight;

          book.style.left = x + 'px';
          book.style.top  = y + 'px';

          var rotStart = (Math.random() - 0.5) * 40;
          var rotEnd   = (Math.random() - 0.5) * 90 + (Math.random() > 0.5 ? 30 : -30);
          var fallDist = 60 + Math.random() * 80;
          var fallDur  = (0.8 + Math.random() * 0.5).toFixed(2) + 's';

          book.style.setProperty('--rot-start',  rotStart + 'deg');
          book.style.setProperty('--rot-end',    rotEnd   + 'deg');
          book.style.setProperty('--fall-dist',  fallDist + 'px');
          book.style.setProperty('--fall-dur',   fallDur);

          scene.appendChild(book);
          setTimeout(function() { book.remove(); }, 1400);
        }, delay);
      })(i);
    }
  }

  function initPalmClicks() {
    document.querySelectorAll('.deco-palm').forEach(function(tree) {
      tree.style.cursor = 'pointer';
      tree.addEventListener('click', function() {
        if (tree.classList.contains('palm-shaking')) return;
        tree.classList.add('palm-shaking');
        spawnBooks(tree);
        tree.addEventListener('animationend', function handler() {
          tree.classList.remove('palm-shaking');
          tree.removeEventListener('animationend', handler);
        });
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPalmClicks);
  } else {
    initPalmClicks();
  }
})();

// ── Post puzzle result to backend (shared across all games) ──
window.foplPostResult = async function(game, won, guesses) {
  var user = JSON.parse(localStorage.getItem('fopl_user') || 'null');
  if (!user) return;
  try {
    await fetch(window.FOPL_BACKEND + '/api/fopl/puzzle/stats', {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        game: game,
        won: !!won,
        guesses: guesses != null ? guesses : null
      })
    });
  } catch(e) { /* silent */ }
};
