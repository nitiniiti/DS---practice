var hashFunction = (string, max) => {
    var hash = 0;
    for (var i = 0; i < string.length; i++) {
        hash += string.charCodeAt(i);
    }
    return hash % max;
}

class HashTable {
    storage = [];
    storageLimit = 4;

    print = function () {
        console.log(this.storage);
    }

    add = function (key, value) {
        var index = hashFunction(key, this.storageLimit);
        if (this.storage[index] === undefined) {
            this.storage[index] = [[key, value]]
        } else {
            var inserted = false;
            for (var i = 0; i < this.storage[index].length; i++) {
                if (this.storage[index][0] === key) {
                    this.storage[index][1] = value;
                    inserted = true;
                }
            }

            if (!inserted) {
                this.storage[index].push([key, value]);
            }
        }
    }


    remove = function (key) {
        var index = hashFunction(key, this.storageLimit);
        if (this.storage[index].length === 1 && this.storage[index][0][0] === key) {
            delete this.storage[index];
        } else {
            for (var i = 0; i < this.storage[index].length; i++) {
                if (this.storage[index][i][0] === key) {
                    delete this.storage[index][i];
                }
            }
        }
    }


    lookup = function (key) {
        var index = hashFunction(key, this.storageLimit);
        if (this.storage[index] === undefined) {
            return undefined;
        } else {
            for (var i = 0; i < this.storage[index].length; i++) {
                if (this.storage[index][i][0] === key) {
                    return this.storage[index][i][1];
                }
            }
        }
    }


}


// console.log(hashFunction('ttin', 10));
let ht = new HashTable();
ht.add('tim', 'tim');
ht.add('kim', 'kim');
ht.add('mim', 'mim');
ht.add('nim', 'nim');
console.log(ht.lookup('nim'));
ht.print();