/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/movies.js":
/*!***********************!*\
  !*** ./src/movies.js ***!
  \***********************/
/***/ (() => {

eval("console.log(\"Webpack\");\r\nconst API_KEY = '29f0bbd3';\r\nconst API_URL = 'https://www.omdbapi.com/';\r\n\r\nconst searchButtonElement = document.getElementById(\"searchButton\");\r\nconst inputMovieElement = document.getElementById(\"inputMovie\");\r\nconst searchMovieResultElement = document.getElementById(\"searching__movie__results\");\r\nconst errorMovieSearchElement = document.querySelector(\".searching__movie__error\");\r\nsearchButtonElement.addEventListener(\"click\", async () => {\r\n    console.log(\"Movie? I like to movie it, movie it!!!\", inputMovieElement.value);\r\n    searchMovieResultElement.innerHTML = \"\";\r\n    errorMovieSearchElement.innerText = \"Searching error... repeat late, please\";\r\n    const foundMovie = await searchMovie(inputMovieElement.value);\r\n    try {\r\n        searchMovieResultElement.innerHTML = foundMovie.map(movie => {\r\n            const posterUrl = movie.Poster?.startsWith(\"http\") ? movie.Poster : \"images/no-image.svg\";\r\n\r\n            const movieHtml = `\r\n                <div class=\"movie__result\">\r\n                    <img\r\n                        alt=\"${movie.Title}\"\r\n                        src=\"${posterUrl}\"\r\n                    >\r\n                    <div class=\"movie__title\">${movie.Title}</div>\r\n                    <div class=\"movie__year\">${movie.Year}</div>\r\n                </div>`\r\n                console.log(\"movieHtml: \", movieHtml);\r\n                return movieHtml;\r\n        }).join(\"\");\r\n        errorMovieSearchElement.innerHTML = \"\";\r\n\r\n    } catch (error) {\r\n        errorMovieSearchElement.innerHTML = `Facepalm: ${error.message}`;\r\n    }\r\n});\r\n\r\nasync function searchMovie(requestString) {\r\n    const searchLink = (`${API_URL}?apikey=${API_KEY}&s=${requestString}`);\r\n    const dataMovie = await fetch(searchLink)\r\n        .then(response => {\r\n            if (!response.ok) {\r\n                throw new Error(\"Відповідь на запит невдала: \", response);\r\n            } else {\r\n                // console.log(\"Response: \", response);\r\n                return response.json();\r\n            }\r\n        });\r\n    // console.log(\"DataMovie: \",dataMovie);\r\n    return dataMovie?.Search;\r\n}\r\n\r\n\n\n//# sourceURL=webpack://hw34_webpack/./src/movies.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/movies.js"]();
/******/ 	
/******/ })()
;