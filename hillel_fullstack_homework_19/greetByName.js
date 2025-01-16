/*
 Ваше завдання - створити функцію greet в JavaScript. Ця функція повинна приймати два аргументи:

 msg: Рядок, який представляє привітання, наприклад “Hi”, “Hey” або “Hello”.
 name: Рядок, який представляє ім’я особи, наприклад “John”, “Bob” або “Mary”.

 Функція greet повинна повертати новий рядок, який поєднує msg та name з комою та пробілом між ними. Наприклад, якщо msg це “Hi” і name це “John”, то функція повинна повернути рядок “Hi, John”.

 Ось приклад використання цієї функції:
*/
 console.log(greetByName('Вітаннячка', 'Олексій')); // Hi, John
console.log(greetByName('Greetings', 'Hillel')); // Hello, Mary
console.log(greetByName('Hi', 'John')); // Hi, John
 console.log(greetByName('Hey', 'Bob')); // Hey, Bob
 console.log(greetByName('Hello', 'Mary')); // Hello, Mary
 console.log(greetByName('Hello', 'world')); // Hello, Mary


function greetByName(msg, name) {
  return `${msg}, ${name}`;
  // return msg + ", " + name; // variant
}
