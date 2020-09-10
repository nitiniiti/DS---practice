// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null) {
        this.data = data
        this.next = next
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst = (data) => {
        const node = new Node(data, this.head);
        this.head = node;
    }

    size = () => {
        let count = 0;
        let currentNode = this.head;
        while (currentNode) {
            count++;
            currentNode = currentNode.next;
        }
        return count;
    }

    getFirst = () => {
        return this.head;
    }

    getLast = () => {
        let currentNode = this.head;
        if (!currentNode) {
            return null;
        } else {
            while (currentNode.next) {
                currentNode = currentNode.next;
            }
            return currentNode;
        }
    }

    clear = () => {
        this.head = null;
    }

    removeFirst = () => {
        if (!this.head) {
            return;
        }
        this.head = this.head.next;
    }

    removeLast = () => {
        if (!this.head) {
            return;
        } else {
            let currentNode = this.head;
            let previousNode = this.head;
            if (!currentNode.next) {
                this.head = null;
                return;
            } else {
                while (currentNode.next) {
                    previousNode = currentNode;
                    currentNode = currentNode.next;
                }
                previousNode.next = null;
            }
        }
    }

    insertLast = (data) => {
        let node = new Node(data);
        if (!this.head) {
            this.head = node;
            return;
        } else {
            let lastNode = this.getLast();
            lastNode.next = node;
        }
    }

    getAt = (index) => {
        let counter = 0;
        let currentNode = this.head;
        if (!this.head) {
            return null;
        } else {
            while (currentNode) {
                if (index == counter) {
                    return currentNode;
                }
                currentNode = currentNode.next;
                counter++;
            }
            return null;
        }
    }

    removeAt = (index) => {
        if (!this.head) {
            return;
        }

        if (index === 0) {
            this.head = this.head.next;
        } else {
            let previousNode = this.getAt(index - 1);
            if (previousNode && previousNode.next) {
                previousNode.next = previousNode.next.next;
            } else {
                return;
            }
        }
    }

    insertAt = (data, index) => {
        let node = new Node(data);
        if (index == 0) {
            if (this.head) {
                node.next = this.head;
                this.head = node;
            } else {
                this.head = node;
            }
        } else {
            let previousNode = this.getAt(index - 1) || this.getLast();
            node.next = previousNode.next;
            previousNode.next = node;
        }
    }

    forEach = (fn) => {
        let currentNode = this.head;
        while (currentNode) {
            fn(currentNode);
            currentNode = currentNode.next;
        }
    }

    *[Symbol.iterator]() {
        let node = this.head;
        while (node) {
            yield node;
            node = node.next;
        }
    }



}

module.exports = { Node, LinkedList };
