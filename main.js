const nav = document.querySelector('.nav');
const toggle = document.querySelector('.nav-toggle');
const navList = document.getElementById('primary-nav');

function setAriaExpanded(button, expanded) {
    button.setAttribute('aria-expanded', String(expanded));
}

function openMenu() {
    nav.classList.add('open');
    setAriaExpanded(toggle, true);
}

function closeMenu() {
    nav.classList.remove('open');
    setAriaExpanded(toggle, false);
}

toggle?.addEventListener('click', () => {
    const isOpen = nav.classList.contains('open');
    isOpen ? closeMenu() : openMenu();
});

document.addEventListener('click', (e) => {
    if (!nav.contains(e.target) && !toggle.contains(e.target)) {
        closeMenu();
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
});

navList?.addEventListener('keydown', (e) => {
    if (e.key !== 'Tab') return;
    const focusable = navList.querySelectorAll('a, button');
    if (focusable.length === 0) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) {
        last.focus();
        e.preventDefault();
    } else if (!e.shiftKey && document.activeElement === last) {
        first.focus();
        e.preventDefault();
    }
});

const scrollTopBtn = document.querySelector('.scroll-top');

scrollTopBtn?.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
