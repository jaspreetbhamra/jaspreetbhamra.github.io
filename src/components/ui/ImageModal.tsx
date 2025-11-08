import { useEffect } from "react";
import { X } from "lucide-react";

interface ImageModalProps {
	isOpen: boolean;
	onClose: () => void;
	imageSrc: string;
	imageAlt: string;
}

export function ImageModal({ isOpen, onClose, imageSrc, imageAlt }: ImageModalProps) {
	// Handle escape key
	useEffect(() => {
		const handleEscape = (e: KeyboardEvent) => {
			if (e.key === "Escape") {
				onClose();
			}
		};

		if (isOpen) {
			document.addEventListener("keydown", handleEscape);
			// Prevent body scroll when modal is open
			document.body.style.overflow = "hidden";
		}

		return () => {
			document.removeEventListener("keydown", handleEscape);
			document.body.style.overflow = "unset";
		};
	}, [isOpen, onClose]);

	if (!isOpen) return null;

	return (
		<div
			className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
			onClick={onClose}
			role="dialog"
			aria-modal="true"
			aria-label="Image preview"
		>
			{/* Close button */}
			<button
				type="button"
				onClick={onClose}
				className="absolute top-4 right-4 p-2 rounded-lg bg-neutral-900/50 hover:bg-neutral-900/70 text-white transition-colors duration-200"
				aria-label="Close image preview"
			>
				<X className="w-6 h-6" />
			</button>

			{/* Image container */}
			<div
				className="max-w-7xl max-h-[90vh] w-full"
				onClick={(e) => e.stopPropagation()}
			>
				<img
					src={imageSrc}
					alt={imageAlt}
					className="w-full h-full object-contain rounded-lg"
				/>
			</div>
		</div>
	);
}
