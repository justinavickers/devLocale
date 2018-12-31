import createEventFormDiv from "./createEventForm";
import eventContentDOM from "../Search/eventDisplay";
import postToAPI from "./postEvent";
import newEvListeners from "./newEvListeners"

let domEntry = document.getElementById("domEntry")

function returntoSearchListener() {
  const backBtn = document.getElementById("backToSearch");
  backBtn.addEventListener("click", () => {
    eventContentDOM();
  })
}

function postEventListener() {
  const postEventBtn = document.getElementById("createEvent");
  postEventBtn.addEventListener("click", () => {
    console.log("posting event...");
    postToAPI().then(results => console.log(results))
  });
}

let newEventDOM = () => {
  domEntry.innerHTML = ""
  domEntry.innerHTML = createEventFormDiv();
  returntoSearchListener();
  postEventListener();
  newEvListeners.goBack()
}
export default newEventDOM