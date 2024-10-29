import Cart from './Cart';

export default function priceSumCartDiscount(cart: Cart): number {
    let sumDiscount = 0;
    cart['_items'].forEach(item => {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        item.discount ? sumDiscount += item.price * (1 - (item.discount / 100)) * item.count : sumDiscount += item.price * item.count;
    });
    return sumDiscount
}