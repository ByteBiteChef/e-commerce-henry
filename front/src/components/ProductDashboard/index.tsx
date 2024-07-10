"use client";

import { useAuth } from "@/context/AuthContext";
import Button from "../LandingButton/LandingButton";

const formatDate = (dateString: string | undefined): string => {
	if (!dateString) return "Invalid date";
	const date = new Date(dateString);
	const day = String(date.getDate()).padStart(2, "0");
	const month = String(date.getMonth() + 1).padStart(2, "0");
	const year = date.getFullYear();
	return `${day}/${month}/${year}`;
};

const ProductDashboard = () => {
	const { orders } = useAuth();
	return (
		<div>
			{orders.length === 0 ? (
				<div className="flex items-center justify-center w-full h-screen">
					<div className="text-center w-1/3">
						<h1>No tienes ningúna compra aún</h1>
						<Button text="¡Sigamos de compras!" />
					</div>
				</div>
			) : (
				<div>
					{orders.map((order) => (
						<div key={order.id} className="flex-1 flex">
							<div className="flex-1 bg-gray-50 p-4">
								{order.products.map((product) => (
									<p key={product.id} className="ml-2 mb-1">
										{product.name}
									</p>
								))}
								<div className="bg-white p-4 rounded shadow">
									<div className="text-lg font-bold mb-4">
										Fecha de compra:{" "}
										{formatDate(order.date)}
									</div>
									<div className="text-lg font-bold mb-4">
										Estado de compra: {order.status}
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default ProductDashboard;
