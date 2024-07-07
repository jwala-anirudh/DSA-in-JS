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

  // Tree Traversal methods
  inorderTraversal() {
    const result = [];
    this.inorder(this.root, result);
    return result;
  }

  inorder(node, result) {
    if (node !== null) {
      this.inorder(node.left, result);
      result.push(node.key);
      this.inorder(node.right, result);
    }
  }

  preorderTraversal() {
    const result = [];
    this.preorder(this.root, result);
    return result;
  }

  preorder(node, result) {
    if (node !== null) {
      result.push(node.key);
      this.preorder(node.left, result);
      this.preorder(node.right, result);
    }
  }

  postorderTraversal() {
    const result = [];
    this.postorder(this.root, result);
    return result;
  }

  postorder(node, result) {
    if (node !== null) {
      this.postorder(node.left, result);
      this.postorder(node.right, result);
      result.push(node.key);
    }
  }
}
