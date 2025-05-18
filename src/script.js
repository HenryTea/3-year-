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
        navbar.style.height = '300%';
    } else {
        if (!navbar.classList.contains('open')) {
            navbar.style.height = '60px';
        }
    }
});

// Menu functionality
document.addEventListener('DOMContentLoaded', () => {
    try {
        // Get all required elements
        const menuContainer = document.querySelector('.menu-container');
        const menuClosed = document.querySelector('.menu-closed');
        const menuOpened = document.querySelector('.menu-opened');

        if (!menuContainer || !menuClosed || !menuOpened) {
            console.error('Required menu elements not found');
            return;
        }
        
        // Toggle menu only when clicking on the closed menu icon
        menuClosed.addEventListener('click', (e) => {
            e.stopPropagation();
            menuContainer.classList.toggle('menu-active');
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!menuContainer.contains(e.target)) {
                menuContainer.classList.remove('menu-active');
            }
        });

        // Prevent menu from closing when clicking inside the opened menu
        menuOpened.addEventListener('click', (e) => {
            e.stopPropagation();
        });

    } catch (error) {
        console.error('Error initializing menu:', error);
    }
});
