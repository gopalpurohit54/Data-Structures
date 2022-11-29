function maxHeapify(array: number[], size: number, parent: number) {
    let largest = parent;
    let left = parent * 2 + 1;
    let right = parent * 2 + 2;
  if (left < size && array[left] > array[largest]) {
    largest = left;
  }

  if (right < size && array[right] > array[largest]) {
    largest = right;
  }

  if (largest !== parent) {
    const temp = array[largest];
    array[largest] = array[parent];
    array[parent] = temp;
    maxHeapify(array, size, largest);
  }
}

export function heapSort(array: number[]) {
  // Heapify the tree
  for (let i = Math.floor((array.length - 1) / 2); i >= 0; i--) {
    maxHeapify(array, array.length, i);
  }

  // Delete swap top and end of heap and decrease heap size
  for (let i = 0; i < array.length; i++) {
    const temp = array[0]
    array[0] = array[array.length - 1 - i]
    array[array.length - 1 - i] = temp
    maxHeapify(array, array.length - i - 1, 0)
  }
  return array
}
