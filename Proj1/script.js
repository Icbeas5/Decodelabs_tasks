const burger = document.getElementById('burger');
const mobileNav = document.getElementById('mobileNav');

burger.addEventListener('click', function() {
    mobileNav.classList.toggle('open');
});

mobileNav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
        mobileNav.classList.remove('open');
    });
});

const form = document.getElementById('contactForm');
const formMsg = document.getElementById('formMsg');

form.addEventListener('submit', function (e) {
  e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if(!name || !email || !message){
        formMsg.textContent = '⚠️ Please enter a valid email';
        formMsg.style.color = '#ffe0e0';
        return;
    }
    if(!email.includes('@')) {
        formMsg.textContent = '⚠️ Please enter a valid email.';
        formMsg.style.color = '#ffe0e0';
        return;
    }
    formMsg.textContent = '✅ Message sent! We will get back to you soon.';
    formMsg.style.color = '#ffffff';
    form.reset();
});