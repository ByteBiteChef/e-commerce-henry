"use client";

import styles from "./Footer.module.css";

const Footer = () => {
	const handleIconClick = () => {
		window.location.href = "https://github.com/ByteBiteChef";
	};
	return (
		<div className={styles.footer}>
			<picture>
				<img
					onClick={handleIconClick}
					style={{
						cursor: "pointer",
						width: "15%",
						height: "15%",
					}}
					src="/git-icon.png"
					alt="github-icon"
				/>
			</picture>

			<div className="container mx-auto text-center">
				<p className="mb-2">
					© 2024 Gaaple. Todos los derechos reservados.
				</p>
				<p className="mb-2">
					Tu destino definitivo para lo último y lo mejor en
					tecnología. Explora, descubre y mantente a la vanguardia con
					Gaaple.
				</p>
			</div>
		</div>
	);
};

export default Footer;
