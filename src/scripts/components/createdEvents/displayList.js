import displayItem from "./displayItem"

function displayList(events, venues) {
  let html = "";

  const itemsToDisplay = events.forEach((event) => {
    const venue = venues.find((v)=> v.id === event.venue_id)
    html += displayItem(event, venue)
  })

  return html;
}

export default displayList