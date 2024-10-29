import Cart from './Cart';

export default function deleteItemCart(cart: Cart, idForDelete: number): void {
    const length = cart['_items'].length
    cart['_items'].forEach((item, index) => {
        if (item.id === idForDelete) {
            cart['_items'].splice(index)
            console.log(`Из карзины удален товар - ${item.name} с ID - ${item.id}`);
        }
    });
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    length === cart['_items'].length ? console.log(`В карзине товар с ID - ${idForDelete} НЕ НАЙДЕН`) : console.log(`В карзине осталось ${cart['_items'].length} товар(a)`);
}
