class Node {
  key: number;
  left: Node | null;
  right: Node | null;
  constructor(key: number) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

class BSTree {
  root: Node | null;
  path: string;
  queue: Node[];
  constructor() {
    this.root = null;
    this.path = "";
    this.queue = [];
  }
  insert(k: number) {
    const n = new Node(k);
    let x = this.root;
    let y = null;
    while (x) {
      y = x;
      if (n.key < x.key) {
        x = x.left;
      } else {
        x = x.right;
      }
    }
    if (y === null) {
      this.root = n;
    } else if (n.key < y.key) {
      y.left = n;
    } else {
      y.right = n;
    }
  }
  /* breath first traversal */
  bf(n: Node | null) {
    if (n) {
      this.queue.push(n);
      for (let i = 0; i < this.queue.length; i++) {
        const currentNode = this.queue[i];
        if (currentNode) {
          if (currentNode.left) {
            this.queue.push(currentNode.left);
          }
          if (currentNode.right) {
            this.queue.push(currentNode.right);
          }
        }
      }
    }
  }
  /* depth first traversal */
  dfPreorder(n: Node | null) {
    /* root left right */
    if (n) {
      this.path += `${n.key} `;
      this.dfPreorder(n.left);
      this.dfPreorder(n.right);
    }
  }
  dfInorder(n: Node | null) {
    /* left root right */
    if (n) {
      this.dfInorder(n.left);
      this.path += `${n.key} `;
      this.dfInorder(n.right);
    }
  }
  dfPostorder(n: Node | null) {
    /* left right root  */
    if (n) {
      this.dfPostorder(n.left);
      this.dfPostorder(n.right);
      this.path += `${n.key} `;
    }
  }
  /* search recursively */
  search1(n: Node | null, k: number): Node | null | undefined {
    if (n === null || n.key === k) {
      return n;
    }
    if (k < n.key) {
      return this.search1(n.left, k);
    } else {
      return this.search1(n.right, k);
    }
  }
  /* search iteratively */
  search2(n: Node | null, k: number): Node | null {
    while (n !== null && n.key !== k) {
      if (k < n.key) {
        n = n.left;
      } else {
        n = n.right;
      }
    }
    return n;
  }
}

export { BSTree };
