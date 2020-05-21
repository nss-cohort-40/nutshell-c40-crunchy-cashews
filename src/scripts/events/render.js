import createComponent from "/src/scripts/events/htmlFactory.js"

const mainSection = document.querySelector("#main-section")
const otherSection = document.querySelector("#other-section")
const eventFormDiv = document.querySelector("#event-form")

const render = {
  addEvent () {
    mainSection.innerHTML = createComponent.addEvent();
  },
  eventsResults (results) {
    otherSection.innerHTML = ""
    for (let i = 0; i < results.length; i++) {
      otherSection.innerHTML += createComponent.eventsResults(results[i]);
    }
  },
  eventForm () {
    event.preventDefault();
    mainSection.innerHTML += createComponent.eventForm();
  }
}

export default render