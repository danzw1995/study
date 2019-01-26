
class Array {
    constructor() {
        this.items = [];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }

    get(i) {
        if (i < 0 || i >= this.size()) {
            throw new Error('Illege index');
        }
        return this.items[i];
    }

    getFirst() {
        return this.get(0);
    }

    getLast() {
        return this.get(this.size() - 1);
    }

    set(i, ele) {
        if (i < 0 || i >= this.size()) {
            throw new Error('Illege index');
        }
        this.items[i] = ele;
    }

    add(i, ele) {
        if (i < 0 || i > this.size()) {
            throw new Error('add fail, mark sure index > 0 && index <= size')
        }
        for(var j = this.size(); j > i; j --) {
            this.items[j] = this.items[j - 1];
        }
        this.items[i] = ele;
    }

    addFirst(ele) {
        this.add(0, ele);
    }

    addLast(ele) {
        this.add(this.size(), ele);
    }

    remove(i, ele) {
        if (this.size() == 0) {
            throw new Error('array is empty');
        }
        var result = this.get(i);
        for (var j = i + 1; j < this.size(); j ++) {
            this.items[j - 1] = this.items[j];
        }
        this.items.length = this.size() - 1;
        return result;
    }
    
    removeFirst(ele) {
        return this.remove(0, ele);
    }

    removeLast(ele) {
        return this.remove(this.size() - 1, ele);
    }

    contains(ele) {
        for (var i = 0; i < this.size(); i ++) {
            if (this.items[i] === ele) {
                return true;
            }
        }
        return false;
    }

    findIndex(ele) {
        for (var i = 0; i < this.size(); i ++) {
            if (this.items[i] === ele) {
                return i;
            }
        }
        return -1;
    }

    toString() {
        var res = 'Array: [';
        for (var i = 0; i < this.size(); i ++) {
            res += this.get(i);
            if (i < this.size() - 1) {
                res += ','
            }
        }
        res += ']';
        return res;
    }
}