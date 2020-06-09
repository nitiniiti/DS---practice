// Stack - LIFO

// functions - Push - to add, Pop - to remove, peek - to view the top element, size - size of stack

class Stack {
    count = 0;
    storage = {};

    push = function (element) {
        this.storage[this.count] = element;
        this.count++;
    }

    pop = function (element) {
        if (this.count === 0) {
            return undefined;
        }
        this.count--;
        var result = this.storage[this.count];
        delete this.storage[this.count];
        return result;
    }

    size = function () {
        return this.count;
    }

    peek = function () {
        return this.storage[this.count - 1];
    }
}


var myStack = new Stack();
myStack.push(1);
myStack.push(12);
myStack.push(4);
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());