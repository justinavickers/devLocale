const userAPIfunctions = {
  getUsers() {
    return fetch("http://localhost:3000/users")
      .then(users => users.json())
      .then(parsedUsers => parsedUsers)
  },
  getUser(email) {
    console.log(`http://localhost:3000/users?email=${email}`)
    return fetch(`http://localhost:3000/users?email=${email}`)
      .then(user => user.json())
      .then(parsedUser => parsedUser[0])
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