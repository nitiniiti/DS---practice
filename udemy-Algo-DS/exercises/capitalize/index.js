// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    let stringArray = str.split(" ");
    let newArray = [];
    stringArray.forEach(element => {
        newArray.push(element[0].toUpperCase() + element.slice(1));
    });
    return newArray.join(" ");
}

// function capitalize(str) {
//     let finalString = str[0].toUpperCase();
//     for (let i = 1; i < str.length; i++) {
//         if (str[i - 1] == " ") {
//             finalString = finalString + str[i].toUpperCase();
//         } else {
//             finalString = finalString + str[i];
//         }
//     }
//     return finalString;
// }

module.exports = capitalize;
