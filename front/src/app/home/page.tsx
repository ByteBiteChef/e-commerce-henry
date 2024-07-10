import ProductCard from "@/components/ProductsCard/ProductsCard";
import { fetchProducts } from "@/lib/service/services";

const Home = async () => {
	const products = await fetchProducts();
	return (
		<div>
			<ProductCard products={products} />
		</div>
	);
};

export default Home;
