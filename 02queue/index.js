class Queue {
  constructor() {
    this.queue = [];
  }

  // Add data to the queue from one-end
  enqueue(data) {
    this.queue.push(data);
  }

  // Remove data from the queue from another-end
  dequeue() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }

    return this.queue.shift();
  }

  // Check if empty
  isEmpty() {
    return this.queue.length === 0;
  }

  // Get top value
  peek() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }

    return this.queue[0];
  }

  // Get size of queue
  size() {
    return this.queue.length;
  }

  // Clear queue
  clear() {
    this.queue = [];
  }

  // Check if queue contains data
  contains(element) {
    return this.queue.includes(element);
  }

  // Print queue
  printQueue() {
    let str = "";
    for (let i = 0; i < this.queue.length; i++) {
      str += this.queue[i] + "\n";
    }
    return str;
  }
}

// Usage example
const myQueue = new Queue();

myQueue.enqueue(20);
myQueue.enqueue(10);
myQueue.enqueue(50);
myQueue.enqueue(70);
myQueue.dequeue();

console.log(myQueue.printQueue());
