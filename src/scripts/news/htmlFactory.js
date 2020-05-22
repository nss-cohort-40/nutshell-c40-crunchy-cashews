
  //entry component
  const createNewsArticle = (news) => {
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
<input type="text" id="newsTitle" placeholder="title" />
          <input type="url" id="newsURL" placeholder="Link to Article" />
        </div>
<div class="news-form__submit">
<button id="saveNews">Save</button></div>
</article>
`;

      //createEntry
 const createNewsObject = (url, title, synopsis, timestamp) => {
        return {
            "url": url,
            "title": title,
            "synopsis": synopsis,
            "timestamp": timestamp,
            "userId": userId
        }
      };
   
export default { createNewsArticle, createNewsObject, createNewsAddForm}

