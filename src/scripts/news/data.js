/*
    Author: Roxanne
    Purpose: newsApi manager to get and add news articles 
*/



const newsURL = "http://localhost:8080/news"

const newsApi = {
  getAllArticles() {
    return fetch(`${newsURL}`)
      .then(resp => resp.json())
  },
  addNewsArticle(newsArticle) {
    return fetch(`${newsURL}/${newsArticle}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newsArticle)
    })

  }
};


export default newsApi