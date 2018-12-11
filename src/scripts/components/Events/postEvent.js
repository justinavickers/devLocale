import eventsAPI from "./fetchEvent"
import eventContentDOM from "./eventDisplay"
function postToAPI() {
  let locationValue = document.getElementById("#location").value
  let typeOfEventValue = document.querySelector("#typeOfEvent").value
  let dateValue = document.querySelector("#date").value
  let timeValue = document.querySelector("#time").value
  let attendanceValue = document.querySelector("#attendance").value
  let companyValue = document.querySelector("#company").value
  let urlValue = document.querySelector("#url").value

  let object = {
    location: locationValue,
    typeOfEvent: typeOfEventValue,
    date: dateValue,
    time: timeValue,
    attendance: attendanceValue,
    company: companyValue,
    url: urlValue
  }
  eventsAPI.postFunction(object).then(() => {
    eventContentDOM()
  })
}
export default postToAPI