import calendarService from "../calendar-service";

const data = [
    { 
        id: "0",
        title: "",
        invitees: "john, sophia",
        date: "2020-01-01",
        matching_terms: ["term 1", "term 2", "term 3"]
    },
    { 
        id: "1",
        title: "",
        invitees: "john, sophia, carol",
        date: "2020-01-01",
        matching_terms: ["term 1", "term 3"]
    },
    { 
        id: "2",
        title: "",
        invitees: "john, jason",
        date: "2020-01-01",
        matching_terms: ["term 4", "term 5", "term 6"]
    },
    { 
        id: "3",
        title: "",
        invitees: "john, hillary",
        date: "2020-01-01",
        matching_terms: ["term 3", "term 9", "term 10"]
    }
];

const results = [
    {
      id: '0',
      title: '',
      invitees: [ 'john', 'sophia' ],
      date: '12/31/2019 - 4:00:00 PM'
    },
    {
      id: '1',
      title: '',
      invitees: [ 'john', 'sophia', 'carol' ],
      date: '12/31/2019 - 4:00:00 PM'
    },
    {
      id: '2',
      title: '',
      invitees: [ 'john', 'jason' ],
      date: '12/31/2019 - 4:00:00 PM'
    },
    {
      id: '3',
      title: '',
      invitees: [ 'john', 'hillary' ],
      date: '12/31/2019 - 4:00:00 PM'
    }
  ];

describe("Service: Test proper functionality", () => {
    calendarService.data = data;
    
    it("constructs object with the correct data", () => {
        expect(calendarService.data).toEqual(data);
    });
    
    it("returns all matching data", () => {
        expect(calendarService.getMatching(["term 1", "term 4"]))
            .toEqual([results[0], results[1], results[2]]);
        expect(calendarService.getMatching(["term 3"]))
            .toEqual([results[0], results[1], results[3]]);
        expect(calendarService.getMatching(["term 4"]))
            .toEqual([results[2]]);
        expect(calendarService.getMatching(["not a matching term"]))
            .toEqual([]);
        expect(calendarService.getMatching([]))
            .toEqual([]);
    });
});