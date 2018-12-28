import userAPIfunctions from "./fetching";
import insertLoginIntoDOM from "../Login/insertLoginIntoDOM";
import { hideSpinner, showSpinner } from "../../spinner";
// import hideDiv from "./classChanger"
// import eventContentDOM from "../Events/eventDisplay";

export async function registerUser() {
  showSpinner();
  const email = document.getElementById("registerEmail").value;
  const firstName = document.getElementById("registerFirstName").value;
  const lastName = document.getElementById("registerLastName").value;
  const confirmPassword = document.getElementById("registerConfirmPassword").value;
  const password = document.getElementById("registerPassword").value;

  if (confirmPassword.trim() === ""
    || password.trim() === ""
    || email.trim() === ""
    || firstName.trim() === ""
    || lastName.trim() === ""
    || confirmPassword !== password) {
    hideSpinner();
    alert("Some fields are invalid!");
    return;
  }

  sessionStorage.clear()
  let obj = {
    email,
    firstName,
    lastName,
    password,
  }

  await userAPIfunctions.postUser(obj);
  hideSpinner();
  insertLoginIntoDOM();
}

export function establishActions() {
  const goBackButton = document.getElementById("registerSignIn");
  goBackButton.addEventListener("click", insertLoginIntoDOM);

  const registerButton = document.getElementById("registerSignUp");
  registerButton.addEventListener("click", registerUser);
}
