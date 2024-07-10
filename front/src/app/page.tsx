import ImageSlider from "@/components/ImageSlider/ImageSlider";
import Button from "@/components/LandingButton/LandingButton";

export default function Landing() {
	return (
		<div className="h-screen flex flex-col h-screen items-center">
			<Button text="Vamos de compras!" />

			<div className="imgContainer">
				<ImageSlider />
			</div>
		</div>
	);
}
