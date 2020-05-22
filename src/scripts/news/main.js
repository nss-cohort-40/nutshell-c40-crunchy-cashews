//Compile newsApi, articleMaker, and renderNewsArticle here - RN
import newsApi from "./data.js"
import newstoHTML from "./htmlFactory.js"

const newsMain = {

const recordArticle = document.querySelector("#other-section");

recordArticle.addEventListener("click", (event) =>  {
    if(event.target.id.startsWith("save--")) {
    const newsArticle = event.target.id.split("--")[1]
    newsApi.recordArticle(newsArticle)
    }
    }),


function getAndRenderAllArticles() {
    recordArticle.innerHTML = ""
    newsApi.getAllArticles().then(news => {
        news.sort(sortAZ).map(newstoHTML).forEach(renderToDOM)
    })
return getAndRenderAllArticles()

},


function renderToDOM(htmlRep) {
    recordArticle.innerHTML += htmlRep;
},

function sortAZ(a, b){
    return a.title.localeCompare(b.title)
}


}

export default newsMain