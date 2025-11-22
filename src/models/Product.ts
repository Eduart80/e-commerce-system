
export class Product {
	id: number;
	title: string;
	description: string;
	category: string;
	price: number;
	discountPercentage: number;
	brand: string;
	stock: number;
	rating: number;
	images: string[];
	thumbnail: string;

	constructor(data: any) {
		this.id = data.id;
		this.title = data.title;
		this.description = data.description;
		this.category = data.category;
		this.price = data.price;
		this.discountPercentage = data.discountPercentage;
		this.brand = data.brand;
		this.stock = data.stock;
		this.rating = data.rating;
		this.images = data.images || [];
		this.thumbnail = data.thumbnail;
	}

	displayDetails(): void {
		console.log(`Product: ${this.title}`);
		console.log(`Description: ${this.description}`);
		console.log(`Category: ${this.category}`);
		console.log(`Brand: ${this.brand}`);
		console.log(`Price: $${this.price}`);
		console.log(`Discount: ${this.discountPercentage}%`);
		console.log(`Stock: ${this.stock}`);
		console.log(`Rating: ${this.rating}`);
	}

	getPriceWithDiscount(): number {
		const discount = (this.price * this.discountPercentage) / 100;
		return parseFloat((this.price - discount).toFixed(2));
	}
}