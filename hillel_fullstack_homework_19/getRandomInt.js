"use strict";
/*
 Створіть функцію `getRandomInt`, яка приймає два цілих числа: `min` та `max`. Ця функція повинна генерувати випадкове
 ціле число в діапазоні від `min` до `max` (включно).

 Використовуйте `Math.random()` для генерації випадкового числа від 0 до 1, а потім масштабуйте та зсувайте це число,
 щоб воно відповідало вашому діапазону. Використовуйте `Math.floor()` для округлення результату вниз до найближчого
 цілого числа.

 Після створення функції, використайте її для генерації випадкових чисел в різних діапазонах.
 Наприклад, виведіть випадкове число від 1 до 10, від 40 до 50, та від 1 до 100.
 Кожне викликане число повинно бути виведено в консоль.

 Ось приклад використання цієї функції:

 console.log(getRandomInt(1, 10)); // виводить випадкове число від 1 до 10
 console.log(getRandomInt(40, 50)); // виводить випадкове число від 40 до 50
console.log(getRandomInt(40, 50)); // виводить випадкове число від 1 до 100

 Зверніть увагу, що кожен виклик `getRandomInt` може повертати різні числа, оскільки вони випадкові. Завдання полягає в написанні цієї функції та її використанні для генерації випадкових чисел.
*/

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

/*
 Використовуйте `Math.floor`, а не `Math.round` для забезпечення рівномірного розподілення випадкових чисел.

 Якщо ви використовуєте `Math.round`, крайні значення (`min` та `max`) матимуть лише половину ймовірності з'явлення,
 порівняно з іншими числами. Це відбувається тому, що `Math.random()` ніколи не повертає 1,
 і тому максимальне значення з'являється лише тоді, коли `Math.random()` повертає значення, яке, будучи округленим,
 дорівнює `max`. Аналогічно, `min` з'являється лише тоді, коли `Math.random()` повертає 0.

 Тому використовуйте `Math.floor` для забезпечення рівномірного розподілення. Це гарантує, що кожне число в діапазоні має однакову ймовірність з'явлення.
*/

console.log(getRandomInt(1, 10));
console.log(getRandomInt(40, 50));
console.log(getRandomInt(1, 100));
console.log(getRandomInt(1, 2));
