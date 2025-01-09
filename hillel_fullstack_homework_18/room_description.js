// This is demo of remark (comment). String.
/* This is
    demo of
    remark.
    Block. */
let myRoom = ["door", "window", "curtains", "balcony",
    "bed", "tv set", "carpet", "pictures", "horizontal bar",
    "wardrobe", "bookcase", "table", "armchair", "PC",
    "hoover", "coffee table", "chair", "nightstand",
    "shelves", "car models"]
console.log("My room", myRoom);
console.log("Behind the window -", myRoom[3]);
const floor = 5;
console.log("Floor:", floor);
let countOfPictures = 5;
console.log("Count of pictures:", countOfPictures);
let pictures = ["Mandalorian", "Egyptian signs",
    "Boat on coast", "Happy pig", "Cute cat"];
// console.log("Pictures:", pictures);
for (let pictN = 0; pictN < 5; pictN++) {
    console.log("Картина", pictN + 1, ":", pictures[pictN]);
}
let carModelsAmount= 3 + 9 + 12 + 1;
console.log("Amount of car models:", carModelsAmount);
let airIsWarm = true;
console.log("Warm air:", airIsWarm);
let floorIsCold = false;
console.log("Cold floor:", floorIsCold);

let neighbour = {
    name: "Ruslan",
    age: 40,
    gender: "Male",
    isFriend: true,
    isMarried: false,
    isGoodMan: true
}
console.log("Neighbour:", neighbour.name);
console.log("He is my friend:", neighbour.isFriend);
console.log("Age:", neighbour.age);
console.log("Nice dude:", neighbour.isGoodMan);
