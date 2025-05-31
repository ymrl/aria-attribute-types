import { describe, it, assertType } from "vitest";
import { KebabCaseAria } from "./KebabCaseAria";

describe("KebabCaseAria", () => {
  it("should not allow invalid role types", () => {
    // @ts-expect-error - should not allow invalid role types
    assertType<KebabCaseAria<"invalidRole">>({ label: "test" });
  });

  describe("alert role", () => {
    it("should allow valid alert role attributes", () => {
      assertType<KebabCaseAria<"alert">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "alert-controls",
        "aria-current": "location",
        "aria-describedby": "alert-description",
        "aria-details": "alert-details",
        "aria-disabled": "true",
        "aria-dropeffect": "copy",
        "aria-errormessage": "alert-error",
        "aria-flowto": "alert-flow",
        "aria-grabbed": "undefined",
        "aria-haspopup": "menu",
        "aria-hidden": "undefined",
        "aria-invalid": "grammar",
        "aria-keyshortcuts": "alert-shortcuts",
        "aria-label": "alert message",
        "aria-labelledby": "alert-label",
        "aria-live": "assertive",
        "aria-owns": "alert-owns",
        "aria-relevant": "additions removals",
        "aria-roledescription": "alert role description",
      });
      assertType<KebabCaseAria<"awesomealert alert">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "alert-controls",
        "aria-current": "location",
        "aria-describedby": "alert-description",
        "aria-details": "alert-details",
        "aria-disabled": "true",
        "aria-dropeffect": "copy",
        "aria-errormessage": "alert-error",
        "aria-flowto": "alert-flow",
        "aria-grabbed": "undefined",
        "aria-haspopup": "menu",
        "aria-hidden": "undefined",
        "aria-invalid": "grammar",
        "aria-keyshortcuts": "alert-shortcuts",
        "aria-label": "alert message",
        "aria-labelledby": "alert-label",
        "aria-live": "assertive",
        "aria-owns": "alert-owns",
        "aria-relevant": "additions removals",
        "aria-roledescription": "alert role description",
      });
    });
    it("should not allow invalid alert role attributes", () => {
      assertType<KebabCaseAria<"alert">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "alert-controls",
        // @ts-expect-error - should not allow invalid attributes
        "aria-modal": "true",
      });
      assertType<KebabCaseAria<"awesomealert alert">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "alert-controls",
        // @ts-expect-error - should not allow invalid attributes
        "aria-modal": "true",
      });
    });
  });

  describe("alertdialog role", () => {
    it("should allow valid alertdialog role attributes", () => {
      assertType<KebabCaseAria<"alertdialog">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "alertdialog-controls",
        "aria-current": "location",
        "aria-describedby": "alertdialog-description",
        "aria-details": "alertdialog-details",
        "aria-disabled": "true",
        "aria-dropeffect": "copy",
        "aria-errormessage": "alertdialog-error",
        "aria-flowto": "alertdialog-flow",
        "aria-grabbed": "undefined",
        "aria-haspopup": "dialog",
        "aria-hidden": "undefined",
        "aria-invalid": "spelling",
        "aria-keyshortcuts": "alertdialog-shortcuts",
        "aria-label": "alert dialog message",
        "aria-labelledby": "alertdialog-label",
        "aria-live": "assertive",
        "aria-modal": "true",
        "aria-owns": "alertdialog-owns",
        "aria-relevant": "text removals",
        "aria-roledescription": "alert dialog role description",
      });
      assertType<KebabCaseAria<"awesomealertdialog alertdialog">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "alertdialog-controls",
        "aria-current": "location",
        "aria-describedby": "alertdialog-description",
        "aria-details": "alertdialog-details",
        "aria-disabled": "true",
        "aria-dropeffect": "copy",
        "aria-errormessage": "alertdialog-error",
        "aria-flowto": "alertdialog-flow",
        "aria-grabbed": "undefined",
        "aria-haspopup": "dialog",
        "aria-hidden": "undefined",
        "aria-invalid": "spelling",
        "aria-keyshortcuts": "alertdialog-shortcuts",
        "aria-label": "alert dialog message",
        "aria-labelledby": "alertdialog-label",
        "aria-live": "assertive",
        "aria-modal": "true",
        "aria-owns": "alertdialog-owns",
        "aria-relevant": "text removals",
        "aria-roledescription": "alert dialog role description",
      });
    });
    it("should not allow invalid alertdialog role attributes", () => {
      assertType<KebabCaseAria<"alertdialog">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "alertdialog-controls",
        // @ts-expect-error - should not allow invalid attributes
        "aria-colcount": 1,
      });
      assertType<KebabCaseAria<"awesomealertdialog alertdialog">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "alertdialog-controls",
        // @ts-expect-error - should not allow invalid attributes
        "aria-colcount": 1,
      });
    });
  });

  describe("application role", () => {
    it("should allow valid application role attributes", () => {
      assertType<KebabCaseAria<"application">>({
        "aria-activedescendant": "application-active-descendant",
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "application-controls",
        "aria-current": "location",
        "aria-describedby": "application-description",
        "aria-details": "application-details",
        "aria-disabled": "true",
        "aria-dropeffect": "copy",
        "aria-errormessage": "application-error",
        "aria-expanded": "undefined",
        "aria-flowto": "application-flow",
        "aria-grabbed": "undefined",
        "aria-haspopup": "menu",
        "aria-hidden": "undefined",
        "aria-invalid": "grammar",
        "aria-keyshortcuts": "application-shortcuts",
        "aria-label": "application message",
        "aria-labelledby": "application-label",
        "aria-live": "polite",
        "aria-owns": "application-owns",
        "aria-relevant": "additions removals text",
        "aria-roledescription": "application role description",
      });
      assertType<KebabCaseAria<"awesomeapplication application">>({
        "aria-activedescendant": "application-active-descendant",
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "application-controls",
        "aria-current": "location",
        "aria-describedby": "application-description",
        "aria-details": "application-details",
        "aria-disabled": "true",
        "aria-dropeffect": "copy",
        "aria-errormessage": "application-error",
        "aria-expanded": "undefined",
        "aria-flowto": "application-flow",
        "aria-grabbed": "undefined",
        "aria-haspopup": "menu",
        "aria-hidden": "undefined",
        "aria-invalid": "grammar",
        "aria-keyshortcuts": "application-shortcuts",
        "aria-label": "application message",
        "aria-labelledby": "application-label",
        "aria-live": "polite",
        "aria-owns": "application-owns",
        "aria-relevant": "additions removals text",
        "aria-roledescription": "application role description",
      });
    });
    it("should not allow invalid application role attributes", () => {
      assertType<KebabCaseAria<"application">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "application-controls",
        // @ts-expect-error - should not allow invalid attributes
        "aria-rowcount": 1,
      });
      assertType<KebabCaseAria<"awesomeapplication application">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "application-controls",
        // @ts-expect-error - should not allow invalid attributes
        "aria-rowcount": 1,
      });
    });
  });

  describe("article role", () => {
    it("should allow valid article role attributes", () => {
      assertType<KebabCaseAria<"article">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "article-controls",
        "aria-current": "location",
        "aria-describedby": "article-description",
        "aria-details": "article-details",
        "aria-disabled": "true",
        "aria-dropeffect": "copy",
        "aria-errormessage": "article-error",
        "aria-flowto": "article-flow",
        "aria-grabbed": "undefined",
        "aria-haspopup": "menu",
        "aria-hidden": "undefined",
        "aria-invalid": "grammar",
        "aria-keyshortcuts": "article-shortcuts",
        "aria-label": "article message",
        "aria-labelledby": "article-label",
        "aria-live": "polite",
        "aria-owns": "article-owns",
        "aria-posinset": 1,
        "aria-relevant": "additions removals text",
        "aria-roledescription": "article role description",
        "aria-setsize": 1,
      });
      assertType<KebabCaseAria<"awesomearticle article">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "article-controls",
        "aria-current": "location",
        "aria-describedby": "article-description",
        "aria-details": "article-details",
        "aria-disabled": "true",
        "aria-dropeffect": "copy",
        "aria-errormessage": "article-error",
        "aria-flowto": "article-flow",
        "aria-grabbed": "undefined",
        "aria-haspopup": "menu",
        "aria-hidden": "undefined",
        "aria-invalid": "grammar",
        "aria-keyshortcuts": "article-shortcuts",
        "aria-label": "article message",
        "aria-labelledby": "article-label",
        "aria-live": "polite",
        "aria-owns": "article-owns",
        "aria-posinset": 1,
        "aria-relevant": "additions removals text",
        "aria-roledescription": "article role description",
        "aria-setsize": 1,
      });
    });
    it("should not allow invalid article role attributes", () => {
      assertType<KebabCaseAria<"article">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "article-controls",
        // @ts-expect-error - should not allow invalid attributes
        "aria-rowcount": 1,
      });
      assertType<KebabCaseAria<"awesomearticle article">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "article-controls",
        // @ts-expect-error - should not allow invalid attributes
        "aria-rowcount": 1,
      });
    });
  });
  describe("banner role", () => {
    it("should allow valid banner role attributes", () => {
      assertType<KebabCaseAria<"banner">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "banner-controls",
        "aria-current": "location",
        "aria-describedby": "banner-description",
        "aria-details": "banner-details",
        "aria-disabled": "true",
        "aria-dropeffect": "copy",
        "aria-errormessage": "banner-error",
        "aria-flowto": "banner-flow",
        "aria-grabbed": "undefined",
        "aria-haspopup": "menu",
        "aria-hidden": "undefined",
        "aria-invalid": "grammar",
        "aria-keyshortcuts": "banner-shortcuts",
        "aria-label": "banner message",
        "aria-labelledby": "banner-label",
        "aria-live": "polite",
        "aria-owns": "banner-owns",
        "aria-relevant": "additions removals text",
        "aria-roledescription": "banner role description",
      });
      assertType<KebabCaseAria<"awesomebanner banner">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "banner-controls",
        "aria-current": "location",
        "aria-describedby": "banner-description",
        "aria-details": "banner-details",
        "aria-disabled": "true",
        "aria-dropeffect": "copy",
        "aria-errormessage": "banner-error",
        "aria-flowto": "banner-flow",
        "aria-grabbed": "undefined",
        "aria-haspopup": "menu",
        "aria-hidden": "undefined",
        "aria-invalid": "grammar",
        "aria-keyshortcuts": "banner-shortcuts",
        "aria-label": "banner message",
        "aria-labelledby": "banner-label",
        "aria-live": "polite",
        "aria-owns": "banner-owns",
        "aria-relevant": "additions removals text",
        "aria-roledescription": "banner role description",
      });
    });
    it("should not allow invalid banner role attributes", () => {
      assertType<KebabCaseAria<"banner">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "banner-controls",
        // @ts-expect-error - should not allow invalid attributes
        "aria-rowcount": 1,
      });
      assertType<KebabCaseAria<"awesomebanner banner">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "banner-controls",
        // @ts-expect-error - should not allow invalid attributes
        "aria-rowcount": 1,
      });
    });
  });
  describe("blockquote role", () => {
    it("should allow valid blockquote role attributes", () => {
      assertType<KebabCaseAria<"blockquote">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "blockquote-controls",
        "aria-current": "location",
        "aria-describedby": "blockquote-description",
        "aria-details": "blockquote-details",
        "aria-disabled": "true",
        "aria-dropeffect": "copy",
        "aria-errormessage": "blockquote-error",
        "aria-flowto": "blockquote-flow",
        "aria-grabbed": "undefined",
        "aria-haspopup": "menu",
        "aria-hidden": "undefined",
        "aria-invalid": "grammar",
        "aria-keyshortcuts": "blockquote-shortcuts",
        "aria-label": "blockquote message",
        "aria-labelledby": "blockquote-label",
        "aria-live": "polite",
        "aria-owns": "blockquote-owns",
        "aria-relevant": "additions removals text",
        "aria-roledescription": "blockquote role description",
      });
      assertType<KebabCaseAria<"awesomeblockquote blockquote">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "blockquote-controls",
        "aria-current": "location",
        "aria-describedby": "blockquote-description",
        "aria-details": "blockquote-details",
        "aria-disabled": "true",
        "aria-dropeffect": "copy",
        "aria-errormessage": "blockquote-error",
        "aria-flowto": "blockquote-flow",
        "aria-grabbed": "undefined",
        "aria-haspopup": "menu",
        "aria-hidden": "undefined",
        "aria-invalid": "grammar",
        "aria-keyshortcuts": "blockquote-shortcuts",
        "aria-label": "blockquote message",
        "aria-labelledby": "blockquote-label",
        "aria-live": "polite",
        "aria-owns": "blockquote-owns",
        "aria-relevant": "additions removals text",
        "aria-roledescription": "blockquote role description",
      });
    });
    it("should not allow invalid blockquote role attributes", () => {
      assertType<KebabCaseAria<"blockquote">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "blockquote-controls",
        // @ts-expect-error - should not allow invalid attributes
        "aria-rowcount": 1,
      });
      assertType<KebabCaseAria<"awesomeblockquote blockquote">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "blockquote-controls",
        // @ts-expect-error - should not allow invalid attributes
        "aria-rowcount": 1,
      });
    });
  });

  describe("button role", () => {
    it("should allow valid button role attributes", () => {
      assertType<KebabCaseAria<"button">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "button-controls",
        "aria-current": "location",
        "aria-describedby": "button-description",
        "aria-details": "button-details",
        "aria-disabled": "true",
        "aria-dropeffect": "copy",
        "aria-errormessage": "button-error",
        "aria-expanded": "undefined",
        "aria-flowto": "button-flow",
        "aria-grabbed": "undefined",
        "aria-haspopup": "menu",
        "aria-hidden": "undefined",
        "aria-invalid": "grammar",
        "aria-keyshortcuts": "button-shortcuts",
        "aria-label": "button message",
        "aria-labelledby": "button-label",
        "aria-live": "polite",
        "aria-owns": "button-owns",
        "aria-pressed": "true",
        "aria-relevant": "additions removals text",
        "aria-roledescription": "button role description",
      });
      assertType<KebabCaseAria<"awesomebutton button">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "button-controls",
        "aria-current": "location",
        "aria-describedby": "button-description",
        "aria-details": "button-details",
        "aria-disabled": "true",
        "aria-dropeffect": "copy",
        "aria-errormessage": "button-error",
        "aria-expanded": "undefined",
        "aria-flowto": "button-flow",
        "aria-grabbed": "undefined",
        "aria-haspopup": "menu",
        "aria-hidden": "undefined",
        "aria-invalid": "grammar",
        "aria-keyshortcuts": "button-shortcuts",
        "aria-label": "button message",
        "aria-labelledby": "button-label",
        "aria-live": "polite",
        "aria-owns": "button-owns",
        "aria-pressed": "true",
        "aria-relevant": "additions removals text",
        "aria-roledescription": "button role description",
      });
    });
    it("should not allow invalid button role attributes", () => {
      assertType<KebabCaseAria<"button">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "button-controls",
        // @ts-expect-error - should not allow invalid attributes
        "aria-rowcount": 1,
      });
      assertType<KebabCaseAria<"awesomebutton button">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "button-controls",
        // @ts-expect-error - should not allow invalid attributes
        "aria-rowcount": 1,
      });
    });
  });

  describe("caption role", () => {
    it("should allow valid caption role attributes", () => {
      assertType<KebabCaseAria<"caption">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "caption-controls",
        "aria-current": "location",
        "aria-describedby": "caption-description",
        "aria-details": "caption-details",
        "aria-disabled": "true",
        "aria-dropeffect": "copy",
        "aria-errormessage": "caption-error",
        "aria-flowto": "caption-flow",
        "aria-grabbed": "undefined",
        "aria-haspopup": "menu",
        "aria-hidden": "undefined",
        "aria-invalid": "grammar",
        "aria-keyshortcuts": "caption-shortcuts",
        "aria-live": "polite",
        "aria-owns": "caption-owns",
        "aria-relevant": "additions removals text",
        "aria-roledescription": "caption role description",
      });
      assertType<KebabCaseAria<"awesomecaption caption">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "caption-controls",
        "aria-current": "location",
        "aria-describedby": "caption-description",
        "aria-details": "caption-details",
        "aria-disabled": "true",
        "aria-dropeffect": "copy",
        "aria-errormessage": "caption-error",
        "aria-flowto": "caption-flow",
        "aria-grabbed": "undefined",
        "aria-haspopup": "menu",
        "aria-hidden": "undefined",
        "aria-invalid": "grammar",
        "aria-keyshortcuts": "caption-shortcuts",
        "aria-live": "polite",
        "aria-owns": "caption-owns",
        "aria-relevant": "additions removals text",
        "aria-roledescription": "caption role description",
      });
    });
    it("should not allow label and labelledBy attributes", () => {
      assertType<KebabCaseAria<"caption">>({
        // @ts-expect-error - should not allow label attribute
        "aria-label": "caption label",
      });
      assertType<KebabCaseAria<"caption">>({
        // @ts-expect-error - should not allow labelledby attribute
        "aria-labelledby": "caption label",
      });
    });

    it("should not allow invalid caption role attributes", () => {
      assertType<KebabCaseAria<"caption">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "caption-controls",
        // @ts-expect-error - should not allow invalid attributes
        "aria-rowcount": 1,
      });
      assertType<KebabCaseAria<"awesomecaption caption">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "caption-controls",
        // @ts-expect-error - should not allow invalid attributes
        "aria-rowcount": 1,
      });
    });
  });

  describe("cell role", () => {
    it("should allow valid cell role attributes", () => {
      assertType<KebabCaseAria<"cell">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "cell-controls",
        "aria-colindex": 1,
        "aria-colspan": 2,
        "aria-current": "location",
        "aria-describedby": "cell-description",
        "aria-details": "cell-details",
        "aria-disabled": "true",
        "aria-dropeffect": "copy",
        "aria-errormessage": "cell-error",
        "aria-flowto": "cell-flow",
        "aria-grabbed": "undefined",
        "aria-haspopup": "menu",
        "aria-hidden": "undefined",
        "aria-invalid": "grammar",
        "aria-keyshortcuts": "cell-shortcuts",
        "aria-label": "cell message",
        "aria-labelledby": "cell-label",
        "aria-live": "polite",
        "aria-owns": "cell-owns",
        "aria-relevant": "additions removals text",
        "aria-roledescription": "cell role description",
        "aria-rowindex": 1,
        "aria-rowspan": 2,
      });
      assertType<KebabCaseAria<"awesomecell cell">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "cell-controls",
        "aria-colindex": 1,
        "aria-colspan": 2,
        "aria-current": "location",
        "aria-describedby": "cell-description",
        "aria-details": "cell-details",
        "aria-disabled": "true",
        "aria-dropeffect": "copy",
        "aria-errormessage": "cell-error",
        "aria-flowto": "cell-flow",
        "aria-grabbed": "undefined",
        "aria-haspopup": "menu",
        "aria-hidden": "undefined",
        "aria-invalid": "grammar",
        "aria-keyshortcuts": "cell-shortcuts",
        "aria-label": "cell message",
        "aria-labelledby": "cell-label",
        "aria-live": "polite",
        "aria-owns": "cell-owns",
        "aria-relevant": "additions removals text",
        "aria-roledescription": "cell role description",
        "aria-rowindex": 1,
        "aria-rowspan": 2,
      });
    });
    it("should not allow invalid cell role attributes", () => {
      assertType<KebabCaseAria<"cell">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "cell-controls",
        // @ts-expect-error - should not allow invalid attributes
        "aria-rowcount": 1,
      });
      assertType<KebabCaseAria<"awesomecell cell">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "cell-controls",
        // @ts-expect-error - should not allow invalid attributes
        "aria-rowcount": 1,
      });
    });
  });
  describe("checkbox role", () => {
    it("should allow valid checkbox role attributes", () => {
      assertType<KebabCaseAria<"checkbox">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-checked": "mixed",
        "aria-controls": "checkbox-controls",
        "aria-current": "location",
        "aria-describedby": "checkbox-description",
        "aria-details": "checkbox-details",
        "aria-disabled": "true",
        "aria-dropeffect": "copy",
        "aria-errormessage": "checkbox-error",
        "aria-expanded": "undefined",
        "aria-flowto": "checkbox-flow",
        "aria-grabbed": "undefined",
        "aria-haspopup": "menu",
        "aria-hidden": "undefined",
        "aria-invalid": "grammar",
        "aria-keyshortcuts": "checkbox-shortcuts",
        "aria-label": "checkbox message",
        "aria-labelledby": "checkbox-label",
        "aria-live": "polite",
        "aria-owns": "checkbox-owns",
        "aria-readonly": "true",
        "aria-relevant": "additions removals text",
        "aria-required": "true",
        "aria-roledescription": "checkbox role description",
      });
      assertType<KebabCaseAria<"awesomecheckbox checkbox">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-checked": "mixed",
        "aria-controls": "checkbox-controls",
        "aria-current": "location",
        "aria-describedby": "checkbox-description",
        "aria-details": "checkbox-details",
        "aria-disabled": "true",
        "aria-dropeffect": "copy",
        "aria-errormessage": "checkbox-error",
        "aria-expanded": "undefined",
        "aria-flowto": "checkbox-flow",
        "aria-grabbed": "undefined",
        "aria-haspopup": "menu",
        "aria-hidden": "undefined",
        "aria-invalid": "grammar",
        "aria-keyshortcuts": "checkbox-shortcuts",
        "aria-label": "checkbox message",
        "aria-labelledby": "checkbox-label",
        "aria-live": "polite",
        "aria-owns": "checkbox-owns",
        "aria-readonly": "true",
        "aria-relevant": "additions removals text",
        "aria-required": "true",
        "aria-roledescription": "checkbox role description",
      });
    });
    it("should not allow invalid checkbox role attributes", () => {
      assertType<KebabCaseAria<"checkbox">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "checkbox-controls",
        // @ts-expect-error - should not allow invalid attributes
        "aria-rowcount": 1,
      });
      assertType<KebabCaseAria<"awesomecheckbox checkbox">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "checkbox-controls",
        // @ts-expect-error - should not allow invalid attributes
        "aria-rowcount": 1,
      });
    });
  });

  describe("code role", () => {
    it("should allow valid code role attributes", () => {
      assertType<KebabCaseAria<"code">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "code-controls",
        "aria-current": "location",
        "aria-describedby": "code-description",
        "aria-details": "code-details",
        "aria-disabled": "true",
        "aria-dropeffect": "copy",
        "aria-errormessage": "code-error",
        "aria-flowto": "code-flow",
        "aria-grabbed": "undefined",
        "aria-haspopup": "menu",
        "aria-hidden": "undefined",
        "aria-invalid": "grammar",
        "aria-keyshortcuts": "code-shortcuts",
        "aria-live": "polite",
        "aria-owns": "code-owns",
        "aria-relevant": "additions removals text",
        "aria-roledescription": "code role description",
      });
      assertType<KebabCaseAria<"awesomecode code">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "code-controls",
        "aria-describedby": "code-description",
        "aria-details": "code-details",
        "aria-disabled": "true",
        "aria-dropeffect": "copy",
        "aria-errormessage": "code-error",
        "aria-flowto": "code-flow",
        "aria-grabbed": "undefined",
        "aria-haspopup": "menu",
        "aria-hidden": "undefined",
        "aria-invalid": "grammar",
        "aria-live": "polite",
        "aria-owns": "code-owns",
        "aria-relevant": "additions removals text",
        "aria-roledescription": "code role description",
      });
    });
    it("should not allow label and labelledBy attributes", () => {
      assertType<KebabCaseAria<"code">>({
        // @ts-expect-error - should not allow label attribute
        "aria-label": "code label",
      });
      assertType<KebabCaseAria<"code">>({
        // @ts-expect-error - should not allow labelledby attribute
        "aria-labelledby": "code label",
      });
    });
    it("should not allow invalid code role attributes", () => {
      assertType<KebabCaseAria<"code">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "code-controls",
        // @ts-expect-error - should not allow invalid attributes
        "aria-rowcount": 1,
      });
      assertType<KebabCaseAria<"awesomecode code">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "code-controls",
        // @ts-expect-error - should not allow invalid attributes
        "aria-rowcount": 1,
      });
    });
  });

  describe("columnheader role", () => {
    it("should allow valid columnheader role attributes", () => {
      assertType<KebabCaseAria<"columnheader">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-colindex": 1,
        "aria-colspan": 2,
        "aria-controls": "columnheader-controls",
        "aria-current": "location",
        "aria-describedby": "columnheader-description",
        "aria-details": "columnheader-details",
        "aria-disabled": "true",
        "aria-dropeffect": "copy",
        "aria-errormessage": "columnheader-error",
        "aria-expanded": "true",
        "aria-flowto": "columnheader-flow",
        "aria-grabbed": "undefined",
        "aria-haspopup": "menu",
        "aria-hidden": "undefined",
        "aria-invalid": "grammar",
        "aria-keyshortcuts": "columnheader-shortcuts",
        "aria-label": "column header message",
        "aria-labelledby": "columnheader-label",
        "aria-live": "polite",
        "aria-owns": "columnheader-owns",
        "aria-readonly": "true",
        "aria-relevant": "additions removals text",
        "aria-required": "true",
        "aria-roledescription": "column header role description",
        "aria-rowindex": 1,
        "aria-rowspan": 2,
        "aria-selected": "undefined",
        "aria-sort": "ascending",
      });
      assertType<KebabCaseAria<"awesomecolumnheader columnheader">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-colindex": 1,
        "aria-colspan": 2,
        "aria-controls": "columnheader-controls",
        "aria-current": "location",
        "aria-describedby": "columnheader-description",
        "aria-details": "columnheader-details",
        "aria-disabled": "true",
        "aria-dropeffect": "copy",
        "aria-errormessage": "columnheader-error",
        "aria-expanded": "true",
        "aria-flowto": "columnheader-flow",
        "aria-grabbed": "undefined",
        "aria-haspopup": "menu",
        "aria-hidden": "undefined",
        "aria-invalid": "grammar",
        "aria-keyshortcuts": "columnheader-shortcuts",
        "aria-label": "column header message",
        "aria-labelledby": "columnheader-label",
        "aria-live": "polite",
        "aria-owns": "columnheader-owns",
        "aria-readonly": "true",
        "aria-relevant": "additions removals text",
        "aria-required": "true",
        "aria-roledescription": "column header role description",
        "aria-rowindex": 1,
        "aria-rowspan": 2,
        "aria-selected": "undefined",
        "aria-sort": "ascending",
      });
    });
    it("should not allow invalid columnheader role attributes", () => {
      assertType<KebabCaseAria<"columnheader">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "columnheader-controls",
        // @ts-expect-error - should not allow invalid attributes
        "aria-rowcount": 1,
      });
      assertType<KebabCaseAria<"awesomecolumnheader columnheader">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "columnheader-controls",
        // @ts-expect-error - should not allow invalid attributes
        "aria-rowcount": 1,
      });
    });
  });

  describe("combobox role", () => {
    it("should allow valid combobox role attributes", () => {
      assertType<KebabCaseAria<"combobox">>({
        "aria-activedescendant": "combobox-active-descendant",
        "aria-atomic": true,
        "aria-autocomplete": "list",
        "aria-busy": false,
        "aria-controls": "combobox-controls",
        "aria-current": "location",
        "aria-describedby": "combobox-description",
        "aria-details": "combobox-details",
        "aria-disabled": "true",
        "aria-dropeffect": "copy",
        "aria-errormessage": "combobox-error",
        "aria-expanded": "undefined",
        "aria-flowto": "combobox-flow",
        "aria-grabbed": "undefined",
        "aria-haspopup": "listbox",
        "aria-hidden": "undefined",
        "aria-invalid": "grammar",
        "aria-keyshortcuts": "combobox-shortcuts",
        "aria-label": "combobox message",
        "aria-labelledby": "combobox-label",
        "aria-live": "polite",
        "aria-owns": "combobox-owns",
        "aria-readonly": true,
        "aria-relevant": "additions removals text",
        "aria-required": true,
        "aria-roledescription": "combobox role description",
      });
      assertType<KebabCaseAria<"awesomecombobox combobox">>({
        "aria-activedescendant": "combobox-active-descendant",
        "aria-atomic": true,
        "aria-autocomplete": "list",
        "aria-busy": false,
        "aria-controls": "combobox-controls",
        "aria-describedby": "combobox-description",
        "aria-details": "combobox-details",
        "aria-disabled": "true",
        "aria-dropeffect": "copy",
        "aria-errormessage": "combobox-error",
        "aria-expanded": "undefined",
        "aria-flowto": "combobox-flow",
        "aria-grabbed": "undefined",
        "aria-haspopup": "listbox",
        "aria-hidden": "undefined",
        "aria-invalid": "grammar",
        "aria-keyshortcuts": "combobox-shortcuts",
        "aria-label": "combobox message",
        "aria-labelledby": "combobox-label",
        "aria-live": "polite",
        "aria-owns": "combobox-owns",
        "aria-readonly": true,
        "aria-relevant": "additions removals text",
        "aria-required": true,
      });
    });
    it("should not allow invalid combobox role attributes", () => {
      assertType<KebabCaseAria<"combobox">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "combobox-controls",
        // @ts-expect-error - should not allow invalid attributes
        "aria-rowcount": 1,
      });
      assertType<KebabCaseAria<"awesomecombobox combobox">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "combobox-controls",
        // @ts-expect-error - should not allow invalid attributes
        "aria-rowcount": 1,
      });
    });
  });
  describe("complementary role", () => {
    it("should allow valid complementary role attributes", () => {
      assertType<KebabCaseAria<"complementary">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "complementary-controls",
        "aria-current": "location",
        "aria-describedby": "complementary-description",
        "aria-details": "complementary-details",
        "aria-disabled": "true",
        "aria-dropeffect": "copy",
        "aria-errormessage": "complementary-error",
        "aria-flowto": "complementary-flow",
        "aria-grabbed": "undefined",
        "aria-haspopup": "menu",
        "aria-hidden": "undefined",
        "aria-invalid": "grammar",
        "aria-keyshortcuts": "complementary-shortcuts",
        "aria-label": "complementary message",
        "aria-labelledby": "complementary-label",
        "aria-live": "polite",
        "aria-owns": "complementary-owns",
        "aria-relevant": "additions removals text",
        "aria-roledescription": "complementary role description",
      });
      assertType<KebabCaseAria<"awesomecomplementary complementary">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "complementary-controls",
        "aria-current": "location",
        "aria-describedby": "complementary-description",
        "aria-details": "complementary-details",
        "aria-disabled": "true",
        "aria-dropeffect": "copy",
        "aria-errormessage": "complementary-error",
        "aria-flowto": "complementary-flow",
        "aria-grabbed": "undefined",
        "aria-haspopup": "menu",
        "aria-hidden": "undefined",
        "aria-invalid": "grammar",
        "aria-keyshortcuts": "complementary-shortcuts",
        "aria-label": "complementary message",
        "aria-labelledby": "complementary-label",
        "aria-live": "polite",
        "aria-owns": "complementary-owns",
        "aria-relevant": "additions removals text",
      });
    });
    it("should not allow invalid complementary role attributes", () => {
      assertType<KebabCaseAria<"complementary">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "complementary-controls",
        // @ts-expect-error - should not allow invalid attributes
        "aria-rowcount": 1,
      });
      assertType<KebabCaseAria<"awesomecomplementary complementary">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "complementary-controls",
        // @ts-expect-error - should not allow invalid attributes
        "aria-rowcount": 1,
      });
    });
  });

  describe("contentinfo role", () => {
    it("should allow valid contentinfo role attributes", () => {
      assertType<KebabCaseAria<"contentinfo">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "contentinfo-controls",
        "aria-current": "location",
        "aria-describedby": "contentinfo-description",
        "aria-details": "contentinfo-details",
        "aria-disabled": "true",
        "aria-dropeffect": "copy",
        "aria-errormessage": "contentinfo-error",
        "aria-flowto": "contentinfo-flow",
        "aria-grabbed": "undefined",
        "aria-haspopup": "menu",
        "aria-hidden": "undefined",
        "aria-invalid": "grammar",
        "aria-keyshortcuts": "contentinfo-shortcuts",
        "aria-label": "content info message",
        "aria-labelledby": "contentinfo-label",
        "aria-live": "polite",
        "aria-owns": "contentinfo-owns",
        "aria-relevant": "additions removals text",
        "aria-roledescription": "content info role description",
      });
      assertType<KebabCaseAria<"awesomecontentinfo contentinfo">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "contentinfo-controls",
        "aria-current": "location",
        "aria-describedby": "contentinfo-description",
        "aria-details": "contentinfo-details",
        "aria-disabled": "true",
        "aria-dropeffect": "copy",
        "aria-errormessage": "contentinfo-error",
        "aria-flowto": "contentinfo-flow",
        "aria-grabbed": "undefined",
        "aria-haspopup": "menu",
        "aria-hidden": "undefined",
        "aria-invalid": "grammar",
        "aria-keyshortcuts": "contentinfo-shortcuts",
        "aria-label": "content info message",
        "aria-labelledby": "contentinfo-label",
        "aria-live": "polite",
        "aria-owns": "contentinfo-owns",
        "aria-relevant": "additions removals text",
      });
    });
    it("should not allow invalid contentinfo role attributes", () => {
      assertType<KebabCaseAria<"contentinfo">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "contentinfo-controls",
        // @ts-expect-error - should not allow invalid attributes
        "aria-rowcount": 1,
      });
      assertType<KebabCaseAria<"awesomecontentinfo contentinfo">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "contentinfo-controls",
        // @ts-expect-error - should not allow invalid attributes
        "aria-rowcount": 1,
      });
    });
  });

  describe("definition role", () => {
    it("should allow valid definition role attributes", () => {
      assertType<KebabCaseAria<"definition">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "definition-controls",
        "aria-current": "location",
        "aria-describedby": "definition-description",
        "aria-details": "definition-details",
        "aria-disabled": "true",
        "aria-dropeffect": "copy",
        "aria-errormessage": "definition-error",
        "aria-flowto": "definition-flow",
        "aria-grabbed": "undefined",
        "aria-haspopup": "menu",
        "aria-hidden": "undefined",
        "aria-invalid": "grammar",
        "aria-keyshortcuts": "definition-shortcuts",
        "aria-label": "definition message",
        "aria-labelledby": "definition-label",
        "aria-live": "polite",
        "aria-owns": "definition-owns",
        "aria-relevant": "additions removals text",
        "aria-roledescription": "definition role description",
      });
      assertType<KebabCaseAria<"awesomedefinition definition">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "definition-controls",
        "aria-current": "location",
        "aria-describedby": "definition-description",
        "aria-details": "definition-details",
        "aria-disabled": "true",
        "aria-dropeffect": "copy",
        "aria-errormessage": "definition-error",
        "aria-flowto": "definition-flow",
        "aria-grabbed": "undefined",
        "aria-haspopup": "menu",
        "aria-hidden": "undefined",
        "aria-invalid": "grammar",
        "aria-keyshortcuts": "definition-shortcuts",
        "aria-label": "definition message",
        "aria-labelledby": "definition-label",
        "aria-live": "polite",
        "aria-owns": "definition-owns",
        "aria-relevant": "additions removals text",
      });
    });
    it("should not allow invalid definition role attributes", () => {
      assertType<KebabCaseAria<"definition">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "definition-controls",
        // @ts-expect-error - should not allow invalid attributes
        "aria-rowcount": 1,
      });
      assertType<KebabCaseAria<"awesomedefinition definition">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "definition-controls",
        // @ts-expect-error - should not allow invalid attributes
        "aria-rowcount": 1,
      });
    });
  });
  describe("deletion role", () => {
    it("should allow valid deletion role attributes", () => {
      assertType<KebabCaseAria<"deletion">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "deletion-controls",
        "aria-current": "location",
        "aria-describedby": "deletion-description",
        "aria-details": "deletion-details",
        "aria-disabled": "true",
        "aria-dropeffect": "copy",
        "aria-errormessage": "deletion-error",
        "aria-flowto": "deletion-flow",
        "aria-grabbed": "undefined",
        "aria-haspopup": "menu",
        "aria-hidden": "undefined",
        "aria-keyshortcuts": "deletion-shortcuts",
        "aria-invalid": "grammar",
        "aria-live": "polite",
        "aria-owns": "deletion-owns",
        "aria-relevant": "additions removals text",
        "aria-roledescription": "deletion role description",
      });
      assertType<KebabCaseAria<"awesomedeletion deletion">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "deletion-controls",
        "aria-current": "location",
        "aria-describedby": "deletion-description",
        "aria-details": "deletion-details",
        "aria-disabled": "true",
        "aria-dropeffect": "copy",
        "aria-errormessage": "deletion-error",
        "aria-flowto": "deletion-flow",
        "aria-grabbed": "undefined",
        "aria-haspopup": "menu",
        "aria-hidden": "undefined",
        "aria-invalid": "grammar",
        "aria-keyshortcuts": "deletion-shortcuts",
        "aria-live": "polite",
        "aria-owns": "deletion-owns",
        "aria-relevant": "additions removals text",
        "aria-roledescription": "deletion role description",
      });
    });
    it("should not allow label and labelledBy attributes", () => {
      assertType<KebabCaseAria<"deletion">>({
        // @ts-expect-error - should not allow label attribute
        "aria-label": "deletion label",
      });
      assertType<KebabCaseAria<"deletion">>({
        // @ts-expect-error - should not allow labelledby attribute
        "aria-labelledby": "deletion label",
      });
    });
    it("should not allow invalid deletion role attributes", () => {
      assertType<KebabCaseAria<"deletion">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "deletion-controls",
        // @ts-expect-error - should not allow invalid attributes
        "aria-rowcount": 1,
      });
      assertType<KebabCaseAria<"awesomedeletion deletion">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "deletion-controls",
        // @ts-expect-error - should not allow invalid attributes
        "aria-rowcount": 1,
      });
    });
  });

  describe("dialog role", () => {
    it("should allow valid dialog role attributes", () => {
      assertType<KebabCaseAria<"dialog">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "dialog-controls",
        "aria-current": "location",
        "aria-describedby": "dialog-description",
        "aria-details": "dialog-details",
        "aria-disabled": "true",
        "aria-dropeffect": "copy",
        "aria-errormessage": "dialog-error",
        "aria-flowto": "dialog-flow",
        "aria-grabbed": "undefined",
        "aria-haspopup": "menu",
        "aria-hidden": "undefined",
        "aria-invalid": "grammar",
        "aria-keyshortcuts": "dialog-shortcuts",
        "aria-label": "dialog message",
        "aria-labelledby": "dialog-label",
        "aria-live": "polite",
        "aria-modal": "true",
        "aria-owns": "dialog-owns",
        "aria-relevant": "additions removals text",
        "aria-roledescription": "dialog role description",
      });
      assertType<KebabCaseAria<"awesomedialog dialog">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "dialog-controls",
        "aria-current": "location",
        "aria-describedby": "dialog-description",
        "aria-details": "dialog-details",
        "aria-disabled": "true",
        "aria-dropeffect": "copy",
        "aria-errormessage": "dialog-error",
        "aria-flowto": "dialog-flow",
        "aria-grabbed": "undefined",
        "aria-haspopup": "menu",
        "aria-hidden": "undefined",
        "aria-invalid": "grammar",
        "aria-keyshortcuts": "dialog-shortcuts",
        "aria-label": "dialog message",
        "aria-labelledby": "dialog-label",
        "aria-live": "polite",
        "aria-modal": "true",
        "aria-owns": "dialog-owns",
        "aria-relevant": "additions removals text",
        "aria-roledescription": "dialog role description",
      });
    });
    it("should not allow invalid dialog role attributes", () => {
      assertType<KebabCaseAria<"dialog">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "dialog-controls",
        // @ts-expect-error - should not allow invalid attributes
        "aria-rowcount": 1,
      });
      assertType<KebabCaseAria<"awesomedialog dialog">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "dialog-controls",
        // @ts-expect-error - should not allow invalid attributes
        "aria-rowcount": 1,
      });
    });
  });
  describe("directory role", () => {
    it("should allow valid directory role attributes", () => {
      assertType<KebabCaseAria<"directory">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "directory-controls",
        "aria-current": "location",
        "aria-describedby": "directory-description",
        "aria-details": "directory-details",
        "aria-disabled": "true",
        "aria-dropeffect": "copy",
        "aria-errormessage": "directory-error",
        "aria-flowto": "directory-flow",
        "aria-grabbed": "undefined",
        "aria-haspopup": "menu",
        "aria-hidden": "undefined",
        "aria-invalid": "grammar",
        "aria-keyshortcuts": "directory-shortcuts",
        "aria-label": "directory message",
        "aria-labelledby": "directory-label",
        "aria-live": "polite",
        "aria-owns": "directory-owns",
        "aria-relevant": "additions removals text",
        "aria-roledescription": "directory role description",
      });
      assertType<KebabCaseAria<"awesomedirectory directory">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "directory-controls",
        "aria-current": "location",
        "aria-describedby": "directory-description",
        "aria-details": "directory-details",
        "aria-disabled": "true",
        "aria-dropeffect": "copy",
        "aria-errormessage": "directory-error",
        "aria-flowto": "directory-flow",
        "aria-grabbed": "undefined",
        "aria-haspopup": "menu",
        "aria-hidden": "undefined",
        "aria-invalid": "grammar",
        "aria-keyshortcuts": "directory-shortcuts",
        "aria-label": "directory message",
        "aria-labelledby": "directory-label",
        "aria-live": "polite",
        "aria-owns": "directory-owns",
      });
    });
    it("should not allow invalid directory role attributes", () => {
      assertType<KebabCaseAria<"directory">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "directory-controls",
        // @ts-expect-error - should not allow invalid attributes
        "aria-rowcount": 1,
      });
      assertType<KebabCaseAria<"awesomedirectory directory">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "directory-controls",
        // @ts-expect-error - should not allow invalid attributes
        "aria-rowcount": 1,
      });
    });
  });

  describe("document role", () => {
    it("should allow valid document role attributes", () => {
      assertType<KebabCaseAria<"document">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "document-controls",
        "aria-current": "location",
        "aria-describedby": "document-description",
        "aria-details": "document-details",
        "aria-disabled": "true",
        "aria-dropeffect": "copy",
        "aria-errormessage": "document-error",
        "aria-flowto": "document-flow",
        "aria-grabbed": "undefined",
        "aria-haspopup": "menu",
        "aria-hidden": "undefined",
        "aria-invalid": "grammar",
        "aria-keyshortcuts": "document-shortcuts",
        "aria-label": "document message",
        "aria-labelledby": "document-label",
        "aria-live": "polite",
        "aria-owns": "document-owns",
        "aria-relevant": "additions removals text",
        "aria-roledescription": "document role description",
      });
      assertType<KebabCaseAria<"awesomedocument document">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "document-controls",
        "aria-current": "location",
        "aria-describedby": "document-description",
        "aria-details": "document-details",
        "aria-disabled": "true",
        "aria-dropeffect": "copy",
        "aria-errormessage": "document-error",
        "aria-flowto": "document-flow",
        "aria-grabbed": "undefined",
        "aria-haspopup": "menu",
        "aria-hidden": "undefined",
        "aria-invalid": "grammar",
        "aria-keyshortcuts": "document-shortcuts",
        "aria-label": "document message",
        "aria-labelledby": "document-label",
        "aria-live": "polite",
        "aria-owns": "document-owns",
        "aria-relevant": "additions removals text",
        "aria-roledescription": "document role description",
      });
    });
    it("should not allow invalid document role attributes", () => {
      assertType<KebabCaseAria<"document">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "document-controls",
        // @ts-expect-error - should not allow invalid attributes
        "aria-rowcount": 1,
      });
      assertType<KebabCaseAria<"awesomedocument document">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "document-controls",
        // @ts-expect-error - should not allow invalid attributes
        "aria-rowcount": 1,
      });
    });
  });
  describe("emphasis role", () => {
    it("should allow valid emphasis role attributes", () => {
      assertType<KebabCaseAria<"emphasis">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "emphasis-controls",
        "aria-current": "location",
        "aria-describedby": "emphasis-description",
        "aria-details": "emphasis-details",
        "aria-disabled": "true",
        "aria-dropeffect": "copy",
        "aria-errormessage": "emphasis-error",
        "aria-flowto": "emphasis-flow",
        "aria-grabbed": "undefined",
        "aria-haspopup": "menu",
        "aria-hidden": "undefined",
        "aria-invalid": "grammar",
        "aria-keyshortcuts": "emphasis-shortcuts",
        "aria-live": "polite",
        "aria-owns": "emphasis-owns",
        "aria-relevant": "additions removals text",
        "aria-roledescription": "emphasis role description",
      });
      assertType<KebabCaseAria<"awesomeemphasis emphasis">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "emphasis-controls",
        "aria-current": "location",
        "aria-describedby": "emphasis-description",
        "aria-details": "emphasis-details",
        "aria-disabled": "true",
        "aria-dropeffect": "copy",
        "aria-errormessage": "emphasis-error",
        "aria-flowto": "emphasis-flow",
        "aria-grabbed": "undefined",
        "aria-haspopup": "menu",
        "aria-hidden": "undefined",
        "aria-invalid": "grammar",
        "aria-keyshortcuts": "emphasis-shortcuts",
        "aria-live": "polite",
        "aria-owns": "emphasis-owns",
        "aria-relevant": "additions removals text",
        "aria-roledescription": "emphasis role description",
      });
    });
    it("should not allow label and labelledBy attributes", () => {
      assertType<KebabCaseAria<"emphasis">>({
        // @ts-expect-error - should not allow label attribute
        "aria-label": "emphasis label",
      });
      assertType<KebabCaseAria<"emphasis">>({
        // @ts-expect-error - should not allow labelledby attribute
        "aria-labelledby": "emphasis label",
      });
    });
    it("should not allow invalid emphasis role attributes", () => {
      assertType<KebabCaseAria<"emphasis">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "emphasis-controls",
        // @ts-expect-error - should not allow invalid attributes
        "aria-rowcount": 1,
      });
      assertType<KebabCaseAria<"awesomeemphasis emphasis">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "emphasis-controls",
        // @ts-expect-error - should not allow invalid attributes
        "aria-rowcount": 1,
      });
    });
  });

  describe("feed role", () => {
    it("should allow valid feed role attributes", () => {
      assertType<KebabCaseAria<"feed">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "feed-controls",
        "aria-current": "location",
        "aria-describedby": "feed-description",
        "aria-details": "feed-details",
        "aria-disabled": "true",
        "aria-dropeffect": "copy",
        "aria-errormessage": "feed-error",
        "aria-flowto": "feed-flow",
        "aria-grabbed": "undefined",
        "aria-haspopup": "menu",
        "aria-hidden": "undefined",
        "aria-invalid": "grammar",
        "aria-keyshortcuts": "feed-shortcuts",
        "aria-label": "feed message",
        "aria-labelledby": "feed-label",
        "aria-live": "polite",
        "aria-owns": "feed-owns",
        "aria-relevant": "additions removals text",
        "aria-roledescription": "feed role description",
      });
      assertType<KebabCaseAria<"awesomefeed feed">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "feed-controls",
        "aria-current": "location",
        "aria-describedby": "feed-description",
        "aria-details": "feed-details",
        "aria-disabled": "true",
        "aria-dropeffect": "copy",
        "aria-errormessage": "feed-error",
        "aria-flowto": "feed-flow",
        "aria-grabbed": "undefined",
        "aria-haspopup": "menu",
        "aria-hidden": "undefined",
        "aria-invalid": "grammar",
        "aria-keyshortcuts": "feed-shortcuts",
        "aria-label": "feed message",
        "aria-labelledby": "feed-label",
        "aria-live": "polite",
        "aria-owns": "feed-owns",
        "aria-relevant": "additions removals text",
        "aria-roledescription": "feed role description",
      });
    });
    it("should not allow invalid feed role attributes", () => {
      assertType<KebabCaseAria<"feed">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "feed-controls",
        // @ts-expect-error - should not allow invalid attributes
        "aria-rowcount": 1,
      });
      assertType<KebabCaseAria<"awesomefeed feed">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "feed-controls",
        // @ts-expect-error - should not allow invalid attributes
        "aria-rowcount": 1,
      });
    });
  });
  describe("figure role", () => {
    it("should allow valid figure role attributes", () => {
      assertType<KebabCaseAria<"figure">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "figure-controls",
        "aria-current": "location",
        "aria-describedby": "figure-description",
        "aria-details": "figure-details",
        "aria-disabled": "true",
        "aria-dropeffect": "copy",
        "aria-errormessage": "figure-error",
        "aria-flowto": "figure-flow",
        "aria-grabbed": "undefined",
        "aria-haspopup": "menu",
        "aria-hidden": "undefined",
        "aria-invalid": "grammar",
        "aria-keyshortcuts": "figure-shortcuts",
        "aria-label": "figure message",
        "aria-labelledby": "figure-label",
        "aria-live": "polite",
        "aria-owns": "figure-owns",
        "aria-relevant": "additions removals text",
        "aria-roledescription": "figure role description",
      });
      assertType<KebabCaseAria<"awesomefigure figure">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "figure-controls",
        "aria-current": "location",
        "aria-describedby": "figure-description",
        "aria-details": "figure-details",
        "aria-disabled": "true",
        "aria-dropeffect": "copy",
        "aria-errormessage": "figure-error",
        "aria-flowto": "figure-flow",
        "aria-grabbed": "undefined",
        "aria-haspopup": "menu",
        "aria-hidden": "undefined",
        "aria-invalid": "grammar",
        "aria-keyshortcuts": "figure-shortcuts",
        "aria-label": "figure message",
        "aria-labelledby": "figure-label",
        "aria-live": "polite",
        "aria-owns": "figure-owns",
        "aria-relevant": "additions removals text",
        "aria-roledescription": "figure role description",
      });
    });
    it("should not allow invalid figure role attributes", () => {
      assertType<KebabCaseAria<"figure">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "figure-controls",
        // @ts-expect-error - should not allow invalid attributes
        "aria-rowcount": 1,
      });
      assertType<KebabCaseAria<"awesomefigure figure">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "figure-controls",
        // @ts-expect-error - should not allow invalid attributes
        "aria-rowcount": 1,
      });
    });
  });

  describe("form role", () => {
    it("should allow valid form role attributes", () => {
      assertType<KebabCaseAria<"form">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "form-controls",
        "aria-current": "location",
        "aria-describedby": "form-description",
        "aria-details": "form-details",
        "aria-disabled": "true",
        "aria-dropeffect": "copy",
        "aria-errormessage": "form-error",
        "aria-flowto": "form-flow",
        "aria-grabbed": "undefined",
        "aria-haspopup": "menu",
        "aria-hidden": "undefined",
        "aria-invalid": "grammar",
        "aria-keyshortcuts": "form-shortcuts",
        "aria-label": "form message",
        "aria-labelledby": "form-label",
        "aria-live": "polite",
        "aria-owns": "form-owns",
        "aria-relevant": "additions removals text",
        "aria-roledescription": "form role description",
      });
      assertType<KebabCaseAria<"awesomeform form">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "form-controls",
        "aria-current": "location",
        "aria-describedby": "form-description",
        "aria-details": "form-details",
        "aria-disabled": "true",
        "aria-dropeffect": "copy",
        "aria-errormessage": "form-error",
        "aria-flowto": "form-flow",
        "aria-grabbed": "undefined",
        "aria-haspopup": "menu",
        "aria-hidden": "undefined",
        "aria-invalid": "grammar",
        "aria-keyshortcuts": "form-shortcuts",
        "aria-label": "form message",
        "aria-labelledby": "form-label",
        "aria-live": "polite",
        "aria-owns": "form-owns",
        "aria-relevant": "additions removals text",
        "aria-roledescription": "form role description",
      });
    });
    it("should not allow invalid form role attributes", () => {
      assertType<KebabCaseAria<"form">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "form-controls",
        // @ts-expect-error - should not allow invalid attributes
        "aria-rowcount": 1,
      });
      assertType<KebabCaseAria<"awesomeform form">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "form-controls",
        // @ts-expect-error - should not allow invalid attributes
        "aria-rowcount": 1,
      });
    });
  });

  describe("generic role", () => {
    it("should allow valid generic role attributes", () => {
      assertType<KebabCaseAria<"generic">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "generic-controls",
        "aria-current": "location",
        "aria-describedby": "generic-description",
        "aria-details": "generic-details",
        "aria-disabled": "true",
        "aria-dropeffect": "copy",
        "aria-errormessage": "generic-error",
        "aria-flowto": "generic-flow",
        "aria-grabbed": "undefined",
        "aria-haspopup": "menu",
        "aria-hidden": "undefined",
        "aria-invalid": "grammar",
        "aria-keyshortcuts": "generic-shortcuts",
        "aria-live": "polite",
        "aria-owns": "generic-owns",
        "aria-relevant": "additions removals text",
      });
      assertType<KebabCaseAria<"awesomegeneric generic">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "generic-controls",
        "aria-current": "location",
        "aria-describedby": "generic-description",
        "aria-details": "generic-details",
        "aria-disabled": "true",
        "aria-dropeffect": "copy",
        "aria-errormessage": "generic-error",
        "aria-flowto": "generic-flow",
        "aria-grabbed": "undefined",
        "aria-haspopup": "menu",
        "aria-hidden": "undefined",
        "aria-invalid": "grammar",
        "aria-keyshortcuts": "generic-shortcuts",
        "aria-live": "polite",
        "aria-owns": "generic-owns",
        "aria-relevant": "additions removals text",
      });
    });
    it("should not allow label, labelledBy and roleDescription attributes", () => {
      assertType<KebabCaseAria<"generic">>({
        // @ts-expect-error - should not allow label attribute
        "aria-label": "generic label",
      });
      assertType<KebabCaseAria<"generic">>({
        // @ts-expect-error - should not allow labelledby attribute
        "aria-labelledby": "generic label",
      });
      assertType<KebabCaseAria<"generic">>({
        // @ts-expect-error - should not allow roleDescription attribute
        "aria-roledescription": "generic role description",
      });
    });
    it("should not allow invalid generic role attributes", () => {
      assertType<KebabCaseAria<"generic">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "generic-controls",
        // @ts-expect-error - should not allow invalid attributes
        "aria-rowcount": 1,
      });
      assertType<KebabCaseAria<"awesomegeneric generic">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "generic-controls",
        // @ts-expect-error - should not allow invalid attributes
        "aria-rowcount": 1,
      });
    });
  });

  describe("grid role", () => {
    it("should allow valid grid role attributes", () => {
      assertType<KebabCaseAria<"grid">>({
        "aria-activedescendant": "grid-active-descendant",
        "aria-atomic": true,
        "aria-busy": false,
        "aria-colcount": 3,
        "aria-controls": "grid-controls",
        "aria-current": "location",
        "aria-describedby": "grid-description",
        "aria-details": "grid-details",
        "aria-disabled": "true",
        "aria-dropeffect": "copy",
        "aria-errormessage": "grid-error",
        "aria-flowto": "grid-flow",
        "aria-grabbed": "undefined",
        "aria-haspopup": "menu",
        "aria-hidden": "undefined",
        "aria-invalid": "grammar",
        "aria-keyshortcuts": "grid-shortcuts",
        "aria-label": "grid message",
        "aria-labelledby": "grid-label",
        "aria-live": "polite",
        "aria-multiselectable": true,
        "aria-owns": "grid-owns",
        "aria-readonly": true,
        "aria-relevant": "additions removals text",
        "aria-roledescription": "grid role description",
        "aria-rowcount": 2,
      });
      assertType<KebabCaseAria<"awesomegrid grid">>({
        "aria-activedescendant": "grid-active-descendant",
        "aria-atomic": true,
        "aria-busy": false,
        "aria-colcount": 3,
        "aria-controls": "grid-controls",
        "aria-current": "location",
        "aria-describedby": "grid-description",
        "aria-details": "grid-details",
        "aria-disabled": "true",
        "aria-dropeffect": "copy",
        "aria-errormessage": "grid-error",
        "aria-flowto": "grid-flow",
        "aria-grabbed": "undefined",
        "aria-haspopup": "menu",
        "aria-hidden": "undefined",
        "aria-invalid": "grammar",
        "aria-keyshortcuts": "grid-shortcuts",
        "aria-label": "grid message",
        "aria-labelledby": "grid-label",
        "aria-live": "polite",
        "aria-multiselectable": true,
        "aria-owns": "grid-owns",
        "aria-relevant": "additions removals text",
        "aria-readonly": true,
        "aria-roledescription": "grid role description",
        "aria-rowcount": 2,
      });
    });
    it("should not allow invalid grid role attributes", () => {
      assertType<KebabCaseAria<"grid">>({
        "aria-activedescendant": "grid-active-descendant",
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "grid-controls",
        // @ts-expect-error - should not allow invalid attributes
        "aria-rowindex": 1,
      });
      assertType<KebabCaseAria<"awesomegrid grid">>({
        "aria-activedescendant": "grid-active-descendant",
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "grid-controls",
        // @ts-expect-error - should not allow invalid attributes
        "aria-rowspan": 1,
      });
    });
  });

  describe("gridcell role", () => {
    it("should allow valid gridcell role attributes", () => {
      assertType<KebabCaseAria<"gridcell">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-colindex": 1,
        "aria-colspan": 2,
        "aria-controls": "gridcell-controls",
        "aria-current": "location",
        "aria-describedby": "gridcell-description",
        "aria-details": "gridcell-details",
        "aria-disabled": "true",
        "aria-dropeffect": "copy",
        "aria-errormessage": "gridcell-error",
        "aria-expanded": "undefined",
        "aria-flowto": "gridcell-flow",
        "aria-grabbed": "undefined",
        "aria-haspopup": "menu",
        "aria-hidden": "undefined",
        "aria-invalid": "grammar",
        "aria-keyshortcuts": "gridcell-shortcuts",
        "aria-label": "grid cell message",
        "aria-labelledby": "gridcell-label",
        "aria-live": "polite",
        "aria-owns": "gridcell-owns",
        "aria-readonly": true,
        "aria-required": true,
        "aria-relevant": "additions removals text",
        "aria-roledescription": "grid cell role description",
        "aria-selected": true,
      });
      assertType<KebabCaseAria<"awesomegridcell gridcell">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-colindex": 1,
        "aria-colspan": 2,
        "aria-controls": "gridcell-controls",
        "aria-current": "location",
        "aria-describedby": "gridcell-description",
        "aria-details": "gridcell-details",
        "aria-disabled": "true",
        "aria-dropeffect": "copy",
        "aria-errormessage": "gridcell-error",
        "aria-expanded": "undefined",
        "aria-flowto": "gridcell-flow",
        "aria-grabbed": "undefined",
        "aria-haspopup": "menu",
        "aria-hidden": "undefined",
        "aria-invalid": "grammar",
        "aria-keyshortcuts": "gridcell-shortcuts",
        "aria-label": "grid cell message",
        "aria-labelledby": "gridcell-label",
        "aria-live": "polite",
        "aria-owns": "gridcell-owns",
        "aria-readonly": true,
        "aria-required": true,
        "aria-relevant": "additions removals text",
        "aria-roledescription": "grid cell role description",
        "aria-selected": true,
      });
    });
    it("should not allow invalid gridcell role attributes", () => {
      assertType<KebabCaseAria<"gridcell">>({
        // @ts-expect-error - should not allow invalid attributes
        "aria-activedescendant": "gridcell-active-descendant",
      });
      assertType<KebabCaseAria<"awesomegridcell gridcell">>({
        // @ts-expect-error - should not allow invalid attributes
        "aria-activedescendant": "gridcell-active-descendant",
      });
    });
  });

  describe("group role", () => {
    it("should allow valid group role attributes", () => {
      assertType<KebabCaseAria<"group">>({
        "aria-activedescendant": "group-active-descendant",
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "group-controls",
        "aria-current": "location",
        "aria-describedby": "group-description",
        "aria-details": "group-details",
        "aria-disabled": "true",
        "aria-dropeffect": "copy",
        "aria-errormessage": "group-error",
        "aria-flowto": "group-flow",
        "aria-grabbed": "undefined",
        "aria-haspopup": "menu",
        "aria-hidden": "undefined",
        "aria-invalid": "grammar",
        "aria-keyshortcuts": "group-shortcuts",
        "aria-label": "group message",
        "aria-labelledby": "group-label",
        "aria-live": "polite",
        "aria-owns": "group-owns",
        "aria-relevant": "additions removals text",
        "aria-roledescription": "group role description",
      });
      assertType<KebabCaseAria<"awesomegroup group">>({
        "aria-activedescendant": "group-active-descendant",
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "group-controls",
        "aria-current": "location",
        "aria-describedby": "group-description",
        "aria-details": "group-details",
        "aria-disabled": "true",
        "aria-dropeffect": "copy",
        "aria-errormessage": "group-error",
        "aria-flowto": "group-flow",
        "aria-grabbed": "undefined",
        "aria-haspopup": "menu",
        "aria-hidden": "undefined",
        "aria-invalid": "grammar",
        "aria-keyshortcuts": "group-shortcuts",
        "aria-label": "group message",
        "aria-labelledby": "group-label",
        "aria-live": "polite",
        "aria-owns": "group-owns",
        "aria-relevant": "additions removals text",
        "aria-roledescription": "group role description",
      });
    });
    it("should not allow invalid group role attributes", () => {
      assertType<KebabCaseAria<"group">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "group-controls",
        // @ts-expect-error - should not allow invalid attributes
        "aria-rowcount": 1,
      });
      assertType<KebabCaseAria<"awesomegroup group">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "group-controls",
        // @ts-expect-error - should not allow invalid attributes
        "aria-rowcount": 1,
      });
    });
  });

  describe("heading role", () => {
    it("should allow valid heading role attributes", () => {
      assertType<KebabCaseAria<"heading">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "heading-controls",
        "aria-current": "location",
        "aria-describedby": "heading-description",
        "aria-details": "heading-details",
        "aria-disabled": "true",
        "aria-dropeffect": "copy",
        "aria-errormessage": "heading-error",
        "aria-flowto": "heading-flow",
        "aria-grabbed": "undefined",
        "aria-haspopup": "menu",
        "aria-hidden": "undefined",
        "aria-invalid": "grammar",
        "aria-keyshortcuts": "heading-shortcuts",
        "aria-label": "heading message",
        "aria-labelledby": "heading-label",
        "aria-live": "polite",
        "aria-owns": "heading-owns",
        "aria-relevant": "additions removals text",
        "aria-roledescription": "heading role description",
      });
      assertType<KebabCaseAria<"awesomeheading heading">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "heading-controls",
        "aria-current": "location",
        "aria-describedby": "heading-description",
        "aria-details": "heading-details",
        "aria-disabled": "true",
        "aria-dropeffect": "copy",
        "aria-errormessage": "heading-error",
        "aria-flowto": "heading-flow",
        "aria-grabbed": "undefined",
        "aria-haspopup": "menu",
        "aria-hidden": "undefined",
        "aria-invalid": "grammar",
        "aria-keyshortcuts": "heading-shortcuts",
        "aria-label": "heading message",
        "aria-labelledby": "heading-label",
        "aria-live": "polite",
        "aria-owns": "heading-owns",
        "aria-relevant": "additions removals text",
        "aria-roledescription": "heading role description",
      });
    });
    it("should not allow invalid heading role attributes", () => {
      assertType<KebabCaseAria<"heading">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "heading-controls",
        // @ts-expect-error - should not allow invalid attributes
        "aria-rowcount": 1,
      });
      assertType<KebabCaseAria<"awesomeheading heading">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "heading-controls",
        // @ts-expect-error - should not allow invalid attributes
        "aria-rowcount": 1,
      });
    });
  });

  describe("img role", () => {
    it("should allow valid img role attributes", () => {
      assertType<KebabCaseAria<"img">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "img-controls",
        "aria-current": "location",
        "aria-describedby": "img-description",
        "aria-details": "img-details",
        "aria-disabled": "true",
        "aria-dropeffect": "copy",
        "aria-errormessage": "img-error",
        "aria-flowto": "img-flow",
        "aria-grabbed": "undefined",
        "aria-haspopup": "menu",
        "aria-hidden": "undefined",
        "aria-invalid": "grammar",
        "aria-keyshortcuts": "img-shortcuts",
        "aria-label": "image message",
        "aria-labelledby": "img-label",
        "aria-live": "polite",
        "aria-owns": "img-owns",
        "aria-relevant": "additions removals text",
        "aria-roledescription": "image role description",
      });
      assertType<KebabCaseAria<"awesomeimg img">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "img-controls",
        "aria-current": "location",
        "aria-describedby": "img-description",
        "aria-details": "img-details",
        "aria-disabled": "true",
        "aria-dropeffect": "copy",
        "aria-errormessage": "img-error",
        "aria-flowto": "img-flow",
        "aria-grabbed": "undefined",
        "aria-haspopup": "menu",
        "aria-hidden": "undefined",
        "aria-invalid": "grammar",
        "aria-keyshortcuts": "img-shortcuts",
        "aria-label": "image message",
        "aria-labelledby": "img-label",
        "aria-live": "polite",
        "aria-owns": "img-owns",
        "aria-relevant": "additions removals text",
        "aria-roledescription": "image role description",
      });
    });
    it("should not allow invalid img role attributes", () => {
      assertType<KebabCaseAria<"img">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "img-controls",
        // @ts-expect-error - should not allow invalid attributes
        "aria-rowcount": 1,
      });
      assertType<KebabCaseAria<"awesomeimg img">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "img-controls",
        // @ts-expect-error - should not allow invalid attributes
        "aria-rowcount": 1,
      });
    });
  });
  describe("insertion role", () => {
    it("should allow valid insertion role attributes", () => {
      assertType<KebabCaseAria<"insertion">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "insertion-controls",
        "aria-current": "location",
        "aria-describedby": "insertion-description",
        "aria-details": "insertion-details",
        "aria-disabled": "true",
        "aria-dropeffect": "copy",
        "aria-errormessage": "insertion-error",
        "aria-flowto": "insertion-flow",
        "aria-grabbed": "undefined",
        "aria-haspopup": "menu",
        "aria-hidden": "undefined",
        "aria-invalid": "grammar",
        "aria-keyshortcuts": "insertion-shortcuts",
        "aria-live": "polite",
        "aria-owns": "insertion-owns",
        "aria-relevant": "additions removals text",
        "aria-roledescription": "insertion role description",
      });
      assertType<KebabCaseAria<"awesomeinsertion insertion">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "insertion-controls",
        "aria-current": "location",
        "aria-describedby": "insertion-description",
        "aria-details": "insertion-details",
        "aria-disabled": "true",
        "aria-dropeffect": "copy",
        "aria-errormessage": "insertion-error",
        "aria-flowto": "insertion-flow",
        "aria-grabbed": "undefined",
        "aria-haspopup": "menu",
        "aria-hidden": "undefined",
        "aria-invalid": "grammar",
        "aria-keyshortcuts": "insertion-shortcuts",
        "aria-live": "polite",
        "aria-owns": "insertion-owns",
        "aria-relevant": "additions removals text",
        "aria-roledescription": "insertion role description",
      });
    });
    it("should not allow label and labelledBy attributes", () => {
      assertType<KebabCaseAria<"insertion">>({
        // @ts-expect-error - should not allow label attribute
        "aria-label": "insertion label",
      });
      assertType<KebabCaseAria<"insertion">>({
        // @ts-expect-error - should not allow labelledby attribute
        "aria-labelledby": "insertion label",
      });
    });
  });
  describe("link role", () => {
    it("should allow valid link role attributes", () => {
      assertType<KebabCaseAria<"link">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "link-controls",
        "aria-current": "location",
        "aria-describedby": "link-description",
        "aria-details": "link-details",
        "aria-disabled": "true",
        "aria-dropeffect": "copy",
        "aria-errormessage": "link-error",
        "aria-expanded": "undefined",
        "aria-flowto": "link-flow",
        "aria-grabbed": "undefined",
        "aria-haspopup": "menu",
        "aria-hidden": "undefined",
        "aria-invalid": "grammar",
        "aria-keyshortcuts": "link-shortcuts",
        "aria-label": "link message",
        "aria-labelledby": "link-label",
        "aria-live": "polite",
        "aria-owns": "link-owns",
        "aria-relevant": "additions removals text",
        "aria-roledescription": "link role description",
      });
      assertType<KebabCaseAria<"awesomelink link">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "link-controls",
        "aria-current": "location",
        "aria-describedby": "link-description",
        "aria-details": "link-details",
        "aria-disabled": "true",
        "aria-dropeffect": "copy",
        "aria-errormessage": "link-error",
        "aria-expanded": "undefined",
        "aria-flowto": "link-flow",
        "aria-grabbed": "undefined",
        "aria-haspopup": "menu",
        "aria-hidden": "undefined",
        "aria-invalid": "grammar",
        "aria-keyshortcuts": "link-shortcuts",
        "aria-label": "link message",
        "aria-labelledby": "link-label",
        "aria-live": "polite",
        "aria-owns": "link-owns",
        "aria-relevant": "additions removals text",
        "aria-roledescription": "link role description",
      });
    });
    it("should not allow invalid link role attributes", () => {
      assertType<KebabCaseAria<"link">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "link-controls",
        // @ts-expect-error - should not allow invalid attributes
        "aria-rowcount": 1,
      });
      assertType<KebabCaseAria<"awesomelink link">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "link-controls",
        // @ts-expect-error - should not allow invalid attributes
        "aria-rowcount": 1,
      });
    });
  });

  describe("list role", () => {
    it("should allow valid list role attributes", () => {
      assertType<KebabCaseAria<"list">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "list-controls",
        "aria-current": "location",
        "aria-describedby": "list-description",
        "aria-details": "list-details",
        "aria-disabled": "true",
        "aria-dropeffect": "copy",
        "aria-errormessage": "list-error",
        "aria-flowto": "list-flow",
        "aria-grabbed": "undefined",
        "aria-haspopup": "menu",
        "aria-hidden": "undefined",
        "aria-invalid": "grammar",
        "aria-keyshortcuts": "list-shortcuts",
        "aria-label": "list message",
        "aria-labelledby": "list-label",
        "aria-live": "polite",
        "aria-owns": "list-owns",
        "aria-relevant": "additions removals text",
        "aria-roledescription": "list role description",
      });
      assertType<KebabCaseAria<"awesomelist list">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "list-controls",
        "aria-current": "location",
        "aria-describedby": "list-description",
        "aria-details": "list-details",
        "aria-disabled": "true",
        "aria-dropeffect": "copy",
        "aria-errormessage": "list-error",
        "aria-flowto": "list-flow",
        "aria-grabbed": "undefined",
        "aria-haspopup": "menu",
        "aria-hidden": "undefined",
        "aria-invalid": "grammar",
        "aria-keyshortcuts": "list-shortcuts",
        "aria-label": "list message",
        "aria-labelledby": "list-label",
        "aria-live": "polite",
        "aria-owns": "list-owns",
        "aria-relevant": "additions removals text",
        "aria-roledescription": "list role description",
      });
    });
    it("should not allow invalid list role attributes", () => {
      assertType<KebabCaseAria<"list">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "list-controls",
        // @ts-expect-error - should not allow invalid attributes
        "aria-rowcount": 1,
      });
      assertType<KebabCaseAria<"awesomelist list">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "list-controls",
        // @ts-expect-error - should not allow invalid attributes
        "aria-rowcount": 1,
      });
    });
  });

  describe("listbox role", () => {
    it("should allow valid listbox role attributes", () => {
      assertType<KebabCaseAria<"listbox">>({
        "aria-activedescendant": "listbox-active-descendant",
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "listbox-controls",
        "aria-current": "location",
        "aria-describedby": "listbox-description",
        "aria-details": "listbox-details",
        "aria-disabled": "true",
        "aria-dropeffect": "copy",
        "aria-errormessage": "listbox-error",
        "aria-expanded": "undefined",
        "aria-flowto": "listbox-flow",
        "aria-grabbed": "undefined",
        "aria-haspopup": "menu",
        "aria-hidden": "undefined",
        "aria-invalid": "grammar",
        "aria-keyshortcuts": "listbox-shortcuts",
        "aria-label": "listbox message",
        "aria-labelledby": "listbox-label",
        "aria-live": "polite",
        "aria-multiselectable": true,
        "aria-owns": "listbox-owns",
        "aria-readonly": true,
        "aria-relevant": "additions removals text",
        "aria-roledescription": "listbox role description",
      });
      assertType<KebabCaseAria<"awesomelistbox listbox">>({
        "aria-activedescendant": "listbox-active-descendant",
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "listbox-controls",
        "aria-current": "location",
        "aria-describedby": "listbox-description",
        "aria-details": "listbox-details",
        "aria-disabled": "true",
        "aria-dropeffect": "copy",
        "aria-errormessage": "listbox-error",
        "aria-expanded": "undefined",
        "aria-flowto": "listbox-flow",
        "aria-grabbed": "undefined",
        "aria-haspopup": "menu",
        "aria-hidden": "undefined",
        "aria-invalid": "grammar",
        "aria-keyshortcuts": "listbox-shortcuts",
        "aria-label": "listbox message",
        "aria-labelledby": "listbox-label",
        "aria-live": "polite",
        "aria-multiselectable": true,
        "aria-owns": "listbox-owns",
        "aria-readonly": true,
        "aria-relevant": "additions removals text",
        "aria-roledescription": "listbox role description",
      });
    });
    it("should not allow invalid listbox role attributes", () => {
      assertType<KebabCaseAria<"listbox">>({
        "aria-activedescendant": "listbox-active-descendant",
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "listbox-controls",
        // @ts-expect-error - should not allow invalid attributes
        "aria-rowindex": 1,
      });
      assertType<KebabCaseAria<"awesomelistbox listbox">>({
        "aria-activedescendant": "listbox-active-descendant",
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "listbox-controls",
        // @ts-expect-error - should not allow invalid attributes
        "aria-rowspan": 1,
      });
    });
  });
  describe("listitem role", () => {
    it("should allow valid listitem role attributes", () => {
      assertType<KebabCaseAria<"listitem">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "listitem-controls",
        "aria-current": "location",
        "aria-describedby": "listitem-description",
        "aria-details": "listitem-details",
        "aria-disabled": "true",
        "aria-dropeffect": "copy",
        "aria-errormessage": "listitem-error",
        "aria-flowto": "listitem-flow",
        "aria-grabbed": "undefined",
        "aria-haspopup": "menu",
        "aria-hidden": "undefined",
        "aria-invalid": "grammar",
        "aria-keyshortcuts": "listitem-shortcuts",
        "aria-label": "list item message",
        "aria-labelledby": "listitem-label",
        "aria-level": 1,
        "aria-live": "polite",
        "aria-owns": "listitem-owns",
        "aria-posinset": 1,
        "aria-relevant": "additions removals text",
        "aria-roledescription": "list item role description",
        "aria-setsize": 3,
      });
      assertType<KebabCaseAria<"awesomelistitem listitem">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "listitem-controls",
        "aria-current": "location",
        "aria-describedby": "listitem-description",
        "aria-details": "listitem-details",
        "aria-disabled": "true",
        "aria-dropeffect": "copy",
        "aria-errormessage": "listitem-error",
        "aria-flowto": "listitem-flow",
        "aria-grabbed": "undefined",
        "aria-haspopup": "menu",
        "aria-hidden": "undefined",
        "aria-invalid": "grammar",
        "aria-keyshortcuts": "listitem-shortcuts",
        "aria-label": "list item message",
        "aria-labelledby": "listitem-label",
        "aria-level": 1,
        "aria-live": "polite",
        "aria-owns": "listitem-owns",
        "aria-posinset": 1,
        "aria-relevant": "additions removals text",
        "aria-roledescription": "list item role description",
        "aria-setsize": 3,
      });
    });
    it("should not allow invalid listitem role attributes", () => {
      assertType<KebabCaseAria<"listitem">>({
        // @ts-expect-error - should not allow invalid attributes
        "aria-activedescendant": "listitem-active-descendant",
      });
      assertType<KebabCaseAria<"awesomelistitem listitem">>({
        // @ts-expect-error - should not allow
        "aria-activedescendant": "listitem-active-descendant",
      });
    });
  });
  describe("log role", () => {
    it("should allow valid log role attributes", () => {
      assertType<KebabCaseAria<"log">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "log-controls",
        "aria-current": "location",
        "aria-describedby": "log-description",
        "aria-details": "log-details",
        "aria-disabled": "true",
        "aria-dropeffect": "copy",
        "aria-errormessage": "log-error",
        "aria-flowto": "log-flow",
        "aria-grabbed": "undefined",
        "aria-haspopup": "menu",
        "aria-hidden": "undefined",
        "aria-invalid": "grammar",
        "aria-keyshortcuts": "log-shortcuts",
        "aria-label": "log message",
        "aria-labelledby": "log-label",
        "aria-live": "polite",
        "aria-owns": "log-owns",
        "aria-relevant": "additions removals text",
        "aria-roledescription": "log role description",
      });
      assertType<KebabCaseAria<"awesomelog log">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "log-controls",
        "aria-current": "location",
        "aria-describedby": "log-description",
        "aria-details": "log-details",
        "aria-disabled": "true",
        "aria-dropeffect": "copy",
        "aria-errormessage": "log-error",
        "aria-flowto": "log-flow",
        "aria-grabbed": "undefined",
        "aria-haspopup": "menu",
        "aria-hidden": "undefined",
        "aria-invalid": "grammar",
        "aria-keyshortcuts": "log-shortcuts",
        "aria-label": "log message",
        "aria-labelledby": "log-label",
        "aria-live": "polite",
        "aria-owns": "log-owns",
        "aria-relevant": "additions removals text",
        "aria-roledescription": "log role description",
      });
    });
    it("should not allow invalid log role attributes", () => {
      assertType<KebabCaseAria<"log">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "log-controls",
        // @ts-expect-error - should not allow invalid attributes
        "aria-rowcount": 1,
      });
      assertType<KebabCaseAria<"awesomelog log">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "log-controls",
        // @ts-expect-error - should not allow invalid attributes
        "aria-rowcount": 1,
      });
    });
  });
  describe("main role", () => {
    it("should allow valid main role attributes", () => {
      assertType<KebabCaseAria<"main">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "main-controls",
        "aria-current": "location",
        "aria-describedby": "main-description",
        "aria-details": "main-details",
        "aria-disabled": "true",
        "aria-dropeffect": "copy",
        "aria-errormessage": "main-error",
        "aria-flowto": "main-flow",
        "aria-grabbed": "undefined",
        "aria-haspopup": "menu",
        "aria-hidden": "undefined",
        "aria-invalid": "grammar",
        "aria-keyshortcuts": "main-shortcuts",
        "aria-label": "main message",
        "aria-labelledby": "main-label",
        "aria-live": "polite",
        "aria-owns": "main-owns",
        "aria-relevant": "additions removals text",
        "aria-roledescription": "main role description",
      });
      assertType<KebabCaseAria<"awesomemain main">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "main-controls",
        "aria-current": "location",
        "aria-describedby": "main-description",
        "aria-details": "main-details",
        "aria-disabled": "true",
        "aria-dropeffect": "copy",
        "aria-errormessage": "main-error",
        "aria-flowto": "main-flow",
        "aria-grabbed": "undefined",
        "aria-haspopup": "menu",
        "aria-hidden": "undefined",
        "aria-invalid": "grammar",
        "aria-keyshortcuts": "main-shortcuts",
        "aria-label": "main message",
        "aria-labelledby": "main-label",
        "aria-live": "polite",
        "aria-owns": "main-owns",
        "aria-relevant": "additions removals text",
        "aria-roledescription": "main role description",
      });
    });
    it("should not allow invalid main role attributes", () => {
      assertType<KebabCaseAria<"main">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "main-controls",
        // @ts-expect-error - should not allow invalid attributes
        "aria-rowcount": 1,
      });
      assertType<KebabCaseAria<"awesomemain main">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "main-controls",
        // @ts-expect-error - should not allow invalid attributes
        "aria-rowcount": 1,
      });
    });
  });
  describe("marquee role", () => {
    it("should allow valid marquee role attributes", () => {
      assertType<KebabCaseAria<"marquee">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "marquee-controls",
        "aria-current": "location",
        "aria-describedby": "marquee-description",
        "aria-details": "marquee-details",
        "aria-disabled": "true",
        "aria-dropeffect": "copy",
        "aria-errormessage": "marquee-error",
        "aria-flowto": "marquee-flow",
        "aria-grabbed": "undefined",
        "aria-haspopup": "menu",
        "aria-hidden": "undefined",
        "aria-invalid": "grammar",
        "aria-keyshortcuts": "marquee-shortcuts",
        "aria-label": "marquee message",
        "aria-labelledby": "marquee-label",
        "aria-live": "polite",
        "aria-owns": "marquee-owns",
        "aria-relevant": "additions removals text",
        "aria-roledescription": "marquee role description",
      });
      assertType<KebabCaseAria<"awesomemarquee marquee">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "marquee-controls",
        "aria-current": "location",
        "aria-describedby": "marquee-description",
        "aria-details": "marquee-details",
        "aria-disabled": "true",
        "aria-dropeffect": "copy",
        "aria-errormessage": "marquee-error",
        "aria-flowto": "marquee-flow",
        "aria-grabbed": "undefined",
        "aria-haspopup": "menu",
        "aria-hidden": "undefined",
        "aria-invalid": "grammar",
        "aria-keyshortcuts": "marquee-shortcuts",
        "aria-label": "marquee message",
        "aria-labelledby": "marquee-label",
        "aria-live": "polite",
        "aria-owns": "marquee-owns",
        "aria-relevant": "additions removals text",
        "aria-roledescription": "marquee role description",
      });
    });
    it("should not allow invalid marquee role attributes", () => {
      assertType<KebabCaseAria<"marquee">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "marquee-controls",
        // @ts-expect-error - should not allow invalid attributes
        "aria-rowcount": 1,
      });
      assertType<KebabCaseAria<"awesomemarquee marquee">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "marquee-controls",
        // @ts-expect-error - should not allow invalid attributes
        "aria-rowcount": 1,
      });
    });
  });
  describe("math role", () => {
    it("should allow valid math role attributes", () => {
      assertType<KebabCaseAria<"math">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "math-controls",
        "aria-current": "location",
        "aria-describedby": "math-description",
        "aria-details": "math-details",
        "aria-disabled": "true",
        "aria-dropeffect": "copy",
        "aria-errormessage": "math-error",
        "aria-flowto": "math-flow",
        "aria-grabbed": "undefined",
        "aria-haspopup": "menu",
        "aria-hidden": "undefined",
        "aria-invalid": "grammar",
        "aria-keyshortcuts": "math-shortcuts",
        "aria-label": "math message",
        "aria-labelledby": "math-label",
        "aria-live": "polite",
        "aria-owns": "math-owns",
        "aria-relevant": "additions removals text",
        "aria-roledescription": "math role description",
      });
      assertType<KebabCaseAria<"awesomemath math">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "math-controls",
        "aria-current": "location",
        "aria-describedby": "math-description",
        "aria-details": "math-details",
        "aria-disabled": "true",
        "aria-dropeffect": "copy",
        "aria-errormessage": "math-error",
        "aria-flowto": "math-flow",
        "aria-grabbed": "undefined",
        "aria-haspopup": "menu",
        "aria-hidden": "undefined",
        "aria-invalid": "grammar",
        "aria-keyshortcuts": "math-shortcuts",
        "aria-label": "math message",
        "aria-labelledby": "math-label",
        "aria-live": "polite",
        "aria-owns": "math-owns",
        "aria-relevant": "additions removals text",
        "aria-roledescription": "math role description",
      });
    });
    it("should not allow invalid math role attributes", () => {
      assertType<KebabCaseAria<"math">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "math-controls",
        // @ts-expect-error - should not allow invalid attributes
        "aria-rowcount": 1,
      });
      assertType<KebabCaseAria<"awesomemath math">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "math-controls",
        // @ts-expect-error - should not allow invalid attributes
        "aria-rowcount": 1,
      });
    });
  });

  describe("meter role", () => {
    it("should allow valid meter role attributes", () => {
      assertType<KebabCaseAria<"meter">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "meter-controls",
        "aria-current": "location",
        "aria-describedby": "meter-description",
        "aria-details": "meter-details",
        "aria-disabled": "true",
        "aria-dropeffect": "copy",
        "aria-errormessage": "meter-error",
        "aria-flowto": "meter-flow",
        "aria-grabbed": "undefined",
        "aria-haspopup": "menu",
        "aria-hidden": "undefined",
        "aria-invalid": "grammar",
        "aria-keyshortcuts": "meter-shortcuts",
        "aria-label": "meter message",
        "aria-labelledby": "meter-label",
        "aria-live": "polite",
        "aria-owns": "meter-owns",
        "aria-relevant": "additions removals text",
        "aria-roledescription": "meter role description",
        "aria-valuemax": 100,
        "aria-valuemin": 0,
        "aria-valuenow": 50,
      });
      assertType<KebabCaseAria<"awesomemeter meter">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "meter-controls",
        "aria-current": "location",
        "aria-describedby": "meter-description",
        "aria-details": "meter-details",
        "aria-disabled": "true",
        "aria-dropeffect": "copy",
        "aria-errormessage": "meter-error",
        "aria-flowto": "meter-flow",
        "aria-grabbed": "undefined",
        "aria-haspopup": "menu",
        "aria-hidden": "undefined",
        "aria-invalid": "grammar",
        "aria-keyshortcuts": "meter-shortcuts",
        "aria-label": "meter message",
        "aria-labelledby": "meter-label",
        "aria-live": "polite",
        "aria-owns": "meter-owns",
        "aria-relevant": "additions removals text",
        "aria-roledescription": "meter role description",
        "aria-valuemax": 100,
        "aria-valuemin": 0,
        "aria-valuenow": 50,
      });
    });
    it("should not allow invalid meter role attributes", () => {
      assertType<KebabCaseAria<"meter">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "meter-controls",
        // @ts-expect-error - should not allow invalid attributes
        "aria-rowcount": 1,
      });
      assertType<KebabCaseAria<"awesomemeter meter">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "meter-controls",
        // @ts-expect-error - should not allow invalid attributes
        "aria-rowcount": 1,
      });
    });
  });

  describe("menu role", () => {
    it("should allow valid menu role attributes", () => {
      assertType<KebabCaseAria<"menu">>({
        "aria-activedescendant": "menu-active-descendant",
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "menu-controls",
        "aria-current": "location",
        "aria-describedby": "menu-description",
        "aria-details": "menu-details",
        "aria-disabled": "true",
        "aria-dropeffect": "copy",
        "aria-errormessage": "menu-error",
        "aria-flowto": "menu-flow",
        "aria-grabbed": "undefined",
        "aria-haspopup": "menu",
        "aria-hidden": "undefined",
        "aria-invalid": "grammar",
        "aria-keyshortcuts": "menu-shortcuts",
        "aria-label": "menu message",
        "aria-labelledby": "menu-label",
        "aria-live": "polite",
        "aria-owns": "menu-owns",
        "aria-orientation": "horizontal",
        "aria-relevant": "additions removals text",
        "aria-roledescription": "menu role description",
      });
      assertType<KebabCaseAria<"awesomemenu menu">>({
        "aria-activedescendant": "menu-active-descendant",
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "menu-controls",
        "aria-current": "location",
        "aria-describedby": "menu-description",
        "aria-details": "menu-details",
        "aria-disabled": "true",
        "aria-dropeffect": "copy",
        "aria-errormessage": "menu-error",
        "aria-flowto": "menu-flow",
        "aria-grabbed": "undefined",
        "aria-haspopup": "menu",
        "aria-hidden": "undefined",
        "aria-invalid": "grammar",
        "aria-keyshortcuts": "menu-shortcuts",
        "aria-label": "menu message",
        "aria-labelledby": "menu-label",
        "aria-live": "polite",
        "aria-owns": "menu-owns",
        "aria-orientation": "horizontal",
        "aria-relevant": "additions removals text",
        "aria-roledescription": "menu role description",
      });
    });
    it("should not allow invalid menu role attributes", () => {
      assertType<KebabCaseAria<"menu">>({
        "aria-activedescendant": "menu-active-descendant",
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "menu-controls",
        // @ts-expect-error - should not allow invalid attributes
        "aria-rowindex": 1,
      });
      assertType<KebabCaseAria<"awesomemenu menu">>({
        "aria-activedescendant": "menu-active-descendant",
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "menu-controls",
        // @ts-expect-error - should not allow invalid attributes
        "aria-rowspan": 1,
      });
    });
  });
  describe("menubar role", () => {
    it("should allow valid menubar role attributes", () => {
      assertType<KebabCaseAria<"menubar">>({
        "aria-activedescendant": "menubar-active-descendant",
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "menubar-controls",
        "aria-current": "location",
        "aria-describedby": "menubar-description",
        "aria-details": "menubar-details",
        "aria-disabled": "true",
        "aria-dropeffect": "copy",
        "aria-errormessage": "menubar-error",
        "aria-flowto": "menubar-flow",
        "aria-grabbed": "undefined",
        "aria-haspopup": "menu",
        "aria-hidden": "undefined",
        "aria-invalid": "grammar",
        "aria-keyshortcuts": "menubar-shortcuts",
        "aria-label": "menubar message",
        "aria-labelledby": "menubar-label",
        "aria-live": "polite",
        "aria-owns": "menubar-owns",
        "aria-orientation": "horizontal",
        "aria-relevant": "additions removals text",
        "aria-roledescription": "menubar role description",
      });
      assertType<KebabCaseAria<"awesomemenubar menubar">>({
        "aria-activedescendant": "menubar-active-descendant",
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "menubar-controls",
        "aria-current": "location",
        "aria-describedby": "menubar-description",
        "aria-details": "menubar-details",
        "aria-disabled": "true",
        "aria-dropeffect": "copy",
        "aria-errormessage": "menubar-error",
        "aria-flowto": "menubar-flow",
        "aria-grabbed": "undefined",
        "aria-haspopup": "menu",
        "aria-hidden": "undefined",
        "aria-invalid": "grammar",
        "aria-keyshortcuts": "menubar-shortcuts",
        "aria-label": "menubar message",
        "aria-labelledby": "menubar-label",
        "aria-live": "polite",
        "aria-owns": "menubar-owns",
        "aria-orientation": "horizontal",
        "aria-relevant": "additions removals text",
        "aria-roledescription": "menubar role description",
      });
    });
    it("should not allow invalid menubar role attributes", () => {
      assertType<KebabCaseAria<"menubar">>({
        "aria-activedescendant": "menubar-active-descendant",
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "menubar-controls",
        // @ts-expect-error - should not allow invalid attributes
        "aria-rowindex": 1,
      });
      assertType<KebabCaseAria<"awesomemenubar menubar">>({
        "aria-activedescendant": "menubar-active-descendant",
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "menubar-controls",
        // @ts-expect-error - should not allow invalid attributes
        "aria-rowspan": 1,
      });
    });
  });
  describe("menuitem role", () => {
    it("should allow valid menuitem role attributes", () => {
      assertType<KebabCaseAria<"menuitem">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "menuitem-controls",
        "aria-current": "location",
        "aria-describedby": "menuitem-description",
        "aria-details": "menuitem-details",
        "aria-disabled": "true",
        "aria-dropeffect": "copy",
        "aria-errormessage": "menuitem-error",
        "aria-expanded": "undefined",
        "aria-flowto": "menuitem-flow",
        "aria-grabbed": "undefined",
        "aria-haspopup": "menu",
        "aria-hidden": "undefined",
        "aria-invalid": "grammar",
        "aria-keyshortcuts": "menuitem-shortcuts",
        "aria-label": "menu item message",
        "aria-labelledby": "menuitem-label",
        "aria-live": "polite",
        "aria-owns": "menuitem-owns",
        "aria-posinset": 1,
        "aria-relevant": "additions removals text",
        "aria-roledescription": "menu item role description",
        "aria-setsize": 3,
      });
      assertType<KebabCaseAria<"awesomemenuitem menuitem">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "menuitem-controls",
        "aria-current": "location",
        "aria-describedby": "menuitem-description",
        "aria-details": "menuitem-details",
        "aria-disabled": "true",
        "aria-dropeffect": "copy",
        "aria-errormessage": "menuitem-error",
        "aria-expanded": "undefined",
        "aria-flowto": "menuitem-flow",
        "aria-grabbed": "undefined",
        "aria-haspopup": "menu",
        "aria-hidden": "undefined",
        "aria-invalid": "grammar",
        "aria-keyshortcuts": "menuitem-shortcuts",
        "aria-label": "menu item message",
        "aria-labelledby": "menuitem-label",
        "aria-live": "polite",
        "aria-owns": "menuitem-owns",
        "aria-posinset": 1,
        "aria-relevant": "additions removals text",
        "aria-roledescription": "menu item role description",
        "aria-setsize": 3,
      });
    });
    it("should not allow invalid menuitem role attributes", () => {
      assertType<KebabCaseAria<"menuitem">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "menuitem-controls",
      });
      assertType<KebabCaseAria<"awesomemenuitem menuitem">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "menuitem-controls",
      });
    });
  });

  describe("menuitemcheckbox role", () => {
    it("should allow valid menuitemcheckbox role attributes", () => {
      assertType<KebabCaseAria<"menuitemcheckbox">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-checked": true,
        "aria-controls": "menuitemcheckbox-controls",
        "aria-current": "location",
        "aria-describedby": "menuitemcheckbox-description",
        "aria-details": "menuitemcheckbox-details",
        "aria-disabled": "true",
        "aria-dropeffect": "copy",
        "aria-errormessage": "menuitemcheckbox-error",
        "aria-expanded": "undefined",
        "aria-flowto": "menuitemcheckbox-flow",
        "aria-grabbed": "undefined",
        "aria-haspopup": "menu",
        "aria-hidden": "undefined",
        "aria-invalid": "grammar",
        "aria-keyshortcuts": "menuitemcheckbox-shortcuts",
        "aria-label": "menu item checkbox message",
        "aria-labelledby": "menuitemcheckbox-label",
        "aria-live": "polite",
        "aria-owns": "menuitemcheckbox-owns",
        "aria-posinset": 1,
        "aria-relevant": "additions removals text",
        "aria-roledescription": "menu item checkbox role description",
        "aria-setsize": 3,
      });
      assertType<KebabCaseAria<"awesomemenuitemcheckbox menuitemcheckbox">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-checked": true,
        "aria-controls": "menuitemcheckbox-controls",
        "aria-current": "location",
        "aria-describedby": "menuitemcheckbox-description",
        "aria-details": "menuitemcheckbox-details",
        "aria-disabled": "true",
        "aria-dropeffect": "copy",
        "aria-errormessage": "menuitemcheckbox-error",
        "aria-expanded": "undefined",
        "aria-flowto": "menuitemcheckbox-flow",
        "aria-grabbed": "undefined",
        "aria-haspopup": "menu",
        "aria-hidden": "undefined",
        "aria-invalid": "grammar",
        "aria-keyshortcuts": "menuitemcheckbox-shortcuts",
        "aria-label": "menu item checkbox message",
        "aria-labelledby": "menuitemcheckbox-label",
        "aria-live": "polite",
        "aria-owns": "menuitemcheckbox-owns",
        "aria-posinset": 1,
        "aria-relevant": "additions removals text",
        "aria-roledescription": "menu item checkbox role description",
        "aria-setsize": 3,
      });
    });
    it("should not allow invalid menuitemcheckbox role attributes", () => {
      assertType<KebabCaseAria<"menuitemcheckbox">>({
        "aria-atomic": true,
        "aria-busy": false,
        // @ts-expect-error - should not allow invalid attributes
        "aria-rowcount": 1,
      });
      assertType<KebabCaseAria<"awesomemenuitemcheckbox menuitemcheckbox">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "menuitemcheckbox-controls",
        // @ts-expect-error - should not allow invalid attributes
        "aria-rowcount": 1,
      });
    });
  });

  describe("menuitemradio role", () => {
    it("should allow valid menuitemradio role attributes", () => {
      assertType<KebabCaseAria<"menuitemradio">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-checked": true,
        "aria-controls": "menuitemradio-controls",
        "aria-current": "location",
        "aria-describedby": "menuitemradio-description",
        "aria-details": "menuitemradio-details",
        "aria-disabled": "true",
        "aria-dropeffect": "copy",
        "aria-errormessage": "menuitemradio-error",
        "aria-expanded": "undefined",
        "aria-flowto": "menuitemradio-flow",
        "aria-grabbed": "undefined",
        "aria-haspopup": "menu",
        "aria-hidden": "undefined",
        "aria-invalid": "grammar",
        "aria-keyshortcuts": "menuitemradio-shortcuts",
        "aria-label": "menu item radio message",
        "aria-labelledby": "menuitemradio-label",
        "aria-live": "polite",
        "aria-owns": "menuitemradio-owns",
        "aria-posinset": 1,
        "aria-relevant": "additions removals text",
        "aria-roledescription": "menu item radio role description",
        "aria-setsize": 3,
      });
      assertType<KebabCaseAria<"awesomemenuitemradio menuitemradio">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-checked": true,
        "aria-controls": "menuitemradio-controls",
        "aria-current": "location",
        "aria-describedby": "menuitemradio-description",
        "aria-details": "menuitemradio-details",
        "aria-disabled": "true",
        "aria-dropeffect": "copy",
        "aria-errormessage": "menuitemradio-error",
        "aria-expanded": "undefined",
        "aria-flowto": "menuitemradio-flow",
        "aria-grabbed": "undefined",
        "aria-haspopup": "menu",
        "aria-hidden": "undefined",
        "aria-invalid": "grammar",
        "aria-keyshortcuts": "menuitemradio-shortcuts",
        "aria-label": "menu item radio message",
        "aria-labelledby": "menuitemradio-label",
        "aria-live": "polite",
        "aria-owns": "menuitemradio-owns",
        "aria-posinset": 1,
        "aria-relevant": "additions removals text",
        "aria-roledescription": "menu item radio role description",
        "aria-setsize": 3,
      });
    });
    it("should not allow invalid menuitemradio role attributes", () => {
      assertType<KebabCaseAria<"menuitemradio">>({
        "aria-atomic": true,
        "aria-busy": false,
        // @ts-expect-error - should not allow invalid attributes
        "aria-rowcount": 1,
      });
      assertType<KebabCaseAria<"awesomemenuitemradio menuitemradio">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "menuitemradio-controls",
        // @ts-expect-error - should not allow invalid attributes
        "aria-rowcount": 1,
      });
    });
  });
  describe("navigation role", () => {
    it("should allow valid navigation role attributes", () => {
      assertType<KebabCaseAria<"navigation">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "navigation-controls",
        "aria-current": "location",
        "aria-describedby": "navigation-description",
        "aria-details": "navigation-details",
        "aria-disabled": "true",
        "aria-dropeffect": "copy",
        "aria-errormessage": "navigation-error",
        "aria-flowto": "navigation-flow",
        "aria-grabbed": "undefined",
        "aria-haspopup": "menu",
        "aria-hidden": "undefined",
        "aria-invalid": "grammar",
        "aria-keyshortcuts": "navigation-shortcuts",
        "aria-label": "navigation message",
        "aria-labelledby": "navigation-label",
        "aria-live": "polite",
        "aria-owns": "navigation-owns",
        "aria-relevant": "additions removals text",
        "aria-roledescription": "navigation role description",
      });
      assertType<KebabCaseAria<"awesomenavigation navigation">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "navigation-controls",
        "aria-current": "location",
        "aria-describedby": "navigation-description",
        "aria-details": "navigation-details",
        "aria-disabled": "true",
        "aria-dropeffect": "copy",
        "aria-errormessage": "navigation-error",
        "aria-flowto": "navigation-flow",
        "aria-grabbed": "undefined",
        "aria-haspopup": "menu",
        "aria-hidden": "undefined",
        "aria-invalid": "grammar",
        "aria-keyshortcuts": "navigation-shortcuts",
        "aria-label": "navigation message",
        "aria-labelledby": "navigation-label",
        "aria-live": "polite",
        "aria-owns": "navigation-owns",
        "aria-relevant": "additions removals text",
        "aria-roledescription": "navigation role description",
      });
    });
    it("should not allow invalid navigation role attributes", () => {
      assertType<KebabCaseAria<"navigation">>({
        "aria-atomic": true,
        "aria-busy": false,
        // @ts-expect-error - should not allow invalid attributes
        "aria-rowcount": 1,
      });
      assertType<KebabCaseAria<"awesomenavigation navigation">>({
        "aria-atomic": true,
        "aria-busy": false,
        // @ts-expect-error - should not allow invalid attributes
        "aria-rowcount": 1,
      });
    });
  });

  describe("none role", () => {
    it("should allow valid none role attributes", () => {
      assertType<KebabCaseAria<"none">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "none-controls",
        "aria-current": "location",
        "aria-describedby": "none-description",
        "aria-details": "none-details",
        "aria-disabled": "true",
        "aria-dropeffect": "copy",
        "aria-errormessage": "none-error",
        "aria-flowto": "none-flow",
        "aria-grabbed": "undefined",
        "aria-haspopup": "menu",
        "aria-hidden": "undefined",
        "aria-invalid": "grammar",
        "aria-keyshortcuts": "none-shortcuts",
        "aria-live": "polite",
        "aria-owns": "none-owns",
        "aria-relevant": "additions removals text",
        "aria-roledescription": "none role description",
      });
      assertType<KebabCaseAria<"awesomenone none">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "none-controls",
        "aria-current": "location",
        "aria-describedby": "none-description",
        "aria-details": "none-details",
        "aria-disabled": "true",
        "aria-dropeffect": "copy",
        "aria-errormessage": "none-error",
        "aria-flowto": "none-flow",
        "aria-grabbed": "undefined",
        "aria-haspopup": "menu",
        "aria-hidden": "undefined",
        "aria-invalid": "grammar",
        "aria-keyshortcuts": "none-shortcuts",
        "aria-live": "polite",
        "aria-owns": "none-owns",
        "aria-relevant": "additions removals text",
        "aria-roledescription": "none role description",
      });
    });
    it("should not allow label and labelledBy attributes", () => {
      assertType<KebabCaseAria<"none">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "none-controls",
        // @ts-expect-error - should not allow label attribute
        "aria-label": "none message",
      });
      assertType<KebabCaseAria<"awesomenone none">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "none-controls",
        // @ts-expect-error - should not allow labelledBy attribute
        "aria-labelledby": "none-label",
      });
    });
    it("should not allow invalid none role attributes", () => {
      assertType<KebabCaseAria<"none">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "none-controls",
        // @ts-expect-error - should not allow invalid attributes
        "aria-rowcount": 1,
      });
      assertType<KebabCaseAria<"awesomenone none">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "none-controls",
        // @ts-expect-error - should not allow invalid attributes
        "aria-rowcount": 1,
      });
    });
  });

  describe("option role", () => {
    it("should allow valid option role attributes", () => {
      assertType<KebabCaseAria<"option">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-checked": true,
        "aria-controls": "option-controls",
        "aria-current": "location",
        "aria-describedby": "option-description",
        "aria-details": "option-details",
        "aria-disabled": "true",
        "aria-dropeffect": "copy",
        "aria-errormessage": "option-error",
        "aria-flowto": "option-flow",
        "aria-grabbed": "undefined",
        "aria-haspopup": "menu",
        "aria-hidden": "undefined",
        "aria-invalid": "grammar",
        "aria-keyshortcuts": "option-shortcuts",
        "aria-label": "option message",
        "aria-labelledby": "option-label",
        "aria-live": "polite",
        "aria-owns": "option-owns",
        "aria-posinset": 1,
        "aria-relevant": "additions removals text",
        "aria-roledescription": "option role description",
        "aria-selected": true,
        "aria-setsize": 3,
      });
      assertType<KebabCaseAria<"awesomeoption option">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-checked": true,
        "aria-controls": "option-controls",
        "aria-current": "location",
        "aria-describedby": "option-description",
        "aria-details": "option-details",
        "aria-disabled": "true",
        "aria-dropeffect": "copy",
        "aria-errormessage": "option-error",
        "aria-flowto": "option-flow",
        "aria-grabbed": "undefined",
        "aria-haspopup": "menu",
        "aria-hidden": "undefined",
        "aria-invalid": "grammar",
        "aria-keyshortcuts": "option-shortcuts",
        "aria-label": "option message",
        "aria-labelledby": "option-label",
        "aria-live": "polite",
        "aria-owns": "option-owns",
        "aria-posinset": 1,
        "aria-relevant": "additions removals text",
        "aria-roledescription": "option role description",
        "aria-selected": true,
        "aria-setsize": 3,
      });
    });
    it("should not allow invalid option role attributes", () => {
      assertType<KebabCaseAria<"option">>({
        "aria-atomic": true,
        "aria-busy": false,
        // @ts-expect-error - should not allow invalid attributes
        "aria-rowcount": 1,
      });
      assertType<KebabCaseAria<"awesomeoption option">>({
        "aria-atomic": true,
        "aria-busy": false,
        // @ts-expect-error - should not allow invalid attributes
        "aria-rowcount": 1,
      });
    });
  });
  describe("paragraph role", () => {
    it("should allow valid paragraph role attributes", () => {
      assertType<KebabCaseAria<"paragraph">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "paragraph-controls",
        "aria-current": "location",
        "aria-describedby": "paragraph-description",
        "aria-details": "paragraph-details",
        "aria-disabled": "true",
        "aria-dropeffect": "copy",
        "aria-errormessage": "paragraph-error",
        "aria-flowto": "paragraph-flow",
        "aria-grabbed": "undefined",
        "aria-haspopup": "menu",
        "aria-hidden": "undefined",
        "aria-invalid": "grammar",
        "aria-keyshortcuts": "paragraph-shortcuts",
        "aria-live": "polite",
        "aria-owns": "paragraph-owns",
        "aria-relevant": "additions removals text",
        "aria-roledescription": "paragraph role description",
      });
      assertType<KebabCaseAria<"awesomeparagraph paragraph">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "paragraph-controls",
        "aria-current": "location",
        "aria-describedby": "paragraph-description",
        "aria-details": "paragraph-details",
        "aria-disabled": "true",
        "aria-dropeffect": "copy",
        "aria-errormessage": "paragraph-error",
        "aria-flowto": "paragraph-flow",
        "aria-grabbed": "undefined",
        "aria-haspopup": "menu",
        "aria-hidden": "undefined",
        "aria-invalid": "grammar",
        "aria-keyshortcuts": "paragraph-shortcuts",
        "aria-live": "polite",
        "aria-owns": "paragraph-owns",
        "aria-relevant": "additions removals text",
        "aria-roledescription": "paragraph role description",
      });
    });
    it("should not allow label and labelledBy attributes", () => {
      assertType<KebabCaseAria<"paragraph">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "paragraph-controls",
        // @ts-expect-error - should not allow label attribute
        "aria-label": "paragraph message",
      });
      assertType<KebabCaseAria<"awesomeparagraph paragraph">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "paragraph-controls",
        // @ts-expect-error - should not allow labelledBy attribute
        "aria-labelledby": "paragraph-label",
      });
    });
    it("should not allow invalid paragraph role attributes", () => {
      assertType<KebabCaseAria<"paragraph">>({
        "aria-atomic": true,
        "aria-busy": false,
        // @ts-expect-error - should not allow invalid attributes
        "aria-rowcount": 1,
      });
      assertType<KebabCaseAria<"awesomeparagraph paragraph">>({
        "aria-atomic": true,
        "aria-busy": false,
        // @ts-expect-error - should not allow invalid attributes
        "aria-rowcount": 1,
      });
    });
  });
  describe("presentation role", () => {
    it("should allow valid presentation role attributes", () => {
      assertType<KebabCaseAria<"presentation">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "presentation-controls",
        "aria-current": "location",
        "aria-describedby": "presentation-description",
        "aria-details": "presentation-details",
        "aria-disabled": "true",
        "aria-dropeffect": "copy",
        "aria-errormessage": "presentation-error",
        "aria-flowto": "presentation-flow",
        "aria-grabbed": "undefined",
        "aria-haspopup": "menu",
        "aria-hidden": "undefined",
        "aria-invalid": "grammar",
        "aria-keyshortcuts": "presentation-shortcuts",
        "aria-live": "polite",
        "aria-owns": "presentation-owns",
        "aria-relevant": "additions removals text",
        "aria-roledescription": "presentation role description",
      });
      assertType<KebabCaseAria<"awesomepresentation presentation">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "presentation-controls",
        "aria-current": "location",
        "aria-describedby": "presentation-description",
        "aria-details": "presentation-details",
        "aria-disabled": "true",
        "aria-dropeffect": "copy",
        "aria-errormessage": "presentation-error",
        "aria-flowto": "presentation-flow",
        "aria-grabbed": "undefined",
        "aria-haspopup": "menu",
        "aria-hidden": "undefined",
        "aria-invalid": "grammar",
        "aria-keyshortcuts": "presentation-shortcuts",
        "aria-live": "polite",
        "aria-owns": "presentation-owns",
        "aria-relevant": "additions removals text",
        "aria-roledescription": "presentation role description",
      });
    });
    it("should not allow label and labelledBy attributes", () => {
      assertType<KebabCaseAria<"presentation">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "presentation-controls",
        // @ts-expect-error - should not allow label attribute
        "aria-label": "presentation message",
      });
      assertType<KebabCaseAria<"awesomepresentation presentation">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "presentation-controls",
        // @ts-expect-error - should not allow labelledBy attribute
        "aria-labelledby": "presentation-label",
      });
    });
    it("should not allow invalid presentation role attributes", () => {
      assertType<KebabCaseAria<"presentation">>({
        "aria-atomic": true,
        "aria-busy": false,
        // @ts-expect-error - should not allow invalid attributes
        "aria-rowcount": 1,
      });
      assertType<KebabCaseAria<"awesomepresentation presentation">>({
        "aria-atomic": true,
        "aria-busy": false,
        // @ts-expect-error - should not allow invalid attributes
        "aria-rowcount": 1,
      });
    });
  });
  describe("progressbar role", () => {
    it("should allow valid progressbar role attributes", () => {
      assertType<KebabCaseAria<"progressbar">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "progressbar-controls",
        "aria-current": "location",
        "aria-describedby": "progressbar-description",
        "aria-details": "progressbar-details",
        "aria-disabled": "true",
        "aria-dropeffect": "copy",
        "aria-errormessage": "progressbar-error",
        "aria-flowto": "progressbar-flow",
        "aria-grabbed": "undefined",
        "aria-haspopup": "menu",
        "aria-hidden": "undefined",
        "aria-invalid": "grammar",
        "aria-keyshortcuts": "progressbar-shortcuts",
        "aria-label": "progress bar message",
        "aria-labelledby": "progressbar-label",
        "aria-live": "polite",
        "aria-owns": "progressbar-owns",
        "aria-relevant": "additions removals text",
        "aria-roledescription": "progress bar role description",
        "aria-valuemax": 100,
        "aria-valuemin": 0,
        "aria-valuenow": 50,
      });
      assertType<KebabCaseAria<"awesomeprogressbar progressbar">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "progressbar-controls",
        "aria-current": "location",
        "aria-describedby": "progressbar-description",
        "aria-details": "progressbar-details",
        "aria-disabled": "true",
        "aria-dropeffect": "copy",
        "aria-errormessage": "progressbar-error",
        "aria-flowto": "progressbar-flow",
        "aria-grabbed": "undefined",
        "aria-haspopup": "menu",
        "aria-hidden": "undefined",
        "aria-invalid": "grammar",
        "aria-keyshortcuts": "progressbar-shortcuts",
        "aria-label": "progress bar message",
        "aria-labelledby": "progressbar-label",
        "aria-live": "polite",
        "aria-owns": "progressbar-owns",
        "aria-relevant": "additions removals text",
        "aria-roledescription": "progress bar role description",
        "aria-valuemax": 100,
        "aria-valuemin": 0,
        "aria-valuenow": 50,
      });
    });
    it("should not allow invalid progressbar role attributes", () => {
      assertType<KebabCaseAria<"progressbar">>({
        "aria-atomic": true,
        "aria-busy": false,
        // @ts-expect-error - should not allow invalid attributes
        "aria-rowcount": 1,
      });
      assertType<KebabCaseAria<"awesomeprogressbar progressbar">>({
        "aria-atomic": true,
        "aria-busy": false,
        // @ts-expect-error - should not allow invalid attributes
        "aria-rowcount": 1,
      });
    });
  });
  describe("radio role", () => {
    it("should allow valid radio role attributes", () => {
      assertType<KebabCaseAria<"radio">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-checked": true,
        "aria-controls": "radio-controls",
        "aria-current": "location",
        "aria-describedby": "radio-description",
        "aria-details": "radio-details",
        "aria-disabled": "true",
        "aria-dropeffect": "copy",
        "aria-errormessage": "radio-error",
        "aria-flowto": "radio-flow",
        "aria-grabbed": "undefined",
        "aria-haspopup": "menu",
        "aria-hidden": "undefined",
        "aria-invalid": "grammar",
        "aria-keyshortcuts": "radio-shortcuts",
        "aria-label": "radio message",
        "aria-labelledby": "radio-label",
        "aria-live": "polite",
        "aria-owns": "radio-owns",
        "aria-posinset": 1,
        "aria-relevant": "additions removals text",
        "aria-roledescription": "radio role description",
        "aria-setsize": 3,
      });
      assertType<KebabCaseAria<"awesomeradio radio">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-checked": true,
        "aria-controls": "radio-controls",
        "aria-current": "location",
        "aria-describedby": "radio-description",
        "aria-details": "radio-details",
        "aria-disabled": "true",
        "aria-dropeffect": "copy",
        "aria-errormessage": "radio-error",
        "aria-flowto": "radio-flow",
        "aria-grabbed": "undefined",
        "aria-haspopup": "menu",
        "aria-hidden": "undefined",
        "aria-invalid": "grammar",
        "aria-keyshortcuts": "radio-shortcuts",
        "aria-label": "radio message",
        "aria-labelledby": "radio-label",
        "aria-live": "polite",
        "aria-owns": "radio-owns",
        "aria-posinset": 1,
        "aria-relevant": "additions removals text",
        "aria-roledescription": "radio role description",
        "aria-setsize": 3,
      });
    });
    it("should not allow invalid radio role attributes", () => {
      assertType<KebabCaseAria<"radio">>({
        "aria-atomic": true,
        "aria-busy": false,
        // @ts-expect-error - should not allow invalid attributes
        "aria-rowcount": 1,
      });
      assertType<KebabCaseAria<"awesomeradio radio">>({
        "aria-atomic": true,
        "aria-busy": false,
        // @ts-expect-error - should not allow invalid attributes
        "aria-rowcount": 1,
      });
    });
  });
  describe("radiogroup role", () => {
    it("should allow valid radiogroup role attributes", () => {
      assertType<KebabCaseAria<"radiogroup">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "radiogroup-controls",
        "aria-current": "location",
        "aria-describedby": "radiogroup-description",
        "aria-details": "radiogroup-details",
        "aria-disabled": "true",
        "aria-dropeffect": "copy",
        "aria-errormessage": "radiogroup-error",
        "aria-flowto": "radiogroup-flow",
        "aria-grabbed": "undefined",
        "aria-haspopup": "menu",
        "aria-hidden": "undefined",
        "aria-invalid": "grammar",
        "aria-keyshortcuts": "radiogroup-shortcuts",
        "aria-label": "radio group message",
        "aria-labelledby": "radiogroup-label",
        "aria-live": "polite",
        "aria-owns": "radiogroup-owns",
        "aria-readonly": true,
        "aria-required": true,
        "aria-relevant": "additions removals text",
        "aria-roledescription": "radio group role description",
      });
      assertType<KebabCaseAria<"awesomeradiogroup radiogroup">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "radiogroup-controls",
        "aria-current": "location",
        "aria-describedby": "radiogroup-description",
        "aria-details": "radiogroup-details",
        "aria-disabled": "true",
        "aria-dropeffect": "copy",
        "aria-errormessage": "radiogroup-error",
        "aria-flowto": "radiogroup-flow",
        "aria-grabbed": "undefined",
        "aria-haspopup": "menu",
        "aria-hidden": "undefined",
        "aria-invalid": "grammar",
        "aria-keyshortcuts": "radiogroup-shortcuts",
        "aria-label": "radio group message",
        "aria-labelledby": "radiogroup-label",
        "aria-live": "polite",
        "aria-owns": "radiogroup-owns",
        "aria-readonly": true,
        "aria-required": true,
        "aria-relevant": "additions removals text",
        "aria-roledescription": "radio group role description",
      });
    });
    it("should not allow invalid radiogroup role attributes", () => {
      assertType<KebabCaseAria<"radiogroup">>({
        "aria-atomic": true,
        "aria-busy": false,
        // @ts-expect-error - should not allow invalid attributes
        "aria-rowcount": 1,
      });
      assertType<KebabCaseAria<"awesomeradiogroup radiogroup">>({
        "aria-atomic": true,
        "aria-busy": false,
        // @ts-expect-error - should not allow invalid attributes
        "aria-rowcount": 1,
      });
    });
  });

  describe("region role", () => {
    it("should allow valid region role attributes", () => {
      assertType<KebabCaseAria<"region">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "region-controls",
        "aria-current": "location",
        "aria-describedby": "region-description",
        "aria-details": "region-details",
        "aria-disabled": "true",
        "aria-dropeffect": "copy",
        "aria-errormessage": "region-error",
        "aria-flowto": "region-flow",
        "aria-grabbed": "undefined",
        "aria-haspopup": "menu",
        "aria-hidden": "undefined",
        "aria-invalid": "grammar",
        "aria-keyshortcuts": "region-shortcuts",
        "aria-label": "region message",
        "aria-labelledby": "region-label",
        "aria-live": "polite",
        "aria-owns": "region-owns",
        "aria-relevant": "additions removals text",
        "aria-roledescription": "region role description",
      });
      assertType<KebabCaseAria<"awesomeregion region">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "region-controls",
        "aria-current": "location",
        "aria-describedby": "region-description",
        "aria-details": "region-details",
        "aria-disabled": "true",
        "aria-dropeffect": "copy",
        "aria-errormessage": "region-error",
        "aria-flowto": "region-flow",
        "aria-grabbed": "undefined",
        "aria-haspopup": "menu",
        "aria-hidden": "undefined",
        "aria-invalid": "grammar",
        "aria-keyshortcuts": "region-shortcuts",
        "aria-label": "region message",
        "aria-labelledby": "region-label",
        "aria-live": "polite",
        "aria-owns": "region-owns",
        "aria-relevant": "additions removals text",
        "aria-roledescription": "region role description",
      });
    });
    it("should not allow invalid region role attributes", () => {
      assertType<KebabCaseAria<"region">>({
        "aria-atomic": true,
        "aria-busy": false,
        // @ts-expect-error - should not allow invalid attributes
        "aria-rowcount": 1,
      });
      assertType<KebabCaseAria<"awesomeregion region">>({
        "aria-atomic": true,
        "aria-busy": false,
        // @ts-expect-error - should not allow invalid attributes
        "aria-rowcount": 1,
      });
    });
  });
  describe("row role", () => {
    it("should allow valid row role attributes", () => {
      assertType<KebabCaseAria<"row">>({
        "aria-activedescendant": "row-active-descendant",
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "row-controls",
        "aria-colindex": 1,
        "aria-current": "location",
        "aria-describedby": "row-description",
        "aria-details": "row-details",
        "aria-disabled": "true",
        "aria-dropeffect": "copy",
        "aria-errormessage": "row-error",
        "aria-expanded": "undefined",
        "aria-flowto": "row-flow",
        "aria-grabbed": "undefined",
        "aria-haspopup": "menu",
        "aria-hidden": "undefined",
        "aria-invalid": "grammar",
        "aria-keyshortcuts": "row-shortcuts",
        "aria-label": "row message",
        "aria-labelledby": "row-label",
        "aria-level": 1,
        "aria-live": "polite",
        "aria-owns": "row-owns",
        "aria-posinset": 1,
        "aria-relevant": "additions removals text",
        "aria-roledescription": "row role description",
        "aria-rowindex": 1,
        "aria-setsize": 3,
        "aria-selected": true,
      });
      assertType<KebabCaseAria<"awesomerow row">>({
        "aria-activedescendant": "row-active-descendant",
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "row-controls",
        "aria-colindex": 1,
        "aria-current": "location",
        "aria-describedby": "row-description",
        "aria-details": "row-details",
        "aria-disabled": "true",
        "aria-dropeffect": "copy",
        "aria-errormessage": "row-error",
        "aria-expanded": "undefined",
        "aria-flowto": "row-flow",
        "aria-grabbed": "undefined",
        "aria-haspopup": "menu",
        "aria-hidden": "undefined",
        "aria-invalid": "grammar",
        "aria-keyshortcuts": "row-shortcuts",
        "aria-label": "row message",
        "aria-labelledby": "row-label",
        "aria-level": 1,
        "aria-live": "polite",
        "aria-owns": "row-owns",
        "aria-posinset": 1,
        "aria-relevant": "additions removals text",
        "aria-roledescription": "row role description",
        "aria-rowindex": 1,
        "aria-setsize": 3,
        "aria-selected": true,
      });
    });
    it("should not allow invalid row role attributes", () => {
      assertType<KebabCaseAria<"row">>({
        "aria-activedescendant": "row-active-descendant",
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "row-controls",
        // @ts-expect-error - should not allow invalid attributes
        "aria-rowspan": 1,
      });
      assertType<KebabCaseAria<"awesomerow row">>({
        "aria-activedescendant": "row-active-descendant",
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "row-controls",
        // @ts-expect-error - should not allow invalid attributes
        "aria-rowspan": 1,
      });
    });
  });
  describe("rowgroup role", () => {
    it("should allow valid rowgroup role attributes", () => {
      assertType<KebabCaseAria<"rowgroup">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "rowgroup-controls",
        "aria-current": "location",
        "aria-describedby": "rowgroup-description",
        "aria-details": "rowgroup-details",
        "aria-disabled": "true",
        "aria-dropeffect": "copy",
        "aria-errormessage": "rowgroup-error",
        "aria-flowto": "rowgroup-flow",
        "aria-grabbed": "undefined",
        "aria-haspopup": "menu",
        "aria-hidden": "undefined",
        "aria-invalid": "grammar",
        "aria-keyshortcuts": "rowgroup-shortcuts",
        "aria-label": "row group message",
        "aria-labelledby": "rowgroup-label",
        "aria-live": "polite",
        "aria-owns": "rowgroup-owns",
        "aria-relevant": "additions removals text",
        "aria-roledescription": "row group role description",
      });
      assertType<KebabCaseAria<"awesomerowgroup rowgroup">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "rowgroup-controls",
        "aria-current": "location",
        "aria-describedby": "rowgroup-description",
        "aria-details": "rowgroup-details",
        "aria-disabled": "true",
        "aria-dropeffect": "copy",
        "aria-errormessage": "rowgroup-error",
        "aria-flowto": "rowgroup-flow",
        "aria-grabbed": "undefined",
        "aria-haspopup": "menu",
        "aria-hidden": "undefined",
        "aria-invalid": "grammar",
        "aria-keyshortcuts": "rowgroup-shortcuts",
        "aria-label": "row group message",
        "aria-labelledby": "rowgroup-label",
        "aria-live": "polite",
        "aria-owns": "rowgroup-owns",
        "aria-relevant": "additions removals text",
        "aria-roledescription": "row group role description",
      });
    });
    it("should not allow invalid rowgroup role attributes", () => {
      assertType<KebabCaseAria<"rowgroup">>({
        "aria-atomic": true,
        "aria-busy": false,
        // @ts-expect-error - should not allow invalid attributes
        "aria-rowcount": 1,
      });
      assertType<KebabCaseAria<"awesomerowgroup rowgroup">>({
        "aria-atomic": true,
        "aria-busy": false,
        // @ts-expect-error - should not allow invalid attributes
        "aria-rowcount": 1,
      });
    });
  });
  describe("rowheader role", () => {
    it("should allow valid rowheader role attributes", () => {
      assertType<KebabCaseAria<"rowheader">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "rowheader-controls",
        "aria-colindex": 1,
        "aria-colspan": 2,
        "aria-current": "location",
        "aria-describedby": "rowheader-description",
        "aria-details": "rowheader-details",
        "aria-disabled": "true",
        "aria-dropeffect": "copy",
        "aria-errormessage": "rowheader-error",
        "aria-expanded": "undefined",
        "aria-flowto": "rowheader-flow",
        "aria-grabbed": "undefined",
        "aria-haspopup": "menu",
        "aria-hidden": "undefined",
        "aria-invalid": "grammar",
        "aria-keyshortcuts": "rowheader-shortcuts",
        "aria-label": "row header message",
        "aria-labelledby": "rowheader-label",
        "aria-live": "polite",
        "aria-owns": "rowheader-owns",
        "aria-readonly": true,
        "aria-relevant": "additions removals text",
        "aria-required": true,
        "aria-roledescription": "row header role description",
        "aria-rowindex": 1,
        "aria-rowspan": 2,
        "aria-selected": true,
      });
      assertType<KebabCaseAria<"awesomerowheader rowheader">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "rowheader-controls",
        "aria-colindex": 1,
        "aria-colspan": 2,
        "aria-current": "location",
        "aria-describedby": "rowheader-description",
        "aria-details": "rowheader-details",
        "aria-disabled": "true",
        "aria-dropeffect": "copy",
        "aria-errormessage": "rowheader-error",
        "aria-expanded": "undefined",
        "aria-flowto": "rowheader-flow",
        "aria-grabbed": "undefined",
        "aria-haspopup": "menu",
        "aria-hidden": "undefined",
        "aria-invalid": "grammar",
        "aria-keyshortcuts": "rowheader-shortcuts",
        "aria-label": "row header message",
        "aria-labelledby": "rowheader-label",
        "aria-live": "polite",
        "aria-owns": "rowheader-owns",
        "aria-readonly": true,
        "aria-relevant": "additions removals text",
        "aria-required": true,
        "aria-roledescription": "row header role description",
        "aria-rowindex": 1,
        "aria-rowspan": 2,
        "aria-selected": true,
      });
    });
    it("should not allow invalid rowheader role attributes", () => {
      assertType<KebabCaseAria<"rowheader">>({
        "aria-atomic": true,
        "aria-busy": false,
        // @ts-expect-error - should not allow invalid attributes
        "aria-rowcount": 1,
      });
      assertType<KebabCaseAria<"awesomerowheader rowheader">>({
        "aria-atomic": true,
        "aria-busy": false,
        // @ts-expect-error - should not allow invalid attributes
        "aria-rowcount": 1,
      });
    });
  });
  describe("scrollbar role", () => {
    it("should allow valid scrollbar role attributes", () => {
      assertType<KebabCaseAria<"scrollbar">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "scrollbar-controls",
        "aria-current": "location",
        "aria-describedby": "scrollbar-description",
        "aria-details": "scrollbar-details",
        "aria-disabled": "true",
        "aria-dropeffect": "copy",
        "aria-errormessage": "scrollbar-error",
        "aria-flowto": "scrollbar-flow",
        "aria-grabbed": "undefined",
        "aria-haspopup": "menu",
        "aria-hidden": "undefined",
        "aria-invalid": "grammar",
        "aria-keyshortcuts": "scrollbar-shortcuts",
        "aria-label": "scrollbar message",
        "aria-labelledby": "scrollbar-label",
        "aria-live": "polite",
        "aria-owns": "scrollbar-owns",
        "aria-orientation": "vertical",
        "aria-relevant": "additions removals text",
        "aria-roledescription": "scrollbar role description",
        "aria-valuemax": 100,
        "aria-valuemin": 0,
        "aria-valuenow": 50,
        "aria-valuetext": "50%",
      });
      assertType<KebabCaseAria<"awesomescrollbar scrollbar">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "scrollbar-controls",
        "aria-current": "location",
        "aria-describedby": "scrollbar-description",
        "aria-details": "scrollbar-details",
        "aria-disabled": "true",
        "aria-dropeffect": "copy",
        "aria-errormessage": "scrollbar-error",
        "aria-flowto": "scrollbar-flow",
        "aria-grabbed": "undefined",
        "aria-haspopup": "menu",
        "aria-hidden": "undefined",
        "aria-invalid": "grammar",
        "aria-keyshortcuts": "scrollbar-shortcuts",
        "aria-label": "scrollbar message",
        "aria-labelledby": "scrollbar-label",
        "aria-live": "polite",
        "aria-owns": "scrollbar-owns",
        "aria-orientation": "vertical",
        "aria-relevant": "additions removals text",
        "aria-roledescription": "scrollbar role description",
        "aria-valuemax": 100,
        "aria-valuemin": 0,
        "aria-valuenow": 50,
        "aria-valuetext": "50%",
      });
    });
    it("should not allow invalid scrollbar role attributes", () => {
      assertType<KebabCaseAria<"scrollbar">>({
        "aria-atomic": true,
        "aria-busy": false,
        // @ts-expect-error - should not allow invalid attributes
        "aria-rowcount": 1,
      });
      assertType<KebabCaseAria<"awesomescrollbar scrollbar">>({
        "aria-atomic": true,
        "aria-busy": false,
        // @ts-expect-error - should not allow invalid attributes
        "aria-rowcount": 1,
      });
    });
  });

  describe("search role", () => {
    it("should allow valid search role attributes", () => {
      assertType<KebabCaseAria<"search">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "search-controls",
        "aria-current": "location",
        "aria-describedby": "search-description",
        "aria-details": "search-details",
        "aria-disabled": "true",
        "aria-dropeffect": "copy",
        "aria-errormessage": "search-error",
        "aria-flowto": "search-flow",
        "aria-grabbed": "undefined",
        "aria-haspopup": "menu",
        "aria-hidden": "undefined",
        "aria-invalid": "grammar",
        "aria-keyshortcuts": "search-shortcuts",
        "aria-label": "search message",
        "aria-labelledby": "search-label",
        "aria-live": "polite",
        "aria-owns": "search-owns",
        "aria-relevant": "additions removals text",
        "aria-roledescription": "search role description",
      });
      assertType<KebabCaseAria<"awesomesearch search">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "search-controls",
        "aria-current": "location",
        "aria-describedby": "search-description",
        "aria-details": "search-details",
        "aria-disabled": "true",
        "aria-dropeffect": "copy",
        "aria-errormessage": "search-error",
        "aria-flowto": "search-flow",
        "aria-grabbed": "undefined",
        "aria-haspopup": "menu",
        "aria-hidden": "undefined",
        "aria-invalid": "grammar",
        "aria-keyshortcuts": "search-shortcuts",
        "aria-label": "search message",
        "aria-labelledby": "search-label",
        "aria-live": "polite",
        "aria-owns": "search-owns",
        "aria-relevant": "additions removals text",
        "aria-roledescription": "search role description",
      });
    });
    it("should not allow invalid search role attributes", () => {
      assertType<KebabCaseAria<"search">>({
        "aria-atomic": true,
        "aria-busy": false,
        // @ts-expect-error - should not allow invalid attributes
        "aria-rowcount": 1,
      });
      assertType<KebabCaseAria<"awesomesearch search">>({
        "aria-atomic": true,
        "aria-busy": false,
        // @ts-expect-error - should not allow invalid attributes
        "aria-rowcount": 1,
      });
    });
  });

  describe("searchbox role", () => {
    it("should allow valid searchbox role attributes", () => {
      assertType<KebabCaseAria<"searchbox">>({
        "aria-activedescendant": "searchbox-active-descendant",
        "aria-atomic": true,
        "aria-autocomplete": "both",
        "aria-busy": false,
        "aria-controls": "searchbox-controls",
        "aria-current": "location",
        "aria-describedby": "searchbox-description",
        "aria-details": "searchbox-details",
        "aria-disabled": "true",
        "aria-dropeffect": "copy",
        "aria-errormessage": "searchbox-error",
        "aria-flowto": "searchbox-flow",
        "aria-grabbed": "undefined",
        "aria-haspopup": "menu",
        "aria-hidden": "undefined",
        "aria-invalid": "grammar",
        "aria-keyshortcuts": "searchbox-shortcuts",
        "aria-label": "search box message",
        "aria-labelledby": "searchbox-label",
        "aria-live": "polite",
        "aria-multiline": true,
        "aria-owns": "searchbox-owns",
        "aria-placeholder": "search here",
        "aria-readonly": true,
        "aria-relevant": "additions removals text",
        "aria-required": true,
        "aria-roledescription": "search box role description",
      });
      assertType<KebabCaseAria<"awesomesearchbox searchbox">>({
        "aria-activedescendant": "searchbox-active-descendant",
        "aria-atomic": true,
        "aria-autocomplete": "both",
        "aria-busy": false,
        "aria-controls": "searchbox-controls",
        "aria-current": "location",
        "aria-describedby": "searchbox-description",
        "aria-details": "searchbox-details",
        "aria-disabled": "true",
        "aria-dropeffect": "copy",
        "aria-errormessage": "searchbox-error",
        "aria-flowto": "searchbox-flow",
        "aria-grabbed": "undefined",
        "aria-haspopup": "menu",
        "aria-hidden": "undefined",
        "aria-invalid": "grammar",
        "aria-keyshortcuts": "searchbox-shortcuts",
        "aria-label": "search box message",
        "aria-labelledby": "searchbox-label",
        "aria-live": "polite",
        "aria-multiline": true,
        "aria-owns": "searchbox-owns",
        "aria-placeholder": "search here",
        "aria-readonly": true,
        "aria-relevant": "additions removals text",
        "aria-required": true,
        "aria-roledescription": "search box role description",
      });
    });
    it("should not allow invalid searchbox role attributes", () => {
      assertType<KebabCaseAria<"searchbox">>({
        "aria-atomic": true,
        "aria-busy": false,
        // @ts-expect-error - should not allow invalid attributes
        "aria-rowcount": 1,
      });
      assertType<KebabCaseAria<"awesomesearchbox searchbox">>({
        "aria-atomic": true,
        "aria-busy": false,
        // @ts-expect-error - should not allow invalid attributes
        "aria-rowcount": 1,
      });
    });
  });
  describe("separator role", () => {
    it("should allow valid separator role attributes", () => {
      assertType<KebabCaseAria<"separator">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "separator-controls",
        "aria-current": "location",
        "aria-describedby": "separator-description",
        "aria-details": "separator-details",
        "aria-disabled": "true",
        "aria-dropeffect": "copy",
        "aria-errormessage": "separator-error",
        "aria-flowto": "separator-flow",
        "aria-grabbed": "undefined",
        "aria-haspopup": "menu",
        "aria-hidden": "undefined",
        "aria-invalid": "grammar",
        "aria-keyshortcuts": "separator-shortcuts",
        "aria-label": "separator message",
        "aria-labelledby": "separator-label",
        "aria-live": "polite",
        "aria-owns": "separator-owns",
        "aria-relevant": "additions removals text",
        "aria-roledescription": "separator role description",
      });
      assertType<KebabCaseAria<"awesomeseparator separator">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "separator-controls",
        "aria-current": "location",
        "aria-describedby": "separator-description",
        "aria-details": "separator-details",
        "aria-disabled": "true",
        "aria-dropeffect": "copy",
        "aria-errormessage": "separator-error",
        "aria-flowto": "separator-flow",
        "aria-grabbed": "undefined",
        "aria-haspopup": "menu",
        "aria-hidden": "undefined",
        "aria-invalid": "grammar",
        "aria-keyshortcuts": "separator-shortcuts",
        "aria-label": "separator message",
        "aria-labelledby": "separator-label",
        "aria-live": "polite",
        "aria-owns": "separator-owns",
        "aria-relevant": "additions removals text",
        "aria-roledescription": "separator role description",
      });
    });
    it("should not allow invalid separator role attributes", () => {
      assertType<KebabCaseAria<"separator">>({
        "aria-atomic": true,
        "aria-busy": false,
        // @ts-expect-error - should not allow invalid attributes
        "aria-rowcount": 1,
      });
      assertType<KebabCaseAria<"awesomeseparator separator">>({
        "aria-atomic": true,
        "aria-busy": false,
        // @ts-expect-error - should not allow invalid attributes
        "aria-rowcount": 1,
      });
    });
  });
  // describe("slider role", () => {
  //   it("should allow valid slider role attributes", () => {
  //     assertType<KebabCaseAria<"slider">>({
  //       "aria-atomic": true,
  //       "aria-busy": false,
  //       "aria-controls": "slider-controls",
  //       "aria-current": "location",
  //       "aria-describedby": "slider-description",
  //       "aria-details": "slider-details",
  //       "aria-disabled": "true",
  //       "aria-dropeffect": "copy",
  //       "aria-errormessage": "slider-error",
  //       "aria-flowto": "slider-flow",
  //       "aria-grabbed": "undefined",
  //       "aria-haspopup": "menu",
  //       "aria-hidden": "undefined",
  //       "aria-invalid": "grammar",
  //       "aria-keyshortcuts": "slider-shortcuts",
  //       "aria-label": "slider message",
  //       "aria-labelledby": "slider-label",
  //       "aria-live": "polite",
  //       "aria-orientation": "horizontal",
  //       "aria-owns": "slider-owns",
  //       "aria-readonly": true,
  //       "aria-relevant": "additions removals text",
  //       "aria-roledescription": "slider role description",
  //       "aria-valuemax": 100,
  //       "aria-valuemin": 0,
  //       "aria-valuenow": 50,
  //     });
  //     assertType<KebabCaseAria<"awesomeslider slider">>({
  //       "aria-atomic": true,
  //       "aria-busy": false,
  //       "aria-controls": "slider-controls",
  //       "aria-current": "location",
  //       "aria-describedby": "slider-description",
  //       "aria-details": "slider-details",
  //       "aria-disabled": "true",
  //       "aria-dropeffect": "copy",
  //       "aria-errormessage": "slider-error",
  //       "aria-flowto": "slider-flow",
  //       "aria-grabbed": "undefined",
  //       "aria-haspopup": "menu",
  //       "aria-hidden": "undefined",
  //       "aria-invalid": "grammar",
  //       "aria-keyshortcuts": "slider-shortcuts",
  //       "aria-label": "slider message",
  //       "aria-labelledby": "slider-label",
  //       "aria-live": "polite",
  //       "aria-orientation": "horizontal",
  //       "aria-owns": "slider-owns",
  //       "aria-readonly": true,
  //       "aria-relevant": "additions removals text",
  //       "aria-roledescription": "slider role description",
  //       "aria-valuemax": 100,
  //       "aria-valuemin": 0,
  //       "aria-valuenow": 50,
  //     });
  //   });
  //   it("should not allow invalid slider role attributes", () => {
  //     assertType<KebabCaseAria<"slider">>({
  //       "aria-atomic": true,
  //       "aria-busy": false,
  //       // @ts-expect-error - should not allow invalid attributes
  //       "aria-rowcount": 1,
  //     });
  //     assertType<KebabCaseAria<"awesomeslider slider">>({
  //       "aria-atomic": true,
  //       "aria-busy": false,
  //       // @ts-expect-error - should not allow invalid attributes
  //       "aria-rowcount": 1,
  //     });
  //   });
  // });

  // describe("spinbutton role", () => {
  //   it("should allow valid spinbutton role attributes", () => {
  //     assertType<KebabCaseAria<"spinbutton">>({
  //       "aria-activedescendant": "spinbutton-active-descendant",
  //       "aria-atomic": true,
  //       "aria-busy": false,
  //       "aria-controls": "spinbutton-controls",
  //       "aria-current": "location",
  //       "aria-describedby": "spinbutton-description",
  //       "aria-details": "spinbutton-details",
  //       "aria-disabled": "true",
  //       "aria-dropeffect": "copy",
  //       "aria-errormessage": "spinbutton-error",
  //       "aria-flowto": "spinbutton-flow",
  //       "aria-grabbed": "undefined",
  //       "aria-haspopup": "menu",
  //       "aria-hidden": "undefined",
  //       "aria-invalid": "grammar",
  //       "aria-keyshortcuts": "spinbutton-shortcuts",
  //       "aria-label": "spin button message",
  //       "aria-labelledby": "spinbutton-label",
  //       "aria-live": "polite",
  //       "aria-owns": "spinbutton-owns",
  //       "aria-readonly": true,
  //       "aria-relevant": "additions removals text",
  //       "aria-required": true,
  //       "aria-roledescription": "spin button role description",
  //       "aria-valuemax": 100,
  //       "aria-valuemin": 0,
  //       "aria-valuenow": 50,
  //     });
  //     assertType<KebabCaseAria<"awesomespinbutton spinbutton">>({
  //       "aria-activedescendant": "spinbutton-active-descendant",
  //       "aria-atomic": true,
  //       "aria-busy": false,
  //       "aria-controls": "spinbutton-controls",
  //       "aria-current": "location",
  //       "aria-describedby": "spinbutton-description",
  //       "aria-details": "spinbutton-details",
  //       "aria-disabled": "true",
  //       "aria-dropeffect": "copy",
  //       "aria-errormessage": "spinbutton-error",
  //       "aria-flowto": "spinbutton-flow",
  //       "aria-grabbed": "undefined",
  //       "aria-haspopup": "menu",
  //       "aria-hidden": "undefined",
  //       "aria-invalid": "grammar",
  //       "aria-keyshortcuts": "spinbutton-shortcuts",
  //       "aria-label": "spin button message",
  //       "aria-labelledby": "spinbutton-label",
  //       "aria-live": "polite",
  //       "aria-owns": "spinbutton-owns",
  //       "aria-readonly": true,
  //       "aria-relevant": "additions removals text",
  //       "aria-required": true,
  //       "aria-roledescription": "spin button role description",
  //       "aria-valuemax": 100,
  //       "aria-valuemin": 0,
  //       "aria-valuenow": 50,
  //     });
  //   });
  //   it("should not allow invalid spinbutton role attributes", () => {
  //     assertType<KebabCaseAria<"spinbutton">>({
  //       "aria-atomic": true,
  //       "aria-busy": false,
  //       // @ts-expect-error - should not allow invalid attributes
  //       "aria-rowcount": 1,
  //     });
  //     assertType<KebabCaseAria<"awesomespinbutton spinbutton">>({
  //       "aria-atomic": true,
  //       "aria-busy": false,
  //       // @ts-expect-error - should not allow invalid attributes
  //       "aria-rowcount": 1,
  //     });
  //   });
  // });

  // describe("status role", () => {
  //   it("should allow valid status role attributes", () => {
  //     assertType<KebabCaseAria<"status">>({
  //       "aria-atomic": true,
  //       "aria-busy": false,
  //       "aria-controls": "status-controls",
  //       "aria-current": "location",
  //       "aria-describedby": "status-description",
  //       "aria-details": "status-details",
  //       "aria-disabled": "true",
  //       "aria-dropeffect": "copy",
  //       "aria-errormessage": "status-error",
  //       "aria-flowto": "status-flow",
  //       "aria-grabbed": "undefined",
  //       "aria-haspopup": "menu",
  //       "aria-hidden": "undefined",
  //       "aria-invalid": "grammar",
  //       "aria-keyshortcuts": "status-shortcuts",
  //       "aria-label": "status message",
  //       "aria-labelledby": "status-label",
  //       "aria-live": "polite",
  //       "aria-owns": "status-owns",
  //       "aria-relevant": "additions removals text",
  //       "aria-roledescription": "status role description",
  //     });
  //     assertType<KebabCaseAria<"awesomestatus status">>({
  //       "aria-atomic": true,
  //       "aria-busy": false,
  //       "aria-controls": "status-controls",
  //       "aria-current": "location",
  //       "aria-describedby": "status-description",
  //       "aria-details": "status-details",
  //       "aria-disabled": "true",
  //       "aria-dropeffect": "copy",
  //       "aria-errormessage": "status-error",
  //       "aria-flowto": "status-flow",
  //       "aria-grabbed": "undefined",
  //       "aria-haspopup": "menu",
  //       "aria-hidden": "undefined",
  //       "aria-invalid": "grammar",
  //       "aria-keyshortcuts": "status-shortcuts",
  //       "aria-label": "status message",
  //       "aria-labelledby": "status-label",
  //       "aria-live": "polite",
  //       "aria-owns": "status-owns",
  //       "aria-relevant": "additions removals text",
  //       "aria-roledescription": "status role description",
  //     });
  //   });
  //   it("should not allow invalid status role attributes", () => {
  //     assertType<KebabCaseAria<"status">>({
  //       "aria-atomic": true,
  //       "aria-busy": false,
  //       // @ts-expect-error - should not allow invalid attributes
  //       "aria-rowcount": 1,
  //     });
  //     assertType<KebabCaseAria<"awesomestatus status">>({
  //       "aria-atomic": true,
  //       "aria-busy": false,
  //       // @ts-expect-error - should not allow invalid attributes
  //       "aria-rowcount": 1,
  //     });
  //   });
  // });
  describe("strong role", () => {
    it("should allow valid strong role attributes", () => {
      assertType<KebabCaseAria<"strong">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "strong-controls",
        "aria-current": "location",
        "aria-describedby": "strong-description",
        "aria-details": "strong-details",
        "aria-disabled": "true",
        "aria-dropeffect": "copy",
        "aria-errormessage": "strong-error",
        "aria-flowto": "strong-flow",
        "aria-grabbed": "undefined",
        "aria-haspopup": "menu",
        "aria-hidden": "undefined",
        "aria-invalid": "grammar",
        "aria-keyshortcuts": "strong-shortcuts",
        "aria-live": "polite",
        "aria-owns": "strong-owns",
        "aria-relevant": "additions removals text",
        "aria-roledescription": "strong role description",
      });
      assertType<KebabCaseAria<"awesomestrong strong">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "strong-controls",
        "aria-current": "location",
        "aria-describedby": "strong-description",
        "aria-details": "strong-details",
        "aria-disabled": "true",
        "aria-dropeffect": "copy",
        "aria-errormessage": "strong-error",
        "aria-flowto": "strong-flow",
        "aria-grabbed": "undefined",
        "aria-haspopup": "menu",
        "aria-hidden": "undefined",
        "aria-invalid": "grammar",
        "aria-keyshortcuts": "strong-shortcuts",
        "aria-live": "polite",
        "aria-owns": "strong-owns",
        "aria-relevant": "additions removals text",
        "aria-roledescription": "strong role description",
      });
    });
    it("should not allow label and labelledBy attributes", () => {
      assertType<KebabCaseAria<"strong">>({
        // @ts-expect-error - should not allow label attribute
        "aria-label": "strong message",
      });
      assertType<KebabCaseAria<"awesomestrong strong">>({
        // @ts-expect-error - should not allow label attribute
        "aria-labelledby": "strong message",
      });
    });

    it("should not allow invalid strong role attributes", () => {
      assertType<KebabCaseAria<"strong">>({
        "aria-atomic": true,
        "aria-busy": false,
        // @ts-expect-error - should not allow invalid attributes
        "aria-rowcount": 1,
      });
      assertType<KebabCaseAria<"awesomestrong strong">>({
        "aria-atomic": true,
        "aria-busy": false,
        // @ts-expect-error - should not allow invalid attributes
        "aria-rowcount": 1,
      });
    });
  });

  describe("subscript role", () => {
    it("should allow valid subscript role attributes", () => {
      assertType<KebabCaseAria<"subscript">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "subscript-controls",
        "aria-current": "location",
        "aria-describedby": "subscript-description",
        "aria-details": "subscript-details",
        "aria-disabled": "true",
        "aria-dropeffect": "copy",
        "aria-errormessage": "subscript-error",
        "aria-flowto": "subscript-flow",
        "aria-grabbed": "undefined",
        "aria-haspopup": "menu",
        "aria-hidden": "true",
        "aria-invalid": "grammar",
        "aria-keyshortcuts": "subscript-shortcuts",
        "aria-live": "polite",
        "aria-owns": "subscript-owns",
        "aria-relevant": "additions removals text",
        "aria-roledescription": "subscript role description",
      });
      assertType<KebabCaseAria<"awesomesubscript subscript">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "subscript-controls",
        "aria-current": "location",
        "aria-describedby": "subscript-description",
        "aria-details": "subscript-details",
        "aria-disabled": "true",
        "aria-dropeffect": "copy",
        "aria-errormessage": "subscript-error",
        "aria-flowto": "subscript-flow",
        "aria-grabbed": "undefined",
        "aria-haspopup": "menu",
        "aria-hidden": "true",
        "aria-invalid": "grammar",
        "aria-keyshortcuts": "subscript-shortcuts",
        "aria-live": "polite",
        "aria-owns": "subscript-owns",
        "aria-relevant": "additions removals text",
        "aria-roledescription": "subscript role description",
      });
    });
    it("should not allow label and labelledBy attributes", () => {
      assertType<KebabCaseAria<"subscript">>({
        // @ts-expect-error - should not allow label attribute
        "aria-label": "subscript message",
      });
      assertType<KebabCaseAria<"awesomesubscript subscript">>({
        // @ts-expect-error - should not allow label attribute
        "aria-labelledby": "subscript message",
      });
    });
    it("should not allow invalid subscript role attributes", () => {
      assertType<KebabCaseAria<"subscript">>({
        "aria-atomic": true,
        "aria-busy": false,
        // @ts-expect-error - should not allow invalid attributes
        "aria-rowcount": 1,
      });
      assertType<KebabCaseAria<"awesomesubscript subscript">>({
        "aria-atomic": true,
        "aria-busy": false,
        // @ts-expect-error - should not allow invalid attributes
        "aria-rowcount": 1,
      });
    });
  });
  describe("superscript role", () => {
    it("should allow valid superscript role attributes", () => {
      assertType<KebabCaseAria<"superscript">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "superscript-controls",
        "aria-current": "location",
        "aria-describedby": "superscript-description",
        "aria-details": "superscript-details",
        "aria-disabled": "true",
        "aria-dropeffect": "copy",
        "aria-errormessage": "superscript-error",
        "aria-flowto": "superscript-flow",
        "aria-grabbed": "undefined",
        "aria-haspopup": "menu",
        "aria-hidden": "true",
        "aria-invalid": "grammar",
        "aria-keyshortcuts": "superscript-shortcuts",
        "aria-live": "polite",
        "aria-owns": "superscript-owns",
        "aria-relevant": "additions removals text",
        "aria-roledescription": "superscript role description",
      });
      assertType<KebabCaseAria<"awesomesuperscript superscript">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "superscript-controls",
        "aria-current": "location",
        "aria-describedby": "superscript-description",
        "aria-details": "superscript-details",
        "aria-disabled": "true",
        "aria-dropeffect": "copy",
        "aria-errormessage": "superscript-error",
        "aria-flowto": "superscript-flow",
        "aria-grabbed": "undefined",
        "aria-haspopup": "menu",
        "aria-hidden": "true",
        "aria-invalid": "grammar",
        "aria-keyshortcuts": "superscript-shortcuts",
        "aria-live": "polite",
        "aria-owns": "superscript-owns",
        "aria-relevant": "additions removals text",
        "aria-roledescription": "superscript role description",
      });
    });
    it("should not allow label and labelledBy attributes", () => {
      assertType<KebabCaseAria<"superscript">>({
        // @ts-expect-error - should not allow label attribute
        "aria-label": "superscript message",
      });
      assertType<KebabCaseAria<"awesomesuperscript superscript">>({
        // @ts-expect-error - should not allow label attribute
        "aria-labelledby": "superscript message",
      });
    });
    it("should not allow invalid superscript role attributes", () => {
      assertType<KebabCaseAria<"superscript">>({
        "aria-atomic": true,
        "aria-busy": false,
        // @ts-expect-error - should not allow invalid attributes
        "aria-rowcount": 1,
      });
      assertType<KebabCaseAria<"awesomesuperscript superscript">>({
        "aria-atomic": true,
        "aria-busy": false,
        // @ts-expect-error - should not allow invalid attributes
        "aria-rowcount": 1,
      });
    });
  });
  describe("switch role", () => {
    it("should allow valid switch role attributes", () => {
      assertType<KebabCaseAria<"switch">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-checked": true,
        "aria-controls": "switch-controls",
        "aria-current": "location",
        "aria-describedby": "switch-description",
        "aria-details": "switch-details",
        "aria-disabled": "true",
        "aria-dropeffect": "copy",
        "aria-errormessage": "switch-error",
        "aria-expanded": "undefined",
        "aria-flowto": "switch-flow",
        "aria-grabbed": "undefined",
        "aria-haspopup": "menu",
        "aria-hidden": "undefined",
        "aria-invalid": "grammar",
        "aria-keyshortcuts": "switch-shortcuts",
        "aria-label": "switch message",
        "aria-labelledby": "switch-label",
        "aria-live": "polite",
        "aria-owns": "switch-owns",
        "aria-readonly": true,
        "aria-relevant": "additions removals text",
        "aria-required": true,
        "aria-roledescription": "switch role description",
      });
      assertType<KebabCaseAria<"awesomeswitch switch">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "switch-controls",
        "aria-current": "location",
        "aria-describedby": "switch-description",
        "aria-details": "switch-details",
        "aria-disabled": "true",
        "aria-dropeffect": "copy",
        "aria-errormessage": "switch-error",
        "aria-expanded": "undefined",
        "aria-flowto": "switch-flow",
        "aria-grabbed": "undefined",
        "aria-haspopup": "menu",
        "aria-hidden": "undefined",
        "aria-invalid": "grammar",
        "aria-keyshortcuts": "switch-shortcuts",
        "aria-label": "switch message",
        "aria-labelledby": "switch-label",
        "aria-live": "polite",
        "aria-owns": "switch-owns",
        "aria-readonly": true,
        "aria-relevant": "additions removals text",
        "aria-required": true,
        "aria-roledescription": "switch role description",
      });
    });
    it("should not allow invalid switch role attributes", () => {
      assertType<KebabCaseAria<"switch">>({
        "aria-atomic": true,
        "aria-busy": false,
        // @ts-expect-error - should not allow invalid attributes
        "aria-rowcount": 1,
      });
      assertType<KebabCaseAria<"awesomeswitch switch">>({
        "aria-atomic": true,
        "aria-busy": false,
        // @ts-expect-error - should not allow invalid attributes
        "aria-rowcount": 1,
      });
    });
  });
  describe("tab role", () => {
    it("should allow valid tab role attributes", () => {
      assertType<KebabCaseAria<"tab">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "tab-controls",
        "aria-current": "location",
        "aria-describedby": "tab-description",
        "aria-details": "tab-details",
        "aria-disabled": "true",
        "aria-dropeffect": "copy",
        "aria-errormessage": "tab-error",
        "aria-expanded": "undefined",
        "aria-flowto": "tab-flow",
        "aria-grabbed": "undefined",
        "aria-haspopup": "menu",
        "aria-hidden": "undefined",
        "aria-invalid": "grammar",
        "aria-keyshortcuts": "tab-shortcuts",
        "aria-label": "tab message",
        "aria-labelledby": "tab-label",
        "aria-live": "polite",
        "aria-owns": "tab-owns",
        "aria-posinset": 1,
        "aria-relevant": "additions removals text",
        "aria-roledescription": "tab role description",
        "aria-selected": true,
        "aria-setsize": 3,
      });
      assertType<KebabCaseAria<"awesometab tab">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "tab-controls",
        "aria-current": "location",
        "aria-describedby": "tab-description",
        "aria-details": "tab-details",
        "aria-disabled": "true",
        "aria-dropeffect": "copy",
        "aria-errormessage": "tab-error",
        "aria-expanded": "undefined",
        "aria-flowto": "tab-flow",
        "aria-grabbed": "undefined",
        "aria-haspopup": "menu",
        "aria-hidden": "undefined",
        "aria-invalid": "grammar",
        "aria-keyshortcuts": "tab-shortcuts",
        "aria-label": "tab message",
        "aria-labelledby": "tab-label",
        "aria-live": "polite",
        "aria-owns": "tab-owns",
        "aria-posinset": 1,
        "aria-relevant": "additions removals text",
        "aria-roledescription": "tab role description",
        "aria-selected": true,
        "aria-setsize": 3,
      });
    });
    it("should not allow invalid tab role attributes", () => {
      assertType<KebabCaseAria<"tab">>({
        // @ts-expect-error - should not allow invalid attributes
        "aria-activedescendant": "tab-active-descendant",
      });
      assertType<KebabCaseAria<"awesometab tab">>({
        // @ts-expect-error - should not allow invalid attributes
        "aria-activedescendant": "tab-active-descendant",
      });
    });
  });
  describe("table role", () => {
    it("should allow valid table role attributes", () => {
      assertType<KebabCaseAria<"table">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "table-controls",
        "aria-colcount": 3,
        "aria-current": "location",
        "aria-describedby": "table-description",
        "aria-details": "table-details",
        "aria-disabled": "true",
        "aria-dropeffect": "copy",
        "aria-errormessage": "table-error",
        "aria-flowto": "table-flow",
        "aria-grabbed": "undefined",
        "aria-haspopup": "menu",
        "aria-hidden": "undefined",
        "aria-invalid": "grammar",
        "aria-keyshortcuts": "table-shortcuts",
        "aria-label": "table message",
        "aria-labelledby": "table-label",
        "aria-live": "polite",
        "aria-owns": "table-owns",
        "aria-relevant": "additions removals text",
        "aria-roledescription": "table role description",
        "aria-rowcount": 5,
      });
      assertType<KebabCaseAria<"awesometable table">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "table-controls",
        "aria-colcount": 3,
        "aria-current": "location",
        "aria-describedby": "table-description",
        "aria-details": "table-details",
        "aria-disabled": "true",
        "aria-dropeffect": "copy",
        "aria-errormessage": "table-error",
        "aria-flowto": "table-flow",
        "aria-grabbed": "undefined",
        "aria-haspopup": "menu",
        "aria-hidden": "undefined",
        "aria-invalid": "grammar",
        "aria-keyshortcuts": "table-shortcuts",
        "aria-label": "table message",
        "aria-labelledby": "table-label",
        "aria-live": "polite",
        "aria-owns": "table-owns",
        "aria-relevant": "additions removals text",
        "aria-roledescription": "table role description",
        "aria-rowcount": 5,
      });
    });
    it("should not allow invalid table role attributes", () => {
      assertType<KebabCaseAria<"table">>({
        // @ts-expect-error - should not allow invalid attributes
        "aria-activedescendant": "table-active-descendant",
      });
      assertType<KebabCaseAria<"awesometable table">>({
        // @ts-expect-error - should not allow invalid attributes
        "aria-activedescendant": "table-active-descendant",
      });
    });
  });
  describe("tablist role", () => {
    it("should allow valid tablist role attributes", () => {
      assertType<KebabCaseAria<"tablist">>({
        "aria-activedescendant": "tablist-active-descendant",
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "tablist-controls",
        "aria-current": "location",
        "aria-describedby": "tablist-description",
        "aria-details": "tablist-details",
        "aria-disabled": "true",
        "aria-dropeffect": "copy",
        "aria-errormessage": "tablist-error",
        "aria-flowto": "tablist-flow",
        "aria-grabbed": "undefined",
        "aria-haspopup": "menu",
        "aria-hidden": "undefined",
        "aria-invalid": "grammar",
        "aria-keyshortcuts": "tablist-shortcuts",
        "aria-label": "tablist message",
        "aria-labelledby": "tablist-label",
        "aria-live": "polite",
        "aria-multiselectable": true,
        "aria-orientation": "horizontal",
        "aria-owns": "tablist-owns",
        "aria-relevant": "additions removals text",
        "aria-roledescription": "tablist role description",
      });
      assertType<KebabCaseAria<"awesometablist tablist">>({
        "aria-activedescendant": "tablist-active-descendant",
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "tablist-controls",
        "aria-current": "location",
        "aria-describedby": "tablist-description",
        "aria-details": "tablist-details",
        "aria-disabled": "true",
        "aria-dropeffect": "copy",
        "aria-errormessage": "tablist-error",
        "aria-flowto": "tablist-flow",
        "aria-grabbed": "undefined",
        "aria-haspopup": "menu",
        "aria-hidden": "undefined",
        "aria-invalid": "grammar",
        "aria-keyshortcuts": "tablist-shortcuts",
        "aria-label": "tablist message",
        "aria-labelledby": "tablist-label",
        "aria-live": "polite",
        "aria-multiselectable": true,
        "aria-orientation": "horizontal",
        "aria-owns": "tablist-owns",
        "aria-relevant": "additions removals text",
        "aria-roledescription": "tablist role description",
      });
    });
    it("should not allow invalid tablist role attributes", () => {
      assertType<KebabCaseAria<"tablist">>({
        // @ts-expect-error - should not allow invalid attributes
        "aria-rowcount": 1,
      });
      assertType<KebabCaseAria<"awesometablist tablist">>({
        // @ts-expect-error - should not allow invalid attributes
        "aria-rowcount": 1,
      });
    });
  });
  describe("tabpanel role", () => {
    it("should allow valid tabpanel role attributes", () => {
      assertType<KebabCaseAria<"tabpanel">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "tabpanel-controls",
        "aria-current": "location",
        "aria-describedby": "tabpanel-description",
        "aria-details": "tabpanel-details",
        "aria-disabled": "true",
        "aria-dropeffect": "copy",
        "aria-errormessage": "tabpanel-error",
        "aria-flowto": "tabpanel-flow",
        "aria-grabbed": "undefined",
        "aria-haspopup": "menu",
        "aria-hidden": "undefined",
        "aria-invalid": "grammar",
        "aria-keyshortcuts": "tabpanel-shortcuts",
        "aria-label": "tabpanel message",
        "aria-labelledby": "tabpanel-label",
        "aria-live": "polite",
        "aria-owns": "tabpanel-owns",
        "aria-relevant": "additions removals text",
        "aria-roledescription": "tabpanel role description",
      });
      assertType<KebabCaseAria<"awesometabpanel tabpanel">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "tabpanel-controls",
        "aria-current": "location",
        "aria-describedby": "tabpanel-description",
        "aria-details": "tabpanel-details",
        "aria-disabled": "true",
        "aria-dropeffect": "copy",
        "aria-errormessage": "tabpanel-error",
        "aria-flowto": "tabpanel-flow",
        "aria-grabbed": "undefined",
        "aria-haspopup": "menu",
        "aria-hidden": "undefined",
        "aria-invalid": "grammar",
        "aria-keyshortcuts": "tabpanel-shortcuts",
        "aria-label": "tabpanel message",
        "aria-labelledby": "tabpanel-label",
        "aria-live": "polite",
        "aria-owns": "tabpanel-owns",
        "aria-relevant": "additions removals text",
        "aria-roledescription": "tabpanel role description",
      });
    });
  });
  it("should not allow invalid tabpanel role attributes", () => {
    assertType<KebabCaseAria<"tabpanel">>({
      "aria-atomic": true,
      "aria-busy": false,
      // @ts-expect-error - should not allow invalid attributes
      "aria-rowcount": 1,
    });
    assertType<KebabCaseAria<"awesometabpanel tabpanel">>({
      "aria-atomic": true,
      "aria-busy": false,
      // @ts-expect-error - should not allow invalid attributes
      "aria-rowcount": 1,
    });
  });
  describe("term role", () => {
    it("should allow valid term role attributes", () => {
      assertType<KebabCaseAria<"term">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "term-controls",
        "aria-current": "location",
        "aria-describedby": "term-description",
        "aria-details": "term-details",
        "aria-disabled": "true",
        "aria-dropeffect": "copy",
        "aria-errormessage": "term-error",
        "aria-flowto": "term-flow",
        "aria-grabbed": "undefined",
        "aria-haspopup": "menu",
        "aria-hidden": "true",
        "aria-invalid": "grammar",
        "aria-keyshortcuts": "term-shortcuts",
        "aria-live": "polite",
        "aria-label": "term message",
        "aria-labelledby": "term-label",
        "aria-owns": "term-owns",
        "aria-relevant": "additions removals text",
        "aria-roledescription": "term role description",
      });
      assertType<KebabCaseAria<"awesometerm term">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "term-controls",
        "aria-current": "location",
        "aria-describedby": "term-description",
        "aria-details": "term-details",
        "aria-disabled": "true",
        "aria-dropeffect": "copy",
        "aria-errormessage": "term-error",
        "aria-flowto": "term-flow",
        "aria-grabbed": "undefined",
        "aria-haspopup": "menu",
        "aria-hidden": "true",
        "aria-invalid": "grammar",
        "aria-keyshortcuts": "term-shortcuts",
        "aria-label": "term message",
        "aria-labelledby": "term-label",
        "aria-live": "polite",
        "aria-owns": "term-owns",
        "aria-relevant": "additions removals text",
        "aria-roledescription": "term role description",
      });
    });
    it("should not allow invalid term role attributes", () => {
      assertType<KebabCaseAria<"term">>({
        "aria-atomic": true,
        "aria-busy": false,
        // @ts-expect-error - should not allow invalid attributes
        "aria-rowcount": 1,
      });
      assertType<KebabCaseAria<"awesometerm superscript">>({
        "aria-atomic": true,
        "aria-busy": false,
        // @ts-expect-error - should not allow invalid attributes
        "aria-rowcount": 1,
      });
    });
  });

  describe("textbox role", () => {
    it("should allow valid textbox role attributes", () => {
      assertType<KebabCaseAria<"textbox">>({
        "aria-activedescendant": "textbox-active-descendant",
        "aria-atomic": true,
        "aria-autocomplete": "both",
        "aria-busy": false,
        "aria-controls": "textbox-controls",
        "aria-current": "location",
        "aria-describedby": "textbox-description",
        "aria-details": "textbox-details",
        "aria-disabled": "true",
        "aria-dropeffect": "copy",
        "aria-errormessage": "textbox-error",
        "aria-flowto": "textbox-flow",
        "aria-grabbed": "undefined",
        "aria-haspopup": "menu",
        "aria-hidden": "undefined",
        "aria-invalid": "grammar",
        "aria-keyshortcuts": "textbox-shortcuts",
        "aria-label": "textbox message",
        "aria-labelledby": "textbox-label",
        "aria-live": "polite",
        "aria-multiline": true,
        "aria-owns": "textbox-owns",
        "aria-placeholder": "type here...",
        "aria-readonly": true,
        "aria-relevant": "additions removals text",
        "aria-required": true,
        "aria-roledescription": "textbox role description",
      });
      assertType<KebabCaseAria<"awesometextbox textbox">>({
        "aria-activedescendant": "textbox-active-descendant",
        "aria-atomic": true,
        "aria-autocomplete": "both",
        "aria-busy": false,
        "aria-controls": "textbox-controls",
        "aria-current": "location",
        "aria-describedby": "textbox-description",
        "aria-details": "textbox-details",
        "aria-disabled": "true",
        "aria-dropeffect": "copy",
        "aria-errormessage": "textbox-error",
        "aria-flowto": "textbox-flow",
        "aria-grabbed": "undefined",
        "aria-haspopup": "menu",
        "aria-hidden": "undefined",
        "aria-invalid": "grammar",
        "aria-keyshortcuts": "textbox-shortcuts",
        "aria-label": "textbox message",
        "aria-labelledby": "textbox-label",
        "aria-live": "polite",
        "aria-multiline": true,
        "aria-owns": "textbox-owns",
        "aria-placeholder": "type here...",
        "aria-readonly": true,
        "aria-relevant": "additions removals text",
        "aria-required": true,
        "aria-roledescription": "textbox role description",
      });
    });
    it("should not allow invalid textbox role attributes", () => {
      assertType<KebabCaseAria<"textbox">>({
        "aria-atomic": true,
        "aria-busy": false,
        // @ts-expect-error - should not allow invalid attributes
        "aria-rowcount": 1,
      });
      assertType<KebabCaseAria<"awesometextbox textbox">>({
        "aria-atomic": true,
        "aria-busy": false,
        // @ts-expect-error - should not allow invalid attributes
        "aria-rowcount": 1,
      });
    });
  });
  describe("time role", () => {
    it("should allow valid time role attributes", () => {
      assertType<KebabCaseAria<"time">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "time-controls",
        "aria-current": "location",
        "aria-describedby": "time-description",
        "aria-details": "time-details",
        "aria-disabled": "true",
        "aria-dropeffect": "copy",
        "aria-errormessage": "time-error",
        "aria-flowto": "time-flow",
        "aria-grabbed": "undefined",
        "aria-haspopup": "menu",
        "aria-hidden": "undefined",
        "aria-invalid": "grammar",
        "aria-keyshortcuts": "time-shortcuts",
        "aria-label": "time message",
        "aria-labelledby": "time-label",
        "aria-live": "polite",
        "aria-owns": "time-owns",
        "aria-relevant": "additions removals text",
        "aria-roledescription": "time role description",
      });
      assertType<KebabCaseAria<"awesometime time">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "time-controls",
        "aria-current": "location",
        "aria-describedby": "time-description",
        "aria-details": "time-details",
        "aria-disabled": "true",
        "aria-dropeffect": "copy",
        "aria-errormessage": "time-error",
        "aria-flowto": "time-flow",
        "aria-grabbed": "undefined",
        "aria-haspopup": "menu",
        "aria-hidden": "undefined",
        "aria-invalid": "grammar",
        "aria-keyshortcuts": "time-shortcuts",
        "aria-label": "time message",
        "aria-labelledby": "time-label",
        "aria-live": "polite",
        "aria-owns": "time-owns",
        "aria-relevant": "additions removals text",
        "aria-roledescription": "time role description",
      });
    });
    it("should not allow invalid time role attributes", () => {
      assertType<KebabCaseAria<"time">>({
        "aria-atomic": true,
        "aria-busy": false,
        // @ts-expect-error - should not allow invalid attributes
        "aria-rowcount": 1,
      });
      assertType<KebabCaseAria<"awesometime time">>({
        "aria-atomic": true,
        "aria-busy": false,
        // @ts-expect-error - should not allow invalid attributes
        "aria-rowcount": 1,
      });
    });
  });
  describe("timer role", () => {
    it("should allow valid timer role attributes", () => {
      assertType<KebabCaseAria<"timer">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "timer-controls",
        "aria-current": "location",
        "aria-describedby": "timer-description",
        "aria-details": "timer-details",
        "aria-disabled": "true",
        "aria-dropeffect": "copy",
        "aria-errormessage": "timer-error",
        "aria-flowto": "timer-flow",
        "aria-grabbed": "undefined",
        "aria-haspopup": "menu",
        "aria-hidden": "undefined",
        "aria-invalid": "grammar",
        "aria-keyshortcuts": "timer-shortcuts",
        "aria-label": "timer message",
        "aria-labelledby": "timer-label",
        "aria-live": "polite",
        "aria-owns": "timer-owns",
        "aria-relevant": "additions removals text",
        "aria-roledescription": "timer role description",
      });
      assertType<KebabCaseAria<"awesometimer timer">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "timer-controls",
        "aria-current": "location",
        "aria-describedby": "timer-description",
        "aria-details": "timer-details",
        "aria-disabled": "true",
        "aria-dropeffect": "copy",
        "aria-errormessage": "timer-error",
        "aria-flowto": "timer-flow",
        "aria-grabbed": "undefined",
        "aria-haspopup": "menu",
        "aria-hidden": "undefined",
        "aria-invalid": "grammar",
        "aria-keyshortcuts": "timer-shortcuts",
        "aria-label": "timer message",
        "aria-labelledby": "timer-label",
        "aria-live": "polite",
        "aria-owns": "timer-owns",
        "aria-relevant": "additions removals text",
        "aria-roledescription": "timer role description",
      });
    });
    it("should not allow invalid timer role attributes", () => {
      assertType<KebabCaseAria<"timer">>({
        "aria-atomic": true,
        "aria-busy": false,
        // @ts-expect-error - should not allow invalid attributes
        "aria-rowcount": 1,
      });
      assertType<KebabCaseAria<"awesometimer timer">>({
        "aria-atomic": true,
        "aria-busy": false,
        // @ts-expect-error - should not allow invalid attributes
        "aria-rowcount": 1,
      });
    });
  });

  describe("toolbar role", () => {
    it("should allow valid toolbar role attributes", () => {
      assertType<KebabCaseAria<"toolbar">>({
        "aria-activedescendant": "toolbar-active-descendant",
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "toolbar-controls",
        "aria-current": "location",
        "aria-describedby": "toolbar-description",
        "aria-details": "toolbar-details",
        "aria-disabled": "true",
        "aria-dropeffect": "copy",
        "aria-errormessage": "toolbar-error",
        "aria-flowto": "toolbar-flow",
        "aria-grabbed": "undefined",
        "aria-haspopup": "menu",
        "aria-hidden": "undefined",
        "aria-invalid": "grammar",
        "aria-keyshortcuts": "toolbar-shortcuts",
        "aria-label": "toolbar message",
        "aria-labelledby": "toolbar-label",
        "aria-live": "polite",
        "aria-orientation": "horizontal",
        "aria-owns": "toolbar-owns",
        "aria-relevant": "additions removals text",
        "aria-roledescription": "toolbar role description",
      });
      assertType<KebabCaseAria<"toolbar">>({
        "aria-activedescendant": "toolbar-active-descendant",
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "toolbar-controls",
        "aria-current": "location",
        "aria-describedby": "toolbar-description",
        "aria-details": "toolbar-details",
        "aria-disabled": "true",
        "aria-dropeffect": "copy",
        "aria-errormessage": "toolbar-error",
        "aria-flowto": "toolbar-flow",
        "aria-grabbed": "undefined",
        "aria-haspopup": "menu",
        "aria-hidden": "undefined",
        "aria-invalid": "grammar",
        "aria-keyshortcuts": "toolbar-shortcuts",
        "aria-label": "toolbar message",
        "aria-labelledby": "toolbar-label",
        "aria-live": "polite",
        "aria-orientation": "horizontal",
        "aria-owns": "toolbar-owns",
        "aria-relevant": "additions removals text",
        "aria-roledescription": "toolbar role description",
      });
    });
    it("should not allow invalid toolbar role attributes", () => {
      assertType<KebabCaseAria<"toolbar">>({
        // @ts-expect-error - should not allow invalid attributes
        "aria-rowcount": 1,
      });
      assertType<KebabCaseAria<"awesometoolbar toolbar">>({
        // @ts-expect-error - should not allow invalid attributes
        "aria-rowcount": 1,
      });
    });
  });

  describe("tooltip role", () => {
    it("should allow valid tooltip role attributes", () => {
      assertType<KebabCaseAria<"tooltip">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "tooltip-controls",
        "aria-current": "location",
        "aria-describedby": "tooltip-description",
        "aria-details": "tooltip-details",
        "aria-disabled": "true",
        "aria-dropeffect": "copy",
        "aria-errormessage": "tooltip-error",
        "aria-flowto": "tooltip-flow",
        "aria-grabbed": "undefined",
        "aria-haspopup": "menu",
        "aria-hidden": "undefined",
        "aria-invalid": "grammar",
        "aria-keyshortcuts": "tooltip-shortcuts",
        "aria-label": "tooltip message",
        "aria-labelledby": "tooltip-label",
        "aria-live": "polite",
        "aria-owns": "tooltip-owns",
        "aria-relevant": "additions removals text",
        "aria-roledescription": "tooltip role description",
      });
      assertType<KebabCaseAria<"awesometooltip tooltip">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "tooltip-controls",
        "aria-current": "location",
        "aria-describedby": "tooltip-description",
        "aria-details": "tooltip-details",
        "aria-disabled": "true",
        "aria-dropeffect": "copy",
        "aria-errormessage": "tooltip-error",
        "aria-flowto": "tooltip-flow",
        "aria-grabbed": "undefined",
        "aria-haspopup": "menu",
        "aria-hidden": "undefined",
        "aria-invalid": "grammar",
        "aria-keyshortcuts": "tooltip-shortcuts",
        "aria-label": "tooltip message",
        "aria-labelledby": "tooltip-label",
        "aria-live": "polite",
        "aria-owns": "tooltip-owns",
        "aria-relevant": "additions removals text",
        "aria-roledescription": "tooltip role description",
      });
    });
    it("should not allow invalid tooltip role attributes", () => {
      assertType<KebabCaseAria<"tooltip">>({
        "aria-atomic": true,
        "aria-busy": false,
        // @ts-expect-error - should not allow invalid attributes
        "aria-rowcount": 1,
      });
      assertType<KebabCaseAria<"awesometooltip tooltip">>({
        "aria-atomic": true,
        "aria-busy": false,
        // @ts-expect-error - should not allow invalid attributes
        "aria-rowcount": 1,
      });
    });
  });
  describe("tree role", () => {
    it("should allow valid tree role attributes", () => {
      assertType<KebabCaseAria<"tree">>({
        "aria-activedescendant": "tree-active-descendant",
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "tree-controls",
        "aria-current": "location",
        "aria-describedby": "tree-description",
        "aria-details": "tree-details",
        "aria-disabled": "true",
        "aria-dropeffect": "copy",
        "aria-errormessage": "tree-error",
        "aria-flowto": "tree-flow",
        "aria-grabbed": "undefined",
        "aria-haspopup": "menu",
        "aria-hidden": "undefined",
        "aria-invalid": "grammar",
        "aria-keyshortcuts": "tree-shortcuts",
        "aria-label": "tree message",
        "aria-labelledby": "tree-label",
        "aria-live": "polite",
        "aria-multiselectable": true,
        "aria-orientation": "vertical",
        "aria-owns": "tree-owns",
        "aria-relevant": "additions removals text",
        "aria-required": true,
        "aria-roledescription": "tree role description",
      });
      assertType<KebabCaseAria<"awesometree tree">>({
        "aria-activedescendant": "tree-active-descendant",
        "aria-atomic": true,
        "aria-busy": false,
        "aria-controls": "tree-controls",
        "aria-current": "location",
        "aria-describedby": "tree-description",
        "aria-details": "tree-details",
        "aria-disabled": "true",
        "aria-dropeffect": "copy",
        "aria-errormessage": "tree-error",
        "aria-flowto": "tree-flow",
        "aria-grabbed": "undefined",
        "aria-haspopup": "menu",
        "aria-hidden": "undefined",
        "aria-invalid": "grammar",
        "aria-keyshortcuts": "tree-shortcuts",
        "aria-label": "tree message",
        "aria-labelledby": "tree-label",
        "aria-live": "polite",
        "aria-multiselectable": true,
        "aria-orientation": "vertical",
        "aria-owns": "tree-owns",
        "aria-relevant": "additions removals text",
        "aria-required": true,
        "aria-roledescription": "tree role description",
      });
    });
    it("should not allow invalid tree role attributes", () => {
      assertType<KebabCaseAria<"tree">>({
        // @ts-expect-error - should not allow invalid attributes
        "aria-rowcount": 1,
      });
      assertType<KebabCaseAria<"awesometree tree">>({
        // @ts-expect-error - should not allow invalid attributes
        "aria-rowcount": 1,
      });
    });
  });
  describe("treegrid role", () => {
    it("should allow valid treegrid role attributes", () => {
      assertType<KebabCaseAria<"treegrid">>({
        "aria-activedescendant": "treegrid-active-descendant",
        "aria-atomic": true,
        "aria-busy": false,
        "aria-colcount": 3,
        "aria-controls": "treegrid-controls",
        "aria-current": "location",
        "aria-describedby": "treegrid-description",
        "aria-details": "treegrid-details",
        "aria-disabled": "true",
        "aria-dropeffect": "copy",
        "aria-errormessage": "treegrid-error",
        "aria-flowto": "treegrid-flow",
        "aria-grabbed": "undefined",
        "aria-haspopup": "menu",
        "aria-hidden": "undefined",
        "aria-invalid": "grammar",
        "aria-keyshortcuts": "treegrid-shortcuts",
        "aria-label": "treegrid message",
        "aria-labelledby": "treegrid-label",
        "aria-live": "polite",
        "aria-multiselectable": true,
        "aria-orientation": "vertical",
        "aria-owns": "treegrid-owns",
        "aria-readonly": true,
        "aria-relevant": "additions removals text",
        "aria-required": true,
        "aria-roledescription": "treegrid role description",
        "aria-rowcount": 5,
      });
      assertType<KebabCaseAria<"awesometreegrid treegrid">>({
        "aria-activedescendant": "treegrid-active-descendant",
        "aria-atomic": true,
        "aria-busy": false,
        "aria-colcount": 3,
        "aria-controls": "treegrid-controls",
        "aria-current": "location",
        "aria-describedby": "treegrid-description",
        "aria-details": "treegrid-details",
        "aria-disabled": "true",
        "aria-dropeffect": "copy",
        "aria-errormessage": "treegrid-error",
        "aria-flowto": "treegrid-flow",
        "aria-grabbed": "undefined",
        "aria-haspopup": "menu",
        "aria-hidden": "undefined",
        "aria-invalid": "grammar",
        "aria-keyshortcuts": "treegrid-shortcuts",
        "aria-label": "treegrid message",
        "aria-labelledby": "treegrid-label",
        "aria-live": "polite",
        "aria-multiselectable": true,
        "aria-orientation": "vertical",
        "aria-owns": "treegrid-owns",
        "aria-readonly": true,
        "aria-relevant": "additions removals text",
        "aria-required": true,
        "aria-roledescription": "treegrid role description",
        "aria-rowcount": 5,
      });
    });
    it("should not allow invalid treegrid role attributes", () => {
      assertType<KebabCaseAria<"treegrid">>({
        // @ts-expect-error - should not allow invalid attributes
        "aria-rowspan": 2,
      });
      assertType<KebabCaseAria<"awesometreegrid treegrid">>({
        // @ts-expect-error - should not allow invalid attributes
        "aria-rowspan": 2,
      });
    });
  });
  describe("treeitem role", () => {
    it("should allow valid treeitem role attributes", () => {
      assertType<KebabCaseAria<"treeitem">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-checked": true,
        "aria-controls": "treeitem-controls",
        "aria-current": "location",
        "aria-describedby": "treeitem-description",
        "aria-details": "treeitem-details",
        "aria-disabled": "true",
        "aria-dropeffect": "copy",
        "aria-errormessage": "treeitem-error",
        "aria-expanded": "undefined",
        "aria-flowto": "treeitem-flow",
        "aria-grabbed": "undefined",
        "aria-haspopup": "menu",
        "aria-hidden": "undefined",
        "aria-invalid": "grammar",
        "aria-keyshortcuts": "treeitem-shortcuts",
        "aria-label": "treeitem message",
        "aria-labelledby": "treeitem-label",
        "aria-live": "polite",
        "aria-owns": "treeitem-owns",
        "aria-posinset": 1,
        "aria-relevant": "additions removals text",
        "aria-roledescription": "treeitem role description",
        "aria-selected": true,
        "aria-setsize": 3,
      });
      assertType<KebabCaseAria<"awesometreeitem treeitem">>({
        "aria-atomic": true,
        "aria-busy": false,
        "aria-checked": true,
        "aria-controls": "treeitem-controls",
        "aria-current": "location",
        "aria-describedby": "treeitem-description",
        "aria-details": "treeitem-details",
        "aria-disabled": "true",
        "aria-dropeffect": "copy",
        "aria-errormessage": "treeitem-error",
        "aria-expanded": "undefined",
        "aria-flowto": "treeitem-flow",
        "aria-grabbed": "undefined",
        "aria-haspopup": "menu",
        "aria-hidden": "undefined",
        "aria-invalid": "grammar",
        "aria-keyshortcuts": "treeitem-shortcuts",
        "aria-label": "treeitem message",
        "aria-labelledby": "treeitem-label",
        "aria-live": "polite",
        "aria-owns": "treeitem-owns",
        "aria-posinset": 1,
        "aria-relevant": "additions removals text",
        "aria-roledescription": "treeitem role description",
        "aria-selected": true,
        "aria-setsize": 3,
      });
    });
    it("should not allow invalid treeitem role attributes", () => {
      assertType<KebabCaseAria<"treeitem">>({
        // @ts-expect-error - should not allow invalid attributes
        "aria-rowcount": 1,
      });
      assertType<KebabCaseAria<"awesometreeitem treeitem">>({
        // @ts-expect-error - should not allow invalid attributes
        "aria-rowcount": 1,
      });
    });
  });
});
