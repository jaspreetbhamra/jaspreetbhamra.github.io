/**
 * Global type definitions
 */

import type { LazyExoticComponent } from "react";

export interface RouteConfig {
	path: string;
	element: LazyExoticComponent<() => React.JSX.Element | null>;
	label?: string;
}

export interface NavLink {
	path: string;
	label: string;
}
