const togglebutton = document.querySelector('.togglebutton');
const menu = document.querySelector('.headtap_menu');
const icons = document.querySelector('.headtap_link');

togglebutton.addEventListener('click', () => {
    menu.classList.toggle('active');
    icons.classList.toggle('active');
});