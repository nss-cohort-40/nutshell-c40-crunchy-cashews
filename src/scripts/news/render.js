import createNewsArticle from "./htmlfactory.js"

const renderArticles = articles => {
    mainSection.innerHTML = ""

    articles.forEach(article => {
      const newsArticle = createNewsArticle(article);
      mainSection.innerHTML += newsArticle;
    })
  }
    export default renderArticles;