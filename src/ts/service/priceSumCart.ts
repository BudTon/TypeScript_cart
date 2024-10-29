import Cart from './Cart';

export default function priceSumCart(cart: Cart): number {
    return cart.items.reduce((acc, curr) => acc + curr.price * curr.count, 0)
}
