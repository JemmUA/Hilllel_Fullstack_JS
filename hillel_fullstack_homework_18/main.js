console.log('Домашнє завдання №18. JavaScript ')

/*
 * #1
 *
 * Створіть змінні зі значеннями.
 */

// ім'я змінної: myNum, значення: 10
const myNum = 10;
// ім'я змінної: myStr, значення: 'some string'
const myStr = "some string";
// ім'я змінної: myBool, значення: true
const myBool = true;
// ім'я змінної: myArr, значення: 1, 2, 3, 4, 5
const myArr = [1, 2, 3, 4, 5];
// ім'я змінної myObj, значення: first: 'First Name', last: 'Last Name'
const myObj = {
    first: "First Name",
    last: "Last Name"
}

/*
 * #2
 *
 * Відформатуйте ціле число, яке зберігається в змінній myNum, щоб отримати результат з 2 знаками після коми.
 * Результат збережіть у змінній decimal2.
 */
const decimal2 = myNum.toFixed(2);
console.log("decimal2 =", decimal2);

/*
 * #3
 *
 * Створіть змінну i, для якої виконайте префіксний та постфіксний інкремент та декремент.
 * Поекспериментуйте з результатами, виводячи їх у консоль.
 */

// Олексію, будь-ласка, просто не звертайте уваги на інкременти. Їх застосування буде залежати від задач та визначення підходів.
let i = 0;
i = (++i + i++) * i;
console.log("(++i + i++) * i = ", i);

/*
 * #4
 *
 * Створіть нову змінну myTest та присвойте їй значення 20.
 * Виконайте присвоєння з операцією, використовуючи оператори: +=, –=, *=, /=, %=.
 * Результати присвоюються в myTest, потім виводяться в консоль.
 * У розрахунках можна використовувати раніше оголошену змінну myNum та/або числа.
 */
let myTest = 0;
myTest += 3;
myTest -= 1;
myTest *= 5;
myTest /= 2;
myTest %= 2;
console.log("myTest = ", myTest);

/*
 * #5
 *
 * Використовуючи властивості та методи об'єкта Math, присвойте змінним та відобразіть у консолі.
 */
// константа Pi → myPi
const myPi = Math.PI;
console.log("myPi = ", myPi);
// округлене значення числа 89.279 → myRound
const myRound = Math.round(89.279);
console.log("myRound = ", myRound);
// випадкове число між 0..10 → myRandom
const myRandom = Math.floor(Math.random() * 11);
console.log("myRandom = ", myRandom);
// 3 у 5 степені → myPow
const myPow = Math.pow(3, 5);
console.log("myPow = ", myPow);

/*
 * #6
 *
 * Створіть об'єкт з ім'ям strObj.
 * Присвойте ключу str рядок тексту "Мама мыла раму, рама мыла маму", ключу length встановіть довжину цього рядка.
 */
const strObj = {
    str: "Мама мыла раму, рама мыла маму",
}
strObj.length = strObj.str.length;
console.log("strObj = ", strObj);

/*
 * #7
 *
 * Перевірте наявність тексту 'рама' у полі str об'єкта strObj (див.п.6), результат збережіть у змінній isRamaPos та виведіть її у консоль.
 * Результатом для isRamaPos має бути індекс входження.
 * Результатом для isRama має бути буль true.
 */
const isRamaPos = strObj.str.indexOf("рама");
console.log("isRamaPos = ", isRamaPos);
const isRama = strObj.str.includes("рама");
console.log("isRama = ", isRama);

/*
 * #8
 *
 * Виконайте перейменування підрядка у рядку.
 * Як вихідний рядок використовуйте значення поля str об'єкта strObj (див.п.6), результат збережіть у змінній strReplace та відобразіть у консолі.
 * Вихідний рядок: 'Мама мыла раму, рама мыла маму'
 *      Результат: 'Мама моет раму, Рама держит маму'
 */
const strReplace = strObj.str.replace("Мама мыла раму, рама мыла маму", "Мама моет раму, Рама держит маму");
console.log("strReplace = ", strReplace);

/*
 * #9
 *
 * Преобразуйте текст 'some STRING' у верхній, потім у нижній регістри, результат відобразіть у консолі.
 */
let someStr = 'some STRING';
let upperStr = someStr.toUpperCase();
console.log("upperStr = ", upperStr);
let lowerStr = someStr.toLowerCase();
console.log("lowerStr = ", lowerStr);
