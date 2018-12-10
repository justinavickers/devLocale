import userAPIfunctions from "./fetching"
import hideDiv from "./classChanger"
function loginUser() {
  sessionStorage.clear()
  let email = document.querySelector("#login")
  userAPIfunctions.getUser(email.value)
    .then((user) => {
      console.log(user)
      let validated = validatePassword(user)
      if (validated) {
        email = document.querySelector("#login")
        sessionStorage.setItem("userId", user.id)
        sessionStorage.setItem("email", email.value)
        hideDiv.hideLoginDiv()
        hideDiv.hideRegisterDiv()
        hideDiv.toggleLogoutDiv()
        alert("Welcome")
      } else {
        alert("wrong password")
      }
    })
}

function validatePassword(user) {
  console.log("validating")
  const passwordValue = document.querySelector("#passwordLogin")
  if (user.password === passwordValue.value) {
    return true
  } else {
    return false
  }
}

export default loginUser