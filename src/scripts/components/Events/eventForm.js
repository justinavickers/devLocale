function eventFormDiv() {
  let searchEvents = `
<div id="searchBoxContainer">
<input type="text" id="searchBox" class="searchBox" placeholder="searchBox" value="">
<button type="submit" id="searchBoxButton" class="btn btn-primary">Search</button>
<button type="submit" id="showCreateEventForm" class="btn btn-primary">Add New Event</button>
<button type="submit" id="mySavedEvents" class="btn btn-primary">My Saved Events</button>
</div>
`
return searchEvents
}
export default eventFormDiv