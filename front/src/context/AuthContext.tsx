"use client";

import {
	useContext,
	createContext,
	useState,
	ReactNode,
	useEffect,
} from "react";
import { IAuthContextType, IOrders } from "@/interfaces";
import { fetchOrders } from "@/lib/service/services";

interface AuthProviderProps {
	children: ReactNode;
}

const AuthContext = createContext<IAuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
	const [token, setToken] = useState<string | null>(null);
	const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
	const [orders, setOrders] = useState<IOrders[]>([]);

	const getUsersOrders = async (token: string | null) => {
		const orders = await fetchOrders(token);
		setOrders(orders);
		localStorage.setItem("orders", JSON.stringify(orders));
	};

	useEffect(() => {
		if (typeof window !== "undefined") {
			const storedToken = localStorage.getItem("token");
			if (storedToken) {
				setToken(storedToken);
				setIsLoggedIn(true);
				getUsersOrders(storedToken);
			}
		}
	}, []);

	return (
		<AuthContext.Provider
			value={{
				isLoggedIn,
				token,
				setToken,
				setIsLoggedIn,
				getUsersOrders,
				orders,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = (): IAuthContextType => {
	const context = useContext(AuthContext);
	if (context === undefined) {
		throw new Error("useAuth must be used within an AuthProvider");
	}
	return context;
};
