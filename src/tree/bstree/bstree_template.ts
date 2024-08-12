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
  insert(k: number) { }
  /* breath first traversal */
  bf(n: Node | null) { }
  /* depth first traversal */
  dfPreorder(n: Node | null) {
    /* root left right */
  }
  dfInorder(n: Node | null) {
    /* left root right */
  }
  dfPostorder(n: Node | null) {
    /* left right root  */
  }
  /* search recursively */
  search1(n: Node | null, k: number): Node | null | undefined { }
  /* search iteratively */
  search2(n: Node | null, k: number): Node | null { }
}

export { BSTree };
