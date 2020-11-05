import { sortListByName } from "./index";

const testingData = [
  { name: "Zurich" },
  { name: "California" },
  { name: "Belgrade" },
];

const expectedResult = [
  { name: "Belgrade" },
  { name: "California" },
  { name: "Zurich" },
];

describe("sort list by name", () => {
  it("should sort list by name", () => {
    expect(sortListByName(testingData)).toMatchObject(expectedResult);
  });
});
