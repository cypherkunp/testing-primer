import { render, screen } from "@testing-library/react";
import Greet from "./greet";

test("should display hello", () => {
  render(<Greet />);
  const helloElement = screen.getByText(/hello/i);
  expect(helloElement).toBeInTheDocument();
});

test("should display hello name", () => {
  const name = "John";
  render(<Greet name={name} />);
  const helloElement = screen.getByText(`Hello ${name}!`);
  expect(helloElement).toBeInTheDocument();
});
