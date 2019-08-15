import { getCollectionFromSerieFactory } from '../get-collection-from-serie';
import { removeDuplicatesFromOriginal } from '../remove-duplicates';
import { getPrice } from '../get-price';
import { optimizeDiscount } from '../optimize-discount';

export const getPriceFromInput = (bookSerieConfig, input) => {
  if (!bookSerieConfig || !input) {
    throw new Error('invalid function call');
  }

  const getCollectionFromSerieF = getCollectionFromSerieFactory(bookSerieConfig);
  let collection = [...input];
  const results = [];
  while (collection.length > 0) {
    const booksInSerie = getCollectionFromSerieF(collection);
    collection = removeDuplicatesFromOriginal(collection, booksInSerie);
    results.push(booksInSerie);
  }
  const opResults = optimizeDiscount(results);
  return getPrice(opResults);
};
