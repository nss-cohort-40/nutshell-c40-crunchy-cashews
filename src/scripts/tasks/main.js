// Author: Kirk
// Purpose: To make delete button and
// checkbox work on task card
import el from "/src/scripts/tasks/htmlFactory.js";
import API from "/src/scripts/tasks/data.js";

let taskCardEvents = {
  deleteTaskCard() {
    el.mainSection.addEventListener("click", (event) => {
      if (event.target.id.startsWith("delete--")) {
        console.log("clicked delete", event);
        const deleteId = event.target.id.split("--")[1];
        API.deleteTask(deleteId)
          .then(API.getTasksByUserId)
          .then((tasks) => el.renderTaskCard(tasks));
      }
    });
  },
};

export default taskCardEvents;
