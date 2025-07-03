const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
  threshold: 0.2,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fadeEl => {
  appearOnScroll.observe(fadeEl);
});

const burger = document.getElementById('burger');
const navLinks = document.getElementById('nav-links');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
  burger.classList.toggle('active');
});

  (function() {
    emailjs.init("tCM8yL8km_EiLxWER"); // remplace par ton User ID (ou Public Key)
  })();

  document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();

    emailjs.sendForm("service_o8qv4lo", "template_vu0jc09", this)
      .then(function() {
        document.getElementById("status-msg").textContent = "Message envoyé ! ✅";
      }, function(error) {
        document.getElementById("status-msg").textContent = "Erreur : " + error.text;
      });

    this.reset();
  });

  document.addEventListener("DOMContentLoaded", function () {
  const burger = document.getElementById("burger");
  const nav = document.getElementById("nav-links");

  burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    nav.classList.toggle("active");
  });
});
