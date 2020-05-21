//Compile newsApi, articleMaker, and renderNewsArticle here - RN
import newsApi from "./data.js"
import articleMaker from "./htmlFactory.js"
import renderNews from "./render.js"


const recordArticle = document.querySelector("#main-section");

recordArticle.addEventListener("click", function() {
    const urlInput = document.querySelector("#url");
    const titleInput = document.querySelector("#title");
    const synopsisInput = document.querySelector("#synopsis");
    const timestampInput = document.querySelector("#timestamp");


    const makeNewArticle = articleMaker(urlInput.value, titleInput.value, synopsisInput.value, timestampInput.value)


newsApi.addNewArticle(makeNewArticle)
.then(newsApi.getAllArticles).then(renderNews)
  
});

newsApi.getAllArticles().then(renderNews);