const weightUsed: number[] = [];
export function subsetSum(weights: number[], target: number) {
    calculateSum(weights, target, 0)
  return weightUsed;
}

function calculateSum(weights: number[], target: number, currentIndex: number): number {
  if (currentIndex >= weights.length) return 0;
  
  for (let i = currentIndex; i < weights.length; i++) {
    if (weights[i] === target) {
        weightUsed.push(weights[i])
        return weights[i]
    } else if (weights[i] < target) {
        const totalWeight = weights[i] + calculateSum(weights, target - weights[i], currentIndex + 1)
        if (totalWeight === target) {
            weightUsed.push(weights[i])
            return totalWeight
        }         
    }

  }
  return 0;
}
