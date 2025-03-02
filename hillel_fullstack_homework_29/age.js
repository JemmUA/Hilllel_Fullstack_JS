export function ageClassification(n) {
  if (typeof(n) === "undefined") {
    return null;
  }

  if (n === null) {
    throw new Error("Argument is null");
  }

  let result = "";

  result = (n < 0) ? null : result;
  result = (n >= 0 && n <= 24) ? "Дитинство" : result;
  result = (n > 24 && n <= 44) ? "Молодість" : result;
  result = (n > 44 && n <= 65) ? "Зрілість" : result;
  result = (n > 65 && n <= 75) ? "Старість" : result;
  result = (n > 75 && n <= 90) ? "Довголіття" : result;
  result = (n > 90 && n <= 122) ? "Рекорд" : result;
  result = (n > 122) ? null : result;

  return result;
}