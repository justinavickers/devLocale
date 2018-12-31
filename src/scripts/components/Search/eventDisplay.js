import eventFormDiv from "./eventForm"
import { establishActions } from "./actions"

let domEntry = document.getElementById("domEntry")

let eventContentDOM = () => {
  domEntry.innerHTML = ""
  domEntry.innerHTML = eventFormDiv()
  establishActions();
}
export default eventContentDOM