
const menuicn = document.getElementById('menuicn');
const navMenu = document.getElementById('navMenu');


navMenu.style.display = 'none';


menuicn.addEventListener('click', () => {

    navMenu.classList.toggle('navclose');


    navMenu.style.display = navMenu.style.display === 'none' || navMenu.style.display === '' ? 'block' : 'none';
});