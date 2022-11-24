export interface IGraph {
  toString: () => string;
  connect: (vertex1: any, vertex2: any) => boolean;
  getAdjacentNodes: (vertex: any) => any[];
}
