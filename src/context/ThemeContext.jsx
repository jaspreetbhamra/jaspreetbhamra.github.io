import { createContext, useContext, useMemo, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
	const [language, setLanguage] = useState("elvish");

	const isTranslated = language === "english";
	const themeClass = useMemo(
		() => (isTranslated ? "theme-dark" : "theme-parchment"),
		[isTranslated],
	);
	const textColorClass = isTranslated ? "text-slate-100" : "text-slate-800";
	const headingFontClass = "font-english-display";

	const toggleLanguage = () => {
		setLanguage((prev) => (prev === "elvish" ? "english" : "elvish"));
	};

	const value = {
		language,
		setLanguage,
		isTranslated,
		themeClass,
		textColorClass,
		headingFontClass,
		toggleLanguage,
	};

	return (
		<ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
	);
};

export const useTheme = () => {
	const context = useContext(ThemeContext);
	if (!context) {
		throw new Error("useTheme must be used within a ThemeProvider");
	}
	return context;
};
