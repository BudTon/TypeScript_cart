/* eslint-disable no-undef */

import Cart from '../service/Cart';
import priceSumCart from '../service/priceSumCart';
import Book from '../domain/Book.class';
import MusicAlbum from '../domain/MusicAlbum.class';
import Movie from '../domain/Movie.class';

test('test priceSumCart()', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225, 10));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900, 2, 10));
  cart.add(new Movie(1010, 'Мстители', 2012, ['США'], 'Avengers Assemmble!', ['фантвстина', 'боевик'], '117 мин/ 02:17', 500, 3 ,10));
  const sum = priceSumCart(cart)

  expect(sum).toBe(5300);
});
