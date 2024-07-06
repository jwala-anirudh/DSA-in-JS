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

LinkedList.prototype.deleteFirstNode = function () {
  if (!this.head) {
    return;
  }

  this.head = this.head.next;
};

LinkedList.prototype.deleteLastNode = function () {
  // if list is empty
  if (!this.head) {
    return;
  }

  if (!this.head.next) {
    // delete the only available node
    this.head = null;
    return;
  }

  let secondLast = this.head;
  while (secondLast.next.next) {
    secondLast = secondLast.next;
  }
  secondLast.next = null;
};

LinkedList.prototype.deleteByKey = function (key) {
  // if list is empty
  if (!this.head) {
    return;
  }

  // key found at head
  if (this.head.data === key) {
    this.head = this.head.next;
    return;
  }

  let current = this.head;
  while (current.next !== null) {
    if (current.next.data === key) {
      current.next = current.next.next;
      return;
    }
    current = current.next;
  }
};
