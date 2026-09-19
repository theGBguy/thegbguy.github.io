(() => {
    'use strict';
    document.documentElement.classList.add('js');
    const menuButton = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.nav-menu');
    const themeButton = document.getElementById('darkModeToggle');
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)');
    let preference = null;
    try { preference = localStorage.getItem('theme'); } catch { /* Storage may be unavailable. */ }
    function applyTheme(dark) {
        document.body.classList.toggle('dark-mode', dark);
        themeButton.setAttribute('aria-label', `Switch to ${dark ? 'light' : 'dark'} theme`);
    }
    applyTheme(preference ? preference === 'dark' : systemTheme.matches);
    themeButton.hidden = false;
    themeButton.addEventListener('click', () => {
        const dark = !document.body.classList.contains('dark-mode');
        preference = dark ? 'dark' : 'light';
        applyTheme(dark);
        try { localStorage.setItem('theme', preference); } catch { /* Theme still works for this visit. */ }
    });
    systemTheme.addEventListener('change', event => { if (!preference) applyTheme(event.matches); });
    function closeMenu(returnFocus = false) {
        menu.classList.remove('open');
        menuButton.setAttribute('aria-expanded', 'false');
        if (returnFocus) menuButton.focus();
    }
    menuButton.hidden = false;
    menuButton.addEventListener('click', () => {
        const open = menu.classList.toggle('open');
        menuButton.setAttribute('aria-expanded', String(open));
    });
    function focusDestination(link) {
        const target = document.getElementById(link.hash.slice(1));
        if (!target) return;
        target.setAttribute('tabindex', '-1');
        target.focus({ preventScroll: true });
        target.addEventListener('blur', () => target.removeAttribute('tabindex'), { once: true });
    }
    menu.addEventListener('click', event => {
        const link = event.target.closest('a');
        if (!link) return;
        closeMenu();
        // Move focus out of the menu before it becomes hidden on mobile.
        if (window.matchMedia('(max-width: 760px)').matches) focusDestination(link);
    });
    const bottomNav = document.querySelector('.bottom-nav');
    bottomNav.addEventListener('click', event => {
        const link = event.target.closest('a');
        if (!link) return;
        closeMenu();
        focusDestination(link);
    });
    document.addEventListener('keydown', event => {
        if (event.key === 'Escape' && menu.classList.contains('open')) closeMenu(true);
    });
    window.matchMedia('(max-width: 760px)').addEventListener('change', () => closeMenu());
    document.getElementById('currentYear').textContent = new Date().getFullYear();
    // Preserve direct links to the education section, even though it is a disclosure.
    function revealAnchor() {
        if (location.hash === '#education') document.getElementById('education').open = true;
    }
    revealAnchor();
    window.addEventListener('hashchange', revealAnchor);
    // Each gallery has independent device selection, scroll position, and announcements.
    // Without JavaScript, every store image remains available in the horizontal track.
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    document.querySelectorAll('.product-gallery').forEach(gallery => {
        const track = gallery.querySelector('.gallery-track');
        const allSlides = [...track.querySelectorAll('.gallery-slide')];
        const controls = gallery.querySelector('.gallery-controls');
        const selectors = [...controls.querySelectorAll('button')];
        const pagination = gallery.querySelector('.gallery-pagination');
        const arrows = [...pagination.querySelectorAll('button')];
        const status = gallery.querySelector('.gallery-status');
        const platformLabel = gallery.querySelector('.gallery-platform');
        let activePlatform = selectors[0].dataset.platform;
        let slides = [];
        let activeSlide = 0;
        let scrollTimer;

        function updateGallery(index) {
            activeSlide = Math.max(0, Math.min(index, slides.length - 1));
            arrows[0].disabled = activeSlide === 0;
            arrows[1].disabled = activeSlide === slides.length - 1;
            const label = `${activeSlide + 1} / ${slides.length}`;
            if (status.textContent !== label) status.textContent = label;
        }
        function showSlide(index, animate = true) {
            clearTimeout(scrollTimer);
            updateGallery(index);
            track.scrollTo({
                left: activeSlide * track.clientWidth,
                behavior: animate && !reducedMotion.matches ? 'smooth' : 'instant'
            });
        }
        function choosePlatform(button) {
            activePlatform = button.dataset.platform;
            allSlides.forEach(slide => { slide.hidden = slide.dataset.platform !== activePlatform; });
            slides = allSlides.filter(slide => !slide.hidden);
            slides.forEach((slide, index) => {
                slide.setAttribute('aria-label', `${index + 1} of ${slides.length}: ${button.textContent}, ${slide.dataset.label}`);
            });
            selectors.forEach(selector => selector.setAttribute('aria-pressed', String(selector === button)));
            if (platformLabel) platformLabel.textContent = button.textContent;
            showSlide(0, false);
        }
        selectors.forEach(button => button.addEventListener('click', () => choosePlatform(button)));
        arrows.forEach(button => {
            button.addEventListener('click', () => showSlide(activeSlide + Number(button.dataset.direction)));
        });
        function destinationForKey(key, index, total) {
            if (key === 'ArrowRight') return Math.min(index + 1, total - 1);
            if (key === 'ArrowLeft') return Math.max(index - 1, 0);
            if (key === 'Home') return 0;
            if (key === 'End') return total - 1;
            return null;
        }
        controls.addEventListener('keydown', event => {
            const current = selectors.findIndex(button => button.dataset.platform === activePlatform);
            const destination = destinationForKey(event.key, current, selectors.length);
            if (destination === null) return;
            event.preventDefault();
            choosePlatform(selectors[destination]);
            selectors[destination].focus();
        });
        track.addEventListener('keydown', event => {
            const destination = destinationForKey(event.key, activeSlide, slides.length);
            if (destination === null) return;
            event.preventDefault();
            // Keep focus on the track when navigating away from a screenshot link.
            // Otherwise focus could stay on a link that is no longer in view.
            if (event.target !== track) track.focus({ preventScroll: true });
            showSlide(destination);
        });
        function synchronizeScroll() {
            if (track.clientWidth) updateGallery(Math.round(track.scrollLeft / track.clientWidth));
        }
        track.addEventListener('scroll', () => {
            clearTimeout(scrollTimer);
            scrollTimer = setTimeout(synchronizeScroll, 160);
        }, { passive: true });
        track.addEventListener('scrollend', () => {
            clearTimeout(scrollTimer);
            synchronizeScroll();
        });
        if ('ResizeObserver' in window) {
            new ResizeObserver(() => showSlide(activeSlide, false)).observe(track);
        } else {
            window.addEventListener('resize', () => showSlide(activeSlide, false));
        }
        choosePlatform(selectors[0]);
        controls.hidden = selectors.length < 2;
        pagination.hidden = false;
    });
    if ('ResizeObserver' in window) {
        // Reserve the actual bottom bar height, including safe areas and enlarged text.
        new ResizeObserver(() => {
            document.documentElement.style.setProperty(
                '--bottom-nav-clearance', `${Math.ceil(bottomNav.getBoundingClientRect().height)}px`
            );
        }).observe(bottomNav);
    }

    if ('IntersectionObserver' in window) {
        const navLinks = [...menu.querySelectorAll('a')];
        const bottomLinks = [...bottomNav.querySelectorAll('a')];
        const mobileSections = {
            portfolio: 'portfolio', services: 'portfolio',
            experience: 'about', about: 'about', testimonials: 'about', contact: 'contact'
        };
        function highlight(links, id) {
            links.forEach(link => {
                if (link.hash === `#${id}`) link.setAttribute('aria-current', 'location');
                else link.removeAttribute('aria-current');
            });
        }
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                highlight(navLinks, entry.target.id);
                highlight(bottomLinks, mobileSections[entry.target.id]);
            });
        }, { rootMargin: '-15% 0px -65% 0px' });
        document.querySelectorAll('main > section[id]').forEach(section => observer.observe(section));
    }
})();
