import {eventBriteCredentials} from "../../APIconfig"
import insertListToDOM from "../createdEvents/insertListToDOM";
import { hideSpinner, showSpinner } from "../../spinner";
import eventbrite from "eventbrite"
import * as Moment from "moment"

async function postToAPI() {
  showSpinner();
  const venueUpdated = await editVenue()
  let x = await editEvent(venueUpdated.id)

  hideSpinner();
  alert("Event successfully updated!")
  insertListToDOM()
}

async function editEvent(venue_id) {
  const eventId = sessionStorage.getItem("eventId")
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
        html: document.getElementById("eventDescription").value
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

  const eventUpdated = await sdk
  .request("/events/" + eventId + "/", {
    method: "POST",
    "Content-Type": "application/json",
    body: JSON.stringify(body),
  })

  return eventUpdated
}

async function editVenue() {
  const venueId = sessionStorage.getItem("venueId")
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

  const venueUpdated = await sdk
  .request("/venues/" + venueId + "/", {
    method: "POST",
    "Content-Type": "application/json",
    body: JSON.stringify(body),
  })

  return venueUpdated
}

export function deleteEvent(event){
  console.log("DATA TYPE", typeof event)
  console.log(">>>> EVENT: ", event);
  return fetch(`http://localhost:3000/createdevents/${event.createdEventId}`, {
    method: "DELETE",
  }).then(res => res.json());
}


export default postToAPI
