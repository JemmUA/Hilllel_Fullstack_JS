export class Hamburger {
  static SIZE_SMALL = [50, 20];
  static SIZE_BIG = [100, 40];
  static STUFFING_CHEESE = [10, 20];
  static STUFFING_SALAD = [20, 5];
  static STUFFING_POTATO = [15, 10];
  static TOPPING_SAUCE = [15, 0];
  static TOPPING_MAYO = [20, 5];

  constructor(...orderSet) {
    this.orderSet = orderSet;
    console.log("Ваш гамбургер вже чекає на Вас!\nБажаєте піддати смакоти? У нас багато різних начинок")
  }
  addTopping(topping){
    if (topping) this.orderSet.push(topping);
    console.log("Додано начинку");
  }

  calculate(){
    return this.orderSet
      .map(order => order[1])
      .reduce((total, calories) => total + calories);
  }

  calculatePrice(){
    return this.orderSet
      .map(order => order[0])
      .reduce((total, price) => total + price);
  }

}