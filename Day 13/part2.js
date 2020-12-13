var fs = require('fs');

var input = fs.readFileSync("input.txt").toString().split("\n")[1];

input = input.split(",");

for (i in input) {
    if (input[i] != "x") {
        input[i] = parseInt(input[i]);
    }
}

console.log("Enter the following into a CRT calculator like this one - https://comnuan.com/cmnn02/cmnn0200a/cmnn0200a.php");

for (i in input) {
    if (input[i] != "x") {
        var num2 = input[i] - parseInt(i);
        while (num2 < 0) {
            num2 = input[i] + num2;
        }
        console.log(1 + " " + input[i] + num2 + " " + input[i]);
    } 
}