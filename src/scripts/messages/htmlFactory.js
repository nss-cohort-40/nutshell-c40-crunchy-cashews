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
        <section>${submittedMessage.message}</section>
        <button id="edit--${submittedMessage.id}">Edit</button>
        <button id="save--${submittedMessage.id}">Save</button>
        </article>
        `
    }




}

export default messageDomContainer