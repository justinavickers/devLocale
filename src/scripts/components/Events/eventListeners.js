import eventsAPI from "./fetchEvent"
const eventListening = {
  // submitEvent() {
  //   document.addEventListener("click", (obj) => {
  //     if (obj.target && obj.target.id === "submitEvent") {

  //       postToAPI()
  //       console.log("submit")
  //     }
  //   })
  // },
  deleteButton() {
    document.addEventListener("click", function (event) {
      if (event.target.textContent === "Delete") {
        event.target.parentNode.remove()
      }
    })
  },

  saveButton() {
    document.addEventListener("click", function (event) {
      if (event.target.textContent === "Save") {
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