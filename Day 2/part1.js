var fs = require('fs');

var input = fs.readFileSync("input.txt").toString().split("\n");

var validCount = 0;

for (i of input) {
    i = i.split(" ");
    i[0] = i[0].split("-");
    i[1] = i[1].replace(":","");
    count = (i[2].match(new RegExp(i[1], "g")) || []).length;
    if (count >= i[0][0] && count <= i[0][1]) {
        validCount++;
    }
}

console.log(validCount);