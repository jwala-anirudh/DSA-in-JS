class Node {
  constructor(data, next = null, prev = null) {
    this.data = data;
    this.next = next;
    this.prev = prev;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
}

DoublyLinkedList.prototype.reverse = function () {
  let current = this.head;
  let temp = null;

  while (current !== null) {
    // swapping
    temp = current.prev;
    current.prev = current.next;
    current.next = temp;

    // move to next node
    current = current.prev;
  }

  if (temp !== null) {
    this.tail = this.head;
    this.head = temp.prev;
  }
};
