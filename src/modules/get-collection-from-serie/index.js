export const getCollectionFromSerieFactory = seriesNames => {
  const localConfig = seriesNames.reduce((acc, bookName) => {
    if (!acc[bookName]) {
      acc[bookName] = 0;
    }
    return acc;
  }, {});

  return bookNames => {
    const executionConfig = { ...localConfig };
    const serieNumber = bookNames.reduce((acc, bookName) => {
      if (executionConfig[bookName] === 0) {
        executionConfig[bookName] = 1;
        acc.push(bookName);
      }
      return acc;
    }, []);
    return serieNumber;
  };
};
