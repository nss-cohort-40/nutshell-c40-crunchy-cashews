import newsApi from "./data.js"
//event listeners

const addNewsAddEventListener = () => {
    const saveNewsButton = document.querySelector("#saveNews");
  
    saveNewsButton.addEventListener("click", () => {
      const urlInput = document.querySelector("#newsURL");
      const titleInput = document.querySelector("#newsTitle");
      const synopsisInput = document.querySelector("#newsSynopsis");
      const timestampInput = document.querySelector("#newsTimestamp");
      const userIdInput = document.querySelector("#newsUserId");
  
      const newsArticle = {
       url: urlInput.value,
       title: titleInput.value,
       synopsis: synopsisInput.value,
       timestamp: timestampInput.value,
       userId: userIdInput.value
      };
  
      newsApi.addNewsArticle(newsArticle)
        .then(() => {
          newsApi.getAllArticles().then(renderArticles);
        });
    });
  };

  export default addNewsAddEventListener