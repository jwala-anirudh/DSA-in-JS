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

DoublyLinkedList.prototype.insertAtBeginning = function (data) {
  const newNode = new Node(data, this.head, null);

  if (this.head !== null) {
    this.head.prev = newNode;
  }

  this.head = newNode;

  if (this.tail === null) {
    this.tail = newNode;
  }
};

DoublyLinkedList.prototype.insertAtEnd = function (data) {
  const newNode = new Node(data, null, this.tail);

  if (this.tail !== null) {
    this.tail.next = newNode;
  }

  this.tail = newNode;

  if (this.head === null) {
    this.head = newNode;
  }
};

DoublyLinkedList.prototype.insertAfter = function (prevNode, data) {
  if (prevNode === null) {
    console.log("Invalid previous node");
    return;
  }

  const newNode = new Node(data, prevNode.next, prevNode);

  if (prevNode.next !== null) {
    prevNode.next.prev = newNode;
  }

  prevNode.next = newNode;

  if (newNode.next === null) {
    this.tail = newNode;
  }
};
