import queryService from "../query-service";

describe("QueryService: Test proper functionality", () => {
    const data = [
        { id: "0", matching_terms: ["term 1", "term 2", "term 3"]},
        { id: "1", matching_terms: ["term 1", "term 3"]},
        { id: "2", matching_terms: ["term 4", "term 5", "term 6"]},
        { id: "3", matching_terms: ["term 3", "term 9", "term 10"]}
    ];
    
    it("prepares query for search", () => {
        expect(queryService.prepareQuery("ThIs A qUEry"))
            .toEqual(["this a query", "this", "a", "query"]);
        expect(queryService.prepareQuery("      ThIs A qUEry"))
            .toEqual(["this a query", "this", "a", "query"]);
        expect(queryService.prepareQuery("THIS A qUEry       "))
            .toEqual(["this a query", "this", "a", "query"]);
        expect(queryService.prepareQuery("ThIs A    qUEry"))
            .toEqual(["this a    query", "this", "a", "query"]);
        expect(queryService.prepareQuery("    ThIs Another QUERY  "))
            .toEqual(["this another query", "this", "another", "query"]);
    });

    it("returns true only if query has a matching term", () => {
        expect(queryService.queryMatch(data[0], ["term 1"])).toBe(true);
        expect(queryService.queryMatch(data[0], ["term 2"])).toBe(true);
        expect(queryService.queryMatch(data[0], ["term 4"])).toBe(false);
        expect(queryService.queryMatch(data[1], ["term 4"])).toBe(false);
        expect(queryService.queryMatch(data[1], ["term 3"])).toBe(true);
        expect(queryService.queryMatch(data[2], ["term 4"])).toBe(true);
    });
});