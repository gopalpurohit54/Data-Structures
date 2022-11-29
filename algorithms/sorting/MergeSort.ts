function merge(
  array: number[],
  left: number,
  right: number,
  middle: number
): number[] {
  const leftArray = array.slice(left, middle + 1);
  const rightArray = array.slice(middle + 1, right + 1);

  let pointer = left;
  while (leftArray.length > 0 && rightArray.length > 0) {
    if (leftArray[0] < rightArray[0]) {
      array[pointer] = leftArray.shift() as number;
    } else {
      array[pointer] = rightArray.shift() as number;
    }
    pointer++;
  }
  while (leftArray.length > 0) {
    array[pointer] = leftArray.shift() as number;
    pointer++;
  }
  while (rightArray.length > 0) {
    array[pointer] = rightArray.shift() as number;
    pointer++;
  }
  return array;
}

export function mergeSort(
  array: number[],
  left: number,
  right: number
): number[] {
  if (left < right) {
    const middle = left + Math.floor((right - left) / 2);
    mergeSort(array, left, middle);
    mergeSort(array, middle + 1, right);

    merge(array, left, right, middle);
  }

  return array;
}
