import dateUtil from "../date-util";

describe("DateUtil: Test utility functionality", () => {
    it("returns the correct string representation of a date", () => {
        expect(dateUtil.createDateStr(new Date("2020-01-01 3:00:00 PM")))
            .toEqual("1/1/2020 - 3:00:00 PM");
        expect(dateUtil.createDateStr(new Date("2020-04-01 3:00:00")))
            .toEqual("4/1/2020 - 3:00:00 AM");
        expect(dateUtil.createDateStr(new Date("2026-05-17 17:00:00")))
            .toEqual("5/17/2026 - 5:00:00 PM");
        expect(dateUtil.createDateStr(":00:00"))
            .toEqual("- Unknown -");
    });
});