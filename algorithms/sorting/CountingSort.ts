import { findMax } from "../../utils";

export function countingSort(array: number[]): number[] {
  const max = findMax(array);
  if (max <= 0) throw new Error("Works on positive number only.");

  const countArray = new Array(max + 1);
  for (let element of array) {
    countArray[element] = (countArray[element] || 0) + 1;
  }

  let sum = 0;
  for (let i = 0; i <= max; i++) {
    countArray[i] = (countArray[i] || 0) + sum;
    sum = countArray[i];
  }

  const output = new Array(array.length);
  for (let i = array.length - 1; i >= 0; i--) {
    output[countArray[array[i]] - 1] = array[i];
    countArray[array[i]]--;
  }

  return output;
}
