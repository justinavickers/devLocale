let eventsAPI = {

  getAllEvents: (city) => {
    console.log("getAllEvents running", city)
    fetch(`https://www.eventbriteapi.com/v3/events/search/?q=technology&location.address=${city},TN`,
      { headers: { "Authorization": "Bearer E57DISHET3ZVIBOTJUPY" } }
    )
      .then(returnedEvents => returnedEvents.json())
      .then(parsedEvents => console.log(parsedEvents))
  },


  postFunction(event) {
    return fetch("http://localhost:3000/events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(event)

    }).then(post => post.json(event))
  },

    putFunction(event, id) {
  return fetch(`http://localhost:3000/events/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(event)
  }).then(res => res.json())
    .then(console.log(event))
},

deleteFunction(id) {
  return fetch(`http://localhost:3000/events/${id}`, {
    method: "DELETE"
  }).then(res => res.json())
}
}
export default eventsAPI