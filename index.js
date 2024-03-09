const burger = document.querySelector('.burger');
const navbarItems = document.querySelector('.navbar-items');
const nav = document.querySelector('.nav');

burger.addEventListener('click', () => {
    navbarItems.classList.toggle('h-class');
    nav.classList.toggle('v-class');
})