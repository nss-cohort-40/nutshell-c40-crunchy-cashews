import render from "/src/scripts/events/render.js"
import eventsAPI from "/src/scripts/events/data.js"
import createComponent from "/src/scripts/events/htmlFactory.js"

const mainSection = document.querySelector("#main-section");
const otherSection = document.querySelector("#other-section");
const eventFormDiv = document.querySelector("#event-form");

const events = {
  addEventEL() {
    const addEventBtn = document.querySelector("#addEvent--btn");
    addEventBtn.addEventListener("click", (event) => {
      render.eventForm();
      this.saveEventEL();
    })
  },
  saveEventEL() {
    const saveEventBtn = document.querySelector("#saveEvent--btn");
    saveEventBtn.addEventListener("click", (event) => {
      if (
        document.querySelector("#event-name-input").value === "" ||
        document.querySelector("#event-date-input").value === "" ||
        document.querySelector("#event-location-input").value === ""
      ) {
        event.preventDefault();
        window.alert("All fields must be completed DUMMY");
      } else {
        let nameInput = document.querySelector("#event-name-input").value;
        let dateInput = document.querySelector("#event-date-input").value;
        let locationInput = document.querySelector("#event-location-input")
          .value;
        let createNewEventEntry = createComponent.newEvent(
          nameInput,
          dateInput,
          locationInput
        );
        eventsAPI
          .saveEvent(createNewEventEntry)
          .then((newEntry) => {
            return eventsAPI.getEvents();
          })
          .then(render.eventsResults);
      }
    });
  },
  deleteEventEL () {
    otherSection.addEventListener("click", event => {
      if (event.target.id.startsWith("deleteEvent--")) {
        const eventToDelete = event.target.id.split("--")[1]
        eventsAPI.deleteEvent(eventToDelete)
          .then(eventsAPI.getEvents)
          .then(render.eventsResults)
      }
    })
  },
  editEventEL () {
    otherSection.addEventListener("click", event => {
      if (event.target.id.startsWith("editEvent--")) {
        const eventIdToEdit = event.target.id.split("--")[1]
        render.updateFormFields(eventIdToEdit)
        console.log("EVENT ID: ", eventIdToEdit)
      }
    })
  }
}

export default events;
