import { removeDuplicatesFromOriginal } from './index.js';

test('to throw if missing param 2', () => {
  expect(() => {
    removeDuplicatesFromOriginal(arrOriginal);
  }).toThrow();
});

test('to throw if missing param 1', () => {
  expect(() => {
    removeDuplicatesFromOriginal(undefined, []);
  }).toThrow();
});

test('to remote from original', () => {
  const arrOriginal = ['book1', 'book2', 'book3', 'book4', 'book5'];
  const toRemove = ['book2', 'book3'];
  expect(removeDuplicatesFromOriginal(arrOriginal, toRemove)).toEqual(['book1', 'book4', 'book5']);
});

test('to do nothing', () => {
  const arrOriginal = ['book1', 'book2', 'book3', 'book4', 'book5'];
  const toRemove = [];
  expect(removeDuplicatesFromOriginal(arrOriginal, toRemove)).toEqual(['book1', 'book2', 'book3', 'book4', 'book5']);
});
