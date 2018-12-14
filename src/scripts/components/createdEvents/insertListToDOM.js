import retrieveEventsList from "./fetching"
import displayList from "./displayList"
import createListeners from "../editEvent/listeners"

async function insertListToDOM(){
  const list = await retrieveEventsList()
  const html = displayList(list.events, list.venues)

  let domEntry = document.getElementById("domEntry")

  domEntry.innerHTML = ""
  domEntry.innerHTML += html
  createListeners(list.events, list.venues)
}

export default insertListToDOM