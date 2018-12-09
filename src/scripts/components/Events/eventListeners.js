// import deleteEvent from "./deleteEvent"
// import postToAPI from "./postevent"
// const eventListening = {
//   submitEvent() {
//     document.addEventListener("click", (obj) => {
//       if (obj.target && obj.target.id === "submitEvent") {
//         console.log(document.querySelector("#typeOfEvent").value)
//         console.log(document.querySelector("#location").value)
//         console.log(document.querySelector("#date").value)
//         console.log(document.querySelector("#time").value)
//         console.log(document.querySelector("#attendance").value)
//         console.log(document.querySelector("#company").value)
//         console.log(document.querySelector("#url").value)

//         postToAPI()
//         console.log("submit")
//       }
//     })
//   },
//   deleteButton() {
//     document.addEventListener("click", function (obj) {
//       if (obj.target && obj.target.id === "delete") {
//         let eventIdNumber = obj.target.className
//         deleteEvent(eventIdNumber)
//       }

//     })
//   }
// }
// export default eventListening