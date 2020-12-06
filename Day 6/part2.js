var fs = require('fs');

var input = fs.readFileSync("input.txt").toString().split("\n\n");

for (i in input) {
    input[i] = input[i].split("\n");
}

var questionCount = 0;

var questionsAnswered = [];

for (i of input) {
    questionsAnswered = [];
    for (o of i[0]) {
        questionsAnswered.push(o);
    }
    for (o of i) {
        for (e = questionsAnswered.length - 1; e >= 0; e--) {
            if (!o.includes(questionsAnswered[e])) {
                questionsAnswered.splice(questionsAnswered.indexOf(questionsAnswered[e]), 1);
            } 
        }
    }
    questionCount += questionsAnswered.length;
}

console.log(questionCount);