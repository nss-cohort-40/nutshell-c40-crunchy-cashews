//Create news article and factory function - RN

const articleMaker = (news)  => {
            return `
            <section class="user" id="user--${user.userId}>
            <div class="newsArticle">
            <p><a href="${news.url}"></p>
            <h1><em><a href="${news.title}</em></a></h1>
            <p>${news.synopsis}</p>
                </div>
                </section>
        `
    }
        
   
export default articleMaker

