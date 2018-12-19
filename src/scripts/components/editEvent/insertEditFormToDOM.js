import editEventFormDiv from "./editForm"
import newEvListen from "../createEvents/newEvListeners";
import postToAPI from "../editEvent/postEditEvent";
  function insertEditFormToDOM(event, venue){

  let domEntry = document.getElementById("domEntry")

  domEntry.innerHTML = ""
  domEntry.innerHTML += editEventFormDiv(event, venue)
  newEvListen.goBack()
  const editButton = document.getElementById("editButton")
  editButton.addEventListener("click", () => {
    postToAPI()
  })
}

export default insertEditFormToDOM