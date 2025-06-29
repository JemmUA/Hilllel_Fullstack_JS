import express from 'express';

const PORT = 3039;
const app = express();

//================ PUG ==============
// app.set('view engine', 'pug');
// app.get('/', (req, res) => {
//   const data = {title: 'Main page with PUG', message: "Hello, big world! ))", content: 'My content on PUG...'};
//   res.render('index', data);
// });

//================ EJS ==============
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
  const data = {title: 'Main page with EJS', message: "Hello,  great world! ))", content: 'My content on EJS...'};
  res.render('index', data);
});


app.listen(PORT, () => {
  console.log(`express server at port: ${PORT}`);
});