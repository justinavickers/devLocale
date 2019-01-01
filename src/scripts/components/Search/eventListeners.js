import eventsAPI from "./fetchEvent"
const eventListening = {
  deleteButton() {
    document.addEventListener("click", function (event) {
      if (event.target.textContent === "Delete") {
        event.target.parentNode.remove()
      }
    })
  },

   saveButton(event) {
    // document.addEventListener("click", function (event) {
    //     console.log("hi2")
    //   if (event.target.textContent === "Save") {
    //     console.log("hi")
    //     const parentId = event.target.parentNode.id
    //     const userId = sessionStorage.getItem("userId")
    //     const eventTitle = event.target.previousElementSibling.previousElementSibling.previousElementSibling
    //       let savedEvent = {
    //         eventId: parentId,
    //         userId: userId,
    //         eventName: eventTitle
    //       }
    //     eventsAPI.postFunction("events", savedEvent).then(response => console.log("posted", response))
    //   }

    // })

    const user_id = sessionStorage.getItem("userId")
    return fetch("http://localhost:3000/createdevents", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        event_id: event.id,
        venue_id: event.venue_id,
        user_id,
      })

    });
  }
}
export default eventListening