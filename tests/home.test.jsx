import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Home from "../src/pages/Home.jsx";

describe("Home", () => {
	it("reveals navigation links after translating to English", async () => {
		render(<Home />);

		const translateButton = screen.getByRole("button", {
			name: /click here to translate/i,
		});

		await waitFor(() => expect(translateButton).not.toBeDisabled());

		await userEvent.click(translateButton);

		expect(
			await screen.findByRole("link", { name: /resume/i }),
		).toBeInTheDocument();
		expect(
			screen.getByRole("button", { name: /return to elvish/i }),
		).toBeInTheDocument();
	});
});
