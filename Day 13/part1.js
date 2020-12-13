var fs = require('fs');

var input = fs.readFileSync("input.txt").toString().split("\n");

input[0] = parseInt(input[0]);

input[1] = input[1].split(",");

input[1] = input[1].filter(a => a !== 'x');

for (i in input[1]) {
    input[1][i] = parseInt(input[1][i]);
}

var time = input[0];

outerLoop:
while (true) {
    for (i of input[1]) {
        if (time % i == 0) {
            console.log(i * (time - input[0]));
            break outerLoop;
        }
    }
    time++;
}