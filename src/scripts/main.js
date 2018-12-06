import registerUser from "./components/Login/registerUser"
import hideDiv from "./components/Login/classChanger"
import loginUser from "./components/Login/login"
import eventsAPI from "./components/Events/database"


let existingUserButton = document.getElementById("loginButton")
let newUsers = document.getElementById("signUpButton")
const logout = document.querySelector(".logOut")
const session = sessionStorage.getItem("userId")

console.log(eventsAPI.getAllEvents())

if(session === null){
  console.log("in the if")
hideDiv.toggleLogoutDiv()
}


logout.addEventListener("click", () => {
  hideDiv.LogOut()
})

newUsers.addEventListener("click", () => {
  console.log("hello")
  registerUser()
})

existingUserButton.addEventListener("click", () => {
  loginUser()
})




