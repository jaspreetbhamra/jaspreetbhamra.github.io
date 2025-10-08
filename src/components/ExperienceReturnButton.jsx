import { useNavigate } from "react-router-dom";

const ReturnButton = () => {
	const navigate = useNavigate();
	return (
		<button
			type="button"
			onClick={() => navigate("/experience")}
			className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-slate-500 bg-slate-700/40 text-slate-200 hover:border-sky-400 hover:text-sky-300 transition-all"
		>
			← Return to Experience Home
		</button>
	);
};

export default ReturnButton;
