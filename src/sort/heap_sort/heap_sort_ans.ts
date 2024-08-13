let heapSize = 0;

const maxHeapify = (i: number, a: number[]) => {
  let l = 2 * i + 1;
  let r = 2 * i + 2;
  let largest = i;
  if (l <= heapSize && a[l] > a[largest]) {
    largest = l;
  }
  if (r <= heapSize && a[r] > a[largest]) {
    largest = r;
  }
  if (largest !== i) {
    const temp = a[largest];
    a[largest] = a[i];
    a[i] = temp;
    maxHeapify(largest, a);
  }
};

const buildMaxHeap = (a: number[]) => {
  for (let i = Math.floor(a.length / 2) - 1; i >= 0; i--) {
    maxHeapify(i, a);
  }
};

export const heapSort = (a: number[]): number[] => {
  if (a.length > 1) {
    heapSize = a.length - 1;
    buildMaxHeap(a);
    for (let i = a.length - 1; i >= 0; i--) {
      const temp = a[0];
      a[0] = a[i];
      a[i] = temp;
      heapSize -= 1;
      maxHeapify(0, a);
    }
  }
  return a;
};
