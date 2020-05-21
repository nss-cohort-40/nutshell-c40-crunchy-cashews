import API from "./data.js";

let mainSection = document.querySelector("#main-section");

const tasksHTML = {
  btnNewTask: function () {
    mainSection.innerHTML = "";
    const newTaskbtn = `
        <button id="newTask--btn">New Task</button>
        `;
    mainSection.innerHTML = newTaskbtn;
    // renderTaskCard () {}
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
        let activeUser = sessionStorage.activeUser.value;
        if (newTaskInput != "" && completeByDate != "") {
          API.addNewTask(
            tasksHTML.makeTaskObj(newTaskInput, completeByDate, activeUser)
          );
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
};
export default tasksHTML;
