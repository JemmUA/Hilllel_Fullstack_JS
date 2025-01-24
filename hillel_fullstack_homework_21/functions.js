"use strict";

export function checkImport (estimate) {
  console.log("Check Import:", estimate);
}


export function generateKey(keyLength, symbols) {
  const keyArray = [];
  for (let i = 0; i < keyLength; i++) {
    keyArray.push(symbols[Math.floor(Math.random() * symbols.length)]);
  }
  return keyArray.join("");
}


export function average(mixed) {
  console.log(mixed);
}

average(['hello', 12, 'hi', 3, 4, 'another hell', 1, '5', 7, 'end', 0, 'you again?', 8]);