export function isFairyTale(assertion) {
    console.log("Assertion:", assertion);
    return assertion !== "boolean" || assertion === "undefined";
}

isFairyTale("Good story");