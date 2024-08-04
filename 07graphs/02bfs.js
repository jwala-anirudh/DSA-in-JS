const graph = {
  a: ["b", "c"],
  b: ["a", "c", "d"],
  c: ["a", "b", "d"],
  d: ["b", "c"],
  e: ["f"],
  f: ["e"],
};

function breadthFirstSearch(graph, start) {
  const queue = [start];
  const visited = new Set();
  console.log(start);
  visited.add(start);

  while (queue.length > 0) {
    const node = queue.shift();

    for (const neighbour of graph[node]) {
      if (!visited.has(neighbour)) {
        console.log(neighbour);
        visited.add(neighbour);
        queue.push(neighbour);
      }
    }
  }
}

breadthFirstSearch(graph, "a");
