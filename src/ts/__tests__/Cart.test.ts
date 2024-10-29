/* eslint-disable no-undef */

import Cart from '../service/Cart';
import Book from '../domain/Book.class';

test('new card should be empty', () => {
  const cart = new Cart();
  expect(cart.items.length).toBe(0);
});

test('Cart-method-add', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  const result = Object.values(cart['_items'][0]);
  expect(result).toEqual([1, 1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225, undefined]);
});

// test('new book should be empty', () => {
//   const book = new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225, 10);
//   const expected = { "_count": 1, "author": 'Leo Tolstoy', "id": 1001, "name": 'War and Piece', "pages": 1225, "price": 2000, "discount": 10 }
//   expect(book).toEqual(expected);
// });