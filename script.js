/* ═══════════════════════════════════════════════════
   DEUCES — Tennis & Padel Academy
   Interactive Behaviours
═══════════════════════════════════════════════════ */

(function () {
    'use strict';

    /* ── State ──────────────────────────────────── */
    let currentLang = 'en';

    /* ════════════════════════════════════════════
       1. LANGUAGE TOGGLE
    ════════════════════════════════════════════ */
    const langBtns = document.querySelectorAll('.lang-btn');

    function applyLanguage(lang) {
        currentLang = lang;

        // Update all bilingual text nodes
        document.querySelectorAll('[data-nl]').forEach(el => {
            const text = el.getAttribute('data-' + lang);
            if (text !== null) {
                // Use innerHTML to support <br> tags in content
                el.innerHTML = text;
            }
        });

        // Update active button state
        langBtns.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });

        // Update html lang attribute
        document.documentElement.lang = lang === 'nl' ? 'nl' : 'en';

        // Persist preference
        try { localStorage.setItem('deuces-lang', lang); } catch (e) {}
    }

    langBtns.forEach(btn => {
        btn.addEventListener('click', () => applyLanguage(btn.dataset.lang));
    });

    // Restore saved preference
    (function restoreLang() {
        try {
            const saved = localStorage.getItem('deuces-lang');
            if (saved && (saved === 'nl' || saved === 'en')) {
                applyLanguage(saved);
                return;
            }
        } catch (e) {}
        applyLanguage('en');
    })();


    /* ════════════════════════════════════════════
       2. NAVBAR SCROLL EFFECT
    ════════════════════════════════════════════ */
    const navbar = document.getElementById('navbar');

    function onScroll() {
        if (window.scrollY > 60) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // run once on load


    /* ════════════════════════════════════════════
       3. FULLSCREEN MENU OVERLAY
    ════════════════════════════════════════════ */
    const hamburger   = document.getElementById('hamburger');
    const menuOverlay = document.getElementById('menuOverlay');
    const menuLinks   = document.querySelectorAll('.menu-overlay-link');
    const menuImgs    = document.querySelectorAll('.menu-img');

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
        // Clear active image
        menuImgs.forEach(img => img.classList.remove('active'));
    }

    hamburger.addEventListener('click', () => {
        menuOverlay.classList.contains('open') ? closeMenu() : openMenu();
    });

    // Close when a link is clicked
    menuLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // Close overlay-logo click
    const menuOverlayLogo = document.getElementById('menuOverlayLogo');
    if (menuOverlayLogo) {
        menuOverlayLogo.addEventListener('click', closeMenu);
    }

    // Close overlay CTA
    const menuOverlayCta = document.querySelector('.menu-overlay-cta');
    if (menuOverlayCta) {
        menuOverlayCta.addEventListener('click', closeMenu);
    }

    // Hover image switching
    menuLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            const key = link.dataset.img;
            menuImgs.forEach(img => {
                const targets = img.dataset.for ? img.dataset.for.split(' ') : [];
                img.classList.toggle('active', targets.includes(key));
            });
        });
        link.addEventListener('mouseleave', () => {
            menuImgs.forEach(img => img.classList.remove('active'));
        });
    });

    // Escape key closes menu
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && menuOverlay.classList.contains('open')) closeMenu();
    });

    // Mark active page in overlay
    (function markActivePage() {
        const page = window.location.pathname.split('/').pop() || 'index.html';
        const pageMap = {
            'about.html': 'about',
            'courts.html': 'courts',
            'facilities.html': 'facilities',
            'coaching.html': 'coaching',
            'membership.html': 'membership',
            'shop.html': 'shop',
            'contact.html': 'contact'
        };
        const key = pageMap[page];
        if (key) {
            const link = document.querySelector(`.menu-overlay-link[data-img="${key}"]`);
            if (link) link.classList.add('active');
        }
    })();


    /* ════════════════════════════════════════════
       4. SMOOTH SCROLL (for older browsers)
    ════════════════════════════════════════════ */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (!target) return;
            e.preventDefault();
            const navH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h')) || 76;
            const top  = target.getBoundingClientRect().top + window.scrollY - navH;
            window.scrollTo({ top, behavior: 'smooth' });
        });
    });


    /* ════════════════════════════════════════════
       5. INTERSECTION OBSERVER — Scroll Animations
    ════════════════════════════════════════════ */
    const observerOpts = {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px'
    };

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');

                // Cascade animate children inside the section
                entry.target.querySelectorAll('.animate-child').forEach((child, i) => {
                    setTimeout(() => child.classList.add('visible'), i * 100);
                });

                sectionObserver.unobserve(entry.target);
            }
        });
    }, observerOpts);

    document.querySelectorAll('.animate-section').forEach(el => {
        sectionObserver.observe(el);
    });


    /* ════════════════════════════════════════════
       6. COACHING TABS
    ════════════════════════════════════════════ */
    const tabBtns   = document.querySelectorAll('.tab-btn');
    const tabPanels = document.querySelectorAll('.tab-panel');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const target = btn.dataset.tab;

            // Update button states
            tabBtns.forEach(b => b.classList.toggle('active', b === btn));

            // Show the correct panel
            tabPanels.forEach(panel => {
                panel.classList.toggle('active', panel.id === 'tab-' + target);
            });
        });
    });


    /* ════════════════════════════════════════════
       7. SHOP — Cart button feedback
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
