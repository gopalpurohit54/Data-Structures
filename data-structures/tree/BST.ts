interface ITreeNode {
  val: any
  left: ITreeNode | null
  right: ITreeNode | null
}

class TreeNode implements ITreeNode {
  val: any
  left: ITreeNode | null
  right: ITreeNode | null

  constructor(val: any) {
    this.val = val
    this.left = null
    this.right = null
  }
}

interface IBST {
  root: ITreeNode | null
  insert: (val: any) => IBST
  find: (value: any) => ITreeNode | null
}

export class BST implements IBST {
  root: ITreeNode | null
  constructor() {
    this.root = null
  }

  insert(val: any) {
    const newNode = new TreeNode(val)
    if (!this.root) {
      this.root = newNode
      return this
    }
    let current = this.root
    while (true) {
      if (current.val > val) {
        if (!current.left) {
          current.left = newNode
          return this
        }
        current = current.left
      } else {
        if (!current.right) {
          current.right = newNode
          return this
        }
        current = current.right
      }
    }
  }

  find(val: any) {
    if (!this.root) return null
    let currentNode: ITreeNode | null = this.root
    while (currentNode) {
      if (currentNode.val == val) {
        return currentNode
      } else if (val < currentNode.val) {
        currentNode = currentNode.left
      } else {
        currentNode = currentNode.right
      }
    }
    return null
  }
}