import createEventFormDiv from "./createForm";
let domEntry = document.getElementById("domEntry")

let newEventDOM = () => {
  domEntry.innerHTML = ""
  domEntry.innerHTML = createEventFormDiv()
}
export default newEventDOM