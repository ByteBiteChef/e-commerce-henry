import AddToCartButton from "@/components/AddToCartButton";
import { fetchProductById } from "@/lib/service/services";

const ProductDetail = async ({ params }: { params: { id: string } }) => {
	const product = await fetchProductById(params.id);

	return (
		<div className="grid grid-cols-1 m-40 mt-1 mb-5">
			<div
				key={product.id}
				className="grid-cols-1 grid shadow-md rounded-lg overflow-hidden  m-40 mt-1 mb-5"
			>
				<div className="p-4">
					<picture>
						<img
							className="object-cover"
							src={product.image}
							alt={product.name}
							style={{
								maxWidth: "400px",
								maxHeight: "400px",
							}}
						/>
					</picture>

					<h2 className="text-xl font-bold text-black">
						{product.name}
					</h2>
					<h4>Precio:</h4>
					<p>${product.price}</p>

					<h4>Descripción:</h4>
					<p>{product.description}</p>
				</div>
				<div className="flex justify-center">
					<AddToCartButton id={product.id} />
				</div>
			</div>
		</div>
	);
};
export default ProductDetail;
