function createEventFormDiv() {
  let createEvent = `
<form>
<div class="form-group">
<label for="name">Name</label>
<input type="text" id="name" class="name" placeholder="Name of Event" value="" name="name">
</div>

<div class="form-group">
<label for="eventDescription">Event Description</label>
<input type="text" id="eventDescription" class="eventDescription" placeholder="Event Description" value="" name="eventDescription">
</div>

<div class="form-group">
<label for="latitudeEvent">Latitude</label>
<input type="text" id="latitudeEvent" class="latitudeEvent" placeholder="Latitude" value="" name="latitudeEvent">
</div>

<div class="form-group">
<label for="longitudeEvent">Longitude</label>
<input type="text" id="longitudeEvent" class="longitudeEvent" placeholder="Longitude" value="" name="longitudeEvent">
</div>

<div class="form-group">
<label for="startEventDate">Event Start Date</label>
<input type="date" id="startEventDate" class="startEventDate" placeholder="Date" value="" name="startEventDate">
</div>

<div class="form-group">
<label for="endEventDate">Event End Date</label>
<input type="date" id="endEventDate" class="endEventDate" placeholder="Date" value="" name="endEventDate">
</div>

<div class="form-group">
<label for="startTimeEvent">Start Time</label>
<input type="text" id="startTimeEvent" class="startTimeEvent" placeholder="Time" value="" name="startTimeEvent">
</div>

<div class="form-group">
<label for="endTimeEvent">End Time</label>
<input type="text" id="endTimeEvent" class="endTimeEvent" placeholder="Time" value="" name="endTimeEvent">
</div>

<button type="submit" id="createEvent" class="btn btn-primary">Add Event</button>

</form>
`
  return createEvent
}
export default createEventFormDiv