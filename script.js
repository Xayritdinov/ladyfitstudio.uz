const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        header.style.backgroundColor = '#ffffff';
        header.style.opacity = '0.9';
    } else {
        header.style.backgroundColor = '#F3F4F7';
        header.style.opacity = '1';
    }
});

