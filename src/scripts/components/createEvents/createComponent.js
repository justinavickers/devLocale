function newEvent(event) {
  let createNewEvent = `
  <div id=${event.id} class = "newEvent">
    <h3>${event.name}</h3>
    <p>${event.description}</p>
    <p>${event.latitude}</p>
    <p>${event.longitude}</p>
    <p>${event.startEvent}</p>
    <p>${event.endEvent}</p>
    <p>${event.startTime}</p>
    <p>${event.endTime}</p>
  <button id="createEvent">Add Event</button>
  <button id="backToSearch">Back To Search</button>

  </div>
  `
 return createNewEvent
}
export default newEvent