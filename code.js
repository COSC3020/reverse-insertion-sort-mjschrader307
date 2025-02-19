function swap(arr, i1, i2) {
  const tmp = arr[i1];
  arr[i1] = arr[i2];
  arr[i2] = tmp;
}

function insertionSortReverse(array) {
  const n = array.length;

  if (n <= 1) return array;

  // For every element in the array (back to front)
  for (let i = n - 2; i >= 0; i--) {
    // arr[i:] is sorted

    for (let j = i; j < n && array[j] > array[j + 1]; j++) {
      swap(array, j, j + 1);
    }
  }
}
