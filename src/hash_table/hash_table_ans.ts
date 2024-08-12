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
  parseKeyToNum(k: string): number {
    let sum = 0;
    for (let i = 0; i < k.length; i++) {
      /* convert character to the ASCII value */
      sum += k.charCodeAt(i);
    }
    return sum;
  }
  /* hash function1: division method */
  divMethod(k: number): number {
    return k % this.buckets;
  }
  /* hash function2: multiplication method */
  mulMethod(k: number): number {
    const A = (5 ** 0.5 - 1) / 2;
    return Math.floor(this.buckets * ((A * k) % 1));
  }
  getBucketIdx(k: number | string): number {
    let key: number;

    if (typeof k === "string") {
      key = this.parseKeyToNum(k);
    } else {
      key = k;
    }

    if (this.hashFunc === THashFunc.div) {
      return this.divMethod(key);
    } else if (this.hashFunc === THashFunc.mul) {
      return this.mulMethod(key);
    } else {
      throw new Error("Invalid method");
    }
  }
  set(k: number | string, v: number) {
    const bucketIdx: number = this.getBucketIdx(k);
    this.table[bucketIdx].push({ k, v });
  }
  get(k: number | string): { k: number | string; v: number } | number {
    const bucketIdx: number = this.getBucketIdx(k);
    for (let i = 0; i < this.table[bucketIdx].length; i++) {
      if (this.table[bucketIdx][i].k === k) {
        return this.table[bucketIdx][i];
      }
    }
    return -1;
  }
}

export { HashTable, THashFunc };
