import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders App without crashing", () => {
  render(<App />);
});

test("renders the form header", () => {
  // Arrange
  render(<App />)

  // Act
  // Query for the header element
  const header = screen.getByText(/my app/i)


  // Assert
  // Make an assertion (using Jest global functions)
  expect(header).toBeInTheDocument()
})