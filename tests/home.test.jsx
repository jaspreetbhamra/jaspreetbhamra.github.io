import { render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import { ThemeProvider } from "../src/context/ThemeContext";
import Home from "../src/pages/Home.jsx";

const renderWithProviders = (component) => {
	return render(
		<BrowserRouter>
			<ThemeProvider>{component}</ThemeProvider>
		</BrowserRouter>,
	);
};

describe("Home", () => {
	it("renders the home page with translate button", async () => {
		renderWithProviders(<Home />);

		// Check for translate button
		await waitFor(
			() => {
				const translateButton = screen.getByRole("button", {
					name: /reveal the hidden words/i,
				});
				expect(translateButton).toBeInTheDocument();
			},
			{ timeout: 3000 },
		);

		// Check for sidebar elements
		const names = screen.getAllByText(/Jaspreet Kaur Bhamra/i);
		expect(names.length).toBeGreaterThan(0);
		expect(
			screen.getByText(/Data Scientist • ML Engineer • Storyteller/i),
		).toBeInTheDocument();

		// Check for skip link
		expect(screen.getByText(/skip to main content/i)).toBeInTheDocument();
	});
});
