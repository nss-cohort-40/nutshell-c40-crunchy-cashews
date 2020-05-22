/*
    Author: Roxanne
    Purpose: rendering news articles to the main section container in our nav bar
*/



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