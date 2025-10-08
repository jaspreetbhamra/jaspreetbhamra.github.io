import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const CollapsibleSection = ({ title, children }) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="border border-slate-600 rounded-2xl overflow-hidden">
			<button
				type="button"
				onClick={() => setIsOpen((prev) => !prev)}
				className="w-full text-left px-5 py-3 bg-slate-800/60 hover:bg-slate-700/60 transition-colors flex justify-between items-center"
			>
				<span className="text-slate-100 font-semibold">{title}</span>
				<span className="text-slate-400">{isOpen ? "−" : "+"}</span>
			</button>

			<AnimatePresence initial={false}>
				{isOpen && (
					<motion.div
						key="content"
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: "auto" }}
						exit={{ opacity: 0, height: 0 }}
						transition={{ duration: 0.4, ease: "easeInOut" }}
						className="px-6 py-4 bg-slate-900/40"
					>
						{/* Safety guard for all content types */}
						{Array.isArray(children)
							? // biome-ignore lint/suspicious/noArrayIndexKey: <static content>
								children.map((child, i) => <div key={i}>{child}</div>)
							: children || (
									<p className="text-slate-400 italic">No content available.</p>
								)}
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};

export default CollapsibleSection;
