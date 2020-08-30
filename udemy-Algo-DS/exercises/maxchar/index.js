// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// function maxChar(str) {
//     str = str.split('').sort();
//     let currentMax = 1;
//     let currentmaxChar = str[0];
//     let overallMax = currentMax;
//     let overallMaxChar = currentmaxChar;
//     for (let i = 1; i < str.length; i++) {
//         if (str[i] == str[i - 1]) {
//             currentMax++;
//         } else {
//             if (currentMax > overallMax) {
//                 overallMax = currentMax;
//                 overallMaxChar = currentmaxChar;
//             }

//             currentMax = 1;
//             currentmaxChar = str[i];
//         }
//     }
//     return overallMaxChar;
// }

function maxChar(str) {
    let overallmax = 0;
    let overallmaxChar;
    let charObject = {};

    for (let i = 0; i < str.length; i++) {
        if (charObject[str[i]]) {
            charObject[str[i]]++;
        } else {
            charObject[str[i]] = 1;
        }
        if (charObject[str[i]] > overallmax) {
            overallmax = charObject[str[i]];
            overallmaxChar = str[i];
        }
    };

    return overallmaxChar;
}

module.exports = maxChar;
