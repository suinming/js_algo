export const insertSort = (a: number[]): number[] => {
  if (a.length) {
    for (let i = 1; i < a.length; i++) {
      let key = a[i];
      let j = i - 1;
      while (j >= 0 && a[j] > key) {
        a[j + 1] = a[j];
        j -= 1;
      }
      a[j + 1] = key;
    }
  }
  return a;
};
