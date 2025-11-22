export declare class Product {
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
    constructor(data: any);
    displayDetails(): void;
    getPriceWithDiscount(): number;
}
//# sourceMappingURL=Product.d.ts.map