var fs = require('fs');

var input = fs.readFileSync("input.txt").toString().split("\n");

for (i in input) {
    input[i] = [input[i].substring(0, 1), parseInt(input[i].substring(1))];
}

var coords = [0, 0];

var waypoint = [-1, 10];

var direction = 1;

for (i of input) {
    switch (i[0]) {
        case "N":
            waypoint[0] -= i[1];
            break;
        
        case "S":
            waypoint[0] += i[1];
            break;

        case "E":
            waypoint[1] += i[1];
            break;

        case "W":
            waypoint[1] -= i[1];
            break;

        case "L":
            var tmp = JSON.parse(JSON.stringify(waypoint));
            waypoint[0] = tmp[1] * Math.round(Math.sin(-1 * i[1] * (Math.PI / 180))) + tmp[0] * Math.round(Math.cos(-1 * i[1] * (Math.PI / 180)));
            waypoint[1] = tmp[1] * Math.round(Math.cos(-1 * i[1] * (Math.PI / 180))) - tmp[0] * Math.round(Math.sin(-1 * i[1] * (Math.PI / 180)));
            break;

        case "R":
            var tmp = JSON.parse(JSON.stringify(waypoint));
            waypoint[0] = tmp[1] * Math.round(Math.sin(i[1] * (Math.PI / 180))) + tmp[0] * Math.round(Math.cos(i[1] * (Math.PI / 180)));
            waypoint[1] = tmp[1] * Math.round(Math.cos(i[1] * (Math.PI / 180))) - tmp[0] * Math.round(Math.sin(i[1] * (Math.PI / 180)));
            break;

        case "F":
            coords[0] += waypoint[0] * i[1];
            coords[1] += waypoint[1] * i[1];
            break;
    }
}

console.log(Math.abs(coords[0]) + Math.abs(coords[1]));

function mod(n, m) {
    return ((n % m) + m) % m;
}
  