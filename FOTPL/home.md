---
layout: fopl
title: Friends of the Poway Library
permalink: /home
description: Friends of the Poway Library — supporting literacy, community programs, and the Poway Library since 1978.
fopl_nav_active: home
---

<style>
  body { background: #0f1a12; overflow-x: hidden; }

  /* ── Grain / noise overlay (oryzo-style texture) ── */
  .fopl-grain {
    position: fixed;
    inset: 0;
    pointer-events: none;
    z-index: 9999;
    opacity: 0.035;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
    background-repeat: repeat;
    background-size: 200px 200px;
  }

  /* ── Mouse-tracking spotlight (dark mode only) ── */
  .fopl-spotlight {
    position: fixed;
    width: 400px;
    height: 400px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(212,168,83,0.06) 0%, transparent 70%);
    pointer-events: none;
    z-index: 1;
    transform: translate(-50%, -50%);
    transition: left 0.3s ease-out, top 0.3s ease-out, opacity 0.4s;
    opacity: 0;
    will-change: left, top;
    display: none;
  }
  body.fopl-dark .fopl-spotlight { display: block; }
  .fopl-spotlight.active { opacity: 1; }

  /* ── Floating particles ── */
  .fopl-particles {
    position: fixed;
    inset: 0;
    pointer-events: none;
    z-index: 0;
    overflow: hidden;
  }
  .fopl-particle {
    position: absolute;
    font-family: 'Libre Baskerville', serif;
    color: rgba(212,168,83,0.12);
    animation: fopl-float linear infinite;
    will-change: transform;
    user-select: none;
    pointer-events: none;
  }
  @keyframes fopl-float {
    0% { transform: translateY(100vh) rotate(0deg); opacity: 0; }
    10% { opacity: 1; }
    90% { opacity: 1; }
    100% { transform: translateY(-10vh) rotate(360deg); opacity: 0; }
  }

  /* ── Scroll-reveal animation (enhanced) ── */
  .fopl-reveal {
    opacity: 0;
    transform: translateY(40px);
    transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
  }
  .fopl-reveal.visible {
    opacity: 1;
    transform: translateY(0);
  }

  /* ── Typewriter cursor ── */
  .fopl-typewriter-cursor {
    display: inline-block;
    width: 3px;
    height: 1em;
    background: #d4a853;
    margin-left: 4px;
    vertical-align: text-bottom;
    animation: fopl-blink 0.75s step-end infinite;
  }
  @keyframes fopl-blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }

  /* ── Hero ── */
  .fopl-hero {
    background: #0f1a12;
    color: #fff;
    padding: 100px 40px 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    position: relative;
    overflow: hidden;
    min-height: 70vh;
  }
  /* Animated gradient mesh behind hero */
  .fopl-hero::before {
    content: '';
    position: absolute;
    inset: -50%;
    background: 
      radial-gradient(ellipse at 20% 50%, rgba(212,168,83,0.08) 0%, transparent 50%),
      radial-gradient(ellipse at 80% 20%, rgba(45,184,77,0.05) 0%, transparent 50%),
      radial-gradient(ellipse at 50% 80%, rgba(212,168,83,0.04) 0%, transparent 50%);
    animation: fopl-mesh 16s ease-in-out infinite alternate;
    pointer-events: none;
    z-index: 0;
  }
  @keyframes fopl-mesh {
    0% { transform: scale(1) rotate(0deg); }
    100% { transform: scale(1.1) rotate(2deg); }
  }
  .fopl-hero > * { position: relative; z-index: 2; }

  .fopl-hero-center {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 800px;
    margin: 0 auto;
    padding: 0 24px;
  }

  .fopl-hero-logo-wrap {
    display: flex;
    justify-content: center;
    margin-bottom: 28px;
  }

  .fopl-hero-logo {
    height: 80px;
    width: auto;
    filter: drop-shadow(0 0 24px rgba(212,168,83,0.2));
    transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), filter 0.6s;
  }
  .fopl-hero-logo:hover {
    transform: scale(1.08);
    filter: drop-shadow(0 0 32px rgba(212,168,83,0.35));
  }

  .fopl-hero h1 {
    font-family: 'Libre Baskerville', serif;
    font-size: 3.6rem;
    font-weight: 700;
    margin: 0 0 8px;
    min-height: 1.1em;
    letter-spacing: -0.02em;
    color: #fff;
    border: none;
    text-align: center;
    line-height: 1.08;
    width: 100%;
    text-transform: none;
    cursor: default;
    transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), text-shadow 0.4s;
    transform-style: preserve-3d;
    perspective: 800px;
  }
  .fopl-hero h1:hover {
    text-shadow: 0 0 40px rgba(212,168,83,0.15);
  }
  .fopl-hero .fopl-hero-tagline {
    font-size: 0.68rem;
    text-transform: uppercase;
    letter-spacing: 0.4em;
    color: rgba(212,168,83,0.5);
    font-family: 'Cabin', sans-serif;
    font-weight: 600;
    margin: 0 0 28px;
    text-align: center;
    display: block;
    width: 100%;
    position: relative;
  }
  .fopl-hero .fopl-hero-tagline::before,
  .fopl-hero .fopl-hero-tagline::after {
    content: '\2022';
    display: inline-block;
    margin: 0 12px;
    font-size: 0.4rem;
    vertical-align: middle;
    color: rgba(212,168,83,0.35);
  }
  .fopl-hero-desc {
    font-size: 1.05rem;
    color: rgba(255,255,255,0.45);
    margin: 20px auto 44px;
    line-height: 1.9;
    text-align: center;
    max-width: 440px;
    font-family: 'Lato', sans-serif;
    font-weight: 300;
    letter-spacing: 0.01em;
  }

  /* Scroll indicator */
  .fopl-scroll-hint {
    position: absolute;
    bottom: 28px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    z-index: 3;
    opacity: 0.35;
    transition: opacity 0.3s;
  }
  .fopl-scroll-hint:hover { opacity: 0.6; }
  .fopl-scroll-hint span {
    font-family: 'Cabin', sans-serif;
    font-size: 0.6rem;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    color: #fff;
  }
  .fopl-scroll-arrow {
    width: 16px;
    height: 16px;
    border-right: 1.5px solid rgba(255,255,255,0.5);
    border-bottom: 1.5px solid rgba(255,255,255,0.5);
    transform: rotate(45deg);
    animation: fopl-bob 2s ease-in-out infinite;
  }
  @keyframes fopl-bob {
    0%, 100% { transform: rotate(45deg) translate(0, 0); }
    50% { transform: rotate(45deg) translate(3px, 3px); }
  }

  /* ── Hero buttons ── */
  .fopl-hero-btns { display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; margin-top: 4px; }
  .fopl-hero-btn {
    display: inline-block;
    padding: 12px 28px;
    font-family: 'Cabin', sans-serif;
    font-weight: 700;
    font-size: 0.68rem;
    text-transform: uppercase;
    letter-spacing: 0.14em;
    border-radius: 28px;
    text-decoration: none;
    transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.35s, background 0.3s, color 0.3s, border-color 0.3s;
    position: relative;
  }
  .fopl-hero-btn:hover {
    transform: translateY(-3px);
  }
  .fopl-hero-btn.primary {
    background: #d4a853;
    color: #1a1a12;
    box-shadow: 0 0 0 0 rgba(212,168,83,0);
  }
  .fopl-hero-btn.primary:hover {
    background: #e0bd70;
    box-shadow: 0 8px 32px rgba(212,168,83,0.22);
  }
  .fopl-hero-btn.outline {
    background: transparent;
    color: rgba(255,255,255,0.8);
    border: 1px solid rgba(255,255,255,0.18);
  }
  .fopl-hero-btn.outline:hover { background: rgba(255,255,255,0.06); border-color: rgba(255,255,255,0.5); color: #fff; }
  .fopl-hero-btn.games {
    background: transparent;
    color: rgba(255,255,255,0.8);
    border: 1px solid rgba(255,255,255,0.18);
  }
  .fopl-hero-btn.games:hover { background: rgba(255,255,255,0.06); border-color: rgba(255,255,255,0.5); color: #fff; }

  /* ── Stats counter strip ── */
  .fopl-stats {
    background: rgba(0,0,0,0.18);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    padding: 48px 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0;
    flex-wrap: wrap;
    border-top: 1px solid rgba(255,255,255,0.06);
    border-bottom: 1px solid rgba(255,255,255,0.06);
    position: relative;
    z-index: 2;
  }
  body.fopl-dark .fopl-stats { background: rgba(0,0,0,0.35); }
  .fopl-stat {
    text-align: center;
    color: #fff;
    padding: 0 48px;
    position: relative;
  }
  .fopl-stat + .fopl-stat::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 1px;
    height: 40px;
    background: rgba(255,255,255,0.1);
  }
  .fopl-stat-number {
    font-family: 'Cabin', sans-serif;
    font-size: 3rem;
    font-weight: 700;
    color: #d4a853;
    line-height: 1;
    margin-bottom: 10px;
  }
  .fopl-stat-label {
    font-family: 'Cabin', sans-serif;
    font-size: 0.65rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.16em;
    color: rgba(212,168,83,0.45);
  }

  /* ── Cards grid ── */
  .fopl-cards {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    padding: 56px 40px 40px;
    background: transparent;
    max-width: 1080px;
    margin: 0 auto;
    position: relative;
    z-index: 2;
  }
  body.fopl-dark .fopl-cards { background: transparent; }

  /* ── Cards ── */
  .fopl-card-flip {
    perspective: 1200px;
    min-height: 280px;
  }
  .fopl-card-flip-inner {
    position: relative;
    width: 100%;
    height: 100%;
    min-height: 280px;
    transition: transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
    transform-style: preserve-3d;
  }
  .fopl-card-flip:hover .fopl-card-flip-inner {
    transform: rotateY(180deg);
  }
  .fopl-card-front, .fopl-card-back {
    position: absolute;
    inset: 0;
    backface-visibility: hidden;
    border-radius: 16px;
    padding: 32px 24px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }
  .fopl-card-front {
    background: rgba(255,255,255,0.07);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    box-shadow: 0 4px 32px rgba(0,0,0,0.12);
    border: 1px solid rgba(255,255,255,0.1);
    transition: box-shadow 0.5s, border-color 0.5s, transform 0.5s;
  }
  .fopl-card-flip:hover .fopl-card-front {
    box-shadow: 0 12px 48px rgba(0,0,0,0.2);
    border-color: rgba(212,168,83,0.25);
  }
  /* Card shimmer on hover */
  .fopl-card-front::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 16px;
    background: linear-gradient(135deg, rgba(212,168,83,0.06) 0%, transparent 40%, rgba(45,184,77,0.03) 100%);
    opacity: 0;
    transition: opacity 0.5s;
  }
  .fopl-card-flip:hover .fopl-card-front::before { opacity: 1; }

  body.fopl-dark .fopl-card-front {
    background: rgba(255,255,255,0.04);
    box-shadow: 0 4px 32px rgba(0,0,0,0.4);
    border-color: rgba(255,255,255,0.08);
  }
  .fopl-card-back {
    background: rgba(2,59,15,0.85);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    color: #fff;
    transform: rotateY(180deg);
    border: 1px solid rgba(212,168,83,0.2);
  }
  body.fopl-dark .fopl-card-back {
    background: rgba(10,18,12,0.9);
  }
  .fopl-card-back p {
    font-size: 0.9rem;
    line-height: 1.7;
    margin: 0 0 20px;
    color: rgba(255,255,255,0.8);
    font-family: 'Lato', sans-serif;
    font-weight: 300;
  }
  .fopl-card-back a {
    display: inline-block;
    color: #fff;
    font-family: 'Cabin', sans-serif;
    font-weight: 700;
    font-size: 0.72rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    text-decoration: none;
    border: 1px solid rgba(255,255,255,0.3);
    border-radius: 6px;
    padding: 10px 24px;
    transition: background 0.3s, border-color 0.3s, transform 0.3s;
  }
  .fopl-card-back a:hover {
    background: rgba(255,255,255,0.1);
    border-color: #fff;
    transform: translateY(-2px);
  }

  /* Staggered card entrance (wider delays) */
  .fopl-card-flip.fopl-reveal { transition-delay: 0s; }
  .fopl-card-flip.fopl-reveal:nth-child(2) { transition-delay: 0.1s; }
  .fopl-card-flip.fopl-reveal:nth-child(3) { transition-delay: 0.2s; }
  .fopl-card-flip.fopl-reveal:nth-child(4) { transition-delay: 0.3s; }

  .fopl-card-icon {
    width: 48px; height: 48px;
    margin: 0 auto 16px;
    border-radius: 50%;
    background: rgba(212,168,83,0.1);
    color: #d4a853;
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), background 0.4s;
    border: 1px solid rgba(212,168,83,0.2);
  }
  .fopl-card-flip:hover .fopl-card-icon {
    transform: scale(1.08);
    background: rgba(212,168,83,0.2);
  }
  body.fopl-dark .fopl-card-icon { background: rgba(212,168,83,0.08); color: #d4a853; border-color: rgba(212,168,83,0.15); }
  .fopl-card-front h3 {
    font-family: 'Libre Baskerville', serif;
    font-size: 1rem;
    font-weight: 700;
    color: #fff;
    text-transform: none;
    letter-spacing: 0.02em;
    margin: 0 0 10px;
    border: none;
  }
  body.fopl-dark .fopl-card-front h3 { color: #e8f5e9; }
  .fopl-card-front p { font-size: 0.85rem; color: rgba(255,255,255,0.55); line-height: 1.65; margin: 0; font-family: 'Lato', sans-serif; font-weight: 300; }
  body.fopl-dark .fopl-card-front p { color: rgba(255,255,255,0.5); }
  .fopl-card-flip-hint {
    font-size: 0.6rem;
    text-transform: uppercase;
    letter-spacing: 0.14em;
    color: rgba(255,255,255,0.2);
    font-family: 'Cabin', sans-serif;
    font-weight: 600;
    margin-top: 16px;
    transition: color 0.3s;
  }
  .fopl-card-flip:hover .fopl-card-flip-hint { color: rgba(212,168,83,0.5); }
  body.fopl-dark .fopl-card-flip-hint { color: rgba(255,255,255,0.12); }

  /* ── Animated line divider (replaces shelf) ── */
  .fopl-line-divider {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 32px 40px;
    position: relative;
    z-index: 2;
  }
  .fopl-line-divider-inner {
    width: 100%;
    max-width: 800px;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(212,168,83,0.25), rgba(45,184,77,0.12), rgba(212,168,83,0.25), transparent);
    position: relative;
  }
  .fopl-line-divider-dot {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: auto;
    height: auto;
    border-radius: 0;
    background: transparent;
    box-shadow: none;
    animation: none;
    padding: 6px 12px;
    background-color: #0f1a12;
  }
  body.fopl-dark .fopl-line-divider-dot { background-color: #0a0c0a; }

  /* ── About strip ── */
  .fopl-about {
    padding: 64px 48px;
    max-width: 840px;
    margin: 0 auto;
    text-align: center;
    background: rgba(255,255,255,0.03);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    border-radius: 20px;
    border: 1px solid rgba(255,255,255,0.06);
    position: relative;
    z-index: 2;
    transition: border-color 0.5s, background 0.5s;
  }
  .fopl-about:hover {
    border-color: rgba(212,168,83,0.15);
    background: rgba(255,255,255,0.05);
  }
  .fopl-about h2 {
    font-family: 'Cabin', sans-serif;
    font-size: 0.72rem;
    font-weight: 700;
    color: rgba(212,168,83,0.6) !important;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    margin: 0 0 24px;
    border: none;
  }
  .fopl-about-quote {
    position: relative;
    padding: 0 32px;
  }
  .fopl-about-quote::before {
    content: '\201C';
    font-family: 'Libre Baskerville', serif;
    font-size: 4rem;
    color: rgba(212,168,83,0.2);
    position: absolute;
    top: -24px;
    left: -8px;
    line-height: 1;
  }
  .fopl-about p {
    font-size: 1.1rem;
    color: rgba(255,255,255,0.65) !important;
    line-height: 2;
    margin: 0;
    font-family: 'Libre Baskerville', serif;
    font-weight: 400;
    font-style: italic;
    max-width: 560px;
    margin: 0 auto;
  }

  /* ── Quick Links section ── */
  .fopl-quick-links {
    background: rgba(0,0,0,0.12);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    padding: 48px 40px;
    text-align: center;
    border-top: 1px solid rgba(255,255,255,0.06);
    position: relative;
    z-index: 2;
  }
  body.fopl-dark .fopl-quick-links { background: rgba(0,0,0,0.25); }
  .fopl-quick-links h2 {
    font-family: 'Cabin', sans-serif;
    font-size: 0.72rem;
    font-weight: 700;
    color: rgba(212,168,83,0.6);
    text-transform: uppercase;
    letter-spacing: 0.2em;
    margin: 0 0 28px;
    border: none;
  }
  body.fopl-dark .fopl-quick-links h2 { color: rgba(212,168,83,0.5); }
  .fopl-quick-links-grid {
    display: flex;
    justify-content: center;
    gap: 12px;
    flex-wrap: wrap;
    max-width: 700px;
    margin: 0 auto;
  }
  .fopl-quick-link {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 10px 22px;
    background: rgba(255,255,255,0.04);
    color: rgba(255,255,255,0.8);
    font-family: 'Cabin', sans-serif;
    font-weight: 600;
    font-size: 0.72rem;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    text-decoration: none;
    border-radius: 24px;
    border: 1px solid rgba(255,255,255,0.1);
    transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), background 0.3s, border-color 0.3s, box-shadow 0.3s, color 0.3s;
    position: relative;
    overflow: hidden;
  }
  /* Hover glow for quick links */
  .fopl-quick-link::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(212,168,83,0.12), transparent 60%);
    opacity: 0;
    transition: opacity 0.3s;
  }
  .fopl-quick-link:hover::before { opacity: 1; }
  .fopl-quick-link:hover {
    background: rgba(255,255,255,0.05);
    border-color: rgba(212,168,83,0.35);
    transform: translateY(-2px);
    box-shadow: 0 4px 20px rgba(212,168,83,0.08);
  }
  body.fopl-dark .fopl-quick-link {
    border-color: rgba(212,168,83,0.15);
    color: #e8e4db;
  }
  body.fopl-dark .fopl-quick-link:hover {
    background: rgba(212,168,83,0.06);
    border-color: rgba(212,168,83,0.4);
  }
  .fopl-quick-link svg {
    width: 15px;
    height: 15px;
    flex-shrink: 0;
  }

  /* ── Smooth scroll ── */
  html { scroll-behavior: smooth; }

  /* ── Dark mode body overrides ── */
  body.fopl-dark { background: #0a0c0a !important; }
  body.fopl-dark .fopl-hero { background: #0a0c0a; }
  body.fopl-dark .fopl-about { color: #fff; }
  body.fopl-dark .fopl-grain { opacity: 0.04; }

  @media (max-width: 900px) {
    .fopl-hero { padding: 72px 20px 60px; min-height: 55vh; }
    .fopl-hero h1 { font-size: 2.8rem; }
  }
  @media (max-width: 640px) {
    .fopl-hero { padding: 56px 16px 48px; min-height: 50vh; }
    .fopl-hero h1 { font-size: 2rem; }
    .fopl-stat { padding: 0 24px; }
    .fopl-stat + .fopl-stat::before { height: 28px; }
    .fopl-hero-logo { height: 56px; }
    .fopl-hero-desc { font-size: 0.95rem; margin: 16px auto 32px; }
    .fopl-cards { padding: 32px 18px; gap: 16px; grid-template-columns: repeat(2, 1fr); }
    .fopl-about { padding: 36px 20px; }
    .fopl-stats { padding: 28px 20px; gap: 36px; }
    .fopl-stat-number { font-size: 2rem; }
    .fopl-quick-links { padding: 36px 20px; }
    .fopl-card-flip { min-height: 260px; }
    .fopl-card-flip-inner { min-height: 260px; }
    .fopl-spotlight { width: 300px; height: 300px; }
    .fopl-scroll-hint { display: none; }
  }
</style>

<!-- Fixed overlays: grain + spotlight + particles -->
<div class="fopl-grain"></div>
<div class="fopl-spotlight" id="fopl-spotlight"></div>
<div class="fopl-particles" id="fopl-particles"></div>

<!-- Hero -->
<div class="fopl-hero">
  <div class="fopl-hero-center">
    <p class="fopl-hero-tagline fopl-reveal">Supporting literacy since 1978</p>
    <div class="fopl-hero-logo-wrap fopl-reveal">
      <img class="fopl-hero-logo" id="fopl-hero-logo" src="{{ '/FOTPL/Images/fopllogo.png' | relative_url }}" alt="FOPL Logo">
    </div>
    <h1 id="fopl-hero-title" class="fopl-reveal"></h1>
    <p class="fopl-hero-desc fopl-reveal">
      A nonprofit volunteer organization supporting the Poway Library
      through fundraising, advocacy, and community programs.
    </p>
    <div class="fopl-hero-btns fopl-reveal">
      <a class="fopl-hero-btn primary" href="{{ '/bookstore' | relative_url }}">Visit Our Bookstore</a>
      <a class="fopl-hero-btn outline" href="{{ '/volunteer' | relative_url }}">Get Involved</a>
      <a class="fopl-hero-btn games" href="{{ '/puzzles' | relative_url }}">Play Games</a>
    </div>
  </div>
  <div class="fopl-scroll-hint">
    <span>Scroll to continue</span>
    <div class="fopl-scroll-arrow"></div>
  </div>
</div>

<!-- Stats counter -->
<div class="fopl-stats fopl-reveal">
  <div class="fopl-stat">
    <div class="fopl-stat-number" data-target="48">0</div>
    <div class="fopl-stat-label">Years Serving Poway</div>
  </div>
  <div class="fopl-stat">
    <div class="fopl-stat-number" data-target="1978">0</div>
    <div class="fopl-stat-label">Year Founded</div>
  </div>
  <div class="fopl-stat">
    <div class="fopl-stat-number">501(c)(3)</div>
    <div class="fopl-stat-label">Nonprofit Organization</div>
  </div>
</div>

<!-- Feature cards (book-flip) -->
<div class="fopl-cards">
  <div class="fopl-card-flip fopl-reveal">
    <div class="fopl-card-flip-inner">
      <div class="fopl-card-front">
        <div class="fopl-card-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/><line x1="9" y1="7" x2="15" y2="7"/><line x1="9" y1="11" x2="13" y2="11"/></svg>
        </div>
        <h3>Bookstore</h3>
        <p>Gently used books, magazines, DVDs, puzzles and more — all at great prices.</p>
        <span class="fopl-card-flip-hint">Hover to flip</span>
      </div>
      <div class="fopl-card-back">
        <p>Browse thousands of titles organized by genre. New inventory arrives weekly from generous community donations.</p>
        <a href="{{ '/bookstore' | relative_url }}">Browse the Store</a>
      </div>
    </div>
  </div>
  <div class="fopl-card-flip fopl-reveal">
    <div class="fopl-card-flip-inner">
      <div class="fopl-card-front">
        <div class="fopl-card-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="9" y1="13" x2="15" y2="13"/><line x1="9" y1="17" x2="15" y2="17"/></svg>
        </div>
        <h3>Newsletters</h3>
        <p>Stay up to date with our latest news, events, and library updates.</p>
        <span class="fopl-card-flip-hint">Hover to flip</span>
      </div>
      <div class="fopl-card-back">
        <p>Monthly updates featuring upcoming events, new arrivals, volunteer spotlights, and community stories.</p>
        <a href="{{ '/news' | relative_url }}">Read Newsletters</a>
      </div>
    </div>
  </div>
  <div class="fopl-card-flip fopl-reveal">
    <div class="fopl-card-flip-inner">
      <div class="fopl-card-front">
        <div class="fopl-card-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
        </div>
        <h3>Volunteer</h3>
        <p>Help sort donations, staff the bookstore, and support your community.</p>
        <span class="fopl-card-flip-hint">Hover to flip</span>
      </div>
      <div class="fopl-card-back">
        <p>Join our team of dedicated volunteers. Flexible schedules available — every hour makes a difference.</p>
        <a href="{{ '/contact' | relative_url }}">Join Us</a>
      </div>
    </div>
  </div>
  <div class="fopl-card-flip fopl-reveal">
    <div class="fopl-card-flip-inner">
      <div class="fopl-card-front">
        <div class="fopl-card-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
        </div>
        <h3>Visit Us</h3>
        <p>13137 Poway Rd, Poway CA 92064</p>
        <span class="fopl-card-flip-hint">Hover to flip</span>
      </div>
      <div class="fopl-card-back">
        <p>Located inside the Poway Branch Library. Call us at <strong>858-513-2862</strong> for hours and directions.</p>
        <a href="{{ '/contact' | relative_url }}">Get Directions</a>
      </div>
    </div>
  </div>
</div>

<!-- Animated line divider (open book) -->
<div class="fopl-line-divider">
  <div class="fopl-line-divider-inner">
    <div class="fopl-line-divider-dot">
      <svg width="20" height="16" viewBox="0 0 24 20" fill="none" stroke="rgba(212,168,83,0.6)" stroke-width="1.5" style="display:block">
        <path d="M2 3h6a4 4 0 0 1 4 4 4 4 0 0 1 4-4h6"/>
        <path d="M2 3v14a1 1 0 0 0 1 1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 0 1-1V3"/>
      </svg>
    </div>
  </div>
</div>

<!-- About -->
<div class="fopl-about fopl-reveal">
  <h2>Our Mission</h2>
  <div class="fopl-about-quote">
    <p>
      Rebuilding the Friends of the Poway Library website to make it modern, functional, and community-facing. Our goal is to give visitors a reason to return, with a live bookstore catalog, events, and interactive games.
    </p>
  </div>
</div>

<!-- Quick Links -->
<div class="fopl-quick-links fopl-reveal">
  <h2>Explore More</h2>
  <div class="fopl-quick-links-grid">
    <a class="fopl-quick-link" href="{{ '/history' | relative_url }}">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
      History
    </a>
    <a class="fopl-quick-link" href="{{ '/catalog' | relative_url }}">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
      Catalog
    </a>
    <a class="fopl-quick-link" href="{{ '/news' | relative_url }}">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
      Newsletters
    </a>
    <a class="fopl-quick-link" href="{{ '/puzzles' | relative_url }}">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="9" height="9" rx="1"/><rect x="13" y="2" width="9" height="9" rx="1"/><rect x="2" y="13" width="9" height="9" rx="1"/><rect x="13" y="13" width="9" height="9" rx="1"/></svg>
      Puzzles &amp; Games
    </a>
    <a class="fopl-quick-link" href="{{ '/contact' | relative_url }}">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
      Contact Us
    </a>
  </div>
</div>

<!-- Interactive scripts -->
<script>
(function() {
  // ── Dark mode: restore from localStorage ──
  if (localStorage.getItem('fopl_dark') === '1') {
    document.body.classList.add('fopl-dark');
  }

  // ══════════════════════════════════════════════
  // 1. MOUSE-TRACKING SPOTLIGHT (oryzo-style)
  // ══════════════════════════════════════════════
  var spotlight = document.getElementById('fopl-spotlight');
  var mouseX = 0, mouseY = 0;
  var spotlightActive = false;

  document.addEventListener('mousemove', function(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
    spotlight.style.left = mouseX + 'px';
    spotlight.style.top = mouseY + 'px';
    if (!spotlightActive) {
      spotlightActive = true;
      spotlight.classList.add('active');
    }
  });
  document.addEventListener('mouseleave', function() {
    spotlightActive = false;
    spotlight.classList.remove('active');
  });

  // ══════════════════════════════════════════════
  // 2. FLOATING PARTICLES (drift + mouse repel)
  // ══════════════════════════════════════════════
  var particleContainer = document.getElementById('fopl-particles');
  var particleCount = 18;
  var particles = [];
  var glyphs = ['A','B','p','e','§','&','L','r','k','d','R','f','¶','N','S','W','m','T'];

  for (var i = 0; i < particleCount; i++) {
    var p = document.createElement('div');
    p.className = 'fopl-particle';
    p.textContent = glyphs[i % glyphs.length];
    var size = 10 + Math.random() * 16;
    p.style.fontSize = size + 'px';
    p.style.left = Math.random() * 100 + '%';
    p.style.animationDuration = (18 + Math.random() * 28) + 's';
    p.style.animationDelay = -(Math.random() * 30) + 's';
    p.style.opacity = 0.06 + Math.random() * 0.1;
    particleContainer.appendChild(p);
    particles.push({ el: p, baseX: parseFloat(p.style.left), offsetX: 0 });
  }

  // Subtle mouse repulsion for particles
  var repelRAF;
  function repelParticles() {
    for (var i = 0; i < particles.length; i++) {
      var rect = particles[i].el.getBoundingClientRect();
      var px = rect.left + rect.width / 2;
      var py = rect.top + rect.height / 2;
      var dx = px - mouseX;
      var dy = py - mouseY;
      var dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 150) {
        var force = (150 - dist) / 150 * 20;
        particles[i].el.style.transform += ' translate(' + (dx / dist * force) + 'px, ' + (dy / dist * force) + 'px)';
      }
    }
    repelRAF = requestAnimationFrame(repelParticles);
  }
  repelRAF = requestAnimationFrame(repelParticles);

  // ══════════════════════════════════════════════
  // 3. QUICK LINK MOUSE GLOW (per-element tracking)
  // ══════════════════════════════════════════════
  var quickLinks = document.querySelectorAll('.fopl-quick-link');
  quickLinks.forEach(function(link) {
    link.addEventListener('mousemove', function(e) {
      var rect = link.getBoundingClientRect();
      var x = ((e.clientX - rect.left) / rect.width * 100);
      var y = ((e.clientY - rect.top) / rect.height * 100);
      link.style.setProperty('--mouse-x', x + '%');
      link.style.setProperty('--mouse-y', y + '%');
    });
  });

  // ══════════════════════════════════════════════
  // 4. MAGNETIC BUTTON EFFECT (hero buttons)
  // ══════════════════════════════════════════════
  var heroButtons = document.querySelectorAll('.fopl-hero-btn');
  heroButtons.forEach(function(btn) {
    btn.addEventListener('mousemove', function(e) {
      var rect = btn.getBoundingClientRect();
      var x = e.clientX - rect.left - rect.width / 2;
      var y = e.clientY - rect.top - rect.height / 2;
      btn.style.transform = 'translateY(-3px) translate(' + (x * 0.15) + 'px, ' + (y * 0.15) + 'px)';
    });
    btn.addEventListener('mouseleave', function() {
      btn.style.transform = '';
    });
  });

  // ══════════════════════════════════════════════
  // 5. TYPEWRITER EFFECT
  // ══════════════════════════════════════════════
  var title = 'Friends of the Poway Library';
  var el = document.getElementById('fopl-hero-title');
  if (el) {
    var idx = 0;
    var cursor = document.createElement('span');
    cursor.className = 'fopl-typewriter-cursor';
    el.textContent = '';
    el.appendChild(cursor);
    function type() {
      if (idx < title.length) {
        el.insertBefore(document.createTextNode(title[idx]), cursor);
        idx++;
        setTimeout(type, 50 + Math.random() * 30);
      } else {
        setTimeout(function() { cursor.style.display = 'none'; }, 2200);
      }
    }
    type();
  }

  // ══════════════════════════════════════════════
  // 6. SCROLL-REVEAL with stagger
  // ══════════════════════════════════════════════
  var reveals = document.querySelectorAll('.fopl-reveal');
  if ('IntersectionObserver' in window) {
    var obs = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    reveals.forEach(function(el) { obs.observe(el); });
  } else {
    reveals.forEach(function(el) { el.classList.add('visible'); });
  }

  // ══════════════════════════════════════════════
  // 7. COUNTER ANIMATION for stats
  // ══════════════════════════════════════════════
  var counters = document.querySelectorAll('.fopl-stat-number[data-target]');
  if ('IntersectionObserver' in window) {
    var cObs = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          var el = entry.target;
          var target = parseInt(el.getAttribute('data-target'), 10);
          var suffix = el.getAttribute('data-suffix') || '';
          var duration = 2000;
          var start = performance.now();
          function step(now) {
            var progress = Math.min((now - start) / duration, 1);
            var eased = 1 - Math.pow(1 - progress, 4);
            el.textContent = Math.floor(eased * target).toLocaleString() + suffix;
            if (progress < 1) requestAnimationFrame(step);
          }
          requestAnimationFrame(step);
          cObs.unobserve(el);
        }
      });
    }, { threshold: 0.3 });
    counters.forEach(function(el) { cObs.observe(el); });
  }

  // ══════════════════════════════════════════════
  // 8. SUBTLE PARALLAX on logo + title tilt on hover
  // ══════════════════════════════════════════════
  var heroLogo = document.getElementById('fopl-hero-logo');
  var heroTitle = document.getElementById('fopl-hero-title');
  var hero = document.querySelector('.fopl-hero');

  // Logo floats with mouse across whole hero
  if (hero && heroLogo) {
    heroLogo.style.transition = 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), filter 0.6s';
    hero.addEventListener('mousemove', function(e) {
      var rect = hero.getBoundingClientRect();
      var x = (e.clientX - rect.left) / rect.width - 0.5;
      var y = (e.clientY - rect.top) / rect.height - 0.5;
      heroLogo.style.transform = 'translate(' + (x * 10) + 'px, ' + (y * 6) + 'px)';
    });
    hero.addEventListener('mouseleave', function() {
      heroLogo.style.transform = 'translate(0, 0)';
    });
  }

  // Title 3D tilt — only when mouse is directly over the h1
  if (heroTitle) {
    heroTitle.addEventListener('mousemove', function(e) {
      var rect = heroTitle.getBoundingClientRect();
      var x = (e.clientX - rect.left) / rect.width - 0.5;
      var y = (e.clientY - rect.top) / rect.height - 0.5;
      heroTitle.style.transform = 'perspective(800px) rotateY(' + (x * 6) + 'deg) rotateX(' + (-y * 4) + 'deg)';
    });
    heroTitle.addEventListener('mouseleave', function() {
      heroTitle.style.transform = 'perspective(800px) rotateY(0deg) rotateX(0deg)';
    });
  }
})();
</script>


