const NumberChecker = require("./NumberChecker");

function Count(input) {
  checkInput(input);

  return getCountingBits(input);
};

function checkInput(input) {
  NumberChecker.checkIsNumber(input);
  NumberChecker.checkIsNegative(input);
}

function getCountingBits(input) {
  const reversedBinaryRepresentation = getReversedBinaryRepresentation(input);
  const oneBitsIndexes = getOneBitsIndexes(reversedBinaryRepresentation);
  const get1BitsAmount = count1Bits(oneBitsIndexes);

  return [get1BitsAmount, ...oneBitsIndexes];
}

function getReversedBinaryRepresentation(input) {
  const remainders = [];

  while (input >= 1) {
    const remainder = input % 2;
    remainders.push(remainder);
    input = parseInt(input / 2);
  }

  return remainders;
}

function getOneBitsIndexes(binaryRepresentation) {
  const definedOneBitsIndexes = binaryRepresentation.map((bit, index) => bit === 1 ? index : undefined);
  const oneBitsIndexes = definedOneBitsIndexes.filter(index => index !== undefined);

  return oneBitsIndexes;
}

function count1Bits(oneBitsIndexes) {
  return oneBitsIndexes.length;
}


module.exports = {
  Count
}