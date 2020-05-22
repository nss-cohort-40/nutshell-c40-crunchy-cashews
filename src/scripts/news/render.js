//  Take htmlFactory and render to the DOM -RN

import articleMaker from "./htmlFactory.js"


const renderNews = (newsArticle) => {
  const mainContainer = document.querySelector("#main-section");
  mainContainer.innerHTML = "";

  newsArticle.forEach(article => {
    const newsArticleHTML = renderNews(article);
    mainContainer.innerHTML += newsArticleHTML;

  });
};

export default renderNews