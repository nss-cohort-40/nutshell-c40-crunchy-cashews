// Author: Kirk
// Function: Uuhhh... put things on DOM and then
// some other stuff that shouldn't be here I'm guessing.
import API from "./data.js";

let mainSection = document.querySelector("#main-section");

const tasksHTML = {
  mainSection: document.querySelector("#main-section"),
  btnNewTask: function () {
    mainSection.innerHTML = "";
    let newTaskBtn = `
        <button id="newTask--btn">New Task</button>
        `;
    mainSection.innerHTML = newTaskBtn;
    newTaskBtn += API.getTasksByUserId().then((tasks) =>
      tasksHTML.renderTaskCard(tasks)
    );
  },
  renderTaskForm: function () {
    mainSection.addEventListener("click", (event) => {
      if (event.target.id.startsWith("newTask--")) {
        mainSection.innerHTML = "";
        event.preventDefault();
        const newTaskForm = `
        <form id="newTaskForm">
        <fieldset id="newTaskField">
        <label for="newTask">New Task:</label>
        <input type="text" name="newTaskInput" id="newTaskInput" /> 
        <label for="completeDate">Complete it by:</label>
        <input type="date" name="completeByDateInput" id="completeByDateInput" />
        <button id="saveNewTask--btn">Save</button>
        </fieldset></form>
        `;
        mainSection.innerHTML = newTaskForm;
      }
    });
  },
  saveTaskToDb: function () {
    mainSection.addEventListener("click", (event) => {
      if (event.target.id.startsWith("saveNewTask--")) {
        event.preventDefault();
        let newTaskInput = document.querySelector("#newTaskInput").value;
        let completeByDate = document.querySelector("#completeByDateInput")
          .value;
        let activeUser = parseInt(sessionStorage.activeUser);
        if (newTaskInput != "" && completeByDate != "") {
          API.addNewTask(
            tasksHTML.makeTaskObj(activeUser, newTaskInput, completeByDate)
          );
          document.querySelector("#newTaskForm").reset();
        } else {
          window.alert("Completely Fill out the New Task Form Please!");
        }
      }
    });
  },
  makeTaskObj: function (taskUserId, taskValue, taskCompleteDate) {
    return {
      userId: taskUserId,
      task: taskValue,
      completeByDate: taskCompleteDate,
      complete: false,
    };
  },
  makeTaskCard: function (task) {
    return `
      <div class="taskCard">
      <h3 class="taskOutput">${task.task}</h3>
      <p class="taskDateOutput">${task.completeByDate}</p>
      <label for="taskComplete--${task.id}">Check if complete:</label>
      <input type="checkbox" id="taskComplete--${task.id}" value="false"></br>
      <button id="delete--${task.id}">Delete</button>
      `;
  },
  renderTaskCard: function (taskArray) {
    taskArray.forEach((task) => {
      mainSection.innerHTML += tasksHTML.makeTaskCard(task);
    });
  },
};
export default tasksHTML;
