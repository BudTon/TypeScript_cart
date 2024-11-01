export default interface Buyable {
    readonly id: number,
    readonly name: string,
    readonly price: number,
    readonly count: number,
    readonly discount?: number,
}