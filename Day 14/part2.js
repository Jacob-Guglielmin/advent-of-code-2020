var fs = require('fs');

var input = fs.readFileSync("input.txt").toString().split("\n");

for (i in input) {
    input[i] = input[i].split(" = ");

    input[i][0] = input[i][0].split("[");

    if (input[i][0][1]) {
        input[i][0][1] = input[i][0][1].replace(/\]/g, "");
        input[i][0][1] = parseInt(input[i][0][1]);
        input[i][0][1] = input[i][0][1].toString(2);
    }

    if (input[i][0][0] == "mem") {
        input[i][1] = parseInt(input[i][1]);
    }

    if (input[i][0][1]) {
        input[i][0][1] = input[i][0][1].split("").reverse().join("");
    }
}

let masks = [];

let memory = {};

for (let i of input) {
    if (i[0][0] == "mask") {
        for (let o in i[1]) {
            if (i[1][o] == "0") {
                i[1] = replaceAt(i[1], parseInt(o), "#");
            }
        }
        masks = getAddresses(i[1]);
    } else {
        let unchanged = i[0][1];
        while (unchanged.length < input[0][1].length) {
            unchanged += "0";
        }
        unchanged = unchanged.split("").reverse().join("");

        for (let mask of masks) {
            let toWrite = unchanged;
            for (let char in mask) {
                if (mask[char] != "#") {
                    toWrite = replaceAt(toWrite, parseInt(char), mask[char]);
                }
            }
            memory[toWrite] = i[1];
        }
    }
}

let total = 0;

for (let i in memory) {
    total += memory[i];
}

console.log(total);

function replaceAt(string, index, replacement) {
    return string.substring(0, index) + replacement + string.substring(index + replacement.length);
}

function getAddresses(mask) {
    let toReturn = [];
    for (let i in mask) {
        if (mask[i] == "X") {
            for (let o = 0; o <= 1; o++) {
                mask = replaceAt(mask, parseInt(i), o.toString());
                toReturn = toReturn.concat(getAddresses(mask));
            }
            return toReturn;
        }
    }
    return mask;
}