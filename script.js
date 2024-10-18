document.addEventListener("DOMContentLoaded", function() {
    const contactBtn = document.getElementById('contactBtn');
    const contactTab = document.querySelector('.contact-tab');
    const sidebar = document.querySelector('.sidebar');
    var onOff = false;
    contactBtn.addEventListener('click', function() {
        sidebar.classList.toggle('show-contact');
        contactTab.classList.toggle('contact-tab');
        onOff = !onOff;
        contactBtn.textContent = onOff ? "Close" : "Contact";
    });
});

const navbar = document.getElementById("navbar");

// Get the offset position of the navbar
const sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function handleScroll() {
    if (window.pageYOffset > sticky) {
        navbar.style.position = "fixed";
        navbar.style.top = "0"; // Stick it to the top of the viewport
    } else {
        navbar.style.position = "relative";
    }
}

// When the user scrolls the page, execute handleScroll
window.onscroll = function() {
    handleScroll();
};