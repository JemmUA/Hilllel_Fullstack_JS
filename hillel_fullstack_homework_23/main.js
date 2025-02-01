'use strict';

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

d) В якості демонстраціїї створити:
  декілька екземплярів класу Людина;
  декілька екземплярів класу Квартира;
  додадити екземпляри класу Людина до екземплярів класу Квартира;
  екземпляр класу Будинок;
  додадити екземпляри класу Квартира до екземплярів класу Будинок.
*/

class Human {
  constructor(name, gender) {
    this.name = name;
    this.gender = gender;
  }
}

class Apartment {
  dwellers = [];

  addDweller(dweller) {
    if (dweller instanceof Human) {
      this.dwellers.push(dweller);
      console.log(`Good job! ${dweller.name} has settled into the apartment.`)
    } else {
      console.log(`Incorrect type! ${dweller} is ${typeof dweller}. The Human is expected.`)
    }
  }

  get dwellers() {
    return this.dwellers;
  }
}

class House {
  apartments = [];

  constructor(apartmentMaxQuantity) {
    this.apartmentMaxQuantity = apartmentMaxQuantity;
  }

  addApartment(apartment) {
    if (apartment instanceof Apartment) {
      if (this.apartments.length < this.apartmentMaxQuantity) {
        this.apartments.push(apartment);
        console.log(`Apartment is added to house, quantity: ${this.apartments.length}`);
      } else {
        // throw new Error("Apartments limit exceeded.") // Програма закінчить виконання з помилкою.
        console.error(`Apartments limit (${this.apartmentMaxQuantity}) exceeded. quantity:`, this.apartments.length);
      }
    }
  }

  get apartments() {
    return this.apartments;
  }

}

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

bestApartment.addDweller(driver);
bestApartment.addDweller(3);
bestApartment.addDweller(3 < 2);
bestApartment.addDweller(teacher);
bestApartment.addDweller(waiter);
bestApartment.addDweller(pilot);
bestApartment.addDweller(doctor);
console.log(`Dwellers in the best apartment (${bestApartment.dwellers.length}):`,
  bestApartment.dwellers.map(d => d.name).join(", "));

cheapApartment.addDweller(student);
cheapApartment.addDweller(warrior);
cheapApartment.addDweller(doctor);
cheapApartment.addDweller(waiter);
cheapApartment.addDweller(driver);
console.log(`Dwellers in cheap apartment (${cheapApartment.dwellers.length}):`,
  cheapApartment.dwellers.map(d => d.name).join(", "));

expensiveApartment.addDweller(pilot);
console.log(`Dwellers in expensive apartment(${expensiveApartment.dwellers.length}):`,
  expensiveApartment.dwellers.map(d => d.name).join(", "));

sweetHouse.addApartment(bestApartment);
sweetHouse.addApartment(cheapApartment);
sweetHouse.addApartment(expensiveApartment);
sweetHouse.addApartment(expensiveApartment);

