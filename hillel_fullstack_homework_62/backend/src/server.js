import express from 'express';
import {articles, getArticleById, getAllArticles, error404} from "../models/articles.js";
import cookieParser from 'cookie-parser';
// import bcrypt from 'bcrypt';

const PORT = 3039;
const app = express();

const users = [];

console.log(articles);

app.set('view engine', 'pug');

app.use(cookieParser());

app.use(express.urlencoded({ extended: true}));

app.use(express.static('public'));

// GET

app.get('/', (req, res) => {
  res.send(createHtmlPage('Main page', `
    <h4><a href="/registration">Registration</a></h4>
    <h4><a href="/login">Loginning</a></h4>
    <h4><a href="/articles">Articles</a></h4>
    <h4><a href="/pages">Demo of static files</a></h4>
    <h4><a href="/secured">Secured page</a></h4>
`));
});

app.get('/registration', (req, res) => {
  res.send(createHtmlPage('Registration', `
    <form method="post" action="/registration">
      <input name="username" required placeholder="name"/>
      <input name="password" type="password" required placeholder="pass"/>
      <button>Register</button>
    </form>
    `));
});

app.get('/secured', (req, res) => {
  res.send(createHtmlPage('Secured page', "Interesting content :)"))

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

// POST
app.post('/registration', async (req, res) => {
  console.log('username: ', username);
  console.log('password: ', password);

  if (!username || !password) {
    return res.status(400).send('Username and Password are required for registration');
  }

  if (users.find(user => user.username === username)) {
    return res.status(400).send('User already exists');
  }

  const salt = await bcrypt.genSalt(5);
  const hashPass = await bcrypt.hash(password, salt);

  users.push({username, hashPass});
  res.send('Success. User registered.');
});


//

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