import eventDisplay from "./eventUserComponent"
import eventListening from "./eventListeners"
function eventsList(parsedEvents, domEntry) {
  parsedEvents.forEach(event => {
    let eventContent = eventDisplay(event)
    domEntry.innerHTML += eventContent
  })
  eventListening.deleteButton()
  eventListening.saveButton()
}

export default eventsList