import express from 'express';
import {articles} from "./articles.js";

const PORT = 3039;
const app = express();

console.log(articles);

app.set('view engine', 'pug');
app.get('/articles', (req, res) => {
  // const data = {title: 'Main page with PUG', message: "Hello, big world! ))", content: 'My content on PUG...'};
  let articlesText = '';
  articles.forEach((art, id) => articlesText += art.title + '\n' + art.text);
  const data = {title: 'PUG', message: "Articles", content: articlesText};
  res.status(200).render('index', data);
});

app.get('/articles/:id', (req, res) => {

  const articleId = Number(req.params.id);
  console.log(articleId);

  if (articleId < 1 || articleId > articles.length) {
    console.log("NAN");
    res.status(404).render('index', '404');
  } else {
  const data = {title: 'PUG', message: articles[articleId - 1 ].title,
    content: articles[articleId - 1 ].text};
  res.status(200).render('index', data);
  }
});



app.listen(PORT, () => {
  console.log(`express server at port: ${PORT}`);
});