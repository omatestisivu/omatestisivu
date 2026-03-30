document.addEventListener('DOMContentLoaded', function () {

    const ctaImage = document.querySelector('.cta-image');

    if (ctaImage) {
        ctaImage.addEventListener('error', function () {
            this.src = 'https://via.placeholder.com/600x400/1e293b/ffffff?text=Tuotekuva';
        });
    }

    const btnPrimary = document.querySelector('.btn-primary');
    const btnSecondary = document.querySelector('.btn-secondary');

    if (btnPrimary) {
        btnPrimary.addEventListener('click', function () {
            console.log('Get Started -nappia klikattu');
        });
    }

    if (btnSecondary) {
        btnSecondary.addEventListener('click', function () {
            console.log('Learn More -nappia klikattu');
        });
    }

    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const body = document.body;

    if (menuBtn && mobileMenu) {

        menuBtn.addEventListener('click', () => {
            menuBtn.classList.toggle('open');
            mobileMenu.classList.toggle('open');
            body.classList.toggle('overflow-hidden');
        });

        const navLinks = mobileMenu.querySelectorAll('a');

        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                menuBtn.classList.remove('open');
                mobileMenu.classList.remove('open');
                body.classList.remove('overflow-hidden');
            });
        });
    } else {
        console.warn('Menu elementtejä ei löytynyt (#menu-btn tai #mobile-menu)');
    }

    const marquee = document.getElementById('marquee');

    if (marquee) {
        const content = marquee.innerHTML;
        marquee.innerHTML += content; // duplikoi sisältö
        marquee.style.width = marquee.scrollWidth + "px";
    }

});
