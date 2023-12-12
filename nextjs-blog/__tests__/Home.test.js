import { render, screen } from "@testing-library/react";
import Home from "../pages/index";

it("should have Next.js! text", () => {
  render(<Home />); // ARRANGE
  const linkElement = screen.getByText("Next.js!"); // ACT
  expect(linkElement).toBeInTheDocument(); // ASSERT
});
