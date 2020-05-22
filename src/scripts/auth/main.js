import API from "./data.js";
import tasksHTML from "/src/scripts/tasks/htmlFactory.js";
import taskCardEvents from "/src/scripts/tasks/main.js";
// import navBar from "/src/scripts/messages/main.js"
import eventsAPI from "/src/scripts/events/data.js";
import render from "/src/scripts/events/render.js";
import events from "/src/scripts/events/main.js";
import messageAPI from "/src/scripts/messages/data.js"
import renderForms from "/src/scripts/messages/render.js"
import newsAPI from "/src/scripts/news/data.js";
import renderNews from "/src/scripts/news/render.js";

// Adds event listener to Register button (ER)
const welcome = document.querySelector("#welcome");
const registerButton = document.querySelector("#register");
registerButton.addEventListener("click", (event) => {
  welcome.innerHTML = "";
  renderRegisterForm();
  // Register Btn for new users => create new users
  const saveRegisterBtn = document.querySelector("#saveRegister");
  saveRegisterBtn.addEventListener("click", (event) => {
    event.preventDefault();
    let newEmail = document.querySelector("#emailInput").value;
    let newUsername = document.querySelector("#usernameInput").value;
    let password = document.querySelector("#passwordInput").value;
    let passwordConfirm = document.querySelector("#passwordConfirmInput").value;
    let newUser = createNewUser(newUsername, newEmail, password);
    if (password != passwordConfirm) {
      window.alert("Passwords don't match.");
      return false;
    } else {
      API.getAllUsers().then((users) => {
        const foundUser = users.find((user) => user.email === newEmail);
        if (foundUser === undefined) {
          API.saveNewUser(newUser);
          createNav();
          const clearRegister = document.querySelector("#register-form");
          clearRegister.innerHTML = "";
        } else {
          window.alert("Email already taken");
        }
      });
    }
  });
});

// Function to render the register form to the DOM (ER)
function renderRegisterForm() {
  const registerForm = document.querySelector("#register-form");
  registerForm.innerHTML = "";
  registerForm.innerHTML += createRegisterForm();
}

// Function to create register form (ER)
function createRegisterForm() {
  return `
  <form action="/action_page.php" id="form">
  <div class="container">
    <h1>Register</h1>
    <p>Please fill in this form to create an account.</p>
    <hr>

    <label for="email"><b>Email</b></label>
    <input type="text" id="emailInput" placeholder="Enter Email" name="email" required>

    <label for="username"><b>Username</b></label>
    <input type="text" id="usernameInput" placeholder="Enter Username">

    <label for="psw"><b>Password</b></label>
    <input type="password" id="passwordInput" placeholder="Enter Password" name="psw" required>

    <label for="psw-repeat"><b>Repeat Password</b></label>
    <input type="password" id="passwordConfirmInput" placeholder="Repeat Password" name="psw-repeat" required>

    <button type="submit" class="registerBtn" id="saveRegister">Register</button>
  </div>
  </form>
  `;
}

// function to create Nav Bar (ER)
const nav = document.querySelector("#nav-bar");
function createNav() {
  return (nav.innerHTML += `
  <ul>
  <li><a class="active" href="#home">Home</a></li>
  <li><a href="#messages" id="messages">Messages</a></li>
  <li><a href="#news" id="news">News</a>
  </li>
  <li><a href="#tasks" id="tasks">Tasks</a></li>
  <li><a href="#events" id="events">Events</a></li>
  <li><a href="#friends" id="friends">Friends</a></li>
  </ul>
  `);
}

function createNewUser(username, email, password) {
  return {
    username: username,
    email: email,
    password: password,
  };
}

// NAV BAR EVENT LISTENER FOR EACH SECTION
const navBar = {
  render() {
    let nav = document.querySelector("#nav-bar");
    nav.addEventListener("click", (event) => {
      if (event.target.id.startsWith("messages")) {
        messageAPI.getAllMessages().then(renderForms.renderAllMessages);
      } else if (event.target.id.startsWith("news")) {
        newsAPI.getAllArticles().then(renderNews.renderArticles);
      } else if (event.target.id.startsWith("events")) {
        eventsAPI.getEvents()
          .then(render.eventsResults)
          .then(events.deleteEventEL)
          .then(events.editEventEL)
        render.addEvent();
        events.addEventEL();
        
        console.log("clicked events");

      } else if (event.target.id.startsWith("tasks")) {
        tasksHTML.btnNewTask();
        tasksHTML.renderTaskForm();
        tasksHTML.saveTaskToDb();
        taskCardEvents.deleteTaskCard();
      }
    });
  },
};

navBar.render();

// EVENT LISTENER FOR LOGIN BUTTON THAT DOESNT WORK YET
// const loginButton = document.querySelector("#login-button")
// loginButton.addEventListener("click", event => {
//   let usernameLogin = document.querySelector("#username-login").value;
//   let passwordLogin = document.querySelector("#password-login").value;
//   API.getAllUsers()
//     .then(users => {
//       users.forEach(user => {
//         if (user.username === usernameLogin && user.password === passwordLogin) {
//           console.log("Console Logging entry.id", user.id)
//           sessionStorage.setItem("activeUser", user.id)
//      }
//    })
//   })
// })
