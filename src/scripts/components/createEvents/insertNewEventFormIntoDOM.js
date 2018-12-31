import getCreateEventForm from "./createEventForm";
import { establishActions } from "./actions";
import getDomElement from "../../dom";

let insertNewEventFormIntoDOM = () => {
  const dom = getDomElement();
  dom.innerHTML = ""
  dom.innerHTML = getCreateEventForm();
  establishActions();
}

export default insertNewEventFormIntoDOM;
