import { describe, it, expect, beforeEach } from "vitest";
import { BSTree } from "../tree/bstree";

describe("BSTree", () => {
  let bst: BSTree;

  beforeEach(() => {
    bst = new BSTree();
  });

  it("should insert nodes correctly", () => {
    bst.insert(15);
    bst.insert(6);
    bst.insert(20);

    expect(bst.root?.key).toBe(15);
    expect(bst.root?.left?.key).toBe(6);
    expect(bst.root?.right?.key).toBe(20);
  });

  it("should insert nodes in the correct position", () => {
    bst.insert(10);
    bst.insert(5);
    bst.insert(3);
    bst.insert(7);

    expect(bst.root?.key).toBe(10);
    expect(bst.root?.left?.key).toBe(5);
    expect(bst.root?.left?.left?.key).toBe(3);
    expect(bst.root?.left?.right?.key).toBe(7);
  });

  it("should perform breadth-first traversal correctly", () => {
    bst.insert(10);
    bst.insert(6);
    bst.insert(15);
    bst.insert(3);
    bst.insert(8);
    bst.insert(12);
    bst.insert(18);

    bst.bf(bst.root);

    const keysInBfOrder = bst.queue.map((node) => node.key);
    expect(keysInBfOrder).toEqual([10, 6, 15, 3, 8, 12, 18]);
  });

  it("should perform depth-first preorder traversal correctly", () => {
    bst.insert(10);
    bst.insert(6);
    bst.insert(15);
    bst.insert(3);
    bst.insert(8);
    bst.insert(12);
    bst.insert(18);

    bst.dfPreorder(bst.root);

    expect(bst.path.trim()).toBe("10 6 3 8 15 12 18");
  });

  it("should perform depth-first inorder traversal correctly", () => {
    bst.insert(10);
    bst.insert(6);
    bst.insert(15);
    bst.insert(3);
    bst.insert(8);
    bst.insert(12);
    bst.insert(18);

    bst.dfInorder(bst.root);

    expect(bst.path.trim()).toBe("3 6 8 10 12 15 18");
  });

  it("should perform depth-first postorder traversal correctly", () => {
    bst.insert(10);
    bst.insert(6);
    bst.insert(15);
    bst.insert(3);
    bst.insert(8);
    bst.insert(12);
    bst.insert(18);

    bst.dfPostorder(bst.root);

    expect(bst.path.trim()).toBe("3 8 6 12 18 15 10");
  });

  it("should search nodes recursively", () => {
    bst.insert(10);
    bst.insert(5);
    bst.insert(15);

    expect(bst.search1(bst.root, 5)?.key).toBe(5);
    expect(bst.search1(bst.root, 15)?.key).toBe(15);
    expect(bst.search1(bst.root, 20)).toBeNull();
  });

  it("should search nodes iteratively", () => {
    bst.insert(10);
    bst.insert(5);
    bst.insert(15);

    expect(bst.search2(bst.root, 5)?.key).toBe(5);
    expect(bst.search2(bst.root, 15)?.key).toBe(15);
    expect(bst.search2(bst.root, 20)).toBeNull();
  });
});
