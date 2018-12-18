import newEventDOM from "./createEvent"
import insertListToDOM from "../createdEvents/insertListToDOM";
import eventContentDOM from "../Events/eventDisplay"

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
  },
  goBack: () => {
    let backToSearchBtn = document.getElementById("backToSearch")
    backToSearchBtn.addEventListener("click", () => {
      eventContentDOM()
    })
  }
}

export default newEvListen