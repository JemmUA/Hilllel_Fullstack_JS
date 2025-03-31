"use strict";
console.log('#19. TypeScript homework example file');
/*
 * #1
 *
 * Задача: Розробити функцію `sumArray`, яка приймає масив чисел і повертає їх суму.
 *
 * Мета: Створення надійної функції, що здатна обробляти масиви чисел різної довжини, включаючи порожні масиви, і повертати точну суму їх елементів.
 *
 * Вимоги до реалізації:
 * 1 Функція повинна приймати один аргумент: `numbers` - масив чисел (`number[]`).
 * 2. Функція повинна повертати суму елементів масиву як число (`number`).
 * 3. Якщо масив порожній, функція повинна повертати `0`.
 * 4. Функція має використовувати метод `reduce` для обчислення суми елементів масиву.
 *
 */
function sumArray(numbers) {
    // code here
    if (numbers.length === 0) {
        return 0;
    }
    else {
        return numbers
            .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    }
}
// Вивід до консолі для демонстрації
console.log(sumArray([1, 2, 3, 4])); // Повинно вивести 10
console.log(sumArray([])); // Повинно вивести 0
function createUser(name, age, isActive = true) {
    const user = {
        name: name,
        age: age,
        isActive: isActive,
    };
    return user;
}
const newUser = createUser('Анна', 25, true);
console.log(newUser);
/*
 * #3
 *
 * Задача: Розробити функцію getOrderStatus, яка приймає статус замовлення як параметр і повертає рядок з описом статусу.
 *
 * Мета: Створення функції, здатної ідентифікувати статус замовлення і надавати користувачеві зрозуміле пояснення щодо поточного стану замовлення.
 *
 * Вимоги до реалізації:
 * 1. У коді має бути присутній enum OrderStatus з необхідними статусами.
 * 2. enum OrderStatus повинен мати статуси: 'Pending', 'Shipped', 'Delivered', 'Cancelled'.
 * 3. Функція має використовувати enum OrderStatus для визначення можливих статусів замовлення.
 * 4. Функція має приймати один параметр типу OrderStatus і повертати рядок з описом статусу.
 * 5. Функція повинна правильно обробити кожен статус замовлення, повертаючи відповідне повідомлення:
 * -  'Pending' -> 'Замовлення очікує на обробку',
 * -  'Shipped' -> 'Замовлення було відправлено',
 * -  'Delivered' -> 'Замовлення доставлено',
 * -  'Cancelled' -> 'Замовлення скасовано'
 * -  прокинути помилку з текстом 'Невідомий статус замовлення' в будь-якому іншому випадку.
 * 6. Параметри функції та її тип повернення мають бути явно типізовані.
 *
 */
var OrderStatus;
(function (OrderStatus) {
    OrderStatus["Pending"] = "\u0417\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u043E\u0447\u0456\u043A\u0443\u0454 \u043D\u0430 \u043E\u0431\u0440\u043E\u0431\u043A\u0443";
    OrderStatus["Shipped"] = "\u0417\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u0431\u0443\u043B\u043E \u0432\u0456\u0434\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043E";
    OrderStatus["Delivered"] = "\u0417\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u0434\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u043E";
    OrderStatus["Cancelled"] = "\u0417\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u0441\u043A\u0430\u0441\u043E\u0432\u0430\u043D\u043E";
})(OrderStatus || (OrderStatus = {}));
function getOrderStatus(orderStatus) {
    // code here
    return orderStatus;
}
// Приклад виклику функції
console.log(getOrderStatus(OrderStatus.Pending));
console.log(getOrderStatus(OrderStatus.Shipped));
console.log(getOrderStatus(OrderStatus.Delivered));
console.log(getOrderStatus(OrderStatus.Cancelled));
// export { sumArray, createUser, OrderStatus, getOrderStatus }
console.log("Ave webpack! :)))");
