import insertEditFormToDOM from "./insertEditFormToDOM"
function createListeners(events, venues){
  events.forEach((event) => {
    const editEventButton = document.getElementById("editEvent" + event.id)
    editEventButton.addEventListener("click", () => {
      console.log(event.id)
      const venue = venues.find((v) => v.id === event.venue_id)
      insertEditFormToDOM(event, venue)
    })
  });
}

export default createListeners