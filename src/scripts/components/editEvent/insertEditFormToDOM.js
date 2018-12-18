import editEventFormDiv from "./editForm"
import newEvListen from "../createEvents/newEvListeners";
  function insertEditFormToDOM(event, venue){

  let domEntry = document.getElementById("domEntry")

  domEntry.innerHTML = ""
  domEntry.innerHTML += editEventFormDiv(event, venue)
  newEvListen.goBack()
}

export default insertEditFormToDOM