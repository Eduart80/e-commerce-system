import { NetworkError, DataError } from './util/errorHandler.js';
import { Product } from "./models/Product.js";
import { fetchProducts } from "./services/apiService.js";
import { calculateDiscount } from "./util/discountCalculator.js";
import { calculateTax } from "./util/taxCalculator.js";
async function main() {
    try {
        const data = await fetchProducts(16);
        if (data) {
            const product = new Product(data);
            product.displayDetails();
            const discountRes = calculateDiscount(product.price, product.discountPercentage);
            const taxCalc = calculateTax(discountRes, product.category);
            const finalPrice = discountRes + taxCalc;
            console.log(`Price with discount: $${discountRes}`);
            console.log(`Price after Tax: $${finalPrice.toFixed(2)}`);
        }
    }
    catch (e) {
        if (e instanceof NetworkError) {
            console.error('Network error:', e.message);
        }
        else if (e instanceof DataError) {
            console.error('Data error:', e.message);
        }
        else {
            console.error('Unknown error:', e);
        }
    }
}
main();
//# sourceMappingURL=index.js.map