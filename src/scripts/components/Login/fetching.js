const userAPIfunctions = {
  getUsers() {
    return fetch("http://localhost:3000/users")
      .then(users => users.json())
      .then(parsedUsers => parsedUsers)
  },
  getUser(email) {
    console.log("get user called", email)
    return fetch(`http://localhost:3000/users/?q=${email}`)
      .then(user => user.json())
      .then(parsedUser => {
        console.log("parsed user", parsedUser)
      return parsedUser[0]
      } )
  },
  postUser(obj) {
    console.log(obj)
    return fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(obj)
    })
  }
}
export default userAPIfunctions