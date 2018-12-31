import postToAPI from "./postEditEvent";

export function establishActions() {
  const editEventBtn = document.getElementById("editButton");
  editEventBtn.addEventListener("click", postToAPI);
}
