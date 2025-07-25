import express from 'express';
import {articles, getArticleById, getAllArticles, error404} from "../models/articles.js";

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

app.listen(PORT, () => {
  console.log(`express server at port: ${PORT}`);
});