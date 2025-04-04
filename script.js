document.addEventListener('DOMContentLoaded', () => {

    // --- Mobile Menu ---
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when a link is clicked
    navLinks.forEach(link => link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }));

    // --- Active Navigation Link Highlighting ---
    const sections = document.querySelectorAll('section[id]'); // Select all sections with an ID

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
                document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active');
            }
        });

        // Special case for top of page (Hero section)
        if (scrollY < sections[0].offsetTop - 100) {
            navLinks.forEach(link => link.classList.remove('active'));
            document.querySelector('.nav-menu a[href*="home"]').classList.add('active');
        }
    }

    window.addEventListener('scroll', navHighlighter);
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

});