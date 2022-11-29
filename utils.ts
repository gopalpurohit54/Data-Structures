export function findMax(array: number[]) {
  let max = -Infinity;
  for (let element of array) {
    if (element > max) max = element;
  }
  return max;
}

export function findMin(array: number[]): number {
  let min = Infinity;
  for (let element of array) {
    if (element < min) min = element;
  }
  return min;
}

export function findMinAndMax(array: number[]): { min: number; max: number } {
  let min = Infinity;
  let max = -Infinity;
  for (let element of array) {
    if (element < min) min = element;
    if (element > max) max = element;
  }
  return { min, max };
}
