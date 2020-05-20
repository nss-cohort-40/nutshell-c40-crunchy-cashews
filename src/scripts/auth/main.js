// import saveRegisterBtn from "./registerObj.js";
// Adds event listener to Register button (ER)

import API from "./registerObj.js";
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
      API.getUser().then((users) => {
        const foundUser = users.find((user) => user.email === newEmail);
        if (foundUser === undefined) {
          API.saveNewUser(newUser);
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
  <form>
  <fieldset>
    <label for="email">Email:</label>
    <input type="email" id="emailInput">
    <label for="username">Username:</label>
    <input type="text" id="usernameInput">
    <label for="password">Password:</label>
    <input type="password" id="passwordInput">
    <label for="password-confirmation">Confirm Password:</label>
    <input type="password" id="passwordConfirmInput">
    <button id="saveRegister">Register</button>
  </fieldset> 
  </form>
  `;
}

function createNewUser(username, email, password) {
  return {
    username: username,
    email: email,
    password: password,
  };
}
