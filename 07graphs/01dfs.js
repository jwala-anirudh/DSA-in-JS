// const graph = {
//   a: ["b", "c"],
//   b: ["a", "c", "d"],
//   c: ["a", "b", "d"],
//   d: ["b", "c"],
//   e: ["f"],
//   f: ["e"],
// };

const graph = {
  a: ["b", "c"],
  b: ["d"],
  c: ["e"],
  d: [],
  e: ["b"],
  f: ["d"],
};

function depthFirstSearchItr(graph, start) {
  const stack = [start];
  const visited = new Set();

  while (stack.length > 0) {
    const node = stack.pop();

    if (!visited.has(node)) {
      console.log(node);
      visited.add(node);

      for (const neighbour of graph[node].slice().reverse()) {
        if (!visited.has(neighbour)) {
          stack.push(neighbour);
        }
      }
    }
  }
}

function depthFirstSearch(graph, node, visited = new Set()) {
  if (!visited.has(node)) {
    console.log(node);
    visited.add(node);

    for (const neighbour of graph[node]) {
      depthFirstSearch(graph, neighbour, visited);
    }
  }
}

depthFirstSearch(graph, "a");
console.log("-----------------");
depthFirstSearchItr(graph, "a");
