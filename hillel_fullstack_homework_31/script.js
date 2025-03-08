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
const weatherButton = document.getElementById("weather");
weatherButton.addEventListener("click", () => {
    cityName = document.getElementById("inputCity").value;
    // console.log("City:", cityName);
    if (cityName && /[A-Za-z]/.test(cityName)) {
        getWeather();
    } else {
        console.error("Невірний запит, таке місто не існує");
    }
});
// console.log("City:", cityName);


async function getWeather () {
    try {
        console.log("City:", cityName);

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
    document.getElementById("icon").src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;

    } catch (error) {
        throw new Error(error);
    } finally {
        console.log("At last - finally :))");
    }
}

// За бажанням:
// #2 Використовуючи API https://jsonplaceholder.typicode.com/ зробити пошук поста за ід.
// На сторінку вивести інпут та кнопку Пошук
// Ід поста має бути введений в інпут (валідація: ід від 1 до 100)
// Якщо знайдено пост, то вивести на сторінку нижче блок з постом і зробити кнопку для отримання коментарів до посту.
// По клику на кнопку коментарі має бути виведені нижче під постом коментарі до цього посту
// Якщо зробити Пошук нового поста, старий пост та коментарі видаляються зі сторінки
// Зробити завдання використовуючи проміси, перехопити помилки.