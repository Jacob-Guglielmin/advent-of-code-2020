var fs = require('fs');

var current = fs.readFileSync("input.txt").toString().split("\n");

for (i in current) {
    current[i] = current[i].split("");
}

var next = JSON.parse(JSON.stringify(current));

var changed = true;

while (changed) {
    changed = false;
    for (i in current) {
        for (o in current[i]) {
            switch (current[i][o]) {
                case "L":
                    if (countOccupied(i, o) == 0) {
                        next[i][o] = "#";
                        changed = true;
                    }
                    break;

                case "#":
                    if (countOccupied(i, o) >= 4) {
                        next[i][o] = "L";
                        changed = true;
                    }
                    break;

                default:
                    break;
            }
        }
    }
    current = JSON.parse(JSON.stringify(next));
}

var total = 0;

for (i of current) {
    for (o of i) {
        if (o == "#") {
            total++;
        }
    }
}

console.log(total);

function countOccupied (y, x) {
    y = parseInt(y);
    x = parseInt(x);
    var occupied = 0;
    if (current[y - 1]) {
        if (current[y - 1][x] == "#") {
            occupied++;
        }
        if (current[y - 1][x - 1] && current[y - 1][x - 1] == "#") {
            occupied++;
        }
        if (current[y - 1][x + 1] && current[y - 1][x + 1] == "#") {
            occupied++;
        }
    }
    if (current[y + 1]) {
        if (current[y + 1][x] == "#") {
            occupied++;
        }
        if (current[y + 1][x - 1] && current[y + 1][x - 1] == "#") {
            occupied++;
        }
        if (current[y + 1][x + 1] && current[y + 1][x + 1] == "#") {
            occupied++;
        }
    }
    if (current[y][x - 1] && current[y][x - 1] == "#") {
        occupied++;
    }
    if (current[y][x + 1] && current[y][x + 1] == "#") {
        occupied++;
    }
    return occupied;
}