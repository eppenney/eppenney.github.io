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
