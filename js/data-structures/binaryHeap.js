
class BinaryHeap {
     constructor() {
        this.values = [];
    }
     
    add(value) {
        if (this.values.length === 0) {
            this.values.push(value);
        } else {
            this.values.push(value);
            this.moveUp(this.values.length - 1, value);
        }
    }
     
    deleteRoot() {
        this.values[0] = this.values.pop();
        this.moveDown(0, this.values[0])
    }
      
    hasChildren(index) {
        return this.leftChildIndex(index) >= 0 || this.rightChildIndex(index) >= 0 ? true : false;
    }
    
    leftChildIndex(index) {
        let leftIndex = index * 2 + 1;
        return leftIndex <= this.values.length - 1 ? leftIndex : -1;
    }
    
    rightChildIndex(index) {
        let rightIndex = index * 2 + 2;
        return rightIndex <= this.values.length - 1 ? rightIndex : -1;
    }
    
    hasParent(index) {
        return index > 0;
    }
    
    getParentIndex(index) {
        if (!this.hasParent(index)) {
            return -1;
        }
        
        if (index === 1) return 0;

        return Math.ceil((index - 2) / 2);
    }
    
  
    swap(index1, index2) {
        log(`swap: ${index1}, ${index2}`);
        var temp = this.values[index1];
        this.values[index1] = this.values[index2];
        this.values[index2] = temp;
    }
    moveDown(index, value) {
        // if current node has two children: find the smallest of them. 
        //If heap property is broken, then swap current node's value and selected child value; sift down the child.
        
        //if current node has no children, sifting is over;
        if (!this.hasChildren(index)) return;
        
        //if current node has one child: check, if heap property is broken, then swap current node's value and child value; sift down 
        //the child;
        while(this.hasChildren(index)) {
            let leftChildIndex = this.leftChildIndex(index);
            let rightChildIndex = this.rightChildIndex(index);
            log(`hasChildren loop, index=${index}, leftChildIndex=${leftChildIndex}, rightChildIndex=${rightChildIndex}`);
            
            
            if (leftChildIndex !== -1 && rightChildIndex === -1) { //has a left child, but not right
                if (this.shouldSwap(this.values[leftChildIndex], this.values[index])) {
                //if (this.values[index] > this.values[leftChildIndex]) {
                    this.swap(index, leftChildIndex);
                    index = leftChildIndex;                          
                } else {
                    return;
                }
            } else if (rightChildIndex !== -1 && leftChildIndex === -1) { //has a right child, not not a left
                 if (this.shouldSwap(this.values[rightChildIndex], this.values[index])) {
                    this.swap(index, rightChildIndex);
                    index = rightChildIndex;                          
                } else {
                    return;
                }
            } else {
                // if current node has two children: find the smallest of them. 
                //If heap property is broken, then swap current node's value and 
                // selected child value; sift down the child.
                let leftValue = this.values[leftChildIndex];
                let rightValue = this.values[rightChildIndex];
                if (this.shouldSwap(leftValue, rightValue)) { //smallest if min heap, biggest if max heap
                    if (this.shouldSwap(leftValue, this.values[index])) {
                        this.swap(index, leftChildIndex);
                        index = leftChildIndex;
                    } else {
                        return;
                    }
                } else {
                    if (this.shouldSwap(rightValue, this.values[index])) {
                        this.swap(index, rightChildIndex);
                        index = rightChildIndex;
                    } else {
                        return;
                    }
                }
            }
        }
           
        
    }
    
    moveUp(index, value) {
        while (this.hasParent(index)) {
            let parentIndex = this.getParentIndex(index)
            const parent = this.values[parentIndex];
            if (this.shouldSwap(value, parent)) {
                this.swap(parentIndex, index);
                index = parentIndex;
            } else {
                return;
            }    
        }
        
    }
  
}

module.exports = BinaryHeap;