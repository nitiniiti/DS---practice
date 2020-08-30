// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    n = String(n);
    let stringLength = n.length;
    if (n[0] == '-') {
        return Number(n.split('').reverse().join('').substring(0, stringLength - 1)) * -1;
    } else {
        return Number(n.split('').reverse().join(''))
    }
}

module.exports = reverseInt;
