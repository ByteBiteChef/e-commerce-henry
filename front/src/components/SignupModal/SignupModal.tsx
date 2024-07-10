import { useState } from "react";

interface SignupModalProps {
	onClose: () => void;
}

const SignupModal: React.FC<SignupModalProps> = ({ onClose }) => {
	const [errors, setErrors] = useState<{ inputValues?: string }>({});
	const [form, setForm] = useState({
		name: "",
		email: "",
		password: "",
		address: "",
		phone: "",
	});
	const validateForm = ({
		name,
		email,
		password,
		address,
		phone,
	}: typeof form) => {
		const errors: { inputValues?: string } = {};

		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
		const phoneRegex = /^\d{0,15}$/;

		if (!name) {
			errors.inputValues = "Debes proporcionar un nombre";
		} else if (!email || !emailRegex.test(email)) {
			errors.inputValues = "Debes proporcionar un email válido";
		} else if (!password || !passwordRegex.test(password)) {
			errors.inputValues =
				"La contraseña debe tener al menos 8 caracteres y contener letras y números";
		} else if (!address) {
			errors.inputValues = "Debes proporcionar una dirección";
		} else if (!phone || !phoneRegex.test(phone)) {
			errors.inputValues =
				"Debes proporcionar un número de teléfono válido (10 dígitos)";
		}

		return errors;
	};

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
		setForm({ ...form, [name]: value });
	};
	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const validationErrors = validateForm(form);
		if (Object.keys(validationErrors).length > 0) {
			setErrors(validationErrors);
		} else {
			const response = await fetch(
				"http://localhost:3004/users/register",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(form),
				}
			);
			const data = await response.json();
			alert("Bienvenid@! Ahora solo debes loggearte!");
			onClose();
			console.log("Signup successful", data);
		}
	};
	return (
		<div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
			<div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md relative">
				<button
					onClick={onClose}
					className="absolute top-4 right-4 border-none rounded-md text-2xl cursor-pointer"
				>
					&times;
				</button>
				<h2 className="text-2xl font-semibold mb-4">Sign In</h2>
				<div>
					<form className="space-y-4" onSubmit={handleSubmit}>
						<div>
							<label className="block text-sm font-medium text-gray-700">
								Nombre de usuario
							</label>
							<input
								onChange={handleChange}
								type="text"
								name="name"
								placeholder="Nombre de usuario"
								className="mt-1 w-full flex justify-center py-2 border border-gray-300 rounded-md shadow-sm sm:text-sm"
							/>
						</div>
						<div>
							<label className="block text-sm font-medium text-gray-700">
								E-mail
							</label>
							<input
								onChange={handleChange}
								type="text"
								name="email"
								placeholder="E-mail"
								className="mt-1 w-full flex justify-center py-2 border border-gray-300 rounded-md shadow-sm sm:text-sm"
							/>
						</div>
						<div>
							<label className="block text-sm font-medium text-gray-700">
								Dirección
							</label>
							<input
								onChange={handleChange}
								type="text"
								name="address"
								placeholder="Dirección"
								className="mt-1 w-full flex justify-center py-2 border border-gray-300 rounded-md shadow-sm sm:text-sm"
							/>
						</div>
						<div>
							<label className="block text-sm font-medium text-gray-700">
								Numero de telefono
							</label>
							<input
								onChange={handleChange}
								type="text"
								name="phone"
								placeholder="Numero de telefono"
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
								Sign In
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default SignupModal;
