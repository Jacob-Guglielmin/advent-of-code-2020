var fs = require('fs');

var input = fs.readFileSync("input.txt").toString().split("\n");

var valid = [];

for (i in input) {
    input[i] = parseInt(input[i]);
    if (i < 25) {
        valid.push(input[i]);
    }
}

outerLoop:
for (i = 25; i < input.length; i++) {
    for (o of valid) {
        for (e of valid) {
            if (e + o == input[i]) {
                valid.shift();
                valid.push(input[i]);
                continue outerLoop;
            }
        }
    }
    console.log(input[i]);
    break;
}