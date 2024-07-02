class Stack {
  constructor() {
    this.stack = [];
  }

  // add value to top of stack / last of array
  push(data) {
    this.stack.push(data);
  }

  // remove value from top of stack / last of array
  pop() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }

    this.stack.pop();
  }

  // get top value of stack / last from array
  peek() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }

    return this.stack[this.stack.length - 1];
  }

  // check if stack is empty
  isEmpty() {
    return this.stack.length === 0;
  }

  // get size of stack
  size() {
    return this.stack.length;
  }

  // clear stack
  clear() {
    this.stack = [];
  }

  // check if stack contains data
  contains(element) {
    return this.stack.includes(element);
  }

  // reverse stack
  reverse() {
    return this.stack.reverse();
  }

  // print stack
  printStack() {
    let str = "";
    for (let i = 0; i < this.stack.length; i++) {
      str += this.stack[i] + "\n";
    }
    return str;
  }
}

// Usage Example
const myStack = new Stack();
myStack.push(4);
myStack.push(2);
myStack.push(6);
myStack.pop();
console.log(myStack.printStack());
