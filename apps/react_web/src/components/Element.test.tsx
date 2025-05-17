import "@testing-library/jest-dom";
import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Element } from "./Element";

describe("Element", () => {
  test("render", () => {
    render(<Element className="text-xl">hello world</Element>);
    const element = screen.getByText("hello world");
    expect(element).toBeInTheDocument();
    expect(element).toHaveRole("generic");
    expect(element).toHaveClass("text-xl");
  });

  test("aria attributes", () => {
    render(
      <Element ariaLabel="Click me" ariaCurrent="page">
        hello world
      </Element>,
    );
    const element = screen.getByText("hello world");
    expect(element).toBeInTheDocument();
    expect(element).toHaveRole("generic");
    expect(element).toHaveAttribute("aria-label", "Click me");
    expect(element).toHaveAttribute("aria-current", "page");
    expect(element).toHaveAccessibleName("Click me");
  });

  test("with role", () => {
    render(
      <Element role="button" ariaLabel="Click me" ariaPressed="true">
        Click me
      </Element>,
    );
    const element = screen.getByText("Click me");
    expect(element).toBeInTheDocument();
    expect(element).toHaveRole("button");
    expect(element).toHaveAttribute("aria-label", "Click me");
    expect(element).toHaveAttribute("aria-pressed", "true");
  });
});
