'use strict';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const API_KEY = '29f0bbd3';
const API_URL = 'https://www.omdbapi.com/';
const searchButtonElement = document.getElementById("searchButton");
const inputMovieElement = document.getElementById("inputMovie");
const searchMovieResultElement = document.getElementById("searching__movie__results");
const errorMovieSearchElement = document.querySelector(".searching__movie__error");
searchButtonElement.addEventListener("click", () => __awaiter(void 0, void 0, void 0, function* () {
    // console.log("Movie? I like to movie it, movie it!!!", inputMovieElement.value);
    searchMovieResultElement.innerHTML = "";
    errorMovieSearchElement.innerText = "Searching error... repeat late, please";
    const foundMovie = yield searchMovie(inputMovieElement.value);
    // console.log(foundMovie);
    try {
        searchMovieResultElement.innerHTML = foundMovie.map((movie) => {
            var _a;
            //     console.log("Movie:", movie);
            const posterUrl = ((_a = movie.Poster) === null || _a === void 0 ? void 0 : _a.startsWith("http")) ? movie.Poster : "images/no-image.svg";
            const movieHtml = `
                <div class="movie__result">
                    <img
                        alt="${movie.Title}"
                        src="${posterUrl}"
                    >
                    <div class="movie__title">${movie.Title}</div>
                    <div class="movie__year">${movie.Year}</div>
                </div>`;
            // console.log("movieHtml: ", movieHtml);
            return movieHtml;
        }).join("");
        errorMovieSearchElement.innerHTML = "";
    }
    catch (caughtError) {
        const error = caughtError;
        errorMovieSearchElement.innerHTML = `Facepalm: ${error.message}`;
    }
}));
function searchMovie(requestString) {
    return __awaiter(this, void 0, void 0, function* () {
        const searchLink = (`${API_URL}?apikey=${API_KEY}&s=${requestString}`);
        const dataMovie = yield fetch(searchLink)
            .then(response => {
            if (!response.ok) {
                throw new Error("Відповідь на запит невдала");
            }
            else {
                // console.log("Response: ", response);
                return response.json();
            }
        });
        // console.log("DataMovie: ",dataMovie);
        // console.log("DataMovie search: ",dataMovie.Search);
        return dataMovie === null || dataMovie === void 0 ? void 0 : dataMovie.Search;
    });
}
