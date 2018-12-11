function createEventFormDiv(){
  let createEvent = `
<div id="newEventContainer">
<input type="button" id="createEvent" class="createEvent" value="Add Event">
<input type="text" id="locationEvent" class="locationEvent" placeholder="Location"value="">
<input type="text" id="eventType" class="eventType" placeholder="Type of Event" value="">
<input type="text" id="eventDate" class="eventDate" placeholder="Date" value="">
<input type="text" id="timeEvent" class="timeEvent" placeholder="Time" value="">
<input type="text" id="company" class="company" placeholder="Company" value="">
</div>
`
return createEvent
}
export default createEventFormDiv