/* eslint-disable no-undef */

import Book from '../domain/Book.class';

test('new book should be empty', () => {
  const book = new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225, 10);
  const expected = { "_count": 1, "author": 'Leo Tolstoy', "id": 1001, "name": 'War and Piece', "pages": 1225, "price": 2000, "discount": 10 }
  expect(book).toEqual(expected);
});

test('book count set', () => {
  const book = new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225, 10);
  book.count = 5
  expect(book.count).toBe(1);
});

test('book count', () => {
  const book = new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225, 10);
  book.count = 5
  expect(book.count).toBe(1);
});
