function updateDaysCounter() {
    const startDate = new Date('2022-10-24');
    const currentDate = new Date();
    const diffTime = Math.abs(currentDate - startDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    document.getElementById('days-counter').textContent = diffDays;
}

// Update counter immediately
updateDaysCounter();

// Update counter every day at midnight
setInterval(() => {
    const now = new Date();
    if (now.getHours() === 0 && now.getMinutes() === 0) {
        updateDaysCounter();
    }
}, 60000); // Check every minute

// Menu icon functionality
const menuIcon = document.querySelector('.menu-icon');
const romanticContainer = document.querySelector('.romantic-container');

menuIcon.addEventListener('click', () => {
    romanticContainer.classList.toggle('shrink');
    // Only add active class when container is expanded (not shrunk)
    if (romanticContainer.classList.contains('shrink')) {
        menuIcon.classList.remove('active');
    } else {
        menuIcon.classList.add('active');
    }
});

// Main picture flip animation
const picContainer = document.querySelector('.pic-container');
picContainer.addEventListener('click', () => {
    picContainer.classList.toggle('flipped');
});
