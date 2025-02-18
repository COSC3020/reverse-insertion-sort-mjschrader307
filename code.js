function insertionSortReverse(array) {
  const n = array.length;

  // For every element in the array (back to front)
  for (let i = n - 2; i >= 0; i--) {
    // arr[i:n-1] is sorted

    let val = array[i];
    let j;

    for (j = i; j < n - 1 && array[j + 1] < val; j++) {
      array[j] = array[j + 1];
    }

    array[j] = val;
  }
}
