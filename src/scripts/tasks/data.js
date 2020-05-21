// KS

const taskDatabase = "http://localhost:8080/tasks";

let activeId = sessionStorage.activeUser;
const API = {
  getTasksByUserId: function () {
    return fetch(`${taskDatabase}?userId=${activeId}`).then((response) =>
      response.json()
    );
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
};

export default API;
