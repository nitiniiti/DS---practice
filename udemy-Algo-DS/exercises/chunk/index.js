// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// function chunk(array, size) {
//     let arrayLength = array.length;
//     let finalArray = [];
//     if (size > arrayLength) {
//         finalArray.push(array);
//     } else {
//         // let numberOfPossibleArrays = parseInt(arrayLength / size);
//         for (let i = 0; i < arrayLength; i = i + size) {
//             let newArray = array.splice(0, size);
//             finalArray.push(newArray);
//         }
//     }
//     return finalArray;
// }

// function chunk(array, size) {
//     let arrayLength = array.length;
//     let finalArray = [];
//     if (size > arrayLength) {
//         finalArray.push(array);
//     } else {
//         for (let i = 0; i < arrayLength; i = i + size) {
//             let newArray = array.slice(i, i + size);
//             finalArray.push(newArray);
//         }
//     }
//     return finalArray;
// }


function chunk(array, size) {
    let arrayLength = array.length;
    let finalArray = [];
    if (size > arrayLength) {
        finalArray.push(array);
    } else {
        let newChunk = [];
        array.forEach(element => {
            if (newChunk.length == size) {
                finalArray.push(newChunk);
                newChunk = [element];
            } else {
                newChunk.push(element);
            }
        });
        if (newChunk.length > 0) {
            finalArray.push(newChunk);
        }
    }

    return finalArray;
}

// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3);

module.exports = chunk;
