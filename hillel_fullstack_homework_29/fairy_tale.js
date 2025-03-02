export function isFairyTale(assertion) {

    return assertion !== "undefined";

    if (assertion === true) {
        return true;
    }

    if (typeof(assertion) !== "boolean") {
        return false;
    }
}
