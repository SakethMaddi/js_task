const form = document.getElementById("myForm");

form.addEventListener("submit", function(event) {
  event.preventDefault();
  validateForm();
});

function validateForm() {
  let isValid = true;

  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const confirmPassword = document.getElementById("confirmPassword").value.trim();

  const usernameError = document.getElementById("usernameError");
  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");
  const confirmPasswordError = document.getElementById("confirmPasswordError");

  usernameError.textContent = "";
  emailError.textContent = "";
  passwordError.textContent = "";
  confirmPasswordError.textContent = "";

  if (username.length < 3) {
    usernameError.textContent = "Username must be at least 3 characters";
    isValid = false;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    emailError.textContent = "Enter a valid email";
    isValid = false;
  }

  if (password.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters";
    isValid = false;
  }

  if (password !== confirmPassword) {
    confirmPasswordError.textContent = "Passwords do not match";
    isValid = false;
  }

  if (isValid) {
    alert("Form submitted successfully!");
    form.reset();
  }
}
