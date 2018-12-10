import eventsAPI from "./fetchEvent"
import eventContentDOM from "./eventDisplay"

function deleteEvent(obj) {
  eventsAPI.deleteFunction(obj)
    .then(() => {
      eventContentDOM()
    })
}
export default deleteEvent