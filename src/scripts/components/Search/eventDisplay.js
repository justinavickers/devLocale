import eventFormDiv from "./eventForm"
import newEvListen from  "../createEvents/newEvListeners"
import { establishActions } from "./actions"

let domEntry = document.getElementById("domEntry")

let eventContentDOM = () => {
  domEntry.innerHTML = ""
  domEntry.innerHTML = eventFormDiv()
  establishActions();
}
export default eventContentDOM