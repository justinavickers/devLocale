import { showSpinner, hideSpinner } from "../../spinner";
import getDomElement from "../../dom";
import retrieveEventsList from "./fetching"
import displayList from "./displayList"
import createListeners from "../editEvent/listeners"

async function insertListToDOM(){
  const dom = getDomElement();
  dom.innerHTML = "<div id=\"spinner\" class=\"w-25 m-auto\"></div>";

  showSpinner();
  const list = await retrieveEventsList()
  const html = displayList(list.events, list.venues);
  dom.innerHTML += html
  hideSpinner();

  createListeners(list.events, list.venues)
}

export default insertListToDOM