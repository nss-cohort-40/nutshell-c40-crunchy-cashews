import API from "./data.js"
import renderJournalEntries from "../entriesDOM.js";
import createNewArticle from "./htmlFactory.js"

const recordArticle = document.querySelector("#record_Article");
//get record article button from index

recordArticle.addEventListener("click",  function () {
    //select input fields in the eventListener
    const articleLink = document.querySelector("#Url");
    const articleTitle = document.querySelector("#Title");
    const articleSynopsis = document.querySelector("#Synopsis");
  
    //calls upon the factory function here
    const newEntry = createNewEntry(dateInput.value, conceptsInput.value, entryInput.value, moodInput.value)
    //value property gets the text you type/choose 



    API.recordJournalEntry(newEntry)
    .then(API.fetchEntries).then(renderJournalEntries)
      
});

API.fetchEntries().then(renderJournalEntries);