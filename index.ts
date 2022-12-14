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
import { binarySearch } from "./algorithms/searching/BinarySearch";
import { linearSearch } from "./algorithms/searching/LinearSearch";
import { bubbleSort } from "./algorithms/sorting/BubbleSort";
import { selectionSort } from "./algorithms/sorting/SelectionSort";
import { insertionSort } from "./algorithms/sorting/InsertionSort";
import { mergeSort } from "./algorithms/sorting/MergeSort";
import { quickSort } from "./algorithms/sorting/QuickSort";
import { countingSort } from "./algorithms/sorting/CountingSort";
import { radixSort } from "./algorithms/sorting/RadixSort";
import { bucketSort } from "./algorithms/sorting/BucketSort";
import { heapSort } from "./algorithms/sorting/HeapSort";
import { placeQueen } from "./algorithms/backtracking/QueenProblem";
import { knightTour } from "./algorithms/backtracking/KinghtTour";
import { ratMaze } from "./algorithms/backtracking/RatMaze";
import { subsetSum } from "./algorithms/backtracking/SubsetSum";
import { arraySubset } from "./algorithms/backtracking/SubsetArray";
import { graphColoring } from "./algorithms/backtracking/GraphColouring";
import { activitySelection } from "./algorithms/greedy/ActivitySelection";
import { jobSequencing } from "./algorithms/greedy/JobSequencing";
import { policeThief } from "./algorithms/greedy/PoliceThief";

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

// const graph = new DirectedGraphMatrix(5);
// graph.connect(0, 1);
// graph.connect(0, 2);
// graph.connect(0, 3);
// graph.connect(1, 2);
// graph.connect(2, 4);
// console.log(graph);
// console.log(DFS(graph, 0));

// Searching
// const arr1 = [1, 2, 3, 4, 99, 12, 0];
// console.log(linearSearch(arr1, 1287));
// const arr2 = [3, 4, 5, 6, 7, 8, 9];
// console.log(binarySearch(arr2, 9));

//Sorting
// const arrToSort = [16, 6, 5, 12, 10, 9, 1];
// const arrToSort = [-2, 45, 0, 11, -9, 99, 28];
// console.log(bubbleSort(arrToSort))
// console.log(selectionSort(arrToSort))
// console.log(insertionSort(arrToSort))
// console.log(mergeSort(arrToSort, 0, arrToSort.length - 1))
// console.log(quickSort(arrToSort, 0, arrToSort.length - 1))
// console.log(countingSort(arrToSort))
// console.log(radixSort(arrToSort))
// const floatingArray = [0.78, 0.17, 0.3, 0.26, 0.72, 0.94, 0.21, 0.12, 0.23, 0.68]
// const floatingArray = [11, 9, 21, 8, 17, 19, 13, 1, 24, 12]
// console.log(bucketSort(floatingArray, 5))
// console.log(heapSort(arrToSort))

// Backtracking
// const chessBoard = [
//   [0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0],
// ];
// console.log(placeQueen(chessBoard, 0), chessBoard)
// console.log(knightTour(8))
// const maze: Array<Array<0|1>> = [
//   [1, 0, 0, 0],
//   [1, 1, 0, 1],
//   [0, 1, 0, 0],
//   [1, 1, 1, 1],
// ];
// console.log(ratMaze(maze, 0, 0))
// const weights = [15, 22, 14, 26, 32, 9, 16, 8]
// const target = 53
// console.log(arraySubset(weights).length)
// console.log(subsetSum(weights, target))
// const graph = [
//   [0, 1, 1, 1],
//   [1, 0, 1, 0],
//   [1, 1, 0, 1],
//   [1, 0, 1, 0],
// ];
// console.log(graphColoring(graph, 3, 0));
// let jobs = [
//   ["a", 2, 100],
//   ["b", 1, 19],
//   ["c", 2, 27],
//   ["d", 1, 25],
//   ["e", 3, 15],
// ];
// console.log(jobSequencing(jobs, 3))
let arr1: Array<"P" | "T"> = ["P", "T", "T", "P", "T"];
let k = 2;
console.log(policeThief(arr1, k));
let arr2: Array<"P" | "T"> = ["T", "T", "P", "P", "T", "P"];
k = 2;
console.log(policeThief(arr2, k));

let arr3: Array<"P" | "T"> = ["P", "T", "P", "T", "T", "P"];
k = 3;
console.log(policeThief(arr3, k));
