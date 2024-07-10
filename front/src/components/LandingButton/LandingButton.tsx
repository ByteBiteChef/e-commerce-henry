"use client";

import { useRouter } from "next/navigation";

interface ButtonProps {
	text: string;
}

const Button: React.FC<ButtonProps> = ({ text }) => {
	const router = useRouter();
	const handleClick = () => {
		router.push("/home");
	};
	return (
		<div>
			<button
				onClick={handleClick}
				className="w-full mt-8 mb-8 flex justify-center py-2 border-transparent rounded-md shadow-sm text-2xl text-black bg-customYellow hover:bg-gray-400 focus:ring-offset-2"
			>
				{text}
			</button>
		</div>
	);
};

export default Button;
