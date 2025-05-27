const form = document.getElementById("regForm");
const messageContainer = document.getElementById("messageContainer");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  messageContainer.textContent = "";
  messageContainer.className = "message";

  if (password.length < 8) {
    messageContainer.textContent = "Have you tried 8 characters?";
    messageContainer.classList.add("error");
  } else if (password !== confirmPassword) {
    messageContainer.textContent = "Nope. Passwords don't match.";
    messageContainer.classList.add("error");
  } else {
    messageContainer.textContent = "High five! Registration successful!";
    messageContainer.classList.add("success");
    form.reset();
  }
});
