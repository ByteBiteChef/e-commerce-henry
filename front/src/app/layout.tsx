import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { AuthProvider } from "@/context/AuthContext";
import { CartProvider } from "@/context/CartContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Gaaple",
	description: "e-commerce",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<AuthProvider>
			<CartProvider>
				<html lang="en">
					<body className={inter.className}>
						<Navbar />
						{children}
						<Footer />
					</body>
				</html>
			</CartProvider>
		</AuthProvider>
	);
}
