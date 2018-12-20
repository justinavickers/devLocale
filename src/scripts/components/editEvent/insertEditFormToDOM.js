import editEventFormDiv from "./editForm"
import postToAPI from "../editEvent/postEditEvent";
import insertListToDOM from "../createdEvents/insertListToDOM"
  function insertEditFormToDOM(event, venue){

  let domEntry = document.getElementById("domEntry")

  domEntry.innerHTML = ""
  domEntry.innerHTML += editEventFormDiv(event, venue)
  const editButton = document.getElementById("editButton")
  editButton.addEventListener("click", () => {
    postToAPI()
  })
  const goBackToSavedEventsButton = document.getElementById("backToMySavedEvents")
  goBackToSavedEventsButton.addEventListener("click", () => {
    insertListToDOM()
  })
}

export default insertEditFormToDOM