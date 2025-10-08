const Footer = () => {
	return (
		<footer
			className={`fantasy-page relative w-full py-6 mt-auto text-xs text-center border-t border-slate-400/30 text-slate-100`}
		>
			{/* Ornamental flourish / rune mark */}
			<div className="flex justify-center mb-2">
				<img
					src="/assets/images/flourish.svg"
					alt="Ornamental flourish"
					className="h-6 flourish-mark"
				/>
			</div>

			<p>
				&copy; {new Date().getFullYear()} Jaspreet Kaur Bhamra. Crafted with
				care and a hint of Elvish magic.
			</p>
		</footer>
	);
};

export default Footer;
