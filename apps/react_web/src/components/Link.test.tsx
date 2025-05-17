import "@testing-library/jest-dom";
import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Link } from "./Link";

describe("Link", () => {
  test("render", () => {
    render(
      <Link href="/" target="_blank" className="text-xl">
        Click me
      </Link>,
    );
    const link = screen.getByText("Click me");
    expect(link).toBeInTheDocument();
    expect(link).toHaveRole("link");
    expect(link).toHaveAttribute("href", "/");
    expect(link).toHaveClass("text-xl");
    expect(link).toHaveAttribute("target", "_blank");
  });

  test("aria attributes", () => {
    render(
      <Link href="/" ariaLabel="Click me" ariaCurrent="page">
        Click me
      </Link>,
    );
    const link = screen.getByText("Click me");
    expect(link).toBeInTheDocument();
    expect(link).toHaveRole("link");
    expect(link).toHaveAttribute("aria-label", "Click me");
    expect(link).toHaveAttribute("aria-current", "page");
    expect(link).toHaveAccessibleName("Click me");
  });

  test("with role", () => {
    render(
      <Link href="/" role="button" ariaLabel="Click me" ariaPressed="true">
        Click me
      </Link>,
    );
    const link = screen.getByText("Click me");
    expect(link).toBeInTheDocument();
    expect(link).toHaveRole("button");
    expect(link).toHaveAttribute("href", "/");
    expect(link).toHaveAttribute("aria-label", "Click me");
    expect(link).toHaveAttribute("aria-pressed", "true");
  });
});
