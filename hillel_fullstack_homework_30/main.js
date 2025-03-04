console.log('#11. JavaScript homework example file')

/*
 * #1
 *
 * Написати функцію, яка приймає рядок як вхідний параметр і перевіряє, чи є цей рядок валідною електронною адресою за допомогою регулярного виразу.
 * Функція повертає true, якщо електронна адреса валідна, і false в іншому випадку.
 *
 */

function isValidEmail(email) {
  // code here
    const regExEmail = /^[a-z0-9]{2,}@[a-z]{2,}\.[a-z]{2,5}$/;
    return regExEmail.test(email);
}

console.log(isValidEmail('example@example.com')) // Повинно вивести: true
console.log(isValidEmail('invalid-email'))       // Повинно вивести: false

/*
 * #2
 *
 * Написати функцію, яка приймає рядок як вхідний параметр і перевіряє, чи є цей рядок валідним URL веб-сайту за допомогою регулярного виразу.
 * Функція повертає true, якщо URL валідний, і false в іншому випадку.
 *
 */

/*

*/

function isValidUrl(url) {
  // code here
    const regExUrl = /^http|https:\/\/w{3}\.[a-z0-9]{2,}\.[a-z]{2,8}$/;
    return regExUrl.test(url);
}

console.log(isValidUrl('https://www.example.com')) // Повинно вивести: true
console.log(isValidUrl('invalid-url'))             // Повинно вивести: false

// Експорт функції для використання та тестування
export { isValidEmail, isValidUrl }
