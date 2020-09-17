import dropboxService from "../dropbox-service";

// {
//     id: document.id,
//     title: document.title,
//     path: document.path,
//     sharedWith: document.shared_with,
//     created: utils.date.createDateStr(new Date(document.created)),
// }

const data = [
    { 
        id: "0",
        title: "Title 0",
        path: "/test/path/0",
        shared_with: ["me@jorgegarcia.co"],
        created: "2020-01-01",
        matching_terms: ["term 1", "term 2", "term 3"]
    },
    { 
        id: "1",
        title: "Title 1",
        path: "/test/path/1",
        shared_with: ["me@jorgegarcia.co"],
        created: "2020-01-01",
        matching_terms: ["term 1", "term 3"]
    },
    { 
        id: "2",
        title: "Title 2",
        path: "/test/path/2",
        shared_with: ["me@jorgegarcia.co"],
        created: "2020-01-01",
        matching_terms: ["term 4", "term 5", "term 6"]
    },
    { 
        id: "3",
        title: "Title 3",
        path: "/test/path/3",
        shared_with: ["me@jorgegarcia.co"],
        created: "2020-01-01",
        matching_terms: ["term 3", "term 9", "term 10"]
    }
];

const results = [
    {
      id: "0",
      title: "Title 0",
      path: "/test/path/0",
      sharedWith: ["me@jorgegarcia.co"],
      created: '12/31/2019 - 4:00:00 PM'
    },
    {
      id: "1",
      title: "Title 1",
      path: "/test/path/1",
      sharedWith: ["me@jorgegarcia.co"],
      created: '12/31/2019 - 4:00:00 PM'
    },
    {
      id: "2",
      title: "Title 2",
      path: "/test/path/2",
      sharedWith: ["me@jorgegarcia.co"],
      created: '12/31/2019 - 4:00:00 PM'
    },
    {
      id: "3",
      title: "Title 3",
      path: "/test/path/3",
      sharedWith: ["me@jorgegarcia.co"],
      created: '12/31/2019 - 4:00:00 PM'
    }
  ];

describe("Service: Test proper functionality", () => {
    dropboxService.data = data;
    
    it("constructs object with the correct data", () => {
        expect(dropboxService.data).toEqual(data);
    });
    
    it("returns all matching data", () => {
        expect(dropboxService.getMatching(["term 1", "term 4"]))
            .toEqual([results[0], results[1], results[2]]);
        expect(dropboxService.getMatching(["term 3"]))
            .toEqual([results[0], results[1], results[3]]);
        expect(dropboxService.getMatching(["term 4"]))
            .toEqual([results[2]]);
        expect(dropboxService.getMatching(["not a matching term"]))
            .toEqual([]);
        expect(dropboxService.getMatching([]))
            .toEqual([]);
    });
});