// Select DOM Items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');

// Set Initial State of Menu
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu(params) {
    if (!showMenu) {
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');
        navItems.forEach(item => item.classList.add('show'));

        // Set Menu State
        showMenu = true;
    } else {
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');
        navItems.forEach(item => item.classList.remove('show'));

        // Set Menu State
        showMenu = false;
    }
}

function addListeners(parentClass){
    var focusableItems = ['a[href]', 'area[href]', 'input:not([disabled])', 'select:not([disabled])', 'textarea:not([disabled])', 'button:not([disabled])', '[tabindex="0"]'];
    for (i = 0, leni = focusableItems.length; i < leni; i++) {
        var focusableElements = document.querySelectorAll("." + parentClass + " " + focusableItems[i]);
        for (j = 0, lenj = focusableElements.length; j < lenj; j++) {
            focusableElements[j].addEventListener("focus", function() {
              document.querySelector("." + parentClass).classList.add("focus-within");
            });
            focusableElements[j].addEventListener("blur", function() {
              document.querySelector("." + parentClass).classList.remove("focus-within");
            });
        }
    }
}
addListeners("flip-card");