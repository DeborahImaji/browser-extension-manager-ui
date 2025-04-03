// Code for changing the theme
const themeButton = document.getElementById('theme-button');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('theme-data', currentTheme);
}

themeButton.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('theme-data');

    if (currentTheme === 'dark') {
        document.documentElement.removeAttribute('theme-data');
        themeButton.innerHTML = '<img src="assets/images/icon-moon.svg" alt="" class="theme-button-moon">';
        localStorage.setItem('theme', 'light');
    } else {
        document.documentElement.setAttribute('theme-data', 'dark');
        themeButton.innerHTML = '<img src="assets/images/icon-sun.svg" alt="" class="theme-button-sun">';
        localStorage.setItem('theme', 'dark');
    }
})

// Code for importing extension gallery data
const extensionsGallery = document.getElementById('extensions-gallery');
const filterButtonsContainer = document.getElementById('filter-buttons');
const filterButtons = document.querySelectorAll('.filter-button');

let extensionsData = [];
let currentFilter = 'all';

async function fetchExtensions() {
    const res = await fetch('data.json');
    extensionsData = await res.json();
    applyFilter(currentFilter);
}

function displayExtensions(extensions) {
    const item = document.createElement('div');
    item.classList.add('item');
    item.dataset.name = extensions.name;
}

fetchExtensions();