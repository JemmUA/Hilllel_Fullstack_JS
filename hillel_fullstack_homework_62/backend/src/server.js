import express from 'express';
import {articles, getArticleById, getAllArticles, error404} from "../models/articles.js";
import cookieParser from 'cookie-parser';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import jwt from "jsonwebtoken";

dotenv.config();

const PORT = 3039;
const app = express();
const GOHOME = process.env.GOHOME;
const SECRET_KEY = process.env.SECRET_KEY;
const users = [];

console.log(articles);

app.set('view engine', 'pug');
app.use(cookieParser());
app.use(express.urlencoded({ extended: true}));
app.use(express.static('public'));


// Cookies
app.get('/set-cookies', isAuthenticated, (req, res) => {
  res.cookie('superuser', 'cat', {maxAge: 3600000, httpOnly: true});
  // res.send('Cookies set');
  res.send(createHtmlPage('Cookies set',`
    `, `${GOHOME}`));
});

app.get('/get-cookies', isAuthenticated, (req, res) => {
  const cookies = req.cookies.superuser;
  // res.send(cookies);
  res.send(createHtmlPage('Get Cookies',`
    <h1>Cookies of superuser: ${cookies}</h1>
    `, `${GOHOME}`));
});

// GET

app.get('/', (req, res) => {
  res.send(createHtmlPage('Main page', `
    <h4><a href="/registration">Registration</a></h4>
    <h4><a href="/login">Login</a></h4>
    <h4><a href="/articles">Articles</a></h4>
    <h4><a href="/pages">Demo of static files</a></h4>
    <h4><a href="/secured">Secured page</a></h4>
    <h4><a href="/set-cookies">Set cookies</a></h4>
    <h4><a href="/get-cookies">Get cookies</a></h4>
    <h4><a href="/logout">Logout</a></h4>
`,  ``));
});

app.get('/registration', (req, res) => {
  res.send(createHtmlPage('Registration', `
    <form method="post" action="/registration">
      <input name="username" required placeholder="name"/>
      <input name="password" type="password" required placeholder="pass"/>
      <input name="repeatPassword" type="password" required placeholder="repeat pass"/>
      <button>Register</button>
    </form>
    `, `${GOHOME}`));
});

app.get('/login', (req,res) => {
  res.send(createHtmlPage('Login',`
    <form method="post" action="/login">
      <input name="username" required placeholder="name"/>
      <input name="password" type="password" required placeholder="pass"/>
      <button>Login</button>
    </form>
  `, `${GOHOME}`));
});

app.get('/secured', isAuthenticated, (req, res) => {
  res.send(createHtmlPage('Secured page', "Interesting content :)<br><img src =\"/catti_logo.svg\" title=\"cat\" alt =\"catti_logo\">", `${GOHOME}`))

});

app.get('/articles', isAuthenticated, (req, res) => {
    getAllArticles(req, res, articles);
});

app.get('/articles/:id', isAuthenticated, (req, res) => {
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

app.get('/logout', (req, res) => {
  res.clearCookie('token');

  console.log('logged out');
  res.send(createHtmlPage('Logged out', ``,`${GOHOME}`));
  // setTimeout(() => res.redirect('/login'), 1000);
});

// POST
app.post('/registration', async (req, res) => {
  const userName = req.body.username;
  const password = req.body.password;
  const repeatPassword = req.body.repeatPassword;

  console.log('User name: ', userName);
  console.log('Password: ', password);
  console.log('Repeat password: ', repeatPassword);

  if (!userName || !password) {
    return res.status(400).send(`<p>${GOHOME}</p>Username and Password are required for registration`);
  }

  if (users.find(user => user.userName === userName)) {
    return res.status(400).send(`<p>${GOHOME}</p>User already exists`);
  }

  const salt = await bcrypt.genSalt(5);
  console.log('Salt: ', salt);
  const hashPass = await bcrypt.hash(password, salt);

  if (password === repeatPassword) {
    users.push({userName, hashPass});
    console.log('Registered users:', users);
    res.send(`${GOHOME}<h4>Success!</h4> <h2>${userName}</h2> <p>Registered. Welcome :)</p>`);
  } else {
    res.status(400).send(`<p>${GOHOME}</p>Passwords don't match`);
  }

  });

app.post('/login', async (req, res) => {
  const userName = req.body.username;
  const password = req.body.password;
  console.log('password: ', password);


  users.find(async user => {
    if (user.userName === userName) {
    console.log('user found');
    console.log(user.userName, userName);

      if (await bcrypt.compare(password, user.hashPass)) {
        console.log('password is valid');

        const token = jwt.sign(
          {userName: user.userName},
          SECRET_KEY,
          {expiresIn: '3h'}
        );
        console.log('Token: ',token);

        res.cookie('token', token, {httpOnly: true});

        res.send(`<p>${GOHOME}</p>User <b>${userName}</b> logged in`);
      }else {
        return res.status(400).send(`<p>${GOHOME}</p>Something went wrong`);
      }

    } else {
      console.log('user not found');
      console.log(user.userName, userName)
      return res.send(`<p>${GOHOME}</p>User <b>${userName}</b> not found. Please, register`);
    }
  });

});


//

function isAuthenticated (req, res, next) {
  const token = req.cookies.token;
  console.log('token (secured page): ', token);

  if (!token) {
    return res.status(401).send(`<p>${GOHOME}</p>There is no token for authentication. Please, login.`)
  }

  try {
    const payload = jwt.verify(token, SECRET_KEY);
    const user = users.find(user => user.userName === payload.userName);
    if (!user) {
      return res.status(401).send(`<p>${GOHOME}</p>User is not found`);
    }
    req.user = user;
    next();
  } catch (error) {
    return res.status(401).send(`<p>${GOHOME}</p>Unauthorized - invalid or expired token`);
  }
}

function createHtmlPage (title, content, transition) {
  return `
    ${transition}
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