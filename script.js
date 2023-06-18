// Carousel for banner

// keep the element in a variable
// add a function to toggle class for visibility of the banner image
// use setInterval to change the image visibility

const bannerItem = document.getElementById('bannerItem');

function toggleClass(){
    bannerItem.classList.toggle('hideItem');
}

setInterval(toggleClass, 3000);


// Test the site

// Hamburger menu for media queries

const bar = document.querySelector('.menu');
const menu = document.querySelector('.wideMenu');
const background = document.querySelector('.background');


bar.addEventListener('click', () => {
    bar.classList.toggle('open')
    menu.classList.toggle('navList')
    background.classList.toggle('activeBack')
})

