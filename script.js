document.addEventListener('DOMContentLoaded', function() {
    const ctaImage = document.querySelector('.cta-image');
    
    if (ctaImage) {
        ctaImage.addEventListener('error', function() {
            this.src = 'https://via.placeholder.com/600x400/1e293b/ffffff?text=Tuotekuva';
        });
    }

    // Nappeiden klikkaustapahtumat (valinnainen)
    const btnPrimary = document.querySelector('.btn-primary');
    const btnSecondary = document.querySelector('.btn-secondary');

    if (btnPrimary) {
        btnPrimary.addEventListener('click', function() {
            console.log('Get Started -nappia klikattu');
            // Lisää oma toiminnallisuus tähän
        });
    }

    if (btnSecondary) {
        btnSecondary.addEventListener('click', function() {
            console.log('Learn More -nappia klikattu');
            // Lisää oma toiminnallisuus tähän
        });
    }
});

        const menuBtn = document.getElementById('menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const body = document.body;

        menuBtn.addEventListener('click', () => {
            // Animoi hampurilaiskuvake
            menuBtn.classList.toggle('open');
            // Näytä/piilota valikko
            mobileMenu.classList.toggle('open');
            // Estä scrollaus kun valikko on auki
            body.classList.toggle('overflow-hidden');
        });

        // Sulje valikko jos linkkiä klikataan
        const navLinks = mobileMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                menuBtn.classList.remove('open');
                mobileMenu.classList.remove('open');
                body.classList.remove('overflow-hidden');
            });
        });

window.addEventListener('load', () => {
  const marquee = document.getElementById('marquee');
  if (!marquee) return;

  const content = marquee.innerHTML;
  marquee.innerHTML = content + content;

  marquee.style.width = marquee.scrollWidth + "px";
});

