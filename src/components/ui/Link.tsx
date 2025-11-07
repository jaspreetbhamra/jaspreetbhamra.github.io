import { Link as RouterLink } from "react-router-dom";
import type { ReactNode } from "react";

type LinkVariant = "default" | "subtle" | "accent";

interface BaseLinkProps {
	children: ReactNode;
	variant?: LinkVariant;
	className?: string;
}

interface InternalLinkProps extends BaseLinkProps {
	to: string;
	external?: never;
}

interface ExternalLinkProps extends BaseLinkProps {
	href: string;
	external: true;
}

type LinkProps = InternalLinkProps | ExternalLinkProps;

const variantStyles: Record<LinkVariant, string> = {
	default:
		"text-accent-600 hover:text-accent-700 dark:text-accent-400 dark:hover:text-accent-300 underline-offset-2 hover:underline",
	subtle:
		"text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-50 underline-offset-2 hover:underline",
	accent:
		"text-accent-500 hover:text-accent-600 dark:text-accent-400 dark:hover:text-accent-300 font-medium underline-offset-2 hover:underline",
};

export function Link({
	variant = "default",
	className = "",
	children,
	...props
}: LinkProps) {
	const baseStyles = "transition-colors-fast";
	const classes = [baseStyles, variantStyles[variant], className]
		.filter(Boolean)
		.join(" ");

	if ("external" in props && props.external) {
		return (
			<a
				href={props.href}
				className={classes}
				target="_blank"
				rel="noopener noreferrer"
			>
				{children}
			</a>
		);
	}

	return (
		<RouterLink to={(props as InternalLinkProps).to} className={classes}>
			{children}
		</RouterLink>
	);
}
