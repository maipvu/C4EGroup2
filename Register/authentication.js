const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
});

function checkInputs() {
  // ... (your existing checkInputs function)

  // Assuming all checks are successful, you can proceed with registration
  // For simplicity, let's assume registration is successful
  const registrationSuccessful = true;

  if (registrationSuccessful) {
    // Save registration status to localStorage
    localStorage.setItem("registrationStatus", "success");

    // Redirect to login page
    window.location.href = "/C4EGroup2/Login/login.html";
  }
}
