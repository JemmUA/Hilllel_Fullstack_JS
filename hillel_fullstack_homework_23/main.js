'use strict';
import {Human} from "./Human.js";
import {Apartment} from "./Apartment.js";
import {House} from "./House.js";


/*
#1

a) Створити клас Людина.
  Властивості:
    імʼя;
    стать.
  Методи:
    конструктор, який приймає два параметри: імʼя та стать.

b) Створити клас Квартира.
  Властивості:
    конструктор не потрібен;
    масив жителів, який при створенні пустий.
  Методи:
    додати жителя - метод повинен приймати екземпляр класу Людина, та додавати до масиву жителів.

c) Створити клас Будинок.

  Властивості:
    масив квартир, який при створенні пустий;
    максимальна кількість квартир.
  Методи:
    конструктор, який приймає один параметр: максимальну кількість квартир;
    додати квартиру - метод повинен приймати екземпляр класу Квартира, перевіряти, чи не буде кількість перевищувати максимальну кількість квартир, і якщо це так, додати квартиру, в іншому випадку виводить у консоль відповідне повідомлення.

d)Для демонстрації створити:
  декілька екземплярів класу Людина;
  декілька екземплярів класу Квартира;
  додати екземпляри класу Людина до екземплярів класу Квартира;
  екземпляр класу Будинок;
  додати екземпляри класу Квартира до екземплярів класу Будинок.
*/


const driver = new Human("John", "male");
const teacher = new Human("Hanna", "female");
const waiter = new Human("Elizabeth", "female");
const pilot = new Human("Bob", "male");
const doctor = new Human("Marry", "female");
const student = new Human("Hellen", "female");
const warrior = new Human("Taras", "male");

const bestApartment = new Apartment();
const cheapApartment = new Apartment();
const expensiveApartment = new Apartment();

const sweetHouse = new House(3);

bestApartment.addOwner(driver);
bestApartment.addOwner(3);
bestApartment.addOwner(3 < 2);
bestApartment.addOwner(teacher);
bestApartment.addOwner(waiter);
bestApartment.addOwner(pilot);
bestApartment.addOwner(doctor);
console.log(`Owners in the best apartment (${bestApartment.owners.length}):`,
  bestApartment.owners.map(d => d.name).join(", "));

cheapApartment.addOwner(student);
cheapApartment.addOwner(warrior);
cheapApartment.addOwner(doctor);
cheapApartment.addOwner(waiter);
cheapApartment.addOwner(driver);
console.log(`Owners in cheap apartment (${cheapApartment.owners.length}):`,
  cheapApartment.owners.map(d => d.name).join(", "));

expensiveApartment.addOwner(pilot);
console.log(`Owners in expensive apartment (${expensiveApartment.owners.length}):`,
  expensiveApartment.owners.map(d => d.name).join(", "));

sweetHouse.addApartment(bestApartment);
sweetHouse.addApartment(cheapApartment);
sweetHouse.addApartment(expensiveApartment);
sweetHouse.addApartment(expensiveApartment);

