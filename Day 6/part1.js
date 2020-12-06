var fs = require('fs');

var input = fs.readFileSync("input.txt").toString().split("\n\n");

for (i in input) {
    input[i] = input[i].replace(/\n/g, "");
}

var questionCount = 0;

var questionsAnswered = [];

for (i of input) {
    questionsAnswered = [];
    for (o of i) {
        if (!questionsAnswered.includes(o)) {
            questionCount++;
            questionsAnswered.push(o);
        }
    }
}

console.log(questionCount);