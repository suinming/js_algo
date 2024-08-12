import { describe, it, expect, beforeEach } from "vitest";
import { HashTable, THashFunc } from "../hash_table/hash_table";

describe("HashTable", () => {
  let hashTable: HashTable;

  beforeEach(() => {
    hashTable = new HashTable(10, THashFunc.div);
  });

  it("should initialize with correct number of buckets and hash function", () => {
    expect(hashTable.buckets).toBe(10);
    expect(hashTable.hashFunc).toBe(THashFunc.div);
    expect(hashTable.table.length).toBe(10);
    expect(hashTable.table.every((bucket) => Array.isArray(bucket))).toBe(true);
  });

  it("should correctly parse string keys to numbers", () => {
    const parsedValue = hashTable.parseKeyToNum("abc");
    expect(parsedValue).toBe(294); // 'a' = 97, 'b' = 98, 'c' = 99, sum = 294
  });

  it("should correctly hash using division method", () => {
    const index = hashTable.divMethod(294);
    expect(index).toBe(4); // 294 % 10 = 4
  });

  it("should correctly hash using multiplication method", () => {
    hashTable = new HashTable(10, THashFunc.mul);
    const index = hashTable.mulMethod(294);
    expect(index).toBeGreaterThanOrEqual(0);
    expect(index).toBeLessThan(10);
  });

  it("should return correct bucket index for numeric key", () => {
    const index = hashTable.getBucketIdx(15);
    expect(index).toBe(5); // 15 % 10 = 5
  });

  it("should return correct bucket index for string key", () => {
    const index = hashTable.getBucketIdx("abc");
    expect(index).toBe(4); // 'abc' -> 294 % 10 = 4
  });

  it("should insert key-value pairs into the correct bucket", () => {
    hashTable.set(15, 100);
    hashTable.set("abc", 200);

    expect(hashTable.table[5]).toEqual([{ k: 15, v: 100 }]);
    expect(hashTable.table[4]).toEqual([{ k: "abc", v: 200 }]);
  });

  it("should retrieve the correct value for a given key", () => {
    hashTable.set(15, 100);
    hashTable.set("abc", 200);

    expect(hashTable.get(15)).toEqual({ k: 15, v: 100 });
    expect(hashTable.get("abc")).toEqual({ k: "abc", v: 200 });
  });

  it("should return -1 if the key does not exist", () => {
    expect(hashTable.get(999)).toBe(-1);
  });
});
