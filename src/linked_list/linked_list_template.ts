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
  push(val: number) { }
  /* insert to the head of the list */
  unshift(val: number) { }
  /* remove from the end of the list */
  pop() { }
  /* remove from the head of the list */
  shift() { }
  /* check the valid index in insertAt and removeAt func */
  isValidIdx(type: string, idx: number) { }
  /* insert at idx position
   * definition of the valid index: 0 <= idx <= length
   * i.e. arr = [1, 2, 3] so idx can be 0, 1, 2, 3
   * ex: val = 4 , idx = 1, arr = [1, 2, 3] => [1, 2, '4', 3]
   */
  insertAt(idx: number, val: number) { }
  /* remove at idx position
   * definition of the valid index: 0 <= idx < length
   * i.e. arr = [1, 2, 3], idx can be 0, 1, 2
   * ex: idx = 2, arr = [1, 2, '3', 4] => [1, 2, 4]
   * */
  removeAt(idx: number) { }
  /* get value array in the linked list */
  iterateAll(): number[] { }
}

export { LinkedList };
