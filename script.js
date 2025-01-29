const header = document.querySelector('.header');

// ---header закрепление сверху--- //
window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        header.style.backgroundColor = '#ffffff';
        header.style.opacity = '0.9';
    } else {
        header.style.backgroundColor = '#F3F4F7';
        header.style.opacity = '1';
    }
});


// ---burger-menu--- //
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("burger").addEventListener("click", function() {
        document.querySelector("header").classList.toggle("open")
        header.style.backgroundColor = '#ffffff';
        header.style.opacity = '0.9';
    })
})