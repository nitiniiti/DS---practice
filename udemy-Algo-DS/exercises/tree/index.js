// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
    constructor(data) {
        this.data = data
        this.children = []
    }

    add = (data) => {
        const node = new Node(data);
        this.children.push(node);
    }

    remove = (data) => {
        this.children = this.children.filter(node => {
            return node.data !== data;
        })
    }
}

class Tree {
    constructor() {
        this.root = null;
    }

    traverseBF = (fn) => {
        let myArray = [];
        myArray.push(this.root);
        let finalArray = [];

        while (myArray.length > 0) {
            fn(myArray[0]);
            myArray.push(...myArray[0].children);
            myArray.shift();
        }
        return finalArray;
    }


    traverseDF = (fn) => {
        let myArray = [];
        myArray.push(this.root);
        let finalArray = [];

        while (myArray.length) {
            let forwardNode = myArray.shift();
            myArray.unshift(...forwardNode.children);
            fn(forwardNode);
        }
    }
}

module.exports = { Tree, Node };
