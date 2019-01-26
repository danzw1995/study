
class Queue extends Array {
    constructor() {
        super();
        this.items = [];
    }

    isEmpty() {
        return super.isEmpty.call(this);
    }

    getSize() {
        return this.size();
    }

    enqueue(ele) {
        this.addLast(ele);
    }

    dequeue() {
        return this.removeFirst();
    }

    head() {
        return this.getFirst();
    }

    tail () {
        return this.getLast();
    }

    toString() {
        var res = 'Queue: head[';
        for (var i = 0 ; i < this.getSize(); i ++) {
            res += this.get(i);
            if (i < this.getSize() - 1) {
                res += ', ';
            }
        }
        res += ']tail';
        return res;
    }
}