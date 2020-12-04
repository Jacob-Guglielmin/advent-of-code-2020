var fs = require('fs');

var input = fs.readFileSync("input.txt").toString().split("\n");

var locatedFields = 0;

var validPassports = 0;

for (i of input) {
    if (i == "") {
        if (locatedFields == 7) {
            validPassports++;
        }
        locatedFields = 0;
    } else {
        var line = i.split(" ");
        for (o of line) {
            if (o.substring(0, 3) != "cid") {
                locatedFields++;
            }
        }
    }
}

console.log(validPassports);