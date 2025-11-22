
import { NetworkError, DataError } from '../utils/errorHandler.js'


interface ItemDetails {
    id: number;
}

//  fetch('https://dummyjson.com/test')
//         .then(res => res.json())
//         .then(console.log);

export async function fetchProducts(id:number) {
    try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        if (!response.ok) {
            throw new NetworkError(`Network error: ${response.status}`);
        }
        const data = await response.json();
      //  console.log('Fetched products:', data);
        return data;
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