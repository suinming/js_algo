import { expect, test } from "vitest";
import { bubbleSort as testFn } from "../sort/bubble_sort/bubble_sort";

test("sort empty array", () => {
  expect(testFn([])).toEqual([]);
});

test("sort single element array", () => {
  expect(testFn([1])).toEqual([1]);
});

test("sort already sorted array", () => {
  expect(testFn([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
});

test("sort reverse sorted array", () => {
  expect(testFn([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
});

test("sort array with duplicated elements", () => {
  expect(testFn([2, 3, 2, 1, 3, 2])).toEqual([1, 2, 2, 2, 3, 3]);
});

test("sort array with all identical elements", () => {
  expect(testFn([4, 4, 4, 4, 4])).toEqual([4, 4, 4, 4, 4]);
});

test("sort array with negative numbers", () => {
  expect(testFn([-3, -1, -4, -2, -5])).toEqual([-5, -4, -3, -2, -1]);
});

test("sort array with mixed negative and positive numbers", () => {
  expect(testFn([3, -1, 4, -2, 0])).toEqual([-2, -1, 0, 3, 4]);
});

test("sort array with floating point numbers", () => {
  expect(testFn([1.1, 3.3, 2.2, 0.5, -1.1])).toEqual([
    -1.1, 0.5, 1.1, 2.2, 3.3,
  ]);
});

test("sort large array", () => {
  /* generate large array */
  const largeArr = [];
  const size = 10000;
  const max = 10000;
  for (let i = 0; i < size; i++) {
    largeArr.push(Math.floor(Math.random() * max) + 1);
  }
  expect(testFn(largeArr)).toEqual([...largeArr].sort((a, b) => a - b));
});
