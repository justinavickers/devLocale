function createEventFormDiv() {
  let createEvent = `
<div>
<div class="form-group">
<label for="name"></label>
<input type="text" id="name" class="name" placeholder="Name of Event" value="" name="name">
</div>

<div class="form-group">
<label for="eventDescription"></label>
<input type="text" id="eventDescription" class="eventDescription" placeholder="Event Description" value="" name="eventDescription">
</div>

<div class="form-group">
<label for="startEventDate"></label>
<input type="date" id="startEventDate" class="startEventDate" placeholder="Date" value="" name="startEventDate">
</div>

<div class="form-group">
<label for="endEventDate"></label>
<input type="date" id="endEventDate" class="endEventDate" placeholder="Date" value="" name="endEventDate">
</div>

<div class="form-group">
<label for="startTimeEvent"></label>
<input type="time" id="startTimeEvent" class="startTimeEvent" placeholder="Time" value="" name="startTimeEvent">
</div>

<div class="form-group">
<label for="endTimeEvent"></label>
<input type="time" id="endTimeEvent" class="endTimeEvent" placeholder="Time" value="" name="endTimeEvent">
</div>

<div class="form-group">
<label for="venueName"></label>
<input type="text" id="venueName" class="venueName" placeholder="Venue" value="" name="venueName">
</div>

<div class="form-group">
<label for="address1"></label>
<input type="text" id="address1" class="address1" placeholder="Address" value="" name="address1">
</div>

<div class="form-group">
<label for="address2"></label>
<input type="text" id="address2" class="address2" placeholder="Address" value="" name="address2">
</div>

<div class="form-group">
<label for="city"></label>
<input type="text" id="city" class="city" placeholder="City" value="" name="city">
</div>

<div class="form-group">
<label for="state"></label>
<input type="text" id="state" class="state" placeholder="State" value="" name="state">
</div>

<div class="form-group">
<label for="zipCode"></label>
<input type="text" id="zipCode" class="zipCode" placeholder="zipCode" value="" name="zipCode">
</div>


<button id="createEvent" class="btn btn-primary">Add Event</button>
<button type="submit" id="backToSearch" class="backToSearch">Back to Search</button>
</div>
`
  return createEvent
}
export default createEventFormDiv