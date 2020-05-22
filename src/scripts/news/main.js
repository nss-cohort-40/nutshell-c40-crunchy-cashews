//Compile newsApi, articleMaker, and renderNewsArticle here - RN
import newsApi from "./data.js"
import newstoHTML from "./htmlFactory.js"



const recordArticle = document.querySelector("#main-section");

recordArticle.addEventListener("click", (event) =>  {
    if (event.target.id.startsWith("save--")) {
    const newsArticle = event.target.id.split("--")[1]
    newsApi.addNewArticle(newsArticle)
    .then(getAndRenderAllArticles)
    }
    })


function getAndRenderAllArticles() {
    recordArticle.innerHTML = ""
    newsApi.getAllArticles().then(news => {
        news.sort(sortAZ).map(newstoHTML).forEach(renderToDOM)
    })
}

getAndRenderAllArticles()





function renderToDOM(htmlRep) {
    recordArticle.innerHTML += htmlRep;
}

function sortAZ(a, b){
    return a.title.localeCompare(b.title)
}




export default newsMain