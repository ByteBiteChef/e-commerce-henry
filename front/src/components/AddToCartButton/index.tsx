"use client";

import { CartContext } from "@/context/CartContext";
import { useContext } from "react";
import { useAuth } from "@/context/AuthContext";
import Button from "@/components/LandingButton/LandingButton";

const AddToCartButton = ({ id }: { id: number }) => {
	const { addToCart } = useContext(CartContext);
	const { isLoggedIn } = useAuth();

	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		addToCart(id);
	};
	return (
		<div>
			{!isLoggedIn ? (
				<div className="justify-center">
					<div className="text-xl font-bold text-black">
						Debes estar logueado para hacer tu compra
					</div>
					<Button text="Volver" />
				</div>
			) : (
				<button
					onClick={handleClick}
					className="w-full m-8 flex justify-center py-2 border-transparent rounded-md shadow-sm text-2xl text-black bg-customYellow hover:bg-gray-400 focus:ring-offset-2"
				>
					Agregar
				</button>
			)}
		</div>
	);
};

export default AddToCartButton;
