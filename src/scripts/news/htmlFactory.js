//Create news article and factory function - RN

const articleMaker = (url, title, synopsis, timestamp)  => {
            let newArticle = {
                "userId": sessionStorage.activeUser,
                "url": url,
                "title": title,
                "synopsis": synopsis,
                "timestamp": timestamp
            }
            return newArticle
        }
    




export default articleMaker