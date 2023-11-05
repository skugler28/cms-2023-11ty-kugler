import * as MainNav from './lib/mainnav.js';
window.MainNav = MainNav;

// Get the checkbox and all the links in the navigation
const checkbox = document.getElementById('burger');
const links = document.querySelectorAll('nav a');
//checkbox.checked=true;
// Add a click event listener to each link
links.forEach(link => {
    link.addEventListener('click', () => {
        // Uncheck the checkbox
        checkbox.checked = false;
    });
});