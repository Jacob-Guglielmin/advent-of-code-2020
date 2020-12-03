var fs = require('fs');

var input = fs.readFileSync("input.txt").toString().split("\n");

var coords = [0, 0];

var treesHit = 0;

while (coords[1] < input.length) {
    if (coords[0] >= input[0].length) {
        coords[0] -= input[0].length;
    }
    console.log(coords[1], coords[0])
    if (input[coords[1]][coords[0]] == "#") {
        console.log("hit");
        treesHit++;
    }
    coords[0] += 3;
    coords[1] += 1;
}

console.log(treesHit);