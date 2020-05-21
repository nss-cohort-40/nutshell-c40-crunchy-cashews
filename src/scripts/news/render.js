//Take htmlFactory and render to the DOM -RN

import articleMaker from "./htmlFactory.js"


const renderNews = (newsArticle) => {
  const mainContentContainer = document.querySelector("#main-section");
  mainContentContainer.innerHTML= "";

  newsArticle.forEach(article => {
    const newsArticleHTML = articleMaker(article);
    mainContentContainer.innerHTML += newsArticleHTML;
    
  });
};






export default renderNews