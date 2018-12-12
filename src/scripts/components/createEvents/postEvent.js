import eventsAPI from "../Events/fetchEvent"
// import newEvent from "./createComponent";
function postToAPI() {
  let nameValue = document.getElementById("name").value
  let eventDescriptionValue = document.querySelector("#eventDescription").value
  let latitudeValue = document.querySelector("#latitudeEvent").value
  let longitudeValue = document.querySelector("#longitudeEvent").value
  let startEventValue = document.querySelector("#startEventDate").value
  let endEventValue = document.querySelector("#endEventDate").value
  let startTimeValue = document.querySelector("#startTimeEvent").value
  let endTimeValue = document.querySelector("#endTimeEvent").value

  let object = {
    name: nameValue,
    eventDescription: eventDescriptionValue,
    latitudeEvent: latitudeValue,
    longitudeEvent: longitudeValue,
    startEventDate: startEventValue,
    endEventDate: endEventValue,
    startTimeValue: startTimeValue,
    endTimeValue: endTimeValue
  }
  eventsAPI.postFunction("createdEvents", object).then(chickensandwich => {
    console.log(chickensandwich)
  })
}

export default postToAPI