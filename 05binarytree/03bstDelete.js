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
   * Deletion of Node in BST
   *
   * 1. Left node (no children)
   * 2. 1 child
   * 3. 2 nodes
   *    in-order successor (smallest key in right subtree)
   *
   * @param {*} key value to delete
   */
  delete(key) {
    this.root = this.deleteNode(this.root, key);
  }

  /**
   * @param {*} node is my root
   * @param {*} key value to delete
   */
  deleteNode(node, key) {
    if (node === null) {
      return null;
    }

    // find the key in BST
    if (key < node.key) {
      // value to remove is less than root node
      node.left = this.deleteNode(node.left, key);
    } else if (key > node.key) {
      // value to remove is greater than root node
      node.right = this.deleteNode(node.right, key);
    } else {
      // leaf node
      if (node.left === null && node.right === null) {
        return null;
      } else if (node.left === null) {
        // 1 node
        return node.right;
      } else if (node.right === null) {
        // 1 node
        return node.left;
      } else {
        // 2 nodes

        // in-order successor (smallest key in right subtree)
        let tempNode = this.findMinNode(node.right);
        node.key = tempNode.key;
        node.right = this.deleteNode(node.right, tempNode.key);
      }
    }

    return node;
  }

  findMinNode(node) {
    while (node.left !== null) {
      node = node.left;
    }
    return node;
  }
}
