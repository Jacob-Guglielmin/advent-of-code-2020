var fs = require('fs');

var input = fs.readFileSync("input.txt").toString().split("\n");

var idList = [];

var binary;

for (i of input) {
    idList.push(parseInt(i.replace(/L|F/g, "0").replace(/B|R/g, "1"), 2));
}

idList.sort(function(a, b){return a-b});

var add = 59;

for (const i in idList) {
    if (parseInt(i) + add != idList[i]) {
        console.log(idList[i] - 1);
        add++;
    }
}