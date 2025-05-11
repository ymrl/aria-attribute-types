import { assertType, describe, test, it } from "vitest";
import { CamelCaseRoleAttributes } from "./CamelCaseRoleAttributes";

describe("CamelCaseRoleAttributes", () => {
  it("should not have any aria property without role", () => {
    assertType<CamelCaseRoleAttributes>(
      // @ts-expect-error undefined role should not have any aria property
      {
        role: undefined,
        ariaLabel: "foobar",
      },
    );
    assertType<CamelCaseRoleAttributes>(
      // @ts-expect-error undefined role should not have any aria property
      {
        ariaLabel: "foobar",
      },
    );
  });
  it("should not allow invalid role", () => {
    assertType<CamelCaseRoleAttributes>({
      // @ts-expect-error invalid role should not have any aria property
      role: "invalid-role",
      ariaLabel: "foobar",
    });
  });

  describe("alert", () => {
    it("should have alert role, and aria properties", () => {
      assertType<CamelCaseRoleAttributes>({
        role: "alert",
        ariaLabel: "foobar",
      });
      assertType<CamelCaseRoleAttributes>({
        role: "awesome alert",
        ariaLabel: "foobar",
      });
    });
    test("other aria properties", () => {
      assertType<CamelCaseRoleAttributes>({
        role: "alert",
        ariaLabel: "foobar",
        // @ts-expect-error aria-activedescendant is not a valid aria property for alert role
        ariaActiveDescendant: "foobar",
      });
    });
  });

  describe("alertdialog", () => {
    it("should have alertdialog role, and aria properties", () => {
      assertType<CamelCaseRoleAttributes>({
        role: "alertdialog",
        ariaLabel: "foobar",
        ariaModal: true,
      });
      assertType<CamelCaseRoleAttributes>({
        role: "awesome alertdialog",
        ariaLabel: "foobar",
        ariaModal: true,
      });
    });
    test("other aria properties", () => {
      assertType<CamelCaseRoleAttributes>({
        role: "alertdialog",
        ariaLabel: "foobar",
        ariaModal: true,
        // @ts-expect-error aria-activedescendant is not a valid aria property for alertdialog role
        ariaActiveDescendant: "foobar",
      });
    });
  });

  describe("application", () => {
    it("should have application role, and aria properties", () => {
      assertType<CamelCaseRoleAttributes>({
        role: "application",
        ariaLabel: "foobar",
        ariaActiveDescendant: "foobar",
      });
      assertType<CamelCaseRoleAttributes>({
        role: "awesome application",
        ariaLabel: "foobar",
        ariaActiveDescendant: "foobar",
      });
    });
    test("other aria properties", () => {
      assertType<CamelCaseRoleAttributes>({
        role: "application",
        ariaLabel: "foobar",
        ariaActiveDescendant: "foobar",
        // @ts-expect-error aria-autocomplete is not a valid aria property for application role
        ariaAutoComplete: "none",
      });
    });
  });

  describe("article", () => {
    it("should have article role, and aria properties", () => {
      assertType<CamelCaseRoleAttributes>({
        role: "article",
        ariaLabel: "foobar",
      });
      assertType<CamelCaseRoleAttributes>({
        role: "awesome article",
        ariaLabel: "foobar",
      });
    });
    test("other aria properties", () => {
      assertType<CamelCaseRoleAttributes>({
        role: "article",
        ariaLabel: "foobar",
        // @ts-expect-error aria-activedescendant is not a valid aria property for article role
        ariaActiveDescendant: "foobar",
      });
    });
  });

  describe("banner", () => {
    it("should have banner role, and aria properties", () => {
      assertType<CamelCaseRoleAttributes>({
        role: "banner",
        ariaLabel: "foobar",
      });
      assertType<CamelCaseRoleAttributes>({
        role: "awesome banner",
        ariaLabel: "foobar",
      });
    });
    test("other aria properties", () => {
      assertType<CamelCaseRoleAttributes>({
        role: "banner",
        ariaLabel: "foobar",
        // @ts-expect-error aria-activedescendant is not a valid aria property for banner role
        ariaActiveDescendant: "foobar",
      });
    });
  });
  describe("blockquote", () => {
    it("should have blockquote role, and aria properties", () => {
      assertType<CamelCaseRoleAttributes>({
        role: "blockquote",
        ariaLabel: "foobar",
      });
      assertType<CamelCaseRoleAttributes>({
        role: "awesome blockquote",
        ariaLabel: "foobar",
      });
    });
    test("other aria properties", () => {
      assertType<CamelCaseRoleAttributes>({
        role: "blockquote",
        ariaLabel: "foobar",
        // @ts-expect-error aria-activedescendant is not a valid aria property for blockquote role
        ariaActiveDescendant: "foobar",
      });
    });
  });
  describe("button", () => {
    it("should have button role, and aria properties", () => {
      assertType<CamelCaseRoleAttributes>({
        role: "button",
        ariaLabel: "foobar",
      });
      assertType<CamelCaseRoleAttributes>({
        role: "awesome button",
        ariaLabel: "foobar",
      });
    });
    test("other aria properties", () => {
      assertType<CamelCaseRoleAttributes>({
        role: "button",
        ariaLabel: "foobar",
        // @ts-expect-error aria-activedescendant is not a valid aria property for button role
        ariaActiveDescendant: "foobar",
      });
    });
  });
  describe("caption", () => {
    it("should have caption role, and aria properties", () => {
      assertType<CamelCaseRoleAttributes>({
        role: "caption",
        ariaAtomic: "true",
      });
      assertType<CamelCaseRoleAttributes>({
        role: "awesome caption",
        ariaAtomic: "true",
      });
    });
    test("other aria properties", () => {
      // @ts-expect-error aria-label is prohibited for caption role
      assertType<CamelCaseRoleAttributes>({
        role: "caption",
        ariaLabel: "foobar",
      });
      assertType<CamelCaseRoleAttributes>({
        role: "caption",
        // @ts-expect-error aria-activedescendant is not a valid aria property for caption role
        ariaActiveDescendant: "foobar",
      });
    });
  });
  describe("cell", () => {
    it("should have cell role, and aria properties", () => {
      assertType<CamelCaseRoleAttributes>({
        role: "cell",
        ariaLabel: "foobar",
      });
      assertType<CamelCaseRoleAttributes>({
        role: "awesome cell",
        ariaLabel: "foobar",
      });
    });
    test("other aria properties", () => {
      assertType<CamelCaseRoleAttributes>({
        role: "cell",
        ariaLabel: "foobar",
        // @ts-expect-error aria-activedescendant is not a valid aria property for cell role
        ariaActiveDescendant: "foobar",
      });
    });
  });
  describe("checkbox", () => {
    it("should have checkbox role, and aria properties", () => {
      assertType<CamelCaseRoleAttributes>({
        role: "checkbox",
        ariaLabel: "foobar",
      });
      assertType<CamelCaseRoleAttributes>({
        role: "awesome checkbox",
        ariaLabel: "foobar",
      });
    });
    test("other aria properties", () => {
      assertType<CamelCaseRoleAttributes>({
        role: "checkbox",
        ariaLabel: "foobar",
        // @ts-expect-error aria-activedescendant is not a valid aria property for checkbox role
        ariaActiveDescendant: "foobar",
      });
    });
  });
  describe("code", () => {
    it("should have code role, and aria properties", () => {
      assertType<CamelCaseRoleAttributes>({
        role: "code",
        ariaLabel: "foobar",
      });
      assertType<CamelCaseRoleAttributes>({
        role: "awesome code",
        ariaLabel: "foobar",
      });
    });
    test("other aria properties", () => {
      assertType<CamelCaseRoleAttributes>({
        role: "code",
        ariaLabel: "foobar",
        // @ts-expect-error aria-activedescendant is not a valid aria property for code role
        ariaActiveDescendant: "foobar",
      });
    });
  });
  describe("columnheader", () => {
    it("should have columnheader role, and aria properties", () => {
      assertType<CamelCaseRoleAttributes>({
        role: "columnheader",
        ariaLabel: "foobar",
        ariaSort: "ascending",
      });
      assertType<CamelCaseRoleAttributes>({
        role: "awesome columnheader",
        ariaLabel: "foobar",
        ariaSort: "ascending",
      });
    });
    test("other aria properties", () => {
      assertType<CamelCaseRoleAttributes>({
        role: "columnheader",
        ariaLabel: "foobar",
        // @ts-expect-error aria-activedescendant is not a valid aria property for columnheader role
        ariaActiveDescendant: "foobar",
      });
    });
  });
  describe("combobox", () => {
    it("should have combobox role, and aria properties", () => {
      assertType<CamelCaseRoleAttributes>({
        role: "combobox",
        ariaLabel: "foobar",
        ariaHasPopup: "listbox",
        ariaActiveDescendant: "foobar",
      });
      assertType<CamelCaseRoleAttributes>({
        role: "awesome combobox",
        ariaLabel: "foobar",
        ariaHasPopup: "listbox",
        ariaActiveDescendant: "foobar",
      });
    });
    test("other aria properties", () => {
      assertType<CamelCaseRoleAttributes>({
        role: "combobox",
        ariaLabel: "foobar",
        // @ts-expect-error aria-colcount is not a valid aria property for combobox role
        ariaColCount: 2,
      });
    });
  });
  describe("complementary", () => {
    it("should have complementary role, and aria properties", () => {
      assertType<CamelCaseRoleAttributes>({
        role: "complementary",
        ariaLabel: "foobar",
      });
      assertType<CamelCaseRoleAttributes>({
        role: "awesome complementary",
        ariaLabel: "foobar",
      });
    });
    test("other aria properties", () => {
      assertType<CamelCaseRoleAttributes>({
        role: "complementary",
        ariaLabel: "foobar",
        // @ts-expect-error aria-activedescendant is not a valid aria property for complementary role
        ariaActiveDescendant: "foobar",
      });
    });
  });
  describe("contentinfo", () => {
    it("should have contentinfo role, and aria properties", () => {
      assertType<CamelCaseRoleAttributes>({
        role: "contentinfo",
        ariaLabel: "foobar",
      });
      assertType<CamelCaseRoleAttributes>({
        role: "awesome contentinfo",
        ariaLabel: "foobar",
      });
    });
    test("other aria properties", () => {
      assertType<CamelCaseRoleAttributes>({
        role: "contentinfo",
        ariaLabel: "foobar",
        // @ts-expect-error aria-activedescendant is not a valid aria property for contentinfo role
        ariaActiveDescendant: "foobar",
      });
    });
  });
  describe("definition", () => {
    it("should have definition role, and aria properties", () => {
      assertType<CamelCaseRoleAttributes>({
        role: "definition",
        ariaLabel: "foobar",
      });
      assertType<CamelCaseRoleAttributes>({
        role: "awesome definition",
        ariaLabel: "foobar",
      });
    });
    test("other aria properties", () => {
      assertType<CamelCaseRoleAttributes>({
        role: "definition",
        ariaLabel: "foobar",
        // @ts-expect-error aria-activedescendant is not a valid aria property for definition role
        ariaActiveDescendant: "foobar",
      });
    });
  });
  describe("deletion", () => {
    it("should have deletion role, and aria properties", () => {
      assertType<CamelCaseRoleAttributes>({
        role: "deletion",
        ariaAtomic: "true",
      });
      assertType<CamelCaseRoleAttributes>({
        role: "awesome deletion",
        ariaAtomic: "true",
      });
    });
    test("other aria properties", () => {
      // @ts-expect-error aria-label is prohibited for deletion role
      assertType<CamelCaseRoleAttributes>({
        role: "deletion",
        ariaLabel: "foobar",
      });
    });
  });
  describe("dialog", () => {
    it("should have dialog role, and aria properties", () => {
      assertType<CamelCaseRoleAttributes>({
        role: "dialog",
        ariaLabel: "foobar",
        ariaModal: true,
      });
      assertType<CamelCaseRoleAttributes>({
        role: "awesome dialog",
        ariaLabel: "foobar",
        ariaModal: true,
      });
    });
    test("other aria properties", () => {
      assertType<CamelCaseRoleAttributes>({
        role: "dialog",
        ariaLabel: "foobar",
        // @ts-expect-error aria-activedescendant is not a valid aria property for dialog role
        ariaActiveDescendant: "foobar",
      });
    });
  });
  describe("directory", () => {
    it("should have directory role, and aria properties", () => {
      assertType<CamelCaseRoleAttributes>({
        role: "directory",
        ariaLabel: "foobar",
      });
      assertType<CamelCaseRoleAttributes>({
        role: "awesome directory",
        ariaLabel: "foobar",
      });
    });
    test("other aria properties", () => {
      assertType<CamelCaseRoleAttributes>({
        role: "directory",
        ariaLabel: "foobar",
        // @ts-expect-error aria-activedescendant is not a valid aria property for directory role
        ariaActiveDescendant: "foobar",
      });
    });
  });
  describe("document", () => {
    it("should have document role, and aria properties", () => {
      assertType<CamelCaseRoleAttributes>({
        role: "document",
        ariaLabel: "foobar",
      });
      assertType<CamelCaseRoleAttributes>({
        role: "awesome document",
        ariaLabel: "foobar",
      });
    });
    test("other aria properties", () => {
      assertType<CamelCaseRoleAttributes>({
        role: "document",
        ariaLabel: "foobar",
        // @ts-expect-error aria-activedescendant is not a valid aria property for document role
        ariaActiveDescendant: "foobar",
      });
    });
  });
  describe("emphasis", () => {
    it("should have emphasis role, and aria properties", () => {
      assertType<CamelCaseRoleAttributes>({
        role: "emphasis",
        ariaAtomic: "true",
      });
      assertType<CamelCaseRoleAttributes>({
        role: "awesome emphasis",
        ariaAtomic: "true",
      });
    });
    test("other aria properties", () => {
      // @ts-expect-error aria-label is prohibited for emphasis role
      assertType<CamelCaseRoleAttributes>({
        role: "emphasis",
        ariaLabel: "foobar",
      });
    });
  });
  describe("feed", () => {
    it("should have feed role, and aria properties", () => {
      assertType<CamelCaseRoleAttributes>({
        role: "feed",
        ariaLabel: "foobar",
      });
      assertType<CamelCaseRoleAttributes>({
        role: "awesome feed",
        ariaLabel: "foobar",
      });
    });
    test("other aria properties", () => {
      assertType<CamelCaseRoleAttributes>({
        role: "feed",
        ariaLabel: "foobar",
        // @ts-expect-error aria-activedescendant is not a valid aria property for feed role
        ariaActiveDescendant: "foobar",
      });
    });
  });
  describe("figure", () => {
    it("should have figure role, and aria properties", () => {
      assertType<CamelCaseRoleAttributes>({
        role: "figure",
        ariaLabel: "foobar",
      });
      assertType<CamelCaseRoleAttributes>({
        role: "awesome figure",
        ariaLabel: "foobar",
      });
    });
    test("other aria properties", () => {
      assertType<CamelCaseRoleAttributes>({
        role: "figure",
        ariaLabel: "foobar",
        // @ts-expect-error aria-activedescendant is not a valid aria property for figure role
        ariaActiveDescendant: "foobar",
      });
    });
  });
  describe("form", () => {
    it("should have form role, and aria properties", () => {
      assertType<CamelCaseRoleAttributes>({
        role: "form",
        ariaLabel: "foobar",
      });
      assertType<CamelCaseRoleAttributes>({
        role: "awesome form",
        ariaLabel: "foobar",
      });
    });
    test("other aria properties", () => {
      assertType<CamelCaseRoleAttributes>({
        role: "form",
        ariaLabel: "foobar",
        // @ts-expect-error aria-activedescendant is not a valid aria property for form role
        ariaActiveDescendant: "foobar",
      });
    });
  });
  describe("generic", () => {
    it("should have generic role, and aria properties", () => {
      assertType<CamelCaseRoleAttributes>({
        role: "generic",
        ariaAtomic: "true",
      });
      assertType<CamelCaseRoleAttributes>({
        role: "awesome generic",
        ariaAtomic: "true",
      });
    });
    test("other aria properties", () => {
      // @ts-expect-error aria-label is prohibited for generic role
      assertType<CamelCaseRoleAttributes>({
        role: "generic",
        ariaLabel: "foobar",
      });
    });
  });

  describe("grid", () => {
    it("should have grid role, and aria properties", () => {
      assertType<CamelCaseRoleAttributes>({
        role: "grid",
        ariaLabel: "foobar",
        ariaActiveDescendant: "foobar",
      });
      assertType<CamelCaseRoleAttributes>({
        role: "awesome grid",
        ariaLabel: "foobar",
        ariaActiveDescendant: "foobar",
      });
    });
    test("other aria properties", () => {
      assertType<CamelCaseRoleAttributes>({
        role: "grid",
        ariaLabel: "foobar",
        // @ts-expect-error aria-colindex is not a valid aria property for grid role
        ariaColIndex: 2,
      });
    });
  });

  describe("gridcell", () => {
    it("should have gridcell role, and aria properties", () => {
      assertType<CamelCaseRoleAttributes>({
        role: "gridcell",
        ariaLabel: "foobar",
      });
      assertType<CamelCaseRoleAttributes>({
        role: "awesome gridcell",
        ariaLabel: "foobar",
      });
    });
    test("other aria properties", () => {
      assertType<CamelCaseRoleAttributes>({
        role: "gridcell",
        ariaLabel: "foobar",
        // @ts-expect-error aria-activedescendant is not a valid aria property for gridcell role
        ariaActiveDescendant: "foobar",
      });
    });
  });
  describe("group", () => {
    it("should have group role, and aria properties", () => {
      assertType<CamelCaseRoleAttributes>({
        role: "group",
        ariaLabel: "foobar",
        ariaActiveDescendant: "foobar",
      });
      assertType<CamelCaseRoleAttributes>({
        role: "awesome group",
        ariaLabel: "foobar",
        ariaActiveDescendant: "foobar",
      });
    });
    test("other aria properties", () => {
      assertType<CamelCaseRoleAttributes>({
        role: "group",
        ariaLabel: "foobar",
        // @ts-expect-error aria-colindex is not a valid aria property for group role
        ariaColIndex: 2,
      });
    });
  });
  describe("heading", () => {
    it("should have heading role, and aria properties", () => {
      assertType<CamelCaseRoleAttributes>({
        role: "heading",
        ariaLabel: "foobar",
        ariaLevel: 1,
      });
      assertType<CamelCaseRoleAttributes>({
        role: "awesome heading",
        ariaLabel: "foobar",
        ariaLevel: 1,
      });
    });
    test("other aria properties", () => {
      assertType<CamelCaseRoleAttributes>({
        role: "heading",
        ariaLabel: "foobar",
        // @ts-expect-error aria-activedescendant is not a valid aria property for heading role
        ariaActiveDescendant: "foobar",
      });
    });
  });
  describe("img", () => {
    it("should have img role, and aria properties", () => {
      assertType<CamelCaseRoleAttributes>({
        role: "img",
        ariaLabel: "foobar",
      });
      assertType<CamelCaseRoleAttributes>({
        role: "awesome img",
        ariaLabel: "foobar",
      });
    });
    test("other aria properties", () => {
      assertType<CamelCaseRoleAttributes>({
        role: "img",
        ariaLabel: "foobar",
        // @ts-expect-error aria-activedescendant is not a valid aria property for img role
        ariaActiveDescendant: "foobar",
      });
    });
  });
  describe("insertion", () => {
    it("should have insertion role, and aria properties", () => {
      assertType<CamelCaseRoleAttributes>({
        role: "insertion",
        ariaAtomic: "true",
      });
      assertType<CamelCaseRoleAttributes>({
        role: "awesome insertion",
        ariaAtomic: "true",
      });
    });
    test("other aria properties", () => {
      // @ts-expect-error aria-label is prohibited for insertion role
      assertType<CamelCaseRoleAttributes>({
        role: "insertion",
        ariaLabel: "foobar",
      });
    });
  });
  describe("link", () => {
    it("should have link role, and aria properties", () => {
      assertType<CamelCaseRoleAttributes>({
        role: "link",
        ariaLabel: "foobar",
      });
      assertType<CamelCaseRoleAttributes>({
        role: "awesome link",
        ariaLabel: "foobar",
      });
    });
    test("other aria properties", () => {
      assertType<CamelCaseRoleAttributes>({
        role: "link",
        ariaLabel: "foobar",
        // @ts-expect-error aria-activedescendant is not a valid aria property for link role
        ariaActiveDescendant: "foobar",
      });
    });
  });
  describe("list", () => {
    it("should have list role, and aria properties", () => {
      assertType<CamelCaseRoleAttributes>({
        role: "list",
        ariaLabel: "foobar",
      });
      assertType<CamelCaseRoleAttributes>({
        role: "awesome list",
        ariaLabel: "foobar",
      });
    });
    test("other aria properties", () => {
      assertType<CamelCaseRoleAttributes>({
        role: "list",
        ariaLabel: "foobar",
        // @ts-expect-error aria-activedescendant is not a valid aria property for list role
        ariaActiveDescendant: "foobar",
      });
    });
  });
  describe("listbox", () => {
    it("should have listbox role, and aria properties", () => {
      assertType<CamelCaseRoleAttributes>({
        role: "listbox",
        ariaLabel: "foobar",
        ariaActiveDescendant: "foobar",
      });
      assertType<CamelCaseRoleAttributes>({
        role: "awesome listbox",
        ariaLabel: "foobar",
        ariaActiveDescendant: "foobar",
      });
    });
    test("other aria properties", () => {
      assertType<CamelCaseRoleAttributes>({
        role: "listbox",
        ariaLabel: "foobar",
        // @ts-expect-error aria-colindex is not a valid aria property for listbox role
        ariaColIndex: 2,
      });
    });
  });
  describe("listitem", () => {
    it("should have listitem role, and aria properties", () => {
      assertType<CamelCaseRoleAttributes>({
        role: "listitem",
        ariaLabel: "foobar",
      });
      assertType<CamelCaseRoleAttributes>({
        role: "awesome listitem",
        ariaLabel: "foobar",
      });
    });
    test("other aria properties", () => {
      assertType<CamelCaseRoleAttributes>({
        role: "listitem",
        ariaLabel: "foobar",
        // @ts-expect-error aria-activedescendant is not a valid aria property for listitem role
        ariaActiveDescendant: "foobar",
      });
    });
  });
  describe("log", () => {
    it("should have log role, and aria properties", () => {
      assertType<CamelCaseRoleAttributes>({
        role: "log",
        ariaLabel: "foobar",
      });
      assertType<CamelCaseRoleAttributes>({
        role: "awesome log",
        ariaLabel: "foobar",
      });
    });
    test("other aria properties", () => {
      assertType<CamelCaseRoleAttributes>({
        role: "log",
        ariaLabel: "foobar",
        // @ts-expect-error aria-activedescendant is not a valid aria property for log role
        ariaActiveDescendant: "foobar",
      });
    });
  });
  describe("main", () => {
    it("should have main role, and aria properties", () => {
      assertType<CamelCaseRoleAttributes>({
        role: "main",
        ariaLabel: "foobar",
      });
      assertType<CamelCaseRoleAttributes>({
        role: "awesome main",
        ariaLabel: "foobar",
      });
    });
    test("other aria properties", () => {
      assertType<CamelCaseRoleAttributes>({
        role: "main",
        ariaLabel: "foobar",
        // @ts-expect-error aria-activedescendant is not a valid aria property for main role
        ariaActiveDescendant: "foobar",
      });
    });
  });
  describe("marquee", () => {
    it("should have marquee role, and aria properties", () => {
      assertType<CamelCaseRoleAttributes>({
        role: "marquee",
        ariaLabel: "foobar",
      });
      assertType<CamelCaseRoleAttributes>({
        role: "awesome marquee",
        ariaLabel: "foobar",
      });
    });
    test("other aria properties", () => {
      assertType<CamelCaseRoleAttributes>({
        role: "marquee",
        ariaLabel: "foobar",
        // @ts-expect-error aria-activedescendant is not a valid aria property for marquee role
        ariaActiveDescendant: "foobar",
      });
    });
  });
  describe("math", () => {
    it("should have math role, and aria properties", () => {
      assertType<CamelCaseRoleAttributes>({
        role: "math",
        ariaLabel: "foobar",
      });
      assertType<CamelCaseRoleAttributes>({
        role: "awesome math",
        ariaLabel: "foobar",
      });
    });
    test("other aria properties", () => {
      assertType<CamelCaseRoleAttributes>({
        role: "math",
        ariaLabel: "foobar",
        // @ts-expect-error aria-activedescendant is not a valid aria property for math role
        ariaActiveDescendant: "foobar",
      });
    });
  });
  describe("meter", () => {
    it("should have meter role, and aria properties", () => {
      assertType<CamelCaseRoleAttributes>({
        role: "meter",
        ariaLabel: "foobar",
        ariaValueNow: 50,
      });
      assertType<CamelCaseRoleAttributes>({
        role: "awesome meter",
        ariaLabel: "foobar",
        ariaValueNow: 50,
      });
    });
    test("other aria properties", () => {
      assertType<CamelCaseRoleAttributes>({
        role: "meter",
        ariaLabel: "foobar",
        // @ts-expect-error aria-activedescendant is not a valid aria property for meter role
        ariaActiveDescendant: "foobar",
      });
    });
  });
  describe("menu", () => {
    it("should have menu role, and aria properties", () => {
      assertType<CamelCaseRoleAttributes>({
        role: "menu",
        ariaLabel: "foobar",
      });
      assertType<CamelCaseRoleAttributes>({
        role: "awesome menu",
        ariaLabel: "foobar",
      });
    });
    test("other aria properties", () => {
      assertType<CamelCaseRoleAttributes>({
        role: "menu",
        ariaLabel: "foobar",
        // @ts-expect-error aria-colindex is not a valid aria property for menu role
        ariaColIndex: 2,
      });
    });
  });
  describe("menubar", () => {
    it("should have menubar role, and aria properties", () => {
      assertType<CamelCaseRoleAttributes>({
        role: "menubar",
        ariaLabel: "foobar",
      });
      assertType<CamelCaseRoleAttributes>({
        role: "awesome menubar",
        ariaLabel: "foobar",
      });
    });
    test("other aria properties", () => {
      assertType<CamelCaseRoleAttributes>({
        role: "menubar",
        ariaLabel: "foobar",
        // @ts-expect-error aria-colindex is not a valid aria property for menubar role
        ariaColIndex: 2,
      });
    });
  });

  describe("menuitem", () => {
    it("should have menuitem role, and aria properties", () => {
      assertType<CamelCaseRoleAttributes>({
        role: "menuitem",
        ariaLabel: "foobar",
      });
      assertType<CamelCaseRoleAttributes>({
        role: "awesome menuitem",
        ariaLabel: "foobar",
      });
    });
    test("other aria properties", () => {
      assertType<CamelCaseRoleAttributes>({
        role: "menuitem",
        ariaLabel: "foobar",
        // @ts-expect-error aria-activedescendant is not a valid aria property for menuitem role
        ariaActiveDescendant: "foobar",
      });
    });
  });
  describe("menuitemcheckbox", () => {
    it("should have menuitemcheckbox role, and aria properties", () => {
      assertType<CamelCaseRoleAttributes>({
        role: "menuitemcheckbox",
        ariaLabel: "foobar",
        ariaChecked: "true",
      });
      assertType<CamelCaseRoleAttributes>({
        role: "awesome menuitemcheckbox",
        ariaLabel: "foobar",
        ariaChecked: "true",
      });
    });
    test("other aria properties", () => {
      assertType<CamelCaseRoleAttributes>({
        role: "menuitemcheckbox",
        ariaLabel: "foobar",
        // @ts-expect-error aria-activedescendant is not a valid aria property for menuitemcheckbox role
        ariaActiveDescendant: "foobar",
      });
    });
  });

  describe("menuitemradio", () => {
    it("should have menuitemradio role, and aria properties", () => {
      assertType<CamelCaseRoleAttributes>({
        role: "menuitemradio",
        ariaLabel: "foobar",
        ariaChecked: "true",
      });
      assertType<CamelCaseRoleAttributes>({
        role: "awesome menuitemradio",
        ariaLabel: "foobar",
        ariaChecked: "true",
      });
    });
    test("other aria properties", () => {
      assertType<CamelCaseRoleAttributes>({
        role: "menuitemradio",
        ariaLabel: "foobar",
        // @ts-expect-error aria-activedescendant is not a valid aria property for menuitemradio role
        ariaActiveDescendant: "foobar",
      });
    });
  });
  describe("navigation", () => {
    it("should have navigation role, and aria properties", () => {
      assertType<CamelCaseRoleAttributes>({
        role: "navigation",
        ariaLabel: "foobar",
      });
      assertType<CamelCaseRoleAttributes>({
        role: "awesome navigation",
        ariaLabel: "foobar",
      });
    });
    test("other aria properties", () => {
      assertType<CamelCaseRoleAttributes>({
        role: "navigation",
        ariaLabel: "foobar",
        // @ts-expect-error aria-activedescendant is not a valid aria property for navigation role
        ariaActiveDescendant: "foobar",
      });
    });
  });
  describe("none", () => {
    it("should have none role, and aria properties", () => {
      assertType<CamelCaseRoleAttributes>({
        role: "none",
        ariaAtomic: "true",
      });
      assertType<CamelCaseRoleAttributes>({
        role: "awesome none",
        ariaAtomic: "true",
      });
    });
    test("other aria properties", () => {
      // @ts-expect-error aria-label is prohibited for none role
      assertType<CamelCaseRoleAttributes>({
        role: "none",
        ariaLabel: "foobar",
      });
    });
  });

  describe("note", () => {
    it("should have note role, and aria properties", () => {
      assertType<CamelCaseRoleAttributes>({
        role: "note",
        ariaLabel: "foobar",
      });
      assertType<CamelCaseRoleAttributes>({
        role: "awesome note",
        ariaLabel: "foobar",
      });
    });
    test("other aria properties", () => {
      assertType<CamelCaseRoleAttributes>({
        role: "note",
        ariaLabel: "foobar",
        // @ts-expect-error aria-activedescendant is not a valid aria property for note role
        ariaActiveDescendant: "foobar",
      });
    });
  });

  describe("option", () => {
    it("should have option role, and aria properties", () => {
      assertType<CamelCaseRoleAttributes>({
        role: "option",
        ariaLabel: "foobar",
      });
      assertType<CamelCaseRoleAttributes>({
        role: "awesome option",
        ariaLabel: "foobar",
      });
    });
    test("other aria properties", () => {
      assertType<CamelCaseRoleAttributes>({
        role: "option",
        ariaLabel: "foobar",
        // @ts-expect-error aria-activedescendant is not a valid aria property for option role
        ariaActiveDescendant: "foobar",
      });
    });
  });

  describe("paragraph", () => {
    it("should have paragraph role, and aria properties", () => {
      assertType<CamelCaseRoleAttributes>({
        role: "paragraph",
        ariaAtomic: "true",
      });
      assertType<CamelCaseRoleAttributes>({
        role: "awesome paragraph",
        ariaAtomic: "true",
      });
    });
    test("other aria properties", () => {
      // @ts-expect-error aria-label is prohibited for paragraph role
      assertType<CamelCaseRoleAttributes>({
        role: "paragraph",
        ariaLabel: "foobar",
      });
    });
  });

  describe("presentation", () => {
    it("should have presentation role, and aria properties", () => {
      assertType<CamelCaseRoleAttributes>({
        role: "presentation",
        ariaAtomic: "true",
      });
      assertType<CamelCaseRoleAttributes>({
        role: "awesome presentation",
        ariaAtomic: "true",
      });
    });
    test("other aria properties", () => {
      // @ts-expect-error aria-label is prohibited for presentation role
      assertType<CamelCaseRoleAttributes>({
        role: "presentation",
        ariaLabel: "foobar",
      });
    });
  });

  describe("progressbar", () => {
    it("should have progressbar role, and aria properties", () => {
      assertType<CamelCaseRoleAttributes>({
        role: "progressbar",
        ariaLabel: "foobar",
        ariaValueNow: 50,
      });
      assertType<CamelCaseRoleAttributes>({
        role: "awesome progressbar",
        ariaLabel: "foobar",
        ariaValueNow: 50,
      });
    });
    test("other aria properties", () => {
      assertType<CamelCaseRoleAttributes>({
        role: "progressbar",
        ariaLabel: "foobar",
        // @ts-expect-error aria-activedescendant is not a valid aria property for progressbar role
        ariaActiveDescendant: "foobar",
      });
    });
  });

  describe("radio", () => {
    it("should have radio role, and aria properties", () => {
      assertType<CamelCaseRoleAttributes>({
        role: "radio",
        ariaLabel: "foobar",
        ariaChecked: "true",
      });
      assertType<CamelCaseRoleAttributes>({
        role: "awesome radio",
        ariaLabel: "foobar",
        ariaChecked: "true",
      });
    });
    test("other aria properties", () => {
      assertType<CamelCaseRoleAttributes>({
        role: "radio",
        ariaLabel: "foobar",
        // @ts-expect-error aria-activedescendant is not a valid aria property for radio role
        ariaActiveDescendant: "foobar",
      });
    });
  });

  describe("radiogroup", () => {
    it("should have radiogroup role, and aria properties", () => {
      assertType<CamelCaseRoleAttributes>({
        role: "radiogroup",
        ariaLabel: "foobar",
      });
      assertType<CamelCaseRoleAttributes>({
        role: "awesome radiogroup",
        ariaLabel: "foobar",
      });
    });
    test("other aria properties", () => {
      assertType<CamelCaseRoleAttributes>({
        role: "radiogroup",
        ariaLabel: "foobar",
        // @ts-expect-error aria-colcount is not a valid aria property for radiogroup role
        ariaColCount: 2,
      });
    });
  });
  describe("region", () => {
    it("should have region role, and aria properties", () => {
      assertType<CamelCaseRoleAttributes>({
        role: "region",
        ariaLabel: "foobar",
      });
      assertType<CamelCaseRoleAttributes>({
        role: "awesome region",
        ariaLabel: "foobar",
      });
    });
    test("other aria properties", () => {
      assertType<CamelCaseRoleAttributes>({
        role: "region",
        ariaLabel: "foobar",
        // @ts-expect-error aria-activedescendant is not a valid aria property for region role
        ariaActiveDescendant: "foobar",
      });
    });
  });

  describe("row", () => {
    it("should have row role, and aria properties", () => {
      assertType<CamelCaseRoleAttributes>({
        role: "row",
        ariaLabel: "foobar",
      });
      assertType<CamelCaseRoleAttributes>({
        role: "awesome row",
        ariaLabel: "foobar",
      });
    });
    test("other aria properties", () => {
      assertType<CamelCaseRoleAttributes>({
        role: "row",
        ariaLabel: "foobar",
        // @ts-expect-error aria-modal is not a valid aria property for row role
        ariaModal: true,
      });
    });
  });

  describe("rowgroup", () => {
    it("should have rowgroup role, and aria properties", () => {
      assertType<CamelCaseRoleAttributes>({
        role: "rowgroup",
        ariaLabel: "foobar",
      });
      assertType<CamelCaseRoleAttributes>({
        role: "awesome rowgroup",
        ariaLabel: "foobar",
      });
    });
    test("other aria properties", () => {
      assertType<CamelCaseRoleAttributes>({
        role: "rowgroup",
        ariaLabel: "foobar",
        // @ts-expect-error aria-activedescendant is not a valid aria property for rowgroup role
        ariaActiveDescendant: "foobar",
      });
    });
  });

  describe("rowheader", () => {
    it("should have rowheader role, and aria properties", () => {
      assertType<CamelCaseRoleAttributes>({
        role: "rowheader",
        ariaLabel: "foobar",
        ariaSort: "ascending",
      });
      assertType<CamelCaseRoleAttributes>({
        role: "awesome rowheader",
        ariaLabel: "foobar",
        ariaSort: "ascending",
      });
    });
    test("other aria properties", () => {
      assertType<CamelCaseRoleAttributes>({
        role: "rowheader",
        ariaLabel: "foobar",
        // @ts-expect-error aria-activedescendant is not a valid aria property for rowheader role
        ariaActiveDescendant: "foobar",
      });
    });
  });
  describe("scrollbar", () => {
    it("should have scrollbar role, and aria properties", () => {
      assertType<CamelCaseRoleAttributes>({
        role: "scrollbar",
        ariaLabel: "foobar",
      });
      assertType<CamelCaseRoleAttributes>({
        role: "awesome scrollbar",
        ariaLabel: "foobar",
      });
    });
    test("other aria properties", () => {
      assertType<CamelCaseRoleAttributes>({
        role: "scrollbar",
        ariaLabel: "foobar",
        // @ts-expect-error aria-activedescendant is not a valid aria property for scrollbar role
        ariaActiveDescendant: "foobar",
      });
    });
  });
  describe("search", () => {
    it("should have search role, and aria properties", () => {
      assertType<CamelCaseRoleAttributes>({
        role: "search",
        ariaLabel: "foobar",
      });
      assertType<CamelCaseRoleAttributes>({
        role: "awesome search",
        ariaLabel: "foobar",
      });
    });
    test("other aria properties", () => {
      assertType<CamelCaseRoleAttributes>({
        role: "search",
        ariaLabel: "foobar",
        // @ts-expect-error aria-activedescendant is not a valid aria property for search role
        ariaActiveDescendant: "foobar",
      });
    });
  });
  describe("searchbox", () => {
    it("should have searchbox role, and aria properties", () => {
      assertType<CamelCaseRoleAttributes>({
        role: "searchbox",
        ariaLabel: "foobar",
        ariaHasPopup: "listbox",
        ariaActiveDescendant: "foobar",
      });
      assertType<CamelCaseRoleAttributes>({
        role: "awesome searchbox",
        ariaLabel: "foobar",
        ariaHasPopup: "listbox",
        ariaActiveDescendant: "foobar",
      });
    });
    test("other aria properties", () => {
      assertType<CamelCaseRoleAttributes>({
        role: "searchbox",
        ariaLabel: "foobar",
        // @ts-expect-error aria-colindex is not a valid aria property for searchbox role
        ariaColIndex: 2,
      });
    });
  });

  describe("separator", () => {
    it("should have separator role, and aria properties", () => {
      assertType<CamelCaseRoleAttributes>({
        role: "separator",
        ariaLabel: "foobar",
      });
      assertType<CamelCaseRoleAttributes>({
        role: "awesome separator",
        ariaLabel: "foobar",
      });
    });
    test("other aria properties", () => {
      assertType<CamelCaseRoleAttributes>({
        role: "separator",
        ariaLabel: "foobar",
        // @ts-expect-error aria-activedescendant is not a valid aria property for separator role
        ariaActiveDescendant: "foobar",
      });
    });
  });

  describe("spinbutton", () => {
    it("should have spinbutton role, and aria properties", () => {
      assertType<CamelCaseRoleAttributes>({
        role: "spinbutton",
        ariaLabel: "foobar",
        ariaValueNow: 50,
      });
      assertType<CamelCaseRoleAttributes>({
        role: "awesome spinbutton",
        ariaLabel: "foobar",
        ariaValueNow: 50,
      });
    });
    test("other aria properties", () => {
      assertType<CamelCaseRoleAttributes>({
        role: "spinbutton",
        ariaLabel: "foobar",
        // @ts-expect-error aria-colcount is not a valid aria property for spinbutton role
        ariaColCount: 2,
      });
    });
  });

  describe("status", () => {
    it("should have status role, and aria properties", () => {
      assertType<CamelCaseRoleAttributes>({
        role: "status",
        ariaLabel: "foobar",
      });
      assertType<CamelCaseRoleAttributes>({
        role: "awesome status",
        ariaLabel: "foobar",
      });
    });
    test("other aria properties", () => {
      assertType<CamelCaseRoleAttributes>({
        role: "status",
        ariaLabel: "foobar",
        // @ts-expect-error aria-activedescendant is not a valid aria property for status role
        ariaActiveDescendant: "foobar",
      });
    });
  });
  describe("strong", () => {
    it("should have strong role, and aria properties", () => {
      assertType<CamelCaseRoleAttributes>({
        role: "strong",
        ariaAtomic: "true",
      });
      assertType<CamelCaseRoleAttributes>({
        role: "awesome strong",
        ariaAtomic: "true",
      });
    });
    test("other aria properties", () => {
      // @ts-expect-error aria-label is prohibited for strong role
      assertType<CamelCaseRoleAttributes>({
        role: "strong",
        ariaLabel: "foobar",
      });
    });
  });
  describe("subscript", () => {
    it("should have subscript role, and aria properties", () => {
      assertType<CamelCaseRoleAttributes>({
        role: "subscript",
        ariaAtomic: "true",
      });
      assertType<CamelCaseRoleAttributes>({
        role: "awesome subscript",
        ariaAtomic: "true",
      });
    });
    test("other aria properties", () => {
      // @ts-expect-error aria-label is prohibited for subscript role
      assertType<CamelCaseRoleAttributes>({
        role: "subscript",
        ariaLabel: "foobar",
      });
    });
  });

  describe("superscript", () => {
    it("should have superscript role, and aria properties", () => {
      assertType<CamelCaseRoleAttributes>({
        role: "superscript",
        ariaAtomic: "true",
      });
      assertType<CamelCaseRoleAttributes>({
        role: "awesome superscript",
        ariaAtomic: "true",
      });
    });
    test("other aria properties", () => {
      // @ts-expect-error aria-label is prohibited for superscript role
      assertType<CamelCaseRoleAttributes>({
        role: "superscript",
        ariaLabel: "foobar",
      });
    });
  });
  describe("switch", () => {
    it("should have switch role, and aria properties", () => {
      assertType<CamelCaseRoleAttributes>({
        role: "switch",
        ariaLabel: "foobar",
        ariaChecked: "true",
      });
      assertType<CamelCaseRoleAttributes>({
        role: "awesome switch",
        ariaLabel: "foobar",
        ariaChecked: "true",
      });
    });
    test("other aria properties", () => {
      assertType<CamelCaseRoleAttributes>({
        role: "switch",
        ariaLabel: "foobar",
        // @ts-expect-error aria-activedescendant is not a valid aria property for switch role
        ariaActiveDescendant: "foobar",
      });
    });
  });
  describe("tab", () => {
    it("should have tab role, and aria properties", () => {
      assertType<CamelCaseRoleAttributes>({
        role: "tab",
        ariaLabel: "foobar",
        ariaSelected: "true",
      });
      assertType<CamelCaseRoleAttributes>({
        role: "awesome tab",
        ariaLabel: "foobar",
        ariaSelected: "true",
      });
    });
    test("other aria properties", () => {
      assertType<CamelCaseRoleAttributes>({
        role: "tab",
        ariaLabel: "foobar",
        // @ts-expect-error aria-activedescendant is not a valid aria property for tab role
        ariaActiveDescendant: "foobar",
      });
    });
  });
  describe("tabpanel", () => {
    it("should have tabpanel role, and aria properties", () => {
      assertType<CamelCaseRoleAttributes>({
        role: "tabpanel",
        ariaLabel: "foobar",
      });
      assertType<CamelCaseRoleAttributes>({
        role: "awesome tabpanel",
        ariaLabel: "foobar",
      });
    });
    test("other aria properties", () => {
      assertType<CamelCaseRoleAttributes>({
        role: "tabpanel",
        ariaLabel: "foobar",
        // @ts-expect-error aria-activedescendant is not a valid aria property for tabpanel role
        ariaActiveDescendant: "foobar",
      });
    });
  });
  describe("table", () => {
    it("should have table role, and aria properties", () => {
      assertType<CamelCaseRoleAttributes>({
        role: "table",
        ariaLabel: "foobar",
      });
      assertType<CamelCaseRoleAttributes>({
        role: "awesome table",
        ariaLabel: "foobar",
      });
    });
    test("other aria properties", () => {
      assertType<CamelCaseRoleAttributes>({
        role: "table",
        ariaLabel: "foobar",
        // @ts-expect-error aria-activedescendant is not a valid aria property for table role
        ariaActiveDescendant: "foobar",
      });
    });
  });
  describe("tablist", () => {
    it("should have tablist role, and aria properties", () => {
      assertType<CamelCaseRoleAttributes>({
        role: "tablist",
        ariaLabel: "foobar",
      });
      assertType<CamelCaseRoleAttributes>({
        role: "awesome tablist",
        ariaLabel: "foobar",
      });
    });
    test("other aria properties", () => {
      assertType<CamelCaseRoleAttributes>({
        role: "tablist",
        ariaLabel: "foobar",
        // @ts-expect-error aria-colindex is not a valid aria property for tablist role
        ariaColIndex: 2,
      });
    });
  });
  describe("tabpanel", () => {
    it("should have tabpanel role, and aria properties", () => {
      assertType<CamelCaseRoleAttributes>({
        role: "tabpanel",
        ariaLabel: "foobar",
      });
      assertType<CamelCaseRoleAttributes>({
        role: "awesome tabpanel",
        ariaLabel: "foobar",
      });
    });
    test("other aria properties", () => {
      assertType<CamelCaseRoleAttributes>({
        role: "tabpanel",
        ariaLabel: "foobar",
        // @ts-expect-error aria-activedescendant is not a valid aria property for tabpanel role
        ariaActiveDescendant: "foobar",
      });
    });
  });
  describe("term", () => {
    it("should have term role, and aria properties", () => {
      assertType<CamelCaseRoleAttributes>({
        role: "term",
        ariaLabel: "foobar",
      });
      assertType<CamelCaseRoleAttributes>({
        role: "awesome term",
        ariaLabel: "foobar",
      });
    });
    test("other aria properties", () => {
      assertType<CamelCaseRoleAttributes>({
        role: "term",
        ariaLabel: "foobar",
        // @ts-expect-error aria-activedescendant is not a valid aria property for term role
        ariaActiveDescendant: "foobar",
      });
    });
  });
  describe("textbox", () => {
    it("should have textbox role, and aria properties", () => {
      assertType<CamelCaseRoleAttributes>({
        role: "textbox",
        ariaLabel: "foobar",
        ariaHasPopup: "listbox",
        ariaActiveDescendant: "foobar",
      });
      assertType<CamelCaseRoleAttributes>({
        role: "awesome textbox",
        ariaLabel: "foobar",
        ariaHasPopup: "listbox",
        ariaActiveDescendant: "foobar",
      });
    });
    test("other aria properties", () => {
      assertType<CamelCaseRoleAttributes>({
        role: "textbox",
        ariaLabel: "foobar",
        // @ts-expect-error aria-colindex is not a valid aria property for textbox role
        ariaColIndex: 2,
      });
    });
  });
  describe("time", () => {
    it("should have time role, and aria properties", () => {
      assertType<CamelCaseRoleAttributes>({
        role: "time",
        ariaLabel: "foobar",
      });
      assertType<CamelCaseRoleAttributes>({
        role: "awesome time",
        ariaLabel: "foobar",
      });
    });
    test("other aria properties", () => {
      assertType<CamelCaseRoleAttributes>({
        role: "time",
        ariaLabel: "foobar",
        // @ts-expect-error aria-activedescendant is not a valid aria property for time role
        ariaActiveDescendant: "foobar",
      });
    });
  });
  describe("timer", () => {
    it("should have timer role, and aria properties", () => {
      assertType<CamelCaseRoleAttributes>({
        role: "timer",
        ariaLabel: "foobar",
      });
      assertType<CamelCaseRoleAttributes>({
        role: "awesome timer",
        ariaLabel: "foobar",
      });
    });
    test("other aria properties", () => {
      assertType<CamelCaseRoleAttributes>({
        role: "timer",
        ariaLabel: "foobar",
        // @ts-expect-error aria-activedescendant is not a valid aria property for timer role
        ariaActiveDescendant: "foobar",
      });
    });
  });
  describe("toolbar", () => {
    it("should have toolbar role, and aria properties", () => {
      assertType<CamelCaseRoleAttributes>({
        role: "toolbar",
        ariaLabel: "foobar",
      });
      assertType<CamelCaseRoleAttributes>({
        role: "awesome toolbar",
        ariaLabel: "foobar",
      });
    });
    test("other aria properties", () => {
      assertType<CamelCaseRoleAttributes>({
        role: "toolbar",
        ariaLabel: "foobar",
        // @ts-expect-error aria-colindex is not a valid aria property for toolbar role
        ariaColIndex: 2,
      });
    });
  });
  describe("tooltip", () => {
    it("should have tooltip role, and aria properties", () => {
      assertType<CamelCaseRoleAttributes>({
        role: "tooltip",
        ariaLabel: "foobar",
      });
      assertType<CamelCaseRoleAttributes>({
        role: "awesome tooltip",
        ariaLabel: "foobar",
      });
    });
    test("other aria properties", () => {
      assertType<CamelCaseRoleAttributes>({
        role: "tooltip",
        ariaLabel: "foobar",
        // @ts-expect-error aria-activedescendant is not a valid aria property for tooltip role
        ariaActiveDescendant: "foobar",
      });
    });
  });
  describe("tree", () => {
    it("should have tree role, and aria properties", () => {
      assertType<CamelCaseRoleAttributes>({
        role: "tree",
        ariaLabel: "foobar",
      });
      assertType<CamelCaseRoleAttributes>({
        role: "awesome tree",
        ariaLabel: "foobar",
      });
    });
    test("other aria properties", () => {
      assertType<CamelCaseRoleAttributes>({
        role: "tree",
        ariaLabel: "foobar",
        // @ts-expect-error aria-colcount is not a valid aria property for tree role
        ariaColCount: 2,
      });
    });
  });
  describe("treegrid", () => {
    it("should have treegrid role, and aria properties", () => {
      assertType<CamelCaseRoleAttributes>({
        role: "treegrid",
        ariaLabel: "foobar",
      });
      assertType<CamelCaseRoleAttributes>({
        role: "awesome treegrid",
        ariaLabel: "foobar",
      });
    });
    test("other aria properties", () => {
      assertType<CamelCaseRoleAttributes>({
        role: "treegrid",
        ariaLabel: "foobar",
        // @ts-expect-error aria-activedescendant is not a valid aria property for treegrid role
        ariaColIndex: "foobar",
      });
    });
  });
  describe("treeitem", () => {
    it("should have treeitem role, and aria properties", () => {
      assertType<CamelCaseRoleAttributes>({
        role: "treeitem",
        ariaLabel: "foobar",
      });
      assertType<CamelCaseRoleAttributes>({
        role: "awesome treeitem",
        ariaLabel: "foobar",
      });
    });
    test("other aria properties", () => {
      assertType<CamelCaseRoleAttributes>({
        role: "treeitem",
        ariaLabel: "foobar",
        // @ts-expect-error aria-activedescendant is not a valid aria property for treeitem role
        ariaActiveDescendant: "foobar",
      });
    });
  });
});
