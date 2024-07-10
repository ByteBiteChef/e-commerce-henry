import { IProduct } from "@/interfaces";

export const fetchProducts = async (): Promise<IProduct[]> => {
	const response = await fetch("http://localhost:3004/products", {});
	if (!response.ok) {
		throw new Error("Failed to fetch products");
	}
	const products = await response.json();
	return products;
};

export const fetchProductById = async (id: string): Promise<IProduct> => {
	const response = await fetch(`http://localhost:3004/products/${id}`);
	const product = await response.json();

	return product;
};

export const fetchOrders = async (token: string | null) => {
	const response = await fetch("http://localhost:3004/users/orders", {
		headers: {
			Authorization: `${token}`,
		},
	});
	const orders = await response.json();
	return orders;
};
