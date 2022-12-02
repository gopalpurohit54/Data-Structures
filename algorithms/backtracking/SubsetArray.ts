const subsetArray: number[][] = [];
export function arraySubset(array: number[]): number[][] {
  findSubset(array, [], 0);
  return subsetArray;
}

function findSubset(array: number[], subset: number[], index: number) {
  for (let i = index; i < array.length; i++) {
    subsetArray.push([...subset, array[i]]);
    findSubset(array, [...subset, array[i]], i + 1);
  }
}
