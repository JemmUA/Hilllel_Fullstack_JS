export class Order {
  #name = '';
  #price = '';
  #calories = '';
  constructor(name, price, calories) {
    this.#name = name;
    this.#price = price;
    this.#calories = calories;
  }
  get name() {
    return this.#name;
  }
  get price() {
    return this.#price;
  }
  get calories() {
    return this.#calories;
  }
  set name(name){
    this.#name = name;
  }
  set price(price){
    this.#price = price;
  }
  set calories(calories){
    this.#calories = calories;
  }
}
