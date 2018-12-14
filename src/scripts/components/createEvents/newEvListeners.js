import newEventDOM from "./createEvent"
import insertListToDOM from "../createdEvents/insertListToDOM";

const newEvListen = {
  showCreateEventForm: () => {
    let showNewEventFormBtn = document.getElementById("showCreateEventForm")
    showNewEventFormBtn.addEventListener("click", () => {
      newEventDOM()
    })
  },
  showCreatedEventsList: () => {
    let mySavedEventsBtn = document.getElementById("mySavedEvents")
    mySavedEventsBtn.addEventListener("click", () => {
      insertListToDOM()
    })
  }
}

export default newEvListen