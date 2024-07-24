document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('.navbar-nav .nav-link');
    const dynamicBackground = document.querySelector('.dynamic-background');

    function moveBackground(link) {
        const rect = link.getBoundingClientRect();
        const containerRect = link.closest('.navbar-nav').getBoundingClientRect();
        dynamicBackground.style.width = `${rect.width}px`;
        dynamicBackground.style.height = `${rect.height}px`;
        dynamicBackground.style.transform = `translate(${rect.left - containerRect.left}px, ${rect.top - containerRect.top}px)`;
    }

    links.forEach(link => {
        link.addEventListener('mouseenter', () => moveBackground(link));
        if (link.classList.contains('active')) {
            moveBackground(link);
        }
    });

    document.querySelector('.navbar-nav').addEventListener('mouseleave', () => {
        const activeLink = document.querySelector('.navbar-nav .nav-link.active');
        if (activeLink) {
            moveBackground(activeLink);
        } else {
            dynamicBackground.style.width = '0';
            dynamicBackground.style.height = '0';
        }
    });

    // Move background to the active link on page load
    const activeLink = document.querySelector('.navbar-nav .nav-link.active');
    if (activeLink) {
        moveBackground(activeLink);
    }
});
