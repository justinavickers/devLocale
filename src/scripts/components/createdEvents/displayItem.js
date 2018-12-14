function displayItem(event, venue) {

  let item =
  `
  <li class="list-group-item">
    <div class="row">
      <div class="col-lg-12">
        <h3>${event.name.text}</h3>
        <p>${event.description.text}</p>
        <p>Where: ${venue.name}</p>
        <button type="submit" id="editEvent${event.id}" class="btn btn-primary">Edit</button>
        </div>
    </div>
  </li>
`
console.log(item)
return item
}

export default displayItem