---
layout: fopl-section
title: Volunteer — Friends of the Poway Library
permalink: /volunteer
description: Join the Friends of the Poway Library as a volunteer. Help run the bookstore, support events, and strengthen our community.
fopl_section: volunteer
fopl_nav_active: volunteer
---



<div class="fopl-hero">
  <h1>Volunteer With Us</h1>
  <p>Help sort donations, staff the bookstore, and support library programs. Apply below or contact us with questions.</p>

</div>

<div class="vol-content">

  <!-- How It Works -->
  <span class="vol-section-label">How It Works</span>
  <div class="vol-steps">
    <div class="vol-step">
      <div class="vol-step-num">1</div>
      <div class="vol-step-body">
        <h4>Submit Your Application</h4>
        <p>Fill out the short form below. It takes about 3 minutes and helps us match you to the right role.</p>
      </div>
    </div>
    <div class="vol-step">
      <div class="vol-step-num">2</div>
      <div class="vol-step-body">
        <h4>We Reach Out</h4>
        <p>A member of our volunteer coordinator team will contact you within a few days to introduce themselves and answer any questions.</p>
      </div>
    </div>
    <div class="vol-step">
      <div class="vol-step-num">3</div>
      <div class="vol-step-body">
        <h4>Get Oriented</h4>
        <p>We will walk you through the role, introduce you to the team, and get you set up so your first shift is comfortable and easy.</p>
      </div>
    </div>
    <div class="vol-step">
      <div class="vol-step-num">4</div>
      <div class="vol-step-body">
        <h4>Start Volunteering</h4>
        <p>Pick your shifts and jump in. You will be part of a group that has been supporting the Poway Library since 1971.</p>
      </div>
    </div>
  </div>

  <!-- Application -->
  <span class="vol-section-label">Apply to Volunteer</span>
  <div class="vol-apply-wrap">
    <p class="vol-apply-intro">
      Ready to get involved? Fill out the form below and we will follow up within 3 to 5 business days.
    </p>

    <form class="vol-form" id="vol-application-form" novalidate>

      <!-- Section 1: About You -->
      <div class="vol-form-section-title">About You</div>

      <div class="vol-form-row">
        <div class="vol-form-field">
          <label for="vol-fname">First Name</label>
          <input type="text" id="vol-fname" name="firstName" placeholder="Jane" required>
        </div>
        <div class="vol-form-field">
          <label for="vol-lname">Last Name</label>
          <input type="text" id="vol-lname" name="lastName" placeholder="Smith" required>
        </div>
      </div>

      <div class="vol-form-row">
        <div class="vol-form-field">
          <label for="vol-email">Email Address</label>
          <input type="email" id="vol-email" name="email" placeholder="jane@example.com" required>
        </div>
        <div class="vol-form-field">
          <label for="vol-phone">Phone Number</label>
          <input type="tel" id="vol-phone" name="phone" placeholder="(619) 555-0100">
        </div>
      </div>

      <div class="vol-form-row">
        <div class="vol-form-field">
          <label for="vol-city">City</label>
          <input type="text" id="vol-city" name="city" placeholder="Poway">
        </div>
        <div class="vol-form-field">
          <label for="vol-zip">Zip Code</label>
          <input type="text" id="vol-zip" name="zip" placeholder="92064">
        </div>
      </div>

      <!-- Section 2: Availability -->
      <div class="vol-form-section-title">Availability</div>

      <div class="vol-form-row">
        <div class="vol-form-field">
          <label for="vol-hours">Hours available per week / month</label>
          <select id="vol-hours" name="hours" required>
            <option value="" disabled selected>Select an option</option>
            <option value="2-4/week">2–4 hours per week</option>
            <option value="5-8/week">5–8 hours per week</option>
            <option value="fewdays/month">A few days a month</option>
            <option value="flexible">Flexible / varies</option>
          </select>
        </div>
        <div class="vol-form-field">
          <label>Days generally available</label>
          <div class="vol-check-group" style="margin-top:4px;">
            <label class="vol-check-item">
              <input type="checkbox" name="days" value="weekdays"> Weekdays
            </label>
            <label class="vol-check-item">
              <input type="checkbox" name="days" value="weekends"> Weekends
            </label>
            <label class="vol-check-item">
              <input type="checkbox" name="days" value="either"> Either / flexible
            </label>
          </div>
        </div>
      </div>

      <!-- Section 3: Role Interest -->
      <div class="vol-form-section-title">Role Interest</div>

      <div class="vol-form-row full">
        <div class="vol-form-field">
          <label>Which volunteer role interests you most? <span class="opt">(select all that apply)</span></label>
          <div class="vol-check-group" style="margin-top:6px; display:grid; grid-template-columns:1fr 1fr; gap:8px 24px;">
            <label class="vol-check-item">
              <input type="checkbox" name="roles" value="bookstore"> Bookstore
            </label>
            <label class="vol-check-item">
              <input type="checkbox" name="roles" value="events"> Events
            </label>
            <label class="vol-check-item">
              <input type="checkbox" name="roles" value="outreach"> Community Outreach
            </label>
            <label class="vol-check-item">
              <input type="checkbox" name="roles" value="admin"> Administrative Support
            </label>
            <label class="vol-check-item">
              <input type="checkbox" name="roles" value="notsure"> Not sure yet
            </label>
          </div>
        </div>
      </div>

      <div class="vol-form-row full">
        <div class="vol-form-field">
          <label for="vol-experience">Relevant experience <span class="opt">(optional)</span></label>
          <textarea id="vol-experience" name="experience" placeholder="Any past volunteering, library work, retail, event planning, etc."></textarea>
        </div>
      </div>

      <!-- Section 4: Anything Else -->
      <div class="vol-form-section-title">Anything Else</div>

      <div class="vol-form-row full">
        <div class="vol-form-field">
          <label for="vol-why">Why do you want to volunteer with the Friends of the Poway Library?</label>
          <textarea id="vol-why" name="why" placeholder="Tell us a little about yourself and what draws you to FOPL." required></textarea>
        </div>
      </div>

      <div class="vol-form-row full">
        <div class="vol-form-field">
          <label for="vol-other">Anything else you'd like us to know? <span class="opt">(optional)</span></label>
          <textarea id="vol-other" name="other" placeholder="Questions, scheduling notes, special skills, etc."></textarea>
        </div>
      </div>

      <div class="vol-form-submit">
        <button type="submit" class="vol-apply-btn">Submit Application</button>
        <span class="vol-form-status" id="vol-form-status"></span>
      </div>

    </form>

    <p style="font-size:0.82rem;  margin: 20px 0 0;">
      Prefer email? Reach us at <a href="mailto:info@powayfriends.org" style=" font-weight:600;">info@powayfriends.org</a>
    </p>
  </div>

  <!-- Why volunteer -->
  <span class="vol-section-label">Why Volunteer</span>
  <div class="vol-why-grid">
    <div class="vol-why-card">
      <h3>Make a Real Impact</h3>
      <p>Every hour you give goes directly toward keeping the library's programs, events, and bookstore running for the Poway community.</p>
    </div>
    <div class="vol-why-card">
      <h3>Meet Your Neighbors</h3>
      <p>The Friends group is full of people who care about this community. Volunteering is one of the best ways to build lasting connections in Poway.</p>
    </div>
    <div class="vol-why-card">
      <h3>Flexible Commitment</h3>
      <p>Whether you can give two hours a week or two days a month, we have a role that works with your schedule. No experience required.</p>
    </div>
  </div>

  <!-- Volunteer roles -->
  <span class="vol-section-label">Ways to Help</span>
  <div class="vol-roles-grid">
    <div class="vol-role-card">
      <h3>Bookstore</h3>
      <p>Sort and shelve donated books, assist customers, manage inventory, and help keep the used bookstore organized and welcoming.</p>
      <span class="vol-role-tag">Ongoing</span>
    </div>
    <div class="vol-role-card">
      <h3>Events</h3>
      <p>Help set up, run, and break down the 400+ events the Friends host each year — from author talks to community fundraisers.</p>
      <span class="vol-role-tag">Seasonal</span>
    </div>
    <div class="vol-role-card">
      <h3>Community Outreach</h3>
      <p>Spread the word about the Friends through social media, flyers, tabling at local events, and connecting with community groups.</p>
      <span class="vol-role-tag">Flexible</span>
    </div>
    <div class="vol-role-card">
      <h3>Administrative Support</h3>
      <p>Help with membership records, communications, newsletter preparation, and other behind-the-scenes tasks that keep the organization running.</p>
      <span class="vol-role-tag">Flexible</span>
    </div>
  </div>

  <!-- Quote -->
  <div class="vol-quote">
    <p>"Volunteering at the Friends bookstore is one of my favorite parts of the week. The people are wonderful, and it is genuinely satisfying to know the money goes right back into the library."</p>
    <cite>FOPL Volunteer, Poway CA</cite>
  </div>

