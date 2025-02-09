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
    console.log(this.#name)
    return this.#name;
  }
  get price() {
    return this.#price;
  }
  get calories() {
    return this.#calories;
  }
  set name(name){
    return this.#name = name;
  }
  set price(price){
    return this.#price = price;
  }
  set calories(calories){
    return this.#calories = calories;
  }
}
