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
let inputCityError = document.getElementById("city__error");
const weatherButton = document.getElementById("weather");
const searchImage = document.getElementById("search__image");
let weatherIcon =     document.getElementById("weather__icon");
weatherButton.addEventListener("click", () => {
    cityName = document.getElementById("inputCity").value;
    // console.log("City:", cityName);
    if (cityName && /[A-Z]/gi.test(cityName)) {
        inputCityError.classList.add("hidden");
        inputCityError.classList.remove("visible");
        searchImage.classList.remove("hidden");
        searchImage.classList.add("visible");
        weatherIcon.classList.remove("visible");
        weatherIcon.classList.add("hidden");
        // As the request of weather performs very fast I have used timeout (3 seconds) just for demo
        setTimeout( getWeather, 3000);
        // getWeather();
    } else {
        searchImage.classList.add("hidden");
        searchImage.classList.remove("visible");
        inputCityError.classList.add("visible");
        inputCityError.classList.remove("hidden");

        console.error("Невірний запит, таке місто не існує");
    }
});
// console.log("City:", cityName);


async function getWeather () {
    try {
        const weatherSource = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&APPID=5d066958a60d315387d9492393935c19`;
        const data = await fetch(weatherSource).then(response => {
            if (!response.ok) {
                throw new Error ("Відповідь на запит - невдала");
            } else {
            // console.log(response);
            return response.json();
            }
        });
    // console.log("Data:", data);
    document.getElementById("city").innerHTML = "Місто: " + data.name;
    document.getElementById("temperature").innerHTML = "Температура: " + data.main.temp + " °C";
    document.getElementById("pressure").innerHTML = "Тиск: " + data.main.pressure + " Па";
    document.getElementById("description").innerHTML = "Опис: " + data.weather[0].description;
    document.getElementById("humidity").innerHTML = "Вологість: " + data.main.humidity + " кг/м3";
    document.getElementById("speed").innerHTML = "Швидкість вітру: " + data.wind.speed + " м/с";
    document.getElementById("deg").innerHTML = "Напрям вітру: " + data.wind.deg + " град.";
    document.getElementById("weather__icon").src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    weatherIcon = document.getElementById("weather__icon");

    } catch (error) {
        inputCityError.classList.toggle("hidden");
        inputCityError.classList.toggle("visible");
        throw new Error(error);
    } finally {
        console.log("At last - finally :))");
        // console.log(weatherIcon);
        searchImage.classList.add("hidden");
        searchImage.classList.remove("visible");
        weatherIcon.classList.add("visible");
        weatherIcon.classList.remove("hidden");
        // weatherIcon.classList.toggle("hidden");
        // weatherIcon.classList.toggle("visible");
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
    let inputPostError = document.getElementById("post__error");
    const searchButton = document.getElementById("findPostButton");
    searchButton.addEventListener("click", () => {
        postId = Number(document.getElementById("inputPostId").value);
        console.log("PostID:", postId);
        console.log("Type of PostID:", typeof postId);
        if (typeof postId === "number" && postId >= 1 && postId <= 100) {
            console.log("Введений ID корректний:", postId);
            inputPostError.classList.add("hidden");
            inputPostError.classList.remove("visible");
            getPost();
        } else {
            inputPostError.classList.add("visible");
            inputPostError.classList.remove("hidden");
            console.error("Невірний запит, введений ID не існує");
        }
    });

    async function getPost () {

        try {
            // const postSource = `https://jsonplaceholder.typicode.com/`;
            const postSource = `https://jsonplaceholder.typicode.com/posts/${postId}`;
            const commentsSource = `https://jsonplaceholder.typicode.com/comments/${postId}`;

            const comments = await fetch(commentsSource)
                .then(response => {
                    if (!response.ok) {

                        // document.getElementById("postByID").innerHTML = `Пост № ${postId}`;
                        // document.getElementById("postTitle").innerHTML = `Заголовок: ` + data.title;
                        // document.getElementById("postBody").innerHTML = `Пост: ` + data.body;
                        // document.getElementById("comments").innerHTML = `Коментарі: ` + comments.body;


                        inputPostError.classList.add("visible");
                        inputPostError.classList.remove("hidden");
                        throw new Error ("Відповідь на запит - невдала");
                    } else {
                        inputPostError.classList.add("hidden");
                        inputPostError.classList.remove("visible");
                        console.log("Response:", response);
                        return response.json();
                    }
                    })
                .then(jsonData => {
                        console.log("JSON Data:", jsonData);
                        return jsonData;
                    });
                console.log("Коментарі:", comments);

            const data = await fetch(postSource)
                .then(response => {
                    if (!response.ok) {
                        inputPostError.classList.add("visible");
                        inputPostError.classList.remove("hidden");
                        throw new Error ("Відповідь на запит - невдала");
                    } else {
                        inputPostError.classList.add("hidden");
                        inputPostError.classList.remove("visible");
                        console.log("Response:", response);
                        return response.json();
                    }})
                .then(jsonData => {
                console.log("JSON Data:", jsonData);
                return jsonData;
            });


            const postById = document.getElementById("postByID").innerHTML = `Пост № ${postId}`;
            const postTitle = document.getElementById("postTitle").innerHTML = `Заголовок: ` + data.title;
            const postBody = document.getElementById("postBody").innerHTML = `Пост: ` + data.body;
            const commentsBody = document.getElementById("comments").innerHTML = `Коментарі: ` + comments.body;





            console.log("Data:", data);
            document.getElementById("postByID").innerHTML = `Пост № ${postId}`;
            document.getElementById("postTitle").innerHTML = `Заголовок: ` + data.title;
            document.getElementById("postBody").innerHTML = `Пост: ` + data.body;
            document.getElementById("comments").innerHTML = `Коментарі: ` + comments.body;

            postById.document.classList.toggle("hidden");
            postById.document.classList.toggle("visible");
            postTitle.document.classList.toggle("hidden");
            postTitle.document.classList.toggle("visible");
            postBody.document.classList.toggle("hidden");
            postBody.document.classList.toggle("visible");
            commentsBody.document.classList.toggle("hidden");
            commentsBody.document.classList.toggle("visible");
y
        } catch (error) {
            console.error("Та шо ж таке? Caught error:", error)
            throw new Error(error);
        } finally {
            console.log("At last - finally again :))");
        }
    }

