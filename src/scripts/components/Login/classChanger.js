const hideDiv = {

  toddlgeSearchBoxDiv() {
    const searchBox = document.getElementById("searchBox")
    searchBox.classList.toggle("hide")
  },

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
    sessionStorage.clear()
    document.querySelector(".domEntry").innerHTML = ""
    const login = document.getElementById("loginBox")
    login.classList.toggle("hide")
    const register = document.getElementById("registerBox")
    register.classList.toggle("hide")
    this.toggleLogoutDiv()
    this.toggleSearchBoxDiv()
  }
}
export default hideDiv