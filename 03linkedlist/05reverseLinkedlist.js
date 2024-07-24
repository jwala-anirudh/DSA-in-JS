class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
}

LinkedList.prototype.reverseLinkedList = function () {
  let current = this.head;
  let prev = null;
  let next = null;

  while (current) {
    next = current.next;

    current.next = prev;
    prev = current;

    current = next;
  }

  this.head = prev;
};
