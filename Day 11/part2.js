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
                    if (countOccupied(i, o) >= 5) {
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

function countOccupied(y, x) {
    y = parseInt(y);
    x = parseInt(x);
    var occupied = 0;
    if (current[y - 1]) {
        if (getNearest(y, x, 0) == "#") {
            occupied++;
        }
        if (current[y - 1][x - 1] && getNearest(y, x, 7) == "#") {
            occupied++;
        }
        if (current[y - 1][x + 1] && getNearest(y, x, 1) == "#") {
            occupied++;
        }
    }
    if (current[y + 1]) {
        if (getNearest(y, x, 4) == "#") {
            occupied++;
        }
        if (current[y + 1][x - 1] && getNearest(y, x, 5) == "#") {
            occupied++;
        }
        if (current[y + 1][x + 1] && getNearest(y, x, 3) == "#") {
            occupied++;
        }
    }
    if (current[y][x - 1] && getNearest(y, x, 6) == "#") {
        occupied++;
    }
    if (current[y][x + 1] && getNearest(y, x, 2) == "#") {
        occupied++;
    }
    return occupied;
}

function getNearest(y, x, direction) {
    while (true) {
        switch (direction) {
            case 0:
                y--;
                break;
            case 1:
                y--;
                x++;
                break;
            case 2:
                x++;
                break;
            case 3:
                y++;
                x++;
                break;
            case 4:
                y++;
                break;
            case 5:
                y++;
                x--;
                break;
            case 6:
                x--;
                break;
            case 7:
                y--;
                x--;
                break;
            default:
                throw direction + " is not a valid direction!";
        }
        if (current[y] && current[y][x]) {
            if (current[y][x] != ".") {
                return current[y][x];
            }
        } else {
            return false;
        }
    }
}

