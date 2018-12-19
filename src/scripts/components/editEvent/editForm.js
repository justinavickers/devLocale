import * as Moment from "moment"
function editEventFormDiv(event, venue) {
  const startDate = Moment.default(event.start.utc).format("YYYY-MM-DD");
  const endDate = Moment.default(event.end.utc).format("YYYY-MM-DD");
  const startTime = Moment.default(event.start.utc).format("HH:mm");
  const endTime = Moment.default(event.end.utc).format("HH:mm");
console.log(startTime)


  let editEvent = `
  <div>
  <div class="form-group">
  <label for="name"></label>
  <input type="text" id="name" class="name" placeholder="Name of Event" value="${event.name.text}" name="name">
  </div>

  <div class="form-group">
  <label for="eventDescription"></label>
  <input type="text" id="eventDescription" class="eventDescription" placeholder="Event Description" value="${event.description.text}" name="eventDescription">
  </div>

  <div class="form-group">
  <label for="startEventDate"></label>
  <input type="date" id="startEventDate" class="startEventDate" placeholder="Date" value="${startDate}" name="startEventDate">
  </div>

  <div class="form-group">
  <label for="endEventDate"></label>
  <input type="date" id="endEventDate" class="endEventDate" placeholder="Date" value="${endDate}" name="endEventDate">
  </div>

  <div class="form-group">
  <label for="startTimeEvent"></label>
  <input type="time" id="startTimeEvent" class="startTimeEvent" placeholder="Time" value="${startTime}" name="startTimeEvent">
  </div>

  <div class="form-group">
  <label for="endTimeEvent"></label>
  <input type="time" id="endTimeEvent" class="endTimeEvent" placeholder="Time" value="${endTime}" name="endTimeEvent">
  </div>

  <div class="form-group">
  <label for="venueName"></label>
  <input type="text" id="venueName" class="venueName" placeholder="Venue" value="${venue.name}" name="venueName">
  </div>

  <div class="form-group">
  <label for="address1"></label>
  <input type="text" id="address1" class="address1" placeholder="Address" value="${venue.address.address_1}" name="address1">
  </div>

  <div class="form-group">
  <label for="address2"></label>
  <input type="text" id="address2" class="address2" placeholder="Address" value="${venue.address.address_2}" name="address2">
  </div>

  <div class="form-group">
  <label for="city"></label>
  <input type="text" id="city" class="city" placeholder="City" value="${venue.address.city}" name="city">
  </div>

  <div class="form-group">
  <label for="state"></label>
  <input type="text" id="state" class="state" placeholder="State" value="${venue.address.region}" name="state">
  </div>

  <div class="form-group">
  <label for="zipCode"></label>
  <input type="text" id="zipCode" class="zipCode" placeholder="zipCode" value="${venue.address.postal_code}" name="zipCode">
  </div>


  <button id="editButton" class="btn btn-primary">Submit</button>
  <button type="submit" id="backToSearch" class="backToSearch">Back to Search</button>
  </div>
  `
  return editEvent
}

export default editEventFormDiv