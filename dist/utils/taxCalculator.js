export function calculateTax(param, prodCategory) {
    if (prodCategory === 'groceries') {
        return param * 3; // 3% 
    }
    else {
        return param * 4.75; // 4.75%
    }
}
//# sourceMappingURL=taxCalculator.js.map