let input = [10, 16, 6, 0, 1, 17],

    spoken = {},

    previous,

    next;

for (let turn = 1; turn <= 30000000; turn++) {
    if (turn <= input.length) {
        next = input[turn - 1];
    } else if (spoken[previous] == undefined) {
        next = 0;
    } else {
        next = (turn - 1) - spoken[previous];
    }
    if (turn > 1) {
        spoken[previous] = turn - 1;
    }
    previous = next;
    if (turn == 30000000) {
        console.log(next);
    }
}