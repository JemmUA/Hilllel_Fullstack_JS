import {Order} from "./Order.js";

export class Hamburger {
  static SIZE_SMALL = new Order("Small size", 50, 20);
  static SIZE_BIG = new Order("Big size", 100, 40);
  static STUFFING_CHEESE = new Order("Cheese", 10, 20);
  static STUFFING_SALAD = new Order("Salad", 20, 5);
  static STUFFING_POTATO = new Order("Potato", 15, 10);
  static TOPPING_SAUCE = new Order("Sauce", 15, 0);
  static TOPPING_MAYO = new Order("Mayo", 20, 5);

  constructor(...orderSet) {
    this.orderSet = orderSet;
    console.log("Hello! Your hamburger is waiting for You.\nWould you like to increase deliciousness?\nWe have many different fillings.")
  }

  addTopping(topping) {
    if (topping) this.orderSet.push(topping);
    console.log(`\"${topping.name}\" filling is added.`);
  }

  calculate() {
    return this.orderSet
      .map(order => order.calories)
      .reduce((total, calories) => total + calories);
  }

  calculatePrice() {
    return this.orderSet
      .map(order => order.price)
      .reduce((total, price) => total + price);
  }

}