export const selectSort = (a: number[]) => {
  if (a.length) {
    /* the last element will set in the right position
    so the loop execute (a.length - 1) times */
    for (let i = 0; i < a.length - 1; i++) {
      let minIdx = i;
      for (let j = i; j < a.length; j++) {
        if (a[j] < a[minIdx]) {
          minIdx = j;
        }
      }
      if (minIdx !== i) {
        const temp = a[minIdx];
        a[minIdx] = a[i];
        a[i] = temp;
      }
    }
  }
  return a;
};
