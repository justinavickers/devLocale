import eventFetching from "./fetching"
import eventDisplay from "./eventUserComponent"
import eventFormDiv from "./eventForm"

let domEntry = document.querySelector(".domEntry")
function eventComponent(parsedevents) {
  parsedevents.forEach(event => {
    let eventContent = eventDisplay(event)
    domEntry.innerHTML += eventContent
  })
}

let eventContentDOM = () => {
  domEntry.innerHTML = ""
  domEntry.innerHTML = eventFormDiv()
  eventFetching.getFunction()
    .then(parsedevents => eventComponent(parsedevents))

}
export default eventContentDOM