console.log('#8. JavaScript homework example file')

/*
 * #1
 *
 * Задача: Створення та додавання DOM-елемента до вказаного контейнера
 * Мета: Розробити функцію createDomElement, яка приймає назву тега, текстовий вміст та контейнер, до якого потрібно додати новий елемент.
 * Функція створює новий елемент з вказаним тегом та текстовим вмістом і додає цей елемент до заданого контейнера.
 *
 * Вимоги:
 * 1. Функція має приймати три параметри:
 *    - tagName - рядок, що вказує на назву тега нового елемента.
 *    - textContent - рядок, що вказує на текстовий вміст нового елемента.
 *    - container - DOM-елемент, до якого буде додано новий створений елемент.
 * 2. Функція має створити новий DOM-елемент з вказаним тегом і текстовим вмістом.
 * 3. Створений елемент має бути доданий до вказаного контейнера.
 * 4. Функція повертає посилання на створений елемент, що дозволяє подальшу взаємодію з ним.
 * 5. Функція має бути експортована для використання в інших модулях та тестування.
 */

function createDomElement(tagName, textContent, container) {
  // code here
  const element = document.createElement(tagName);
  element.innerText = textContent;
  container.appendChild(element);
  return element;
}

// Демонстрація використання функції
const container = document.body // В якості прикладу використовуємо body як контейнер
console.log(createDomElement('p', 'This paragraph has been added to the specified container.', container));

/*
 * #2
 *
 * Задача: Встановлення LocalStorage змінної з корисною інформацією і можливим таймаутом в секундах
 * Мета: Розробити функцію setLocalStorageInfo,
 * Перший параметр - імʼя змінної
 * Другий параметр - значення змінної
 * Третій параметр (опціональний)
 *
 * Вимоги до функції:
 *
 * 1. Функція приймає два обовʼязкові аргументи: key (назва інформаційного параметра) та value (значення параметра).
 * 2. Функція приймає третій опціональний параметр - таймаут в секундах. Якщо він переданий, видаляє змінну через цей час
 * 3. При встановленні змінної, функція виводить інформаційне повідомлення у консоль про успішне зберігання даних.
 * 4. Функція може обробляти масиви та обʼєкти в якості value
 */

function setLocalStorageInfo(key, value, timeout) {
  timeout = timeout * 1000; // переводимо мілісекунди в секунди
  if (key && value) {
    if (typeof value !== "string") {
      value = JSON.stringify(value);
    }
    localStorage.setItem(key, value);
    console.log(`Успішно збережено в Local Storage: ${key}=${value};`)
  } else {
    console.error("Дані неповні, запис в Local Storage не виконано.")
  }
  if (timeout) {
    window.setTimeout(function() {
      localStorage.removeItem(key);
      console.log(`Видалено з Local Storage: ${key}=${value};`);
      // alert(`Параметр ${key}=${value} було видалено з Local Storage.`);
    }, timeout);
  }
}

const userNames = ['Oleksii', 'Oleksandr', 'Anna', 'Dmytro'];

const person = {
  name: 'John Wick',
  email: 'john@example.com',
  password: 'password@example.com',
}

// Демонстрація використання функції
setLocalStorageInfo('language', 'en');
setLocalStorageInfo('userNames', userNames, 30);
setLocalStorageInfo('user', person);

/*
* #3
*
* Задача: Зчитування змінної з LocalStorage та виведення її в консоль
* Мета: Розробити функцію getLocalStorageInfo, яка повертає значення змінної, яка була встановлена setLocalStorageInfo
* Єдиний параметр - імʼя змінної
*
* Вимоги до функції:
  *
* 1. Функція приймає аргумент: key (назва інформаційного параметра)
* 2. Функція повертає значення, якщо воно є, та undefined, якщо немає такої
* 3. При встановленні cookie, функція виводить інформаційне повідомлення у консоль про успішне зберігання даних.
* 4. Функція може обробляти масиви та обʼєкти в якості value
*/

function getLocalStorageInfo(key) {
  // const value = localStorage.getItem(JSON.parse(key));
  const value = localStorage.getItem(key);
  if (value) {
    console.log("Зчитано:",value);
    // console.log(`Успішно зчитано з Local Storage: \'${key}=${value}\"`);
    return key;
  } else {
    console.log("undefined");
    return "undefined";
  }
}

getLocalStorageInfo('language'); // en
getLocalStorageInfo('userNames'); // ['Oleksii', 'Oleksandr', 'Anna', 'Dmytro']
getLocalStorageInfo('user'); // обʼєкт персони John Wick
getLocalStorageInfo('nonExistentVariable'); // undefined
// 

export { createDomElement, setLocalStorageInfo, getLocalStorageInfo }
