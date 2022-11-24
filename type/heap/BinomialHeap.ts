interface INode {
  order: number;
  data: number;
  parent: INode | null;
  child: INode | null;
  sibling: INode | null;
}

class Node implements INode {
  public order: number;
  public data: number;
  public parent: INode | null;
  public child: INode | null;
  public sibling: INode | null;
  constructor(data: number) {
    this.data = data;
    this.order = 0;
    this.parent = this.child = this.sibling = null;
  }
}

function mergeBinomialTree(tree1: INode, tree2: INode) {
  if (tree1.data < tree2.data) {
    tree2.parent = tree1;
    tree2.sibling = tree1.child;
    tree1.child = tree2;
    tree1.order += 1;
    return tree1;
  }
  tree1.parent = tree2;
  tree1.sibling = tree2.child;
  tree2.child = tree1;
  tree2.order += 1;
  return tree2;
}

function printNode(node: INode) {
  const tempNode = {
    order: node.order,
    data: node.data,
    child: node.child,
    sibling: node.sibling,
  };
  if (node.child) {
    tempNode.child = printNode(node.child) as any;
  }
  if (node.sibling) {
    tempNode.sibling = printNode(node.sibling) as any;
  }
  return tempNode;
}

export class BinomialHeap {
  public start: Node | null;
  public count: number;
  constructor() {
    this.start = null;
    this.count = 0;
  }

  toString() {
    if (!this.start) return "";
    return JSON.stringify(printNode(this.start));
  }

  insert(val: number): boolean {
    const newNode = new Node(val);
    newNode.sibling = this.start;
    this.start = newNode;
    this.arrange();
    this.count++;
    return true;
  }

  findMinNode(): INode | null {
    if (!this.start || this.count === 0) return null;
    let minNode = this.start;
    let currentNode = this.start.sibling;
    while (currentNode) {
      if (minNode.data > currentNode.data) {
        minNode = currentNode;
      }
      currentNode = currentNode.sibling;
    }
    return minNode;
  }

  delete(): any {
    const minNode = this.findMinNode();
    if (!minNode) return null;

    let currentNode = this.start;
    let prevNode = null;
    this.start = null;
    while (currentNode) {
      if (currentNode === minNode) {
        if (!this.start) this.start = currentNode.sibling;
        if (prevNode) prevNode.sibling = currentNode.sibling;
        break;
      }
      if (!this.start) {
        this.start = currentNode;
      }
      prevNode = currentNode;
      currentNode = currentNode.sibling;
    }

    const tempHeap = this.removeMinAndExtractHeap(minNode);
    if (tempHeap) this.union(tempHeap);
    return minNode.data;
  }

  removeMinAndExtractHeap(node: INode): INode | null {
    const minNode = node;
    let temp = node.child;
    let prev = null;
    while (temp) {
      const next = temp.sibling;
      temp.sibling = prev;
      prev = temp;
      temp = next;
    }
    return prev;
  }

  union(otherStartNode: INode) {
    let heap1Node = this.start;
    let heap2Node: INode | null = otherStartNode;
    this.start = null;
    let currentNode = null;
    while (heap1Node && heap2Node) {
      let nodeToAppend;
      if (heap1Node.order < heap2Node.order) {
        nodeToAppend = heap1Node;
        heap1Node = heap1Node.sibling;
      } else {
        nodeToAppend = heap2Node;
        heap2Node = heap2Node.sibling;
      }
      if (!this.start || !currentNode) {
        this.start = currentNode = nodeToAppend;
      } else {
        currentNode.sibling = nodeToAppend;
        currentNode = nodeToAppend;
      }
    }

    while (heap1Node) {
      if (!this.start || !currentNode) {
        this.start = currentNode = heap1Node;
      } else {
        currentNode.sibling = heap1Node;
        currentNode = heap1Node;
      }
      heap1Node = heap1Node.sibling;
    }

    while (heap2Node) {
      if (!this.start || !currentNode) {
        this.start = currentNode = heap2Node;
      } else {
        currentNode.sibling = heap2Node;
        currentNode = heap2Node;
      }
      heap2Node = heap2Node.sibling;
    }
    this.arrange();
  }

  arrange() {
    let currentNode = this.start;
    let previousNode: INode | null = null;
    while (!!currentNode) {
      if (
        currentNode.order === currentNode.sibling?.order &&
        !(
          currentNode.order === currentNode.sibling?.order &&
          currentNode.sibling?.order === currentNode.sibling?.sibling?.order
        )
      ) {
        const nextNextSibling = currentNode.sibling.sibling;
        currentNode = mergeBinomialTree(currentNode, currentNode.sibling);
        currentNode.sibling = nextNextSibling;
        if (!previousNode) {
          this.start = currentNode;
        } else {
          previousNode.sibling = currentNode;
        }
      } else {
        previousNode = currentNode;
        currentNode = currentNode.sibling;
      }
    }
  }
}
