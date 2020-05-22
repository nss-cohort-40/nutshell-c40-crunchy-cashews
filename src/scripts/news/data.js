const newsURL = "http://localhost:8080/news"

const newsApi = {
  getAllArticles() {
    return fetch(`${newsURL}`)
      .then(resp => resp.json())
  },
  addNewArticle(newArticle) {
    return fetch(`${newsURL}/${newArticle}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newArticle)
    })

  }
};


export default newsApi