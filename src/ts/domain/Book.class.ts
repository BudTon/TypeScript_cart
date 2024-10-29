import Buyable from './Buyable';

export default class Book implements Buyable {
    readonly id: number;
    readonly name: string;
    readonly author: string;
    readonly price: number;
    readonly pages: number;
    readonly _count: number = 1
    readonly discount?: number;
    constructor(id: number, name: string, author: string, price: number, pages: number, discount?: number) {
        this.id = id;
        this.name = name;
        this.author = author;
        this.price = price;
        this.pages = pages;
        this.discount = discount;
    };

    get count(): number {
        return this._count;
    }

    set count(value: number) {
        this._count = 1;
        console.log(value);

    }

}

