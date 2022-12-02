const graphColors: Array<number | undefined> = [];
export function graphColoring(
  graph: number[][],
  colors: number,
  index: number
): boolean {
  if (index === graph.length) {
    if (isSafe(graph)) return true;
    return false;
  }

  for (let c = 0; c < colors; c++) {
    graphColors[index] = c;
    if (graphColoring(graph, colors, index + 1)) return true;
    graphColors[index] = undefined;
  }

  return false;
}

function isSafe(graph: number[][]): boolean {
  for (let i = 0; i < graph.length; i++) {
    for (let j = 0; j < graph.length; j++) {
      if (graph[i][j] === 1 && graphColors[i] === graphColors[j]) return false;
    }
  }
  return true;
}
