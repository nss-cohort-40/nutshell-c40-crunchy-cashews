import newsToHTML from "./htmlfactory.js"
import newsApi from "./data.js"


  
mainSection.addEventListener("click", (event) => {
  if (event.target.id.startsWith("save--")) {
    const newsArticle = event.target.id.split("--")[1]
    newsApi.addNewArticle(newsArticle)
      .then(getAndRenderAllArticles)
  }
})

getAndRenderAllArticles = (articles) => {
  const mainSection = document.querySelector("#main-section");
  mainSection.innerHTML = ""

  articles.forEach(article => {
    const articleHtml = newsToHTML(article);
    mainSection.innerHTML += articleHtml;

  });



getAndRenderAllArticles();

}


export default {getAndRenderAllArticles}