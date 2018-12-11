import userAPIfunctions from "./fetching"
import hideDiv from "./classChanger"
import eventContentDOM from "../Events/eventDisplay"
import newEventDOM from "../createEvents/createEvent";
function loginUser() {
  sessionStorage.clear()
  let email = document.querySelector("#login")
  userAPIfunctions.getUser(email.value)
    .then((user) => {
      let validated = validatePassword(user)
      if (validated) {
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