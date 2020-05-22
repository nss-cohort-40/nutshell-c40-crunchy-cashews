import createNewsArticle from "./htmlfactory.js"

const renderNews = {

  mainSection: document.querySelector("#main-section"),

  renderArticles: articles => {
    mainSection.innerHTML = ""

    articles.forEach(article => {
      const newsArticle = createNewsArticle(article);
      mainSection.innerHTML += newsArticle;
    })
  },

  newsForm: document.querySelector("#other-section"),
  renderNewsAddForm: () => {
    newsForm.innerHTML = createNewsAddForm();
  }

}

export default {
  renderNews
}