import http from 'node:http';
import { hwPageHtml } from './hw_page.js'

const PORT__SERVER_ALFA = 3003;
const serverAlfa = http.createServer((request, response) => {
  // console.log("Server started");
  console.log("Шо?");
  console.log("Ну? Я слухаю :))) !!!");
  response.statusCode = 200;
  // response.setHeader("Content-Type", "text/plain; charset=utf-8");
  response.setHeader("Content-Type", "text/html; charset=utf-8");

  response.write(hwPageHtml)

  response.end("<p>I'm the SERVER! ... Alfa ...,   ask... ;))</p>");

});

serverAlfa.listen(PORT__SERVER_ALFA, () => console.log(`Server-ALFA started on port: ${PORT__SERVER_ALFA}`));