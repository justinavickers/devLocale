let eventsAPI = {

  getAllEvents: async (city) => {
    console.log("getAllEvents running", city)
    const  returnEvents = await fetch(`https://www.eventbriteapi.com/v3/events/search/?q=technology&location.address=${city},TN`,
      { headers: { "Authorization": "Bearer E57DISHET3ZVIBOTJUPY" } }
    )
    const parsedEvents = await returnEvents.json()
    return parsedEvents
  },

  postFunction(extension, obj) {
    return fetch(`http://localhost:3000/${extension}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(obj)

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