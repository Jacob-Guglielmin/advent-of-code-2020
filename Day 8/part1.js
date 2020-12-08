var fs = require('fs');

var program = fs.readFileSync("input.txt").toString().split("\n");

for (instruction in program) {
    program[instruction] = program[instruction].split(" ");
    program[instruction][1] = parseInt(program[instruction][1]);
}

var position = 0;

var positions = [];

var accumulator = 0;

while (true) {
    if (positions.includes(position)) {
        break;
    }
    positions.push(position);
    instruction = program[position];
    switch (instruction[0]) {
        case "acc":
            accumulator += instruction[1];
            position++;
            break;

        case "jmp":
            position += instruction[1];
            break;

        case "nop":
            position++;
            break;

        default:
            throw instruction[0] + " is not a valid instruction!";
    }
}

console.log(accumulator);