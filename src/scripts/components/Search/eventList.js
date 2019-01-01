import eventDisplay from "./eventUserComponent"
import eventListening from "./eventListeners"
function eventsList(parsedEvents, domEntry) {
  parsedEvents.forEach(event => {
    let eventContent = eventDisplay(event)
    domEntry.innerHTML += eventContent
  })
}

export default eventsList