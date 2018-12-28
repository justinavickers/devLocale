import getDomElement from "../../dom";
import getRegisterForm from "./registerForm";
import { establishActions } from "./actions";

const insertRegisterIntoDOM = () => {
  const dom = getDomElement();

  dom.innerHTML = getRegisterForm();
  establishActions();
}

export default insertRegisterIntoDOM;
