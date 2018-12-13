// import eventsAPI from "../Events/fetchEvent"
import {eventBriteCredentials} from "../../APIconfig"
import eventbrite from "eventbrite"
import * as Moment from "moment"
 async function postToAPI() {
  const venueCreated = await createVenue()
  await createEvent(venueCreated.id)
  alert("Event successfully created!")
 }

async function createEvent(venue_id) {
  let startDate = document.getElementById("startEventDate").value
  let startTime = document.getElementById("startTimeEvent").value
  let startEvent = startDate + " " + startTime

  let endDate = document.getElementById("endEventDate").value
  let endTime = document.getElementById("endTimeEvent").value
  let endEvent = endDate + " " + endTime

  const body = {
    event: {
      name: {
        html: document.getElementById("name").value
      },
      description: {
        html: document.getElementById("name").value
      },
      start: {
        timezone: "America/Chicago",
        utc:Moment.utc(startEvent).format(),
      },
      end: {
        timezone: "America/Chicago",
        utc:Moment.utc(endEvent).format(),
      },
      venue_id,
      currency: "USD",
      listed: false,
    }
  }

  const sdk = await eventbrite({token: eventBriteCredentials.oAuthToken})

  const eventCreated = await sdk
  .request("/events/", {
    method: "POST",
    "Content-Type": "apllication/json",
    body: JSON.stringify(body),
  })

  return eventCreated
}

async function createVenue() {
  const body = {
    venue: {
      name: document.getElementById("venueName").value,
      address: {
        address_1:document.getElementById("address1").value,
        address_2:document.getElementById("address2").value,
        city:document.getElementById("city").value,
        region:document.getElementById("state").value,
        postal_code:document.getElementById("zipCode").value,
        country: "US",
      }
    }
  }
  const sdk = await eventbrite({token: eventBriteCredentials.oAuthToken})

  const venueCreated = await sdk
  .request("/venues/", {
    method: "POST",
    "Content-Type": "apllication/json",
    body: JSON.stringify(body),
  })

  return venueCreated
}


export default postToAPI

