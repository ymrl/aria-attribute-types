import { describe, test, expect } from "vitest";
import { convertCamelizedAttributes } from "./convertCamelizedAttributes";

describe("convertCamelizedAttributes", () => {
  test("converts camelCase ARIA props to kebab-case", () => {
    expect(
      convertCamelizedAttributes({
        ariaActiveDescendant: "foo",
        ariaAtomic: true,
        ariaAutoComplete: "none",
        ariaColIndex: 1,
        "data-foo": "bar",
        tabIndex: 0,
        href: "https://example.com",
      }),
    ).toEqual({
      "aria-activedescendant": "foo",
      "aria-atomic": true,
      "aria-autocomplete": "none",
      "aria-colindex": 1,
      "data-foo": "bar",
      tabIndex: 0,
      href: "https://example.com",
    });
  });
});
