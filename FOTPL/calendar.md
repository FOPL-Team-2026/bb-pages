---
layout: fopl-section
title: Events Calendar
permalink: /calendar
description: Upcoming events at Friends of the Poway Library — Poway, CA.
fopl_section: calendar
fopl_nav_active: calendar
---



<div class="fopl-cal-page">
  <h1>Upcoming events</h1>
  <div class="cal-header">
    <button class="cal-nav" id="cal-prev">&#8249;</button>
    <div class="cal-title" id="cal-month-label"></div>
    <button class="cal-nav" id="cal-next">&#8250;</button>
  </div>
  <div style="position:relative;">
    <div class="cal-grid" id="cal-grid"></div>
    <div class="cal-day-detail" id="cal-day-detail">
      <button class="cal-day-detail-close" id="cal-detail-close">&#x2715;</button>
      <div class="cal-day-detail-date" id="cal-detail-date"></div>
      <div id="cal-detail-events"></div>
    </div>
  </div>
  <div id="cal-admin-bar"></div>
</div>

<div class="cal-modal-overlay" id="cal-modal">
  <div class="cal-modal">
    <h4 id="cal-modal-title">Add Event</h4>
    <label>Title *</label>
    <input type="text" id="cal-f-title" placeholder="Event title" />
    <label>Date *</label>
    <input type="date" id="cal-f-date" />
    <label>Description</label>
    <textarea id="cal-f-desc" placeholder="Optional details…"></textarea>
    <label>Color</label>
    <div class="cal-color-row" id="cal-color-row"></div>
    <div class="cal-modal-actions">
      <button class="cal-btn-delete" id="cal-btn-delete" style="display:none" onclick="calDeleteEvent()">Delete</button>
      <button class="cal-btn-cancel" onclick="calCloseModal()">Cancel</button>
      <button class="cal-btn-save" onclick="calSaveEvent()">Save</button>
    </div>
  </div>
</div>

