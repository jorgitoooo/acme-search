import contactService from "../contact-service";

const data = [
    { 
        id: "0",
        name: "",
        company: "",
        emails: ["me@jorgegarcia.co"],
        phones: ["555-555-5555"],
        last_contact: "2020-01-01",
        matching_terms: ["term 1", "term 2", "term 3"]
    },
    { 
        id: "1",
        name: "",
        company: "",
        emails: ["me@jorgegarcia.co"],
        phones: ["555-555-5555"],
        last_contact: "2020-01-01",
        matching_terms: ["term 1", "term 3"]
    },
    { 
        id: "2",
        name: "",
        company: "",
        emails: ["me@jorgegarcia.co"],
        phones: ["555-555-5555"],
        last_contact: "2020-01-01",
        matching_terms: ["term 4", "term 5", "term 6"]
    },
    { 
        id: "3",
        name: "",
        company: "",
        emails: ["me@jorgegarcia.co"],
        phones: ["555-555-5555"],
        last_contact: "2020-01-01",
        matching_terms: ["term 3", "term 9", "term 10"]
    }
];

const results = [
    {
      id: '0',
      name: '',
      company: '',
      emails: ["me@jorgegarcia.co"],
      phones: ["555-555-5555"],
      lastContact: '12/31/2019 - 4:00:00 PM'
    },
    {
      id: '1',
      name: '',
      company: '',
      emails: ["me@jorgegarcia.co"],
      phones: ["555-555-5555"],
      lastContact: '12/31/2019 - 4:00:00 PM'
    },
    {
      id: '2',
      name: '',
      company: '',
      emails: ["me@jorgegarcia.co"],
      phones: ["555-555-5555"],
      lastContact: '12/31/2019 - 4:00:00 PM'
    },
    {
      id: '3',
      name: '',
      company: '',
      emails: ["me@jorgegarcia.co"],
      phones: ["555-555-5555"],
      lastContact: '12/31/2019 - 4:00:00 PM'
    }
  ];

describe("Service: Test proper functionality", () => {
    contactService.data = data;
    
    it("constructs object with the correct data", () => {
        expect(contactService.data).toEqual(data);
    });
    
    it("returns all matching data", () => {
        expect(contactService.getMatching(["term 1", "term 4"]))
            .toEqual([results[0], results[1], results[2]]);
        expect(contactService.getMatching(["term 3"]))
            .toEqual([results[0], results[1], results[3]]);
        expect(contactService.getMatching(["term 4"]))
            .toEqual([results[2]]);
        expect(contactService.getMatching(["not a matching term"]))
            .toEqual([]);
        expect(contactService.getMatching([]))
            .toEqual([]);
    });
});