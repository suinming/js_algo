const partition = (a: number[], p: number, r: number) => {
  const pivot = a[r];
  let i = p - 1;
  for (let j = p; j < r; j++) {
    if (a[j] <= pivot) {
      i += 1;
      /* swap a[i] and a[j] */
      const temp = a[i];
      a[i] = a[j];
      a[j] = temp;
    }
  }
  /* swap a[i + 1] and a[r] */
  const temp = a[i + 1];
  a[i + 1] = a[r];
  a[r] = temp;
  return i + 1;
};

const sort = (a: number[], p: number, r: number) => {
  if (p < r) {
    const targetIdx = partition(a, p, r);
    sort(a, p, targetIdx - 1);
    sort(a, targetIdx + 1, r);
  }
};

export const quickSort = (a: number[]): number[] => {
  if (a.length > 1) {
    sort(a, 0, a.length - 1);
  }
  return a;
};
