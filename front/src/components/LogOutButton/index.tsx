"use client";

import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

interface LogoutProps {
	onClose: () => void;
}

const LogoutButton: React.FC<LogoutProps> = ({ onClose }) => {
	const { setToken, setIsLoggedIn, isLoggedIn } = useAuth();

	const router = useRouter();

	const handleLogout = () => {
		localStorage.removeItem("user");
		localStorage.removeItem("token");
		setToken(null);
		setIsLoggedIn(false);
		router.push("/");
		onClose();
	};
	return (
		<div>
			<button
				className="w-full flex justify-center py-2 border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-customGreen hover:bg-gray-400 focus:ring-offset-2"
				onClick={handleLogout}
			>
				Logout
			</button>
		</div>
	);
};

export default LogoutButton;
