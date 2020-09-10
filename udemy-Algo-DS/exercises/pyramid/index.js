// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// function pyramid(n) {
//     for (let i = 1; i <= n; i++) {
//         let string = " ".repeat(n - i) + "#".repeat(2 * i - 1) + " ".repeat(n - i);
//         console.log(string);
//     }
// }


function pyramid(n) {
    let middle = parseInt((2 * n - 1) / 2);
    for (let i = 0; i < n; i++) {
        let string = "";
        for (let j = 0; j < 2 * n - 1; j++) {
            if (j > (middle + i) || j < (middle - i)) {
                string = string + " ";
            } else {
                string = string + "#";
            }
        }
        console.log(string);
    }
}


module.exports = pyramid;
