/* ==========================================================================
   Main JavaScript — Afeef Kallanthodan Portfolio
   ========================================================================== */

(function () {
    'use strict';

    // --- DOM Elements ---
    const header = document.getElementById('navbar');
    const hamburger = document.getElementById('nav-hamburger');
    const navLinks = document.getElementById('nav-links');
    const backToTop = document.getElementById('back-to-top');
    const sections = document.querySelectorAll('.section');
    const navAnchors = navLinks.querySelectorAll('a');
    const demoVideos = document.querySelectorAll('.project-demo-video video');

    // --- Project Demo Videos ---
    demoVideos.forEach(function (video) {
        var playbackRate = parseFloat(video.getAttribute('data-playback-rate')) || 1;
        video.playbackRate = playbackRate;

        video.addEventListener('loadedmetadata', function () {
            video.playbackRate = playbackRate;
        });
    });

    // --- Mobile Navigation Toggle ---
    hamburger.addEventListener('click', function () {
        const isOpen = navLinks.classList.toggle('open');
        hamburger.classList.toggle('open');
        hamburger.setAttribute('aria-expanded', isOpen);
    });

    // Close mobile menu when a nav link is clicked
    navAnchors.forEach(function (link) {
        link.addEventListener('click', function () {
            navLinks.classList.remove('open');
            hamburger.classList.remove('open');
            hamburger.setAttribute('aria-expanded', 'false');
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function (e) {
        if (!header.contains(e.target) && navLinks.classList.contains('open')) {
            navLinks.classList.remove('open');
            hamburger.classList.remove('open');
            hamburger.setAttribute('aria-expanded', 'false');
        }
    });

    // Close mobile menu on Escape key
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && navLinks.classList.contains('open')) {
            navLinks.classList.remove('open');
            hamburger.classList.remove('open');
            hamburger.setAttribute('aria-expanded', 'false');
        }
    });

    // --- Navbar Shadow on Scroll ---
    var scrollTicking = false;

    function onScroll() {
        if (!scrollTicking) {
            window.requestAnimationFrame(function () {
                // Navbar shadow
                if (window.scrollY > 10) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }

                // Back to top visibility
                if (window.scrollY > 500) {
                    backToTop.classList.add('visible');
                } else {
                    backToTop.classList.remove('visible');
                }

                scrollTicking = false;
            });
            scrollTicking = true;
        }
    }

    window.addEventListener('scroll', onScroll, { passive: true });

    // --- Back to Top ---
    backToTop.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // --- Active Section Highlighting ---
    var sectionObserver = new IntersectionObserver(
        function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    var id = entry.target.getAttribute('id');
                    navAnchors.forEach(function (a) {
                        a.classList.remove('active');
                        if (a.getAttribute('href') === '#' + id) {
                            a.classList.add('active');
                        }
                    });
                }
            });
        },
        {
            rootMargin: '-' + (parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-height')) || 64) + 'px 0px -50% 0px',
            threshold: 0
        }
    );

    sections.forEach(function (section) {
        sectionObserver.observe(section);
    });

    // --- Scroll-Triggered Fade-In Animations ---
    var fadeElements = document.querySelectorAll('.fade-in');

    var fadeObserver = new IntersectionObserver(
        function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    fadeObserver.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.1,
            rootMargin: '0px 0px -40px 0px'
        }
    );

    fadeElements.forEach(function (el) {
        fadeObserver.observe(el);
    });

    // --- Experience Timeline Pointer Depth ---
    (function initTimelinePointerDepth() {
        if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
            return;
        }

        var timelineItems = document.querySelectorAll('.timeline-item');

        timelineItems.forEach(function (item) {
            item.addEventListener('pointermove', function (event) {
                var rect = item.getBoundingClientRect();
                var x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
                var y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;

                item.style.setProperty('--tilt-x', (y * -4).toFixed(2) + 'deg');
                item.style.setProperty('--tilt-y', (x * 5).toFixed(2) + 'deg');
                item.style.setProperty('--lift-x', (x * 10).toFixed(2) + 'px');
                item.style.setProperty('--lift-y', (y * 10).toFixed(2) + 'px');
            });

            item.addEventListener('pointerleave', function () {
                item.style.setProperty('--tilt-x', '0deg');
                item.style.setProperty('--tilt-y', '0deg');
                item.style.setProperty('--lift-x', '0px');
                item.style.setProperty('--lift-y', '0px');
            });
        });
    })();

    // --- Trigger initial scroll check ---
    onScroll();

    // --- Typing Effect ---
    const roles = [
        "Embedded Software Development Engineer",
        "Control Systems Engineer",
        "Model-Based Design Specialist",
        "Automotive Software Engineer"
    ];
    
    const typeWriterElement = document.getElementById('typewriter');
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeDelay = 100;

    function typeWriter() {
        if (!typeWriterElement) return;

        const currentRole = roles[roleIndex];
        
        if (isDeleting) {
            typeWriterElement.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
            typeDelay = 50;
        } else {
            typeWriterElement.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
            typeDelay = 100;
        }

        if (!isDeleting && charIndex === currentRole.length) {
            isDeleting = true;
            typeDelay = 2000; // Pause at end
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            typeDelay = 500; // Pause before new word
        }

        setTimeout(typeWriter, typeDelay);
    }

    // Start typing effect
    if (typeWriterElement) {
        typeWriterElement.classList.add('typing-cursor');
        typeWriter();
    }

    // --- Global Engineering Keyword Overlay (Aerospace + Embedded) ---
    (function initKeywordOverlay() {
        var aerospace = [
            'Hydraulic Systems', 'Weapon Bay KIN', 'Landing Gear KIN',
            'ECS / Bleed Air',   'Flight Control',  'CATIA V5',
            'Aerospace R&D',     'Concept Design',   'Fly-by-Wire',
            'ADA / DRDO',        'Actuator Ctrl',   'Env. Control Sys'
        ];
        var embedded = [
            'AUTOSAR',      'CAN / LIN',    'Motor FOC',
            'ISO 26262',    'MISRA-C',      'IPMSM Drive',
            'TargetLink',   'ASPICE L2',    'MATLAB / SL',
            '0xFFE4>>2',    'CANoe / DB++', 'Req. Traceability'
        ];

        // Interleave aerospace and embedded keywords
        var all = [];
        var maxLen = Math.max(aerospace.length, embedded.length);
        for (var k = 0; k < maxLen; k++) {
            if (k < aerospace.length) all.push({ label: aerospace[k], type: 'aero' });
            if (k < embedded.length)  all.push({ label: embedded[k],  type: 'emb'  });
        }

        var allSections = document.querySelectorAll('.section, .hero');
        var kwIdx = 0;

        allSections.forEach(function (section, sIdx) {
            // Ensure the section is positioned for absolute children
            if (getComputedStyle(section).position === 'static') {
                section.style.position = 'relative';
            }

            // 2 chips per section (1 left, 1 right), skip hero (already has htf badges)
            var chipsPerSection = section.classList.contains('hero') ? 0 : 2;

            for (var i = 0; i < chipsPerSection; i++) {
                var kw = all[kwIdx % all.length];
                kwIdx++;

                var chip = document.createElement('span');
                chip.className = 'gkw-chip' + (kw.type === 'aero' ? ' aero' : '');
                chip.setAttribute('aria-hidden', 'true');
                chip.innerHTML = '<i></i>' + kw.label;

                var isLeft   = i % 2 === 0;
                var leftPct  = isLeft ? (1 + Math.random() * 6) : (93 + Math.random() * 5);
                var topPct   = 20 + i * 40 + Math.random() * 20;

                chip.style.left             = leftPct.toFixed(1) + '%';
                chip.style.top              = topPct.toFixed(1)  + '%';
                chip.style.animationDelay   = (Math.random() * 7).toFixed(1) + 's';
                chip.style.animationDuration= (5 + Math.random() * 5).toFixed(1) + 's';

                section.appendChild(chip);
            }
        });
    })();

    // --- Automatic Stagger for Grids ---
    // Finds containers with .stagger-grid and adds fade-in + delay to children
    const staggerGrids = document.querySelectorAll('.stagger-grid');
    staggerGrids.forEach(grid => {
        const children = grid.children;
        Array.from(children).forEach((child, index) => {
            child.classList.add('fade-in');
            // Cycle delays: 100, 200, 300, 100...
            const delay = ((index % 5) + 1) * 100;
            child.classList.add(`delay-${delay}`);
            // Observe the child
            fadeObserver.observe(child);
        });
    });

