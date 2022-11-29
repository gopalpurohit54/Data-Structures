export function selectionSort(array: number[]): number[] {
  for (let i = 0; i < array.length; i++) {
    let min = i;
    for (let j = i + 1; j <= array.length - 1; j++) {
      if (array[min] > array[j]) {
        min = j;
      }
    }
    const temp = array[min];
    array[min] = array[i];
    array[i] = temp;
  }
  return array;
}
