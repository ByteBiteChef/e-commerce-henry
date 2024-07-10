"use client";

import { useState } from "react";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import styles from "./ImageSlider.module.css";

const ImageSlider = () => {
	const imageUrls = [
		"https://assets.techrepublic.com/uploads/2021/10/apple-macbook-pro-16-inch-screen-10182021-big-carousel-jpg-large-2x.jpg",
		"https://www.apple.com/v/ipad-pro/aq/images/overview/closer-look/space-black/slide_3A__fmel0mesnxqq_large_2x.jpg",
		"https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-14-model-unselect-gallery-2-202303_GEO_US?wid=5120&hei=2880&fmt=webp&qlt=70&.v=NjB6M3BqTGRudDZtakJrUG5tT2pHTGdzSmpObkZCM3MrNmJ5SkhESlNDak01bFZZM0E3ZWhua1Y4cWFLVUtGUDhLcXQxZ1h0QThIT2dnUm5qbGk5OUJkSERIUjY1Wk1Od3FtNjF6NFZLVXRPVnMvK0xjdWJSTGNZak9kenU3ZVZmY1BIbXdKdTZHQkJxQjU1d2E5aWtnPT0=&traceId=1",
	];
	const [imageIndex, setImageIndex] = useState(0);

	const prevImage = () => {
		setImageIndex((index) => {
			if (index === 0) return imageUrls.length - 1;
			return index - 1;
		});
	};

	const nextImage = () => {
		setImageIndex((index) => {
			if (index === imageUrls.length - 1) return 0;
			return index + 1;
		});
	};

	return (
		<div>
			<picture className={styles.imageCont}>
				<img
					className={styles.image}
					src={imageUrls[imageIndex]}
					alt="Products"
					width={700}
					height={475}
				/>
				<button onClick={nextImage} className={styles.leftButton}>
					<ArrowBigLeft />
				</button>
				<button onClick={prevImage} className={styles.rightButton}>
					<ArrowBigRight />
				</button>
			</picture>
		</div>
	);
};

export default ImageSlider;
