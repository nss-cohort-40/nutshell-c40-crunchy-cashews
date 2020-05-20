let newsContainer = document.querySelector("#newsContainer")

//Factory Function to make the new article
const createNewArticle = (url, title, synopsis, timestamp) => {
    let newArticle = {
        "userId": userId,
        "articleLink": url,
        "articleTitle": title,
        "articleSynopsis": synopsis,
        "dateAndTimeAdded": timestamp
    }
    return newArticle
}




export default createNewArticle
