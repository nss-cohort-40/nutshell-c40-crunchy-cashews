/*
    Author: Roxanne
    Purpose: EventListeners so new articles can be created and saved
*/
import newsApi from "./data.js"
import renderArticles from "./render.js"


const newsEventListeners = {
addNews: () => {
    const addNewsButton = document.querySelector("#addNews--btn")
    addNewsButton.addEventListener("click", function () { 
        const urlInput = document.querySelector("#newsURL");
        const titleInput = document.querySelector("#newsTitle");
        const synopsisInput = document.querySelector("#newsSynopsis");
        const timestampInput = document.querySelector("#newsTimestamp");
        const userIdInput = document.querySelector("#newsUserId");


        const newArticle = articleObject(urlInput.value,titleInput.value,synopsisInput.value,
         timestampInput.value,
          userIdInput.value)


          newsApi.addNewsArticle(newArticle)
          .then(newsApi.getAllArticles).then(renderArticles)
    
},


newsApi.getAllArticles().then(renderJournalEntries);


export default newsEventListeners