document.addEventListener('DOMContentLoaded', () => {

    // --- Mobile Menu ---
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu when a link is clicked
        navLinks.forEach(link => link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }));
    }

    // --- Active Navigation Link Highlighting with Throttling ---
    const sections = document.querySelectorAll('section[id]'); // Select all sections with an ID

    // Throttle function for performance
    function throttle(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    function navHighlighter() {
        let scrollY = window.pageYOffset; // Get current scroll position

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            // OffsetTop gives distance from top of the page to the top of the section
            // Adjust the trigger point slightly before the section top
            const sectionTop = current.offsetTop - 100; // Adjusted offset
            let sectionId = current.getAttribute('id');

            // Check if current scroll position is within the section's bounds
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                // Remove 'active' class from all nav links
                navLinks.forEach(link => link.classList.remove('active'));
                // Add 'active' class to the corresponding nav link
                const activeLink = document.querySelector('.nav-menu a[href*=' + sectionId + ']');
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });

        // Special case for top of page (Hero section)
        if (sections.length > 0 && scrollY < sections[0].offsetTop - 100) {
            navLinks.forEach(link => link.classList.remove('active'));
            const homeLink = document.querySelector('.nav-menu a[href*="home"]');
            if (homeLink) {
                homeLink.classList.add('active');
            }
        }
    }

    // Apply throttling to scroll event (fires max once every 100ms)
    window.addEventListener('scroll', throttle(navHighlighter, 100));
    navHighlighter(); // Call once on load


    // --- Dark Mode Toggle ---
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;
    const moonIcon = darkModeToggle.querySelector('.fa-moon');
    const sunIconHTML = '<i class="fas fa-sun"></i>'; // Sun icon for light mode

    // Function to set the theme
    function setTheme(theme) {
        if (theme === 'dark') {
            body.classList.add('dark-mode');
            darkModeToggle.innerHTML = sunIconHTML; // Show sun icon in dark mode
            localStorage.setItem('theme', 'dark');
        } else {
            body.classList.remove('dark-mode');
            darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>'; // Show moon icon in light mode
            localStorage.setItem('theme', 'light');
        }
    }

    // Check local storage for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    // Check OS preference if no saved theme
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme) {
        setTheme(savedTheme);
    } else if (prefersDark) {
        setTheme('dark'); // Default to dark if OS prefers it and no setting saved
    } else {
        setTheme('light'); // Default to light
    }


    // Toggle theme on button click
    darkModeToggle.addEventListener('click', () => {
        if (body.classList.contains('dark-mode')) {
            setTheme('light');
        } else {
            setTheme('dark');
        }
    });

    // Listen for OS theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
        // Only change if no theme explicitly saved by user
        if (!localStorage.getItem('theme')) {
            setTheme(event.matches ? 'dark' : 'light');
        }
    });


    // --- Footer Current Year ---
    const currentYearSpan = document.getElementById('currentYear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // --- Scroll Progress Bar ---
    const progressBar = document.querySelector('.scroll-progress');
    if (progressBar) {
        const updateProgress = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
            progressBar.style.width = pct + '%';
        };
        window.addEventListener('scroll', updateProgress, { passive: true });
        updateProgress();
    }

    // --- Cursor Glow ---
    const cursorGlow = document.querySelector('.cursor-glow');
    if (cursorGlow && window.matchMedia('(hover: hover)').matches) {
        let raf = null;
        let tx = 0, ty = 0;
        window.addEventListener('mousemove', (e) => {
            tx = e.clientX;
            ty = e.clientY;
            if (!raf) {
                raf = requestAnimationFrame(() => {
                    cursorGlow.style.transform = `translate(${tx}px, ${ty}px) translate(-50%, -50%)`;
                    raf = null;
                });
            }
        }, { passive: true });
    }

    // --- Hero Phone Screenshot Cycling ---
    const shots = document.querySelectorAll('.phone-shot');
    if (shots.length > 1) {
        let idx = 0;
        setInterval(() => {
            shots[idx].classList.remove('active');
            idx = (idx + 1) % shots.length;
            shots[idx].classList.add('active');
        }, 2800);
    }

    // --- Scroll Animations (Intersection Observer) ---
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show-element');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    const hiddenElements = document.querySelectorAll('.hidden-element');
    hiddenElements.forEach((el) => {
        observer.observe(el);
    });

});