        // Toggle navigation menu
        const menuToggle = document.getElementById('menuToggle');
        const navbar = document.getElementById('navbar');

        menuToggle.addEventListener('click', () => {
            navbar.classList.toggle('open');
        });

        // Close menu when clicking outside on mobile
        document.addEventListener('click', (e) => {
            const isClickInsideNavbar = navbar.contains(e.target);
            const isClickOnMenuToggle = menuToggle.contains(e.target);
            
            if (!isClickInsideNavbar && !isClickOnMenuToggle && window.innerWidth <= 768) {
                navbar.classList.remove('open');
            }
        });

        // Adjust for mobile/desktop orientation changes
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768) {
                navbar.style.height = '100%';
            } else {
                if (!navbar.classList.contains('open')) {
                    navbar.style.height = '60px';
                }
            }
        });
