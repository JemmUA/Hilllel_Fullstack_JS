import { jest } from "@jest/globals";
import { isFairyTale } from "./../fairy_tale.js";

describe("function isFairyTale", () => {

    beforeEach(()=> {
        console.log("Actions before each test. Preparing test...")
    });

    afterEach(()=> {
        console.log("Actions after each test. Cleaning consequences...")
        jest.clearAllMocks();
    });

    it("'Good story' should to return true", () => {
       expect(isFairyTale("Good story")).toBe(true);
    });

    it("'Good story' should to return 'Assertion:', 'Good story'", () => {
        const spy = jest.spyOn(console, 'log');
        expect(isFairyTale("Good story")).toBe(true);
        expect(spy).toHaveBeenCalledWith("Assertion:", "Good story");
        // spy.mockClear();
    });

    it("true - should to return true", () => {
        expect(isFairyTale(true)).toBeTruthy();
    });

    it("false - should to return true", () => {
        expect(isFairyTale(false)).toBeTruthy();
    });

    it("0 - should to return true", () => {
        expect(isFairyTale(0)).toBeTruthy();
    });

    it("undefined - should to return true", () => {
        expect(isFairyTale()).toBeTruthy();
    });

    it("[]] - should to return true", () => {
        expect(isFairyTale([])).toBeTruthy();
    });

    it("null - should to return error", () => {
        () => expect(isFairyTale(null))
            .toThrow("Aaaargument is null");
    });

});

