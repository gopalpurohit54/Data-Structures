export function linearSearch(
  array: number[],
  searchElement: number
): number | null {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === searchElement) return array[i];
  }
  return null;
}
