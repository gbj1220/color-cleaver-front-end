const colorCombinator = require('./color-combinator.js')
const colorDeconstructor = require('./color-deconstructor.js')
const isValidPrimary = require('./is-valid-primary.js')
const isValidSecondary = require('./is-valid-secondary.js')


// Your code here!

const userInput1 = process.argv[2];
const userInput2 = process.argv[3];

if (userInput1 === undefined && userInput2 === undefined) {
  console.log("Must be a valid color")
}

if (userInput1 !== undefined && userInput2 === undefined) {
  const valid = colorDeconstructor(userInput1);
  console.log("You entered " + input1 + " & you received " + valid)
}

if (userInput1 !== undefined && userInput2 !== undefined)
  const comBine = 