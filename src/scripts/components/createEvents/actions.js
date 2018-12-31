import postToAPI from "./postEvent";

export function establishActions() {
  const createEventBtn = document.getElementById("createEvent");
  createEventBtn.addEventListener("click", postToAPI);
}
