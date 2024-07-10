import styles from "./ButtonNavbar.module.css";
interface UserButtonProps {
	text: string;
	onClick: () => void;
}

const ButtonNavbar: React.FC<UserButtonProps> = ({ text, onClick }) => {
	return (
		<button onClick={onClick} className={styles.userButton}>
			{text}
		</button>
	);
};
export default ButtonNavbar;
