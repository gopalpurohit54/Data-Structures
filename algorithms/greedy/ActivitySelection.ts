export function activitySelection(
  startArray: number[],
  endArray: number[]
): number[] {
  const selectedActivities = [];
  let currentTime = 0;
  for (let i = 0; i < startArray.length; i++) {
    if (startArray[i] >= currentTime) {
      selectedActivities.push(i);
      currentTime = endArray[i]
    }
  }
  return selectedActivities;
}
