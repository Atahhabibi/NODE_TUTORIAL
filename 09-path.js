const path = require("path");
const filePath = path.join("/content", "subfolder", "text.txt");
const base = path.basename(filePath);

const absolute = path.resolve(__dirname, "content", "sublfolder", "test.txt");

console.log(absolute);
