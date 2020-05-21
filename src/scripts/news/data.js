// Api Manager for News

const newsApi = {
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
 
}
}

  
  export default newsApi
  
