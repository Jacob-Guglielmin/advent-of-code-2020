var fs = require('fs');

var input = fs.readFileSync("input.txt").toString().split("\n");

var valid = [];

var invalid;

for (i in input) {
    input[i] = parseInt(input[i]);
    if (i < 25) {
        valid.push(input[i]);
    }
}

outerLoopA:
for (i = 25; i < input.length; i++) {
    for (o of valid) {
        for (e of valid) {
            if (e + o == input[i]) {
                valid.shift();
                valid.push(input[i]);
                continue outerLoopA;
            }
        }
    }
    invalid = input[i];
    break;
}

var total = 0;
var list = [];

outerLoopB:
for (i in input) {
    for (o = parseInt(i) + 1; o < input.length; o++) {
        total = 0;
        for (e = i; e <= o; e++) {
            total += input[e];
        }
        if (total == invalid) {
            for (e = i; e <= o; e++) {
                list.push(input[e]);
            }
            list.sort(function(a, b){return a - b});
            console.log(list[0] + list[list.length - 1]);
            break outerLoopB;
        }
    }
}