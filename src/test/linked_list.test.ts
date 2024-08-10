import { expect, test } from "vitest";
import { LinkedList } from "../linked_list/linked_list.ts";

/* sequential operations */
const ll = new LinkedList();

test("push 5 elements into list", () => {
  ll.push(1);
  ll.push(3);
  ll.push(5);
  ll.push(2);
  ll.push(10);
  expect(ll.iterateAll()).toEqual([1, 3, 5, 2, 10]);
  expect(ll.length).toEqual(5);
});

test("pop 2 elements from the list", () => {
  ll.pop();
  ll.pop();
  expect(ll.iterateAll()).toEqual([1, 3, 5]);
  expect(ll.length).toEqual(3);
});

test("unshift 2 elements from the begining of the list", () => {
  ll.unshift(14);
  ll.unshift(2);
  expect(ll.iterateAll()).toEqual([2, 14, 1, 3, 5]);
  expect(ll.length).toEqual(5);
});

test("shift 2 elements from the begining of the list", () => {
  ll.shift();
  ll.shift();
  expect(ll.iterateAll()).toEqual([1, 3, 5]);
  expect(ll.length).toEqual(3);
});

test("insert elements at specific index", () => {
  /* invalid index */
  ll.insertAt(4, 6);
  /* insert idx = 1, val = 6  */
  ll.insertAt(1, 6);
  expect(ll.iterateAll()).toEqual([1, 3, 6, 5]);
  expect(ll.length).toEqual(4);
  /* insert idx = 3, val = 8(insert at the end)  */
  ll.insertAt(3, 8);
  expect(ll.iterateAll()).toEqual([1, 3, 6, 5, 8]);
  expect(ll.length).toEqual(5);
  /* insert idx = 0, val = 0(insert at the start)  */
  ll.insertAt(0, 0);
  expect(ll.iterateAll()).toEqual([0, 1, 3, 6, 5, 8]);
  expect(ll.length).toEqual(6);
});

test("remove elements at specific index", () => {
  /* invalid index */
  ll.removeAt(7);
  /* remove idx = 2 */
  ll.removeAt(2);
  expect(ll.iterateAll()).toEqual([0, 1, 6, 5, 8]);
  expect(ll.length).toEqual(5);
  /* remove idx = (remove at the end) */
  ll.removeAt(4);
  expect(ll.iterateAll()).toEqual([0, 1, 6, 5]);
  expect(ll.length).toEqual(4);
  /* remove idx = (remove at the start) */
  ll.removeAt(0);
  expect(ll.iterateAll()).toEqual([1, 6, 5]);
  expect(ll.length).toEqual(3);
});

/* independent test */
test("handle operations on empty list", () => {
  const emptyList = new LinkedList();
  emptyList.pop();
  emptyList.shift();
  emptyList.insertAt(0, 5); // Valid index for inserting into empty list
  expect(emptyList.iterateAll()).toEqual([5]);
  emptyList.removeAt(0); // Removing the only element
  expect(emptyList.iterateAll()).toEqual([]);
  expect(emptyList.length).toEqual(0);
});

test("insert at index equal to current length", () => {
  const list = new LinkedList();
  list.push(1);
  list.push(2);
  list.insertAt(2, 3); // Should behave like push
  expect(list.iterateAll()).toEqual([1, 2, 3]);
  expect(list.length).toEqual(3);
});

test("remove last element", () => {
  const list = new LinkedList();
  list.push(1);
  list.removeAt(0);
  expect(list.iterateAll()).toEqual([]);
  expect(list.length).toEqual(0);
});

test("negative index handling", () => {
  const list = new LinkedList();
  list.push(1);
  list.push(2);
  list.removeAt(-1); // Invalid index, should be handled
  expect(list.iterateAll()).toEqual([1, 2]);
  expect(list.length).toEqual(2);
});

test("large number of elements", () => {
  const largeList = new LinkedList();
  for (let i = 0; i < 1000; i++) {
    largeList.push(i);
  }
  expect(largeList.length).toEqual(1000);
  for (let i = 0; i < 1000; i++) {
    largeList.pop();
  }
  expect(largeList.iterateAll()).toEqual([]);
  expect(largeList.length).toEqual(0);
});
