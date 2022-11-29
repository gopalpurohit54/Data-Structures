import { insertionSort } from "./InsertionSort";
import { findMinAndMax } from "../../utils";

/**
 * If elements of array are integers than uncomment line number 16, 17 and 24
 * and comment line number 21
 */
export function bucketSort(array: number[], bucketCount: number): number[] {
  const buckets = new Array(bucketCount);

  for (let i = 0; i < buckets.length; i++) {
    buckets[i] = [];
  }

  // If array elements are integers
  // const { min, max } = findMinAndMax(array);
  // const range = Math.ceil((max + 1 - min) / bucketCount);

  for (let element of array) {
    // If array element ranges from 0 to 1
    const index = Math.floor(element * bucketCount);

    // If array elements are integers
    // let index = Math.floor(element / range);

    buckets[index].push(element);
  }
  for (let i = 0; i < buckets.length; i++) {
    insertionSort(buckets[i]);
  }

  let sortedIndex = 0;
  for (let bucket of buckets) {
    for (let element of bucket) {
      array[sortedIndex] = element;
      sortedIndex++;
    }
  }

  return array;
}
