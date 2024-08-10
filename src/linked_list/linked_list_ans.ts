class Node {
  val: number;
  next: Node | null;

  constructor(val: number) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  head: Node | null;
  length: number;
  constructor() {
    this.head = null;
    this.length = 0;
  }
  /* insert to the end of the list */
  push(val: number) {
    const node = new Node(val);
    /* no head */
    if (!this.head) {
      this.head = node;
    } else {
      let cur = this.head;
      while (cur.next) {
        cur = cur.next;
      }
      cur.next = node;
    }
    this.length += 1;
  }
  /* insert to the head of the list */
  unshift(val: number) {
    const node = new Node(val);
    if (!this.head) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.length += 1;
  }
  /* remove from the end of the list */
  pop() {
    if (this.head) {
      if (this.length === 1) {
        this.head = null;
      } else {
        let cur = this.head;
        while (cur.next?.next) {
          cur = cur.next;
        }
        cur.next = null;
      }
      this.length -= 1;
    }
  }
  /* remove from the head of the list */
  shift() {
    if (this.head) {
      if (this.length === 1) {
        this.head = null;
      } else {
        this.head = this.head.next;
      }
      this.length -= 1;
    }
  }
  isValidIdx(type: string, idx: number) {
    if (type === "insert") {
      return idx <= this.length && idx >= 0;
    } else if (type === "remove") {
      return idx < this.length && idx >= 0;
    } else {
      console.error("Invalid type")
    }
  }
  /* insert at idx position
   * definition of the valid index: 0 <= idx <= length
   * i.e. arr = [1, 2, 3] so idx can be 0, 1, 2, 3
   * ex: val = 4 , idx = 1, arr = [1, 2, 3] => [1, 2, '4', 3]
   */
  insertAt(idx: number, val: number) {
    if (this.isValidIdx("insert", idx)) {
      if (idx === 0) {
        this.unshift(val);
      } else if (idx === this.length || idx === this.length - 1) {
        this.push(val);
      } else {
        if (this.head) {
          const node = new Node(val);
          let cur = this.head;
          for (let i = 0; i < idx; i++) {
            if (cur.next) {
              cur = cur.next;
            }
          }
          node.next = cur.next;
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
        if (this.head) {
          let cur = this.head;
          for (let i = 0; i < idx - 1; i++) {
            if (cur.next) {
              cur = cur.next
            }
          }
          if (cur.next?.next) {
            cur.next = cur.next.next;
          }
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
    if (this.head) {
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

export { LinkedList };
