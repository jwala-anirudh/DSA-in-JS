class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

const treeSumBreathFirstSearch = (root) => {
  if (root === null) {
    return 0;
  }

  const queue = [root];
  let totalSum = 0;

  while (queue.length > 0) {
    const node = queue.shift();
    totalSum += node.key;

    if (node.left !== null) {
      queue.push(node.left);
    }

    if (node.right !== null) {
      queue.push(node.right);
    }
  }
};

const treeSumDepthFirstSearch = (root) => {
  if (root === null) {
    return 0;
  }

  return (
    root.key +
    treeSumDepthFirstSearch(root.left) +
    treeSumDepthFirstSearch(root.right)
  );
};
