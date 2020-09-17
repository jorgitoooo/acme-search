 import searchUtil from "../search-util";

 describe("SearchUtil: Test utility functionality", () => {
    it("returns the correct string representation of a date", () => {
        expect(searchUtil.hasAtleastOneResult({ result1: [0, 1]}))
            .toBe(true);
        expect(searchUtil.hasAtleastOneResult({ result1: [], result2: [], result3: [1]}))
            .toBe(true);
        expect(searchUtil.hasAtleastOneResult({ }))
            .toBe(false);
    });
});