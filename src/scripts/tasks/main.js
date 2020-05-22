// Author: Kirk
// Purpose: To make delete button and
// checkbox work on task card
import el from "../tasks/htmlFactory.js";
import API from "../tasks/data.js";

let taskCardEvents = {
  deleteTaskCard() {
    el.mainSection.addEventListener("click", (event) => {
      if (event.target.id.startsWith("delete--")) {
        console.log("clicked delete", event);
        const deleteId = event.target.id.split("--")[1];
        API.deleteTask(deleteId);
      }
    });
  },
};

export default taskCardEvents;
