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

LinkedList.prototype.search = function (key) {
  let current = this.head;

  while (current) {
    if (current.data === key) {
      return true;
    }
    current = current.next;
  }

  return false;
};

LinkedList.prototype.printList = function () {
  let current = this.head;
  const listValues = [];

  while (current) {
    listValues.push(current.data);
    current = current.next;
  }

  return listValues.join(" -> ");
};
