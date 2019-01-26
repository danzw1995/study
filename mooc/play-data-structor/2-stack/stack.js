
class Stack extends Array{
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

    top() {
        if (this.isEmpty()) {
            return null;
        }
        return this.getLast();
    }

    push(ele) {
        this.addLast(ele);
    }

    pop() {
        return this.removeLast();
    }

    toString() {
        var str = 'Stack: [';
        for (var i = 0; i < this.getSize(); i ++) {
            str += this.get(i);
            if (i < this.getSize() - 1) {
                str += ',';
            }
        }
        str += ']top';
        return str;
    }
}