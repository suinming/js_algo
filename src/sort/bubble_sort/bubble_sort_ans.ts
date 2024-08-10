export const bubbleSort = (a: number[]) => {
  const len = a.length;
  if (len > 0) {
    for (let i = len - 1; i > 0; i--) {
      for (let j = 0; j < i; j++) {
        if (a[i] < a[j]) {
          const temp = a[i];
          a[i] = a[j];
          a[j] = temp;
        }
      }
    }
  }
  return a;
};
