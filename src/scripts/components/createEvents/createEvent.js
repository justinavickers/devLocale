import createEventFormDiv from "./createForm";
import eventContentDOM from "../Events/eventDisplay";
import postToAPI from "./postEvent";

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
    postToAPI()
  });
}


let newEventDOM = () => {
  domEntry.innerHTML = ""
  domEntry.innerHTML = createEventFormDiv();
  returntoSearchListener();
  postEventListener();
}
export default newEventDOM