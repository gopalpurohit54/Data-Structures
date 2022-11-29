import { findMax } from "../../utils";

export function radixSort(array: number[]): number[] {
  let max = findMax(array);
  if (max <= 0) throw new Error("Works on positive number only.");

  let divisor = 1;
  while (Math.floor(max / divisor) > 0) {
    const count = new Array(10).fill(0);
    for (let i = 0; i < array.length; i++) {
        const index = Math.floor(array[i] / divisor);
        count[index % 10] += 1;
    }
    let sum = 0;
    for (let i = 0; i < count.length; i++) {
        count[i] = count[i] + sum;
        sum = count[i];
    }
    
    const output = new Array(array.length);
    for (let i = array.length - 1; i >= 0; i--) {
      const index = Math.floor(array[i] / divisor);
      output[count[index % 10] - 1] = array[i];
      count[index % 10]--
    }
    array = output;

    divisor *= 10;
  }

  return array;
}
