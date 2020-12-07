var fs = require('fs');

var input = fs.readFileSync("input.txt").toString();

var bags = {};

var total = 0;

input = input.replace(/ bags/g, "");
input = input.replace(/ bag/g, "");
input = input.replace(/\d /g, "");
input = input.split("\n");

for (i in input) {
    input[i] = input[i].split(" contain ");
    input[i][1] = input[i][1].replace(/\./g, "");
    input[i][1] = input[i][1].split(", ");
    bags[input[i][0]] = input[i][1];
}

function contain(bag, check) {
    if (bags[bag][0] == "no other") {
        return 0;
    } else {
        for (i of bags[bag]) {
            if (i == "shiny gold") {
                return 1;
            } else {
                check += contain(i, check);
            }
        }
        if (check) {
            return 1;
        } else {
            return 0;
        }
    }
}

for (i in bags) {
    if (contain(i, 0)) {
        total++;
    }
}

console.log(total);