import Button from "@/components/LandingButton/LandingButton";

const PurchaseSuccess = () => {
	return (
		<div className="flex items-center justify-center h-screen">
			<div className="text-center w-1/4">
				<h1>Felicidades por tú compra!</h1>
				<Button text="Ver más productos" />
			</div>
		</div>
	);
};
export default PurchaseSuccess;
