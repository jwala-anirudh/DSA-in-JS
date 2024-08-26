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

DoublyLinkedList.prototype.deleteFirstNode = function () {
  // Empty list
  if (!this.head) {
    return;
  }

  // Only one value is present
  if (this.head === this.tail) {
    this.head = null;
    this.tail = null;
    return;
  }

  this.head = this.head.next;
  this.head.prev = null;
};

DoublyLinkedList.prototype.deleteLastNode = function () {
  // Empty list
  if (!this.tail) {
    return;
  }

  // Only one value is present
  if (this.head === this.tail) {
    this.head = null;
    this.tail = null;
    return;
  }

  this.tail = this.tail.prev;
  this.tail.next = null;
};
