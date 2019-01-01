function eventDisplay(event) {
  let eventFormatted = `
    <div class="row mb-3 mx-3">
      <div class="col-lg-12">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title text-info">${event.name.text}</h5>
            <p class="card-text">${event.description.text}</p>
            <a id="saveButton${event.id}" href="javascript:void(0)" class="card-link">Save</a>
          </div>
        </div>
      </div>
    </div>
  `

 return eventFormatted
}
export default eventDisplay