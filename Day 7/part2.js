var fs = require('fs');

var input = fs.readFileSync("input.txt").toString();

var bags = {};

var total = 0;

input = input.replace(/ bags/g, "");
input = input.replace(/ bag/g, "");
input = input.split("\n");

for (i in input) {
    input[i] = input[i].split(" contain ");
    input[i][1] = input[i][1].replace(/\./g, "");
    input[i][1] = input[i][1].split(", ");
    for (o in input[i][1]) {
        input[i][1][o] = [parseInt(input[i][1][o].substring(0, 1)), input[i][1][o].substring(2)];
    }
    bags[input[i][0]] = input[i][1];
}

function contain(bag, check) {
    if (bags[bag][0][1] == " other") {
        return 1;
    } else {
        for (i of bags[bag]) {
            check += i[0] * contain(i[1], 0);
        }
        return check + 1;
    }
}

console.log(contain("shiny gold", 0) - 1);