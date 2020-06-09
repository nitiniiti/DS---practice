class Node {
    element;
    next;
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

class LinkedList {
    length = 0;
    head = null;

    size = function () {
        return this.length;
    }

    head = function () {
        return this.head;
    }


    add = function (element) {
        var node = new Node(element);
        if (this.head == null) {
            this.head = node;
        } else {
            var currentNode = this.head;

            while (currentNode.next) {
                currentNode = currentNode.next;
            }

            currentNode.next = node;
        }
        this.length++;
    }


    remove = function (element) {
        var currentNode = this.head;
        var previousNode;

        if (currentNode.element == element) {
            this.head = currentNode.next;
        } else {
            while (currentNode.element != element) {
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
            previousNode.next = currentNode.next;
        }
        this.length--;
    }

    empty = function () {
        return this.length === 0;
    }


    indexOf = function (element) {
        var currentNode = this.head;
        var index = -1;

        while (currentNode) {
            index++;
            if (currentNode.element == element) {
                return index;
            }
            currentNode = currentNode.next;
        }

        return -1;
    }

    elementAt = function (index) {
        var currentNode = this.head;
        var count = 0;
        while (count < index) {
            count++;
            currentNode = currentNode.next;
        }
        return currentNode.element;
    };


    addAt = function (index, element) {
        var node = new Node(element);
        var currentNode = this.head;
        var previousNode;
        var currentIndex = 0;

        if (index > this.length) {
            return false;
        }

        if (index === 0) {
            node.next = currentNode;
            this.head = node;
        } else {
            while (currentIndex < index) {
                currentIndex++;
                previousNode = currentNode;
                currentNode = currentNode.next;
            }

            previousNode.next = node;
            node.next = currentNode;
        }
        this.length++;
    }


    removeAt = function (index) {
        var currentNode = this.head;
        var currentIndex = 0;
        var previousNode;

        if (index < 0 || index >= this.length) {
            return null;
        }

        if (index === 0) {
            this.head = currentNode.next;
        } else {
            while (currentIndex < index) {
                currentIndex++;
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
            previousNode.next = currentNode.next;
        }
        this.length--;
        return currentNode.element;
    }

}



var conga = new LinkedList();
conga.add('Kitten');
conga.add('Puppy');
conga.add('Dog');
conga.add('Cat');
conga.add('Fish');
console.log(conga.size());
console.log(conga.removeAt(3));
console.log(conga.size());
