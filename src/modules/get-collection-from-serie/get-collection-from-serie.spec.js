import { getCollectionFromSerieFactory } from './index.js';

test('to be created', () => {
  const harrySeriesConfig = ['book1', 'book2', 'book3', 'book4', 'book5'];
  const executor = getCollectionFromSerieFactory(harrySeriesConfig);
  expect(executor).toBeDefined();
});

test(`to return []`, () => {
  const harrySeriesConfig = ['book1', 'book2', 'book3', 'book4', 'book5'];
  const executor = getCollectionFromSerieFactory(harrySeriesConfig);
  expect(executor([])).toEqual([]);
});

test(`to return ['book1', 'book2', 'book3']`, () => {
  const harrySeriesConfig = ['book1', 'book2', 'book3', 'book4', 'book5'];
  const executor = getCollectionFromSerieFactory(harrySeriesConfig);
  expect(executor(['book1', 'book2', 'book3'])).toEqual(['book1', 'book2', 'book3']);
});

test(`to return ['book1', 'book2', 'book3', 'book4']`, () => {
  const harrySeriesConfig = ['book1', 'book2', 'book3', 'book4', 'book5'];
  const executor = getCollectionFromSerieFactory(harrySeriesConfig);
  expect(executor(['book1', 'book2', 'book3', 'book4'])).toEqual(['book1', 'book2', 'book3', 'book4']);
});

test(`to return ['book1', 'book2', 'book3', 'book4', 'book5']`, () => {
  const harrySeriesConfig = ['book1', 'book2', 'book3', 'book4', 'book5'];
  const executor = getCollectionFromSerieFactory(harrySeriesConfig);
  expect(executor(['book1', 'book2', 'book3', 'book4', 'book5'])).toEqual(['book1', 'book2', 'book3', 'book4', 'book5']);
});

test(`to return the first set ['book1', 'book2', 'book3', 'book4', 'book5']`, () => {
  const harrySeriesConfig = ['book1', 'book2', 'book3', 'book4', 'book5'];
  const executor = getCollectionFromSerieFactory(harrySeriesConfig);
  expect(executor(['book1', 'book2', 'book3', 'book4', 'book5', 'book1', 'book2', 'book3', 'book4', 'book5'])).toEqual(['book1', 'book2', 'book3', 'book4', 'book5']);
});

