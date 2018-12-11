import eventFormDiv from "./eventForm"
import addSearchEventListener from "../../main"

let domEntry = document.getElementById("domEntry")

let eventContentDOM = () => {
  domEntry.innerHTML = ""
  domEntry.innerHTML = eventFormDiv()
  addSearchEventListener()
}
export default eventContentDOM