<script>
{
  const API = window.FOPL_BACKEND + '/api/fopl/events';
  const COLORS = ['#023b0f','#1565c0','#6a1b9a','#e65100','#c62828','#2e7d32','#0277bd','#4527a0'];

  let calYear = null, calMonth = null, calEvents = [], calEditId = null, calSelectedColor = COLORS[0];

  function isAdmin() {
    const u = JSON.parse(localStorage.getItem('fopl_user') || 'null');
    return u && u.role === 'Admin';
  }

  async function calLoad() {
    try {
      const res = await fetch(API);
      calEvents = await res.json();
    } catch { calEvents = []; }
    calRender();
  }

  function calRender() {
    const now = new Date();
    if (calYear  == null) calYear  = now.getFullYear();
    if (calMonth == null) calMonth = now.getMonth();

    document.getElementById('cal-month-label').textContent =
      new Date(calYear, calMonth, 1).toLocaleString('default', { month: 'long', year: 'numeric' });

    const grid = document.getElementById('cal-grid');
    const dows = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
    let html = dows.map(d => `<div class="cal-dow">${d}</div>`).join('');

    const firstDay    = new Date(calYear, calMonth, 1).getDay();
    const daysInMonth = new Date(calYear, calMonth + 1, 0).getDate();
    const prevDays    = new Date(calYear, calMonth, 0).getDate();
    const todayStr    = `${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,'0')}-${String(now.getDate()).padStart(2,'0')}`;
    const admin       = isAdmin();

    let cells = [];
    for (let i = firstDay - 1; i >= 0; i--) cells.push({ day: prevDays - i, cur: false });
    for (let d = 1; d <= daysInMonth; d++)   cells.push({ day: d, cur: true });
    let next = 1;
    while (cells.length % 7 !== 0) cells.push({ day: next++, cur: false });

    cells.forEach(({ day, cur }) => {
      const dateStr = cur
        ? `${calYear}-${String(calMonth+1).padStart(2,'0')}-${String(day).padStart(2,'0')}`
        : '';
      const isToday = dateStr === todayStr;
      const events  = calEvents.filter(e => e.date === dateStr);
      const dots = events.map(e =>
        `<span class="cal-event" style="background:${e.color}" title="${e.title}">${e.title}</span>`
      ).join('');
      const dataDate = cur ? `data-date="${dateStr}"` : '';
      html += `<div class="cal-cell${!cur?' other-month':''}${isToday?' today':''}" ${dataDate}>
        <div class="cal-day">${day}</div>${dots}
      </div>`;
    });

    grid.innerHTML = html;

    // Wire up day-cell clicks
    grid.querySelectorAll('.cal-cell[data-date]').forEach(cell => {
      cell.addEventListener('click', () => calOpenDayDetail(cell));
    });

    // Auto-open today
    const todayCell = grid.querySelector('.cal-cell.today');
    if (todayCell) calOpenDayDetail(todayCell);

    document.getElementById('cal-admin-bar').innerHTML = '';
  }

  function calBuildSwatches(selected) {
    document.getElementById('cal-color-row').innerHTML = COLORS.map(c =>
      `<div class="cal-color-swatch${c===selected?' selected':''}"
            style="background:${c}" onclick="calPickColor('${c}')"></div>`
    ).join('');
    calSelectedColor = selected;
  }

  window.calPickColor = function(c) {
    calSelectedColor = c;
    document.querySelectorAll('.cal-color-swatch').forEach(el =>
      el.classList.toggle('selected', el.style.backgroundColor === c)
    );
  };

  window.calOpenNew = function() {
    calEditId = null;
    document.getElementById('cal-modal-title').textContent = 'Add Event';
    document.getElementById('cal-f-title').value = '';
    document.getElementById('cal-f-date').value  = '';
    document.getElementById('cal-f-desc').value  = '';
    document.getElementById('cal-btn-delete').style.display = 'none';
    calBuildSwatches(COLORS[0]);
    document.getElementById('cal-modal').classList.add('open');
  };

  window.calOpenEdit = function(id) {
    const ev = calEvents.find(e => e.id === id);
    if (!ev) return;
    calEditId = id;
    document.getElementById('cal-modal-title').textContent = 'Edit Event';
    document.getElementById('cal-f-title').value = ev.title;
    document.getElementById('cal-f-date').value  = ev.date;
    document.getElementById('cal-f-desc').value  = ev.description || '';
    document.getElementById('cal-btn-delete').style.display = '';
    calBuildSwatches(ev.color || COLORS[0]);
    document.getElementById('cal-modal').classList.add('open');
  };

  window.calCloseModal = function() {
    document.getElementById('cal-modal').classList.remove('open');
  };

  window.calSaveEvent = async function() {
    const body = {
      title:       document.getElementById('cal-f-title').value.trim(),
      date:        document.getElementById('cal-f-date').value,
      description: document.getElementById('cal-f-desc').value.trim(),
      color:       calSelectedColor,
    };
    if (!body.title || !body.date) { alert('Title and date are required.'); return; }
    const url    = calEditId ? `${API}/${calEditId}` : API;
    const method = calEditId ? 'PUT' : 'POST';
    try {
      const res = await fetch(url, { method, credentials: 'include',
        headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        if (res.status === 401) {
          if (confirm('Your session has expired. Log in again?')) window.location.href = '/login';
          return;
        }
        alert(`Save failed (${res.status}): ${err.message || res.statusText}`);
        return;
      }
      calCloseModal();
      calLoad();
    } catch(e) { alert('Could not save event: ' + e.message); }
  };

  window.calDeleteEvent = async function() {
    if (!calEditId || !confirm('Delete this event?')) return;
    try {
      await fetch(`${API}/${calEditId}`, { method: 'DELETE', credentials: 'include' });
      calCloseModal();
      calLoad();
    } catch { alert('Could not delete event.'); }
  };

  function calOpenDayDetail(cell) {
    const dateStr  = cell.dataset.date;
    const detail   = document.getElementById('cal-day-detail');
    const dateEl   = document.getElementById('cal-detail-date');
    const eventsEl = document.getElementById('cal-detail-events');
    const admin    = isAdmin();

    const now      = new Date();
    const todayStr = `${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,'0')}-${String(now.getDate()).padStart(2,'0')}`;
    const isToday  = dateStr === todayStr;

    const d = new Date(dateStr + 'T12:00:00');
    const label = d.toLocaleDateString('default', { weekday: 'long', month: 'long', day: 'numeric' });
    dateEl.innerHTML = label + (isToday ? '<span class="cal-day-detail-today-badge">Today</span>' : '');

    const dayEvents = calEvents.filter(e => e.date === dateStr);
    let eventsHtml = '';
    if (dayEvents.length) {
      eventsHtml = dayEvents.map(e => {
        const editBtn = admin
          ? `<button class="cal-detail-admin-btn cal-detail-btn-edit" onclick="calOpenEdit(${e.id})" style="margin-left:8px;padding:2px 8px;font-size:0.65rem;">Edit</button>
             <button class="cal-detail-admin-btn cal-detail-btn-remove" onclick="calQuickDelete(${e.id})" style="padding:2px 8px;font-size:0.65rem;">Remove</button>`
          : '';
        return `<div class="cal-day-detail-event" style="background:${e.color};display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:4px;">
          <span>${e.title}${e.description ? '<br><small style="opacity:0.85">'+e.description+'</small>' : ''}</span>
          <span style="display:flex;gap:4px;flex-shrink:0;">${editBtn}</span>
        </div>`;
      }).join('');
    } else {
      eventsHtml = '<div class="cal-day-detail-empty">No events</div>';
    }

    if (admin) {
      eventsHtml += `<div class="cal-detail-admin-bar">
        <button class="cal-detail-admin-btn cal-detail-btn-add" onclick="calOpenNewForDate('${dateStr}')">+ Add Event</button>
      </div>`;
    }
    eventsEl.innerHTML = eventsHtml;

    // Position below the clicked cell
    const gridRect = document.getElementById('cal-grid').getBoundingClientRect();
    const cellRect = cell.getBoundingClientRect();
    const top  = cellRect.bottom - gridRect.top + 6;
    const left = Math.min(cellRect.left - gridRect.left, gridRect.width - 272);
    detail.style.top  = top + 'px';
    detail.style.left = Math.max(0, left) + 'px';
    detail.classList.add('open');
  }

  window.calOpenNewForDate = function(dateStr) {
    calEditId = null;
    document.getElementById('cal-modal-title').textContent = 'Add Event';
    document.getElementById('cal-f-title').value = '';
    document.getElementById('cal-f-date').value  = dateStr;
    document.getElementById('cal-f-desc').value  = '';
    document.getElementById('cal-btn-delete').style.display = 'none';
    calBuildSwatches(COLORS[0]);
    document.getElementById('cal-modal').classList.add('open');
  };

  window.calQuickDelete = async function(id) {
    if (!confirm('Delete this event?')) return;
    try {
      const res = await fetch(`${API}/${id}`, { method: 'DELETE', credentials: 'include' });
      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        alert(`Delete failed (${res.status}): ${err.message || res.statusText}`);
        return;
      }
      document.getElementById('cal-day-detail').classList.remove('open');
      calLoad();
    } catch(e) { alert('Could not delete event: ' + e.message); }
  };

  document.getElementById('cal-detail-close').addEventListener('click', () => {
    document.getElementById('cal-day-detail').classList.remove('open');
  });

  document.getElementById('cal-prev').onclick = () => {
    if (--calMonth < 0) { calMonth = 11; calYear--; }
    document.getElementById('cal-day-detail').classList.remove('open');
    calRender();
  };
  document.getElementById('cal-next').onclick = () => {
    if (++calMonth > 11) { calMonth = 0; calYear++; }
    document.getElementById('cal-day-detail').classList.remove('open');
    calRender();
  };
  document.getElementById('cal-modal').addEventListener('click', function(e) {
    if (e.target === this) calCloseModal();
  });

  calLoad();
}
</script>
