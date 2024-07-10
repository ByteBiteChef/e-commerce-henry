import { IProduct } from "../../interfaces/index";
import Link from "next/link";

interface IProductCardProps {
	products: IProduct[];
}

const ProductCard = ({ products }: IProductCardProps) => {
	return (
		<div className="grid gap-8 lg:grid-cols-6 p-4 h-dvh bg-gray-10">
			{products.map((product: IProduct) => (
				<div
					key={product.id}
					className="bg-gray-10 shadow-md rounded-lg hover:bg-gray-50"
				>
					<Link
						href={`/products/${product.id}`}
						className="no-underline text-inherit"
					>
						<div className="p-6 flex flex-col h-full">
							<picture>
								<img
									className="product-cover"
									src={product.image}
									alt={product.name}
									style={{
										maxWidth: "100%",
										maxHeight: "200px",
									}}
								/>
							</picture>
							<div className="mt-auto mb-10">
								<h2 className="text-xl font-bold text-black">
									{product.name}
								</h2>
								<p className="text-gray-700">
									Price: ${product.price}
								</p>
							</div>
						</div>
					</Link>
				</div>
			))}
		</div>
	);
};

export default ProductCard;
