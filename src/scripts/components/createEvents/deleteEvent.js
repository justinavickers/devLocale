import eventsAPI from "./fetchEvent"
import newEventDOM from "./createEvent"
function deleteEvent(obj) {
  eventsAPI.deleteFunction(obj)
    .then(() => {
      newEventDOM()
    })
}
export default deleteEvent