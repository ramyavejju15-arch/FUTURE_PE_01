// CTA button
function enrollNow() {
  alert("Thank you! Our team will contact you for enrollment.");
}

// Contact Form
const form = document.getElementById("contactForm");
form.addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Message sent! We will get back to you soon.");
  form.reset();
});