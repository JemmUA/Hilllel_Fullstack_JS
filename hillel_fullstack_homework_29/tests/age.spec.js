import {ageClassification} from "./../age.js";

describe("function ageClassification", () => {

   it("0 - should to return 'Дитинство'", () => {
      expect(ageClassification(0)).toBe("Дитинство");
   });

   it("-1 - should to return null", () => {
      expect(ageClassification(-1)).toBe(null);
   });

   it("99 - should to return null", () => {
      expect(ageClassification(99)).toBeDefined();
   });

   it("123 - should to return null", () => {
      expect(ageClassification(123)).toBeNull();
   });

   it("new Object() - should to return ''", () => {
      expect(ageClassification(new Object())).toBe('');
   });

   it("10, 10 - should to return 'Дитинство'", () => {
      expect(ageClassification(10, 10)).toBe("Дитинство");
   });

   it("no args - should to return null", () => {
      expect(ageClassification()).toBeNull();
   });

   it("object - should to return ''", () => {
      expect(ageClassification({
         name: "Bob",
         age: 10
      })).toBe('');
   });

   it("null - should to throw error 'Argument is null'", () => {
      expect(() => ageClassification(null)).toThrow("Argument is null");
   });

});
