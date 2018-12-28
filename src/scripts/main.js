import registerUser from "./components/Login/registerUser"
import hideDiv from "./components/Login/classChanger"
import loginUser from "./components/Login/loginForm"
import eventsAPI from "./components/Events/fetchEvent"
import eventsList from "./components/Events/eventList"
import newEvListen from "./components/createEvents/newEvListeners";

let existingUserButton = document.getElementById("loginButton")
let newUsers = document.getElementById("signUpButton")
const logout = document.querySelector(".logOut")
const session = sessionStorage.getItem("userId")

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
    newEvListen.showCreateEventForm()
    newEvListen.showCreatedEventsList()
  })
}
export default addSearchEventListener