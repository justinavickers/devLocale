function eventDisplay(event) {
  let eventFormatted = `
  <div id=${event.id} class = "eventName">
    <h3>${event.name.text}</h3>
    <p>${event.description.text}</p>
    <button class="delete">Delete</button>
    <button class="save">Save</button>
  </div>
  `
 return eventFormatted
}
export default eventDisplay