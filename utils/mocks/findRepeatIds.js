const fs = require("fs");

function findRepeatedNumbersInFile(filePath) {
  const fileContents = fs.readFileSync(filePath, "utf8");
  const numberRegex = /:\s*(-?\d*\.?\d+),/g;
  const numbersInFile = fileContents.match(numberRegex);
  console.log("numbersInFile");
  console.log(numbersInFile);
  const repeatedNumbers = [];

  if (numbersInFile) {
    const numberCount = {};
    for (const numberString of numbersInFile) {
      const number = numberString.replace(/[ : ,]/g, "");
      if (numberCount[number]) {
        numberCount[number]++;
        if (numberCount[number] === 2) {
          repeatedNumbers.push(Number(number));
        }
      } else {
        numberCount[number] = 1;
      }
    }
  }

  return repeatedNumbers;
}

const filePath = "./utils/mocks/media.js";
const repeatedNumbers = findRepeatedNumbersInFile(filePath);

console.log('REPEATED NUMBERS')
console.log(repeatedNumbers); // Output any repeated numbers in the file
