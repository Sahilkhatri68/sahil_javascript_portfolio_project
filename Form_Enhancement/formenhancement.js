// formEnhancement.js

const form = document.getElementById("contact-form");
const feedbackDiv = document.getElementById("form-feedback");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form from submitting the traditional way

  // Get form field values
  const name = form.name.value;
  const email = form.email.value;
  const message = form.message.value;

  // Validate form fields
  if (!name || !email || !message) {
    feedbackDiv.innerHTML =
      "<p style='color: red;'>All fields are required.</p>";
    alert("All fields are required.");
    return;
  }

  // Email validation regex
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailPattern.test(email)) {
    feedbackDiv.innerHTML =
      "<p style='color: red;'>Please enter a valid email address.</p>";
    alert("Please enter a valid email address.");
    return;
  }

  // If validation passes, show success message and clear the form
  feedbackDiv.innerHTML =
    "<p style='color: green;'>Form submitted successfully!</p>";
  alert("Form submitted successfully!");

  // Clear the form fields after submission
  form.reset();
});
