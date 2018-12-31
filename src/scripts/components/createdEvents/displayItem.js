function displayItem(event, venue) {
  let item = `
    <div class="row mt-3 mx-3">
      <div class="col-lg-12">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title text-info">${event.name.text}</h5>
            <p class="card-text">${event.description.text}</p>
            <p><strong class="text-success">Where:</strong> ${venue.name}</p>
            <a id="editEvent${event.id}" href="javascript:void(0)" class="btn btn-primary">Edit</a>
            <a id="deleteEvent${event.id}" href="javascript:void(0)" class="btn btn-danger">Delete</a>
          </div>
        </div>
      </div>
    </div>
  `;

  return item
}

export default displayItem