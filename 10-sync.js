const { readFileSync, writeFileSync } = require("fs");
const fs = require("fs");


console.log("start");

const first = readFileSync("./content/first.txt", "utf-8");
const second = readFileSync("./content/first.txt", "utf-8");

writeFileSync(
  "./content/result-sync.text",
  `here is the result ${first}, ${second}`,
  { flag: "a" }
);


console.log("done with this task");
console.log("starting next one");