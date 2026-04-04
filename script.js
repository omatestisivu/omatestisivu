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

window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && document.getElementById('side-menu').classList.contains('open')) {
        toggleMenu();
    }
});

window.addEventListener('DOMContentLoaded', () => {
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
