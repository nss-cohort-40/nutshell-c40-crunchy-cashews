/*
    Author: Roxanne
    Purpose: EventListeners so new articles can be created and saved
*/
import newsApi from "./data.js"
import renderArticles from "./render.js"
import articleObject from "./main.js"

const recordNewsArticle = () => {
    const recordNewsButton = document.querySelector("#recordNews--btn");
    recordNewsButton.addEventListener("click", function () {
        const urlInput = document.querySelector("#newsURL");
        const titleInput = document.querySelector("#newsTitle");
        const synopsisInput = document.querySelector("#newsSynopsis");
        const timestampInput = document.querySelector("#newsTimestamp");

        const newArticle = articleObject(urlInput.value, titleInput.value, synopsisInput.value, timestampInput.value);

        newsApi.recordNewsArticle(newArticle)
            .then(newsApi.getAllArticles).then(renderArticles)

        newsApi.getAllArticles().then(renderArticles)

    })

}

export default recordNewsArticle