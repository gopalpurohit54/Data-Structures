function calculateMiddle(low: number, high: number) {
  return low + Math.floor((high - low) / 2);
}

export function binarySearch(
  array: number[],
  searchElement: number
): number | null {
  let low = 0;
  let high = array.length - 1;
  let middle = calculateMiddle(low, high);

  while (low <= high) {
    if (array[middle] > searchElement) {
      high = middle - 1;
      middle = calculateMiddle(low, high);
    } else if (array[middle] < searchElement) {
      low = middle + 1;
      middle = calculateMiddle(low, high);
    } else {
      return array[middle];
    }
  }

  return null;
}
