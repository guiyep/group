import { getPriceFromInput } from './index.js';
const harrySeriesConfig = ['book1', 'book2', 'book3', 'book4', 'book5'];

describe('example', () => {
  test('no args => to throw 1', () => {
    expect(() => {
      getPriceFromInput(harrySeriesConfig, undefined);
    }).toThrow();
  });
  test('no args => to throw 2', () => {
    expect(() => {
      getPriceFromInput(undefined, testData);
    }).toThrow();
  });
  test('no book => nothing', () => {
    const testData = [];
    const result = getPriceFromInput(harrySeriesConfig, testData);
    expect(result).toEqual(0);
  });
  test('1 book 1 unit', () => {
    const testData = ['book1'];
    const result = getPriceFromInput(harrySeriesConfig, testData);
    expect(result).toEqual(8);
  });
  test('2 books 5%', () => {
    const testData = ['book1', 'book2'];
    const result = getPriceFromInput(harrySeriesConfig, testData);
    expect(result).toEqual(15.2);
  });
  test('3 books 10%', () => {
    const testData = ['book1', 'book2', 'book3'];
    const result = getPriceFromInput(harrySeriesConfig, testData);
    expect(result).toEqual(21.6);
  });
  test('4 books 20%', () => {
    const testData = ['book1', 'book2', 'book3', 'book4'];
    const result = getPriceFromInput(harrySeriesConfig, testData);
    expect(result).toEqual(25.6);
  });
  test('5 books 25%', () => {
    const testData = ['book1', 'book2', 'book3', 'book4', 'book5'];
    const result = getPriceFromInput(harrySeriesConfig, testData);
    expect(result).toEqual(30);
  });
  test('example gives 51.2', () => {
    const testData = ['book1', 'book1', 'book2', 'book2', 'book3', 'book3', 'book4', 'book5'];
    const result = getPriceFromInput(harrySeriesConfig, testData);
    expect(result).toEqual(51.2);
  });
});
