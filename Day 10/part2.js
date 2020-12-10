var fs = require('fs');

var input = fs.readFileSync("input.txt").toString().split("\n");

for (i in input) {
    input[i] = parseInt(input[i])
}

input.push(input[input.length - 1] + 3);

input.sort(function(a, b){return a-b});

var combinations = {0: 1};

for (i of input) {
    var ways = 0;
    for (let o = 1; o < 4; o++) {
        if ((i - o) in combinations) {
            ways += combinations[i - o];
        }
    }
    combinations[i] = ways;
}

console.log(combinations[input[input.length - 1]]);