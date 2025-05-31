import "@testing-library/jest-dom";
import { describe, test, expect, assertType } from "vitest";
import { render, screen } from "@testing-library/react";
import { Element } from "./Element";

describe("Element", () => {
  test("render", () => {
    render(
      <Element className="text-xl" role="generic">
        hello world
      </Element>,
    );
    const element = screen.getByText("hello world");
    expect(element).toBeInTheDocument();
    expect(element).toHaveRole("generic");
    expect(element).toHaveClass("text-xl");
  });

  test("aria attributes", () => {
    render(
      <Element ariaCurrent="page" role="generic">
        hello world
      </Element>,
    );
    const element = screen.getByText("hello world");
    expect(element).toBeInTheDocument();
    expect(element).toHaveRole("generic");
    expect(element).toHaveAttribute("aria-current", "page");
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

  test("types", () => {
    assertType<ReturnType<typeof Element>>(
      <Element className="text-xl" role="generic">
        hello world
      </Element>,
    );
    assertType<ReturnType<typeof Element>>(
      <Element ariaCurrent="page">hello world</Element>,
    );
    assertType<ReturnType<typeof Element>>(
      <Element role="button" ariaLabel="Click me" ariaPressed="true">
        Click me
      </Element>,
    );
    assertType<ReturnType<typeof Element>>(
      <Element
        // @ts-expect-error - ariaPressed is not a valid attribute for role="generic"
        ariaPressed="mixed"
      >
        Click me
      </Element>,
    );
    assertType<ReturnType<typeof Element>>(
      <Element
        role="link"
        ariaLabel="Click me"
        // @ts-expect-error - ariaPressed is not a valid attribute for role="link"
        ariaPressed="true"
      >
        Click me
      </Element>,
    );
  });
});
