enum THashFunc {
  "div" = 0 /* use division method as hash function*/,
  "mul" = 1 /* use multiplication method as hash function */,
}

class HashTable {
  buckets: number;
  hashFunc: THashFunc;
  table: { k: number | string; v: number }[][];

  constructor(buckets: number, hashFunc: THashFunc) {
    this.buckets = buckets;
    this.table = [];
    this.hashFunc = hashFunc;
    for (let i = 0; i < buckets; i++) {
      this.table.push([]);
    }
  }
  parseKeyToNum(k: string): number { }
  /* hash function1: division method */
  divMethod(k: number): number { }
  /* hash function2: multiplication method */
  mulMethod(k: number): number {
    const A = (5 ** 0.5 - 1) / 2;
  }
  getBucketIdx(k: number | string): number { }
  set(k: number | string, v: number) { }
  get(k: number | string): { k: number | string; v: number } | number { }
}

export { HashTable, THashFunc };
