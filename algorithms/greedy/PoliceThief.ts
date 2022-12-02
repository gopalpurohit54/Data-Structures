export function policeThief(array: Array<"P" | "T">, maxDistance: number) {
  const policeIndex = [];
  const thiefIndex = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "P") {
      policeIndex.push(i);
    } else {
      thiefIndex.push(i);
    }
  }

  let pi = 0;
  let ti = 0;
  let thiefCaught = 0;
  while (pi < policeIndex.length && ti < thiefIndex.length) {
    const distance = policeIndex[pi] - thiefIndex[ti];
    if (Math.abs(distance) <= maxDistance) {
      ti++;
      pi++;
      thiefCaught++;
    } else if (distance < 0) {
      ti++;
    } else {
      pi++;
    }
  }
  return thiefCaught;
}
