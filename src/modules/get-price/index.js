const unitPrice = 8;

export const getPrice = matrix =>
  matrix.reduce((acc, collectionOfBooks) => {
    if (collectionOfBooks.length === 5) {
      return acc + 5 * unitPrice * 0.75;
    }
    if (collectionOfBooks.length === 4) {
      return acc + 4 * unitPrice * 0.8;
    }
    if (collectionOfBooks.length === 3) {
      return acc + 3 * unitPrice * 0.9;
    }
    if (collectionOfBooks.length === 2) {
      return acc + 2 * unitPrice * 0.95;
    }
    if (collectionOfBooks.length === 0) {
      return 0;
    }
    return acc + unitPrice;
  }, 0);
