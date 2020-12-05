var fs = require('fs');

var input = fs.readFileSync("input.txt").toString().split("\n");

var highestID = 0;

for (i of input) {
    var id = parseInt(i.replace(/L|F/g, "0").replace(/B|R/g, "1"), 2);
    if (id > highestID) {
        highestID = id;
    }
}

console.log(highestID)