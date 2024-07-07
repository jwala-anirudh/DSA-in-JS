class BSTNode {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  /**
   * @param {*} key value to insert
   *
   * perform insertion operation on BST
   */
  insert(key) {
    const newNode = new BSTNode(key);

    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  /**
   * @param {*} node consider as root node
   * @param {*} newNode node to insert
   */
  insertNode(node, newNode) {
    // value to insert is smaller than root node, add as left node
    if (newNode.key < node.key) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      // value to insert in greater than root node, add as right node
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }
}
