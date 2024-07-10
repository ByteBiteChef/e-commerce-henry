"use client";

import styles from "./Navbar.module.css";
import ButtonNavbar from "../ButtonNavbar/ButtonNavbar";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "@/components/SignupModal/SignupModal";
import { useAuth } from "@/context/AuthContext";

const Navbar: React.FC = () => {
	const { isLoggedIn } = useAuth();
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
	const router = useRouter();
	const pathname = usePathname();
	const openModal = () => {
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};
	const openRegisterModal = () => {
		setIsRegisterModalOpen(true);
	};

	const closeRegisterModal = () => {
		setIsRegisterModalOpen(false);
	};

	const handleLogoClick = () => {
		router.push("/home");
	};
	return (
		<div className={styles.navContainer}>
			<picture>
				<img
					onClick={handleLogoClick}
					style={{ cursor: "pointer" }}
					src="/logoPm4.png"
					alt="logo"
				/>
				<h1 className="text-4xl">Gaaple</h1>
			</picture>

			<div className={styles.navList}>
				<li>
					{pathname !== "/home" && <a href="/home">Productos</a>}
					{!isLoggedIn ? null : <a href="/cart">Mi carrito</a>}
					{!isLoggedIn ? null : <a href="/dashboard">Mis compras</a>}
				</li>
			</div>
			{(pathname === "/home" || pathname.startsWith("/product")) && (
				<div className={styles.buttonContainer}>
					<ButtonNavbar
						text={isLoggedIn ? "Logout" : "Login"}
						onClick={openModal}
					/>
					{isLoggedIn ? null : (
						<ButtonNavbar
							text="Sign up"
							onClick={openRegisterModal}
						/>
					)}
				</div>
			)}
			{isModalOpen && <LoginModal onClose={closeModal} />}
			{isRegisterModalOpen && (
				<RegisterModal onClose={closeRegisterModal} />
			)}
		</div>
	);
};

export default Navbar;
