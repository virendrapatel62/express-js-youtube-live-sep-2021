const { name, internet, random, datatype } = require("faker");
const { number } = random;
const { firstName, lastName } = name;
const { email } = internet;

function generateStudents(count) {
  return new Array(count).fill(0).map(() => {
    return {
      id: datatype.uuid(),
      firstName: firstName(),
      lastName: lastName(),
      email: email(),

      age: number(45),
    };
  });
}

module.exports = { generateStudents };
