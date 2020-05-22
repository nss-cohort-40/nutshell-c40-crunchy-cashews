import render from "/src/scripts/events/render.js";
import eventsAPI from "/src/scripts/events/data.js";

const mainSection = document.querySelector("#main-section");
const otherSection = document.querySelector("#other-section");
const eventFormDiv = document.querySelector("#event-form");

const events = {
  addEventEL() {
    const addEventBtn = document.querySelector("#addEvent--btn");
    addEventBtn.addEventListener("click", (event) => {
      render.eventForm();
    });
  },
  saveEventEL() {
    const saveEventBtn = document.querySelector("#saveEvent--btn");
    saveEventBtn.addEventListener("click", (event) => {
      if (
        document.querySelector("#event-name-input").value === "" ||
        document.querySelector("#event-date-input").value === "" ||
        document.querySelector("#event-location-input").value === ""
      ) {
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
};

export default events;
