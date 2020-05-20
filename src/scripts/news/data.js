// Get the data from the db

const Api = {
  getAllArticles() {
    return fetch("http://localhost:8080/news")
    .then(articles => articles.json())
  },
    addNewArticle(newArticle) {
    return fetch("http://localhost:8080/news", {
      method: "POST",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newArticle)
    })
  },
  deleteArticle(newsId) {
    return fetch(`http://localhost:8088/news/${newsId}`, {
        method: "DELETE"
    })
    .then(response => response.json())
}
}

  
  export default api
  