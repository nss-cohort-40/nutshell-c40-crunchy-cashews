//Compile newsApi, articleMaker, and renderNewsArticle here - RN
import newsApi from "./data.js"
import newstoHTML from "./htmlFactory.js"



const recordArticle = document.querySelector("#main-section");

const news = {
    saveNewsArticle() {
        recordArticle.addEventListener("click", (event) => {
            if (event.target.id.startsWith("save--")) {
                const newsArticle = event.target.id.split("--")[1]
                newsApi.addNewArticle(newsArticle)
                    .then(getAndRenderAllArticles)
            }
        })
    },

    getAndRenderAllArticles() {
        function sortAZ(a, b) {
            return a.title.localeCompare(b.title)
        }
        recordArticle.innerHTML = ""
        newsApi.getAllArticles().then(news => {
            news.sort(sortAZ).map(newstoHTML).forEach(renderToDOM)
        })

        function renderToDOM(htmlRep) {
            recordArticle.innerHTML += htmlRep;
        }

    }

};





export default news