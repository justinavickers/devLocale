import newEvent from "./createComponent"
import newEvListen from "./newEvListeners"
function newEventsList(parsedEvents, domEntry) {
  parsedEvents.forEach(event => {
    let eventCreate = newEvent(event)
    domEntry.innerHTML += eventCreate
  })
   newEvListen.saveButton()
}
export default newEventsList