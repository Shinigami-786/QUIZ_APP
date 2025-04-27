function toggleForms() {
  const loginForm = document.getElementById("login-form");
  const signupForm = document.getElementById("signup-form");

  loginForm.style.display =
    loginForm.style.display === "none" ? "block" : "none";
  signupForm.style.display =
    signupForm.style.display === "none" ? "block" : "none";
}

function login() {
  const username = document.getElementById("login-username").value;
  const password = document.getElementById("login-password").value;

  if (username && password) {
    document.getElementById(
      "login-message"
    ).innerText = `Welcome, ${username}!`;
  } else {
    document.getElementById("login-message").innerText =
      "Invalid username or password";
  }
}

function signup() {
  const username = document.getElementById("signup-username").value;
  const password = document.getElementById("signup-password").value;

  if (username && password) {
    document.getElementById("signup-message").innerText = "Signup successful";
  } else {
    document.getElementById("signup-message").innerText =
      "Please enter username and password";
  }
}

toggleForms();
