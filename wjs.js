const nav = document.querySelector('.scro');

window.addEventListener('scroll', () => {
    // if (window.scrollY > 200) {
    //         nav.classList.add('scroll');
    //     }
    //     else{
    //         nav.classList.remove('scroll')
    //     }
    (window.scrollY > 200)? nav.classList.add('scroll'): nav.classList.remove('scroll');
});