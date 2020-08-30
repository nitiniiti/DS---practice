// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {
//     let reverseString = '';
//     for (let i = 0; i <= str.length - 1; i++) {
//         reverseString = reverseString + str[str.length - i - 1];
//     }
//     return reverseString;
// }

// function reverse(str) {
//     let reverseString = str.split('').reverse().join("");
//     return reverseString;
// }


function reverse(str) {
    return str.split('').reduce((reversed, character) => { return character + reversed }, '');
}


module.exports = reverse;
