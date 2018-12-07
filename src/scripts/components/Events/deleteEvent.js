import eventFetching from "./fetching"
import eventContentDOM from "./eventDisplay"

function deleteEvent(obj) {
  eventFetching.deleteFunction(obj)
    .then(() => {
      eventContentDOM()
    })
}
export default deleteEvent