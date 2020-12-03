var fs = require('fs');

var input = fs.readFileSync("input.txt").toString().split("\n");

outerLoop:
for(i in input) {
    for (o in input) {
        for (e in input) {
            if (i != o && o != e && i != e) {
                if (parseInt(input[i]) + parseInt(input[o]) + parseInt(input[e]) == 2020) {
                    console.log(parseInt(input[i]) * parseInt(input[o]) * parseInt(input[e]));
                    break outerLoop;
                }
            }
        }
    }
}