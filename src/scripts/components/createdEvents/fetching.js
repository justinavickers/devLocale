import {eventBriteCredentials} from "../../APIconfig"
import eventbrite from "eventbrite"

async function retrieveCreatedEvents(){
  const userId = sessionStorage.getItem("userId");
  const response = await fetch(`http://localhost:3000/createdevents?user_id=${userId}`, {
    method: "GET"
})
  const createdevents = await response.json()
  return createdevents
}

async function retrieveEvent(eventId){
  const sdk = await eventbrite({token: eventBriteCredentials.oAuthToken})
  const event = await sdk.request("/events/" + eventId + "/",{
    method: "GET"
  })
  return event
}

async function retrieveVenue(venueId){
  const sdk = await eventbrite({token: eventBriteCredentials.oAuthToken})
  const venue = await sdk.request("/venues/" + venueId + "/",{
    method: "GET"
  })
  return venue
}

async function retrieveEventsList(){
  const createdEvents = await retrieveCreatedEvents()
  const eventsList = []
  const venuesList = []

  for(let index = 0; index<createdEvents.length; index++){
    const event = await retrieveEvent(createdEvents[index].event_id)
    const venue = await retrieveVenue(event.venue_id)
    eventsList.push(Object.assign({}, event, {createdEventId:createdEvents[index].id}))
    venuesList.push(venue)
  }
  return {events:eventsList, venues:venuesList}
}

export default retrieveEventsList