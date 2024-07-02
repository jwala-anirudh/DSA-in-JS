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

/**
 * 01 LinkedList insert at start and end
 */
LinkedList.prototype.insertAtBeginning = function (data) {
  // Take data
  // Convert it to node
  const newNode = new Node(data);

  // Add this node to head
  this.head = newNode;
};

LinkedList.prototype.insertAtEnd = function (data) {
  // Take data
  // Convert it to node
  const newNode = new Node(data);

  // Check,
  // If head is null -> Add
  if (!this.head) {
    this.head = newNode;
    return;
  }

  // If head is NOT null
  // Move to end -> Add

  // Assume head is last
  // Verify (last.next == null)
  // If yes, then Add
  // If not, udpate last with new value
  let last = this.head;

  while (last.next) {
    last = last.next;
  }

  last.next = newNode;
};

/**
 * 02 LinkedList insert at given node
 */
LinkedList.prototype.insertAfter = function (prevNode, data) {
  if (!prevNode) {
    console.log("Previous node cannot be null");
    return;
  }

  const newNode = new Node(data, prevNode.next);
  prevNode.next = newNode;
};
