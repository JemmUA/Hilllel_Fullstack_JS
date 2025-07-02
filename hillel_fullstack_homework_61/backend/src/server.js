import express from 'express';
import {articles} from "./articles.js";

const PORT = 3039;
const app = express();

console.log(articles);

app.set('view engine', 'pug');

app.get('/articles', (req, res) => {
    getAllArticles(req, res, articles);
});

app.get('/articles/:id', (req, res) => {
    const articleId = Number(req.params.id);
    console.log(articleId);

  if (isNaN(articleId))
  {
      error404(req, res);
  } else if ((articleId > 0 && articleId <= articles.length)  &&
    (articles.find((art) => art.id === articleId).id === articleId)) {
      getArticleById(req, res, articles, articleId);
  } else {
      error404(req, res);
  }
});

const getAllArticles = ((req,res, articles) => {
    let articlesText = '';
    articles.forEach(art => articlesText += art.title + ' <br> ' + art.text + '<br> <br> ');
    const data = {title: 'PUG | All articles', articlesPageTitle: "Статті", articles: articlesText};
    res.status(200).render('articles', data);
});

const getArticleById = ((req, res, articles, articleId) => {
    console.log(`article id #${articleId} found`);
    const data = {
        title: 'PUG',
        artTitle: articles[articleId - 1].title,
        artText: articles[articleId - 1].text
    }
    res.status(200).render('index', data);
    });

const error404 = (req, res) => {
    const error = 'Панікуйте вже - 404 ;))';
    console.error(error);
    const data = {title: 'PUG | Error', error: error};
    res.status(404).render('error404', data);
}

app.listen(PORT, () => {
  console.log(`express server at port: ${PORT}`);
});