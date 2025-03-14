    "use strict";
// #1 За допомогою ajax-запиту вивести погоду
//
// http://api.openweathermap.org/data/2.5/weather?q=LVIV&units=metric&APPID=5d066958a60d315387d9492393935c19
// q=XXX - місто, для якого показати погоду

// Вводимо в інпут назву міста, натискаємо кнопку Погода
// Якщо таке місто не існує (404), виводимо напис, що таке місце не знайдено
// Якщо місто існує, виводимо наступну інформацію:
// temp – температура
// pressure - тиск
// description – опис
// humidity – вологість
// speed – швидкість вітру
// deg - напрям у градусах
// icon - значок, де 10d код іконки (виводимо картинку з таким урлом, як нам повернувся)
// http://openweathermap.org/img/w/10d.png

let cityName = "";
let city = document.getElementById("city");
let inputCityError = document.getElementById("city__error");
const weatherButton = document.getElementById("weather");
const searchImage = document.getElementById("search__image");
let weatherIcon =     document.getElementById("weather__icon");
weatherButton.addEventListener("click", () => {
cityName = document.getElementById("inputCity").value;
    if (cityName && /[A-Z]/gi.test(cityName)) {
        weatherLabelsShow(true);
        inputCityErrorShow(false);
        searchImageShow(true);
        weatherIconShow(true);
        // Due to too fast performing weather request I have used timeout (3 seconds) just for demo, to show 3 seconds GIF picture of "searching"
        // setTimeout( getWeather, 3000);
        getWeather();
    } else {
        weatherLabelsShow(false);
        searchImageShow(false);
        weatherIconShow(false);
        inputCityErrorShow(true);
        console.error("Невірний запит, таке місто не існує");
    }
});

