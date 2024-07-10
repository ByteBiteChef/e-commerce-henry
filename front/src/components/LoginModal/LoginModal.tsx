import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import LogoutButton from "@/components/LogOutButton";

interface LoginModalProps {
	onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ onClose }) => {
	const [errors, setErrors] = useState<{ inputValues?: string }>({});
	const [loginValues, setLoginValues] = useState({
		email: "",
		password: "",
	});
	const { setToken, setIsLoggedIn, isLoggedIn } = useAuth();

	const validateForm = ({ email, password }: typeof loginValues) => {
		const errors: { inputValues?: string } = {};
		if (!email || !password) {
			errors.inputValues = "Debes completar todos los campos";
		}
		return errors;
	};
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
		setLoginValues({ ...loginValues, [name]: value });
	};

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const validationErrors = validateForm(loginValues);
		if (Object.keys(validationErrors).length > 0) {
			setErrors(validationErrors);
		} else {
			try {
				const response = await fetch(
					"http://localhost:3004/users/login",
					{
						method: "POST",
						headers: {
							"Content-Type": "application/json",
						},

						body: JSON.stringify(loginValues),
					}
				);
				if (response.status === 400) {
					throw new Error("Invalid login credentials");
				}

				const data = await response.json();
				localStorage.setItem("user", JSON.stringify(data));
				localStorage.setItem("token", data.token);
				setToken(data.token);
				setIsLoggedIn(true);
				alert("Bienvenid@");
				onClose();
				console.log("Login successful", data);
			} catch (error) {
				console.error("Login failed", error);
				alert("Usuario o contraseña incorrecta");
			}
		}
	};
	return (
		<>
			<div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
				<div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md relative">
					<button
						onClick={onClose}
						className="absolute top-4 right-4 border-none rounded-md text-2xl cursor-pointer"
					>
						&times;
					</button>

					{isLoggedIn ? (
						<div>
							<h2 className="text-2xl font-semibold mb-4">
								Seguro quieres salir?
							</h2>
							<LogoutButton onClose={onClose} />
						</div>
					) : (
						<div>
							<h2 className="text-2xl font-semibold mb-4">
								Login
							</h2>
							<form className="space-y-4" onSubmit={handleSubmit}>
								<div>
									<label className="block text-sm font-medium text-gray-700">
										E-mail de usuario
									</label>
									<input
										onChange={handleChange}
										type="text"
										name="email"
										placeholder="email"
										className="mt-1 w-full flex justify-center py-2 border border-gray-300 rounded-md shadow-sm sm:text-sm"
									/>
								</div>
								<div>
									<label className="block text-sm font-medium text-gray-700">
										Contraseña
									</label>
									<input
										onChange={handleChange}
										type="password"
										name="password"
										placeholder="Contraseña"
										className="mt-1 w-full flex justify-center py-2 border border-gray-300 rounded-md shadow-sm sm:text-sm"
									/>
								</div>
								<div>
									{errors.inputValues && (
										<div className="text-red-500 text-sm">
											{errors.inputValues}
										</div>
									)}
									<button
										type="submit"
										className="w-full flex justify-center py-2 border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-customGreen hover:bg-gray-400 focus:ring-offset-2"
									>
										Login
									</button>
								</div>
							</form>
						</div>
					)}
				</div>
			</div>
		</>
	);
};

export default LoginModal;
