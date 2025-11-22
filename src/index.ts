
import { NetworkError, DataError } from './utils/errorHandler.js'
import { Product } from "./models/Product.js";
import { fetchProducts } from "./services/apiService.js";
import { calculateDiscount } from "./utils/discountCalculator.js";
import { calculateTax } from "./utils/taxCalculator.js";

async function main() {
	try {
		const data = await fetchProducts(16);
		if (data) {
			const product = new Product(data);
			product.displayDetails();
			console.log(`Price with discount: $${calculateDiscount(product.price, product.discountPercentage)}`);
			console.log(`Price after Tax: $${calculateTax(product.price, product.category)}`);
		}
	} catch (e) {
		  if (e instanceof NetworkError) {
                    console.error('Network error:', e.message);
                } else if (e instanceof DataError) {
                    console.error('Data error:', e.message);
                } else {
                    console.error('Unknown error:', e);
                }
	}
}

main();
