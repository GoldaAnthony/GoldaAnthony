
document.querySelectorAll(".year").forEach(el => el.textContent = new Date().getFullYear());

const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Thank you! Your message form is ready to connect to an email service.");
    contactForm.reset();
  });
}
