import type { ReactNode } from "react";

type BadgeVariant = "default" | "accent" | "success" | "warning" | "neutral";
type BadgeSize = "sm" | "md";

interface BadgeProps {
	children: ReactNode;
	variant?: BadgeVariant;
	size?: BadgeSize;
	className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
	default:
		"bg-neutral-100 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300",
	accent:
		"bg-accent-100 text-accent-700 dark:bg-accent-900/30 dark:text-accent-300",
	success:
		"bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300",
	warning:
		"bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300",
	neutral:
		"bg-neutral-200 text-neutral-600 dark:bg-neutral-700 dark:text-neutral-400",
};

const sizeStyles: Record<BadgeSize, string> = {
	sm: "px-2 py-0.5 text-xs",
	md: "px-2.5 py-1 text-sm",
};

export function Badge({
	variant = "default",
	size = "sm",
	className = "",
	children,
}: BadgeProps) {
	const baseStyles = "inline-flex items-center font-medium rounded-md";

	const classes = [baseStyles, variantStyles[variant], sizeStyles[size], className]
		.filter(Boolean)
		.join(" ");

	return <span className={classes}>{children}</span>;
}
