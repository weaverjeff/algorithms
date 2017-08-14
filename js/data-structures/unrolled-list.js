class UnrolledList {
   
    constructor(capacity = 5) {
        this.capacity = capacity;
        this.first = new Node(this.capacity);
    }

    get(value) {

    }

    insert(value) {

    }
}

class Node { 
    constructor(max) {
        this.values = new Array(max);
        this.maxSize = this.values.length;
        this.currentSize = 0;
        this.next = null;
    }
}
