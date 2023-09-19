var password = document.getElementById("password"),
  confirm_password = document.getElementById("password-confirm"),
  error_msg = document.getElementById("error-msg"),
  submit_btn = document.getElementById("submit");

function validatePassword() {
  if (password.value != confirm_password.value) {
    confirm_password.setCustomValidity("Passwords Don't Match");
    addInvalidPassword();
  } else {
    confirm_password.setCustomValidity("");
    removeInvalidPassword();
  }
}

function addInvalidPassword() {
  password.classList.add("unmatched");
  confirm_password.classList.add("unmatched");

  error_msg.innerText = "Passwords do not match.";
}

function removeInvalidPassword() {
  password.classList.remove("unmatched");
  confirm_password.classList.remove("unmatched");

  error_msg.innerText = "";
}

password.onchange = validatePassword;
confirm_password.onchange = validatePassword;
submit_btn.onclick = validatePassword;