import express from 'express';
import {articles, getArticleById, getAllArticles, error404} from "../models/articles.js";
import cookieParser from 'cookie-parser';

const PORT = 3039;
const app = express();

console.log(articles);

app.set('view engine', 'pug');

app.use(cookieParser());

app.use(express.static('public'));

app.get('/', (req, res) => {
  // res.send('<h1>Main Page</h1> <hr> Kuku');
  // res.send(createHtmlPage(`lll`,`aaa`));
  // res.send(createHtmlPage('Main page', `hhhh`));
  res.send(createHtmlPage('Main page', `
    <h4><a href="/registration">Registration</a></h4>
    <h4><a href="/login">Loginning</a></h4>
    <h4><a href="/articles">Articles</a></h4>
    <h4><a href="/pages">Demo of static files</a></h4>
    <h4><a href="/secured">Secured page</a></h4>
`));
});

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

function checkAuthorisation(req, res, next) {
  console.log('Cookies:', req.cookies.token);
}

function createHtmlPage (title, content) {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <title>${title}</title>
      </head>
      <body>
        <h1>${title}</h1>  
        ${content}
      </body>
    </html>
    `;
}

app.listen(PORT, () => {
  console.log(`express server at port: ${PORT}`);
});