import Cart from './service/Cart';
import Book from './domain/Book.class';
import MusicAlbum from './domain/MusicAlbum.class';
import Movie from './domain/Movie.class';
import priceSumCart from './service/priceSumCart';
import priceSumCartDiscount from './service/priceSumCartDiscount';
import deleteItemCart from './service/deleteItemCart';

const cart = new Cart();
console.log(cart.items);

cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225, 10));
cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900, 10));
cart.add(new Movie(1010, 'Мстители', 2012, ['США'], 'Avengers Assemmble!', ['фантвстина', 'боевик'], '117 мин/ 02:17', 500, 10));


console.log(cart.items);
cart.items[0].count = 5
console.log(cart.items[0].count);

const sum = priceSumCart(cart)
const sumDiscount = priceSumCartDiscount(cart)
console.log(sum, 'priceSumCart(cart)');
console.log(sumDiscount, 'priceSumCartDiscount(cart)');
deleteItemCart(cart, 1010)
console.log(cart.items);
