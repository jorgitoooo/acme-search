import slackService from "../slack-service";

const data = [
    { 
        id: "0",
        author: "Author 0",
        channel: "channel-0",
        message: "Message 0",
        timestamp: "2020-01-01",
        matching_terms: ["term 1", "term 2", "term 3"]
    },
    { 
        id: "1",
        author: "Author 1",
        channel: "channel-1",
        message: "Message 1",
        timestamp: "2020-01-01",
        matching_terms: ["term 1", "term 3"]
    },
    { 
        id: "2",
        author: "Author 2",
        channel: "channel-2",
        message: "Message 2",
        timestamp: "2020-01-01",
        matching_terms: ["term 4", "term 5", "term 6"]
    },
    { 
        id: "3",
        author: "Author 3",
        channel: "channel-3",
        message: "Message 3",
        timestamp: "2020-01-01",
        matching_terms: ["term 3", "term 9", "term 10"]
    }
];

const results = [
    {
      author: "Author 0",
      channel: "channel-0",
      message: "Message 0",
      createdAt: '12/31/2019 - 4:00:00 PM'
    },
    {
      author: "Author 1",
      channel: "channel-1",
      message: "Message 1",
      createdAt: '12/31/2019 - 4:00:00 PM'
    },
    {
      author: "Author 2",
      channel: "channel-2",
      message: "Message 2",
      createdAt: '12/31/2019 - 4:00:00 PM'
    },
    {
      author: "Author 3",
      channel: "channel-3",
      message: "Message 3",
      createdAt: '12/31/2019 - 4:00:00 PM'
    }
  ];

describe("Service: Test proper functionality", () => {
    slackService.data = data;
    
    it("constructs object with the correct data", () => {
        expect(slackService.data).toEqual(data);
    });
    
    it("returns all matching data", () => {
        expect(slackService.getMatching(["term 1", "term 4"]))
            .toEqual([results[0], results[1], results[2]]);
        expect(slackService.getMatching(["term 3"]))
            .toEqual([results[0], results[1], results[3]]);
        expect(slackService.getMatching(["term 4"]))
            .toEqual([results[2]]);
        expect(slackService.getMatching(["not a matching term"]))
            .toEqual([]);
        expect(slackService.getMatching([]))
            .toEqual([]);
    });
});