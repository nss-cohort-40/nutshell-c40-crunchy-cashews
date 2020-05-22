import createComponent from "/src/scripts/events/htmlFactory.js"
import events from "/src/scripts/events/main.js"

const mainSection = document.querySelector("#main-section");
const otherSection = document.querySelector("#other-section");
const eventFormDiv = document.querySelector("#event-form");

const render = {
  addEvent() {
    mainSection.innerHTML = createComponent.addEvent();
  },
  eventsResults(results) {
    otherSection.innerHTML = "";
    for (let i = 0; i < results.length; i++) {
      otherSection.innerHTML += createComponent.eventsResults(results[i]);
      // events.deleteEventEL();
    }
  },
  eventForm() {
    event.preventDefault();
    mainSection.innerHTML += createComponent.eventForm();
  },
  updateFormFields (eventId) {
    let hiddenEventId = document.querySelector("#eventId")
    let nameInput = document.querySelector("#event-name-input")
    let dateInput = document.querySelector("#event-date-input")
    let locationInput = document.querySelector("#event-location-input")

    fetch(`http://localhost:8080/events/${eventId}`)
      .then(response => response.json())
      .then(event => {
        hiddenEventId.value = event.id 
        nameInput.value = event.name 
        dateInput.value = event.date 
        locationInput.value = event.location
      })
  }
}

export default render;
