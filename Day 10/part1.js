var fs = require('fs');

var input = fs.readFileSync("input.txt").toString().split("\n");

for (i in input) {
    input[i] = parseInt(input[i])
}

input.push(0, input[input.length - 1] + 3);

input.sort(function(a, b){return a-b});

var difference = [0, 0];

for (i = 0; i < input.length - 1; i++) {
    if (input[i + 1] - input[i] == 1) {
        difference[0]++;
    } else {
        difference[1]++;
    }
}

console.log(difference[0] * difference[1]);