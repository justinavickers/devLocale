const eventListening = {
  deleteButton() {
    document.addEventListener("click", function (event) {
      if (event.target.textContent === "Delete") {
        event.target.parentNode.remove()
      }
    })
  },

   saveButton(event) {
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