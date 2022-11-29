function partition(array: number[], left: number, right: number): number {
  const pivot = array[right];
  let counter1 = left;
  let counter2 = left;
  while (counter2 < right) {
    if (array[counter2] > pivot) {
      counter2++;
    } else {
      if (counter1 !== counter2) {
        const temp = array[counter1];
        array[counter1] = array[counter2];
        array[counter2] = temp;
      }
      counter1++;
      counter2++;
    }
  }
  if (array[counter1] > pivot) {
    array[right] = array[counter1];
    array[counter1] = pivot;
    return counter1;
  }
  return right;
}

export function quickSort(array: number[], left: number, right: number) {
    console.log(left, right)
  if (left < right) {
    let middle = partition(array, left, right);
    quickSort(array, left, middle - 1);
    quickSort(array, middle + 1, right);
  }
  return array;
}
