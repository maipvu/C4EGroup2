document.addEventListener("DOMContentLoaded", function () {
  const loginButton = document.getElementById("loginButton");
  const loginUsername = document.getElementById("loginUsername");
  const loginPassword = document.getElementById("loginPassword");

  loginButton.addEventListener("click", (e) => {
    checkLogin();
  });

  loginPassword.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      checkLogin();
    }
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
      alert("Login successful. Welcome back," + enteredUsername + "!");
      window.location.href = "../index.html";
    } else {
      alert(
        "Username and password are incorrect. Please login again or Register new account!"
      );
    }
  }
});

const registerButton = document.createElement("button");
registerButton.innerText = "REGISTER";
registerButton.addEventListener("click", () => {
  window.location.href = "../Register/register.html";
});
document.querySelector(".login").appendChild(registerButton);
