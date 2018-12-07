import registerUser from "./components/Login/registerUser"
import hideDiv from "./components/Login/classChanger"
import loginUser from "./components/Login/login"
import eventsAPI from "./components/Events/fetching"
import searchEventsDiv from "./components/Events/eventForm"

let existingUserButton = document.getElementById("loginButton")
let newUsers = document.getElementById("signUpButton")
let searchButton = document.getElementById("searchButton")
const logout = document.querySelector(".logOut")
const session = sessionStorage.getItem("userId")

console.log(eventsAPI.getAllEvents())

if (session === null) {
  hideDiv.toggleLogoutDiv()
}

logout.addEventListener("click", () => {
  hideDiv.LogOut()
})

newUsers.addEventListener("click", () => {
  registerUser()
})

existingUserButton.addEventListener("click", () => {
  loginUser()
})

searchButton.addEventListener("click", () => {
  searchEventsDiv()
})