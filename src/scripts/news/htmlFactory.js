
  //entry component
  const newsToHTML = (news) => {
    return  `
    <div class="news_card">
    <h3><a href="${news.url}"></h3>
    <h1><em><a href="${news.title}</em></a></h1>
    <p>${news.synopsis}</p>
    <button id="saveNews--${news.id}" class=".save_news_btn">save</button>
        </div>
    `
};

const createNewsAddForm = () => `
<article id="createNewsform">
<header>Add New Article</header>
<div class="news-form__input">
<input type="text" id="newsArticleTitle" placeholder="title" />
          <input type="url" id="newsArticleURL" placeholder="Link to Article" />
        </div>
<div class="news-form__submit">
<button id="saveNewsArticle">Save</button></div>
</article>
`;


      //createEntry
 const createNewsObject = (url, title, synopsis) => {
        return {
            "url": url,
            "title": title,
            "synopsis": synopsis,
            "mood": mood
        }
      };
   
export default { newsToHTML, createNewsObject, createNewsAddForm}

