export const removeDuplicatesFromOriginal = (arrayOrigin, array) => {
  const arrMap = array.reduce((map, book) => ({ ...map, [book]: true }), {});
  return arrayOrigin.reduce((acc, bookName) => {
    if (arrMap[bookName]) {
      delete arrMap[bookName];
    } else {
      acc.push(bookName);
    }
    return acc;
  }, []);
};