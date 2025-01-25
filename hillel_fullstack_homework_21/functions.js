"use strict";

export function checkImport (estimate) {
  console.log("Check import:", estimate);
}


export function generateKey(keyLength, symbols) {
  const keyArray = [];
  for (let i = 0; i < keyLength; i++) {
    keyArray.push(symbols[Math.floor(Math.random() * symbols.length)]);
  }
  return keyArray.join("");
}


// // Варіант average #1
// export function average(mixed) {
//   let sumOfElements = 0;
//   let elementsAmount = 0;
//   mixed.forEach(element => {
//     const elementNumbered = Number(element);
//     if (!isNaN(elementNumbered)) {
//       sumOfElements = sumOfElements + elementNumbered;
//       elementsAmount = elementsAmount + 1;
//     }
//   });
//   // console.log(`Середнє арифметичне числових елементів масиву: ${sumOfElements} / ${elementsAmount} = ${sumOfElements/elementsAmount}`);
//   return sumOfElements/elementsAmount;
// }

// Варіант average #2
export function average(mixed) {
  const arrayForCountFiltered = mixed.map((element) => Number(element)).filter(element => !isNaN(element));
  // const arrayForCount = mixed.map((element) => Number(element)); // варіант переводу: + element
  // const arrayForCountFiltered = arrayForCount.filter(element => !isNaN(element));
  const sumOfElements = arrayForCountFiltered.reduce((accumulator, currentElement) => accumulator + currentElement);
  console.log(`Середнє арифметичне числових елементів масиву: (${arrayForCountFiltered.join(" + ")} = 
  ${sumOfElements}), ${sumOfElements} / ${arrayForCountFiltered.length} = ${sumOfElements/arrayForCountFiltered.length}`);
  return sumOfElements/arrayForCountFiltered.length;
}


export function showDeepArray(deep) {
  if (Array.isArray(deep)) {
    deep.forEach(element => {
      if (!Array.isArray(element)) {
        console.log(element)
      } else {
        showDeepArray(element);
      }
    });
  }
}