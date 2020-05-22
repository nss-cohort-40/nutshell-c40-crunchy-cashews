
//Create news article and factory function - RN

const newstoHTML = (news) => {
    return  `
    <div class="news_card">
    <h3><a href="${news.url}"></h3>
    <h1><em><a href="${news.title}</em></a></h1>
    <p>${news.synopsis}</p>
    <button id="saveNews--${news.id}" class="save_btn">save</button>
        </div>
    `
}


 const listArticles = (articleArray) => {
    let articleList = document.querySelector("#main-section");
        articleList.innerHTML = "";
        articleArray.forEach( article => {
          articleList.appendChild(articleMaker(article))
        })
      };


        
   
export default {newstoHTML, listArticles}

