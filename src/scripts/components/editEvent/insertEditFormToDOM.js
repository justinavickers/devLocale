import editEventFormDiv from "./editForm"
  function insertEditFormToDOM(event, venue){

  let domEntry = document.getElementById("domEntry")

  domEntry.innerHTML = ""
  domEntry.innerHTML += editEventFormDiv(event, venue)
}

export default insertEditFormToDOM