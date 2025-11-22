
export function calculateDiscount(price:number, discount: number):number{
    const res = (price * discount) / 100;
    return parseFloat((price - res).toFixed(2));
}