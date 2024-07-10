"use client";

import { IProduct, ICartContextType } from "@/interfaces";
import { createContext, useState, useEffect, ReactNode } from "react";
import { fetchProductById } from "@/lib/service/services";

interface CartProviderProps {
	children: ReactNode;
}
const addItem = async (
	cartItems: IProduct[],
	product: number
): Promise<IProduct[]> => {
	const isProcuct = cartItems.find((item) => item.id === product);

	if (isProcuct) {
		alert("Este producto ya esta en el carrito");
		return cartItems;
	} else {
		const data = await fetchProductById(product.toString());
		alert("Producto agregado al carrito!");
		return [...cartItems, data];
	}
};

const removeCartItem = (cartItems: IProduct[], product: number) => {
	return cartItems.filter((item) => item.id !== product);
};

export const CartContext = createContext<ICartContextType>({
	cartItems: [],
	addToCart: () => {},
	removeFromCart: () => {},
	total: 0,
	buyProducts: () => {},
});

const buyItems = async (cartItems: IProduct[]) => {
	try {
		const products = cartItems.map((item) => item.id);
		const token = localStorage.getItem("token");
		const response = await fetch("http://localhost:3004/orders", {
			method: "POST",
			headers: {
				"Authorization": `${token}`,
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ products }),
		});
		if (response.ok) {
			console.log("Purchase success");
		}
	} catch {
		throw new Error("Faild to send orders");
	}
};
export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
	const [cartItems, setCartItems] = useState<IProduct[]>(() => {
		if (typeof window !== "undefined") {
			const storedCartItems = localStorage.getItem("cartItems");
			return storedCartItems ? JSON.parse(storedCartItems) : [];
		}
	});

	const [total, setTotal] = useState(0);

	const addToCart = async (product: number) => {
		const updatedCart = await addItem(cartItems, product);
		setCartItems(updatedCart);
	};

	const removeFromCart = (product: number) => {
		const updatedCart = removeCartItem(cartItems, product);
		setCartItems(updatedCart);
	};

	const buyProducts = () => {
		buyItems(cartItems);
		setCartItems([]);
	};

	useEffect(() => {
		if (typeof window !== "undefined") {
			localStorage.setItem("cartItems", JSON.stringify(cartItems));
			const total = cartItems.reduce((acc, item) => acc + item.price, 0);
			setTotal(total);
		}
	}, [cartItems]);

	return (
		<CartContext.Provider
			value={{ cartItems, addToCart, removeFromCart, total, buyProducts }}
		>
			{children}
		</CartContext.Provider>
	);
};
