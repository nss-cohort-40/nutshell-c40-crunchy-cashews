import createNewsArticle from "./htmlfactory.js"

const mainSection = document.querySelector("#main-section")

const renderArticles = articles => {
  mainSection.innerHTML = ""

  articles.forEach(article => {
    const newsArticle = createNewsArticle(article);
    mainSection.innerHTML += newsArticle;
  })
}

const newsForm = document.querySelector("#other-section")

const renderNewsAddForm = () => {
  newsForm.innerHTML = createNewsAddForm();
}


export default {
  renderArticles,
  renderNewsAddForm
}