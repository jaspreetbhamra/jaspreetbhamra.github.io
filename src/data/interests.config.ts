/**
 * Interests Page Configuration
 * Toggle visibility of sections on the Interests page
 *
 * Set to true to show the section, false to hide it
 */

export interface InterestsConfig {
	showPaintings: boolean;
	showPhotography: boolean;
	showMusic: boolean;
}

/**
 * Main configuration object
 * Edit the values below to show/hide sections
 */
export const interestsConfig: InterestsConfig = {
	showPaintings: true,
	showPhotography: true,
	showMusic: true,
};

/**
 * Helper function to check if any section is visible
 */
export function hasVisibleSections(): boolean {
	return Object.values(interestsConfig).some((visible) => visible);
}

/**
 * Get count of visible sections
 */
export function getVisibleSectionsCount(): number {
	return Object.values(interestsConfig).filter((visible) => visible).length;
}
