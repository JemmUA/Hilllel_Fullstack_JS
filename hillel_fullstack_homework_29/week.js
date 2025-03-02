export function weekFn(n) {
  if (typeof(n) === "undefined" || typeof(n) !== "number") {
    return null;
  }

  if (n === null) {
    throw new Error("argument is null");
  }

  let weekDay;
  switch (n) {
    case 1:
      weekDay = "Понеділок";
      break;
    case 2:
      weekDay = "Вівторок";
      break;
    case 3:
      weekDay = "Середа";
      break;
    case 4:
      weekDay = "Четвер";
      break;
    case 5:
      weekDay = "П'ятниця";
      break;
    case 6:
      weekDay = "Субота";
      break;
    case 7:
      weekDay = "Неділя";
      break;
    default:
      weekDay = null;
  }
  return weekDay;
}

console.log("Week day - 5:", weekFn(5));