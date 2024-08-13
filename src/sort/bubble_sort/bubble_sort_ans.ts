export const bubbleSort = (a: number[]): number[] => {
  const len = a.length;
  if (len > 0) {
    /* if there are no swap in first loop (i = len - 1)
     * it means that the array is already sorted
     */
    let isFirstLoopSwap = false;
    for (let i = len - 1; i > 0; i--) {
      for (let j = 0; j < i; j++) {
        if (a[i] < a[j]) {
          const temp = a[i];
          a[i] = a[j];
          a[j] = temp;
          isFirstLoopSwap = true;
        }
      }
      if (!isFirstLoopSwap) break;
    }
  }
  return a;
};
