var fs = require('fs');

var input = fs.readFileSync("input.txt").toString().split("\n");

var idList = [];

var binary;

for (i of input) {
    binary = i.replace(/L|F/g, "0").replace(/B|R/g, "1");
    idList.push(parseInt(binary.substring(0, 7), 2) * 8 + parseInt(binary.substring(7, 10), 2));
}

idList.sort(function(a, b){return a-b});

var add = 59;

for (const i in idList) {
    if (parseInt(i) + add != idList[i]) {
        console.log(idList[i] - 1);
        add++;
    }
}