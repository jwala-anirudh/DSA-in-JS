function shortestPath(edges = [], start, destination) {
  const graph = createGraph(edges);
  const queue = [[start, 0]];
  const visited = new Set([start]);

  while (queue.length > 0) {
    const [node, distance] = queue.shift(); // extract first value of the queue

    // base condition check
    if (node === destination) {
      return distance;
    }

    // process the child
    for (const neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push([neighbor, distance + 1]);
      }
    }
  }
}

// to create a graph from the edges
function createGraph(edges) {
  const graph = {};

  for (const edge of edges) {
    const [a, b] = edge;

    if (!(a in graph)) {
      graph[a] = [];
    }

    if (!(b in graph)) {
      graph[b] = [];
    }

    graph[a].push(b);
    graph[b].push(a);
  }
  return graph;
}

const edges = [
  ["a", "b"],
  ["b", "c"],
  ["c", "d"],
];

shortestPath(edges, "a", "d");
