export function calculateDiscount(price, discount) {
    const res = (price * discount) / 100;
    return parseFloat((price - res).toFixed(2));
}
//# sourceMappingURL=discountCalculator.js.map