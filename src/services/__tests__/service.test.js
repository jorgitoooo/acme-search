import Service from "../service";

describe("Service: Test proper functionality", () => {
    const data = [
        { id: "0", matching_terms: ["term 1", "term 2", "term 3"]},
        { id: "1", matching_terms: ["term 1", "term 3"]},
        { id: "2", matching_terms: ["term 4", "term 5", "term 6"]},
        { id: "3", matching_terms: ["term 3", "term 9", "term 10"]}
    ];
    
    it("constructs object with the correct data", () => {
        const service = new Service(data);
        expect(service.data).toEqual(data);
    });
    
    it("returns all matching data", () => {
        const service = new Service(data);
        expect(service.getMatching(["term 1", "term 4"]))
            .toEqual([data[0], data[1], data[2]]);
        expect(service.getMatching(["term 3"]))
            .toEqual([data[0], data[1], data[3]]);
        expect(service.getMatching(["term 4"]))
            .toEqual([data[2]]);
        expect(service.getMatching(["not a matching term"]))
            .toEqual([]);
        expect(service.getMatching([]))
            .toEqual([]);
    });
});