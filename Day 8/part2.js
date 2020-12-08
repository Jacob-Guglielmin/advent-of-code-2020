var fs = require('fs');

var program = fs.readFileSync("input.txt").toString().split("\n");

for (instruction in program) {
    program[instruction] = program[instruction].split(" ");
    program[instruction][1] = parseInt(program[instruction][1]);
}

var position = 0;

var positions = [];

var accumulator = 0;

outerLoop:
for (i in program) {
    position = 0;
    positions = [];
    accumulator = 0;
    if (program[i][0] == "jmp") {
        program[i][0] = "nop";
    } else if (program[i][0] == "nop") {
        program[i][0] = "jmp";
    } else {
        continue;
    }
    while (true) {
        if (positions.includes(position)) {
            break;
        }
        if (position >= program.length) {
            break outerLoop;
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
    if (program[i][0] == "jmp") {
        program[i][0] = "nop";
    } else if (program[i][0] == "nop") {
        program[i][0] = "jmp";
    }
}

console.log(accumulator);