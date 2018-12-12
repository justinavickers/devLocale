import userAPIfunctions from "./fetching"
import hideDiv from "./classChanger"
import eventContentDOM from "../Events/eventDisplay"
function loginUser() {
  sessionStorage.clear()
  console.log("logging in running")
  let email = document.querySelector("#login")
  userAPIfunctions.getUser(email.value)
    .then((user) => {
      let validated = validatePassword(user)
      if (validated) {
        console.log("in the if")
        email = document.querySelector("#login")
        sessionStorage.setItem("userId", user.id)
        sessionStorage.setItem("email", email.value)
        hideDiv.hideLoginDiv()
        hideDiv.hideRegisterDiv()
        hideDiv.toggleLogoutDiv()
        eventContentDOM()
        alert("Welcome")
      } else {
        alert("wrong password")
      }
    })
}

function validatePassword(user) {
  const passwordValue = document.querySelector("#passwordLogin")
  if (user.password === passwordValue.value) {
    return true
  } else {
    return false
  }
}

export default loginUser