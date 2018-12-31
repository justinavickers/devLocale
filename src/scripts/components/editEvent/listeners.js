import insertEditFormToDOM from "./insertEditFormToDOM"
import {deleteEvent} from "./postEditEvent"
function createListeners(events, venues){
  events.forEach((event) => {
    const editEventButton = document.getElementById("editEvent" + event.id)
    editEventButton.addEventListener("click", () => {
      console.log(event.id)
      const venue = venues.find((v) => v.id === event.venue_id)
      insertEditFormToDOM(event, venue)
      sessionStorage.setItem("venueId", venue.id)
      sessionStorage.setItem("eventId", event.id )
    })
    const deleteEventButton = document.getElementById("deleteEvent" + event.id)
    deleteEventButton.addEventListener("click", () => {
      deleteEvent(event)
    })
  });
}

export default createListeners