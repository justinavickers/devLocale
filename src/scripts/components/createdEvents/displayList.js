import displayItem from "./displayItem"

function displayList(events, venues) {
  let html = "<ul class=\"list-group\">"
  const itemsToDisplay = events.forEach((event) => {
    const venue = venues.find((v)=> v.id === event.venue_id)
    html += displayItem(event, venue)
  })
  html += "</ul>"
  console.log(html)
return html
}

export default displayList