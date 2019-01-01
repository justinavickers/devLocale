async function getEventBriteToken() {
  const response = await fetch("https://www.eventbrite.com/oauth/token", {
    method: "POST",
    headers: {

    }
  })

}