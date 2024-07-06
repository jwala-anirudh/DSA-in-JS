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

LinkedList.prototype.insertAtBeginning = function (data) {
  const newNode = new Node(data);
  this.head = newNode;
};

LinkedList.prototype.insertAtEnd = function (data) {
  const newNode = new Node(data);
  if (this.head === null) {
    this.head = newNode;
    return;
  }

  let last = this.head;
  while (last.next !== null) {
    last = last.next;
  }
  last.next = newNode;
};

LinkedList.prototype.insertAfter = function (prevNode, data) {
  if (!prevNode) {
    return;
  }

  const newNode = new Node(data, prevNode.next);
  prevNode.next = newNode;
};
