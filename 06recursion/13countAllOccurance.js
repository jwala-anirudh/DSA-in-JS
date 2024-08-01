// [1, 2, 4, 2, 4, 2, 6]
// key = 2

function itrCountKeyInArr(arr, key) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === key) {
      count += 1;
    }
  }

  return count;
}

function countKeyInArr(arr, key, index = 0) {
  if (index >= arr.length) {
    return 0;
  }

  return (arr[index] === key ? 1 : 0) + countKeyInArr(arr, key, index + 1);
}
