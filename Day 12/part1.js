var fs = require('fs');

var input = fs.readFileSync("input.txt").toString().split("\n");

for (i in input) {
    input[i] = [input[i].substring(0, 1), parseInt(input[i].substring(1))];
}

var coords = [0, 0];

var direction = 1;

for (i of input) {
    switch (i[0]) {
        case "N":
            coords[0] -= i[1];
            break;
        
        case "S":
            coords[0] += i[1];
            break;

        case "E":
            coords[1] += i[1];
            break;

        case "W":
            coords[1] -= i[1];
            break;

        case "L":
            direction = mod(direction - (i[1] / 90), 4);
            break;

        case "R":
            direction = mod(direction + (i[1] / 90), 4);
            break;

        case "F":
            switch (direction) {
                case 0:
                    coords[0] -= i[1];
                    break;

                case 1:
                    coords[1] += i[1];
                    break;

                case 2:
                    coords[0] += i[1];
                    break;

                case 3:
                    coords[1] -= i[1];
                    break;
            }
            break;
    }
}

console.log(Math.abs(coords[0]) + Math.abs(coords[1]));

function mod(n, m) {
    return ((n % m) + m) % m;
}
  