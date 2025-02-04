export class DateCalculator {
  MS_IN_DAY = 1000 * 60 * 60 * 24;

  constructor (date) {
    this.processingDate = new Date(date);
  }

  addDays(days) {
    this.processingDate.setTime(this.processingDate.getTime() + (this.MS_IN_DAY * days));
  }

  subtractDays(days) {
    this.processingDate.setTime(this.processingDate.getTime() - (this.MS_IN_DAY * days));
  }

  getResult() {
    return `${this.processingDate.getFullYear()}-${this.processingDate.getMonth() + 1}-${this.processingDate.getDate()}`;
  }
}


