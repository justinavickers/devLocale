import { establishActions } from "./actions";
import editEventFormDiv from "./editForm"
import getDomElement from "../../dom";

function insertEditFormToDOM(event, venue){
  let dom = getDomElement();
  dom.innerHTML = ""
  dom.innerHTML += editEventFormDiv(event, venue)
  establishActions()
}

export default insertEditFormToDOM