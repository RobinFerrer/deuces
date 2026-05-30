/* ═══════════════════════════════════════════════════
   DEUCES — Tennis & Padel Academy
   Interactive Behaviours
═══════════════════════════════════════════════════ */

(function () {
    'use strict';

    /* ── State ──────────────────────────────────── */
    let currentLang = 'en';

    /* ════════════════════════════════════════════
       1. LANGUAGE
    ════════════════════════════════════════════ */
    function applyLanguage(lang) {
        currentLang = lang;

        document.querySelectorAll('[data-nl]').forEach(el => {
            const text = el.getAttribute('data-' + lang);
            if (text !== null) el.innerHTML = text;
        });

        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });

        document.documentElement.lang = lang === 'nl' ? 'nl' : 'en';

        try { localStorage.setItem('deuces-lang', lang); } catch (e) {}
    }

    // Restore saved preference (sets currentLang before header loads)
    (function restoreLang() {
        try {
            const saved = localStorage.getItem('deuces-lang');
            if (saved === 'nl' || saved === 'en') {
                currentLang = saved;
            }
        } catch (e) {}
        // Apply to page content immediately (header will re-apply after inject)
        applyLanguage(currentLang);
    })();


    /* ════════════════════════════════════════════
       2. HEADER INJECT
    ════════════════════════════════════════════ */
    function initHeader() {
        /* ── Navbar scroll effect ─────────────── */
        const navbar = document.getElementById('navbar');
        if (navbar) {
            let lastScrollY = window.scrollY;
            let ticking = false;
            const HIDE_THRESHOLD = 80;
            const DELTA = 6;

            function update() {
                const y = window.scrollY;
                navbar.classList.toggle('scrolled', y > 60);

                if (Math.abs(y - lastScrollY) > DELTA) {
                    if (y > lastScrollY && y > HIDE_THRESHOLD) {
                        navbar.classList.add('nav-hidden');
                    } else {
                        navbar.classList.remove('nav-hidden');
                    }
                    lastScrollY = y;
                }
                ticking = false;
            }

            function onScroll() {
                if (!ticking) {
                    window.requestAnimationFrame(update);
                    ticking = true;
                }
            }
            window.addEventListener('scroll', onScroll, { passive: true });
            update();
        }

        /* ── Hamburger / overlay ──────────────── */
        const hamburger   = document.getElementById('hamburger');
        const menuOverlay = document.getElementById('menuOverlay');
        if (!hamburger || !menuOverlay) return;

        const menuLinks = document.querySelectorAll('.menu-overlay-link');

        function openMenu() {
            menuOverlay.classList.add('open');
            menuOverlay.setAttribute('aria-hidden', 'false');
            hamburger.classList.add('open');
            hamburger.setAttribute('aria-expanded', 'true');
            document.body.style.overflow = 'hidden';
        }

        function closeMenu() {
            menuOverlay.classList.remove('open');
            menuOverlay.setAttribute('aria-hidden', 'true');
            hamburger.classList.remove('open');
            hamburger.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        }

        hamburger.addEventListener('click', () => {
            menuOverlay.classList.contains('open') ? closeMenu() : openMenu();
        });

        menuLinks.forEach(link => link.addEventListener('click', closeMenu));

        /* Expand/collapse parent groups */
        document.querySelectorAll('.menu-overlay-toggle').forEach(toggle => {
            toggle.addEventListener('click', () => {
                const expanded = toggle.getAttribute('aria-expanded') === 'true';
                const sub = document.getElementById(toggle.getAttribute('aria-controls'));
                toggle.setAttribute('aria-expanded', expanded ? 'false' : 'true');
                if (sub) sub.hidden = expanded;
            });
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && menuOverlay.classList.contains('open')) closeMenu();
        });

        /* Close the menu if the viewport grows past the hamburger breakpoint */
        window.addEventListener('resize', () => {
            if (window.innerWidth > 720 && menuOverlay.classList.contains('open')) {
                closeMenu();
            }
        });

        /* ── Lang buttons (re-bind after inject) ─ */
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.addEventListener('click', () => applyLanguage(btn.dataset.lang));
        });

        /* ── Active page mark ─────────────────── */
        (function markActivePage() {
            const page = window.location.pathname.split('/').pop() || 'index.html';

            // Mark active overlay link
            const overlayMap = {
                'index.html':     'home',
                'tennis.html':    'tennis',
                'padel.html':     'padel',
                'pro.html':       'coaching',
                'coaching.html':  'coaching',
                'story.html':     'story',
                'values.html':    'story',
                'facilities.html':'facilities',
                'pricing.html':   'facilities',
                'coaches.html':   'story',
                'matches.html':   'events',
                'camps.html':     'events',
                'shop.html':      'merch',
                'contact.html':   'contact',
                'courts.html':    'contact',
                'academy.html':   'tennis',
                'club.html':      'story',
                'events.html':    'events'
            };
            const overlayKey = overlayMap[page];
            if (overlayKey) {
                const link = document.querySelector(`.menu-overlay-link[href="${page}"]`)
                          || document.querySelector(`.menu-overlay-link[data-img="${overlayKey}"]`);
                if (link) {
                    link.classList.add('active');
                    // If active link is inside a collapsible group, expand it
                    const sublist = link.closest('.menu-overlay-sublist');
                    if (sublist) {
                        sublist.hidden = false;
                        const toggle = document.querySelector(`[aria-controls="${sublist.id}"]`);
                        if (toggle) toggle.setAttribute('aria-expanded', 'true');
                    }
                }
            }

            // Mark active top-level nav group
            const navMap = {
                'index.html':     'home',
                'tennis.html':    'academy',
                'padel.html':     'academy',
                'pro.html':       'academy',
                'coaching.html':  'academy',
                'academy.html':   'academy',
                'story.html':     'club',
                'values.html':    'club',
                'facilities.html':'club',
                'pricing.html':   'club',
                'coaches.html':   'club',
                'club.html':      'club',
                'matches.html':   'events',
                'camps.html':     'events',
                'events.html':    'events',
                'shop.html':      'merch',
                'contact.html':   'contact'
            };
            const group = navMap[page];
            if (group) {
                document.querySelectorAll('.nav-item').forEach(item => {
                    const link = item.querySelector('.nav-link');
                    if (!link) return;
                    const en = (link.getAttribute('data-en') || '').toLowerCase();
                    if (en === group || (group === 'home' && link.getAttribute('href') === 'index.html')) {
                        item.classList.add('active');
                    }
                });
            }
        })();

        // Re-apply current language to newly injected header elements
        applyLanguage(currentLang);
    }

    function loadHeader() {
        const placeholder = document.getElementById('header-placeholder');
        if (!placeholder) return;

        fetch('header.html')
            .then(r => {
                if (!r.ok) throw new Error('header fetch failed');
                return r.text();
            })
            .then(html => {
                placeholder.innerHTML = html;
                initHeader();
            })
            .catch(() => {
                // Silently fail (e.g. file:// protocol) — pages still render
            });
    }

    loadHeader();


    /* ════════════════════════════════════════════
       3. SMOOTH SCROLL
    ════════════════════════════════════════════ */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (!target) return;
            e.preventDefault();
            const navH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h')) || 76;
            window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - navH, behavior: 'smooth' });
        });
    });


    /* ════════════════════════════════════════════
       4. SCROLL ANIMATIONS
    ════════════════════════════════════════════ */
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                entry.target.querySelectorAll('.animate-child').forEach((child, i) => {
                    setTimeout(() => child.classList.add('visible'), i * 100);
                });
                sectionObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.animate-section').forEach(el => sectionObserver.observe(el));


    /* ════════════════════════════════════════════
       5. COACHING TABS
    ════════════════════════════════════════════ */
    const tabBtns   = document.querySelectorAll('.tab-btn');
    const tabPanels = document.querySelectorAll('.tab-panel');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const target = btn.dataset.tab;
            tabBtns.forEach(b => b.classList.toggle('active', b === btn));
            tabPanels.forEach(panel => panel.classList.toggle('active', panel.id === 'tab-' + target));
        });
    });


    /* ════════════════════════════════════════════
       6. SHOP — Cart button feedback
    ════════════════════════════════════════════ */
    document.querySelectorAll('.btn-cart').forEach(btn => {
        btn.addEventListener('click', function () {
            this.style.background = '#EC672C';
            this.style.color = '#fff';
            setTimeout(() => {
                this.style.background = '';
                this.style.color = '';
            }, 1800);
        });
    });

})();
