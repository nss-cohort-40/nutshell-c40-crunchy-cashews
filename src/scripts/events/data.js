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
  },
  deleteEvent (resultsId) {
    return fetch(`http://localhost:8080/events/${resultsId}`, {
      method: "DELETE"
    })
    .then(response => response.json())
  },
  editEvent (id, obj) {
    return fetch(`http://localhost:8080/events/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(obj)
    })
    .then(response => response.json())
  }
}

export default eventsAPI