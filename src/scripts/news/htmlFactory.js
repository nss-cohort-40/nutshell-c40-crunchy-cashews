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

const makeArticle = (article) => {
    return `
      <h3><b><em></em>${article.title}</em></b></h3>
      <p class="articleLink">${article.url}</p>
      <p class="articleSynopsis">${article.synopsis}</p>
      <p class="mood">Current Mood: ${article.mood}</p>
      `
  };



export default {createNewArticle, makeArticle}
