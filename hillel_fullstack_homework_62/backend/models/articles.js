export const articles = [
    {
        id: 1,
        title: 'Перемога',
        text: 'text .1 1 1. text'
    },
    {
        id: 2,
        title: 'Сміливість',
        text: 'text .2 2 2. text'
    },
    {
        id: 3,
        title: 'Успіх',
        text: 'text .3 3 3. text'
    },
    {
        id: 4,
        title: 'Розум',
        text: 'text .4 4 4. text'
    },
    {
        id: 5,
        title: 'Знання',
        text: 'text .5 5 5. text'
    },
    {
        id: 6,
        title: 'Сила',
        text: 'text .6 6 6. text'
    },
    {
        id: 7,
        title: 'Відповідальність',
        text: 'text .7 7 7. text'
    },
    {
        id: 8,
        title: 'Освіта',
        text: 'text .8 8 8. text'
    },
    {
        id: 9,
        title: 'Виховання',
        text: 'text .9 9 9. text'
    },
]

export const getAllArticles = ((req,res, articles) => {
    let articlesText = '';
    articles.forEach(art => articlesText +=
      '<h3>' + art.title + '</h3>'
      + art.text + '<br> <hr> ');
    const data = {
        favicon: '<link rel="icon" href="/catti_logo.ico">',
        title: 'PUG | All articles',
        articlesPageTitle: "Статті",
        articles: articlesText};
    res.status(200).render('articles_all', data);
});

export const getArticleById = ((req, res, articles, articleId) => {
    console.log(`article id #${articleId} found`);
    const data = {
        favicon: '<link rel="icon" href="/catti_logo.ico">',
        title: 'PUG',
        artTitle: articles[articleId - 1].title,
        artText: articles[articleId - 1].text
    }
    res.status(200).render('article_id', data);
});

export const error404 = (req, res) => {
    const error = 'Панікуйте вже - 404 ;))';
    console.error(error);
    const data = {
        favicon: '<link rel="icon" href="/catti_logo.svg">',
        title: 'PUG | Error 404',
        error: error};
    res.status(404).render('error404', data);
}

