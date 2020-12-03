var fs = require('fs');

var input = fs.readFileSync("input.txt").toString().split("\n");

var validCount = 0;

for (i of input) {
    i = i.split(" ");
    i[0] = i[0].split("-");
    i[1] = i[1].replace(":","");
    if (i[2][i[0][0] - 1] == i[1] ^ i[2][i[0][1] - 1] == i[1]) {
        validCount++;
    }
}

console.log(validCount);