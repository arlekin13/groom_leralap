const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    
    // Анимация для линий бургера
    const lines = burger.querySelectorAll('div');
    lines[0].classList.toggle('line1-active');
    lines[1].classList.toggle('line2-active');
    lines[2].classList.toggle('line3-active');
    lines[3].classList.toggle('line4-active');
});