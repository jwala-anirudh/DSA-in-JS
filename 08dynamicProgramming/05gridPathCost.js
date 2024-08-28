function maxPathCost(grid = [[], []], row = 0, column = 0, memo = {}) {
  const position = row + "," + column;

  // return the memo result from diary
  if (position in memo) {
    return memo[position];
  }

  // check for array bounds for overflow
  if (row >= grid.length || column >= grid[0].length) {
    // in case of min cost return 'Infinity'

    // in case of max cost
    return -Infinity;
  }

  // check if you have arrived at destination
  if (row === grid.length - 1 && column === grid[0].length - 1) {
    return grid[row][column];
  }

  const downPaths = maxPathCost(grid, row + 1, column, memo);
  const rightPaths = maxPathCost(grid, row, column + 1, memo);

  memo[position] = grid[row][column] + Math.max(downPaths, rightPaths);

  return memo[position];
}
