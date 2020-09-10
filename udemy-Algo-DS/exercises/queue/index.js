// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

class Queue {
    queue = [];

    add = (element) => {
        this.queue.push(element);
        return element + " Added";
    }

    remove = () => {
        return this.queue.shift();
    }
}

module.exports = Queue;
