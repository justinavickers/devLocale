import retrieveEventsList from "./fetching"
import displayList from "./displayList"

async function insertListToDOM(){
  const list = await retrieveEventsList()
  const html = displayList(list.events, list.venues)

  let domEntry = document.getElementById("domEntry")

  domEntry.innerHTML = ""
  domEntry.innerHTML += html
}

export default insertListToDOM