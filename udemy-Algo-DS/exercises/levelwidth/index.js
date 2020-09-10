// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
    let myArray = [root, null];
    let widthArray = [];
    let counter = 0;

    while (myArray.length) {
        let node = myArray.shift();
        if (node === null) {
            if (myArray.length > 0) {
                myArray.push(null);
            }
            widthArray.push(counter);
            counter = 0;
        } else {
            counter++;
            if (node && node.children.length) {
                myArray.push(...node.children);
            }
        }
    }

    return widthArray;
}


const Node = require('./node');

const root = new Node(0);
root.add(1);
root.add(2);
root.add(3);
root.children[0].add(4);
root.children[2].add(5);

levelWidth(root)

module.exports = levelWidth;
