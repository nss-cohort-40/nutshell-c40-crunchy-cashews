const eventsAPI = {
  getEvents() {
    return fetch("http://localhost:8080/events")
      .then(response => response.json())
  },
  saveEvent(createNewEventEntry) {
    return fetch("http://localhost:8080/events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(createNewEventEntry)
    })
    .then(response => response.json())
  }
}

export default eventsAPI