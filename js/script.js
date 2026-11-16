// Small demo interaction for the newsletter form.
// Replace this with your real newsletter service when the store is connected.
const newsletterForm = document.getElementById('newsletterForm');
const newsletterMessage = document.getElementById('newsletterMessage');

newsletterForm.addEventListener('submit', function (event) {
  event.preventDefault();
  newsletterMessage.textContent = 'Thanks for subscribing to Infinity Store!';
  newsletterForm.reset();
});

// Demo feedback for product buttons.
document.querySelectorAll('.add-to-cart').forEach(function (button) {
  button.addEventListener('click', function () {
    const originalIcon = button.innerHTML;
    button.innerHTML = '<i class="fa-solid fa-check"></i>';
    button.classList.add('added');
    window.setTimeout(function () {
      button.innerHTML = originalIcon;
      button.classList.remove('added');
    }, 1200);
  });
});

// Contact form demo: validates in the browser and shows a confirmation.
// Connect this form to a backend or form service to actually send messages.
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function (event) {
    event.preventDefault();
    document.getElementById('contactFormMessage').textContent =
      'Thank you! Your message has been prepared. Connect a backend to receive submissions.';
    contactForm.reset();
  });
}

// Newsletter demo on all pages.
document.querySelectorAll('.newsletter-demo').forEach(function (form) {
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    const message = form.parentElement.querySelector('.newsletter-message');
    message.textContent = 'Thanks for subscribing to Infinity Store!';
    form.reset();
  });
});
