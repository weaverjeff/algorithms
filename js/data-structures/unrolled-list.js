class UnrolledList {
   
    constructor(capacity = 8) {
        this.nodeCapacity = capacity;
        this.first = new Node(this.nodeCapacity);
        this.last = this.first;
        this.size = 0;
    }
    isEmpty() {
        return size === 0;
    }
    
    contains(value) {
        return this.indexOf(value) !== -1;
    }
    indexOf(value) {
        let node = this.first;
        let index = 0;
        while(node) { 
            for (var i = 0; i < node.values.length; i++) {
                var element =  node.values[i];
                if (value === element) {
                    return index + i;
                }
            }
            index += this.nodeCapacity;
            node = node.next;
        }
        return -1;
    }
    
    insert(value) {
        this.insertIntoNode(this.last, this.last.size, value);
    }

    insertIntoNode(node, size, value) {
        //check if the node is full
        if (node.size === this.nodeCapacity) {
            let newNode = Node(this.nodeCapacity);
            let elementsToMove = this.nodeCapacity / 2;
            let startIndex = this.nodeCapacity - elementsToMove;
            let i;
            for (i = 0; i < elementsToMove; i++) {
                newNode.values[i] = node.values[startIndex + i];
                node.values[startIndex + i] = null;
            }
            node.size -= elementsToMove;
            newNode.size = elementsToMove;
            // insert the new node into the list
            //todo:  is this right??
            newNode.next = node.next;
            node.next = newNode;

            if (node == this.last) {
                this.last = newNode;
            }
             // check whether the element should be inserted into
            // the original node or into the new node
            if (size > node.size) {
                node = newNode;
                size -= node.size;
            }

        }
        
        for (let i = node.size; i > size; i--) {
            node.values[i] = node.values[i - 1];
        }
        node.values[size] = value;
        node.size++;
        this.size++;
    }

}

class Node { 
    constructor(nodeCapacity) {
        this.values = new Array(nodeCapacity);
        this.size = 0;
        this.next = null;
    }
}
