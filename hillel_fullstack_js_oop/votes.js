/*
  Можна зробити на замиканнях (closures) або на класах

  Создать функцию, которая создает объект опросов - голосовалок.
  Принимает массив опций для голосования. Возвращает объект.

  Метод vote() принимает опцию. Если опция существует, поднимает ее счетчик на 1. Возвращает текущее количество голосов.
  Если опции нет, возвращает текст Vote option Internet Explorer doesn't exist

  Метод showVotes() выводит текущие результаты в виде опции и звездочек. Такой себе псевдо-график.
  Звездочки должны начинаться с одной линии, чтобы можно было оценить, кто кого обогнал

  Метод iterate принимает коллбек и выполняет его для каждой опции.
  коллбек вызывается с двумя параметрами: название опции и количество голосов

 */
class Poll {
  constructor(votes) {
    this.votes = votes.map(vote => vote.toLowerCase());
    this.counters = new Map();
    this.votes.forEach((element) => this.counters.set(element, 0));
  }
  vote(option) {
    if (option) option=option.toLowerCase();
    else return "Wrong input. There is no option for vote";
    if (option && this.votes.includes(option)) {
      this.counters.set(option, this.counters.get(option) + 1);
      return this.counters.get(option);
    } else {
      return `Vote option \"${option}\" doesn't exist`;
    }
  }
  showVotes(){
    const optionMaxLength = this.votes.reduce(((accumulator, value) => {
      if (accumulator < value.length) {
        accumulator = value.length;
      }
      return accumulator;
    }), 0);
    // const optionMaxLength = this.votes.reduce((acc, val) => acc < val.length ? val.length : acc, 0); // або так
    this.votes.forEach((element, index) => {
      console.log(element, " ".repeat(optionMaxLength - element.length), "*".repeat(this.counters.get(element)));
    });
  }
  iterate(callback) {
    this.counters.forEach(callback);
  }
}

console.log("\nTask: \"Votes\"")

const poll = new Poll(['chrome', 'firefox', 'OPERA', 'safari', 'edge']);

console.log(poll.vote());
console.log(poll.vote(' '));
console.log(poll.vote('chrome'));
console.log(poll.vote('chrome'));
console.log(poll.vote('chrome'));
console.log(poll.vote('CHROME'));
console.log(poll.vote('Chrome'));
console.log(poll.vote('firefox'));
console.log(poll.vote('firefox'));
console.log(poll.vote('FIREFOX'));
console.log(poll.vote('opera'));
console.log(poll.vote('edge'));
console.log(poll.vote('Internet Explorer'));

poll.showVotes();
/*
  chrome  *****
  firefox ***
  opera   *
  safari
  edge    *
 */

poll.iterate((count, option) => {
  console.log(`${option} -> ${count}`);
});

/*
  chrome -> 5
  firefox -> 3
  opera -> 1
  safari -> 0
  edge -> 1
 */