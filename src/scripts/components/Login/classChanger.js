const hideDiv = {
  hideLoginDiv() {
    const login = document.getElementById("loginBox")
    login.classList.toggle("hide")
  },

  hideRegisterDiv() {
    const register = document.getElementById("registerBox")
    register.classList.toggle("hide")
  },

  toggleLogoutDiv() {
    const logout = document.getElementById("logOutBox")
    logout.classList.toggle("hide")
  },

  LogOut() {
    sessionStorage.removeItem("userId")
    sessionStorage.removeItem("email")
    document.getElementById("domEntry").innerHTML = ""
    const login = document.getElementById("loginBox")
    login.classList.toggle("hide")
    const register = document.getElementById("registerBox")
    register.classList.toggle("hide")
    this.toggleLogoutDiv()
    }
}
export default hideDiv