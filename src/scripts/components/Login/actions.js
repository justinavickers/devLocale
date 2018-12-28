import insertRegisterIntoDOM from "../Register/insertRegisterIntoDOM";
import insertNavBarIntoDOM from "../NavBar/insertNavBarIntoDOM";
import eventContentDOM from "../Events/eventDisplay";
import userAPIfunctions from "./fetching"
import { hideSpinner, showSpinner } from "../../spinner";

function loginUser() {
  showSpinner();
  sessionStorage.clear()
  console.log("logging in running")
  let email = document.getElementById("loginEmail").value
  userAPIfunctions.getUser(email)
    .then((user) => {
      hideSpinner();
      let validated = validatePassword(user)
      if (validated) {
        sessionStorage.setItem("userId", user.id)
        sessionStorage.setItem("email", email.value)
        alert("Welcome");
        insertNavBarIntoDOM();
        eventContentDOM();
      } else {
        alert("wrong password")
      }
    })
}

function validatePassword(user) {
  const passwordValue = document.getElementById("loginPassword")
  if (user.password === passwordValue.value) {
    return true
  } else {
    return false
  }
}

export function establishActions() {
  const signUpButton = document.getElementById("loginSignUpBtn");
  signUpButton.addEventListener("click", insertRegisterIntoDOM);

  const signInButton = document.getElementById("loginSignInBtn");
  signInButton.addEventListener("click", loginUser);
}
