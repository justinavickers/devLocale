import getDomElement from "../../dom";
import getLoginForm from "./loginForm";
import { establishActions } from "./actions";

const insertLoginIntoDOM = () => {
  const dom = getDomElement();

  dom.innerHTML = getLoginForm();
  establishActions();
}

export default insertLoginIntoDOM;
