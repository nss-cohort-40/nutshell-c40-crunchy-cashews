// function renderForms () {
//     stuffInAuth.addEventListener(click , (event) => {
//         if (event.click.target
//     })
// }

const messageDomContainer = {

    messageForm(newMessage) {
        return `
        <h3>New Message</h3>
        <form id="messageForm">
        Message: <input type="text" name="Message Input"
        <button id="submit--${newMessage.id}">Submit</button>
        </form>
        `
    },

    allMessages(submittedMessage) {
        return`
        <article class="entryLog">
        <h3>Messages</h3>
        <section>${submittedMessage.chatHistory}</section>
        <button id="edit--${submittedMessage.id}">Edit</button>
        <button id="saveNews--${submittedMessage.id}">Save</button>
        </article>
        `
    }




}

export default messageDomContainer