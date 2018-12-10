import eventsAPI from "./fetchEvent"
import eventDisplay from "./eventUserComponent"
import eventFormDiv from "./eventForm"
import addSearchEventListener from "../../main"

let domEntry = document.querySelector(".domEntry")

function eventComponent(parsedEvents) {
  parsedEvents.forEach(event => {
    let eventContent = eventDisplay(event)
    domEntry.innerHTML += eventContent
  })
}

let eventContentDOM = () => {
  domEntry.innerHTML = ""
  domEntry.innerHTML = eventFormDiv()
  addSearchEventListener()
}
export default eventContentDOM