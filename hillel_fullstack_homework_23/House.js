import {Apartment} from "./Apartment.js";

export class House {
  #apartments = [];

  constructor(apartmentMaxQuantity) {
    this.apartmentMaxQuantity = apartmentMaxQuantity;
  }

  addApartment(apartment) {
    if (apartment instanceof Apartment) {
      if (this.#apartments.length < this.apartmentMaxQuantity) {
        this.#apartments.push(apartment);
        console.log(`Apartment is added to house, quantity: ${this.#apartments.length}`);
      } else {
        // throw new Error("Apartments limit exceeded.") // Програма закінчить виконання з помилкою.
        console.error(`Apartments limit (${this.apartmentMaxQuantity}) exceeded. quantity:`, this.#apartments.length);
      }
    }
  }

  get apartments() {
    return this.#apartments;
  }

}
