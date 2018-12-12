import newEventDOM from "./createEvent"

const newEvListen = {
  showCreateEventForm: () => {
    let showNewEventFormBtn = document.getElementById("showCreateEventForm")
    showNewEventFormBtn.addEventListener("click", () => {
      newEventDOM()
    })
  }
}

export default newEvListen