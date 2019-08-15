import { optimizeDiscount } from './index';

test('no args => to throw', () => {
  expect(() => {
    optimizeDiscount(undefined);
  }).toThrow();
});

test('deoptimized simple (2rows)', () => {
  const deoptimized = [['book1', 'book2', 'book3', 'book4', 'book5'], ['book1', 'book2']];
  const result = optimizeDiscount(deoptimized);
  expect(result).toEqual([['book1', 'book2', 'book4', 'book5'], ['book1', 'book2', 'book3']]);
});

test('deoptimized from more than one (3rows)', () => {
  const deoptimized = [
    ['book1', 'book2', 'book3', 'book4', 'book5'],
    ['book1', 'book2', 'book3', 'book4', 'book5'],
    ['book1', 'book2'],
  ];
  const result = optimizeDiscount(deoptimized);
  expect(result).toEqual([
    ['book1', 'book2', 'book4', 'book5'],
    ['book1', 'book2', 'book3', 'book5'],
    ['book1', 'book2', 'book3', 'book4'],
  ]);
});

test('4 rows, 1 book in the last', () => {
  const deoptimized = [
    ['book1', 'book2', 'book3', 'book4', 'book5'],
    ['book1', 'book2', 'book3', 'book4', 'book5'],
    ['book1', 'book2', 'book3', 'book4', 'book5'],
    ['book1'],
  ];
  const result = optimizeDiscount(deoptimized);
  expect(result).toEqual([
    ['book1', 'book3', 'book4', 'book5'],
    ['book1', 'book2', 'book4', 'book5'],
    ['book1', 'book2', 'book3', 'book5'],
    ['book1', 'book2', 'book3', 'book4'],
  ]);
});
