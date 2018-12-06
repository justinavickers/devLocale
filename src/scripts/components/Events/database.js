let eventsAPI = {
getAllEvents(){
  console.log("getAllEvents running")
fetch("https://www.eventbriteapi.com/v3/users/me/events/search?q=technology&location.address=nashville,TN&token=E57DISHET3ZVIBOTJUPY")
  .then(returnedEvents => returnedEvents.json())
  .then(events => {
   console.log(events)
  })
}
}
export default eventsAPI