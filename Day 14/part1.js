var fs = require('fs');

var input = fs.readFileSync("input2.txt").toString().split("\n");

for (i in input) {
    input[i] = input[i].split(" = ");

    input[i][0] = input[i][0].split("[");

    if (input[i][0][1]) {
        input[i][0][1] = input[i][0][1].replace(/\]/g, "");
        input[i][0][1] = parseInt(input[i][0][1]);
    }

    if (input[i][0][0] == "mem") {
        input[i][1] = parseInt(input[i][1]);
        input[i][1] = input[i][1].toString(2);
    }

    input[i][1] = input[i][1].split("").reverse().join("");
}

var mask;

var memory = {};

for (i of input) {
    if (i[0][0] == "mask") {
        mask = i[1];
    } else {
        var toWrite = i[1];
        while (toWrite.length < mask.length) {
            toWrite += "0";
        }
        for (o in mask) {
            if (mask[o] != "X") {
                toWrite = replaceAt(toWrite, parseInt(o), mask[o]);
            }
        }
        memory[i[0][1]] = toWrite;
    }
}

var total = 0;

for (i in memory) {
    total += parseInt(memory[i].split("").reverse().join(""), 2)
}

console.log(total);

function replaceAt(string, index, replacement) {
    return string.substring(0, index) + replacement + string.substring(index + replacement.length);
}