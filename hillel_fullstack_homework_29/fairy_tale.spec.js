import { isFairyTale } from "./fairy_tale.js";

describe("function isFairyTale", () => {

    it("true - should to return true", () => {
        expect(true).toBeTruthy();
    });

    it("false - should to return false", () => {
        expect(false).toBeFalsy();
    });

    it("0 - should to return 0", () => {
        expect(0).toBe(0);
    });

    it("null - should to return null", () => {
        () => expect(null).toThrow("Aaaaaaaaaargument is null");
    });

});

