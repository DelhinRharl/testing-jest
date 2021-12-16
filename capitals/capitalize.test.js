const capitalize = require("./capitals.js");

const str = "affax";
const capitalStr = "Affax";
const word = capitalize(str);

test("should return string with capitalized first char", () => {
  expect(word).toBe(capitalStr);
});
