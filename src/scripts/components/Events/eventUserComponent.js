function eventDisplay(event) {
  console.log(event)
  let events = `
  <div class = "eventName">
  <h3>${event.name}</h3>
  <button id="delete" class=${event.id}>Delete</button>
  </div>
  `
  // <h3>${event.typeOfEvent}</h3>
  // <h3>${event.date}</h3>
  // <h3>${event.time}</h3>
  // <h3>${event.attendance}</h3>
  // <h3>${event.company}</h3>
  // <h3>${event.url}</h3>

  return events
}
export default eventDisplay