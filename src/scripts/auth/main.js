// import saveRegisterBtn from "./registerObj.js";

import API from "./registerObj.js";

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
    let newUser = createNewUser(newEmail, newUsername, password);
    if (password != passwordConfirm) {
      window.alert("Passwords don't match.");
      return false;
    } else {
      API.getAllUsers().then((users) => {
        const foundUser = users.find((user) => user.email === newEmail);
        if (foundUser === undefined) {
          API.saveNewUser(newUser)
        } else {
          window.alert("Email already taken");
        }
      });
      const clearRegister = document.querySelector("#register-form")
      clearRegister.innerHTML = "";
      createNav();
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

    <button type="submit" class="registerbtn" id="saveRegister">Register</button>
  </div>
  </form>
  `
};

const nav = document.querySelector("#nav-bar")
function createNav() {
  return nav.innerHTML += `
  <ul>
  <li><a class="active" href="#home">Home</a></li>
  <li><a href="#news">News</a></li>
  <li><a href="#contact">Contact</a></li>
  <li><a href="#about">About</a></li>
  </ul>
  `
}

function createNewUser(username, email, password) {
  return {
    username: username,
    email: email,
    password: password,
  };
}

const loginButton = document.querySelector("#login-button")
loginButton.addEventListener("click", event => {
  let usernameLogin = document.querySelector("#username-login").value;
  let passwordLogin = document.querySelector("#password-login").value;
  API.getAllUsers()
    .then(users => {
      users.forEach(user => {
        if (user.username === usernameLogin && user.password === passwordLogin) {
          console.log("Console Logging entry.id", user.id)
          sessionStorage.setItem("activeUser", user.id) 
     }
   })
  })
})

// <form id="form">
// <fieldset>
//   <label for="email">Email:</label>
//   <input type="email" id="emailInput">
//   <label for="username">Username:</label>
//   <input type="text" id="usernameInput">
//   <label for="password">Password:</label>
//   <input type="password" id="passwordInput">
//   <label for="password-confirmation">Confirm Password:</label>
//   <input type="password" id="passwordConfirmInput">
//   <button id="saveRegister">Register</button>
// </fieldset> 
// </form>