async function getWeather () {
    try {
        const weatherSource = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&APPID=5d066958a60d315387d9492393935c19`;
        const data = await fetch(weatherSource).then(response => {
            if (!response.ok) {
                weatherLabelsShow(false);
                weatherIconShow(false);
                inputCityErrorShow(true);
                throw new Error ("Відповідь на запит - невдала");
            } else {
                weatherLabelsShow(true);
                weatherIconShow(true);
                inputCityErrorShow(false);
            return response.json();
            }
        });

const city = document.getElementById("city").innerHTML = "Місто: " + data.name;
const temperature = document.getElementById("temperature").innerHTML = "Температура: " + data.main.temp + " °C";
const pressure = document.getElementById("pressure").innerHTML = "Тиск: " + data.main.pressure + " Па";
const description = document.getElementById("description").innerHTML = "Опис: " + data.weather[0].description;
const humidity = document.getElementById("humidity").innerHTML = "Вологість: " + data.main.humidity + " кг/м3";
const speed = document.getElementById("speed").innerHTML = "Швидкість вітру: " + data.wind.speed + " м/с";
const deg = document.getElementById("deg").innerHTML = "Напрям вітру: " + data.wind.deg + " град.";
document.getElementById("weather__icon").src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
weatherIcon = document.getElementById("weather__icon");

    } catch (error) {
        weatherLabelsShow(false);
        weatherIconShow(false);
        inputCityErrorShow(true);
        throw new Error(error);
    } finally {
        console.log("At last - finally :))");
        searchImageShow(false);
    }
}

    function weatherLabelsShow(show) {
        if (show) {
            city.classList.add("visible");
            city.classList.remove("hidden");
            temperature.classList.add("visible");
            temperature.classList.remove("hidden");
            pressure.classList.add("visible");
            pressure.classList.remove("hidden");
            description.classList.add("visible");
            description.classList.remove("hidden");
            humidity.classList.add("visible");
            humidity.classList.remove("hidden");
            speed.classList.add("visible");
            speed.classList.remove("hidden");
            deg.classList.add("visible");
            deg.classList.remove("hidden");
        } else {
            city.classList.add("hidden");
            city.classList.remove("visible");
            temperature.classList.add("hidden");
            temperature.classList.remove("visible");
            pressure.classList.add("hidden");
            pressure.classList.remove("visible");
            description.classList.add("hidden");
            description.classList.remove("visible");
            humidity.classList.add("hidden");
            humidity.classList.remove("visible");
            speed.classList.add("hidden");
            speed.classList.remove("visible");
            deg.classList.add("hidden");
            deg.classList.remove("visible");
        }
    }

    function inputCityErrorShow(show) {
        if (show) {
            inputCityError.classList.add("visible");
            inputCityError.classList.remove("hidden");
        } else {
            inputCityError.classList.add("hidden");
            inputCityError.classList.remove("visible");
        }
    }

    function searchImageShow(show) {
        if (show) {
            searchImage.classList.add("visible");
            searchImage.classList.remove("hidden");
        } else {
            searchImage.classList.add("hidden");
            searchImage.classList.remove("visible");
        }
    }

    function weatherIconShow(show) {
        if (show) {
            weatherIcon.classList.add("visible");
            weatherIcon.classList.remove("hidden");
        } else {
            weatherIcon.classList.add("hidden");
            weatherIcon.classList.remove("visible");
        }
    }



// За бажанням:
// #2 Використовуючи API https://jsonplaceholder.typicode.com/ зробити пошук поста за ід.
// На сторінку вивести інпут та кнопку Пошук
// Ід поста має бути введений в інпут (валідація: ід від 1 до 100)
// Якщо знайдено пост, то ви вести на сторінку нижче блок з постом і зробити кнопку для отримання коментарів до посту.
// По клику на кнопку коментарі має бути виведені нижче під постом коментарі до цього посту
// Якщо зробити Пошук нового поста, старий пост та коментарі видаляються зі сторінки
// Зробити завдання використовуючи проміси, перехопити помилки.

    let postId;
    const inputPostError = document.getElementById("postError");
    const postIdLabel = document.getElementById("postID");
    const searchButton = document.getElementById("findPostButton");
    const postLabel = document.getElementById("postBody");
    const postTitleLabel = document.getElementById("postTitle");
    const commentsBodyLabel = document.getElementById("comments");

    searchButton.addEventListener("click", () => {
        postId = Number(document.getElementById("inputPostId").value);
        console.log("PostID:", postId);
        console.log("Type of PostID:", typeof postId);
        if (typeof postId === "number" && postId >= 1 && postId <= 100) {
            console.log("Введений ID корректний:", postId);
            inputPostErrorShow(false);
            searchForCommentsButtonShow(true);
            getPost();
        } else {
            inputPostErrorShow(true);
            postIdShow(false);
            searchForCommentsButtonShow(false);
            postTitleShow(false);
            postShow(false);
            commentsShow(false)
            console.error("Невірний запит, введений ID не існує");
        }
    });
    const searchForCommentsButton = document.getElementById("searchForCommentsButton");

    async function getPost () {

        try {
            // const postSource = `https://jsonplaceholder.typicode.com/`;
            const postSource = `https://jsonplaceholder.typicode.com/posts/${postId}`;
            const commentsSource = `https://jsonplaceholder.typicode.com/comments/${postId}`;

            const comments = await fetch(commentsSource)
                .then(response => {
                    if (!response.ok) {
                        document.getElementById("postByID").innerHTML = `Пост № ${postId}`;
                        document.getElementById("postTitle").innerHTML = `Заголовок: ` + data.title;
                        document.getElementById("postBody").innerHTML = `Пост: ` + data.body;
                        document.getElementById("searchForComments");
                        // document.getElementById("comments").innerHTML = `Коментарі: ` + comments.body;

                        inputPostErrorShow(true);
                        postIdShow(false);
                        postShow(false);
                        postTitleShow(false);
                        searchForCommentsButtonShow(false);
                        throw new Error ("Відповідь на запит - невдала");
                    } else {
                        inputPostErrorShow(false);
                        postShow(true);
                        postTitleShow(true);
                        searchForCommentsButtonShow(true);

                        console.log("Response:", response);
                        return response.json();
                    }
                    })
                .then(jsonData => {
                        console.log("JSON Data:", jsonData);
                        return jsonData;
                    });

            const data = await fetch(postSource)
                .then(response => {
                    if (!response.ok) {
                        inputPostErrorShow(true);
                        throw new Error ("Відповідь на запит - невдала");
                    } else {
                        inputPostErrorShow(false);
                        console.log("Response:", response);
                        return response.json();
                    }})
                .then(jsonData => {
                console.log("JSON Data:", jsonData);
                return jsonData;
            });

            postIdShow(true);
            postTitleShow(true);
            postShow(true);
            commentsShow(false);

            const postById = document.getElementById("postID").innerHTML = `Пост № ${postId}`;
            const postTitle = document.getElementById("postTitle").innerHTML = `Заголовок: ` + data.title;
            const postBody = document.getElementById("postBody").innerHTML = `Пост: ` + data.body;

            document.getElementById("searchForCommentsButton")
                .addEventListener("click", () => {
                    let commentsBody = commentsBodyLabel.innerHTML = `Коментарі: ` + comments.body;
                    commentsShow(true);
            });

        } catch (error) {
            console.error("Та шо ж таке? Caught error:", error)
            throw new Error(error);
        } finally {
            console.log("At last - finally again :))");
        }
    }

    function inputPostErrorShow (show) {
        if (show) {
            inputPostError.classList.add("visible");
            inputPostError.classList.remove("hidden");
        } else {
            inputPostError.classList.add("hidden");
            inputPostError.classList.remove("visible");
        }
    }

    function searchForCommentsButtonShow (show) {
        if (show) {
            searchForCommentsButton.classList.add("visible");
            searchForCommentsButton.classList.remove("hidden");
        } else {
            searchForCommentsButton.classList.add("hidden");
            searchForCommentsButton.classList.remove("visible");
        }
    }

    function postShow (show) {
        if (show) {
            postLabel.classList.add("visible");
            postLabel.classList.remove("hidden");
        } else {
            postLabel.classList.add("hidden");
            postLabel.classList.remove("visible");
        }
    }

    function postTitleShow (show) {
        if (show) {
            postTitleLabel.classList.add("visible");
            postTitleLabel.classList.remove("hidden");
        } else {
            postTitleLabel.classList.add("hidden");
            postTitleLabel.classList.remove("visible");
        }
    }

    function postIdShow (show) {
        if (show) {
            postIdLabel.classList.add("visible");
            postIdLabel.classList.remove("hidden");
        } else {
            postIdLabel.classList.add("hidden");
            postIdLabel.classList.remove("visible");
        }
    }

    function commentsShow (show) {
        if (show) {
            commentsBodyLabel.classList.add("visible");
            commentsBodyLabel.classList.remove("hidden");
        } else {
            commentsBodyLabel.classList.add("hidden");
            commentsBodyLabel.classList.remove("visible");
        }
    }

