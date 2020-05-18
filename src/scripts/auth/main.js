// Adds event listener to Register button (ER)
const registerButton = document.querySelector("#register")
registerButton.addEventListener("click", event => {
  renderRegisterForm()
  console.log("clicked")
})

// Function to render the register form to the DOM (ER)
function renderRegisterForm () {
  const registerForm = document.querySelector("#register-form");
  registerForm.innerHTML = ""
  registerForm.innerHTML += createRegisterForm()
}

// Function to create register form (ER)
function createRegisterForm () {
  return `
  <fieldset>
    <label for="email">Email:</label>
    <input type="email">
    <label for="username">Username:</label>
    <input type="text">
    <label for="password">Password:</label>
    <input type="password">
    <label for="password-confirmation">Confirm Password:</label>
    <input type="password">
    <button id="saveRegister">Register</button>
  </fieldset> 
  `
}

// TODO Factory Function 