/**
 * @param {number[][]} grid
 * @return {number}
 *
 * Given a 0-indexed n x n integer matrix grid,
 * return the number of pairs (ri, cj) such that
 * row ri and column cj are equal.
 *
 * A row and column pair is considered equal if
 * they contain the same elements in the same
 * order (i.e., an equal array).
 */
function equalPairs(grid) {
  const n = grid.length;
  const rowMap = new Map();

  for (let i = 0; i < n; i++) {
    const rowStr = grid[i].join(",");
    rowMap.set(rowStr, (rowMap.get(rowStr) || 0) + 1);
  }

  let count = 0;

  for (let j = 0; j < n; j++) {
    let colArr = [];
    for (let i = 0; i < n; i++) {
      colArr.push(grid[i][j]);
    }
    const colStr = colArr.join(",");

    if (rowMap.has(colStr)) {
      count += rowMap.get(colStr);
    }
  }

  return count;
}
