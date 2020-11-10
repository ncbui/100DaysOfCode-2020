/** Node: node for a singly linked list. */

class Node {
  val = null;
  next = null;

  constructor(val) {
    this.val = val;
  }
}

/** LinkedList: connects nodes in singly linked list */

class LinkedList {
  head = null;
  tail = null;
  length = 0;

  constructor(vals = []) {
    for (let val of vals) this.push(val);
  }

  /** averageRecursive(): return an average of all values in a linked list*/

  averageRecursive() {
    if (!this.length) return 0;   

    let head = this.head;

    return this._recursion(head);
  }

  _recursion(head) {
    if (head == null) return 0;

    return (head.val / this.length) + this._recursion(head.next);
  }

  /** average(): return an average of all values in the list */

  average() {
    if (this.length === 0) return 0;

    let sum = 0;
    let currentNode = this.head;

    while (currentNode != null) {
      sum += currentNode.val;
      currentNode = currentNode.next;
    }
    
    return sum / this.length;
    // runtime: O(n)
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val);
    if (this.tail === null) {
      // if list is empty, add first node
      this.head = newNode;      
      this.tail = newNode;
    } else {
      this.tail.next = newNode; // adds node to existing tail
      this.tail = newNode;      // sets tail to newest node
    }
    
    this.length++;
    // runtime: O(n), has to traverse to all nodes to reach end
  }
}

module.exports = LinkedList;