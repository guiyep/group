import { getPrice } from './index';

test('no args => to throw', () => {
  expect(() => {
    getPrice();
  }).toThrow();
});

test('0 book nothing', () => {
  expect(getPrice([[]])).toEqual(0);
});

test('1 book is unit', () => {
  expect(getPrice([['book1']])).toEqual(8);
});

test('2 books is 5%', () => {
  expect(getPrice([['book1', 'book2']])).toEqual(15.2);
});

test('3 books 10%', () => {
  expect(getPrice([['book1', 'book2', 'book3']])).toEqual(21.6);
});

test('4 books is 20%', () => {
  expect(getPrice([['book1', 'book2', 'book3', 'book4']])).toEqual(25.6);
});

test('5 book is 25%', () => {
  expect(getPrice([['book1', 'book2', 'book3', 'book4', 'book5']])).toEqual(30);
});

test('example is 51.2', () => {
  expect(getPrice([['book1', 'book2', 'book3', 'book5'], ['book1', 'book2', 'book5', 'book5']])).toEqual(51.2);
});
