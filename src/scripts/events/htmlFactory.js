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
    <button id="edit-event">Edit Event</button>
    <button id="delete-event">Delete Event</button>
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
          <button type="submit" id="saveEvent--btn">Save Event</button>
        </fieldset>
    </form>
    `
  }
}

export default createComponent

  // renderEventForm: function () {
  //   mainSection.addEventListener("click", event => {
  //     if (event.target.id.startsWith("addEvent--")) {
  //       // mainSection.innerHTML = "";
  //       const eventFormDiv = document.querySelector("#event-form")
  //       eventFormDiv.innerHTML = "";
  //       event.preventDefault();
  //       const newEventForm = `
  //       <form id="newEventForm">
  //       <fieldset id="newEventField">
  //         <label for="name"><b>Event Name</b></label>
  //         <input type="text" id="event-name-input">
  //         <label for="date"><b>Event Date</b></label>
  //         <input type="text" id="event-date-input">
  //         <label for="location"><b>Event Location</b></label>
  //         <input type="text" id="event-location-input">
  //         <button type="submit" id="saveEvent--btn">Save Event</button>
  //       </fieldset>
  //       </form>
  //       `;
  //       eventFormDiv.innerHTML += newEventForm;
  //       const addEventButton = document.querySelector("#addEvent--btn");
  //     }
  //   })
  // },