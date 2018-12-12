import eventFormDiv from "./eventForm"
import newEvListen from  "../createEvents/newEvListeners"
import addSearchEventListener from "../../main"

let domEntry = document.getElementById("domEntry")

let eventContentDOM = () => {
  domEntry.innerHTML = ""
  domEntry.innerHTML = eventFormDiv()
  addSearchEventListener()
  newEvListen.showCreateEventForm()
}
export default eventContentDOM