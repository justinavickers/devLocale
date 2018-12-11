import registerUser from "./components/Login/registerUser"
import hideDiv from "./components/Login/classChanger"
import loginUser from "./components/Login/login"
import eventsAPI from "./components/Events/fetchEvent"
import eventsList from "./components/Events/eventList"
import newEventDOM from "./components/createEvents/createEvent";

let existingUserButton = document.getElementById("loginButton")
let newUsers = document.getElementById("signUpButton")
const logout = document.querySelector(".logOut")
const session = sessionStorage.getItem("userId")
let createEvBtn = document.getElementById("createEvent")

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

function addSearchEventListener() {
  let searchButton = document.getElementById("searchBoxButton")
  searchButton.addEventListener("click", async () => {
    const searchBox = document.getElementById("searchBox")
    const response = await eventsAPI.getAllEvents(searchBox.value)
    const domEntry = document.getElementById("domEntry")
    eventsList(response.events, domEntry)
  })
}

createEvBtn.addEventListener("click", () => {
newEventDOM(response.events, domEntry)
})

export default addSearchEventListener