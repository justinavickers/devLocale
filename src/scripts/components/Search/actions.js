import eventsList from "./eventList";
import eventsAPI from "./fetchEvent";
import eventListening from "./eventListeners"

async function searchEvents() {
  const searchBox = document.getElementById("searchBox")
  const response = await eventsAPI.getAllEvents(searchBox.value)
  const eventsFromSearchingDiv = document.getElementById("eventsFromSearching");
  eventsList(response.events, eventsFromSearchingDiv);

  response.events.forEach((event) => {
    const saveButton = document.getElementById("saveButton" + event.id)
    saveButton.addEventListener("click", async () => {
      console.log("SENDING", event)
      await eventListening.saveButton(event)
    })
  })
}

export function establishActions() {
  const searchButton = document.getElementById("searchBoxButton");
  searchButton.addEventListener("click", searchEvents);
}
