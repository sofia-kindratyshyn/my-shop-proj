import axios from "axios";
import type { Product } from "../types/product"; 

interface FetchResponse {
  products: Product[];
}

export async function fetchProducts(value: string): Promise<Product[]> {
  const response = await axios.get<FetchResponse>(`https://dummyjson.com/products/search?q=${value}`);
  return response.data.products;
}
