const API = {
  saveNewUser(createNewUser) {
    return fetch("http://localhost:8080/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(createNewUser),
    })
      .then((response) => response.json())
      .then((user) => {
        sessionStorage.setItem("activeUser", user.id);
      });
  },
  getAllUsers() {
    return fetch("http://localhost:8080/users").then((response) =>
      response.json()
    );
  },







  
};

export default API;
