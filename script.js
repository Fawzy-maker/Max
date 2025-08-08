window.addEventListener("DOMContentLoaded", () => {
    const backButtons = document.querySelectorAll(".back-btn");
    backButtons.forEach(button => {
      button.addEventListener("click", () => history.back());
    });
  });
  

  // script.js – Custom Contact Feedback Function
const contactForm = document.getElementById("contactForm");
const statusMsg = document.getElementById("formStatus");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = new FormData(contactForm);

  fetch(contactForm.action, {
    method: "POST",
    body: formData,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        // ✅ Custom success message
        statusMsg.textContent = "✅ Thank you for contacting Rakel Investment. We’ve received your message and will get back to you shortly.";
        statusMsg.className = "text-green-600 mt-2";
        contactForm.reset();
      } else {
        // ❌ Custom fallback error message
        statusMsg.textContent = "❌ Something went wrong while submitting your message. Please try again later.";
        statusMsg.className = "text-red-600 mt-2";
      }
    })
    .catch(() => {
      // ⚠️ Network error
      statusMsg.textContent = "⚠️ Network error. Please check your internet connection and try again.";
      statusMsg.className = "text-red-600 mt-2";
    });
});


