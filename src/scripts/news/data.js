// Get the data from the db
function getAllArticles() {
    return fetch("http://localhost:8080/news")
    .then(articles => articles.json())
  }
  
  function addNewArticle(articleObject) {
    return fetch("http://localhost:8080/news", {
      method: "POST",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify(articleObject)
    })
  }
  
  export default { getAllArticles, addNewArticle }
  