<script>
(function () {
  const API = window.FOPL_BACKEND + '/api/fopl/volunteer';

  const form   = document.getElementById('vol-application-form');
  const status = document.getElementById('vol-form-status');

  form.addEventListener('submit', async function (e) {
    e.preventDefault();

    const firstName = form.querySelector('#vol-fname').value.trim();
    const lastName  = form.querySelector('#vol-lname').value.trim();
    const email     = form.querySelector('#vol-email').value.trim();
    const hours     = form.querySelector('#vol-hours').value;
    const why       = form.querySelector('#vol-why').value.trim();

    if (!firstName || !lastName || !email || !hours || !why) {
      status.textContent = 'Please fill in all required fields.';
      status.className = 'vol-form-status error';
      status.style.display = 'inline';
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      status.textContent = 'Please enter a valid email address.';
      status.className = 'vol-form-status error';
      status.style.display = 'inline';
      return;
    }

    const submitBtn = form.querySelector('button[type="submit"]');
    submitBtn.disabled = true;
    submitBtn.textContent = 'Submitting…';

    const payload = {
      first_name:  firstName,
      last_name:   lastName,
      email,
      phone:       form.querySelector('#vol-phone').value.trim(),
      city:        form.querySelector('#vol-city').value.trim(),
      zip:         form.querySelector('#vol-zip').value.trim(),
      hours,
      days:        [...form.querySelectorAll('input[name="days"]:checked')].map(cb => cb.value),
      roles:       [...form.querySelectorAll('input[name="roles"]:checked')].map(cb => cb.value),
      experience:  form.querySelector('#vol-experience').value.trim(),
      why,
      other:       form.querySelector('#vol-other').value.trim(),
    };

    try {
      const res = await fetch(API + '/applications', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error('Server error ' + res.status);

      form.querySelectorAll('input, select, textarea, button').forEach(el => el.disabled = true);
      status.textContent = 'Application submitted! We will be in touch within 3–5 business days.';
      status.className = 'vol-form-status';
      status.style.display = 'inline';

    } catch (err) {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Submit Application';
      status.textContent = 'Something went wrong. Please try again or email us directly.';
      status.className = 'vol-form-status error';
      status.style.display = 'inline';
    }
  });
})();
</script>

</div>
