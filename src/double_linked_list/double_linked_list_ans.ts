class Node {
  val: number;
  next: Node | null;
  prev: Node | null;

  constructor(val: number) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoubleLinkedList {
  head: Node | null;
  tail: Node | null;
  length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  /* insert to the end of the list */
  push(val: number) {
    const node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else if (this.tail) {
      node.prev = this.tail;
      this.tail.next = node;
      this.tail = node;
    }
    this.length += 1;
  }
  /* insert to the head of the list */
  unshift(val: number) {
    const node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }
    this.length += 1;
  }
  /* remove from the end of the list */
  pop() {
    if (this.length) {
      if (this.length === 1) {
        this.head = null;
        this.tail = null;
      } else if (this.tail) {
        const prevNode = this.tail.prev;
        if (prevNode) {
          prevNode.next = null;
          this.tail.prev = null;
          this.tail = prevNode;
        }
      }
      this.length -= 1;
    }
  }
  /* remove from the head of the list */
  shift() {
    if (this.length) {
      if (this.length === 1) {
        this.head = null;
        this.tail = null;
      } else if (this.head) {
        const nextNode = this.head.next;
        if (nextNode) {
          nextNode.prev = null;
          this.head.next = null;
          this.head = nextNode;
        }
      }
      this.length -= 1;
    }
  }
  /* check the valid index in insertAt and removeAt func */
  isValidIdx(type: string, idx: number) {
    if (type === "insert") {
      return idx <= this.length && idx >= 0;
    } else if (type === "remove") {
      return idx < this.length && idx >= 0;
    } else {
      console.error("Invalid type");
    }
  }
  /* insert at idx position
   * definition of the valid index: 0 <= idx <= length
   * i.e. arr = [1, 2, 3] so idx can be 0, 1, 2, 3
   * ex: idx = 1, val = 4 arr = [1, 2, 3] => [1, 2, '4', 3]
   */
  insertAt(idx: number, val: number) {
    if (this.isValidIdx("insert", idx)) {
      if (idx === 0) {
        this.unshift(val);
      } else if (idx === this.length || idx === this.length + 1) {
        this.push(val);
      } else {
        const node = new Node(val);
        let cur = this.head;
        for (let i = 0; i < idx; i++) {
          cur = cur ? cur.next : null;
        }
        if (cur && cur.next) {
          node.prev = cur;
          node.next = cur.next;
          cur.next.prev = node;
          cur.next = node;
          this.length += 1;
        }
      }
    } else {
      console.error("Invalid index");
    }
  }
  /* remove at idx position
   * definition of the valid index: 0 <= idx < length
   * i.e. arr = [1, 2, 3], idx can be 0, 1, 2
   * ex: idx = 2, arr = [1, 2, '3', 4] => [1, 2, 4]
   * */
  removeAt(idx: number) {
    if (this.isValidIdx("remove", idx)) {
      if (idx === 0) {
        this.shift();
      } else if (idx === this.length - 1) {
        this.pop();
      } else {
        let cur = this.head;
        for (let i = 0; i < idx; i++) {
          cur = cur ? cur.next : null;
        }
        if (cur && cur.prev && cur.next) {
          const prevNode = cur.prev;
          const nextNode = cur.next;
          prevNode.next = nextNode;
          nextNode.prev = prevNode;
          this.length -= 1;
        }
      }
    } else {
      console.error("Invalid index");
    }
  }
  /* get value array in the linked list */
  iterateAll(): number[] {
    const a: number[] = [];
    if (this.head && this.tail) {
      let cur = this.head;
      a.push(cur.val);
      while (cur.next) {
        cur = cur.next;
        a.push(cur.val);
      }
    }
    return a;
  }
}

export { DoubleLinkedList };
