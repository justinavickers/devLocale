const newEvListen = {
saveButton() {
  document.addEventListener("click", function (event) {
    if (event.target.textContent === "Save") {
      const parentId = event.target.parentNode.id
      const userId = sessionStorage.getItem("userId")
        let savedEvent = {
          eventId: parentId,
          userId: userId,
        }
      eventsAPI.postFunction("events", newEvent).then(response => console.log("posted", response))
    }

  })
}
}