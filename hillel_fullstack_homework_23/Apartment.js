import {Human} from "./Human.js";

export class Apartment {
  #owners = [];

  addOwner(owner) {
    if (owner instanceof Human) {
      this.#owners.push(owner);
      console.log(`Good job! ${owner.name} has settled into the apartment.`)
    } else {
      console.error(`Incorrect type! ${owner} is ${typeof owner}. The Human is expected.`)
      // throw new Error(`Incorrect type! ${owner} is ${typeof owner}. The Human is expected.`) // Зупинка програми з помилкою
    }
  }

  get owners() {
    return this.#owners;
  }
}

