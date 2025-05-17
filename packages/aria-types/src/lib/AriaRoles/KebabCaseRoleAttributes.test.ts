import { assertType, describe, test, it } from "vitest";
import { KebabCaseRoleAttributes } from "./KebabCaseRoleAttributes";

describe("KebabCaseRoleAttributes", () => {
  it("should not have any aria property without role", () => {
    assertType<KebabCaseRoleAttributes>({
      role: undefined,
      // @ts-expect-error undefined role should not have any aria property
      "aria-label": "foobar",
    });
    assertType<KebabCaseRoleAttributes>(
      // @ts-expect-error undefined role should not have any aria property
      {
        "aria-label": "foobar",
      },
    );
  });
  it("should not allow invalid role", () => {
    assertType<KebabCaseRoleAttributes>({
      // @ts-expect-error invalid role should not have any aria property
      role: "invalid-role",
      "aria-label": "foobar",
    });
  });

  describe("alert", () => {
    it("should have alert role, and aria properties", () => {
      assertType<KebabCaseRoleAttributes>({
        role: "alert",
        "aria-label": "foobar",
      });
      assertType<KebabCaseRoleAttributes>({
        role: "awesome alert",
        "aria-label": "foobar",
      });
    });
    test("other aria properties", () => {
      assertType<KebabCaseRoleAttributes>({
        role: "alert",
        "aria-label": "foobar",
        // @ts-expect-error aria-activedescendant is not a valid aria property for alert role
        "aria-activedescendant": "foobar",
      });
    });
  });

  describe("alertdialog", () => {
    it("should have alertdialog role, and aria properties", () => {
      assertType<KebabCaseRoleAttributes>({
        role: "alertdialog",
        "aria-label": "foobar",
        "aria-modal": true,
      });
      assertType<KebabCaseRoleAttributes>({
        role: "awesome alertdialog",
        "aria-label": "foobar",
        "aria-modal": true,
      });
    });
    test("other aria properties", () => {
      assertType<KebabCaseRoleAttributes>({
        role: "alertdialog",
        "aria-label": "foobar",
        "aria-modal": true,
        // @ts-expect-error aria-activedescendant is not a valid aria property for alertdialog role
        "aria-activedescendant": "foobar",
      });
    });
  });

  describe("application", () => {
    it("should have application role, and aria properties", () => {
      assertType<KebabCaseRoleAttributes>({
        role: "application",
        "aria-label": "foobar",
        "aria-activedescendant": "foobar",
      });
      assertType<KebabCaseRoleAttributes>({
        role: "awesome application",
        "aria-label": "foobar",
        "aria-activedescendant": "foobar",
      });
    });
    test("other aria properties", () => {
      assertType<KebabCaseRoleAttributes>({
        role: "application",
        "aria-label": "foobar",
        "aria-activedescendant": "foobar",
        // @ts-expect-error aria-autocomplete is not a valid aria property for application role
        "aria-autocomplete": "none",
      });
    });
  });

  describe("article", () => {
    it("should have article role, and aria properties", () => {
      assertType<KebabCaseRoleAttributes>({
        role: "article",
        "aria-label": "foobar",
      });
      assertType<KebabCaseRoleAttributes>({
        role: "awesome article",
        "aria-label": "foobar",
      });
    });
    test("other aria properties", () => {
      assertType<KebabCaseRoleAttributes>({
        role: "article",
        "aria-label": "foobar",
        // @ts-expect-error aria-activedescendant is not a valid aria property for article role
        "aria-activedescendant": "foobar",
      });
    });
  });

  describe("banner", () => {
    it("should have banner role, and aria properties", () => {
      assertType<KebabCaseRoleAttributes>({
        role: "banner",
        "aria-label": "foobar",
      });
      assertType<KebabCaseRoleAttributes>({
        role: "awesome banner",
        "aria-label": "foobar",
      });
    });
    test("other aria properties", () => {
      assertType<KebabCaseRoleAttributes>({
        role: "banner",
        "aria-label": "foobar",
        // @ts-expect-error aria-activedescendant is not a valid aria property for banner role
        "aria-activedescendant": "foobar",
      });
    });
  });
  describe("blockquote", () => {
    it("should have blockquote role, and aria properties", () => {
      assertType<KebabCaseRoleAttributes>({
        role: "blockquote",
        "aria-label": "foobar",
      });
      assertType<KebabCaseRoleAttributes>({
        role: "awesome blockquote",
        "aria-label": "foobar",
      });
    });
    test("other aria properties", () => {
      assertType<KebabCaseRoleAttributes>({
        role: "blockquote",
        "aria-label": "foobar",
        // @ts-expect-error aria-activedescendant is not a valid aria property for blockquote role
        "aria-activedescendant": "foobar",
      });
    });
  });
  describe("button", () => {
    it("should have button role, and aria properties", () => {
      assertType<KebabCaseRoleAttributes>({
        role: "button",
        "aria-label": "foobar",
      });
      assertType<KebabCaseRoleAttributes>({
        role: "awesome button",
        "aria-label": "foobar",
      });
    });
    test("other aria properties", () => {
      assertType<KebabCaseRoleAttributes>({
        role: "button",
        "aria-label": "foobar",
        // @ts-expect-error aria-activedescendant is not a valid aria property for button role
        "aria-activedescendant": "foobar",
      });
    });
  });
  describe("caption", () => {
    it("should have caption role, and aria properties", () => {
      assertType<KebabCaseRoleAttributes>({
        role: "caption",
        "aria-atomic": "true",
      });
      assertType<KebabCaseRoleAttributes>({
        role: "awesome caption",
        "aria-atomic": "true",
      });
    });
    test("other aria properties", () => {
      assertType<KebabCaseRoleAttributes>({
        role: "caption",
        // @ts-expect-error aria-label is prohibited for caption role
        "aria-label": "foobar",
      });
      assertType<KebabCaseRoleAttributes>({
        role: "caption",
        // @ts-expect-error aria-activedescendant is not a valid aria property for caption role
        "aria-activedescendant": "foobar",
      });
    });
  });
  describe("cell", () => {
    it("should have cell role, and aria properties", () => {
      assertType<KebabCaseRoleAttributes>({
        role: "cell",
        "aria-label": "foobar",
      });
      assertType<KebabCaseRoleAttributes>({
        role: "awesome cell",
        "aria-label": "foobar",
      });
    });
    test("other aria properties", () => {
      assertType<KebabCaseRoleAttributes>({
        role: "cell",
        "aria-label": "foobar",
        // @ts-expect-error aria-activedescendant is not a valid aria property for cell role
        "aria-activedescendant": "foobar",
      });
    });
  });
  describe("checkbox", () => {
    it("should have checkbox role, and aria properties", () => {
      assertType<KebabCaseRoleAttributes>({
        role: "checkbox",
        "aria-label": "foobar",
      });
      assertType<KebabCaseRoleAttributes>({
        role: "awesome checkbox",
        "aria-label": "foobar",
      });
    });
    test("other aria properties", () => {
      assertType<KebabCaseRoleAttributes>({
        role: "checkbox",
        "aria-label": "foobar",
        // @ts-expect-error aria-activedescendant is not a valid aria property for checkbox role
        "aria-activedescendant": "foobar",
      });
    });
  });
  describe("code", () => {
    it("should have code role, and aria properties", () => {
      assertType<KebabCaseRoleAttributes>({
        role: "code",
        "aria-label": "foobar",
      });
      assertType<KebabCaseRoleAttributes>({
        role: "awesome code",
        "aria-label": "foobar",
      });
    });
    test("other aria properties", () => {
      assertType<KebabCaseRoleAttributes>({
        role: "code",
        "aria-label": "foobar",
        // @ts-expect-error aria-activedescendant is not a valid aria property for code role
        "aria-activedescendant": "foobar",
      });
    });
  });
  describe("columnheader", () => {
    it("should have columnheader role, and aria properties", () => {
      assertType<KebabCaseRoleAttributes>({
        role: "columnheader",
        "aria-label": "foobar",
        "aria-sort": "ascending",
      });
      assertType<KebabCaseRoleAttributes>({
        role: "awesome columnheader",
        "aria-label": "foobar",
        "aria-sort": "ascending",
      });
    });
    test("other aria properties", () => {
      assertType<KebabCaseRoleAttributes>({
        role: "columnheader",
        "aria-label": "foobar",
        // @ts-expect-error aria-activedescendant is not a valid aria property for columnheader role
        "aria-activedescendant": "foobar",
      });
    });
  });
  describe("combobox", () => {
    it("should have combobox role, and aria properties", () => {
      assertType<KebabCaseRoleAttributes>({
        role: "combobox",
        "aria-label": "foobar",
        "aria-haspopup": "listbox",
        "aria-activedescendant": "foobar",
      });
      assertType<KebabCaseRoleAttributes>({
        role: "awesome combobox",
        "aria-label": "foobar",
        "aria-haspopup": "listbox",
        "aria-activedescendant": "foobar",
      });
    });
    test("other aria properties", () => {
      assertType<KebabCaseRoleAttributes>({
        role: "combobox",
        "aria-label": "foobar",
        // @ts-expect-error aria-colcount is not a valid aria property for combobox role
        "aria-colcount": 2,
      });
    });
  });
  describe("complementary", () => {
    it("should have complementary role, and aria properties", () => {
      assertType<KebabCaseRoleAttributes>({
        role: "complementary",
        "aria-label": "foobar",
      });
      assertType<KebabCaseRoleAttributes>({
        role: "awesome complementary",
        "aria-label": "foobar",
      });
    });
    test("other aria properties", () => {
      assertType<KebabCaseRoleAttributes>({
        role: "complementary",
        "aria-label": "foobar",
        // @ts-expect-error aria-activedescendant is not a valid aria property for complementary role
        "aria-activedescendant": "foobar",
      });
    });
  });
  describe("contentinfo", () => {
    it("should have contentinfo role, and aria properties", () => {
      assertType<KebabCaseRoleAttributes>({
        role: "contentinfo",
        "aria-label": "foobar",
      });
      assertType<KebabCaseRoleAttributes>({
        role: "awesome contentinfo",
        "aria-label": "foobar",
      });
    });
    test("other aria properties", () => {
      assertType<KebabCaseRoleAttributes>({
        role: "contentinfo",
        "aria-label": "foobar",
        // @ts-expect-error aria-activedescendant is not a valid aria property for contentinfo role
        "aria-activedescendant": "foobar",
      });
    });
  });
  describe("definition", () => {
    it("should have definition role, and aria properties", () => {
      assertType<KebabCaseRoleAttributes>({
        role: "definition",
        "aria-label": "foobar",
      });
      assertType<KebabCaseRoleAttributes>({
        role: "awesome definition",
        "aria-label": "foobar",
      });
    });
    test("other aria properties", () => {
      assertType<KebabCaseRoleAttributes>({
        role: "definition",
        "aria-label": "foobar",
        // @ts-expect-error aria-activedescendant is not a valid aria property for definition role
        "aria-activedescendant": "foobar",
      });
    });
  });
  describe("deletion", () => {
    it("should have deletion role, and aria properties", () => {
      assertType<KebabCaseRoleAttributes>({
        role: "deletion",
        "aria-atomic": "true",
      });
      assertType<KebabCaseRoleAttributes>({
        role: "awesome deletion",
        "aria-atomic": "true",
      });
    });
    test("other aria properties", () => {
      assertType<KebabCaseRoleAttributes>({
        role: "deletion",
        // @ts-expect-error aria-label is prohibited for deletion role
        "aria-label": "foobar",
      });
    });
  });
  describe("dialog", () => {
    it("should have dialog role, and aria properties", () => {
      assertType<KebabCaseRoleAttributes>({
        role: "dialog",
        "aria-label": "foobar",
        "aria-modal": true,
      });
      assertType<KebabCaseRoleAttributes>({
        role: "awesome dialog",
        "aria-label": "foobar",
        "aria-modal": true,
      });
    });
    test("other aria properties", () => {
      assertType<KebabCaseRoleAttributes>({
        role: "dialog",
        "aria-label": "foobar",
        // @ts-expect-error aria-activedescendant is not a valid aria property for dialog role
        "aria-activedescendant": "foobar",
      });
    });
  });
  describe("directory", () => {
    it("should have directory role, and aria properties", () => {
      assertType<KebabCaseRoleAttributes>({
        role: "directory",
        "aria-label": "foobar",
      });
      assertType<KebabCaseRoleAttributes>({
        role: "awesome directory",
        "aria-label": "foobar",
      });
    });
    test("other aria properties", () => {
      assertType<KebabCaseRoleAttributes>({
        role: "directory",
        "aria-label": "foobar",
        // @ts-expect-error aria-activedescendant is not a valid aria property for directory role
        "aria-activedescendant": "foobar",
      });
    });
  });
  describe("document", () => {
    it("should have document role, and aria properties", () => {
      assertType<KebabCaseRoleAttributes>({
        role: "document",
        "aria-label": "foobar",
      });
      assertType<KebabCaseRoleAttributes>({
        role: "awesome document",
        "aria-label": "foobar",
      });
    });
    test("other aria properties", () => {
      assertType<KebabCaseRoleAttributes>({
        role: "document",
        "aria-label": "foobar",
        // @ts-expect-error aria-activedescendant is not a valid aria property for document role
        "aria-activedescendant": "foobar",
      });
    });
  });
  describe("emphasis", () => {
    it("should have emphasis role, and aria properties", () => {
      assertType<KebabCaseRoleAttributes>({
        role: "emphasis",
        "aria-atomic": "true",
      });
      assertType<KebabCaseRoleAttributes>({
        role: "awesome emphasis",
        "aria-atomic": "true",
      });
    });
    test("other aria properties", () => {
      assertType<KebabCaseRoleAttributes>({
        role: "emphasis",
        // @ts-expect-error aria-label is prohibited for emphasis role
        "aria-label": "foobar",
      });
    });
  });
  describe("feed", () => {
    it("should have feed role, and aria properties", () => {
      assertType<KebabCaseRoleAttributes>({
        role: "feed",
        "aria-label": "foobar",
      });
      assertType<KebabCaseRoleAttributes>({
        role: "awesome feed",
        "aria-label": "foobar",
      });
    });
    test("other aria properties", () => {
      assertType<KebabCaseRoleAttributes>({
        role: "feed",
        "aria-label": "foobar",
        // @ts-expect-error aria-activedescendant is not a valid aria property for feed role
        "aria-activedescendant": "foobar",
      });
    });
  });
  describe("figure", () => {
    it("should have figure role, and aria properties", () => {
      assertType<KebabCaseRoleAttributes>({
        role: "figure",
        "aria-label": "foobar",
      });
      assertType<KebabCaseRoleAttributes>({
        role: "awesome figure",
        "aria-label": "foobar",
      });
    });
    test("other aria properties", () => {
      assertType<KebabCaseRoleAttributes>({
        role: "figure",
        "aria-label": "foobar",
        // @ts-expect-error aria-activedescendant is not a valid aria property for figure role
        "aria-activedescendant": "foobar",
      });
    });
  });
  describe("form", () => {
    it("should have form role, and aria properties", () => {
      assertType<KebabCaseRoleAttributes>({
        role: "form",
        "aria-label": "foobar",
      });
      assertType<KebabCaseRoleAttributes>({
        role: "awesome form",
        "aria-label": "foobar",
      });
    });
    test("other aria properties", () => {
      assertType<KebabCaseRoleAttributes>({
        role: "form",
        "aria-label": "foobar",
        // @ts-expect-error aria-activedescendant is not a valid aria property for form role
        "aria-activedescendant": "foobar",
      });
    });
  });
  describe("generic", () => {
    it("should have generic role, and aria properties", () => {
      assertType<KebabCaseRoleAttributes>({
        role: "generic",
        "aria-atomic": "true",
      });
      assertType<KebabCaseRoleAttributes>({
        role: "awesome generic",
        "aria-atomic": "true",
      });
    });
    test("other aria properties", () => {
      assertType<KebabCaseRoleAttributes>({
        role: "generic",
        // @ts-expect-error aria-label is prohibited for generic role
        "aria-label": "foobar",
      });
    });
  });

  describe("grid", () => {
    it("should have grid role, and aria properties", () => {
      assertType<KebabCaseRoleAttributes>({
        role: "grid",
        "aria-label": "foobar",
        "aria-activedescendant": "foobar",
      });
      assertType<KebabCaseRoleAttributes>({
        role: "awesome grid",
        "aria-label": "foobar",
        "aria-activedescendant": "foobar",
      });
    });
    test("other aria properties", () => {
      assertType<KebabCaseRoleAttributes>({
        role: "grid",
        "aria-label": "foobar",
        // @ts-expect-error aria-colindex is not a valid aria property for grid role
        "aria-colindex": 2,
      });
    });
  });

  describe("gridcell", () => {
    it("should have gridcell role, and aria properties", () => {
      assertType<KebabCaseRoleAttributes>({
        role: "gridcell",
        "aria-label": "foobar",
      });
      assertType<KebabCaseRoleAttributes>({
        role: "awesome gridcell",
        "aria-label": "foobar",
      });
    });
    test("other aria properties", () => {
      assertType<KebabCaseRoleAttributes>({
        role: "gridcell",
        "aria-label": "foobar",
        // @ts-expect-error aria-activedescendant is not a valid aria property for gridcell role
        "aria-activedescendant": "foobar",
      });
    });
  });
  describe("group", () => {
    it("should have group role, and aria properties", () => {
      assertType<KebabCaseRoleAttributes>({
        role: "group",
        "aria-label": "foobar",
        "aria-activedescendant": "foobar",
      });
      assertType<KebabCaseRoleAttributes>({
        role: "awesome group",
        "aria-label": "foobar",
        "aria-activedescendant": "foobar",
      });
    });
    test("other aria properties", () => {
      assertType<KebabCaseRoleAttributes>({
        role: "group",
        "aria-label": "foobar",
        // @ts-expect-error aria-colindex is not a valid aria property for group role
        "aria-colindex": 2,
      });
    });
  });
  describe("heading", () => {
    it("should have heading role, and aria properties", () => {
      assertType<KebabCaseRoleAttributes>({
        role: "heading",
        "aria-label": "foobar",
        "aria-level": 1,
      });
      assertType<KebabCaseRoleAttributes>({
        role: "awesome heading",
        "aria-label": "foobar",
        "aria-level": 1,
      });
    });
    test("other aria properties", () => {
      assertType<KebabCaseRoleAttributes>({
        role: "heading",
        "aria-label": "foobar",
        // @ts-expect-error aria-activedescendant is not a valid aria property for heading role
        "aria-activedescendant": "foobar",
      });
    });
  });
  describe("img", () => {
    it("should have img role, and aria properties", () => {
      assertType<KebabCaseRoleAttributes>({
        role: "img",
        "aria-label": "foobar",
      });
      assertType<KebabCaseRoleAttributes>({
        role: "awesome img",
        "aria-label": "foobar",
      });
    });
    test("other aria properties", () => {
      assertType<KebabCaseRoleAttributes>({
        role: "img",
        "aria-label": "foobar",
        // @ts-expect-error aria-activedescendant is not a valid aria property for img role
        "aria-activedescendant": "foobar",
      });
    });
  });
  describe("insertion", () => {
    it("should have insertion role, and aria properties", () => {
      assertType<KebabCaseRoleAttributes>({
        role: "insertion",
        "aria-atomic": "true",
      });
      assertType<KebabCaseRoleAttributes>({
        role: "awesome insertion",
        "aria-atomic": "true",
      });
    });
    test("other aria properties", () => {
      assertType<KebabCaseRoleAttributes>({
        role: "insertion",
        // @ts-expect-error aria-label is prohibited for insertion role
        "aria-label": "foobar",
      });
    });
  });
  describe("link", () => {
    it("should have link role, and aria properties", () => {
      assertType<KebabCaseRoleAttributes>({
        role: "link",
        "aria-label": "foobar",
      });
      assertType<KebabCaseRoleAttributes>({
        role: "awesome link",
        "aria-label": "foobar",
      });
    });
    test("other aria properties", () => {
      assertType<KebabCaseRoleAttributes>({
        role: "link",
        "aria-label": "foobar",
        // @ts-expect-error aria-activedescendant is not a valid aria property for link role
        "aria-activedescendant": "foobar",
      });
    });
  });
  describe("list", () => {
    it("should have list role, and aria properties", () => {
      assertType<KebabCaseRoleAttributes>({
        role: "list",
        "aria-label": "foobar",
      });
      assertType<KebabCaseRoleAttributes>({
        role: "awesome list",
        "aria-label": "foobar",
      });
    });
    test("other aria properties", () => {
      assertType<KebabCaseRoleAttributes>({
        role: "list",
        "aria-label": "foobar",
        // @ts-expect-error aria-activedescendant is not a valid aria property for list role
        "aria-activedescendant": "foobar",
      });
    });
  });
  describe("listbox", () => {
    it("should have listbox role, and aria properties", () => {
      assertType<KebabCaseRoleAttributes>({
        role: "listbox",
        "aria-label": "foobar",
        "aria-activedescendant": "foobar",
      });
      assertType<KebabCaseRoleAttributes>({
        role: "awesome listbox",
        "aria-label": "foobar",
        "aria-activedescendant": "foobar",
      });
    });
    test("other aria properties", () => {
      assertType<KebabCaseRoleAttributes>({
        role: "listbox",
        "aria-label": "foobar",
        // @ts-expect-error aria-colindex is not a valid aria property for listbox role
        "aria-colindex": 2,
      });
    });
  });
  describe("listitem", () => {
    it("should have listitem role, and aria properties", () => {
      assertType<KebabCaseRoleAttributes>({
        role: "listitem",
        "aria-label": "foobar",
      });
      assertType<KebabCaseRoleAttributes>({
        role: "awesome listitem",
        "aria-label": "foobar",
      });
    });
    test("other aria properties", () => {
      assertType<KebabCaseRoleAttributes>({
        role: "listitem",
        "aria-label": "foobar",
        // @ts-expect-error aria-activedescendant is not a valid aria property for listitem role
        "aria-activedescendant": "foobar",
      });
    });
  });
  describe("log", () => {
    it("should have log role, and aria properties", () => {
      assertType<KebabCaseRoleAttributes>({
        role: "log",
        "aria-label": "foobar",
      });
      assertType<KebabCaseRoleAttributes>({
        role: "awesome log",
        "aria-label": "foobar",
      });
    });
    test("other aria properties", () => {
      assertType<KebabCaseRoleAttributes>({
        role: "log",
        "aria-label": "foobar",
        // @ts-expect-error aria-activedescendant is not a valid aria property for log role
        "aria-activedescendant": "foobar",
      });
    });
  });
  describe("main", () => {
    it("should have main role, and aria properties", () => {
      assertType<KebabCaseRoleAttributes>({
        role: "main",
        "aria-label": "foobar",
      });
      assertType<KebabCaseRoleAttributes>({
        role: "awesome main",
        "aria-label": "foobar",
      });
    });
    test("other aria properties", () => {
      assertType<KebabCaseRoleAttributes>({
        role: "main",
        "aria-label": "foobar",
        // @ts-expect-error aria-activedescendant is not a valid aria property for main role
        "aria-activedescendant": "foobar",
      });
    });
  });
  describe("marquee", () => {
    it("should have marquee role, and aria properties", () => {
      assertType<KebabCaseRoleAttributes>({
        role: "marquee",
        "aria-label": "foobar",
      });
      assertType<KebabCaseRoleAttributes>({
        role: "awesome marquee",
        "aria-label": "foobar",
      });
    });
    test("other aria properties", () => {
      assertType<KebabCaseRoleAttributes>({
        role: "marquee",
        "aria-label": "foobar",
        // @ts-expect-error aria-activedescendant is not a valid aria property for marquee role
        "aria-activedescendant": "foobar",
      });
    });
  });
  describe("math", () => {
    it("should have math role, and aria properties", () => {
      assertType<KebabCaseRoleAttributes>({
        role: "math",
        "aria-label": "foobar",
      });
      assertType<KebabCaseRoleAttributes>({
        role: "awesome math",
        "aria-label": "foobar",
      });
    });
    test("other aria properties", () => {
      assertType<KebabCaseRoleAttributes>({
        role: "math",
        "aria-label": "foobar",
        // @ts-expect-error aria-activedescendant is not a valid aria property for math role
        "aria-activedescendant": "foobar",
      });
    });
  });
  describe("meter", () => {
    it("should have meter role, and aria properties", () => {
      assertType<KebabCaseRoleAttributes>({
        role: "meter",
        "aria-label": "foobar",
        "aria-valuenow": 50,
      });
      assertType<KebabCaseRoleAttributes>({
        role: "awesome meter",
        "aria-label": "foobar",
        "aria-valuenow": 50,
      });
    });
    test("other aria properties", () => {
      assertType<KebabCaseRoleAttributes>({
        role: "meter",
        "aria-label": "foobar",
        // @ts-expect-error aria-activedescendant is not a valid aria property for meter role
        "aria-activedescendant": "foobar",
      });
    });
  });
  describe("menu", () => {
    it("should have menu role, and aria properties", () => {
      assertType<KebabCaseRoleAttributes>({
        role: "menu",
        "aria-label": "foobar",
      });
      assertType<KebabCaseRoleAttributes>({
        role: "awesome menu",
        "aria-label": "foobar",
      });
    });
    test("other aria properties", () => {
      assertType<KebabCaseRoleAttributes>({
        role: "menu",
        "aria-label": "foobar",
        // @ts-expect-error aria-colindex is not a valid aria property for menu role
        "aria-colindex": 2,
      });
    });
  });
  describe("menubar", () => {
    it("should have menubar role, and aria properties", () => {
      assertType<KebabCaseRoleAttributes>({
        role: "menubar",
        "aria-label": "foobar",
      });
      assertType<KebabCaseRoleAttributes>({
        role: "awesome menubar",
        "aria-label": "foobar",
      });
    });
    test("other aria properties", () => {
      assertType<KebabCaseRoleAttributes>({
        role: "menubar",
        "aria-label": "foobar",
        // @ts-expect-error aria-colindex is not a valid aria property for menubar role
        "aria-colindex": 2,
      });
    });
  });

  describe("menuitem", () => {
    it("should have menuitem role, and aria properties", () => {
      assertType<KebabCaseRoleAttributes>({
        role: "menuitem",
        "aria-label": "foobar",
      });
      assertType<KebabCaseRoleAttributes>({
        role: "awesome menuitem",
        "aria-label": "foobar",
      });
    });
    test("other aria properties", () => {
      assertType<KebabCaseRoleAttributes>({
        role: "menuitem",
        "aria-label": "foobar",
        // @ts-expect-error aria-activedescendant is not a valid aria property for menuitem role
        "aria-activedescendant": "foobar",
      });
    });
  });
  describe("menuitemcheckbox", () => {
    it("should have menuitemcheckbox role, and aria properties", () => {
      assertType<KebabCaseRoleAttributes>({
        role: "menuitemcheckbox",
        "aria-label": "foobar",
        "aria-checked": "true",
      });
      assertType<KebabCaseRoleAttributes>({
        role: "awesome menuitemcheckbox",
        "aria-label": "foobar",
        "aria-checked": "true",
      });
    });
    test("other aria properties", () => {
      assertType<KebabCaseRoleAttributes>({
        role: "menuitemcheckbox",
        "aria-label": "foobar",
        // @ts-expect-error aria-activedescendant is not a valid aria property for menuitemcheckbox role
        "aria-activedescendant": "foobar",
      });
    });
  });

  describe("menuitemradio", () => {
    it("should have menuitemradio role, and aria properties", () => {
      assertType<KebabCaseRoleAttributes>({
        role: "menuitemradio",
        "aria-label": "foobar",
        "aria-checked": "true",
      });
      assertType<KebabCaseRoleAttributes>({
        role: "awesome menuitemradio",
        "aria-label": "foobar",
        "aria-checked": "true",
      });
    });
    test("other aria properties", () => {
      assertType<KebabCaseRoleAttributes>({
        role: "menuitemradio",
        "aria-label": "foobar",
        // @ts-expect-error aria-activedescendant is not a valid aria property for menuitemradio role
        "aria-activedescendant": "foobar",
      });
    });
  });
  describe("navigation", () => {
    it("should have navigation role, and aria properties", () => {
      assertType<KebabCaseRoleAttributes>({
        role: "navigation",
        "aria-label": "foobar",
      });
      assertType<KebabCaseRoleAttributes>({
        role: "awesome navigation",
        "aria-label": "foobar",
      });
    });
    test("other aria properties", () => {
      assertType<KebabCaseRoleAttributes>({
        role: "navigation",
        "aria-label": "foobar",
        // @ts-expect-error aria-activedescendant is not a valid aria property for navigation role
        "aria-activedescendant": "foobar",
      });
    });
  });
  describe("none", () => {
    it("should have none role, and aria properties", () => {
      assertType<KebabCaseRoleAttributes>({
        role: "none",
        "aria-atomic": "true",
      });
      assertType<KebabCaseRoleAttributes>({
        role: "awesome none",
        "aria-atomic": "true",
      });
    });
    test("other aria properties", () => {
      assertType<KebabCaseRoleAttributes>({
        role: "none",
        // @ts-expect-error aria-label is prohibited for none role
        "aria-label": "foobar",
      });
    });
  });

  describe("note", () => {
    it("should have note role, and aria properties", () => {
      assertType<KebabCaseRoleAttributes>({
        role: "note",
        "aria-label": "foobar",
      });
      assertType<KebabCaseRoleAttributes>({
        role: "awesome note",
        "aria-label": "foobar",
      });
    });
    test("other aria properties", () => {
      assertType<KebabCaseRoleAttributes>({
        role: "note",
        "aria-label": "foobar",
        // @ts-expect-error aria-activedescendant is not a valid aria property for note role
        "aria-activedescendant": "foobar",
      });
    });
  });

  describe("option", () => {
    it("should have option role, and aria properties", () => {
      assertType<KebabCaseRoleAttributes>({
        role: "option",
        "aria-label": "foobar",
      });
      assertType<KebabCaseRoleAttributes>({
        role: "awesome option",
        "aria-label": "foobar",
      });
    });
    test("other aria properties", () => {
      assertType<KebabCaseRoleAttributes>({
        role: "option",
        "aria-label": "foobar",
        // @ts-expect-error aria-activedescendant is not a valid aria property for option role
        "aria-activedescendant": "foobar",
      });
    });
  });

  describe("paragraph", () => {
    it("should have paragraph role, and aria properties", () => {
      assertType<KebabCaseRoleAttributes>({
        role: "paragraph",
        "aria-atomic": "true",
      });
      assertType<KebabCaseRoleAttributes>({
        role: "awesome paragraph",
        "aria-atomic": "true",
      });
    });
    test("other aria properties", () => {
      assertType<KebabCaseRoleAttributes>({
        role: "paragraph",
        // @ts-expect-error aria-label is prohibited for paragraph role
        "aria-label": "foobar",
      });
    });
  });

  describe("presentation", () => {
    it("should have presentation role, and aria properties", () => {
      assertType<KebabCaseRoleAttributes>({
        role: "presentation",
        "aria-atomic": "true",
      });
      assertType<KebabCaseRoleAttributes>({
        role: "awesome presentation",
        "aria-atomic": "true",
      });
    });
    test("other aria properties", () => {
      assertType<KebabCaseRoleAttributes>({
        role: "presentation",
        // @ts-expect-error aria-label is prohibited for presentation role
        "aria-label": "foobar",
      });
    });
  });

  describe("progressbar", () => {
    it("should have progressbar role, and aria properties", () => {
      assertType<KebabCaseRoleAttributes>({
        role: "progressbar",
        "aria-label": "foobar",
        "aria-valuenow": 50,
      });
      assertType<KebabCaseRoleAttributes>({
        role: "awesome progressbar",
        "aria-label": "foobar",
        "aria-valuenow": 50,
      });
    });
    test("other aria properties", () => {
      assertType<KebabCaseRoleAttributes>({
        role: "progressbar",
        "aria-label": "foobar",
        // @ts-expect-error aria-activedescendant is not a valid aria property for progressbar role
        "aria-activedescendant": "foobar",
      });
    });
  });

  describe("radio", () => {
    it("should have radio role, and aria properties", () => {
      assertType<KebabCaseRoleAttributes>({
        role: "radio",
        "aria-label": "foobar",
        "aria-checked": "true",
      });
      assertType<KebabCaseRoleAttributes>({
        role: "awesome radio",
        "aria-label": "foobar",
        "aria-checked": "true",
      });
    });
    test("other aria properties", () => {
      assertType<KebabCaseRoleAttributes>({
        role: "radio",
        "aria-label": "foobar",
        // @ts-expect-error aria-activedescendant is not a valid aria property for radio role
        "aria-activedescendant": "foobar",
      });
    });
  });

  describe("radiogroup", () => {
    it("should have radiogroup role, and aria properties", () => {
      assertType<KebabCaseRoleAttributes>({
        role: "radiogroup",
        "aria-label": "foobar",
      });
      assertType<KebabCaseRoleAttributes>({
        role: "awesome radiogroup",
        "aria-label": "foobar",
      });
    });
    test("other aria properties", () => {
      assertType<KebabCaseRoleAttributes>({
        role: "radiogroup",
        "aria-label": "foobar",
        // @ts-expect-error aria-colcount is not a valid aria property for radiogroup role
        "aria-colcount": 2,
      });
    });
  });
  describe("region", () => {
    it("should have region role, and aria properties", () => {
      assertType<KebabCaseRoleAttributes>({
        role: "region",
        "aria-label": "foobar",
      });
      assertType<KebabCaseRoleAttributes>({
        role: "awesome region",
        "aria-label": "foobar",
      });
    });
    test("other aria properties", () => {
      assertType<KebabCaseRoleAttributes>({
        role: "region",
        "aria-label": "foobar",
        // @ts-expect-error aria-activedescendant is not a valid aria property for region role
        "aria-activedescendant": "foobar",
      });
    });
  });

  describe("row", () => {
    it("should have row role, and aria properties", () => {
      assertType<KebabCaseRoleAttributes>({
        role: "row",
        "aria-label": "foobar",
      });
      assertType<KebabCaseRoleAttributes>({
        role: "awesome row",
        "aria-label": "foobar",
      });
    });
    test("other aria properties", () => {
      assertType<KebabCaseRoleAttributes>({
        role: "row",
        "aria-label": "foobar",
        // @ts-expect-error aria-modal is not a valid aria property for row role
        "aria-modal": true,
      });
    });
  });

  describe("rowgroup", () => {
    it("should have rowgroup role, and aria properties", () => {
      assertType<KebabCaseRoleAttributes>({
        role: "rowgroup",
        "aria-label": "foobar",
      });
      assertType<KebabCaseRoleAttributes>({
        role: "awesome rowgroup",
        "aria-label": "foobar",
      });
    });
    test("other aria properties", () => {
      assertType<KebabCaseRoleAttributes>({
        role: "rowgroup",
        "aria-label": "foobar",
        // @ts-expect-error aria-activedescendant is not a valid aria property for rowgroup role
        "aria-activedescendant": "foobar",
      });
    });
  });

  describe("rowheader", () => {
    it("should have rowheader role, and aria properties", () => {
      assertType<KebabCaseRoleAttributes>({
        role: "rowheader",
        "aria-label": "foobar",
        "aria-sort": "ascending",
      });
      assertType<KebabCaseRoleAttributes>({
        role: "awesome rowheader",
        "aria-label": "foobar",
        "aria-sort": "ascending",
      });
    });
    test("other aria properties", () => {
      assertType<KebabCaseRoleAttributes>({
        role: "rowheader",
        "aria-label": "foobar",
        // @ts-expect-error aria-activedescendant is not a valid aria property for rowheader role
        "aria-activedescendant": "foobar",
      });
    });
  });
  describe("scrollbar", () => {
    it("should have scrollbar role, and aria properties", () => {
      assertType<KebabCaseRoleAttributes>({
        role: "scrollbar",
        "aria-label": "foobar",
      });
      assertType<KebabCaseRoleAttributes>({
        role: "awesome scrollbar",
        "aria-label": "foobar",
      });
    });
    test("other aria properties", () => {
      assertType<KebabCaseRoleAttributes>({
        role: "scrollbar",
        "aria-label": "foobar",
        // @ts-expect-error aria-activedescendant is not a valid aria property for scrollbar role
        "aria-activedescendant": "foobar",
      });
    });
  });
  describe("search", () => {
    it("should have search role, and aria properties", () => {
      assertType<KebabCaseRoleAttributes>({
        role: "search",
        "aria-label": "foobar",
      });
      assertType<KebabCaseRoleAttributes>({
        role: "awesome search",
        "aria-label": "foobar",
      });
    });
    test("other aria properties", () => {
      assertType<KebabCaseRoleAttributes>({
        role: "search",
        "aria-label": "foobar",
        // @ts-expect-error aria-activedescendant is not a valid aria property for search role
        "aria-activedescendant": "foobar",
      });
    });
  });
  describe("searchbox", () => {
    it("should have searchbox role, and aria properties", () => {
      assertType<KebabCaseRoleAttributes>({
        role: "searchbox",
        "aria-label": "foobar",
        "aria-haspopup": "listbox",
        "aria-activedescendant": "foobar",
      });
      assertType<KebabCaseRoleAttributes>({
        role: "awesome searchbox",
        "aria-label": "foobar",
        "aria-haspopup": "listbox",
        "aria-activedescendant": "foobar",
      });
    });
    test("other aria properties", () => {
      assertType<KebabCaseRoleAttributes>({
        role: "searchbox",
        "aria-label": "foobar",
        // @ts-expect-error aria-colindex is not a valid aria property for searchbox role
        "aria-colindex": 2,
      });
    });
  });

  describe("separator", () => {
    it("should have separator role, and aria properties", () => {
      assertType<KebabCaseRoleAttributes>({
        role: "separator",
        "aria-label": "foobar",
      });
      assertType<KebabCaseRoleAttributes>({
        role: "awesome separator",
        "aria-label": "foobar",
      });
    });
    test("other aria properties", () => {
      assertType<KebabCaseRoleAttributes>({
        role: "separator",
        "aria-label": "foobar",
        // @ts-expect-error aria-activedescendant is not a valid aria property for separator role
        "aria-activedescendant": "foobar",
      });
    });
  });

  describe("spinbutton", () => {
    it("should have spinbutton role, and aria properties", () => {
      assertType<KebabCaseRoleAttributes>({
        role: "spinbutton",
        "aria-label": "foobar",
        "aria-valuenow": 50,
      });
      assertType<KebabCaseRoleAttributes>({
        role: "awesome spinbutton",
        "aria-label": "foobar",
        "aria-valuenow": 50,
      });
    });
    test("other aria properties", () => {
      assertType<KebabCaseRoleAttributes>({
        role: "spinbutton",
        "aria-label": "foobar",
        // @ts-expect-error aria-colcount is not a valid aria property for spinbutton role
        "aria-colcount": 2,
      });
    });
  });

  describe("status", () => {
    it("should have status role, and aria properties", () => {
      assertType<KebabCaseRoleAttributes>({
        role: "status",
        "aria-label": "foobar",
      });
      assertType<KebabCaseRoleAttributes>({
        role: "awesome status",
        "aria-label": "foobar",
      });
    });
    test("other aria properties", () => {
      assertType<KebabCaseRoleAttributes>({
        role: "status",
        "aria-label": "foobar",
        // @ts-expect-error aria-activedescendant is not a valid aria property for status role
        "aria-activedescendant": "foobar",
      });
    });
  });
  describe("strong", () => {
    it("should have strong role, and aria properties", () => {
      assertType<KebabCaseRoleAttributes>({
        role: "strong",
        "aria-atomic": "true",
      });
      assertType<KebabCaseRoleAttributes>({
        role: "awesome strong",
        "aria-atomic": "true",
      });
    });
    test("other aria properties", () => {
      assertType<KebabCaseRoleAttributes>({
        role: "strong",
        // @ts-expect-error aria-label is prohibited for strong role
        "aria-label": "foobar",
      });
    });
  });
  describe("subscript", () => {
    it("should have subscript role, and aria properties", () => {
      assertType<KebabCaseRoleAttributes>({
        role: "subscript",
        "aria-atomic": "true",
      });
      assertType<KebabCaseRoleAttributes>({
        role: "awesome subscript",
        "aria-atomic": "true",
      });
    });
    test("other aria properties", () => {
      assertType<KebabCaseRoleAttributes>({
        role: "subscript",
        // @ts-expect-error aria-label is prohibited for subscript role
        "aria-label": "foobar",
      });
    });
  });

  describe("superscript", () => {
    it("should have superscript role, and aria properties", () => {
      assertType<KebabCaseRoleAttributes>({
        role: "superscript",
        "aria-atomic": "true",
      });
      assertType<KebabCaseRoleAttributes>({
        role: "awesome superscript",
        "aria-atomic": "true",
      });
    });
    test("other aria properties", () => {
      assertType<KebabCaseRoleAttributes>({
        role: "superscript",
        // @ts-expect-error aria-label is prohibited for superscript role
        "aria-label": "foobar",
      });
    });
  });
  describe("switch", () => {
    it("should have switch role, and aria properties", () => {
      assertType<KebabCaseRoleAttributes>({
        role: "switch",
        "aria-label": "foobar",
        "aria-checked": "true",
      });
      assertType<KebabCaseRoleAttributes>({
        role: "awesome switch",
        "aria-label": "foobar",
        "aria-checked": "true",
      });
    });
    test("other aria properties", () => {
      assertType<KebabCaseRoleAttributes>({
        role: "switch",
        "aria-label": "foobar",
        // @ts-expect-error aria-activedescendant is not a valid aria property for switch role
        "aria-activedescendant": "foobar",
      });
    });
  });
  describe("tab", () => {
    it("should have tab role, and aria properties", () => {
      assertType<KebabCaseRoleAttributes>({
        role: "tab",
        "aria-label": "foobar",
        "aria-selected": "true",
      });
      assertType<KebabCaseRoleAttributes>({
        role: "awesome tab",
        "aria-label": "foobar",
        "aria-selected": "true",
      });
    });
    test("other aria properties", () => {
      assertType<KebabCaseRoleAttributes>({
        role: "tab",
        "aria-label": "foobar",
        // @ts-expect-error aria-activedescendant is not a valid aria property for tab role
        "aria-activedescendant": "foobar",
      });
    });
  });
  describe("tabpanel", () => {
    it("should have tabpanel role, and aria properties", () => {
      assertType<KebabCaseRoleAttributes>({
        role: "tabpanel",
        "aria-label": "foobar",
      });
      assertType<KebabCaseRoleAttributes>({
        role: "awesome tabpanel",
        "aria-label": "foobar",
      });
    });
    test("other aria properties", () => {
      assertType<KebabCaseRoleAttributes>({
        role: "tabpanel",
        "aria-label": "foobar",
        // @ts-expect-error aria-activedescendant is not a valid aria property for tabpanel role
        "aria-activedescendant": "foobar",
      });
    });
  });
  describe("table", () => {
    it("should have table role, and aria properties", () => {
      assertType<KebabCaseRoleAttributes>({
        role: "table",
        "aria-label": "foobar",
      });
      assertType<KebabCaseRoleAttributes>({
        role: "awesome table",
        "aria-label": "foobar",
      });
    });
    test("other aria properties", () => {
      assertType<KebabCaseRoleAttributes>({
        role: "table",
        "aria-label": "foobar",
        // @ts-expect-error aria-activedescendant is not a valid aria property for table role
        "aria-activedescendant": "foobar",
      });
    });
  });
  describe("tablist", () => {
    it("should have tablist role, and aria properties", () => {
      assertType<KebabCaseRoleAttributes>({
        role: "tablist",
        "aria-label": "foobar",
      });
      assertType<KebabCaseRoleAttributes>({
        role: "awesome tablist",
        "aria-label": "foobar",
      });
    });
    test("other aria properties", () => {
      assertType<KebabCaseRoleAttributes>({
        role: "tablist",
        "aria-label": "foobar",
        // @ts-expect-error aria-colindex is not a valid aria property for tablist role
        "aria-colindex": 2,
      });
    });
  });
  describe("tabpanel", () => {
    it("should have tabpanel role, and aria properties", () => {
      assertType<KebabCaseRoleAttributes>({
        role: "tabpanel",
        "aria-label": "foobar",
      });
      assertType<KebabCaseRoleAttributes>({
        role: "awesome tabpanel",
        "aria-label": "foobar",
      });
    });
    test("other aria properties", () => {
      assertType<KebabCaseRoleAttributes>({
        role: "tabpanel",
        "aria-label": "foobar",
        // @ts-expect-error aria-activedescendant is not a valid aria property for tabpanel role
        "aria-activedescendant": "foobar",
      });
    });
  });
  describe("term", () => {
    it("should have term role, and aria properties", () => {
      assertType<KebabCaseRoleAttributes>({
        role: "term",
        "aria-label": "foobar",
      });
      assertType<KebabCaseRoleAttributes>({
        role: "awesome term",
        "aria-label": "foobar",
      });
    });
    test("other aria properties", () => {
      assertType<KebabCaseRoleAttributes>({
        role: "term",
        "aria-label": "foobar",
        // @ts-expect-error aria-activedescendant is not a valid aria property for term role
        "aria-activedescendant": "foobar",
      });
    });
  });
  describe("textbox", () => {
    it("should have textbox role, and aria properties", () => {
      assertType<KebabCaseRoleAttributes>({
        role: "textbox",
        "aria-label": "foobar",
        "aria-haspopup": "listbox",
        "aria-activedescendant": "foobar",
      });
      assertType<KebabCaseRoleAttributes>({
        role: "awesome textbox",
        "aria-label": "foobar",
        "aria-haspopup": "listbox",
        "aria-activedescendant": "foobar",
      });
    });
    test("other aria properties", () => {
      assertType<KebabCaseRoleAttributes>({
        role: "textbox",
        "aria-label": "foobar",
        // @ts-expect-error aria-colindex is not a valid aria property for textbox role
        "aria-colindex": 2,
      });
    });
  });
  describe("time", () => {
    it("should have time role, and aria properties", () => {
      assertType<KebabCaseRoleAttributes>({
        role: "time",
        "aria-label": "foobar",
      });
      assertType<KebabCaseRoleAttributes>({
        role: "awesome time",
        "aria-label": "foobar",
      });
    });
    test("other aria properties", () => {
      assertType<KebabCaseRoleAttributes>({
        role: "time",
        "aria-label": "foobar",
        // @ts-expect-error aria-activedescendant is not a valid aria property for time role
        "aria-activedescendant": "foobar",
      });
    });
  });
  describe("timer", () => {
    it("should have timer role, and aria properties", () => {
      assertType<KebabCaseRoleAttributes>({
        role: "timer",
        "aria-label": "foobar",
      });
      assertType<KebabCaseRoleAttributes>({
        role: "awesome timer",
        "aria-label": "foobar",
      });
    });
    test("other aria properties", () => {
      assertType<KebabCaseRoleAttributes>({
        role: "timer",
        "aria-label": "foobar",
        // @ts-expect-error aria-activedescendant is not a valid aria property for timer role
        "aria-activedescendant": "foobar",
      });
    });
  });
  describe("toolbar", () => {
    it("should have toolbar role, and aria properties", () => {
      assertType<KebabCaseRoleAttributes>({
        role: "toolbar",
        "aria-label": "foobar",
      });
      assertType<KebabCaseRoleAttributes>({
        role: "awesome toolbar",
        "aria-label": "foobar",
      });
    });
    test("other aria properties", () => {
      assertType<KebabCaseRoleAttributes>({
        role: "toolbar",
        "aria-label": "foobar",
        // @ts-expect-error aria-colindex is not a valid aria property for toolbar role
        "aria-colindex": 2,
      });
    });
  });
  describe("tooltip", () => {
    it("should have tooltip role, and aria properties", () => {
      assertType<KebabCaseRoleAttributes>({
        role: "tooltip",
        "aria-label": "foobar",
      });
      assertType<KebabCaseRoleAttributes>({
        role: "awesome tooltip",
        "aria-label": "foobar",
      });
    });
    test("other aria properties", () => {
      assertType<KebabCaseRoleAttributes>({
        role: "tooltip",
        "aria-label": "foobar",
        // @ts-expect-error aria-activedescendant is not a valid aria property for tooltip role
        "aria-activedescendant": "foobar",
      });
    });
  });
  describe("tree", () => {
    it("should have tree role, and aria properties", () => {
      assertType<KebabCaseRoleAttributes>({
        role: "tree",
        "aria-label": "foobar",
      });
      assertType<KebabCaseRoleAttributes>({
        role: "awesome tree",
        "aria-label": "foobar",
      });
    });
    test("other aria properties", () => {
      assertType<KebabCaseRoleAttributes>({
        role: "tree",
        "aria-label": "foobar",
        // @ts-expect-error aria-colcount is not a valid aria property for tree role
        "aria-colcount": 2,
      });
    });
  });
  describe("treegrid", () => {
    it("should have treegrid role, and aria properties", () => {
      assertType<KebabCaseRoleAttributes>({
        role: "treegrid",
        "aria-label": "foobar",
      });
      assertType<KebabCaseRoleAttributes>({
        role: "awesome treegrid",
        "aria-label": "foobar",
      });
    });
    test("other aria properties", () => {
      assertType<KebabCaseRoleAttributes>({
        role: "treegrid",
        "aria-label": "foobar",
        // @ts-expect-error aria-activedescendant is not a valid aria property for treegrid role
        "aria-colindex": "foobar",
      });
    });
  });
  describe("treeitem", () => {
    it("should have treeitem role, and aria properties", () => {
      assertType<KebabCaseRoleAttributes>({
        role: "treeitem",
        "aria-label": "foobar",
      });
      assertType<KebabCaseRoleAttributes>({
        role: "awesome treeitem",
        "aria-label": "foobar",
      });
    });
    test("other aria properties", () => {
      assertType<KebabCaseRoleAttributes>({
        role: "treeitem",
        "aria-label": "foobar",
        // @ts-expect-error aria-activedescendant is not a valid aria property for treeitem role
        "aria-activedescendant": "foobar",
      });
    });
  });
});
