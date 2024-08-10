import { expect, test } from "vitest";
import { DoubleLinkedList } from "../double_linked_list/double_linked_list";

const dll = new DoubleLinkedList();

test("push 5 elements into the doubly linked list", () => {
  dll.push(1);
  dll.push(2);
  dll.push(3);
  dll.push(4);
  dll.push(5);
  expect(dll.iterateAll()).toEqual([1, 2, 3, 4, 5]);
  expect(dll.length).toBe(5);
});

test("pop 2 elements from the end of the list", () => {
  dll.pop();
  dll.pop();
  expect(dll.iterateAll()).toEqual([1, 2, 3]);
  expect(dll.length).toBe(3);
});

test("unshift 2 elements to the beginning of the list", () => {
  dll.unshift(0);
  dll.unshift(-1);
  expect(dll.iterateAll()).toEqual([-1, 0, 1, 2, 3]);
  expect(dll.length).toBe(5);
});

test("shift 2 elements from the beginning of the list", () => {
  dll.shift();
  dll.shift();
  expect(dll.iterateAll()).toEqual([1, 2, 3]);
  expect(dll.length).toBe(3);
});

test("insert elements at specific indexes", () => {
  dll.insertAt(1, 10);
  expect(dll.iterateAll()).toEqual([1, 2, 10, 3]);
  expect(dll.length).toBe(4);

  dll.insertAt(4, 20);
  expect(dll.iterateAll()).toEqual([1, 2, 10, 3, 20]);
  expect(dll.length).toBe(5);

  dll.insertAt(0, -10);
  expect(dll.iterateAll()).toEqual([-10, 1, 2, 10, 3, 20]);
  expect(dll.length).toBe(6);
});

test("remove elements at specific indexes", () => {
  dll.removeAt(1);
  expect(dll.iterateAll()).toEqual([-10, 2, 10, 3, 20]);
  expect(dll.length).toBe(5);

  dll.removeAt(4);
  expect(dll.iterateAll()).toEqual([-10, 2, 10, 3]);
  expect(dll.length).toBe(4);

  dll.removeAt(0);
  expect(dll.iterateAll()).toEqual([2, 10, 3]);
  expect(dll.length).toBe(3);
});

test("check if head and tail are correctly set", () => {
  expect(dll.head?.val).toBe(2);
  expect(dll.tail?.val).toBe(3);
});

test("pop all elements to empty the list", () => {
  dll.pop();
  dll.pop();
  dll.pop();
  expect(dll.iterateAll()).toEqual([]);
  expect(dll.length).toBe(0);
  expect(dll.head).toBeNull();
  expect(dll.tail).toBeNull();
});

test("unshift and shift on empty list", () => {
  dll.unshift(10);
  expect(dll.iterateAll()).toEqual([10]);
  expect(dll.length).toBe(1);

  dll.shift();
  expect(dll.iterateAll()).toEqual([]);
  expect(dll.length).toBe(0);
  expect(dll.head).toBeNull();
  expect(dll.tail).toBeNull();
});
