import displayItem from "./displayItem"
import newEvListen from "../createEvents/newEvListeners";

function displayList(events, venues) {
  console.log(events, venues)
  let html = "<button type=\"submit\" id=\"backToSearch\" class=\"backToSearch\">Back to Search</button><ul class=\"list-group\">"
  const itemsToDisplay = events.forEach((event) => {
    const venue = venues.find((v)=> v.id === event.venue_id)
    html += displayItem(event, venue)
  })
  html += "</ul>"
  console.log(html)
return html
}

export default displayList