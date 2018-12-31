function eventFormDiv() {
  let searchEvents = `
    <div class="row px-4 mt-4 mb-4">
      <div class="col-lg-10">
        <div class="form-group">
          <input type="text" class="form-control" id="searchBox" placeholder="Write a keyword">
        </div>
      </div>
      <div class="col-lg-2">
        <button type="submit" id="searchBoxButton" class="btn btn-primary form-control">Search</button>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-12" id="eventsFromSearching">
      </div>
    </div>
  `;

return searchEvents
}
export default eventFormDiv