import { IGraph } from "./Graph.interface";

export class DirectedGraphList implements IGraph {
  private data: {
    [vertex: string]: Set<string>;
  } = {};
  constructor(vertices: string[]) {
    for (const vertex of vertices) {
      this.data[vertex] = new Set<string>();
    }
  }

  toString() {
    return JSON.stringify(this.data);
  }

  connect(vertex1: string, vertex2: string) {
    if (!this.data[vertex1] || !this.data[vertex2]) return false;

    this.data[vertex1].add(vertex2);
    return true;
  }

  getAdjacentNodes(vertex: string) {
    if (!this.data[vertex]) return [];

    return Array.from(this.data[vertex]);
  }
}

export class DirectedGraphMatrix implements IGraph {
  private data: Array<Array<0 | 1>>;
  constructor(vertices: number) {
    this.data = new Array(vertices);
    for (let i = 0; i < vertices; i++) {
      this.data[i] = new Array(vertices).fill(0);
    }
  }

  /**
   * @todo implement the logic
   */
  toString(): string {
    return "";
  }

  hasNode(node: number) {
    return node < this.data.length && node >= 0;
  }

  connect(vertex1: number, vertex2: number): boolean {
    if (!this.hasNode(vertex1) || !this.hasNode(vertex2)) return false;

    this.data[vertex1][vertex2] = 1;
    return true;
  }

  getAdjacentNodes(vertex: number): number[] {
    if (!this.hasNode(vertex)) return [];

    const adjacentNodes = [];
    for (let i = 0; i < this.data[vertex].length; i++) {
      if (this.data[vertex][i] === 1) adjacentNodes.push(i);
    }

    return adjacentNodes;
  }
}
