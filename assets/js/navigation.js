document.addEventListener('DOMContentLoaded', function() {
    // Create menu toggle element
    const menuToggle = document.createElement('div');
    menuToggle.className = 'menu-toggle';
    for (let i = 0; i < 3; i++) {
        const bar = document.createElement('div');
        menuToggle.appendChild(bar);
    }

    // Find the header and insert the menu toggle
    const header = document.querySelector('#header');
    const nav = header.querySelector('nav');
    header.insertBefore(menuToggle, nav);

    // Add click event listener
    menuToggle.addEventListener('click', function() {
        this.classList.toggle('active');
        nav.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInside = header.contains(event.target);
        
        if (!isClickInside && nav.classList.contains('active')) {
            menuToggle.classList.remove('active');
            nav.classList.remove('active');
        }
    });
});
