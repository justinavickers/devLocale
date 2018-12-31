import eventContentDOM from "../Search/eventDisplay";
import insertNewEventFormIntoDOM from "../createEvents/insertNewEventFormIntoDOM";
import insertListToDOM from "../createdEvents/insertListToDOM";
import insertLoginIntoDOM from "../Login/insertLoginIntoDOM";

function logout() {
  sessionStorage.clear();

  const navBarDiv = document.getElementById("navigationBar");
  insertLoginIntoDOM();
  navBarDiv.innerHTML = "";
}

export function establishActions() {
  const navBarSearchEventOption = document.getElementById("navBarSearchEventOption");
  navBarSearchEventOption.addEventListener("click", eventContentDOM);

  const navBarAddNewEventOption = document.getElementById("navBarAddNewEventOption");
  navBarAddNewEventOption.addEventListener("click", insertNewEventFormIntoDOM);

  const navBarListEventsOption = document.getElementById("navBarListEventsOption");
  navBarListEventsOption.addEventListener("click", insertListToDOM);

  const navBarLogoutOption = document.getElementById("navBarLogoutOption");
  navBarLogoutOption.addEventListener("click", logout);
}