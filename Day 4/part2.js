var fs = require('fs');

var input = fs.readFileSync("input.txt").toString().split("\n");

var locatedFields = 0;

var validPassports = 0;

for (i of input) {
    if (i == "") {
        if (locatedFields == 7) {
            validPassports++;
        }
        locatedFields = 0;
    } else {
        var line = i.split(" ");
        for (o of line) {
            var value = o.substring(4);
            switch (o.substring(0, 3)) {
                case "byr":
                    if (value.length == 4 && parseInt(value) >= 1920 && parseInt(value) <= 2002) {
                        locatedFields++;
                    }
                    break;

                case "iyr":
                    if (value.length == 4 && parseInt(value) >= 2010 && parseInt(value) <= 2020) {
                        locatedFields++;
                    }
                    break;

                case "eyr":
                    if (value.length == 4 && parseInt(value) >= 2020 && parseInt(value) <= 2030) {
                        locatedFields++;
                    }
                    break;

                case "hgt":
                    switch (value.slice(-2)) {
                        case "cm":
                            if (parseInt(value) >= 150 && parseInt(value) <= 193) {
                                locatedFields++;
                            }
                            break;

                        case "in":
                            if (parseInt(value) >= 59 && parseInt(value) <= 76) {
                                locatedFields++;
                            }
                            break;

                        default:
                            break;
                    }
                    break;

                case "hcl":
                    if (value.substring(0, 1) == "#" && value.length == 7) {
                        if (value.substring(1).match("[a-f0-9]{6}")) {
                            locatedFields++;
                        }
                    }
                    break;

                case "ecl":
                    switch (value) {
                        case "amb":
                            locatedFields++;
                            break;

                        case "blu":
                            locatedFields++;
                            break;

                        case "brn":
                            locatedFields++;
                            break;

                        case "gry":
                            locatedFields++;
                            break;

                        case "grn":
                            locatedFields++;
                            break;

                        case "hzl":
                            locatedFields++;
                            break;

                        case "oth":
                            locatedFields++;
                            break;

                        default:
                            break;
                    }
                    break;

                case "pid":
                    if (value.length == 9) {
                        if (parseInt(value)) {
                            locatedFields++;
                        }
                    }
                    break;

                default:
                    break;
            }
        }
    }
}

console.log(validPassports);