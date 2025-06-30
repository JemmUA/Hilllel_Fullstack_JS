import express from 'express';
import {articles} from "./articles.js";

const PORT = 3039;
const app = express();

console.log(articles);

app.set('view engine', 'pug');
app.get('/articles', (req, res) => {
  let articlesText = '';
  articles.forEach((art, id) => articlesText += art.title + '\n' + art.text + '<br>');
  const data = {title: 'PUG', artTitle: "Articles", artText: articlesText};
  res.status(200).render('index', data);
});

app.get('/articles/:id', (req, res) => {
    const articleId = Number(req.params.id);
    console.log(articleId);

  if (!(isNaN(articleId)) &&
      (articles.find((art) => art.id === articleId).id === articleId)) {
        console.log(`article id #${articleId} found`);
        const data = {
          title: 'PUG',
          artTitle: articles[articleId - 1 ].title,
          artText: articles[articleId - 1 ].text};
        res.status(200).render('index', data);
      } else {
       res.status(404).render('', 'Wrong article\'s id');
  }

});

app.listen(PORT, () => {
  console.log(`express server at port: ${PORT}`);
});