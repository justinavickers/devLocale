import userAPIfunctions from "./fetching"
import hideDiv from "./classChanger"
import eventContentDOM from "../Events/eventDisplay";
import newEventDOM from "../createEvents/createEvent";

function registerUser() {
  sessionStorage.clear()
  let obj = {
    email: document.querySelector("#email").value,
    password: document.querySelector("#passwordRegister").value,
    firstName: document.querySelector("#firstName").value,
    lastName: document.querySelector("#lastName").value

  }
  userAPIfunctions.postUser(obj)
    .then((response) => response.json()
    )
  hideDiv.hideLoginDiv()
  hideDiv.hideRegisterDiv()
  hideDiv.toggleLogoutDiv()
  eventContentDOM()

}
export default registerUser