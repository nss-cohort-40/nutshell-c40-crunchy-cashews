// KS

const taskDatabase = "http://localhost:8080/tasks";

const API = {
  // incomplete tasks
  getTasksByUserId: function () {
    let activeId = parseInt(sessionStorage.activeUser);
    return fetch(
      `${taskDatabase}?userId=${activeId}&complete=false`
    ).then((response) => response.json());
  },
  addNewTask: function (creation) {
    return fetch(`${taskDatabase}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(creation),
    }).then((response) => response.json());
  },
  deleteTask: function (taskId) {
    return fetch(`${taskDatabase}/${taskId}`, {
      method: "DELETE",
    });
  },
  editTask: function (taskId) {
    return fetch(`${taskDatabase}/${taskId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(taskObj),
    }).then((response) => response.json());
  },
};

export default API;
