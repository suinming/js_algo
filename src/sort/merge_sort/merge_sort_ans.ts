const merge = (a1: number[], a2: number[]): number[] => {
  let i = 0;
  let j = 0;
  const result: number[] = [];
  while (i < a1.length && j < a2.length) {
    if (a1[i] < a2[j]) {
      result.push(a1[i]);
      i += 1;
    } else {
      result.push(a2[j]);
      j += 1;
    }
  }
  /* push all the remaining elements */
  if (i < a1.length) {
    while (i < a1.length) {
      result.push(a1[i]);
      i += 1;
    }
  } else {
    while (j < a2.length) {
      result.push(a2[j]);
      j += 1;
    }
  }
  return result;
};

export const mergeSort = (a: number[]): number[] => {
  if (a.length > 1) {
    const middleIdx = Math.floor(a.length / 2);
    const left = a.slice(0, middleIdx);
    const right = a.slice(middleIdx, a.length);
    return merge(mergeSort(left), mergeSort(right));
  }
  return a;
};
