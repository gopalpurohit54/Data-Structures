interface INode {
  key: number
  left: INode | null
  right: INode | null
  height: number
  count: number
}

class TreeNode implements INode {
  public key: number
  public left: INode | null
  public right: INode | null
  public height: number
  public count: number
  constructor(key: number) {
    this.key = key
    this.left = this.right = null
    this.height = 1
    this.count = 1
  }

  get balanceFactor(): number {
    return getHeight(this.left) - getHeight(this.right)
  }

  static leftRotate(a: INode): INode {
    const b = a.right as INode
    a.right = b.left
    b.left = a
    a.height = calculateHeight(a)
    b.height = calculateHeight(b)
    return b
  }

  static rightRotate(a: INode): INode {
    const b = a.left as INode
    a.left = b.right
    b.right = a
    a.height = calculateHeight(a)
    b.height = calculateHeight(b)
    return b
  }
}

function calculateHeight(node: INode) {
  return Math.max(getHeight(node.left), getHeight(node.right)) + 1
}

function getHeight(node: INode | null) {
  return node?.height || 0
}

function getBalanceFactor(node: INode) {
  return getHeight(node.left) - getHeight(node.right)
}

function insert(parent: INode | null, key: number): INode {
  if (!parent) return new TreeNode(key)

  if (parent.key === key) {
    parent.count++
    return parent
  } else if (key < parent.key) {
    parent.left = insert(parent.left, key)
  } else if (key > parent.key) {
    parent.right = insert(parent.right, key)
  }

  // Rotate if subtree is not balanced
  const balanceFactor = getHeight(parent.left) - getHeight(parent.right)
  if (balanceFactor > 1 && parent.left) {
    if (key < parent.left.key) {
      parent = TreeNode.rightRotate(parent)
    } else if (key > parent.left.key) {
      parent.left = TreeNode.leftRotate(parent.left)
      parent = TreeNode.rightRotate(parent)
    }
  } else if (balanceFactor < -1 && parent.right) {
    if (key < parent.right.key) {
      parent.right = TreeNode.rightRotate(parent.right)
      parent = TreeNode.leftRotate(parent)
    } else if (key > parent.right.key) {
      parent = TreeNode.leftRotate(parent)
    }
  }

  parent.height = calculateHeight(parent)
  return parent
}

function getInorderSuccessor(node: INode): INode | null {
  if (!node.right) return null
  let current = node.right
  while (current.left) {
    current = current.left
  }
  return current
}

function deleteNode(parent: INode, key: number): INode | null {
  console.log(parent.key, '/called')
  if (parent.key === key) {
    if (parent.count > 1) {
      parent.count--
      return parent
    }

    let temp: INode| null = parent.left
    if (temp && parent.right) {
      const inorderSuccessor = getInorderSuccessor(parent) as INode
      const parentKey = parent.key
      const parentCount = parent.count
      parent.key = inorderSuccessor.key
      parent.count = inorderSuccessor.count
      inorderSuccessor.key = parentKey
      inorderSuccessor.count = parentCount
      
      parent.right = deleteNode(parent.right, key)
      temp = parent
    } else if (!temp) {
      temp = parent.right
    }

    if (!temp) return null
    parent = temp
  } else if (key < parent.key && parent.left) {
    parent.left = deleteNode(parent.left, key)
  } else if (key > parent.key && parent.right) {
    parent.right = deleteNode(parent.right, key)
  }
  
// Rotate if subtree is not balanced
  const balanceFactor = getBalanceFactor(parent)
console.log(parent.key, balanceFactor)
  if (balanceFactor > 1 && parent.left) {
    if (getBalanceFactor(parent.left) > 0) {
      parent = TreeNode.rightRotate(parent)
    } else {
      parent.left = TreeNode.leftRotate(parent.left)
      parent = TreeNode.rightRotate(parent)
    }
  } else if (balanceFactor < -1 && parent.right) {
    if (getBalanceFactor(parent.right) >= 0) {
      parent.right = TreeNode.rightRotate(parent.right)
      parent = TreeNode.leftRotate(parent)
    } else {
      parent = TreeNode.leftRotate(parent)
    }
  }

  parent.height = calculateHeight(parent)
  return parent
}

function printNode(node: INode, end: boolean, indent: string) {
  if (end) {
    console.log(`${indent}R----${node.key}(${node.count})`)
  } else {
    console.log(`${indent}L----${node.key}(${node.count})`)
  }
  indent += '   '

  if (node.left) {
    printNode(node.left, false, indent)
  }

  if (node.right) {
    printNode(node.right, true, indent)
  }
}

export class AVL {
  private root: INode | null

  constructor() {
    this.root = null
  }

  insert(key: number) {
    this.root = insert(this.root, key)
  }

  delete(key: number) {
    if (!this.root) return

    this.root = deleteNode(this.root, key)
  }

  print() {
    if (!this.root) {
      console.log('')
      return
    }
    printNode(this.root, true, '')
  }
}