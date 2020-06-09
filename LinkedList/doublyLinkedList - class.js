class Node {
    element;
    next;
    previous;
    constructor(element) {
        this.element = element;
        this.next = null;
        this.previous = null;
    }
}

class DoublyLinkedList {
    length = 0;
    head = null;
    tail = null;

    add = function (element) {
        var node = new Node(element);
        if (this.head == null) {
            this.head = node;
        } else {
            this.tail.next = node;
            node.previous = this.tail;
        }
        this.tail = node;
        this.length++;
    }

    size = function () {
        return this.length;
    }
}


var conga = new DoublyLinkedList();
conga.add('Kitten');
conga.add('Puppy');
conga.add('Dog');
conga.add('Cat');
conga.add('Fish');
console.log(conga.size());