"use client";

import Button from "@/components/LandingButton/LandingButton";
import { CartContext } from "@/context/CartContext";
import { IProduct } from "@/interfaces";
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const CartCardComponent = () => {
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);
	const { cartItems, removeFromCart, total, buyProducts } =
		useContext(CartContext);
	const router = useRouter();

	const purchaseAlert = () => {
		router.push("/purchaseSuccess");
	};
	const handlePurchaseClick = () => {
		buyProducts();
		purchaseAlert();
	};
	if (!isMounted) {
		return null;
	}
	return (
		<div>
			<div>
				{!cartItems || cartItems.length === 0 ? (
					<div className="flex items-center justify-center w-full h-screen">
						<div className="text-center w-1/4">
							<h1>Tu carrito esta vacío</h1>
							<Button text="¡Sigamos de compras!" />
						</div>
					</div>
				) : (
					<div className="ml-8">
						<div className="grid grid-cols-4 m-10">
							<h3>Producto</h3>
							<h3>Nombre</h3>
							<h3>Precio</h3>
						</div>
						<div>
							{cartItems.map((product: IProduct) => (
								<div
									key={product.id}
									className=" m-10 grid grid-cols-4"
								>
									<picture>
										<img
											className="object-cover"
											src={product.image}
											alt={product.name}
											style={{
												maxWidth: "100px",
												maxHeight: "100px",
											}}
										/>
									</picture>
									<div className="mt-4">
										<span>{product.name}</span>
									</div>
									<div className="mt-4">
										<span>${product.price}</span>
									</div>
									<div>
										<button
											className="w-1/5 flex justify-center py-2 border-transparent rounded-md shadow-sm text-l text-white bg-red-500 hover:bg-red-400 "
											onClick={() =>
												removeFromCart(product.id)
											}
										>
											Borrar
										</button>
									</div>
								</div>
							))}{" "}
						</div>

						{total > 0 && (
							<div className="justify-center p-4">
								<p className="justify-center p-4 font-bold text-2xl">
									Total: ${total}
								</p>
								<button
									onClick={handlePurchaseClick}
									className="w-1/5 mt-8 justify-center p-2 border-transparent rounded-md shadow-sm text-xl text-black bg-customYellow hover:bg-yellow-300"
								>
									Comprar
								</button>
							</div>
						)}
					</div>
				)}
			</div>
		</div>
	);
};

export default CartCardComponent;
