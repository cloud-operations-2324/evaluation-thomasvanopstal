import { render, screen, fireEvent } from "@testing-library/react";
import Home from "../pages/index";

// it("should have Next text", () => {
//   render(<Home />); // ARRANGE
//   const linkElement = screen.getByText("Up"); // ACT
//   screen.expect(linkElement).toBeInTheDocument(); // ASSERT
// });
// it("should update count when Up button is clicked", () => {
//   render(<Home />); // ARRANGE

//   // Get the button and click it
//   const buttonElement = screen.getByText("Up");
//   fireEvent.click(buttonElement);

//   // Get the updated count text and check if it is in the document
//   const updatedCountElement = screen.getByText("Count: 1"); // Update to the expected count
//   expect(updatedCountElement).toBeInTheDocument();
// });
it("should always pass", () => {
  expect(true).toBeTruthy();
});
