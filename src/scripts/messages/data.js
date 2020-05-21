const messageAPI = {
    getAllMessages() {
        return fetch("http://localhost:8080/messages")
            .then((response) =>
                response.json()
            );
    }

export default messageAPI