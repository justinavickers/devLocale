import eventsAPI from "./fetchEvent"
const eventListening = {
  deleteButton() {
    document.addEventListener("click", function (event) {
      if (event.target.textContent === "Delete") {
        event.target.parentNode.remove()
      }
    })
  },

  saveButton() {
    document.addEventListener("click", function (event) {
        console.log("hi2")
      if (event.target.textContent === "Save") {
        console.log("hi")
        const parentId = event.target.parentNode.id
        const userId = sessionStorage.getItem("userId")
        const eventTitle = event.target.previousElementSibling.previousElementSibling.previousElementSibling.textContent;
          let savedEvent = {
            eventId: parentId,
            userId: userId,
            eventName: eventTitle
          }
        eventsAPI.postFunction("events", savedEvent).then(response => console.log("posted", response))
      }

    })
  }
}
export default eventListening