const loginForm = document.getElementById("loginForm");
const loginUsername = document.getElementById("loginUsername");
const loginPassword = document.getElementById("loginPassword");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  checkLogin();
});

function checkLogin() {
  const enteredUsername = loginUsername.value.trim();
  const enteredPassword = loginPassword.value.trim();

  const storedUsername = localStorage.getItem("username");
  const storedPassword = localStorage.getItem("password");

  if (
    enteredUsername === storedUsername &&
    enteredPassword === storedPassword
  ) {
    alert("Login successful!");
    window.location.href = "some-dashboard.html"; // Redirect to a dashboard or main page after successful login.
  } else {
    alert("Username and password are incorrect. Please login again!");
  }
}
