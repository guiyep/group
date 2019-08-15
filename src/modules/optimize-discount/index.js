// this will traverse the matrix in 2 directions at the same time updating the collections when needed.
// once the 2 pointers are at the same position we succeed
export const optimizeDiscount = matrix => {
  const matrixOptimized = [...matrix];
  let left = 0;
  let right = matrixOptimized.length - 1;
  const sortedByLengthMatrix = matrixOptimized.sort((itemA, itemB) => itemB.length - itemA.length);
  const size = matrixOptimized.length - 1;

  while (left !== right && left <= size && right <= size) {
    let contains5;
    const leftPosition = sortedByLengthMatrix[left];
    const rightPosition = sortedByLengthMatrix[right];

    if (leftPosition.length === 5) {
      contains5 = true;
    } else {
      ++left;
    }

    if (rightPosition.length < 5) {
      if (contains5) {
        leftPosition.some((bookName, index) => {
          if (!rightPosition.includes(bookName)) {
            rightPosition.push(bookName);
            leftPosition.splice(index, 1);
            return true;
          }
          return false;
        });

        if (rightPosition.length === 4) {
          --right;
        }
      }
    } else {
      --right;
    }
  }
  return matrixOptimized;
};
