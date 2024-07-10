export interface ICartContextType {
	cartItems: IProduct[];
	addToCart: (product: number) => void;
	removeFromCart: (product: number) => void;
	total: number;
	buyProducts: () => void;
}
export interface IUser {
    name: string
    email: string
    address: string
    phone: string
}

export interface IAuthContextType {
	isLoggedIn: boolean;
	token: string | null;
	setIsLoggedIn: (isLoggedIn: boolean) => void;
	setToken: (token: string | null) => void;
    getUsersOrders: (token: string | null) => void;
    orders: IOrders[],
}

export interface IOrders {
    products: IProduct[]
    status: string;
    date: string;
    id: number;
    user: IUser;
}

export interface IProduct {
    id: number;
    name: string;
    price: number ;
    description: string;
    image: string;
    categoryId: number;
    stock: number;
    quantity: number;
}
