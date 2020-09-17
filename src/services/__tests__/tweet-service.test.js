import tweetService from "../tweet-service";

const data = [
    { 
        user: "user_0",
        message: "Message 0",
        timestamp: "2020-01-01",
        matching_terms: ["term 1", "term 2", "term 3"]
    },
    { 
        user: "user_1",
        message: "Message 1",
        timestamp: "2020-01-01",
        matching_terms: ["term 1", "term 3"]
    },
    { 
        user: "user_2",
        message: "Message 2",
        timestamp: "2020-01-01",
        matching_terms: ["term 4", "term 5", "term 6"]
    },
    { 
        user: "user_3",
        message: "Message 3",
        timestamp: "2020-01-01",
        matching_terms: ["term 3", "term 9", "term 10"]
    }
];

const results = [
    {
      user: "user_0",
      message: "Message 0",
      createdAt: '12/31/2019 - 4:00:00 PM'
    },
    {
      user: "user_1",
      message: "Message 1",
      createdAt: '12/31/2019 - 4:00:00 PM'
    },
    {
      user: "user_2",
      message: "Message 2",
      createdAt: '12/31/2019 - 4:00:00 PM'
    },
    {
      user: "user_3",
      message: "Message 3",
      createdAt: '12/31/2019 - 4:00:00 PM'
    }
  ];

describe("Service: Test proper functionality", () => {
    tweetService.data = data;
    
    it("constructs object with the correct data", () => {
        expect(tweetService.data).toEqual(data);
    });
    
    it("returns all matching data", () => {
        expect(tweetService.getMatching(["term 1", "term 4"]))
            .toEqual([results[0], results[1], results[2]]);
        expect(tweetService.getMatching(["term 3"]))
            .toEqual([results[0], results[1], results[3]]);
        expect(tweetService.getMatching(["term 4"]))
            .toEqual([results[2]]);
        expect(tweetService.getMatching(["not a matching term"]))
            .toEqual([]);
        expect(tweetService.getMatching([]))
            .toEqual([]);
    });
});