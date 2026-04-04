document.addEventListener('DOMContentLoaded', () => {

    function toggleMenu() {
        const sideMenu = document.getElementById('side-menu');
        const overlay = document.getElementById('overlay');
        const menuBtn = document.getElementById('menu-btn');
        const body = document.body;

        const isOpen = sideMenu.classList.toggle('open');
        overlay.classList.toggle('active');
        menuBtn.classList.toggle('open');

        body.style.overflow = isOpen ? 'hidden' : 'auto';
    }

    const menuBtn = document.getElementById('menu-btn');
    if (menuBtn) {
        menuBtn.addEventListener('click', toggleMenu);
    }

    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            const sideMenu = document.getElementById('side-menu');
            if (sideMenu && sideMenu.classList.contains('open')) {
                toggleMenu();
            }
        }
    });

    const overlay = document.getElementById('overlay');
    if (overlay) {
        overlay.addEventListener('click', toggleMenu);
    }

    const marquee = document.getElementById('marquee');
    if (marquee) {
        const content = marquee.innerHTML;
        marquee.innerHTML += content;
        marquee.style.width = marquee.scrollWidth + "px";
    }

});
