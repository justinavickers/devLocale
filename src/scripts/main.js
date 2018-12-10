import registerUser from "./components/Login/registerUser"
import hideDiv from "./components/Login/classChanger"
import loginUser from "./components/Login/login"
import eventsAPI from "./components/Events/fetchEvent"
// import eventFormDiv from "./components/Events/eventForm"
// import eventContentDOM from "./components/Events/eventDisplay"
// import eventListening from "./components/Events/eventListeners"

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
  console.log("logging in")
  loginUser()
})

function addSearchEventListener() {
  let searchButton = document.getElementById("searchBoxButton")
  console.log(searchButton)
  searchButton.addEventListener("click", () => {
    const searchBox = document.getElementById("searchBox")
    console.log("click searchbtn", searchBox)
    eventsAPI.getAllEvents(searchBox.value)

  })
}

export default addSearchEventListener