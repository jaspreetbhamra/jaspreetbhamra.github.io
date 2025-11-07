import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: ButtonVariant;
	size?: ButtonSize;
	children: ReactNode;
	fullWidth?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
	primary:
		"bg-accent-500 text-white hover:bg-accent-600 dark:bg-accent-400 dark:hover:bg-accent-300 dark:text-neutral-900",
	secondary:
		"bg-neutral-100 text-neutral-900 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-50 dark:hover:bg-neutral-700",
	outline:
		"border-2 border-neutral-300 text-neutral-700 hover:bg-neutral-50 dark:border-neutral-600 dark:text-neutral-300 dark:hover:bg-neutral-900",
	ghost:
		"text-neutral-700 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-800",
};

const sizeStyles: Record<ButtonSize, string> = {
	sm: "px-3 py-1.5 text-sm",
	md: "px-4 py-2 text-base",
	lg: "px-6 py-3 text-lg",
};

export function Button({
	variant = "primary",
	size = "md",
	fullWidth = false,
	className = "",
	children,
	disabled,
	...props
}: ButtonProps) {
	const baseStyles =
		"inline-flex items-center justify-center font-medium rounded-lg transition-colors-fast disabled:opacity-50 disabled:cursor-not-allowed";

	const classes = [
		baseStyles,
		variantStyles[variant],
		sizeStyles[size],
		fullWidth ? "w-full" : "",
		className,
	]
		.filter(Boolean)
		.join(" ");

	return (
		<button type="button" className={classes} disabled={disabled} {...props}>
			{children}
		</button>
	);
}
