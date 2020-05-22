/*
    Author: Roxanne
    Purpose: rendering news articles to the main section container in our nav bar
*/

import newsHTML from "/src/scripts/news/htmlfactory.js"

const mainSection = document.querySelector("#main-section");
const otherSection = document.querySelector("#other-section");

const renderNews = {

    renderArticles: news => {
      mainSection.innerHTML = ""
      otherSection.innerHTML = ""
      for (let i = 0; i < news.length; i++) {
        mainSection.innerHTML += newsHTML.createNewsArticle(news[i])
      }
    },

      newsForm: document.querySelector("#other-section"),
        renderNewsAddForm: () => {
          newsForm.innerHTML = createNewsAddForm();
        }

    }

export default renderNews
    