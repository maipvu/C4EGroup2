const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (checkInputs()) {
    localStorage.setItem("username", username.value.trim());
    localStorage.setItem("password", password.value.trim());
    alert("Register successfully. Please login your account!");
    window.location.href = "../C4EGroup2/Login/login.html ";
  }
});

function checkInputs() {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();

  let isValid = true;

  if (usernameValue.length < 6 || /[^a-zA-Z0-9]/.test(usernameValue)) {
    alert(
      "Username have more than 6 digits and cannot have special characters!"
    );
    isValid = false;
  }

  if (emailValue === "") {
    alert("Email cannot be blank");
    isValid = false;
  } else if (!isEmail(emailValue)) {
    alert("Invalid email, please input again!");
    isValid = false;
  }

  if (
    passwordValue.length < 8 ||
    !/[0-9]/.test(passwordValue) ||
    !/[^a-zA-Z0-9]/.test(passwordValue)
  ) {
    alert(`Invalid password.
    Password have:
    - More than 8 digits.
    - At least have 1 number.
    - At least have a special character.`);
    isValid = false;
  }

  if (password2Value !== passwordValue) {
    alert("Password and Recheck Password does not match. Please input again!");
    isValid = false;
  }

  return isValid;
}

function isEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}
