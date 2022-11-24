import { IGraph } from "./Graph.interface";

export function DFS(graph: IGraph, start: any, visitedNodes?: Set<any>) {
  if (!visitedNodes) {
    visitedNodes = new Set<any>();
  }
  visitedNodes.add(start);

  const adjacentNodes = graph.getAdjacentNodes(start);
  for (const adjacentNode of adjacentNodes) {
    if (visitedNodes.has(adjacentNode)) continue;
    DFS(graph, adjacentNode, visitedNodes);
  }

  return visitedNodes;
}

export function BFS(graph: IGraph, start: any) {
  const visitedNodes = new Set<any>();
  visitedNodes.add(start);

  const nodesToVisit = graph.getAdjacentNodes(start);
  while (nodesToVisit.length > 0) {
    const currentNode = nodesToVisit.shift() as any;
    if (visitedNodes.has(currentNode)) continue;

    visitedNodes.add(currentNode);
    nodesToVisit.push(...graph.getAdjacentNodes(currentNode));
  }

  return visitedNodes;
}
