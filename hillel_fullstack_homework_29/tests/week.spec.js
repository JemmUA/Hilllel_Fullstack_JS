import {weekFn} from "./../week.js";

describe("function weekFn", () => {

    beforeAll(() => {
        console.log("beforeAll performs before all test in describe")
    });

    afterAll(() => {
        console.log("afterAll performs after all test in describe")
    });

    it("5 - should to return 'П'ятниця'", () => {
        expect(weekFn(5)).toBe("П'ятниця");
    });

    it("7 - should to return 'П'ятниця'", () => {
        expect(weekFn(7)).toBeDefined();
    });

    it("-1 - should to return null", () => {
        expect(weekFn(-1)).toBe(null);
    });

    it("0 - should to return null", () => {
        expect(weekFn(0)).toBeNull();
    });

    it("8 - should to return null", () => {
        expect(weekFn(8)).toBeNull();
    });

    it("new Object() - should to return null", () => {
        expect(weekFn(new Object())).toBeNull();
    });

    it("[] - should to return null", () => {
        expect(weekFn([])).toBeNull();
    });

    it("no args - should to return null", () => {
        expect(weekFn()).toBe(null);
    });

    it("null - should to return null", () => {
        () => expect(weekFn(null)).toThrow("argument is null");
    });
});

