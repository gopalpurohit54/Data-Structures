import { Queue } from "./data-structures/queue/Queue";
import { Stack } from "./data-structures/stack/Stack";
import { SinglyList } from "./data-structures/list/SinglyList";
import { DoublyList } from "./data-structures/list/DoublyList";
import { BST } from "./data-structures/tree/BST";
import { CircularQueue } from "./data-structures/queue/CircularQueue";
import { MinHeap } from "./data-structures/heap/Heap";
import { DeQueue } from "./data-structures/queue/DeQueue";
import { BinomialHeap } from "./data-structures/heap/BinomialHeap";
import { AVL } from "./data-structures/tree/AVL";
import {
  UndirectedGraphList,
  UndirectedGraphMatrix,
} from "./data-structures/graph/UndirectedGraph";
import { DFS, BFS } from "./data-structures/graph/Traversal";
import {
  DirectedGraphList,
  DirectedGraphMatrix,
} from "./data-structures/graph/DirectedGraph";

// const newQueue = new Queue()
// newQueue.enqueue(1)
// newQueue.enqueue(2)
// console.log(newQueue.dequeue())
// newQueue.enqueue(3)
// console.log(newQueue)

// const newStack = new Stack()
// newStack.push(1)
// newStack.push(2)
// newStack.push(3)
// console.log(newStack.pop())
// console.log(newStack)

// const newList = new SinglyList()
// newList.push(1)
// newList.push(2)
// newList.push(3)
// console.log(newList.shift())
// newList.unshift(10)
// console.log(newList)
// console.log(newList.set(2, 99))
// console.log(newList.get(2))
// console.log(newList)
// console.log(newList.reverse())

// const doubleList = new DoublyList()
// doubleList.push(1)
// doubleList.push(2)
// doubleList.push(3)
// doubleList.unshift(99)
// doubleList.insert(1, 60)
// console.log(doubleList.length, 'hello')
// console.log(doubleList.remove(0), doubleList.length, '/hello')
// console.log(doubleList.remove(0), doubleList.length, '/hello')
// console.log(doubleList.remove(1), '/hello')
// console.log(doubleList)

// const bst = new BST()
// bst.insert(5)
// bst.insert(2)
// bst.insert(7)
// bst.insert(6)
// console.log(bst)

// const cq = new CircularQueue(5)
// cq.enqueue(1)
// cq.enqueue(2)
// cq.enqueue(3)
// cq.enqueue(4)
// cq.enqueue(5)
// cq.dequeue()
// cq.enqueue(6)
// cq.dequeue()
// cq.enqueue(7)
// console.log(cq)

// const dq = new DeQueue(5)
// dq.insertFront(1)
// dq.insertFront(2)
// dq.insertRear(3)
// dq.insertRear(4)
// dq.insertFront(5)
// console.log(dq.deleteFront())
// console.log(dq.deleteFront())
// console.log(dq.deleteFront())
// console.log(dq.deleteRear())
// console.log(dq.deleteRear())
// console.log(dq)

// const heap = new MinHeap(5)
// heap.insert(99)
// console.log(heap)
// heap.insert(44)
// console.log(heap)
// heap.insert(12)
// console.log(heap)
// heap.insert(6)
// console.log(heap)
// heap.insert(2)
// console.log(heap)
// console.log(heap.peek())

// const bHeap = new BinomialHeap()
// console.log("9")
// bHeap.insert(9)
// console.log("5")
// bHeap.insert(5)
// console.log("6")
// bHeap.insert(6)
// console.log("15")
// bHeap.insert(15)
// console.log("22")
// bHeap.insert(22)
// console.log("14")
// bHeap.insert(14)
// console.log("10")
// bHeap.insert(10)
// console.log(bHeap.toString())
// console.log(bHeap.delete())
// console.log(bHeap.toString())

//

// const avl = new AVL()
// avl.insert(33)
// avl.insert(13)
// avl.insert(53)
// avl.insert(11)
// avl.insert(21)
// avl.insert(61)
// avl.insert(8)
// avl.insert(9)
// avl.delete(61)
// avl.print()

// const graph = new UndirectedGraphList(["0", "1", "2", "3", "4"]);
// graph.connect("0", "1");
// graph.connect("0", "2");
// graph.connect("0", "3");
// graph.connect("1", "2");
// graph.connect("2", "4");

// console.log(graph);
// console.log(BFS(graph, '0'))

// const graph = new UndirectedGraphMatrix(5);
// graph.connect(0, 1);
// graph.connect(0, 2);
// graph.connect(0, 3);
// graph.connect(1, 2);
// graph.connect(2, 4);
// console.log(graph);
// console.log(DFS(graph, 0));

// const graph = new DirectedGraphList(["0", "1", "2", "3", "4"]);
// graph.connect("0", "1");
// graph.connect("0", "2");
// graph.connect("0", "3");
// graph.connect("1", "2");
// graph.connect("2", "4");

// console.log(graph);
// console.log(DFS(graph, "0"));

const graph = new DirectedGraphMatrix(5);
graph.connect(0, 1);
graph.connect(0, 2);
graph.connect(0, 3);
graph.connect(1, 2);
graph.connect(2, 4);
console.log(graph);
console.log(DFS(graph, 0));