var fs = require('fs');

var input = fs.readFileSync("input.txt").toString().split("\n");

var highestID = 0;

var binary;

for (i of input) {
    binary = i.replace(/L|F/g, "0").replace(/B|R/g, "1");
    var id = parseInt(binary.substring(0, 7), 2) * 8 + parseInt(binary.substring(7, 10), 2);
    if (id > highestID) {
        highestID = id;
    }
}

console.log(highestID)