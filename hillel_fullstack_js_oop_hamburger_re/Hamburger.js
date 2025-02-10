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
    this.orderSetString = orderSet.map(order => order = order.name).join(" plus ");
    console.log(`Your order \"Hamburger: ${this.orderSetString}\" is already waiting for You.`);
    console.log(`Would you like to increase deliciousness? Please take a look at our suggestions:`)
    Object.keys(Hamburger).forEach(suggestion => console
      .log(`   ● \"${Hamburger[suggestion].name}\":`.padEnd(18), ` Option's name: ${suggestion}`.padEnd(33), `${Hamburger[suggestion].calories}`.padStart(3," "), `calories`, `${Hamburger[suggestion].price}`.padStart(15,"."), `tugriks`));

  }



  addTopping(topping) {
    if (topping) this.orderSet.push(topping);
    console.log(`\"${topping.name}\" filling has been added.`);
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