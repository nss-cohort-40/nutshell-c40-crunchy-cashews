import eventsAPI from "/src/scripts/events/data.js";
import render from "/src/scripts/events/render.js";
import events from "/src/scripts/events/main.js"

let mainSection = document.querySelector("#main-section");

const createComponent = {
  addEvent () {
    return `
    <div id="event-form">
    <button class="add-event-button" id="addEvent--btn">Add New Event</button>
    </div>
    `
  },
  eventsResults: function (results) {
    return `
    <div class="events-section">
    <p>Name: ${results.name}</p>
    <p>Date: ${results.date}</p>
    <p>Location: ${results.location}</p>
    <button id="editEvent--${results.id}">Edit Event</button>
    <button id="deleteEvent--${results.id}">Delete Event</button>
    </div>
    ` 
  },
  newEvent (name, date, location) {
    return {
      userId: sessionStorage.activeUser,
      name: name,
      date: date,
      location: location
    }
  },
  eventForm () {
    return `
    <form id="newEventForm">
        <fieldset id="newEventField">
          <label for="name"><b>Event Name</b></label>
          <input type="text" id="event-name-input">
          <label for="date"><b>Event Date</b></label>
          <input type="text" id="event-date-input">
          <label for="location"><b>Event Location</b></label>
          <input type="text" id="event-location-input">
          <input type="hidden" id="eventId" value="">
          <button type="submit" id="saveEvent--btn">Save Event</button>
        </fieldset>
    </form>
    `
  },
  editEvent (id) {
    const updatedObject = {
      name: document.querySelector("#event-name-input").value,
      date: document.querySelector("#event-date-input").value,
      location: document.querySelector("#event-location-input").value
    };
    eventsAPI.editEvent(id, updatedObject).then( () => {
      document.querySelector("#eventId").value = ""
      eventsAPI.getEvents().then(render.eventsResults)
    })
  }
}

export default createComponent

