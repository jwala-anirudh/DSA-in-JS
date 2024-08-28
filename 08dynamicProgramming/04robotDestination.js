function countPaths(grid = [[], []], row = 0, column = 0, memo = {}) {
  const position = row + "," + column;

  // check for array bounds for overflow
  if (
    row >= grid.length ||
    column >= grid[0].length ||
    grid[row][column] === "X"
  ) {
    return 0;
  }

  // check if you have arrived at destination
  if (row === grid.length - 1 && column === grid[0].length - 1) {
    return 1;
  }

  // return the memo result from diary
  if (position in memo) {
    return memo[position];
  }

  memo[position] =
    countPaths(grid, row + 1, column, memo) +
    countPaths(grid, row, column + 1, memo);

  return memo[position];
}
