const checkIsNumber = input => {
    if (isNaN(input)) {
        throw TypeError('Input is not a number');
    }
}

const checkIsNegative = input => {
    if (input < 0) {
        throw RangeError('Number has to be positive');
    }
}

module.exports = {
    checkIsNumber,
    checkIsNegative
};