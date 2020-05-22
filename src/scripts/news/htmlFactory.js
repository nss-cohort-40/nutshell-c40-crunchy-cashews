

const listArticles = (articleArray) => {
  let articleList = document.querySelector("#main-section");
  articleList.innerHTML = "";
  articleArray.forEach(article => {
    articleList.appendChild(articleMaker(article))
  })
};

//createEntry
const createNewsObject = (url, title, synopsis) => {
    return {
      "url": url,
      "title": title,
      "synopsis": synopsis,
      "mood": mood
    };


    export default {
      newstoHtml,
      createNewsObject,
      listArticles
    }