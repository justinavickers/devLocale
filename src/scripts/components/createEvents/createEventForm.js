function getCreateEventForm() {
  let form = `
    <div class="row h-100 my-5">
      <div class="col-md-2 col-lg-2"></div>

      <div class="col-md-8 col-lg-8 mx-3 d-flex flex-column align-items-center">
        <div class="card w-75">
          <div class="card-header w-100 bg-light d-flex justify-content-center">
            <h5 class="mt-2">New Event</h5>
          </div>

          <div class="card-body w-100">
            <div class="row">
              <div class="col-lg-12">
                <div class="form-group">
                  <label for="name"></label>
                  <input type="text" id="name" class="form-control" placeholder="Name of Event" value="" name="name">
                </div>

                <div class="form-group">
                  <label for="eventDescription"></label>
                  <input type="text" id="eventDescription" class="form-control" placeholder="Event Description" value="" name="eventDescription">
                </div>

                <div class="form-group">
                  <label for="startEventDate">Date event will start</label>
                  <input type="date" id="startEventDate" class="form-control" placeholder="Date" value="" name="startEventDate">
                </div>

                <div class="form-group">
                  <label for="startTimeEvent">Time event will start</label>
                  <input type="time" id="startTimeEvent" class="form-control" placeholder="Time" value="" name="startTimeEvent">
                </div>

                <div class="form-group">
                  <label for="endEventDate">Date event will end</label>
                  <input type="date" id="endEventDate" class="form-control" placeholder="Date" value="" name="endEventDate">
                </div>

                <div class="form-group">
                  <label for="endTimeEvent">Time event will end</label>
                  <input type="time" id="endTimeEvent" class="form-control" placeholder="Time" value="" name="endTimeEvent">
                </div>

                <div class="form-group">
                  <label for="venueName"></label>
                  <input type="text" id="venueName" class="form-control" placeholder="Name of the venue" value="" name="venueName">
                </div>

                <div class="form-group">
                  <label for="address1"></label>
                  <input type="text" id="address1" class="form-control" placeholder="First street address" value="" name="address1">
                </div>

                <div class="form-group">
                  <label for="address2"></label>
                  <input type="text" id="address2" class="form-control" placeholder="Second street address (Optional)" value="" name="address2">
                </div>

                <div class="form-group">
                  <label for="city"></label>
                  <input type="text" id="city" class="form-control" placeholder="City" value="" name="city">
                </div>

                <div class="form-group">
                  <label for="state"></label>
                  <input type="text" id="state" class="form-control" placeholder="State" value="" name="state">
                </div>

                <div class="form-group">
                  <label for="zipCode"></label>
                  <input type="text" id="zipCode" class="form-control" placeholder="ZIP code" value="" name="zipCode">
                </div>
              </div>
            </div>

            <div id="spinner"></div>

            <div class="row mt-4">
              <div class="col-lg-12 text-center">
                <button
                  id="createEvent"
                  class="btn btn-info form-control">
                  Add Event
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-md-2 col-lg-2">
    </div>
  `
  return form;
}
export default getCreateEventForm