// ===== OVERVIEW SECTION CHARTS =====
(function () {
    'use strict';

    // --- Count-up animation ---
    function animateCount(el, target, duration) {
        var start = 0;
        var step = target / (duration / 16);
        var suffix = el.dataset.suffix || '';
        function tick() {
            start = Math.min(start + step, target);
            el.textContent = Math.floor(start) + suffix;
            if (start < target) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
    }

    // --- Reveal timeline bars ---
    function revealTimeline() {
        var bars = document.querySelectorAll('.timeline-bar[data-width]');
        bars.forEach(function (bar) {
            // Small stagger per row
            var row = bar.closest('.timeline-row');
            var idx = row ? Array.from(row.parentNode.children).indexOf(row) : 0;
            setTimeout(function () {
                bar.style.width = bar.dataset.width + '%';
            }, idx * 120);
        });
    }

    // --- Reveal donut segments ---
    function revealDonut() {
        var segs = document.querySelectorAll('.donut-seg[data-dash]');
        segs.forEach(function (seg, i) {
            setTimeout(function () {
                seg.style.strokeDasharray = seg.dataset.dash;
            }, i * 80);
        });
    }

    // --- Reveal radar polygon ---
    function revealRadar() {
        var poly = document.getElementById('radar-data-poly');
        if (poly && poly.dataset.points) {
            setTimeout(function () {
                poly.setAttribute('points', poly.dataset.points);
            }, 200);
        }
        // Animate dots to their final positions
        var dots = document.querySelectorAll('.radar-dot[data-cx]');
        dots.forEach(function (dot, i) {
            setTimeout(function () {
                dot.setAttribute('cx', dot.dataset.cx);
                dot.setAttribute('cy', dot.dataset.cy);
            }, 200 + i * 60);
        });
    }

    // --- IntersectionObserver for #overview ---
    var overviewSection = document.getElementById('overview');
    if (overviewSection) {
        var triggered = false;
        var obs = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting && !triggered) {
                    triggered = true;
                    // Stat counters
                    var statEls = overviewSection.querySelectorAll('.stat-value[data-count]');
                    statEls.forEach(function (el) {
                        animateCount(el, parseInt(el.dataset.count, 10), 1800);
                    });
                    revealTimeline();
                    revealDonut();
                    revealRadar();
                }
            });
        }, { threshold: 0.15 });
        obs.observe(overviewSection);
    }
}());

})();
