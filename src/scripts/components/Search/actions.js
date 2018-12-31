import eventsList from "./eventList";
import eventsAPI from "./fetchEvent";

async function searchEvents() {
  const searchBox = document.getElementById("searchBox")
  const response = await eventsAPI.getAllEvents(searchBox.value)
  const eventsFromSearchingDiv = document.getElementById("eventsFromSearching");
  eventsList(response.events, eventsFromSearchingDiv);
}

export function establishActions() {
  const searchButton = document.getElementById("searchBoxButton");
  searchButton.addEventListener("click", searchEvents);
}
