//Compile newsApi, articleMaker, and renderNewsArticle here - RN
import newsApi from "./data.js"


const mainSection = document.querySelector("#main-section");


mainSection.addEventListener("click", (event) => {
    if (event.target.id.startsWith("save--")) {
        const newsArticle = event.target.id.split("--")[1]
        newsApi.addNewArticle(newsArticle)
            .then(getAndRenderAllArticles)
    }
})