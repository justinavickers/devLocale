import eventDisplay from "./eventUserComponent"
function eventComponent(parsedEvents) {
  console.log(parsedEvents)
  parsedEvents.forEach(event => {
    let eventContent = eventDisplay(event)
    domEntry.innerHTML += eventContent
  })
}

export default eventComponent