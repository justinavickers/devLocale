import getNavBar from "./navBar";
import { establishActions } from "./actions";

const insertNavBarIntoDOM = () => {
  const navBarDiv = document.getElementById("navigationBar");

  navBarDiv.innerHTML = getNavBar();
  establishActions();
}

export default insertNavBarIntoDOM;
