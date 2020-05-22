import messagesDomContainer from "/src/scripts/messages/htmlFactory.js"

const renderForms = {
    // Renders register form
    renderRegisterForm() {
        const registerForm = document.querySelector("#main-section")
        registerForm.innerHTML = "";
        registerForm.innerHTML += messagesDomContainer.createRegisterForm;
    },
    // Renders all messages to DOM
    renderAllMessages(submittedMessage) {
        const mainSection = document.querySelector("#main-section")
        mainSection.innerHTML = ""
        const otherSection = document.querySelector("#other-section")
        otherSection.innerHTML = ""
        for (let i=0; i<submittedMessage.length; i++) {
            mainSection.innerHTML += messagesDomContainer.allMessages(submittedMessage[i])
        }
    }
}



export default renderForms