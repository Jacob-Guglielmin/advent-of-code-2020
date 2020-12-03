var fs = require('fs');

var input = fs.readFileSync("input.txt").toString().split("\n");

outerLoop:
for(i in input) {
    for (o in input) {
        if (i != o) {
            if (parseInt(input[i]) + parseInt(input[o]) == 2020) {
                console.log(parseInt(input[i]) * parseInt(input[o]));
                break outerLoop;
            }
        }
    }
}