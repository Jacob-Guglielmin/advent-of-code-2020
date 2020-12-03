var fs = require('fs');

var input = fs.readFileSync("input.txt").toString().split("\n");

var coords = [0, 0];

var treesHit = 0;

var answer = 0;

while (coords[1] < input.length) {
    if (coords[0] >= input[0].length) {
        coords[0] -= input[0].length;
    }
    if (input[coords[1]][coords[0]] == "#") {
        treesHit++;
    }
    coords[0] += 1;
    coords[1] += 1;
}
answer = treesHit;
treesHit = 0;
coords = [0, 0];
while (coords[1] < input.length) {
    if (coords[0] >= input[0].length) {
        coords[0] -= input[0].length;
    }
    if (input[coords[1]][coords[0]] == "#") {
        treesHit++;
    }
    coords[0] += 3;
    coords[1] += 1;
}
answer *= treesHit;
treesHit = 0;
coords = [0, 0];
while (coords[1] < input.length) {
    if (coords[0] >= input[0].length) {
        coords[0] -= input[0].length;
    }
    if (input[coords[1]][coords[0]] == "#") {
        treesHit++;
    }
    coords[0] += 5;
    coords[1] += 1;
}
answer *= treesHit;
treesHit = 0;
coords = [0, 0];
while (coords[1] < input.length) {
    if (coords[0] >= input[0].length) {
        coords[0] -= input[0].length;
    }
    if (input[coords[1]][coords[0]] == "#") {
        treesHit++;
    }
    coords[0] += 7;
    coords[1] += 1;
}
answer *= treesHit;
treesHit = 0;
coords = [0, 0];
while (coords[1] < input.length) {
    if (coords[0] >= input[0].length) {
        coords[0] -= input[0].length;
    }
    if (input[coords[1]][coords[0]] == "#") {
        treesHit++;
    }
    coords[0] += 1;
    coords[1] += 2;
}
answer *= treesHit;

console.log(answer);