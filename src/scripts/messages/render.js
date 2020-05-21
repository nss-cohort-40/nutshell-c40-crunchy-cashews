import messagesDomContainer from "/src/scripts/messages/htmlFactory.js"

const renderForms = {
    // Renders register form
    renderRegisterForm() {
        const registerForm = document.querySelector("#main-section")
        registerForm.innerHTML = "";
        registerForm.innerHTML += messagesDomContainer.createRegisterForm;
    },
    // Renders all messages to DOM
    renderAllMessages() {
        const allMessages = document.querySelector("#messages")
        allMessages.innerHTML = ""
        allMessages.forEach(message => allMessages.innerHTML +=
            messageForm(message))
    },
}



export default renderForms