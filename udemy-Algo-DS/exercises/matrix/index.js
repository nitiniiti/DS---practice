// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
    let finalArray = [];
    for (let i = 0; i < n; i++) {
        finalArray.push([]);
    }
    let startRow = 0;
    let endCol = n - 1;
    let endRow = n - 1;
    let startCol = 0;
    let counter = 1;

    while (startRow <= endRow && startCol <= endCol) {

        for (let j = startCol; j <= endCol; j++) {
            finalArray[startRow][j] = counter;
            counter++;
        }
        startRow++;

        for (let i = startRow; i <= endRow; i++) {
            finalArray[i][endCol] = counter;
            counter++;
        }
        endCol--;

        for (let j = endCol; j >= startCol; j--) {
            finalArray[endRow][j] = counter;
            counter++;
        }
        endRow--;

        for (let i = endRow; i >= startRow; i--) {
            finalArray[i][startCol] = counter;
            counter++
        }
        startCol++;
    }

    return finalArray;

}

module.exports = matrix;
