import { eventBriteCredentials } from "../../APIconfig"
import { hideSpinner, showSpinner } from "../../spinner";
import eventbrite from "eventbrite"
import * as Moment from "moment"

async function postToAPI() {
  showSpinner();
  const venueCreated = await createVenue()
  const eventCreated = await createEvent(venueCreated.id)
  const user_id = sessionStorage.getItem("userId");

  await fetch("http://localhost:3000/createdevents", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      event_id: eventCreated.id,
      venue_id: venueCreated.id,
      user_id,
    })

  });

  hideSpinner();
  cleanForm();
  alert("Event successfully created!")
}

function cleanForm() {
  document.getElementById("name").value = "";
  document.getElementById("eventDescription").value = "";

  document.getElementById("startEventDate").value = "";
  document.getElementById("startTimeEvent").value = "";

  document.getElementById("endEventDate").value = "";
  document.getElementById("endTimeEvent").value = "";

  document.getElementById("venueName").value = "";
  document.getElementById("address1").value = "";
  document.getElementById("address2").value = "";
  document.getElementById("city").value = "";
  document.getElementById("state").value = "";
  document.getElementById("zipCode").value = "";
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

  const eventCreated = await sdk
  .request("/events/", {
    method: "POST",
    "Content-Type": "application/json",
    body: JSON.stringify(body),
  })


  return eventCreated
}

async function createVenue() {
  const body = {
    venue: {
      name: document.getElementById("venueName").value,
      address: {
        address_1: document.getElementById("address1").value,
        address_2: document.getElementById("address2").value,
        city: document.getElementById("city").value,
        region: document.getElementById("state").value,
        postal_code: document.getElementById("zipCode").value,
        country: "US",
      }
    }
  }
  const sdk = await eventbrite({token: eventBriteCredentials.oAuthToken})

  const venueCreated = await sdk
  .request("/venues/", {
    method: "POST",
    "Content-Type": "application/json",
    body: JSON.stringify(body),
  })

  return venueCreated
}

export default postToAPI

