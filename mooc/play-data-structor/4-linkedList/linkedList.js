
class Node {
    constructor(val, next) {
        this.val = val;
        this.next = next || null;
    }
}

class LinkedList {
    constructor() {
        this.size = 0;
        this.head = null;
    }

    isEmpty() {
        return this.size === 0;
    }

    getSize() {
        return this.size;
    }

    add(index, val) {
        if (index < 0 || index > this.size) {
            throw new Error('Illege index');
        }
        var cur = null;
        if (index == 0) {
            this.head = new Node(val, this.head);
        } else {
            cur = this.head;
            for (var i = 0; i < index - 1; i ++) {
                cur = cur.next;
            }
            cur.next = new Node(val, cur.next);
        }
        this.size ++;
    }

    addFirst(val) {
        this.add(0, val);
    }

    addLast(val) {
        this.add(this.size, val);
    }

    remove(index) {
        var cur = null;
        var node = null;
        if (index < 0 || index >= this.size) {
            throw new Error('Illege index');
        }
        if (this.size == 1) {
            this.head = null;
            this.size = 0;
        } else {
            if (index == 0) {
                node = this.head;
                this.head = node.next;
                node.next = null;
                this.size --;
                return node;
            }
            cur = this.head;
            for (var i = 0; i < index - 1; i ++) {
                cur = cur.next;
            }
            node = cur.next;
            cur.next = node.next;
            node.next = null;
            this.size --;
            return node;
        }
    }

    removeFirst() {
        return this.remove(0);
    }
    
    removeLast() {
        return this.remove(this.size - 1);
    }

    get(index) {
        var cur = null;
        if (index < 0 || index >= this.size) {
            throw new Error('Illege index');
        }
        cur = this.head;
        for (var i = 0; i < index; i ++) {
            cur = cur.next;
        }
        return cur;
    }

    getFirst() {
        return this.get(0);
    }

    getLast() {
        return this.get(this.size - 1);
    }

    set(index, val) {
        var cur = null;
        if (index < 0 || index >= this.size) {
            throw new Error('Illege index');
        }
        cur = this.head;
        for (var i = 0; i < index; i ++) {
            cur = cur.next;
        }
        cur.val = val;
    }

    contains(val) {
        var cur = this.head;
        while (cur != null) {
            if (cur.val == val) {
                return true;
            }
            cur = cur.next;
        }
        return false;
    }

    toString() {
        var res = 'linkedList: head[';
        var cur = this.head;
        while (cur != null) {
            res += cur.val;
            if (cur.next != null) {
                res += '->'
            }
            cur = cur.next;
        }
        res += ']';
        return res;
    }
}