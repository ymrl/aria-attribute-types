import { describe, it, assertType } from "vitest";
import { CamelCaseAria } from "./CamelCaseAria";

describe("CamelCaseAria", () => {
  it("should not allow invalid role types", () => {
    // @ts-expect-error - should not allow invalid role types
    assertType<CamelCaseAria<"invalidRole">>({ label: "test" });
  });

  describe("alert role", () => {
    it("should allow valid alert role attributes", () => {
      assertType<CamelCaseAria<"alert">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "alert-controls",
        ariaCurrent: "location",
        ariaDescribedBy: "alert-description",
        ariaDetails: "alert-details",
        ariaDisabled: "true",
        ariaDropEffect: "copy",
        ariaErrorMessage: "alert-error",
        ariaFlowTo: "alert-flow",
        ariaGrabbed: "undefined",
        ariaHasPopup: "menu",
        ariaHidden: "undefined",
        ariaInvalid: "grammar",
        ariaKeyShortcuts: "alert-shortcuts",
        ariaLabel: "Alert message",
        ariaLabelledBy: "alert-label",
        ariaLive: "assertive",
        ariaOwns: "alert-owns",
        ariaRelevant: "additions removals",
        ariaRoleDescription: "Alert role description",
      });
      assertType<CamelCaseAria<"awesomealert alert">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "alert-controls",
        ariaCurrent: "location",
        ariaDescribedBy: "alert-description",
        ariaDetails: "alert-details",
        ariaDisabled: "true",
        ariaDropEffect: "copy",
        ariaErrorMessage: "alert-error",
        ariaFlowTo: "alert-flow",
        ariaGrabbed: "undefined",
        ariaHasPopup: "menu",
        ariaHidden: "undefined",
        ariaInvalid: "grammar",
        ariaKeyShortcuts: "alert-shortcuts",
        ariaLabel: "Alert message",
        ariaLabelledBy: "alert-label",
        ariaLive: "assertive",
        ariaOwns: "alert-owns",
        ariaRelevant: "additions removals",
        ariaRoleDescription: "Alert role description",
      });
    });
    it("should not allow invalid alert role attributes", () => {
      assertType<CamelCaseAria<"alert">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "alert-controls",
        // @ts-expect-error - should not allow invalid attributes
        ariaModal: "true",
      });
      assertType<CamelCaseAria<"awesomealert alert">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "alert-controls",
        // @ts-expect-error - should not allow invalid attributes
        ariaModal: "true",
      });
    });
  });

  describe("alertdialog role", () => {
    it("should allow valid alertdialog role attributes", () => {
      assertType<CamelCaseAria<"alertdialog">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "alertdialog-controls",
        ariaCurrent: "location",
        ariaDescribedBy: "alertdialog-description",
        ariaDetails: "alertdialog-details",
        ariaDisabled: "true",
        ariaDropEffect: "copy",
        ariaErrorMessage: "alertdialog-error",
        ariaFlowTo: "alertdialog-flow",
        ariaGrabbed: "undefined",
        ariaHasPopup: "dialog",
        ariaHidden: "undefined",
        ariaInvalid: "spelling",
        ariaKeyShortcuts: "alertdialog-shortcuts",
        ariaLabel: "Alert dialog message",
        ariaLabelledBy: "alertdialog-label",
        ariaLive: "assertive",
        ariaModal: "true",
        ariaOwns: "alertdialog-owns",
        ariaRelevant: "text removals",
        ariaRoleDescription: "Alert dialog role description",
      });
      assertType<CamelCaseAria<"awesomealertdialog alertdialog">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "alertdialog-controls",
        ariaCurrent: "location",
        ariaDescribedBy: "alertdialog-description",
        ariaDetails: "alertdialog-details",
        ariaDisabled: "true",
        ariaDropEffect: "copy",
        ariaErrorMessage: "alertdialog-error",
        ariaFlowTo: "alertdialog-flow",
        ariaGrabbed: "undefined",
        ariaHasPopup: "dialog",
        ariaHidden: "undefined",
        ariaInvalid: "spelling",
        ariaKeyShortcuts: "alertdialog-shortcuts",
        ariaLabel: "Alert dialog message",
        ariaLabelledBy: "alertdialog-label",
        ariaLive: "assertive",
        ariaModal: "true",
        ariaOwns: "alertdialog-owns",
        ariaRelevant: "text removals",
        ariaRoleDescription: "Alert dialog role description",
      });
    });
    it("should not allow invalid alertdialog role attributes", () => {
      assertType<CamelCaseAria<"alertdialog">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "alertdialog-controls",
        // @ts-expect-error - should not allow invalid attributes
        ariaColCount: 1,
      });
      assertType<CamelCaseAria<"awesomealertdialog alertdialog">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "alertdialog-controls",
        // @ts-expect-error - should not allow invalid attributes
        ariaColCount: 1,
      });
    });
  });

  describe("application role", () => {
    it("should allow valid application role attributes", () => {
      assertType<CamelCaseAria<"application">>({
        ariaActiveDescendant: "application-active-descendant",
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "application-controls",
        ariaCurrent: "location",
        ariaDescribedBy: "application-description",
        ariaDetails: "application-details",
        ariaDisabled: "true",
        ariaDropEffect: "copy",
        ariaErrorMessage: "application-error",
        ariaExpanded: "undefined",
        ariaFlowTo: "application-flow",
        ariaGrabbed: "undefined",
        ariaHasPopup: "menu",
        ariaHidden: "undefined",
        ariaInvalid: "grammar",
        ariaKeyShortcuts: "application-shortcuts",
        ariaLabel: "Application message",
        ariaLabelledBy: "application-label",
        ariaLive: "polite",
        ariaOwns: "application-owns",
        ariaRelevant: "additions removals text",
        ariaRoleDescription: "Application role description",
      });
      assertType<CamelCaseAria<"awesomeapplication application">>({
        ariaActiveDescendant: "application-active-descendant",
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "application-controls",
        ariaCurrent: "location",
        ariaDescribedBy: "application-description",
        ariaDetails: "application-details",
        ariaDisabled: "true",
        ariaDropEffect: "copy",
        ariaErrorMessage: "application-error",
        ariaExpanded: "undefined",
        ariaFlowTo: "application-flow",
        ariaGrabbed: "undefined",
        ariaHasPopup: "menu",
        ariaHidden: "undefined",
        ariaInvalid: "grammar",
        ariaKeyShortcuts: "application-shortcuts",
        ariaLabel: "Application message",
        ariaLabelledBy: "application-label",
        ariaLive: "polite",
        ariaOwns: "application-owns",
        ariaRelevant: "additions removals text",
        ariaRoleDescription: "Application role description",
      });
    });
    it("should not allow invalid application role attributes", () => {
      assertType<CamelCaseAria<"application">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "application-controls",
        // @ts-expect-error - should not allow invalid attributes
        ariaRowCount: 1,
      });
      assertType<CamelCaseAria<"awesomeapplication application">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "application-controls",
        // @ts-expect-error - should not allow invalid attributes
        ariaRowCount: 1,
      });
    });
  });

  describe("article role", () => {
    it("should allow valid article role attributes", () => {
      assertType<CamelCaseAria<"article">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "article-controls",
        ariaCurrent: "location",
        ariaDescribedBy: "article-description",
        ariaDetails: "article-details",
        ariaDisabled: "true",
        ariaDropEffect: "copy",
        ariaErrorMessage: "article-error",
        ariaFlowTo: "article-flow",
        ariaGrabbed: "undefined",
        ariaHasPopup: "menu",
        ariaHidden: "undefined",
        ariaInvalid: "grammar",
        ariaKeyShortcuts: "article-shortcuts",
        ariaLabel: "Article message",
        ariaLabelledBy: "article-label",
        ariaLive: "polite",
        ariaOwns: "article-owns",
        ariaPosInSet: 1,
        ariaRelevant: "additions removals text",
        ariaRoleDescription: "Article role description",
        ariaSetSize: 1,
      });
      assertType<CamelCaseAria<"awesomearticle article">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "article-controls",
        ariaCurrent: "location",
        ariaDescribedBy: "article-description",
        ariaDetails: "article-details",
        ariaDisabled: "true",
        ariaDropEffect: "copy",
        ariaErrorMessage: "article-error",
        ariaFlowTo: "article-flow",
        ariaGrabbed: "undefined",
        ariaHasPopup: "menu",
        ariaHidden: "undefined",
        ariaInvalid: "grammar",
        ariaKeyShortcuts: "article-shortcuts",
        ariaLabel: "Article message",
        ariaLabelledBy: "article-label",
        ariaLive: "polite",
        ariaOwns: "article-owns",
        ariaPosInSet: 1,
        ariaRelevant: "additions removals text",
        ariaRoleDescription: "Article role description",
        ariaSetSize: 1,
      });
    });
    it("should not allow invalid article role attributes", () => {
      assertType<CamelCaseAria<"article">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "article-controls",
        // @ts-expect-error - should not allow invalid attributes
        ariaRowCount: 1,
      });
      assertType<CamelCaseAria<"awesomearticle article">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "article-controls",
        // @ts-expect-error - should not allow invalid attributes
        ariaRowCount: 1,
      });
    });
  });
  describe("banner role", () => {
    it("should allow valid banner role attributes", () => {
      assertType<CamelCaseAria<"banner">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "banner-controls",
        ariaCurrent: "location",
        ariaDescribedBy: "banner-description",
        ariaDetails: "banner-details",
        ariaDisabled: "true",
        ariaDropEffect: "copy",
        ariaErrorMessage: "banner-error",
        ariaFlowTo: "banner-flow",
        ariaGrabbed: "undefined",
        ariaHasPopup: "menu",
        ariaHidden: "undefined",
        ariaInvalid: "grammar",
        ariaKeyShortcuts: "banner-shortcuts",
        ariaLabel: "Banner message",
        ariaLabelledBy: "banner-label",
        ariaLive: "polite",
        ariaOwns: "banner-owns",
        ariaRelevant: "additions removals text",
        ariaRoleDescription: "Banner role description",
      });
      assertType<CamelCaseAria<"awesomebanner banner">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "banner-controls",
        ariaCurrent: "location",
        ariaDescribedBy: "banner-description",
        ariaDetails: "banner-details",
        ariaDisabled: "true",
        ariaDropEffect: "copy",
        ariaErrorMessage: "banner-error",
        ariaFlowTo: "banner-flow",
        ariaGrabbed: "undefined",
        ariaHasPopup: "menu",
        ariaHidden: "undefined",
        ariaInvalid: "grammar",
        ariaKeyShortcuts: "banner-shortcuts",
        ariaLabel: "Banner message",
        ariaLabelledBy: "banner-label",
        ariaLive: "polite",
        ariaOwns: "banner-owns",
        ariaRelevant: "additions removals text",
        ariaRoleDescription: "Banner role description",
      });
    });
    it("should not allow invalid banner role attributes", () => {
      assertType<CamelCaseAria<"banner">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "banner-controls",
        // @ts-expect-error - should not allow invalid attributes
        ariaRowCount: 1,
      });
      assertType<CamelCaseAria<"awesomebanner banner">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "banner-controls",
        // @ts-expect-error - should not allow invalid attributes
        ariaRowCount: 1,
      });
    });
  });
  describe("blockquote role", () => {
    it("should allow valid blockquote role attributes", () => {
      assertType<CamelCaseAria<"blockquote">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "blockquote-controls",
        ariaCurrent: "location",
        ariaDescribedBy: "blockquote-description",
        ariaDetails: "blockquote-details",
        ariaDisabled: "true",
        ariaDropEffect: "copy",
        ariaErrorMessage: "blockquote-error",
        ariaFlowTo: "blockquote-flow",
        ariaGrabbed: "undefined",
        ariaHasPopup: "menu",
        ariaHidden: "undefined",
        ariaInvalid: "grammar",
        ariaKeyShortcuts: "blockquote-shortcuts",
        ariaLabel: "Blockquote message",
        ariaLabelledBy: "blockquote-label",
        ariaLive: "polite",
        ariaOwns: "blockquote-owns",
        ariaRelevant: "additions removals text",
        ariaRoleDescription: "Blockquote role description",
      });
      assertType<CamelCaseAria<"awesomeblockquote blockquote">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "blockquote-controls",
        ariaCurrent: "location",
        ariaDescribedBy: "blockquote-description",
        ariaDetails: "blockquote-details",
        ariaDisabled: "true",
        ariaDropEffect: "copy",
        ariaErrorMessage: "blockquote-error",
        ariaFlowTo: "blockquote-flow",
        ariaGrabbed: "undefined",
        ariaHasPopup: "menu",
        ariaHidden: "undefined",
        ariaInvalid: "grammar",
        ariaKeyShortcuts: "blockquote-shortcuts",
        ariaLabel: "Blockquote message",
        ariaLabelledBy: "blockquote-label",
        ariaLive: "polite",
        ariaOwns: "blockquote-owns",
        ariaRelevant: "additions removals text",
        ariaRoleDescription: "Blockquote role description",
      });
    });
    it("should not allow invalid blockquote role attributes", () => {
      assertType<CamelCaseAria<"blockquote">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "blockquote-controls",
        // @ts-expect-error - should not allow invalid attributes
        ariaRowCount: 1,
      });
      assertType<CamelCaseAria<"awesomeblockquote blockquote">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "blockquote-controls",
        // @ts-expect-error - should not allow invalid attributes
        ariaRowCount: 1,
      });
    });
  });

  describe("button role", () => {
    it("should allow valid button role attributes", () => {
      assertType<CamelCaseAria<"button">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "button-controls",
        ariaCurrent: "location",
        ariaDescribedBy: "button-description",
        ariaDetails: "button-details",
        ariaDisabled: "true",
        ariaDropEffect: "copy",
        ariaErrorMessage: "button-error",
        ariaExpanded: "undefined",
        ariaFlowTo: "button-flow",
        ariaGrabbed: "undefined",
        ariaHasPopup: "menu",
        ariaHidden: "undefined",
        ariaInvalid: "grammar",
        ariaKeyShortcuts: "button-shortcuts",
        ariaLabel: "Button message",
        ariaLabelledBy: "button-label",
        ariaLive: "polite",
        ariaOwns: "button-owns",
        ariaPressed: "true",
        ariaRelevant: "additions removals text",
        ariaRoleDescription: "Button role description",
      });
      assertType<CamelCaseAria<"awesomebutton button">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "button-controls",
        ariaCurrent: "location",
        ariaDescribedBy: "button-description",
        ariaDetails: "button-details",
        ariaDisabled: "true",
        ariaDropEffect: "copy",
        ariaErrorMessage: "button-error",
        ariaExpanded: "undefined",
        ariaFlowTo: "button-flow",
        ariaGrabbed: "undefined",
        ariaHasPopup: "menu",
        ariaHidden: "undefined",
        ariaInvalid: "grammar",
        ariaKeyShortcuts: "button-shortcuts",
        ariaLabel: "Button message",
        ariaLabelledBy: "button-label",
        ariaLive: "polite",
        ariaOwns: "button-owns",
        ariaPressed: "true",
        ariaRelevant: "additions removals text",
        ariaRoleDescription: "Button role description",
      });
    });
    it("should not allow invalid button role attributes", () => {
      assertType<CamelCaseAria<"button">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "button-controls",
        // @ts-expect-error - should not allow invalid attributes
        ariaRowCount: 1,
      });
      assertType<CamelCaseAria<"awesomebutton button">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "button-controls",
        // @ts-expect-error - should not allow invalid attributes
        ariaRowCount: 1,
      });
    });
  });

  describe("caption role", () => {
    it("should allow valid caption role attributes", () => {
      assertType<CamelCaseAria<"caption">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "caption-controls",
        ariaCurrent: "location",
        ariaDescribedBy: "caption-description",
        ariaDetails: "caption-details",
        ariaDisabled: "true",
        ariaDropEffect: "copy",
        ariaErrorMessage: "caption-error",
        ariaFlowTo: "caption-flow",
        ariaGrabbed: "undefined",
        ariaHasPopup: "menu",
        ariaHidden: "undefined",
        ariaInvalid: "grammar",
        ariaKeyShortcuts: "caption-shortcuts",
        ariaLive: "polite",
        ariaOwns: "caption-owns",
        ariaRelevant: "additions removals text",
        ariaRoleDescription: "Caption role description",
      });
      assertType<CamelCaseAria<"awesomecaption caption">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "caption-controls",
        ariaCurrent: "location",
        ariaDescribedBy: "caption-description",
        ariaDetails: "caption-details",
        ariaDisabled: "true",
        ariaDropEffect: "copy",
        ariaErrorMessage: "caption-error",
        ariaFlowTo: "caption-flow",
        ariaGrabbed: "undefined",
        ariaHasPopup: "menu",
        ariaHidden: "undefined",
        ariaInvalid: "grammar",
        ariaKeyShortcuts: "caption-shortcuts",
        ariaLive: "polite",
        ariaOwns: "caption-owns",
        ariaRelevant: "additions removals text",
        ariaRoleDescription: "Caption role description",
      });
    });
    it("should not allow label and labelledBy attributes", () => {
      assertType<CamelCaseAria<"caption">>({
        // @ts-expect-error - should not allow label attribute
        ariaLabel: "Caption label",
      });
      assertType<CamelCaseAria<"caption">>({
        // @ts-expect-error - should not allow labelledby attribute
        ariaLabelledBy: "Caption label",
      });
    });

    it("should not allow invalid caption role attributes", () => {
      assertType<CamelCaseAria<"caption">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "caption-controls",
        // @ts-expect-error - should not allow invalid attributes
        ariaRowCount: 1,
      });
      assertType<CamelCaseAria<"awesomecaption caption">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "caption-controls",
        // @ts-expect-error - should not allow invalid attributes
        ariaRowCount: 1,
      });
    });
  });

  describe("cell role", () => {
    it("should allow valid cell role attributes", () => {
      assertType<CamelCaseAria<"cell">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "cell-controls",
        ariaColIndex: 1,
        ariaColSpan: 2,
        ariaCurrent: "location",
        ariaDescribedBy: "cell-description",
        ariaDetails: "cell-details",
        ariaDisabled: "true",
        ariaDropEffect: "copy",
        ariaErrorMessage: "cell-error",
        ariaFlowTo: "cell-flow",
        ariaGrabbed: "undefined",
        ariaHasPopup: "menu",
        ariaHidden: "undefined",
        ariaInvalid: "grammar",
        ariaKeyShortcuts: "cell-shortcuts",
        ariaLabel: "Cell message",
        ariaLabelledBy: "cell-label",
        ariaLive: "polite",
        ariaOwns: "cell-owns",
        ariaRelevant: "additions removals text",
        ariaRoleDescription: "Cell role description",
        ariaRowIndex: 1,
        ariaRowSpan: 2,
      });
      assertType<CamelCaseAria<"awesomecell cell">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "cell-controls",
        ariaColIndex: 1,
        ariaColSpan: 2,
        ariaCurrent: "location",
        ariaDescribedBy: "cell-description",
        ariaDetails: "cell-details",
        ariaDisabled: "true",
        ariaDropEffect: "copy",
        ariaErrorMessage: "cell-error",
        ariaFlowTo: "cell-flow",
        ariaGrabbed: "undefined",
        ariaHasPopup: "menu",
        ariaHidden: "undefined",
        ariaInvalid: "grammar",
        ariaKeyShortcuts: "cell-shortcuts",
        ariaLabel: "Cell message",
        ariaLabelledBy: "cell-label",
        ariaLive: "polite",
        ariaOwns: "cell-owns",
        ariaRelevant: "additions removals text",
        ariaRoleDescription: "Cell role description",
        ariaRowIndex: 1,
        ariaRowSpan: 2,
      });
    });
    it("should not allow invalid cell role attributes", () => {
      assertType<CamelCaseAria<"cell">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "cell-controls",
        // @ts-expect-error - should not allow invalid attributes
        ariaRowCount: 1,
      });
      assertType<CamelCaseAria<"awesomecell cell">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "cell-controls",
        // @ts-expect-error - should not allow invalid attributes
        ariaRowCount: 1,
      });
    });
  });
  describe("checkbox role", () => {
    it("should allow valid checkbox role attributes", () => {
      assertType<CamelCaseAria<"checkbox">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaChecked: "mixed",
        ariaControls: "checkbox-controls",
        ariaCurrent: "location",
        ariaDescribedBy: "checkbox-description",
        ariaDetails: "checkbox-details",
        ariaDisabled: "true",
        ariaDropEffect: "copy",
        ariaErrorMessage: "checkbox-error",
        ariaExpanded: "undefined",
        ariaFlowTo: "checkbox-flow",
        ariaGrabbed: "undefined",
        ariaHasPopup: "menu",
        ariaHidden: "undefined",
        ariaInvalid: "grammar",
        ariaKeyShortcuts: "checkbox-shortcuts",
        ariaLabel: "Checkbox message",
        ariaLabelledBy: "checkbox-label",
        ariaLive: "polite",
        ariaOwns: "checkbox-owns",
        ariaReadOnly: "true",
        ariaRelevant: "additions removals text",
        ariaRequired: "true",
        ariaRoleDescription: "Checkbox role description",
      });
      assertType<CamelCaseAria<"awesomecheckbox checkbox">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaChecked: "mixed",
        ariaControls: "checkbox-controls",
        ariaCurrent: "location",
        ariaDescribedBy: "checkbox-description",
        ariaDetails: "checkbox-details",
        ariaDisabled: "true",
        ariaDropEffect: "copy",
        ariaErrorMessage: "checkbox-error",
        ariaExpanded: "undefined",
        ariaFlowTo: "checkbox-flow",
        ariaGrabbed: "undefined",
        ariaHasPopup: "menu",
        ariaHidden: "undefined",
        ariaInvalid: "grammar",
        ariaKeyShortcuts: "checkbox-shortcuts",
        ariaLabel: "Checkbox message",
        ariaLabelledBy: "checkbox-label",
        ariaLive: "polite",
        ariaOwns: "checkbox-owns",
        ariaReadOnly: "true",
        ariaRelevant: "additions removals text",
        ariaRequired: "true",
        ariaRoleDescription: "Checkbox role description",
      });
    });
    it("should not allow invalid checkbox role attributes", () => {
      assertType<CamelCaseAria<"checkbox">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "checkbox-controls",
        // @ts-expect-error - should not allow invalid attributes
        ariaRowCount: 1,
      });
      assertType<CamelCaseAria<"awesomecheckbox checkbox">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "checkbox-controls",
        // @ts-expect-error - should not allow invalid attributes
        ariaRowCount: 1,
      });
    });
  });

  describe("code role", () => {
    it("should allow valid code role attributes", () => {
      assertType<CamelCaseAria<"code">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "code-controls",
        ariaCurrent: "location",
        ariaDescribedBy: "code-description",
        ariaDetails: "code-details",
        ariaDisabled: "true",
        ariaDropEffect: "copy",
        ariaErrorMessage: "code-error",
        ariaFlowTo: "code-flow",
        ariaGrabbed: "undefined",
        ariaHasPopup: "menu",
        ariaHidden: "undefined",
        ariaInvalid: "grammar",
        ariaKeyShortcuts: "code-shortcuts",
        ariaLive: "polite",
        ariaOwns: "code-owns",
        ariaRelevant: "additions removals text",
        ariaRoleDescription: "Code role description",
      });
      assertType<CamelCaseAria<"awesomecode code">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "code-controls",
        ariaDescribedBy: "code-description",
        ariaDetails: "code-details",
        ariaDisabled: "true",
        ariaDropEffect: "copy",
        ariaErrorMessage: "code-error",
        ariaFlowTo: "code-flow",
        ariaGrabbed: "undefined",
        ariaHasPopup: "menu",
        ariaHidden: "undefined",
        ariaInvalid: "grammar",
        ariaLive: "polite",
        ariaOwns: "code-owns",
        ariaRelevant: "additions removals text",
        ariaRoleDescription: "Code role description",
      });
    });
    it("should not allow label and labelledBy attributes", () => {
      assertType<CamelCaseAria<"code">>({
        // @ts-expect-error - should not allow label attribute
        ariaLabel: "Code label",
      });
      assertType<CamelCaseAria<"code">>({
        // @ts-expect-error - should not allow labelledby attribute
        ariaLabelledBy: "Code label",
      });
    });
    it("should not allow invalid code role attributes", () => {
      assertType<CamelCaseAria<"code">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "code-controls",
        // @ts-expect-error - should not allow invalid attributes
        ariaRowCount: 1,
      });
      assertType<CamelCaseAria<"awesomecode code">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "code-controls",
        // @ts-expect-error - should not allow invalid attributes
        ariaRowCount: 1,
      });
    });
  });

  describe("columnheader role", () => {
    it("should allow valid columnheader role attributes", () => {
      assertType<CamelCaseAria<"columnheader">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaColIndex: 1,
        ariaColSpan: 2,
        ariaControls: "columnheader-controls",
        ariaCurrent: "location",
        ariaDescribedBy: "columnheader-description",
        ariaDetails: "columnheader-details",
        ariaDisabled: "true",
        ariaDropEffect: "copy",
        ariaErrorMessage: "columnheader-error",
        ariaExpanded: "true",
        ariaFlowTo: "columnheader-flow",
        ariaGrabbed: "undefined",
        ariaHasPopup: "menu",
        ariaHidden: "undefined",
        ariaInvalid: "grammar",
        ariaKeyShortcuts: "columnheader-shortcuts",
        ariaLabel: "Column header message",
        ariaLabelledBy: "columnheader-label",
        ariaLive: "polite",
        ariaOwns: "columnheader-owns",
        ariaReadOnly: "true",
        ariaRelevant: "additions removals text",
        ariaRequired: "true",
        ariaRoleDescription: "Column header role description",
        ariaRowIndex: 1,
        ariaRowSpan: 2,
        ariaSelected: "undefined",
        ariaSort: "ascending",
      });
      assertType<CamelCaseAria<"awesomecolumnheader columnheader">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaColIndex: 1,
        ariaColSpan: 2,
        ariaControls: "columnheader-controls",
        ariaCurrent: "location",
        ariaDescribedBy: "columnheader-description",
        ariaDetails: "columnheader-details",
        ariaDisabled: "true",
        ariaDropEffect: "copy",
        ariaErrorMessage: "columnheader-error",
        ariaExpanded: "true",
        ariaFlowTo: "columnheader-flow",
        ariaGrabbed: "undefined",
        ariaHasPopup: "menu",
        ariaHidden: "undefined",
        ariaInvalid: "grammar",
        ariaKeyShortcuts: "columnheader-shortcuts",
        ariaLabel: "Column header message",
        ariaLabelledBy: "columnheader-label",
        ariaLive: "polite",
        ariaOwns: "columnheader-owns",
        ariaReadOnly: "true",
        ariaRelevant: "additions removals text",
        ariaRequired: "true",
        ariaRoleDescription: "Column header role description",
        ariaRowIndex: 1,
        ariaRowSpan: 2,
        ariaSelected: "undefined",
        ariaSort: "ascending",
      });
    });
    it("should not allow invalid columnheader role attributes", () => {
      assertType<CamelCaseAria<"columnheader">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "columnheader-controls",
        // @ts-expect-error - should not allow invalid attributes
        ariaRowCount: 1,
      });
      assertType<CamelCaseAria<"awesomecolumnheader columnheader">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "columnheader-controls",
        // @ts-expect-error - should not allow invalid attributes
        ariaRowCount: 1,
      });
    });
  });

  describe("combobox role", () => {
    it("should allow valid combobox role attributes", () => {
      assertType<CamelCaseAria<"combobox">>({
        ariaActiveDescendant: "combobox-active-descendant",
        ariaAtomic: true,
        ariaAutoComplete: "list",
        ariaBusy: false,
        ariaControls: "combobox-controls",
        ariaCurrent: "location",
        ariaDescribedBy: "combobox-description",
        ariaDetails: "combobox-details",
        ariaDisabled: "true",
        ariaDropEffect: "copy",
        ariaErrorMessage: "combobox-error",
        ariaExpanded: "undefined",
        ariaFlowTo: "combobox-flow",
        ariaGrabbed: "undefined",
        ariaHasPopup: "listbox",
        ariaHidden: "undefined",
        ariaInvalid: "grammar",
        ariaKeyShortcuts: "combobox-shortcuts",
        ariaLabel: "Combobox message",
        ariaLabelledBy: "combobox-label",
        ariaLive: "polite",
        ariaOwns: "combobox-owns",
        ariaReadOnly: true,
        ariaRelevant: "additions removals text",
        ariaRequired: true,
        ariaRoleDescription: "Combobox role description",
      });
      assertType<CamelCaseAria<"awesomecombobox combobox">>({
        ariaActiveDescendant: "combobox-active-descendant",
        ariaAtomic: true,
        ariaAutoComplete: "list",
        ariaBusy: false,
        ariaControls: "combobox-controls",
        ariaDescribedBy: "combobox-description",
        ariaDetails: "combobox-details",
        ariaDisabled: "true",
        ariaDropEffect: "copy",
        ariaErrorMessage: "combobox-error",
        ariaExpanded: "undefined",
        ariaFlowTo: "combobox-flow",
        ariaGrabbed: "undefined",
        ariaHasPopup: "listbox",
        ariaHidden: "undefined",
        ariaInvalid: "grammar",
        ariaKeyShortcuts: "combobox-shortcuts",
        ariaLabel: "Combobox message",
        ariaLabelledBy: "combobox-label",
        ariaLive: "polite",
        ariaOwns: "combobox-owns",
        ariaReadOnly: true,
        ariaRelevant: "additions removals text",
        ariaRequired: true,
      });
    });
    it("should not allow invalid combobox role attributes", () => {
      assertType<CamelCaseAria<"combobox">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "combobox-controls",
        // @ts-expect-error - should not allow invalid attributes
        ariaRowCount: 1,
      });
      assertType<CamelCaseAria<"awesomecombobox combobox">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "combobox-controls",
        // @ts-expect-error - should not allow invalid attributes
        ariaRowCount: 1,
      });
    });
  });
  describe("complementary role", () => {
    it("should allow valid complementary role attributes", () => {
      assertType<CamelCaseAria<"complementary">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "complementary-controls",
        ariaCurrent: "location",
        ariaDescribedBy: "complementary-description",
        ariaDetails: "complementary-details",
        ariaDisabled: "true",
        ariaDropEffect: "copy",
        ariaErrorMessage: "complementary-error",
        ariaFlowTo: "complementary-flow",
        ariaGrabbed: "undefined",
        ariaHasPopup: "menu",
        ariaHidden: "undefined",
        ariaInvalid: "grammar",
        ariaKeyShortcuts: "complementary-shortcuts",
        ariaLabel: "Complementary message",
        ariaLabelledBy: "complementary-label",
        ariaLive: "polite",
        ariaOwns: "complementary-owns",
        ariaRelevant: "additions removals text",
        ariaRoleDescription: "Complementary role description",
      });
      assertType<CamelCaseAria<"awesomecomplementary complementary">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "complementary-controls",
        ariaCurrent: "location",
        ariaDescribedBy: "complementary-description",
        ariaDetails: "complementary-details",
        ariaDisabled: "true",
        ariaDropEffect: "copy",
        ariaErrorMessage: "complementary-error",
        ariaFlowTo: "complementary-flow",
        ariaGrabbed: "undefined",
        ariaHasPopup: "menu",
        ariaHidden: "undefined",
        ariaInvalid: "grammar",
        ariaKeyShortcuts: "complementary-shortcuts",
        ariaLabel: "Complementary message",
        ariaLabelledBy: "complementary-label",
        ariaLive: "polite",
        ariaOwns: "complementary-owns",
        ariaRelevant: "additions removals text",
      });
    });
    it("should not allow invalid complementary role attributes", () => {
      assertType<CamelCaseAria<"complementary">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "complementary-controls",
        // @ts-expect-error - should not allow invalid attributes
        ariaRowCount: 1,
      });
      assertType<CamelCaseAria<"awesomecomplementary complementary">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "complementary-controls",
        // @ts-expect-error - should not allow invalid attributes
        ariaRowCount: 1,
      });
    });
  });

  describe("contentinfo role", () => {
    it("should allow valid contentinfo role attributes", () => {
      assertType<CamelCaseAria<"contentinfo">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "contentinfo-controls",
        ariaCurrent: "location",
        ariaDescribedBy: "contentinfo-description",
        ariaDetails: "contentinfo-details",
        ariaDisabled: "true",
        ariaDropEffect: "copy",
        ariaErrorMessage: "contentinfo-error",
        ariaFlowTo: "contentinfo-flow",
        ariaGrabbed: "undefined",
        ariaHasPopup: "menu",
        ariaHidden: "undefined",
        ariaInvalid: "grammar",
        ariaKeyShortcuts: "contentinfo-shortcuts",
        ariaLabel: "Content info message",
        ariaLabelledBy: "contentinfo-label",
        ariaLive: "polite",
        ariaOwns: "contentinfo-owns",
        ariaRelevant: "additions removals text",
        ariaRoleDescription: "Content info role description",
      });
      assertType<CamelCaseAria<"awesomecontentinfo contentinfo">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "contentinfo-controls",
        ariaCurrent: "location",
        ariaDescribedBy: "contentinfo-description",
        ariaDetails: "contentinfo-details",
        ariaDisabled: "true",
        ariaDropEffect: "copy",
        ariaErrorMessage: "contentinfo-error",
        ariaFlowTo: "contentinfo-flow",
        ariaGrabbed: "undefined",
        ariaHasPopup: "menu",
        ariaHidden: "undefined",
        ariaInvalid: "grammar",
        ariaKeyShortcuts: "contentinfo-shortcuts",
        ariaLabel: "Content info message",
        ariaLabelledBy: "contentinfo-label",
        ariaLive: "polite",
        ariaOwns: "contentinfo-owns",
        ariaRelevant: "additions removals text",
      });
    });
    it("should not allow invalid contentinfo role attributes", () => {
      assertType<CamelCaseAria<"contentinfo">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "contentinfo-controls",
        // @ts-expect-error - should not allow invalid attributes
        ariaRowCount: 1,
      });
      assertType<CamelCaseAria<"awesomecontentinfo contentinfo">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "contentinfo-controls",
        // @ts-expect-error - should not allow invalid attributes
        ariaRowCount: 1,
      });
    });
  });

  describe("definition role", () => {
    it("should allow valid definition role attributes", () => {
      assertType<CamelCaseAria<"definition">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "definition-controls",
        ariaCurrent: "location",
        ariaDescribedBy: "definition-description",
        ariaDetails: "definition-details",
        ariaDisabled: "true",
        ariaDropEffect: "copy",
        ariaErrorMessage: "definition-error",
        ariaFlowTo: "definition-flow",
        ariaGrabbed: "undefined",
        ariaHasPopup: "menu",
        ariaHidden: "undefined",
        ariaInvalid: "grammar",
        ariaKeyShortcuts: "definition-shortcuts",
        ariaLabel: "Definition message",
        ariaLabelledBy: "definition-label",
        ariaLive: "polite",
        ariaOwns: "definition-owns",
        ariaRelevant: "additions removals text",
        ariaRoleDescription: "Definition role description",
      });
      assertType<CamelCaseAria<"awesomedefinition definition">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "definition-controls",
        ariaCurrent: "location",
        ariaDescribedBy: "definition-description",
        ariaDetails: "definition-details",
        ariaDisabled: "true",
        ariaDropEffect: "copy",
        ariaErrorMessage: "definition-error",
        ariaFlowTo: "definition-flow",
        ariaGrabbed: "undefined",
        ariaHasPopup: "menu",
        ariaHidden: "undefined",
        ariaInvalid: "grammar",
        ariaKeyShortcuts: "definition-shortcuts",
        ariaLabel: "Definition message",
        ariaLabelledBy: "definition-label",
        ariaLive: "polite",
        ariaOwns: "definition-owns",
        ariaRelevant: "additions removals text",
      });
    });
    it("should not allow invalid definition role attributes", () => {
      assertType<CamelCaseAria<"definition">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "definition-controls",
        // @ts-expect-error - should not allow invalid attributes
        ariaRowCount: 1,
      });
      assertType<CamelCaseAria<"awesomedefinition definition">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "definition-controls",
        // @ts-expect-error - should not allow invalid attributes
        ariaRowCount: 1,
      });
    });
  });
  describe("deletion role", () => {
    it("should allow valid deletion role attributes", () => {
      assertType<CamelCaseAria<"deletion">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "deletion-controls",
        ariaCurrent: "location",
        ariaDescribedBy: "deletion-description",
        ariaDetails: "deletion-details",
        ariaDisabled: "true",
        ariaDropEffect: "copy",
        ariaErrorMessage: "deletion-error",
        ariaFlowTo: "deletion-flow",
        ariaGrabbed: "undefined",
        ariaHasPopup: "menu",
        ariaHidden: "undefined",
        ariaKeyShortcuts: "deletion-shortcuts",
        ariaInvalid: "grammar",
        ariaLive: "polite",
        ariaOwns: "deletion-owns",
        ariaRelevant: "additions removals text",
        ariaRoleDescription: "Deletion role description",
      });
      assertType<CamelCaseAria<"awesomedeletion deletion">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "deletion-controls",
        ariaCurrent: "location",
        ariaDescribedBy: "deletion-description",
        ariaDetails: "deletion-details",
        ariaDisabled: "true",
        ariaDropEffect: "copy",
        ariaErrorMessage: "deletion-error",
        ariaFlowTo: "deletion-flow",
        ariaGrabbed: "undefined",
        ariaHasPopup: "menu",
        ariaHidden: "undefined",
        ariaInvalid: "grammar",
        ariaKeyShortcuts: "deletion-shortcuts",
        ariaLive: "polite",
        ariaOwns: "deletion-owns",
        ariaRelevant: "additions removals text",
        ariaRoleDescription: "Deletion role description",
      });
    });
    it("should not allow label and labelledBy attributes", () => {
      assertType<CamelCaseAria<"deletion">>({
        // @ts-expect-error - should not allow label attribute
        ariaLabel: "Deletion label",
      });
      assertType<CamelCaseAria<"deletion">>({
        // @ts-expect-error - should not allow labelledby attribute
        ariaLabelledBy: "Deletion label",
      });
    });
    it("should not allow invalid deletion role attributes", () => {
      assertType<CamelCaseAria<"deletion">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "deletion-controls",
        // @ts-expect-error - should not allow invalid attributes
        ariaRowCount: 1,
      });
      assertType<CamelCaseAria<"awesomedeletion deletion">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "deletion-controls",
        // @ts-expect-error - should not allow invalid attributes
        ariaRowCount: 1,
      });
    });
  });

  describe("dialog role", () => {
    it("should allow valid dialog role attributes", () => {
      assertType<CamelCaseAria<"dialog">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "dialog-controls",
        ariaCurrent: "location",
        ariaDescribedBy: "dialog-description",
        ariaDetails: "dialog-details",
        ariaDisabled: "true",
        ariaDropEffect: "copy",
        ariaErrorMessage: "dialog-error",
        ariaFlowTo: "dialog-flow",
        ariaGrabbed: "undefined",
        ariaHasPopup: "menu",
        ariaHidden: "undefined",
        ariaInvalid: "grammar",
        ariaKeyShortcuts: "dialog-shortcuts",
        ariaLabel: "Dialog message",
        ariaLabelledBy: "dialog-label",
        ariaLive: "polite",
        ariaModal: "true",
        ariaOwns: "dialog-owns",
        ariaRelevant: "additions removals text",
        ariaRoleDescription: "Dialog role description",
      });
      assertType<CamelCaseAria<"awesomedialog dialog">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "dialog-controls",
        ariaCurrent: "location",
        ariaDescribedBy: "dialog-description",
        ariaDetails: "dialog-details",
        ariaDisabled: "true",
        ariaDropEffect: "copy",
        ariaErrorMessage: "dialog-error",
        ariaFlowTo: "dialog-flow",
        ariaGrabbed: "undefined",
        ariaHasPopup: "menu",
        ariaHidden: "undefined",
        ariaInvalid: "grammar",
        ariaKeyShortcuts: "dialog-shortcuts",
        ariaLabel: "Dialog message",
        ariaLabelledBy: "dialog-label",
        ariaLive: "polite",
        ariaModal: "true",
        ariaOwns: "dialog-owns",
        ariaRelevant: "additions removals text",
        ariaRoleDescription: "Dialog role description",
      });
    });
    it("should not allow invalid dialog role attributes", () => {
      assertType<CamelCaseAria<"dialog">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "dialog-controls",
        // @ts-expect-error - should not allow invalid attributes
        ariaRowCount: 1,
      });
      assertType<CamelCaseAria<"awesomedialog dialog">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "dialog-controls",
        // @ts-expect-error - should not allow invalid attributes
        ariaRowCount: 1,
      });
    });
  });
  describe("directory role", () => {
    it("should allow valid directory role attributes", () => {
      assertType<CamelCaseAria<"directory">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "directory-controls",
        ariaCurrent: "location",
        ariaDescribedBy: "directory-description",
        ariaDetails: "directory-details",
        ariaDisabled: "true",
        ariaDropEffect: "copy",
        ariaErrorMessage: "directory-error",
        ariaFlowTo: "directory-flow",
        ariaGrabbed: "undefined",
        ariaHasPopup: "menu",
        ariaHidden: "undefined",
        ariaInvalid: "grammar",
        ariaKeyShortcuts: "directory-shortcuts",
        ariaLabel: "Directory message",
        ariaLabelledBy: "directory-label",
        ariaLive: "polite",
        ariaOwns: "directory-owns",
        ariaRelevant: "additions removals text",
        ariaRoleDescription: "Directory role description",
      });
      assertType<CamelCaseAria<"awesomedirectory directory">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "directory-controls",
        ariaCurrent: "location",
        ariaDescribedBy: "directory-description",
        ariaDetails: "directory-details",
        ariaDisabled: "true",
        ariaDropEffect: "copy",
        ariaErrorMessage: "directory-error",
        ariaFlowTo: "directory-flow",
        ariaGrabbed: "undefined",
        ariaHasPopup: "menu",
        ariaHidden: "undefined",
        ariaInvalid: "grammar",
        ariaKeyShortcuts: "directory-shortcuts",
        ariaLabel: "Directory message",
        ariaLabelledBy: "directory-label",
        ariaLive: "polite",
        ariaOwns: "directory-owns",
      });
    });
    it("should not allow invalid directory role attributes", () => {
      assertType<CamelCaseAria<"directory">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "directory-controls",
        // @ts-expect-error - should not allow invalid attributes
        ariaRowCount: 1,
      });
      assertType<CamelCaseAria<"awesomedirectory directory">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "directory-controls",
        // @ts-expect-error - should not allow invalid attributes
        ariaRowCount: 1,
      });
    });
  });

  describe("document role", () => {
    it("should allow valid document role attributes", () => {
      assertType<CamelCaseAria<"document">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "document-controls",
        ariaCurrent: "location",
        ariaDescribedBy: "document-description",
        ariaDetails: "document-details",
        ariaDisabled: "true",
        ariaDropEffect: "copy",
        ariaErrorMessage: "document-error",
        ariaFlowTo: "document-flow",
        ariaGrabbed: "undefined",
        ariaHasPopup: "menu",
        ariaHidden: "undefined",
        ariaInvalid: "grammar",
        ariaKeyShortcuts: "document-shortcuts",
        ariaLabel: "Document message",
        ariaLabelledBy: "document-label",
        ariaLive: "polite",
        ariaOwns: "document-owns",
        ariaRelevant: "additions removals text",
        ariaRoleDescription: "Document role description",
      });
      assertType<CamelCaseAria<"awesomedocument document">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "document-controls",
        ariaCurrent: "location",
        ariaDescribedBy: "document-description",
        ariaDetails: "document-details",
        ariaDisabled: "true",
        ariaDropEffect: "copy",
        ariaErrorMessage: "document-error",
        ariaFlowTo: "document-flow",
        ariaGrabbed: "undefined",
        ariaHasPopup: "menu",
        ariaHidden: "undefined",
        ariaInvalid: "grammar",
        ariaKeyShortcuts: "document-shortcuts",
        ariaLabel: "Document message",
        ariaLabelledBy: "document-label",
        ariaLive: "polite",
        ariaOwns: "document-owns",
        ariaRelevant: "additions removals text",
        ariaRoleDescription: "Document role description",
      });
    });
    it("should not allow invalid document role attributes", () => {
      assertType<CamelCaseAria<"document">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "document-controls",
        // @ts-expect-error - should not allow invalid attributes
        ariaRowCount: 1,
      });
      assertType<CamelCaseAria<"awesomedocument document">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "document-controls",
        // @ts-expect-error - should not allow invalid attributes
        ariaRowCount: 1,
      });
    });
  });
  describe("emphasis role", () => {
    it("should allow valid emphasis role attributes", () => {
      assertType<CamelCaseAria<"emphasis">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "emphasis-controls",
        ariaCurrent: "location",
        ariaDescribedBy: "emphasis-description",
        ariaDetails: "emphasis-details",
        ariaDisabled: "true",
        ariaDropEffect: "copy",
        ariaErrorMessage: "emphasis-error",
        ariaFlowTo: "emphasis-flow",
        ariaGrabbed: "undefined",
        ariaHasPopup: "menu",
        ariaHidden: "undefined",
        ariaInvalid: "grammar",
        ariaKeyShortcuts: "emphasis-shortcuts",
        ariaLive: "polite",
        ariaOwns: "emphasis-owns",
        ariaRelevant: "additions removals text",
        ariaRoleDescription: "Emphasis role description",
      });
      assertType<CamelCaseAria<"awesomeemphasis emphasis">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "emphasis-controls",
        ariaCurrent: "location",
        ariaDescribedBy: "emphasis-description",
        ariaDetails: "emphasis-details",
        ariaDisabled: "true",
        ariaDropEffect: "copy",
        ariaErrorMessage: "emphasis-error",
        ariaFlowTo: "emphasis-flow",
        ariaGrabbed: "undefined",
        ariaHasPopup: "menu",
        ariaHidden: "undefined",
        ariaInvalid: "grammar",
        ariaKeyShortcuts: "emphasis-shortcuts",
        ariaLive: "polite",
        ariaOwns: "emphasis-owns",
        ariaRelevant: "additions removals text",
        ariaRoleDescription: "Emphasis role description",
      });
    });
    it("should not allow label and labelledBy attributes", () => {
      assertType<CamelCaseAria<"emphasis">>({
        // @ts-expect-error - should not allow label attribute
        ariaLabel: "Emphasis label",
      });
      assertType<CamelCaseAria<"emphasis">>({
        // @ts-expect-error - should not allow labelledby attribute
        ariaLabelledBy: "Emphasis label",
      });
    });
    it("should not allow invalid emphasis role attributes", () => {
      assertType<CamelCaseAria<"emphasis">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "emphasis-controls",
        // @ts-expect-error - should not allow invalid attributes
        ariaRowCount: 1,
      });
      assertType<CamelCaseAria<"awesomeemphasis emphasis">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "emphasis-controls",
        // @ts-expect-error - should not allow invalid attributes
        ariaRowCount: 1,
      });
    });
  });

  describe("feed role", () => {
    it("should allow valid feed role attributes", () => {
      assertType<CamelCaseAria<"feed">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "feed-controls",
        ariaCurrent: "location",
        ariaDescribedBy: "feed-description",
        ariaDetails: "feed-details",
        ariaDisabled: "true",
        ariaDropEffect: "copy",
        ariaErrorMessage: "feed-error",
        ariaFlowTo: "feed-flow",
        ariaGrabbed: "undefined",
        ariaHasPopup: "menu",
        ariaHidden: "undefined",
        ariaInvalid: "grammar",
        ariaKeyShortcuts: "feed-shortcuts",
        ariaLabel: "Feed message",
        ariaLabelledBy: "feed-label",
        ariaLive: "polite",
        ariaOwns: "feed-owns",
        ariaRelevant: "additions removals text",
        ariaRoleDescription: "Feed role description",
      });
      assertType<CamelCaseAria<"awesomefeed feed">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "feed-controls",
        ariaCurrent: "location",
        ariaDescribedBy: "feed-description",
        ariaDetails: "feed-details",
        ariaDisabled: "true",
        ariaDropEffect: "copy",
        ariaErrorMessage: "feed-error",
        ariaFlowTo: "feed-flow",
        ariaGrabbed: "undefined",
        ariaHasPopup: "menu",
        ariaHidden: "undefined",
        ariaInvalid: "grammar",
        ariaKeyShortcuts: "feed-shortcuts",
        ariaLabel: "Feed message",
        ariaLabelledBy: "feed-label",
        ariaLive: "polite",
        ariaOwns: "feed-owns",
        ariaRelevant: "additions removals text",
        ariaRoleDescription: "Feed role description",
      });
    });
    it("should not allow invalid feed role attributes", () => {
      assertType<CamelCaseAria<"feed">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "feed-controls",
        // @ts-expect-error - should not allow invalid attributes
        ariaRowCount: 1,
      });
      assertType<CamelCaseAria<"awesomefeed feed">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "feed-controls",
        // @ts-expect-error - should not allow invalid attributes
        ariaRowCount: 1,
      });
    });
  });
  describe("figure role", () => {
    it("should allow valid figure role attributes", () => {
      assertType<CamelCaseAria<"figure">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "figure-controls",
        ariaCurrent: "location",
        ariaDescribedBy: "figure-description",
        ariaDetails: "figure-details",
        ariaDisabled: "true",
        ariaDropEffect: "copy",
        ariaErrorMessage: "figure-error",
        ariaFlowTo: "figure-flow",
        ariaGrabbed: "undefined",
        ariaHasPopup: "menu",
        ariaHidden: "undefined",
        ariaInvalid: "grammar",
        ariaKeyShortcuts: "figure-shortcuts",
        ariaLabel: "Figure message",
        ariaLabelledBy: "figure-label",
        ariaLive: "polite",
        ariaOwns: "figure-owns",
        ariaRelevant: "additions removals text",
        ariaRoleDescription: "Figure role description",
      });
      assertType<CamelCaseAria<"awesomefigure figure">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "figure-controls",
        ariaCurrent: "location",
        ariaDescribedBy: "figure-description",
        ariaDetails: "figure-details",
        ariaDisabled: "true",
        ariaDropEffect: "copy",
        ariaErrorMessage: "figure-error",
        ariaFlowTo: "figure-flow",
        ariaGrabbed: "undefined",
        ariaHasPopup: "menu",
        ariaHidden: "undefined",
        ariaInvalid: "grammar",
        ariaKeyShortcuts: "figure-shortcuts",
        ariaLabel: "Figure message",
        ariaLabelledBy: "figure-label",
        ariaLive: "polite",
        ariaOwns: "figure-owns",
        ariaRelevant: "additions removals text",
        ariaRoleDescription: "Figure role description",
      });
    });
    it("should not allow invalid figure role attributes", () => {
      assertType<CamelCaseAria<"figure">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "figure-controls",
        // @ts-expect-error - should not allow invalid attributes
        ariaRowCount: 1,
      });
      assertType<CamelCaseAria<"awesomefigure figure">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "figure-controls",
        // @ts-expect-error - should not allow invalid attributes
        ariaRowCount: 1,
      });
    });
  });

  describe("form role", () => {
    it("should allow valid form role attributes", () => {
      assertType<CamelCaseAria<"form">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "form-controls",
        ariaCurrent: "location",
        ariaDescribedBy: "form-description",
        ariaDetails: "form-details",
        ariaDisabled: "true",
        ariaDropEffect: "copy",
        ariaErrorMessage: "form-error",
        ariaFlowTo: "form-flow",
        ariaGrabbed: "undefined",
        ariaHasPopup: "menu",
        ariaHidden: "undefined",
        ariaInvalid: "grammar",
        ariaKeyShortcuts: "form-shortcuts",
        ariaLabel: "Form message",
        ariaLabelledBy: "form-label",
        ariaLive: "polite",
        ariaOwns: "form-owns",
        ariaRelevant: "additions removals text",
        ariaRoleDescription: "Form role description",
      });
      assertType<CamelCaseAria<"awesomeform form">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "form-controls",
        ariaCurrent: "location",
        ariaDescribedBy: "form-description",
        ariaDetails: "form-details",
        ariaDisabled: "true",
        ariaDropEffect: "copy",
        ariaErrorMessage: "form-error",
        ariaFlowTo: "form-flow",
        ariaGrabbed: "undefined",
        ariaHasPopup: "menu",
        ariaHidden: "undefined",
        ariaInvalid: "grammar",
        ariaKeyShortcuts: "form-shortcuts",
        ariaLabel: "Form message",
        ariaLabelledBy: "form-label",
        ariaLive: "polite",
        ariaOwns: "form-owns",
        ariaRelevant: "additions removals text",
        ariaRoleDescription: "Form role description",
      });
    });
    it("should not allow invalid form role attributes", () => {
      assertType<CamelCaseAria<"form">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "form-controls",
        // @ts-expect-error - should not allow invalid attributes
        ariaRowCount: 1,
      });
      assertType<CamelCaseAria<"awesomeform form">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "form-controls",
        // @ts-expect-error - should not allow invalid attributes
        ariaRowCount: 1,
      });
    });
  });

  describe("generic role", () => {
    it("should allow valid generic role attributes", () => {
      assertType<CamelCaseAria<"generic">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "generic-controls",
        ariaCurrent: "location",
        ariaDescribedBy: "generic-description",
        ariaDetails: "generic-details",
        ariaDisabled: "true",
        ariaDropEffect: "copy",
        ariaErrorMessage: "generic-error",
        ariaFlowTo: "generic-flow",
        ariaGrabbed: "undefined",
        ariaHasPopup: "menu",
        ariaHidden: "undefined",
        ariaInvalid: "grammar",
        ariaKeyShortcuts: "generic-shortcuts",
        ariaLive: "polite",
        ariaOwns: "generic-owns",
        ariaRelevant: "additions removals text",
      });
      assertType<CamelCaseAria<"awesomegeneric generic">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "generic-controls",
        ariaCurrent: "location",
        ariaDescribedBy: "generic-description",
        ariaDetails: "generic-details",
        ariaDisabled: "true",
        ariaDropEffect: "copy",
        ariaErrorMessage: "generic-error",
        ariaFlowTo: "generic-flow",
        ariaGrabbed: "undefined",
        ariaHasPopup: "menu",
        ariaHidden: "undefined",
        ariaInvalid: "grammar",
        ariaKeyShortcuts: "generic-shortcuts",
        ariaLive: "polite",
        ariaOwns: "generic-owns",
        ariaRelevant: "additions removals text",
      });
    });
    it("should not allow label, labelledBy and roleDescription attributes", () => {
      assertType<CamelCaseAria<"generic">>({
        // @ts-expect-error - should not allow label attribute
        ariaLabel: "Generic label",
      });
      assertType<CamelCaseAria<"generic">>({
        // @ts-expect-error - should not allow labelledby attribute
        ariaLabelledBy: "Generic label",
      });
      assertType<CamelCaseAria<"generic">>({
        // @ts-expect-error - should not allow roleDescription attribute
        ariaRoleDescription: "Generic role description",
      });
    });
    it("should not allow invalid generic role attributes", () => {
      assertType<CamelCaseAria<"generic">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "generic-controls",
        // @ts-expect-error - should not allow invalid attributes
        ariaRowCount: 1,
      });
      assertType<CamelCaseAria<"awesomegeneric generic">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "generic-controls",
        // @ts-expect-error - should not allow invalid attributes
        ariaRowCount: 1,
      });
    });
  });

  describe("grid role", () => {
    it("should allow valid grid role attributes", () => {
      assertType<CamelCaseAria<"grid">>({
        ariaActiveDescendant: "grid-active-descendant",
        ariaAtomic: true,
        ariaBusy: false,
        ariaColCount: 3,
        ariaControls: "grid-controls",
        ariaCurrent: "location",
        ariaDescribedBy: "grid-description",
        ariaDetails: "grid-details",
        ariaDisabled: "true",
        ariaDropEffect: "copy",
        ariaErrorMessage: "grid-error",
        ariaFlowTo: "grid-flow",
        ariaGrabbed: "undefined",
        ariaHasPopup: "menu",
        ariaHidden: "undefined",
        ariaInvalid: "grammar",
        ariaKeyShortcuts: "grid-shortcuts",
        ariaLabel: "Grid message",
        ariaLabelledBy: "grid-label",
        ariaLive: "polite",
        ariaMultiSelectable: true,
        ariaOwns: "grid-owns",
        ariaReadOnly: true,
        ariaRelevant: "additions removals text",
        ariaRoleDescription: "Grid role description",
        ariaRowCount: 2,
      });
      assertType<CamelCaseAria<"awesomegrid grid">>({
        ariaActiveDescendant: "grid-active-descendant",
        ariaAtomic: true,
        ariaBusy: false,
        ariaColCount: 3,
        ariaControls: "grid-controls",
        ariaCurrent: "location",
        ariaDescribedBy: "grid-description",
        ariaDetails: "grid-details",
        ariaDisabled: "true",
        ariaDropEffect: "copy",
        ariaErrorMessage: "grid-error",
        ariaFlowTo: "grid-flow",
        ariaGrabbed: "undefined",
        ariaHasPopup: "menu",
        ariaHidden: "undefined",
        ariaInvalid: "grammar",
        ariaKeyShortcuts: "grid-shortcuts",
        ariaLabel: "Grid message",
        ariaLabelledBy: "grid-label",
        ariaLive: "polite",
        ariaMultiSelectable: true,
        ariaOwns: "grid-owns",
        ariaRelevant: "additions removals text",
        ariaReadOnly: true,
        ariaRoleDescription: "Grid role description",
        ariaRowCount: 2,
      });
    });
    it("should not allow invalid grid role attributes", () => {
      assertType<CamelCaseAria<"grid">>({
        ariaActiveDescendant: "grid-active-descendant",
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "grid-controls",
        // @ts-expect-error - should not allow invalid attributes
        ariaRowIndex: 1,
      });
      assertType<CamelCaseAria<"awesomegrid grid">>({
        ariaActiveDescendant: "grid-active-descendant",
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "grid-controls",
        // @ts-expect-error - should not allow invalid attributes
        ariaRowSpan: 1,
      });
    });
  });

  describe("gridcell role", () => {
    it("should allow valid gridcell role attributes", () => {
      assertType<CamelCaseAria<"gridcell">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaColIndex: 1,
        ariaColSpan: 2,
        ariaControls: "gridcell-controls",
        ariaCurrent: "location",
        ariaDescribedBy: "gridcell-description",
        ariaDetails: "gridcell-details",
        ariaDisabled: "true",
        ariaDropEffect: "copy",
        ariaErrorMessage: "gridcell-error",
        ariaExpanded: "undefined",
        ariaFlowTo: "gridcell-flow",
        ariaGrabbed: "undefined",
        ariaHasPopup: "menu",
        ariaHidden: "undefined",
        ariaInvalid: "grammar",
        ariaKeyShortcuts: "gridcell-shortcuts",
        ariaLabel: "Grid cell message",
        ariaLabelledBy: "gridcell-label",
        ariaLive: "polite",
        ariaOwns: "gridcell-owns",
        ariaReadOnly: true,
        ariaRequired: true,
        ariaRelevant: "additions removals text",
        ariaRoleDescription: "Grid cell role description",
        ariaSelected: true,
      });
      assertType<CamelCaseAria<"awesomegridcell gridcell">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaColIndex: 1,
        ariaColSpan: 2,
        ariaControls: "gridcell-controls",
        ariaCurrent: "location",
        ariaDescribedBy: "gridcell-description",
        ariaDetails: "gridcell-details",
        ariaDisabled: "true",
        ariaDropEffect: "copy",
        ariaErrorMessage: "gridcell-error",
        ariaExpanded: "undefined",
        ariaFlowTo: "gridcell-flow",
        ariaGrabbed: "undefined",
        ariaHasPopup: "menu",
        ariaHidden: "undefined",
        ariaInvalid: "grammar",
        ariaKeyShortcuts: "gridcell-shortcuts",
        ariaLabel: "Grid cell message",
        ariaLabelledBy: "gridcell-label",
        ariaLive: "polite",
        ariaOwns: "gridcell-owns",
        ariaReadOnly: true,
        ariaRequired: true,
        ariaRelevant: "additions removals text",
        ariaRoleDescription: "Grid cell role description",
        ariaSelected: true,
      });
    });
    it("should not allow invalid gridcell role attributes", () => {
      assertType<CamelCaseAria<"gridcell">>({
        // @ts-expect-error - should not allow invalid attributes
        ariaActiveDescendant: "gridcell-active-descendant",
      });
      assertType<CamelCaseAria<"awesomegridcell gridcell">>({
        // @ts-expect-error - should not allow invalid attributes
        ariaActiveDescendant: "gridcell-active-descendant",
      });
    });
  });

  describe("group role", () => {
    it("should allow valid group role attributes", () => {
      assertType<CamelCaseAria<"group">>({
        ariaActiveDescendant: "group-active-descendant",
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "group-controls",
        ariaCurrent: "location",
        ariaDescribedBy: "group-description",
        ariaDetails: "group-details",
        ariaDisabled: "true",
        ariaDropEffect: "copy",
        ariaErrorMessage: "group-error",
        ariaFlowTo: "group-flow",
        ariaGrabbed: "undefined",
        ariaHasPopup: "menu",
        ariaHidden: "undefined",
        ariaInvalid: "grammar",
        ariaKeyShortcuts: "group-shortcuts",
        ariaLabel: "Group message",
        ariaLabelledBy: "group-label",
        ariaLive: "polite",
        ariaOwns: "group-owns",
        ariaRelevant: "additions removals text",
        ariaRoleDescription: "Group role description",
      });
      assertType<CamelCaseAria<"awesomegroup group">>({
        ariaActiveDescendant: "group-active-descendant",
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "group-controls",
        ariaCurrent: "location",
        ariaDescribedBy: "group-description",
        ariaDetails: "group-details",
        ariaDisabled: "true",
        ariaDropEffect: "copy",
        ariaErrorMessage: "group-error",
        ariaFlowTo: "group-flow",
        ariaGrabbed: "undefined",
        ariaHasPopup: "menu",
        ariaHidden: "undefined",
        ariaInvalid: "grammar",
        ariaKeyShortcuts: "group-shortcuts",
        ariaLabel: "Group message",
        ariaLabelledBy: "group-label",
        ariaLive: "polite",
        ariaOwns: "group-owns",
        ariaRelevant: "additions removals text",
        ariaRoleDescription: "Group role description",
      });
    });
    it("should not allow invalid group role attributes", () => {
      assertType<CamelCaseAria<"group">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "group-controls",
        // @ts-expect-error - should not allow invalid attributes
        ariaRowCount: 1,
      });
      assertType<CamelCaseAria<"awesomegroup group">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "group-controls",
        // @ts-expect-error - should not allow invalid attributes
        ariaRowCount: 1,
      });
    });
  });

  describe("heading role", () => {
    it("should allow valid heading role attributes", () => {
      assertType<CamelCaseAria<"heading">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "heading-controls",
        ariaCurrent: "location",
        ariaDescribedBy: "heading-description",
        ariaDetails: "heading-details",
        ariaDisabled: "true",
        ariaDropEffect: "copy",
        ariaErrorMessage: "heading-error",
        ariaFlowTo: "heading-flow",
        ariaGrabbed: "undefined",
        ariaHasPopup: "menu",
        ariaHidden: "undefined",
        ariaInvalid: "grammar",
        ariaKeyShortcuts: "heading-shortcuts",
        ariaLabel: "Heading message",
        ariaLabelledBy: "heading-label",
        ariaLive: "polite",
        ariaOwns: "heading-owns",
        ariaRelevant: "additions removals text",
        ariaRoleDescription: "Heading role description",
      });
      assertType<CamelCaseAria<"awesomeheading heading">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "heading-controls",
        ariaCurrent: "location",
        ariaDescribedBy: "heading-description",
        ariaDetails: "heading-details",
        ariaDisabled: "true",
        ariaDropEffect: "copy",
        ariaErrorMessage: "heading-error",
        ariaFlowTo: "heading-flow",
        ariaGrabbed: "undefined",
        ariaHasPopup: "menu",
        ariaHidden: "undefined",
        ariaInvalid: "grammar",
        ariaKeyShortcuts: "heading-shortcuts",
        ariaLabel: "Heading message",
        ariaLabelledBy: "heading-label",
        ariaLive: "polite",
        ariaOwns: "heading-owns",
        ariaRelevant: "additions removals text",
        ariaRoleDescription: "Heading role description",
      });
    });
    it("should not allow invalid heading role attributes", () => {
      assertType<CamelCaseAria<"heading">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "heading-controls",
        // @ts-expect-error - should not allow invalid attributes
        ariaRowCount: 1,
      });
      assertType<CamelCaseAria<"awesomeheading heading">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "heading-controls",
        // @ts-expect-error - should not allow invalid attributes
        ariaRowCount: 1,
      });
    });
  });

  describe("img role", () => {
    it("should allow valid img role attributes", () => {
      assertType<CamelCaseAria<"img">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "img-controls",
        ariaCurrent: "location",
        ariaDescribedBy: "img-description",
        ariaDetails: "img-details",
        ariaDisabled: "true",
        ariaDropEffect: "copy",
        ariaErrorMessage: "img-error",
        ariaFlowTo: "img-flow",
        ariaGrabbed: "undefined",
        ariaHasPopup: "menu",
        ariaHidden: "undefined",
        ariaInvalid: "grammar",
        ariaKeyShortcuts: "img-shortcuts",
        ariaLabel: "Image message",
        ariaLabelledBy: "img-label",
        ariaLive: "polite",
        ariaOwns: "img-owns",
        ariaRelevant: "additions removals text",
        ariaRoleDescription: "Image role description",
      });
      assertType<CamelCaseAria<"awesomeimg img">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "img-controls",
        ariaCurrent: "location",
        ariaDescribedBy: "img-description",
        ariaDetails: "img-details",
        ariaDisabled: "true",
        ariaDropEffect: "copy",
        ariaErrorMessage: "img-error",
        ariaFlowTo: "img-flow",
        ariaGrabbed: "undefined",
        ariaHasPopup: "menu",
        ariaHidden: "undefined",
        ariaInvalid: "grammar",
        ariaKeyShortcuts: "img-shortcuts",
        ariaLabel: "Image message",
        ariaLabelledBy: "img-label",
        ariaLive: "polite",
        ariaOwns: "img-owns",
        ariaRelevant: "additions removals text",
        ariaRoleDescription: "Image role description",
      });
    });
    it("should not allow invalid img role attributes", () => {
      assertType<CamelCaseAria<"img">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "img-controls",
        // @ts-expect-error - should not allow invalid attributes
        ariaRowCount: 1,
      });
      assertType<CamelCaseAria<"awesomeimg img">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "img-controls",
        // @ts-expect-error - should not allow invalid attributes
        ariaRowCount: 1,
      });
    });
  });
  describe("insertion role", () => {
    it("should allow valid insertion role attributes", () => {
      assertType<CamelCaseAria<"insertion">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "insertion-controls",
        ariaCurrent: "location",
        ariaDescribedBy: "insertion-description",
        ariaDetails: "insertion-details",
        ariaDisabled: "true",
        ariaDropEffect: "copy",
        ariaErrorMessage: "insertion-error",
        ariaFlowTo: "insertion-flow",
        ariaGrabbed: "undefined",
        ariaHasPopup: "menu",
        ariaHidden: "undefined",
        ariaInvalid: "grammar",
        ariaKeyShortcuts: "insertion-shortcuts",
        ariaLive: "polite",
        ariaOwns: "insertion-owns",
        ariaRelevant: "additions removals text",
        ariaRoleDescription: "Insertion role description",
      });
      assertType<CamelCaseAria<"awesomeinsertion insertion">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "insertion-controls",
        ariaCurrent: "location",
        ariaDescribedBy: "insertion-description",
        ariaDetails: "insertion-details",
        ariaDisabled: "true",
        ariaDropEffect: "copy",
        ariaErrorMessage: "insertion-error",
        ariaFlowTo: "insertion-flow",
        ariaGrabbed: "undefined",
        ariaHasPopup: "menu",
        ariaHidden: "undefined",
        ariaInvalid: "grammar",
        ariaKeyShortcuts: "insertion-shortcuts",
        ariaLive: "polite",
        ariaOwns: "insertion-owns",
        ariaRelevant: "additions removals text",
        ariaRoleDescription: "Insertion role description",
      });
    });
    it("should not allow label and labelledBy attributes", () => {
      assertType<CamelCaseAria<"insertion">>({
        // @ts-expect-error - should not allow label attribute
        ariaLabel: "Insertion label",
      });
      assertType<CamelCaseAria<"insertion">>({
        // @ts-expect-error - should not allow labelledby attribute
        ariaLabelledBy: "Insertion label",
      });
    });
  });
  describe("link role", () => {
    it("should allow valid link role attributes", () => {
      assertType<CamelCaseAria<"link">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "link-controls",
        ariaCurrent: "location",
        ariaDescribedBy: "link-description",
        ariaDetails: "link-details",
        ariaDisabled: "true",
        ariaDropEffect: "copy",
        ariaErrorMessage: "link-error",
        ariaExpanded: "undefined",
        ariaFlowTo: "link-flow",
        ariaGrabbed: "undefined",
        ariaHasPopup: "menu",
        ariaHidden: "undefined",
        ariaInvalid: "grammar",
        ariaKeyShortcuts: "link-shortcuts",
        ariaLabel: "Link message",
        ariaLabelledBy: "link-label",
        ariaLive: "polite",
        ariaOwns: "link-owns",
        ariaRelevant: "additions removals text",
        ariaRoleDescription: "Link role description",
      });
      assertType<CamelCaseAria<"awesomelink link">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "link-controls",
        ariaCurrent: "location",
        ariaDescribedBy: "link-description",
        ariaDetails: "link-details",
        ariaDisabled: "true",
        ariaDropEffect: "copy",
        ariaErrorMessage: "link-error",
        ariaExpanded: "undefined",
        ariaFlowTo: "link-flow",
        ariaGrabbed: "undefined",
        ariaHasPopup: "menu",
        ariaHidden: "undefined",
        ariaInvalid: "grammar",
        ariaKeyShortcuts: "link-shortcuts",
        ariaLabel: "Link message",
        ariaLabelledBy: "link-label",
        ariaLive: "polite",
        ariaOwns: "link-owns",
        ariaRelevant: "additions removals text",
        ariaRoleDescription: "Link role description",
      });
    });
    it("should not allow invalid link role attributes", () => {
      assertType<CamelCaseAria<"link">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "link-controls",
        // @ts-expect-error - should not allow invalid attributes
        ariaRowCount: 1,
      });
      assertType<CamelCaseAria<"awesomelink link">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "link-controls",
        // @ts-expect-error - should not allow invalid attributes
        ariaRowCount: 1,
      });
    });
  });

  describe("list role", () => {
    it("should allow valid list role attributes", () => {
      assertType<CamelCaseAria<"list">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "list-controls",
        ariaCurrent: "location",
        ariaDescribedBy: "list-description",
        ariaDetails: "list-details",
        ariaDisabled: "true",
        ariaDropEffect: "copy",
        ariaErrorMessage: "list-error",
        ariaFlowTo: "list-flow",
        ariaGrabbed: "undefined",
        ariaHasPopup: "menu",
        ariaHidden: "undefined",
        ariaInvalid: "grammar",
        ariaKeyShortcuts: "list-shortcuts",
        ariaLabel: "List message",
        ariaLabelledBy: "list-label",
        ariaLive: "polite",
        ariaOwns: "list-owns",
        ariaRelevant: "additions removals text",
        ariaRoleDescription: "List role description",
      });
      assertType<CamelCaseAria<"awesomelist list">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "list-controls",
        ariaCurrent: "location",
        ariaDescribedBy: "list-description",
        ariaDetails: "list-details",
        ariaDisabled: "true",
        ariaDropEffect: "copy",
        ariaErrorMessage: "list-error",
        ariaFlowTo: "list-flow",
        ariaGrabbed: "undefined",
        ariaHasPopup: "menu",
        ariaHidden: "undefined",
        ariaInvalid: "grammar",
        ariaKeyShortcuts: "list-shortcuts",
        ariaLabel: "List message",
        ariaLabelledBy: "list-label",
        ariaLive: "polite",
        ariaOwns: "list-owns",
        ariaRelevant: "additions removals text",
        ariaRoleDescription: "List role description",
      });
    });
    it("should not allow invalid list role attributes", () => {
      assertType<CamelCaseAria<"list">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "list-controls",
        // @ts-expect-error - should not allow invalid attributes
        ariaRowCount: 1,
      });
      assertType<CamelCaseAria<"awesomelist list">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "list-controls",
        // @ts-expect-error - should not allow invalid attributes
        ariaRowCount: 1,
      });
    });
  });

  describe("listbox role", () => {
    it("should allow valid listbox role attributes", () => {
      assertType<CamelCaseAria<"listbox">>({
        ariaActiveDescendant: "listbox-active-descendant",
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "listbox-controls",
        ariaCurrent: "location",
        ariaDescribedBy: "listbox-description",
        ariaDetails: "listbox-details",
        ariaDisabled: "true",
        ariaDropEffect: "copy",
        ariaErrorMessage: "listbox-error",
        ariaExpanded: "undefined",
        ariaFlowTo: "listbox-flow",
        ariaGrabbed: "undefined",
        ariaHasPopup: "menu",
        ariaHidden: "undefined",
        ariaInvalid: "grammar",
        ariaKeyShortcuts: "listbox-shortcuts",
        ariaLabel: "Listbox message",
        ariaLabelledBy: "listbox-label",
        ariaLive: "polite",
        ariaMultiSelectable: true,
        ariaOwns: "listbox-owns",
        ariaReadOnly: true,
        ariaRelevant: "additions removals text",
        ariaRoleDescription: "Listbox role description",
      });
      assertType<CamelCaseAria<"awesomelistbox listbox">>({
        ariaActiveDescendant: "listbox-active-descendant",
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "listbox-controls",
        ariaCurrent: "location",
        ariaDescribedBy: "listbox-description",
        ariaDetails: "listbox-details",
        ariaDisabled: "true",
        ariaDropEffect: "copy",
        ariaErrorMessage: "listbox-error",
        ariaExpanded: "undefined",
        ariaFlowTo: "listbox-flow",
        ariaGrabbed: "undefined",
        ariaHasPopup: "menu",
        ariaHidden: "undefined",
        ariaInvalid: "grammar",
        ariaKeyShortcuts: "listbox-shortcuts",
        ariaLabel: "Listbox message",
        ariaLabelledBy: "listbox-label",
        ariaLive: "polite",
        ariaMultiSelectable: true,
        ariaOwns: "listbox-owns",
        ariaReadOnly: true,
        ariaRelevant: "additions removals text",
        ariaRoleDescription: "Listbox role description",
      });
    });
    it("should not allow invalid listbox role attributes", () => {
      assertType<CamelCaseAria<"listbox">>({
        ariaActiveDescendant: "listbox-active-descendant",
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "listbox-controls",
        // @ts-expect-error - should not allow invalid attributes
        ariaRowIndex: 1,
      });
      assertType<CamelCaseAria<"awesomelistbox listbox">>({
        ariaActiveDescendant: "listbox-active-descendant",
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "listbox-controls",
        // @ts-expect-error - should not allow invalid attributes
        ariaRowSpan: 1,
      });
    });
  });
  describe("listitem role", () => {
    it("should allow valid listitem role attributes", () => {
      assertType<CamelCaseAria<"listitem">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "listitem-controls",
        ariaCurrent: "location",
        ariaDescribedBy: "listitem-description",
        ariaDetails: "listitem-details",
        ariaDisabled: "true",
        ariaDropEffect: "copy",
        ariaErrorMessage: "listitem-error",
        ariaFlowTo: "listitem-flow",
        ariaGrabbed: "undefined",
        ariaHasPopup: "menu",
        ariaHidden: "undefined",
        ariaInvalid: "grammar",
        ariaKeyShortcuts: "listitem-shortcuts",
        ariaLabel: "List item message",
        ariaLabelledBy: "listitem-label",
        ariaLevel: 1,
        ariaLive: "polite",
        ariaOwns: "listitem-owns",
        ariaPosInSet: 1,
        ariaRelevant: "additions removals text",
        ariaRoleDescription: "List item role description",
        ariaSetSize: 3,
      });
      assertType<CamelCaseAria<"awesomelistitem listitem">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "listitem-controls",
        ariaCurrent: "location",
        ariaDescribedBy: "listitem-description",
        ariaDetails: "listitem-details",
        ariaDisabled: "true",
        ariaDropEffect: "copy",
        ariaErrorMessage: "listitem-error",
        ariaFlowTo: "listitem-flow",
        ariaGrabbed: "undefined",
        ariaHasPopup: "menu",
        ariaHidden: "undefined",
        ariaInvalid: "grammar",
        ariaKeyShortcuts: "listitem-shortcuts",
        ariaLabel: "List item message",
        ariaLabelledBy: "listitem-label",
        ariaLevel: 1,
        ariaLive: "polite",
        ariaOwns: "listitem-owns",
        ariaPosInSet: 1,
        ariaRelevant: "additions removals text",
        ariaRoleDescription: "List item role description",
        ariaSetSize: 3,
      });
    });
    it("should not allow invalid listitem role attributes", () => {
      assertType<CamelCaseAria<"listitem">>({
        // @ts-expect-error - should not allow invalid attributes
        ariaActiveDescendant: "listitem-active-descendant",
      });
      assertType<CamelCaseAria<"awesomelistitem listitem">>({
        // @ts-expect-error - should not allow
        ariaActiveDescendant: "listitem-active-descendant",
      });
    });
  });
  describe("log role", () => {
    it("should allow valid log role attributes", () => {
      assertType<CamelCaseAria<"log">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "log-controls",
        ariaCurrent: "location",
        ariaDescribedBy: "log-description",
        ariaDetails: "log-details",
        ariaDisabled: "true",
        ariaDropEffect: "copy",
        ariaErrorMessage: "log-error",
        ariaFlowTo: "log-flow",
        ariaGrabbed: "undefined",
        ariaHasPopup: "menu",
        ariaHidden: "undefined",
        ariaInvalid: "grammar",
        ariaKeyShortcuts: "log-shortcuts",
        ariaLabel: "Log message",
        ariaLabelledBy: "log-label",
        ariaLive: "polite",
        ariaOwns: "log-owns",
        ariaRelevant: "additions removals text",
        ariaRoleDescription: "Log role description",
      });
      assertType<CamelCaseAria<"awesomelog log">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "log-controls",
        ariaCurrent: "location",
        ariaDescribedBy: "log-description",
        ariaDetails: "log-details",
        ariaDisabled: "true",
        ariaDropEffect: "copy",
        ariaErrorMessage: "log-error",
        ariaFlowTo: "log-flow",
        ariaGrabbed: "undefined",
        ariaHasPopup: "menu",
        ariaHidden: "undefined",
        ariaInvalid: "grammar",
        ariaKeyShortcuts: "log-shortcuts",
        ariaLabel: "Log message",
        ariaLabelledBy: "log-label",
        ariaLive: "polite",
        ariaOwns: "log-owns",
        ariaRelevant: "additions removals text",
        ariaRoleDescription: "Log role description",
      });
    });
    it("should not allow invalid log role attributes", () => {
      assertType<CamelCaseAria<"log">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "log-controls",
        // @ts-expect-error - should not allow invalid attributes
        ariaRowCount: 1,
      });
      assertType<CamelCaseAria<"awesomelog log">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "log-controls",
        // @ts-expect-error - should not allow invalid attributes
        ariaRowCount: 1,
      });
    });
  });
  describe("main role", () => {
    it("should allow valid main role attributes", () => {
      assertType<CamelCaseAria<"main">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "main-controls",
        ariaCurrent: "location",
        ariaDescribedBy: "main-description",
        ariaDetails: "main-details",
        ariaDisabled: "true",
        ariaDropEffect: "copy",
        ariaErrorMessage: "main-error",
        ariaFlowTo: "main-flow",
        ariaGrabbed: "undefined",
        ariaHasPopup: "menu",
        ariaHidden: "undefined",
        ariaInvalid: "grammar",
        ariaKeyShortcuts: "main-shortcuts",
        ariaLabel: "Main message",
        ariaLabelledBy: "main-label",
        ariaLive: "polite",
        ariaOwns: "main-owns",
        ariaRelevant: "additions removals text",
        ariaRoleDescription: "Main role description",
      });
      assertType<CamelCaseAria<"awesomemain main">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "main-controls",
        ariaCurrent: "location",
        ariaDescribedBy: "main-description",
        ariaDetails: "main-details",
        ariaDisabled: "true",
        ariaDropEffect: "copy",
        ariaErrorMessage: "main-error",
        ariaFlowTo: "main-flow",
        ariaGrabbed: "undefined",
        ariaHasPopup: "menu",
        ariaHidden: "undefined",
        ariaInvalid: "grammar",
        ariaKeyShortcuts: "main-shortcuts",
        ariaLabel: "Main message",
        ariaLabelledBy: "main-label",
        ariaLive: "polite",
        ariaOwns: "main-owns",
        ariaRelevant: "additions removals text",
        ariaRoleDescription: "Main role description",
      });
    });
    it("should not allow invalid main role attributes", () => {
      assertType<CamelCaseAria<"main">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "main-controls",
        // @ts-expect-error - should not allow invalid attributes
        ariaRowCount: 1,
      });
      assertType<CamelCaseAria<"awesomemain main">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "main-controls",
        // @ts-expect-error - should not allow invalid attributes
        ariaRowCount: 1,
      });
    });
  });
  describe("marquee role", () => {
    it("should allow valid marquee role attributes", () => {
      assertType<CamelCaseAria<"marquee">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "marquee-controls",
        ariaCurrent: "location",
        ariaDescribedBy: "marquee-description",
        ariaDetails: "marquee-details",
        ariaDisabled: "true",
        ariaDropEffect: "copy",
        ariaErrorMessage: "marquee-error",
        ariaFlowTo: "marquee-flow",
        ariaGrabbed: "undefined",
        ariaHasPopup: "menu",
        ariaHidden: "undefined",
        ariaInvalid: "grammar",
        ariaKeyShortcuts: "marquee-shortcuts",
        ariaLabel: "Marquee message",
        ariaLabelledBy: "marquee-label",
        ariaLive: "polite",
        ariaOwns: "marquee-owns",
        ariaRelevant: "additions removals text",
        ariaRoleDescription: "Marquee role description",
      });
      assertType<CamelCaseAria<"awesomemarquee marquee">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "marquee-controls",
        ariaCurrent: "location",
        ariaDescribedBy: "marquee-description",
        ariaDetails: "marquee-details",
        ariaDisabled: "true",
        ariaDropEffect: "copy",
        ariaErrorMessage: "marquee-error",
        ariaFlowTo: "marquee-flow",
        ariaGrabbed: "undefined",
        ariaHasPopup: "menu",
        ariaHidden: "undefined",
        ariaInvalid: "grammar",
        ariaKeyShortcuts: "marquee-shortcuts",
        ariaLabel: "Marquee message",
        ariaLabelledBy: "marquee-label",
        ariaLive: "polite",
        ariaOwns: "marquee-owns",
        ariaRelevant: "additions removals text",
        ariaRoleDescription: "Marquee role description",
      });
    });
    it("should not allow invalid marquee role attributes", () => {
      assertType<CamelCaseAria<"marquee">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "marquee-controls",
        // @ts-expect-error - should not allow invalid attributes
        ariaRowCount: 1,
      });
      assertType<CamelCaseAria<"awesomemarquee marquee">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "marquee-controls",
        // @ts-expect-error - should not allow invalid attributes
        ariaRowCount: 1,
      });
    });
  });
  describe("math role", () => {
    it("should allow valid math role attributes", () => {
      assertType<CamelCaseAria<"math">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "math-controls",
        ariaCurrent: "location",
        ariaDescribedBy: "math-description",
        ariaDetails: "math-details",
        ariaDisabled: "true",
        ariaDropEffect: "copy",
        ariaErrorMessage: "math-error",
        ariaFlowTo: "math-flow",
        ariaGrabbed: "undefined",
        ariaHasPopup: "menu",
        ariaHidden: "undefined",
        ariaInvalid: "grammar",
        ariaKeyShortcuts: "math-shortcuts",
        ariaLabel: "Math message",
        ariaLabelledBy: "math-label",
        ariaLive: "polite",
        ariaOwns: "math-owns",
        ariaRelevant: "additions removals text",
        ariaRoleDescription: "Math role description",
      });
      assertType<CamelCaseAria<"awesomemath math">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "math-controls",
        ariaCurrent: "location",
        ariaDescribedBy: "math-description",
        ariaDetails: "math-details",
        ariaDisabled: "true",
        ariaDropEffect: "copy",
        ariaErrorMessage: "math-error",
        ariaFlowTo: "math-flow",
        ariaGrabbed: "undefined",
        ariaHasPopup: "menu",
        ariaHidden: "undefined",
        ariaInvalid: "grammar",
        ariaKeyShortcuts: "math-shortcuts",
        ariaLabel: "Math message",
        ariaLabelledBy: "math-label",
        ariaLive: "polite",
        ariaOwns: "math-owns",
        ariaRelevant: "additions removals text",
        ariaRoleDescription: "Math role description",
      });
    });
    it("should not allow invalid math role attributes", () => {
      assertType<CamelCaseAria<"math">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "math-controls",
        // @ts-expect-error - should not allow invalid attributes
        ariaRowCount: 1,
      });
      assertType<CamelCaseAria<"awesomemath math">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "math-controls",
        // @ts-expect-error - should not allow invalid attributes
        ariaRowCount: 1,
      });
    });
  });

  describe("meter role", () => {
    it("should allow valid meter role attributes", () => {
      assertType<CamelCaseAria<"meter">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "meter-controls",
        ariaCurrent: "location",
        ariaDescribedBy: "meter-description",
        ariaDetails: "meter-details",
        ariaDisabled: "true",
        ariaDropEffect: "copy",
        ariaErrorMessage: "meter-error",
        ariaFlowTo: "meter-flow",
        ariaGrabbed: "undefined",
        ariaHasPopup: "menu",
        ariaHidden: "undefined",
        ariaInvalid: "grammar",
        ariaKeyShortcuts: "meter-shortcuts",
        ariaLabel: "Meter message",
        ariaLabelledBy: "meter-label",
        ariaLive: "polite",
        ariaOwns: "meter-owns",
        ariaRelevant: "additions removals text",
        ariaRoleDescription: "Meter role description",
        ariaValueMax: 100,
        ariaValueMin: 0,
        ariaValueNow: 50,
      });
      assertType<CamelCaseAria<"awesomemeter meter">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "meter-controls",
        ariaCurrent: "location",
        ariaDescribedBy: "meter-description",
        ariaDetails: "meter-details",
        ariaDisabled: "true",
        ariaDropEffect: "copy",
        ariaErrorMessage: "meter-error",
        ariaFlowTo: "meter-flow",
        ariaGrabbed: "undefined",
        ariaHasPopup: "menu",
        ariaHidden: "undefined",
        ariaInvalid: "grammar",
        ariaKeyShortcuts: "meter-shortcuts",
        ariaLabel: "Meter message",
        ariaLabelledBy: "meter-label",
        ariaLive: "polite",
        ariaOwns: "meter-owns",
        ariaRelevant: "additions removals text",
        ariaRoleDescription: "Meter role description",
        ariaValueMax: 100,
        ariaValueMin: 0,
        ariaValueNow: 50,
      });
    });
    it("should not allow invalid meter role attributes", () => {
      assertType<CamelCaseAria<"meter">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "meter-controls",
        // @ts-expect-error - should not allow invalid attributes
        ariaRowCount: 1,
      });
      assertType<CamelCaseAria<"awesomemeter meter">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "meter-controls",
        // @ts-expect-error - should not allow invalid attributes
        ariaRowCount: 1,
      });
    });
  });

  describe("menu role", () => {
    it("should allow valid menu role attributes", () => {
      assertType<CamelCaseAria<"menu">>({
        ariaActiveDescendant: "menu-active-descendant",
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "menu-controls",
        ariaCurrent: "location",
        ariaDescribedBy: "menu-description",
        ariaDetails: "menu-details",
        ariaDisabled: "true",
        ariaDropEffect: "copy",
        ariaErrorMessage: "menu-error",
        ariaFlowTo: "menu-flow",
        ariaGrabbed: "undefined",
        ariaHasPopup: "menu",
        ariaHidden: "undefined",
        ariaInvalid: "grammar",
        ariaKeyShortcuts: "menu-shortcuts",
        ariaLabel: "Menu message",
        ariaLabelledBy: "menu-label",
        ariaLive: "polite",
        ariaOwns: "menu-owns",
        ariaOrientation: "horizontal",
        ariaRelevant: "additions removals text",
        ariaRoleDescription: "Menu role description",
      });
      assertType<CamelCaseAria<"awesomemenu menu">>({
        ariaActiveDescendant: "menu-active-descendant",
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "menu-controls",
        ariaCurrent: "location",
        ariaDescribedBy: "menu-description",
        ariaDetails: "menu-details",
        ariaDisabled: "true",
        ariaDropEffect: "copy",
        ariaErrorMessage: "menu-error",
        ariaFlowTo: "menu-flow",
        ariaGrabbed: "undefined",
        ariaHasPopup: "menu",
        ariaHidden: "undefined",
        ariaInvalid: "grammar",
        ariaKeyShortcuts: "menu-shortcuts",
        ariaLabel: "Menu message",
        ariaLabelledBy: "menu-label",
        ariaLive: "polite",
        ariaOwns: "menu-owns",
        ariaOrientation: "horizontal",
        ariaRelevant: "additions removals text",
        ariaRoleDescription: "Menu role description",
      });
    });
    it("should not allow invalid menu role attributes", () => {
      assertType<CamelCaseAria<"menu">>({
        ariaActiveDescendant: "menu-active-descendant",
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "menu-controls",
        // @ts-expect-error - should not allow invalid attributes
        ariaRowIndex: 1,
      });
      assertType<CamelCaseAria<"awesomemenu menu">>({
        ariaActiveDescendant: "menu-active-descendant",
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "menu-controls",
        // @ts-expect-error - should not allow invalid attributes
        ariaRowSpan: 1,
      });
    });
  });
  describe("menubar role", () => {
    it("should allow valid menubar role attributes", () => {
      assertType<CamelCaseAria<"menubar">>({
        ariaActiveDescendant: "menubar-active-descendant",
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "menubar-controls",
        ariaCurrent: "location",
        ariaDescribedBy: "menubar-description",
        ariaDetails: "menubar-details",
        ariaDisabled: "true",
        ariaDropEffect: "copy",
        ariaErrorMessage: "menubar-error",
        ariaFlowTo: "menubar-flow",
        ariaGrabbed: "undefined",
        ariaHasPopup: "menu",
        ariaHidden: "undefined",
        ariaInvalid: "grammar",
        ariaKeyShortcuts: "menubar-shortcuts",
        ariaLabel: "Menubar message",
        ariaLabelledBy: "menubar-label",
        ariaLive: "polite",
        ariaOwns: "menubar-owns",
        ariaOrientation: "horizontal",
        ariaRelevant: "additions removals text",
        ariaRoleDescription: "Menubar role description",
      });
      assertType<CamelCaseAria<"awesomemenubar menubar">>({
        ariaActiveDescendant: "menubar-active-descendant",
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "menubar-controls",
        ariaCurrent: "location",
        ariaDescribedBy: "menubar-description",
        ariaDetails: "menubar-details",
        ariaDisabled: "true",
        ariaDropEffect: "copy",
        ariaErrorMessage: "menubar-error",
        ariaFlowTo: "menubar-flow",
        ariaGrabbed: "undefined",
        ariaHasPopup: "menu",
        ariaHidden: "undefined",
        ariaInvalid: "grammar",
        ariaKeyShortcuts: "menubar-shortcuts",
        ariaLabel: "Menubar message",
        ariaLabelledBy: "menubar-label",
        ariaLive: "polite",
        ariaOwns: "menubar-owns",
        ariaOrientation: "horizontal",
        ariaRelevant: "additions removals text",
        ariaRoleDescription: "Menubar role description",
      });
    });
    it("should not allow invalid menubar role attributes", () => {
      assertType<CamelCaseAria<"menubar">>({
        ariaActiveDescendant: "menubar-active-descendant",
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "menubar-controls",
        // @ts-expect-error - should not allow invalid attributes
        ariaRowIndex: 1,
      });
      assertType<CamelCaseAria<"awesomemenubar menubar">>({
        ariaActiveDescendant: "menubar-active-descendant",
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "menubar-controls",
        // @ts-expect-error - should not allow invalid attributes
        ariaRowSpan: 1,
      });
    });
  });
  describe("menuitem role", () => {
    it("should allow valid menuitem role attributes", () => {
      assertType<CamelCaseAria<"menuitem">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "menuitem-controls",
        ariaCurrent: "location",
        ariaDescribedBy: "menuitem-description",
        ariaDetails: "menuitem-details",
        ariaDisabled: "true",
        ariaDropEffect: "copy",
        ariaErrorMessage: "menuitem-error",
        ariaExpanded: "undefined",
        ariaFlowTo: "menuitem-flow",
        ariaGrabbed: "undefined",
        ariaHasPopup: "menu",
        ariaHidden: "undefined",
        ariaInvalid: "grammar",
        ariaKeyShortcuts: "menuitem-shortcuts",
        ariaLabel: "Menu item message",
        ariaLabelledBy: "menuitem-label",
        ariaLive: "polite",
        ariaOwns: "menuitem-owns",
        ariaPosInSet: 1,
        ariaRelevant: "additions removals text",
        ariaRoleDescription: "Menu item role description",
        ariaSetSize: 3,
      });
      assertType<CamelCaseAria<"awesomemenuitem menuitem">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "menuitem-controls",
        ariaCurrent: "location",
        ariaDescribedBy: "menuitem-description",
        ariaDetails: "menuitem-details",
        ariaDisabled: "true",
        ariaDropEffect: "copy",
        ariaErrorMessage: "menuitem-error",
        ariaExpanded: "undefined",
        ariaFlowTo: "menuitem-flow",
        ariaGrabbed: "undefined",
        ariaHasPopup: "menu",
        ariaHidden: "undefined",
        ariaInvalid: "grammar",
        ariaKeyShortcuts: "menuitem-shortcuts",
        ariaLabel: "Menu item message",
        ariaLabelledBy: "menuitem-label",
        ariaLive: "polite",
        ariaOwns: "menuitem-owns",
        ariaPosInSet: 1,
        ariaRelevant: "additions removals text",
        ariaRoleDescription: "Menu item role description",
        ariaSetSize: 3,
      });
    });
    it("should not allow invalid menuitem role attributes", () => {
      assertType<CamelCaseAria<"menuitem">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "menuitem-controls",
      });
      assertType<CamelCaseAria<"awesomemenuitem menuitem">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "menuitem-controls",
      });
    });
  });

  describe("menuitemcheckbox role", () => {
    it("should allow valid menuitemcheckbox role attributes", () => {
      assertType<CamelCaseAria<"menuitemcheckbox">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaChecked: true,
        ariaControls: "menuitemcheckbox-controls",
        ariaCurrent: "location",
        ariaDescribedBy: "menuitemcheckbox-description",
        ariaDetails: "menuitemcheckbox-details",
        ariaDisabled: "true",
        ariaDropEffect: "copy",
        ariaErrorMessage: "menuitemcheckbox-error",
        ariaExpanded: "undefined",
        ariaFlowTo: "menuitemcheckbox-flow",
        ariaGrabbed: "undefined",
        ariaHasPopup: "menu",
        ariaHidden: "undefined",
        ariaInvalid: "grammar",
        ariaKeyShortcuts: "menuitemcheckbox-shortcuts",
        ariaLabel: "Menu item checkbox message",
        ariaLabelledBy: "menuitemcheckbox-label",
        ariaLive: "polite",
        ariaOwns: "menuitemcheckbox-owns",
        ariaPosInSet: 1,
        ariaRelevant: "additions removals text",
        ariaRoleDescription: "Menu item checkbox role description",
        ariaSetSize: 3,
      });
      assertType<CamelCaseAria<"awesomemenuitemcheckbox menuitemcheckbox">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaChecked: true,
        ariaControls: "menuitemcheckbox-controls",
        ariaCurrent: "location",
        ariaDescribedBy: "menuitemcheckbox-description",
        ariaDetails: "menuitemcheckbox-details",
        ariaDisabled: "true",
        ariaDropEffect: "copy",
        ariaErrorMessage: "menuitemcheckbox-error",
        ariaExpanded: "undefined",
        ariaFlowTo: "menuitemcheckbox-flow",
        ariaGrabbed: "undefined",
        ariaHasPopup: "menu",
        ariaHidden: "undefined",
        ariaInvalid: "grammar",
        ariaKeyShortcuts: "menuitemcheckbox-shortcuts",
        ariaLabel: "Menu item checkbox message",
        ariaLabelledBy: "menuitemcheckbox-label",
        ariaLive: "polite",
        ariaOwns: "menuitemcheckbox-owns",
        ariaPosInSet: 1,
        ariaRelevant: "additions removals text",
        ariaRoleDescription: "Menu item checkbox role description",
        ariaSetSize: 3,
      });
    });
    it("should not allow invalid menuitemcheckbox role attributes", () => {
      assertType<CamelCaseAria<"menuitemcheckbox">>({
        ariaAtomic: true,
        ariaBusy: false,
        // @ts-expect-error - should not allow invalid attributes
        ariaRowCount: 1,
      });
      assertType<CamelCaseAria<"awesomemenuitemcheckbox menuitemcheckbox">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "menuitemcheckbox-controls",
        // @ts-expect-error - should not allow invalid attributes
        ariaRowCount: 1,
      });
    });
  });

  describe("menuitemradio role", () => {
    it("should allow valid menuitemradio role attributes", () => {
      assertType<CamelCaseAria<"menuitemradio">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaChecked: true,
        ariaControls: "menuitemradio-controls",
        ariaCurrent: "location",
        ariaDescribedBy: "menuitemradio-description",
        ariaDetails: "menuitemradio-details",
        ariaDisabled: "true",
        ariaDropEffect: "copy",
        ariaErrorMessage: "menuitemradio-error",
        ariaExpanded: "undefined",
        ariaFlowTo: "menuitemradio-flow",
        ariaGrabbed: "undefined",
        ariaHasPopup: "menu",
        ariaHidden: "undefined",
        ariaInvalid: "grammar",
        ariaKeyShortcuts: "menuitemradio-shortcuts",
        ariaLabel: "Menu item radio message",
        ariaLabelledBy: "menuitemradio-label",
        ariaLive: "polite",
        ariaOwns: "menuitemradio-owns",
        ariaPosInSet: 1,
        ariaRelevant: "additions removals text",
        ariaRoleDescription: "Menu item radio role description",
        ariaSetSize: 3,
      });
      assertType<CamelCaseAria<"awesomemenuitemradio menuitemradio">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaChecked: true,
        ariaControls: "menuitemradio-controls",
        ariaCurrent: "location",
        ariaDescribedBy: "menuitemradio-description",
        ariaDetails: "menuitemradio-details",
        ariaDisabled: "true",
        ariaDropEffect: "copy",
        ariaErrorMessage: "menuitemradio-error",
        ariaExpanded: "undefined",
        ariaFlowTo: "menuitemradio-flow",
        ariaGrabbed: "undefined",
        ariaHasPopup: "menu",
        ariaHidden: "undefined",
        ariaInvalid: "grammar",
        ariaKeyShortcuts: "menuitemradio-shortcuts",
        ariaLabel: "Menu item radio message",
        ariaLabelledBy: "menuitemradio-label",
        ariaLive: "polite",
        ariaOwns: "menuitemradio-owns",
        ariaPosInSet: 1,
        ariaRelevant: "additions removals text",
        ariaRoleDescription: "Menu item radio role description",
        ariaSetSize: 3,
      });
    });
    it("should not allow invalid menuitemradio role attributes", () => {
      assertType<CamelCaseAria<"menuitemradio">>({
        ariaAtomic: true,
        ariaBusy: false,
        // @ts-expect-error - should not allow invalid attributes
        ariaRowCount: 1,
      });
      assertType<CamelCaseAria<"awesomemenuitemradio menuitemradio">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "menuitemradio-controls",
        // @ts-expect-error - should not allow invalid attributes
        ariaRowCount: 1,
      });
    });
  });
  describe("navigation role", () => {
    it("should allow valid navigation role attributes", () => {
      assertType<CamelCaseAria<"navigation">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "navigation-controls",
        ariaCurrent: "location",
        ariaDescribedBy: "navigation-description",
        ariaDetails: "navigation-details",
        ariaDisabled: "true",
        ariaDropEffect: "copy",
        ariaErrorMessage: "navigation-error",
        ariaFlowTo: "navigation-flow",
        ariaGrabbed: "undefined",
        ariaHasPopup: "menu",
        ariaHidden: "undefined",
        ariaInvalid: "grammar",
        ariaKeyShortcuts: "navigation-shortcuts",
        ariaLabel: "Navigation message",
        ariaLabelledBy: "navigation-label",
        ariaLive: "polite",
        ariaOwns: "navigation-owns",
        ariaRelevant: "additions removals text",
        ariaRoleDescription: "Navigation role description",
      });
      assertType<CamelCaseAria<"awesomenavigation navigation">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "navigation-controls",
        ariaCurrent: "location",
        ariaDescribedBy: "navigation-description",
        ariaDetails: "navigation-details",
        ariaDisabled: "true",
        ariaDropEffect: "copy",
        ariaErrorMessage: "navigation-error",
        ariaFlowTo: "navigation-flow",
        ariaGrabbed: "undefined",
        ariaHasPopup: "menu",
        ariaHidden: "undefined",
        ariaInvalid: "grammar",
        ariaKeyShortcuts: "navigation-shortcuts",
        ariaLabel: "Navigation message",
        ariaLabelledBy: "navigation-label",
        ariaLive: "polite",
        ariaOwns: "navigation-owns",
        ariaRelevant: "additions removals text",
        ariaRoleDescription: "Navigation role description",
      });
    });
    it("should not allow invalid navigation role attributes", () => {
      assertType<CamelCaseAria<"navigation">>({
        ariaAtomic: true,
        ariaBusy: false,
        // @ts-expect-error - should not allow invalid attributes
        ariaRowCount: 1,
      });
      assertType<CamelCaseAria<"awesomenavigation navigation">>({
        ariaAtomic: true,
        ariaBusy: false,
        // @ts-expect-error - should not allow invalid attributes
        ariaRowCount: 1,
      });
    });
  });

  describe("none role", () => {
    it("should allow valid none role attributes", () => {
      assertType<CamelCaseAria<"none">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "none-controls",
        ariaCurrent: "location",
        ariaDescribedBy: "none-description",
        ariaDetails: "none-details",
        ariaDisabled: "true",
        ariaDropEffect: "copy",
        ariaErrorMessage: "none-error",
        ariaFlowTo: "none-flow",
        ariaGrabbed: "undefined",
        ariaHasPopup: "menu",
        ariaHidden: "undefined",
        ariaInvalid: "grammar",
        ariaKeyShortcuts: "none-shortcuts",
        ariaLive: "polite",
        ariaOwns: "none-owns",
        ariaRelevant: "additions removals text",
        ariaRoleDescription: "None role description",
      });
      assertType<CamelCaseAria<"awesomenone none">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "none-controls",
        ariaCurrent: "location",
        ariaDescribedBy: "none-description",
        ariaDetails: "none-details",
        ariaDisabled: "true",
        ariaDropEffect: "copy",
        ariaErrorMessage: "none-error",
        ariaFlowTo: "none-flow",
        ariaGrabbed: "undefined",
        ariaHasPopup: "menu",
        ariaHidden: "undefined",
        ariaInvalid: "grammar",
        ariaKeyShortcuts: "none-shortcuts",
        ariaLive: "polite",
        ariaOwns: "none-owns",
        ariaRelevant: "additions removals text",
        ariaRoleDescription: "None role description",
      });
    });
    it("should not allow label and labelledBy attributes", () => {
      assertType<CamelCaseAria<"none">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "none-controls",
        // @ts-expect-error - should not allow label attribute
        ariaLabel: "None message",
      });
      assertType<CamelCaseAria<"awesomenone none">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "none-controls",
        // @ts-expect-error - should not allow labelledBy attribute
        ariaLabelledBy: "none-label",
      });
    });
    it("should not allow invalid none role attributes", () => {
      assertType<CamelCaseAria<"none">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "none-controls",
        // @ts-expect-error - should not allow invalid attributes
        ariaRowCount: 1,
      });
      assertType<CamelCaseAria<"awesomenone none">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "none-controls",
        // @ts-expect-error - should not allow invalid attributes
        ariaRowCount: 1,
      });
    });
  });

  describe("option role", () => {
    it("should allow valid option role attributes", () => {
      assertType<CamelCaseAria<"option">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaChecked: true,
        ariaControls: "option-controls",
        ariaCurrent: "location",
        ariaDescribedBy: "option-description",
        ariaDetails: "option-details",
        ariaDisabled: "true",
        ariaDropEffect: "copy",
        ariaErrorMessage: "option-error",
        ariaFlowTo: "option-flow",
        ariaGrabbed: "undefined",
        ariaHasPopup: "menu",
        ariaHidden: "undefined",
        ariaInvalid: "grammar",
        ariaKeyShortcuts: "option-shortcuts",
        ariaLabel: "Option message",
        ariaLabelledBy: "option-label",
        ariaLive: "polite",
        ariaOwns: "option-owns",
        ariaPosInSet: 1,
        ariaRelevant: "additions removals text",
        ariaRoleDescription: "Option role description",
        ariaSelected: true,
        ariaSetSize: 3,
      });
      assertType<CamelCaseAria<"awesomeoption option">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaChecked: true,
        ariaControls: "option-controls",
        ariaCurrent: "location",
        ariaDescribedBy: "option-description",
        ariaDetails: "option-details",
        ariaDisabled: "true",
        ariaDropEffect: "copy",
        ariaErrorMessage: "option-error",
        ariaFlowTo: "option-flow",
        ariaGrabbed: "undefined",
        ariaHasPopup: "menu",
        ariaHidden: "undefined",
        ariaInvalid: "grammar",
        ariaKeyShortcuts: "option-shortcuts",
        ariaLabel: "Option message",
        ariaLabelledBy: "option-label",
        ariaLive: "polite",
        ariaOwns: "option-owns",
        ariaPosInSet: 1,
        ariaRelevant: "additions removals text",
        ariaRoleDescription: "Option role description",
        ariaSelected: true,
        ariaSetSize: 3,
      });
    });
    it("should not allow invalid option role attributes", () => {
      assertType<CamelCaseAria<"option">>({
        ariaAtomic: true,
        ariaBusy: false,
        // @ts-expect-error - should not allow invalid attributes
        ariaRowCount: 1,
      });
      assertType<CamelCaseAria<"awesomeoption option">>({
        ariaAtomic: true,
        ariaBusy: false,
        // @ts-expect-error - should not allow invalid attributes
        ariaRowCount: 1,
      });
    });
  });
  describe("paragraph role", () => {
    it("should allow valid paragraph role attributes", () => {
      assertType<CamelCaseAria<"paragraph">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "paragraph-controls",
        ariaCurrent: "location",
        ariaDescribedBy: "paragraph-description",
        ariaDetails: "paragraph-details",
        ariaDisabled: "true",
        ariaDropEffect: "copy",
        ariaErrorMessage: "paragraph-error",
        ariaFlowTo: "paragraph-flow",
        ariaGrabbed: "undefined",
        ariaHasPopup: "menu",
        ariaHidden: "undefined",
        ariaInvalid: "grammar",
        ariaKeyShortcuts: "paragraph-shortcuts",
        ariaLive: "polite",
        ariaOwns: "paragraph-owns",
        ariaRelevant: "additions removals text",
        ariaRoleDescription: "Paragraph role description",
      });
      assertType<CamelCaseAria<"awesomeparagraph paragraph">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "paragraph-controls",
        ariaCurrent: "location",
        ariaDescribedBy: "paragraph-description",
        ariaDetails: "paragraph-details",
        ariaDisabled: "true",
        ariaDropEffect: "copy",
        ariaErrorMessage: "paragraph-error",
        ariaFlowTo: "paragraph-flow",
        ariaGrabbed: "undefined",
        ariaHasPopup: "menu",
        ariaHidden: "undefined",
        ariaInvalid: "grammar",
        ariaKeyShortcuts: "paragraph-shortcuts",
        ariaLive: "polite",
        ariaOwns: "paragraph-owns",
        ariaRelevant: "additions removals text",
        ariaRoleDescription: "Paragraph role description",
      });
    });
    it("should not allow label and labelledBy attributes", () => {
      assertType<CamelCaseAria<"paragraph">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "paragraph-controls",
        // @ts-expect-error - should not allow label attribute
        ariaLabel: "Paragraph message",
      });
      assertType<CamelCaseAria<"awesomeparagraph paragraph">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "paragraph-controls",
        // @ts-expect-error - should not allow labelledBy attribute
        ariaLabelledBy: "paragraph-label",
      });
    });
    it("should not allow invalid paragraph role attributes", () => {
      assertType<CamelCaseAria<"paragraph">>({
        ariaAtomic: true,
        ariaBusy: false,
        // @ts-expect-error - should not allow invalid attributes
        ariaRowCount: 1,
      });
      assertType<CamelCaseAria<"awesomeparagraph paragraph">>({
        ariaAtomic: true,
        ariaBusy: false,
        // @ts-expect-error - should not allow invalid attributes
        ariaRowCount: 1,
      });
    });
  });
  describe("presentation role", () => {
    it("should allow valid presentation role attributes", () => {
      assertType<CamelCaseAria<"presentation">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "presentation-controls",
        ariaCurrent: "location",
        ariaDescribedBy: "presentation-description",
        ariaDetails: "presentation-details",
        ariaDisabled: "true",
        ariaDropEffect: "copy",
        ariaErrorMessage: "presentation-error",
        ariaFlowTo: "presentation-flow",
        ariaGrabbed: "undefined",
        ariaHasPopup: "menu",
        ariaHidden: "undefined",
        ariaInvalid: "grammar",
        ariaKeyShortcuts: "presentation-shortcuts",
        ariaLive: "polite",
        ariaOwns: "presentation-owns",
        ariaRelevant: "additions removals text",
        ariaRoleDescription: "Presentation role description",
      });
      assertType<CamelCaseAria<"awesomepresentation presentation">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "presentation-controls",
        ariaCurrent: "location",
        ariaDescribedBy: "presentation-description",
        ariaDetails: "presentation-details",
        ariaDisabled: "true",
        ariaDropEffect: "copy",
        ariaErrorMessage: "presentation-error",
        ariaFlowTo: "presentation-flow",
        ariaGrabbed: "undefined",
        ariaHasPopup: "menu",
        ariaHidden: "undefined",
        ariaInvalid: "grammar",
        ariaKeyShortcuts: "presentation-shortcuts",
        ariaLive: "polite",
        ariaOwns: "presentation-owns",
        ariaRelevant: "additions removals text",
        ariaRoleDescription: "Presentation role description",
      });
    });
    it("should not allow label and labelledBy attributes", () => {
      assertType<CamelCaseAria<"presentation">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "presentation-controls",
        // @ts-expect-error - should not allow label attribute
        ariaLabel: "Presentation message",
      });
      assertType<CamelCaseAria<"awesomepresentation presentation">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "presentation-controls",
        // @ts-expect-error - should not allow labelledBy attribute
        ariaLabelledBy: "presentation-label",
      });
    });
    it("should not allow invalid presentation role attributes", () => {
      assertType<CamelCaseAria<"presentation">>({
        ariaAtomic: true,
        ariaBusy: false,
        // @ts-expect-error - should not allow invalid attributes
        ariaRowCount: 1,
      });
      assertType<CamelCaseAria<"awesomepresentation presentation">>({
        ariaAtomic: true,
        ariaBusy: false,
        // @ts-expect-error - should not allow invalid attributes
        ariaRowCount: 1,
      });
    });
  });
  describe("progressbar role", () => {
    it("should allow valid progressbar role attributes", () => {
      assertType<CamelCaseAria<"progressbar">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "progressbar-controls",
        ariaCurrent: "location",
        ariaDescribedBy: "progressbar-description",
        ariaDetails: "progressbar-details",
        ariaDisabled: "true",
        ariaDropEffect: "copy",
        ariaErrorMessage: "progressbar-error",
        ariaFlowTo: "progressbar-flow",
        ariaGrabbed: "undefined",
        ariaHasPopup: "menu",
        ariaHidden: "undefined",
        ariaInvalid: "grammar",
        ariaKeyShortcuts: "progressbar-shortcuts",
        ariaLabel: "Progress bar message",
        ariaLabelledBy: "progressbar-label",
        ariaLive: "polite",
        ariaOwns: "progressbar-owns",
        ariaRelevant: "additions removals text",
        ariaRoleDescription: "Progress bar role description",
        ariaValueMax: 100,
        ariaValueMin: 0,
        ariaValueNow: 50,
      });
      assertType<CamelCaseAria<"awesomeprogressbar progressbar">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "progressbar-controls",
        ariaCurrent: "location",
        ariaDescribedBy: "progressbar-description",
        ariaDetails: "progressbar-details",
        ariaDisabled: "true",
        ariaDropEffect: "copy",
        ariaErrorMessage: "progressbar-error",
        ariaFlowTo: "progressbar-flow",
        ariaGrabbed: "undefined",
        ariaHasPopup: "menu",
        ariaHidden: "undefined",
        ariaInvalid: "grammar",
        ariaKeyShortcuts: "progressbar-shortcuts",
        ariaLabel: "Progress bar message",
        ariaLabelledBy: "progressbar-label",
        ariaLive: "polite",
        ariaOwns: "progressbar-owns",
        ariaRelevant: "additions removals text",
        ariaRoleDescription: "Progress bar role description",
        ariaValueMax: 100,
        ariaValueMin: 0,
        ariaValueNow: 50,
      });
    });
    it("should not allow invalid progressbar role attributes", () => {
      assertType<CamelCaseAria<"progressbar">>({
        ariaAtomic: true,
        ariaBusy: false,
        // @ts-expect-error - should not allow invalid attributes
        ariaRowCount: 1,
      });
      assertType<CamelCaseAria<"awesomeprogressbar progressbar">>({
        ariaAtomic: true,
        ariaBusy: false,
        // @ts-expect-error - should not allow invalid attributes
        ariaRowCount: 1,
      });
    });
  });
  describe("radio role", () => {
    it("should allow valid radio role attributes", () => {
      assertType<CamelCaseAria<"radio">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaChecked: true,
        ariaControls: "radio-controls",
        ariaCurrent: "location",
        ariaDescribedBy: "radio-description",
        ariaDetails: "radio-details",
        ariaDisabled: "true",
        ariaDropEffect: "copy",
        ariaErrorMessage: "radio-error",
        ariaFlowTo: "radio-flow",
        ariaGrabbed: "undefined",
        ariaHasPopup: "menu",
        ariaHidden: "undefined",
        ariaInvalid: "grammar",
        ariaKeyShortcuts: "radio-shortcuts",
        ariaLabel: "Radio message",
        ariaLabelledBy: "radio-label",
        ariaLive: "polite",
        ariaOwns: "radio-owns",
        ariaPosInSet: 1,
        ariaRelevant: "additions removals text",
        ariaRoleDescription: "Radio role description",
        ariaSetSize: 3,
      });
      assertType<CamelCaseAria<"awesomeradio radio">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaChecked: true,
        ariaControls: "radio-controls",
        ariaCurrent: "location",
        ariaDescribedBy: "radio-description",
        ariaDetails: "radio-details",
        ariaDisabled: "true",
        ariaDropEffect: "copy",
        ariaErrorMessage: "radio-error",
        ariaFlowTo: "radio-flow",
        ariaGrabbed: "undefined",
        ariaHasPopup: "menu",
        ariaHidden: "undefined",
        ariaInvalid: "grammar",
        ariaKeyShortcuts: "radio-shortcuts",
        ariaLabel: "Radio message",
        ariaLabelledBy: "radio-label",
        ariaLive: "polite",
        ariaOwns: "radio-owns",
        ariaPosInSet: 1,
        ariaRelevant: "additions removals text",
        ariaRoleDescription: "Radio role description",
        ariaSetSize: 3,
      });
    });
    it("should not allow invalid radio role attributes", () => {
      assertType<CamelCaseAria<"radio">>({
        ariaAtomic: true,
        ariaBusy: false,
        // @ts-expect-error - should not allow invalid attributes
        ariaRowCount: 1,
      });
      assertType<CamelCaseAria<"awesomeradio radio">>({
        ariaAtomic: true,
        ariaBusy: false,
        // @ts-expect-error - should not allow invalid attributes
        ariaRowCount: 1,
      });
    });
  });
  describe("radiogroup role", () => {
    it("should allow valid radiogroup role attributes", () => {
      assertType<CamelCaseAria<"radiogroup">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "radiogroup-controls",
        ariaCurrent: "location",
        ariaDescribedBy: "radiogroup-description",
        ariaDetails: "radiogroup-details",
        ariaDisabled: "true",
        ariaDropEffect: "copy",
        ariaErrorMessage: "radiogroup-error",
        ariaFlowTo: "radiogroup-flow",
        ariaGrabbed: "undefined",
        ariaHasPopup: "menu",
        ariaHidden: "undefined",
        ariaInvalid: "grammar",
        ariaKeyShortcuts: "radiogroup-shortcuts",
        ariaLabel: "Radio group message",
        ariaLabelledBy: "radiogroup-label",
        ariaLive: "polite",
        ariaOwns: "radiogroup-owns",
        ariaReadOnly: true,
        ariaRequired: true,
        ariaRelevant: "additions removals text",
        ariaRoleDescription: "Radio group role description",
      });
      assertType<CamelCaseAria<"awesomeradiogroup radiogroup">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "radiogroup-controls",
        ariaCurrent: "location",
        ariaDescribedBy: "radiogroup-description",
        ariaDetails: "radiogroup-details",
        ariaDisabled: "true",
        ariaDropEffect: "copy",
        ariaErrorMessage: "radiogroup-error",
        ariaFlowTo: "radiogroup-flow",
        ariaGrabbed: "undefined",
        ariaHasPopup: "menu",
        ariaHidden: "undefined",
        ariaInvalid: "grammar",
        ariaKeyShortcuts: "radiogroup-shortcuts",
        ariaLabel: "Radio group message",
        ariaLabelledBy: "radiogroup-label",
        ariaLive: "polite",
        ariaOwns: "radiogroup-owns",
        ariaReadOnly: true,
        ariaRequired: true,
        ariaRelevant: "additions removals text",
        ariaRoleDescription: "Radio group role description",
      });
    });
    it("should not allow invalid radiogroup role attributes", () => {
      assertType<CamelCaseAria<"radiogroup">>({
        ariaAtomic: true,
        ariaBusy: false,
        // @ts-expect-error - should not allow invalid attributes
        ariaRowCount: 1,
      });
      assertType<CamelCaseAria<"awesomeradiogroup radiogroup">>({
        ariaAtomic: true,
        ariaBusy: false,
        // @ts-expect-error - should not allow invalid attributes
        ariaRowCount: 1,
      });
    });
  });

  describe("region role", () => {
    it("should allow valid region role attributes", () => {
      assertType<CamelCaseAria<"region">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "region-controls",
        ariaCurrent: "location",
        ariaDescribedBy: "region-description",
        ariaDetails: "region-details",
        ariaDisabled: "true",
        ariaDropEffect: "copy",
        ariaErrorMessage: "region-error",
        ariaFlowTo: "region-flow",
        ariaGrabbed: "undefined",
        ariaHasPopup: "menu",
        ariaHidden: "undefined",
        ariaInvalid: "grammar",
        ariaKeyShortcuts: "region-shortcuts",
        ariaLabel: "Region message",
        ariaLabelledBy: "region-label",
        ariaLive: "polite",
        ariaOwns: "region-owns",
        ariaRelevant: "additions removals text",
        ariaRoleDescription: "Region role description",
      });
      assertType<CamelCaseAria<"awesomeregion region">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "region-controls",
        ariaCurrent: "location",
        ariaDescribedBy: "region-description",
        ariaDetails: "region-details",
        ariaDisabled: "true",
        ariaDropEffect: "copy",
        ariaErrorMessage: "region-error",
        ariaFlowTo: "region-flow",
        ariaGrabbed: "undefined",
        ariaHasPopup: "menu",
        ariaHidden: "undefined",
        ariaInvalid: "grammar",
        ariaKeyShortcuts: "region-shortcuts",
        ariaLabel: "Region message",
        ariaLabelledBy: "region-label",
        ariaLive: "polite",
        ariaOwns: "region-owns",
        ariaRelevant: "additions removals text",
        ariaRoleDescription: "Region role description",
      });
    });
    it("should not allow invalid region role attributes", () => {
      assertType<CamelCaseAria<"region">>({
        ariaAtomic: true,
        ariaBusy: false,
        // @ts-expect-error - should not allow invalid attributes
        ariaRowCount: 1,
      });
      assertType<CamelCaseAria<"awesomeregion region">>({
        ariaAtomic: true,
        ariaBusy: false,
        // @ts-expect-error - should not allow invalid attributes
        ariaRowCount: 1,
      });
    });
  });
  describe("row role", () => {
    it("should allow valid row role attributes", () => {
      assertType<CamelCaseAria<"row">>({
        ariaActiveDescendant: "row-active-descendant",
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "row-controls",
        ariaColIndex: 1,
        ariaCurrent: "location",
        ariaDescribedBy: "row-description",
        ariaDetails: "row-details",
        ariaDisabled: "true",
        ariaDropEffect: "copy",
        ariaErrorMessage: "row-error",
        ariaExpanded: "undefined",
        ariaFlowTo: "row-flow",
        ariaGrabbed: "undefined",
        ariaHasPopup: "menu",
        ariaHidden: "undefined",
        ariaInvalid: "grammar",
        ariaKeyShortcuts: "row-shortcuts",
        ariaLabel: "Row message",
        ariaLabelledBy: "row-label",
        ariaLevel: 1,
        ariaLive: "polite",
        ariaOwns: "row-owns",
        ariaPosInSet: 1,
        ariaRelevant: "additions removals text",
        ariaRoleDescription: "Row role description",
        ariaRowIndex: 1,
        ariaSetSize: 3,
        ariaSelected: true,
      });
      assertType<CamelCaseAria<"awesomerow row">>({
        ariaActiveDescendant: "row-active-descendant",
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "row-controls",
        ariaColIndex: 1,
        ariaCurrent: "location",
        ariaDescribedBy: "row-description",
        ariaDetails: "row-details",
        ariaDisabled: "true",
        ariaDropEffect: "copy",
        ariaErrorMessage: "row-error",
        ariaExpanded: "undefined",
        ariaFlowTo: "row-flow",
        ariaGrabbed: "undefined",
        ariaHasPopup: "menu",
        ariaHidden: "undefined",
        ariaInvalid: "grammar",
        ariaKeyShortcuts: "row-shortcuts",
        ariaLabel: "Row message",
        ariaLabelledBy: "row-label",
        ariaLevel: 1,
        ariaLive: "polite",
        ariaOwns: "row-owns",
        ariaPosInSet: 1,
        ariaRelevant: "additions removals text",
        ariaRoleDescription: "Row role description",
        ariaRowIndex: 1,
        ariaSetSize: 3,
        ariaSelected: true,
      });
    });
    it("should not allow invalid row role attributes", () => {
      assertType<CamelCaseAria<"row">>({
        ariaActiveDescendant: "row-active-descendant",
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "row-controls",
        // @ts-expect-error - should not allow invalid attributes
        ariaRowSpan: 1,
      });
      assertType<CamelCaseAria<"awesomerow row">>({
        ariaActiveDescendant: "row-active-descendant",
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "row-controls",
        // @ts-expect-error - should not allow invalid attributes
        ariaRowSpan: 1,
      });
    });
  });
  describe("rowgroup role", () => {
    it("should allow valid rowgroup role attributes", () => {
      assertType<CamelCaseAria<"rowgroup">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "rowgroup-controls",
        ariaCurrent: "location",
        ariaDescribedBy: "rowgroup-description",
        ariaDetails: "rowgroup-details",
        ariaDisabled: "true",
        ariaDropEffect: "copy",
        ariaErrorMessage: "rowgroup-error",
        ariaFlowTo: "rowgroup-flow",
        ariaGrabbed: "undefined",
        ariaHasPopup: "menu",
        ariaHidden: "undefined",
        ariaInvalid: "grammar",
        ariaKeyShortcuts: "rowgroup-shortcuts",
        ariaLabel: "Row group message",
        ariaLabelledBy: "rowgroup-label",
        ariaLive: "polite",
        ariaOwns: "rowgroup-owns",
        ariaRelevant: "additions removals text",
        ariaRoleDescription: "Row group role description",
      });
      assertType<CamelCaseAria<"awesomerowgroup rowgroup">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "rowgroup-controls",
        ariaCurrent: "location",
        ariaDescribedBy: "rowgroup-description",
        ariaDetails: "rowgroup-details",
        ariaDisabled: "true",
        ariaDropEffect: "copy",
        ariaErrorMessage: "rowgroup-error",
        ariaFlowTo: "rowgroup-flow",
        ariaGrabbed: "undefined",
        ariaHasPopup: "menu",
        ariaHidden: "undefined",
        ariaInvalid: "grammar",
        ariaKeyShortcuts: "rowgroup-shortcuts",
        ariaLabel: "Row group message",
        ariaLabelledBy: "rowgroup-label",
        ariaLive: "polite",
        ariaOwns: "rowgroup-owns",
        ariaRelevant: "additions removals text",
        ariaRoleDescription: "Row group role description",
      });
    });
    it("should not allow invalid rowgroup role attributes", () => {
      assertType<CamelCaseAria<"rowgroup">>({
        ariaAtomic: true,
        ariaBusy: false,
        // @ts-expect-error - should not allow invalid attributes
        ariaRowCount: 1,
      });
      assertType<CamelCaseAria<"awesomerowgroup rowgroup">>({
        ariaAtomic: true,
        ariaBusy: false,
        // @ts-expect-error - should not allow invalid attributes
        ariaRowCount: 1,
      });
    });
  });
  describe("rowheader role", () => {
    it("should allow valid rowheader role attributes", () => {
      assertType<CamelCaseAria<"rowheader">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "rowheader-controls",
        ariaColIndex: 1,
        ariaColSpan: 2,
        ariaCurrent: "location",
        ariaDescribedBy: "rowheader-description",
        ariaDetails: "rowheader-details",
        ariaDisabled: "true",
        ariaDropEffect: "copy",
        ariaErrorMessage: "rowheader-error",
        ariaExpanded: "undefined",
        ariaFlowTo: "rowheader-flow",
        ariaGrabbed: "undefined",
        ariaHasPopup: "menu",
        ariaHidden: "undefined",
        ariaInvalid: "grammar",
        ariaKeyShortcuts: "rowheader-shortcuts",
        ariaLabel: "Row header message",
        ariaLabelledBy: "rowheader-label",
        ariaLive: "polite",
        ariaOwns: "rowheader-owns",
        ariaReadOnly: true,
        ariaRelevant: "additions removals text",
        ariaRequired: true,
        ariaRoleDescription: "Row header role description",
        ariaRowIndex: 1,
        ariaRowSpan: 2,
        ariaSelected: true,
      });
      assertType<CamelCaseAria<"awesomerowheader rowheader">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "rowheader-controls",
        ariaColIndex: 1,
        ariaColSpan: 2,
        ariaCurrent: "location",
        ariaDescribedBy: "rowheader-description",
        ariaDetails: "rowheader-details",
        ariaDisabled: "true",
        ariaDropEffect: "copy",
        ariaErrorMessage: "rowheader-error",
        ariaExpanded: "undefined",
        ariaFlowTo: "rowheader-flow",
        ariaGrabbed: "undefined",
        ariaHasPopup: "menu",
        ariaHidden: "undefined",
        ariaInvalid: "grammar",
        ariaKeyShortcuts: "rowheader-shortcuts",
        ariaLabel: "Row header message",
        ariaLabelledBy: "rowheader-label",
        ariaLive: "polite",
        ariaOwns: "rowheader-owns",
        ariaReadOnly: true,
        ariaRelevant: "additions removals text",
        ariaRequired: true,
        ariaRoleDescription: "Row header role description",
        ariaRowIndex: 1,
        ariaRowSpan: 2,
        ariaSelected: true,
      });
    });
    it("should not allow invalid rowheader role attributes", () => {
      assertType<CamelCaseAria<"rowheader">>({
        ariaAtomic: true,
        ariaBusy: false,
        // @ts-expect-error - should not allow invalid attributes
        ariaRowCount: 1,
      });
      assertType<CamelCaseAria<"awesomerowheader rowheader">>({
        ariaAtomic: true,
        ariaBusy: false,
        // @ts-expect-error - should not allow invalid attributes
        ariaRowCount: 1,
      });
    });
  });
  describe("scrollbar role", () => {
    it("should allow valid scrollbar role attributes", () => {
      assertType<CamelCaseAria<"scrollbar">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "scrollbar-controls",
        ariaCurrent: "location",
        ariaDescribedBy: "scrollbar-description",
        ariaDetails: "scrollbar-details",
        ariaDisabled: "true",
        ariaDropEffect: "copy",
        ariaErrorMessage: "scrollbar-error",
        ariaFlowTo: "scrollbar-flow",
        ariaGrabbed: "undefined",
        ariaHasPopup: "menu",
        ariaHidden: "undefined",
        ariaInvalid: "grammar",
        ariaKeyShortcuts: "scrollbar-shortcuts",
        ariaLabel: "Scrollbar message",
        ariaLabelledBy: "scrollbar-label",
        ariaLive: "polite",
        ariaOwns: "scrollbar-owns",
        ariaOrientation: "vertical",
        ariaRelevant: "additions removals text",
        ariaRoleDescription: "Scrollbar role description",
        ariaValueMax: 100,
        ariaValueMin: 0,
        ariaValueNow: 50,
        ariaValueText: "50%",
      });
      assertType<CamelCaseAria<"awesomescrollbar scrollbar">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "scrollbar-controls",
        ariaCurrent: "location",
        ariaDescribedBy: "scrollbar-description",
        ariaDetails: "scrollbar-details",
        ariaDisabled: "true",
        ariaDropEffect: "copy",
        ariaErrorMessage: "scrollbar-error",
        ariaFlowTo: "scrollbar-flow",
        ariaGrabbed: "undefined",
        ariaHasPopup: "menu",
        ariaHidden: "undefined",
        ariaInvalid: "grammar",
        ariaKeyShortcuts: "scrollbar-shortcuts",
        ariaLabel: "Scrollbar message",
        ariaLabelledBy: "scrollbar-label",
        ariaLive: "polite",
        ariaOwns: "scrollbar-owns",
        ariaOrientation: "vertical",
        ariaRelevant: "additions removals text",
        ariaRoleDescription: "Scrollbar role description",
        ariaValueMax: 100,
        ariaValueMin: 0,
        ariaValueNow: 50,
        ariaValueText: "50%",
      });
    });
    it("should not allow invalid scrollbar role attributes", () => {
      assertType<CamelCaseAria<"scrollbar">>({
        ariaAtomic: true,
        ariaBusy: false,
        // @ts-expect-error - should not allow invalid attributes
        ariaRowCount: 1,
      });
      assertType<CamelCaseAria<"awesomescrollbar scrollbar">>({
        ariaAtomic: true,
        ariaBusy: false,
        // @ts-expect-error - should not allow invalid attributes
        ariaRowCount: 1,
      });
    });
  });

  describe("search role", () => {
    it("should allow valid search role attributes", () => {
      assertType<CamelCaseAria<"search">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "search-controls",
        ariaCurrent: "location",
        ariaDescribedBy: "search-description",
        ariaDetails: "search-details",
        ariaDisabled: "true",
        ariaDropEffect: "copy",
        ariaErrorMessage: "search-error",
        ariaFlowTo: "search-flow",
        ariaGrabbed: "undefined",
        ariaHasPopup: "menu",
        ariaHidden: "undefined",
        ariaInvalid: "grammar",
        ariaKeyShortcuts: "search-shortcuts",
        ariaLabel: "Search message",
        ariaLabelledBy: "search-label",
        ariaLive: "polite",
        ariaOwns: "search-owns",
        ariaRelevant: "additions removals text",
        ariaRoleDescription: "Search role description",
      });
      assertType<CamelCaseAria<"awesomesearch search">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "search-controls",
        ariaCurrent: "location",
        ariaDescribedBy: "search-description",
        ariaDetails: "search-details",
        ariaDisabled: "true",
        ariaDropEffect: "copy",
        ariaErrorMessage: "search-error",
        ariaFlowTo: "search-flow",
        ariaGrabbed: "undefined",
        ariaHasPopup: "menu",
        ariaHidden: "undefined",
        ariaInvalid: "grammar",
        ariaKeyShortcuts: "search-shortcuts",
        ariaLabel: "Search message",
        ariaLabelledBy: "search-label",
        ariaLive: "polite",
        ariaOwns: "search-owns",
        ariaRelevant: "additions removals text",
        ariaRoleDescription: "Search role description",
      });
    });
    it("should not allow invalid search role attributes", () => {
      assertType<CamelCaseAria<"search">>({
        ariaAtomic: true,
        ariaBusy: false,
        // @ts-expect-error - should not allow invalid attributes
        ariaRowCount: 1,
      });
      assertType<CamelCaseAria<"awesomesearch search">>({
        ariaAtomic: true,
        ariaBusy: false,
        // @ts-expect-error - should not allow invalid attributes
        ariaRowCount: 1,
      });
    });
  });

  describe("searchbox role", () => {
    it("should allow valid searchbox role attributes", () => {
      assertType<CamelCaseAria<"searchbox">>({
        ariaActiveDescendant: "searchbox-active-descendant",
        ariaAtomic: true,
        ariaAutoComplete: "both",
        ariaBusy: false,
        ariaControls: "searchbox-controls",
        ariaCurrent: "location",
        ariaDescribedBy: "searchbox-description",
        ariaDetails: "searchbox-details",
        ariaDisabled: "true",
        ariaDropEffect: "copy",
        ariaErrorMessage: "searchbox-error",
        ariaFlowTo: "searchbox-flow",
        ariaGrabbed: "undefined",
        ariaHasPopup: "menu",
        ariaHidden: "undefined",
        ariaInvalid: "grammar",
        ariaKeyShortcuts: "searchbox-shortcuts",
        ariaLabel: "Search box message",
        ariaLabelledBy: "searchbox-label",
        ariaLive: "polite",
        ariaMultiLine: true,
        ariaOwns: "searchbox-owns",
        ariaPlaceholder: "Search here",
        ariaReadOnly: true,
        ariaRelevant: "additions removals text",
        ariaRequired: true,
        ariaRoleDescription: "Search box role description",
      });
      assertType<CamelCaseAria<"awesomesearchbox searchbox">>({
        ariaActiveDescendant: "searchbox-active-descendant",
        ariaAtomic: true,
        ariaAutoComplete: "both",
        ariaBusy: false,
        ariaControls: "searchbox-controls",
        ariaCurrent: "location",
        ariaDescribedBy: "searchbox-description",
        ariaDetails: "searchbox-details",
        ariaDisabled: "true",
        ariaDropEffect: "copy",
        ariaErrorMessage: "searchbox-error",
        ariaFlowTo: "searchbox-flow",
        ariaGrabbed: "undefined",
        ariaHasPopup: "menu",
        ariaHidden: "undefined",
        ariaInvalid: "grammar",
        ariaKeyShortcuts: "searchbox-shortcuts",
        ariaLabel: "Search box message",
        ariaLabelledBy: "searchbox-label",
        ariaLive: "polite",
        ariaMultiLine: true,
        ariaOwns: "searchbox-owns",
        ariaPlaceholder: "Search here",
        ariaReadOnly: true,
        ariaRelevant: "additions removals text",
        ariaRequired: true,
        ariaRoleDescription: "Search box role description",
      });
    });
    it("should not allow invalid searchbox role attributes", () => {
      assertType<CamelCaseAria<"searchbox">>({
        ariaAtomic: true,
        ariaBusy: false,
        // @ts-expect-error - should not allow invalid attributes
        ariaRowCount: 1,
      });
      assertType<CamelCaseAria<"awesomesearchbox searchbox">>({
        ariaAtomic: true,
        ariaBusy: false,
        // @ts-expect-error - should not allow invalid attributes
        ariaRowCount: 1,
      });
    });
  });
  describe("separator role", () => {
    it("should allow valid separator role attributes", () => {
      assertType<CamelCaseAria<"separator">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "separator-controls",
        ariaCurrent: "location",
        ariaDescribedBy: "separator-description",
        ariaDetails: "separator-details",
        ariaDisabled: "true",
        ariaDropEffect: "copy",
        ariaErrorMessage: "separator-error",
        ariaFlowTo: "separator-flow",
        ariaGrabbed: "undefined",
        ariaHasPopup: "menu",
        ariaHidden: "undefined",
        ariaInvalid: "grammar",
        ariaKeyShortcuts: "separator-shortcuts",
        ariaLabel: "Separator message",
        ariaLabelledBy: "separator-label",
        ariaLive: "polite",
        ariaOwns: "separator-owns",
        ariaRelevant: "additions removals text",
        ariaRoleDescription: "Separator role description",
      });
      assertType<CamelCaseAria<"awesomeseparator separator">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "separator-controls",
        ariaCurrent: "location",
        ariaDescribedBy: "separator-description",
        ariaDetails: "separator-details",
        ariaDisabled: "true",
        ariaDropEffect: "copy",
        ariaErrorMessage: "separator-error",
        ariaFlowTo: "separator-flow",
        ariaGrabbed: "undefined",
        ariaHasPopup: "menu",
        ariaHidden: "undefined",
        ariaInvalid: "grammar",
        ariaKeyShortcuts: "separator-shortcuts",
        ariaLabel: "Separator message",
        ariaLabelledBy: "separator-label",
        ariaLive: "polite",
        ariaOwns: "separator-owns",
        ariaRelevant: "additions removals text",
        ariaRoleDescription: "Separator role description",
      });
    });
    it("should not allow invalid separator role attributes", () => {
      assertType<CamelCaseAria<"separator">>({
        ariaAtomic: true,
        ariaBusy: false,
        // @ts-expect-error - should not allow invalid attributes
        ariaRowCount: 1,
      });
      assertType<CamelCaseAria<"awesomeseparator separator">>({
        ariaAtomic: true,
        ariaBusy: false,
        // @ts-expect-error - should not allow invalid attributes
        ariaRowCount: 1,
      });
    });
  });
  // describe("slider role", () => {
  //   it("should allow valid slider role attributes", () => {
  //     assertType<CamelCaseAria<"slider">>({
  //       ariaAtomic: true,
  //       ariaBusy: false,
  //       ariaControls: "slider-controls",
  //       ariaCurrent: "location",
  //       ariaDescribedBy: "slider-description",
  //       ariaDetails: "slider-details",
  //       ariaDisabled: "true",
  //       ariaDropEffect: "copy",
  //       ariaErrorMessage: "slider-error",
  //       ariaFlowTo: "slider-flow",
  //       ariaGrabbed: "undefined",
  //       ariaHasPopup: "menu",
  //       ariaHidden: "undefined",
  //       ariaInvalid: "grammar",
  //       ariaKeyShortcuts: "slider-shortcuts",
  //       ariaLabel: "Slider message",
  //       ariaLabelledBy: "slider-label",
  //       ariaLive: "polite",
  //       ariaOrientation: "horizontal",
  //       ariaOwns: "slider-owns",
  //       ariaReadOnly: true,
  //       ariaRelevant: "additions removals text",
  //       ariaRoleDescription: "Slider role description",
  //       ariaValueMax: 100,
  //       ariaValueMin: 0,
  //       ariaValueNow: 50,
  //     });
  //     assertType<CamelCaseAria<"awesomeslider slider">>({
  //       ariaAtomic: true,
  //       ariaBusy: false,
  //       ariaControls: "slider-controls",
  //       ariaCurrent: "location",
  //       ariaDescribedBy: "slider-description",
  //       ariaDetails: "slider-details",
  //       ariaDisabled: "true",
  //       ariaDropEffect: "copy",
  //       ariaErrorMessage: "slider-error",
  //       ariaFlowTo: "slider-flow",
  //       ariaGrabbed: "undefined",
  //       ariaHasPopup: "menu",
  //       ariaHidden: "undefined",
  //       ariaInvalid: "grammar",
  //       ariaKeyShortcuts: "slider-shortcuts",
  //       ariaLabel: "Slider message",
  //       ariaLabelledBy: "slider-label",
  //       ariaLive: "polite",
  //       ariaOrientation: "horizontal",
  //       ariaOwns: "slider-owns",
  //       ariaReadOnly: true,
  //       ariaRelevant: "additions removals text",
  //       ariaRoleDescription: "Slider role description",
  //       ariaValueMax: 100,
  //       ariaValueMin: 0,
  //       ariaValueNow: 50,
  //     });
  //   });
  //   it("should not allow invalid slider role attributes", () => {
  //     assertType<CamelCaseAria<"slider">>({
  //       ariaAtomic: true,
  //       ariaBusy: false,
  //       // @ts-expect-error - should not allow invalid attributes
  //       ariaRowCount: 1,
  //     });
  //     assertType<CamelCaseAria<"awesomeslider slider">>({
  //       ariaAtomic: true,
  //       ariaBusy: false,
  //       // @ts-expect-error - should not allow invalid attributes
  //       ariaRowCount: 1,
  //     });
  //   });
  // });

  // describe("spinbutton role", () => {
  //   it("should allow valid spinbutton role attributes", () => {
  //     assertType<CamelCaseAria<"spinbutton">>({
  //       ariaActiveDescendant: "spinbutton-active-descendant",
  //       ariaAtomic: true,
  //       ariaBusy: false,
  //       ariaControls: "spinbutton-controls",
  //       ariaCurrent: "location",
  //       ariaDescribedBy: "spinbutton-description",
  //       ariaDetails: "spinbutton-details",
  //       ariaDisabled: "true",
  //       ariaDropEffect: "copy",
  //       ariaErrorMessage: "spinbutton-error",
  //       ariaFlowTo: "spinbutton-flow",
  //       ariaGrabbed: "undefined",
  //       ariaHasPopup: "menu",
  //       ariaHidden: "undefined",
  //       ariaInvalid: "grammar",
  //       ariaKeyShortcuts: "spinbutton-shortcuts",
  //       ariaLabel: "Spin button message",
  //       ariaLabelledBy: "spinbutton-label",
  //       ariaLive: "polite",
  //       ariaOwns: "spinbutton-owns",
  //       ariaReadOnly: true,
  //       ariaRelevant: "additions removals text",
  //       ariaRequired: true,
  //       ariaRoleDescription: "Spin button role description",
  //       ariaValueMax: 100,
  //       ariaValueMin: 0,
  //       ariaValueNow: 50,
  //     });
  //     assertType<CamelCaseAria<"awesomespinbutton spinbutton">>({
  //       ariaActiveDescendant: "spinbutton-active-descendant",
  //       ariaAtomic: true,
  //       ariaBusy: false,
  //       ariaControls: "spinbutton-controls",
  //       ariaCurrent: "location",
  //       ariaDescribedBy: "spinbutton-description",
  //       ariaDetails: "spinbutton-details",
  //       ariaDisabled: "true",
  //       ariaDropEffect: "copy",
  //       ariaErrorMessage: "spinbutton-error",
  //       ariaFlowTo: "spinbutton-flow",
  //       ariaGrabbed: "undefined",
  //       ariaHasPopup: "menu",
  //       ariaHidden: "undefined",
  //       ariaInvalid: "grammar",
  //       ariaKeyShortcuts: "spinbutton-shortcuts",
  //       ariaLabel: "Spin button message",
  //       ariaLabelledBy: "spinbutton-label",
  //       ariaLive: "polite",
  //       ariaOwns: "spinbutton-owns",
  //       ariaReadOnly: true,
  //       ariaRelevant: "additions removals text",
  //       ariaRequired: true,
  //       ariaRoleDescription: "Spin button role description",
  //       ariaValueMax: 100,
  //       ariaValueMin: 0,
  //       ariaValueNow: 50,
  //     });
  //   });
  //   it("should not allow invalid spinbutton role attributes", () => {
  //     assertType<CamelCaseAria<"spinbutton">>({
  //       ariaAtomic: true,
  //       ariaBusy: false,
  //       // @ts-expect-error - should not allow invalid attributes
  //       ariaRowCount: 1,
  //     });
  //     assertType<CamelCaseAria<"awesomespinbutton spinbutton">>({
  //       ariaAtomic: true,
  //       ariaBusy: false,
  //       // @ts-expect-error - should not allow invalid attributes
  //       ariaRowCount: 1,
  //     });
  //   });
  // });

  // describe("status role", () => {
  //   it("should allow valid status role attributes", () => {
  //     assertType<CamelCaseAria<"status">>({
  //       ariaAtomic: true,
  //       ariaBusy: false,
  //       ariaControls: "status-controls",
  //       ariaCurrent: "location",
  //       ariaDescribedBy: "status-description",
  //       ariaDetails: "status-details",
  //       ariaDisabled: "true",
  //       ariaDropEffect: "copy",
  //       ariaErrorMessage: "status-error",
  //       ariaFlowTo: "status-flow",
  //       ariaGrabbed: "undefined",
  //       ariaHasPopup: "menu",
  //       ariaHidden: "undefined",
  //       ariaInvalid: "grammar",
  //       ariaKeyShortcuts: "status-shortcuts",
  //       ariaLabel: "Status message",
  //       ariaLabelledBy: "status-label",
  //       ariaLive: "polite",
  //       ariaOwns: "status-owns",
  //       ariaRelevant: "additions removals text",
  //       ariaRoleDescription: "Status role description",
  //     });
  //     assertType<CamelCaseAria<"awesomestatus status">>({
  //       ariaAtomic: true,
  //       ariaBusy: false,
  //       ariaControls: "status-controls",
  //       ariaCurrent: "location",
  //       ariaDescribedBy: "status-description",
  //       ariaDetails: "status-details",
  //       ariaDisabled: "true",
  //       ariaDropEffect: "copy",
  //       ariaErrorMessage: "status-error",
  //       ariaFlowTo: "status-flow",
  //       ariaGrabbed: "undefined",
  //       ariaHasPopup: "menu",
  //       ariaHidden: "undefined",
  //       ariaInvalid: "grammar",
  //       ariaKeyShortcuts: "status-shortcuts",
  //       ariaLabel: "Status message",
  //       ariaLabelledBy: "status-label",
  //       ariaLive: "polite",
  //       ariaOwns: "status-owns",
  //       ariaRelevant: "additions removals text",
  //       ariaRoleDescription: "Status role description",
  //     });
  //   });
  //   it("should not allow invalid status role attributes", () => {
  //     assertType<CamelCaseAria<"status">>({
  //       ariaAtomic: true,
  //       ariaBusy: false,
  //       // @ts-expect-error - should not allow invalid attributes
  //       ariaRowCount: 1,
  //     });
  //     assertType<CamelCaseAria<"awesomestatus status">>({
  //       ariaAtomic: true,
  //       ariaBusy: false,
  //       // @ts-expect-error - should not allow invalid attributes
  //       ariaRowCount: 1,
  //     });
  //   });
  // });
  describe("strong role", () => {
    it("should allow valid strong role attributes", () => {
      assertType<CamelCaseAria<"strong">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "strong-controls",
        ariaCurrent: "location",
        ariaDescribedBy: "strong-description",
        ariaDetails: "strong-details",
        ariaDisabled: "true",
        ariaDropEffect: "copy",
        ariaErrorMessage: "strong-error",
        ariaFlowTo: "strong-flow",
        ariaGrabbed: "undefined",
        ariaHasPopup: "menu",
        ariaHidden: "undefined",
        ariaInvalid: "grammar",
        ariaKeyShortcuts: "strong-shortcuts",
        ariaLive: "polite",
        ariaOwns: "strong-owns",
        ariaRelevant: "additions removals text",
        ariaRoleDescription: "Strong role description",
      });
      assertType<CamelCaseAria<"awesomestrong strong">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "strong-controls",
        ariaCurrent: "location",
        ariaDescribedBy: "strong-description",
        ariaDetails: "strong-details",
        ariaDisabled: "true",
        ariaDropEffect: "copy",
        ariaErrorMessage: "strong-error",
        ariaFlowTo: "strong-flow",
        ariaGrabbed: "undefined",
        ariaHasPopup: "menu",
        ariaHidden: "undefined",
        ariaInvalid: "grammar",
        ariaKeyShortcuts: "strong-shortcuts",
        ariaLive: "polite",
        ariaOwns: "strong-owns",
        ariaRelevant: "additions removals text",
        ariaRoleDescription: "Strong role description",
      });
    });
    it("should not allow label and labelledBy attributes", () => {
      assertType<CamelCaseAria<"strong">>({
        // @ts-expect-error - should not allow label attribute
        ariaLabel: "Strong message",
      });
      assertType<CamelCaseAria<"awesomestrong strong">>({
        // @ts-expect-error - should not allow label attribute
        ariaLabelledBy: "Strong message",
      });
    });

    it("should not allow invalid strong role attributes", () => {
      assertType<CamelCaseAria<"strong">>({
        ariaAtomic: true,
        ariaBusy: false,
        // @ts-expect-error - should not allow invalid attributes
        ariaRowCount: 1,
      });
      assertType<CamelCaseAria<"awesomestrong strong">>({
        ariaAtomic: true,
        ariaBusy: false,
        // @ts-expect-error - should not allow invalid attributes
        ariaRowCount: 1,
      });
    });
  });

  describe("subscript role", () => {
    it("should allow valid subscript role attributes", () => {
      assertType<CamelCaseAria<"subscript">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "subscript-controls",
        ariaCurrent: "location",
        ariaDescribedBy: "subscript-description",
        ariaDetails: "subscript-details",
        ariaDisabled: "true",
        ariaDropEffect: "copy",
        ariaErrorMessage: "subscript-error",
        ariaFlowTo: "subscript-flow",
        ariaGrabbed: "undefined",
        ariaHasPopup: "menu",
        ariaHidden: "true",
        ariaInvalid: "grammar",
        ariaKeyShortcuts: "subscript-shortcuts",
        ariaLive: "polite",
        ariaOwns: "subscript-owns",
        ariaRelevant: "additions removals text",
        ariaRoleDescription: "Subscript role description",
      });
      assertType<CamelCaseAria<"awesomesubscript subscript">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "subscript-controls",
        ariaCurrent: "location",
        ariaDescribedBy: "subscript-description",
        ariaDetails: "subscript-details",
        ariaDisabled: "true",
        ariaDropEffect: "copy",
        ariaErrorMessage: "subscript-error",
        ariaFlowTo: "subscript-flow",
        ariaGrabbed: "undefined",
        ariaHasPopup: "menu",
        ariaHidden: "true",
        ariaInvalid: "grammar",
        ariaKeyShortcuts: "subscript-shortcuts",
        ariaLive: "polite",
        ariaOwns: "subscript-owns",
        ariaRelevant: "additions removals text",
        ariaRoleDescription: "Subscript role description",
      });
    });
    it("should not allow label and labelledBy attributes", () => {
      assertType<CamelCaseAria<"subscript">>({
        // @ts-expect-error - should not allow label attribute
        ariaLabel: "Subscript message",
      });
      assertType<CamelCaseAria<"awesomesubscript subscript">>({
        // @ts-expect-error - should not allow label attribute
        ariaLabelledBy: "Subscript message",
      });
    });
    it("should not allow invalid subscript role attributes", () => {
      assertType<CamelCaseAria<"subscript">>({
        ariaAtomic: true,
        ariaBusy: false,
        // @ts-expect-error - should not allow invalid attributes
        ariaRowCount: 1,
      });
      assertType<CamelCaseAria<"awesomesubscript subscript">>({
        ariaAtomic: true,
        ariaBusy: false,
        // @ts-expect-error - should not allow invalid attributes
        ariaRowCount: 1,
      });
    });
  });
  describe("superscript role", () => {
    it("should allow valid superscript role attributes", () => {
      assertType<CamelCaseAria<"superscript">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "superscript-controls",
        ariaCurrent: "location",
        ariaDescribedBy: "superscript-description",
        ariaDetails: "superscript-details",
        ariaDisabled: "true",
        ariaDropEffect: "copy",
        ariaErrorMessage: "superscript-error",
        ariaFlowTo: "superscript-flow",
        ariaGrabbed: "undefined",
        ariaHasPopup: "menu",
        ariaHidden: "true",
        ariaInvalid: "grammar",
        ariaKeyShortcuts: "superscript-shortcuts",
        ariaLive: "polite",
        ariaOwns: "superscript-owns",
        ariaRelevant: "additions removals text",
        ariaRoleDescription: "superscript role description",
      });
      assertType<CamelCaseAria<"awesomesuperscript superscript">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "superscript-controls",
        ariaCurrent: "location",
        ariaDescribedBy: "superscript-description",
        ariaDetails: "superscript-details",
        ariaDisabled: "true",
        ariaDropEffect: "copy",
        ariaErrorMessage: "superscript-error",
        ariaFlowTo: "superscript-flow",
        ariaGrabbed: "undefined",
        ariaHasPopup: "menu",
        ariaHidden: "true",
        ariaInvalid: "grammar",
        ariaKeyShortcuts: "superscript-shortcuts",
        ariaLive: "polite",
        ariaOwns: "superscript-owns",
        ariaRelevant: "additions removals text",
        ariaRoleDescription: "superscript role description",
      });
    });
    it("should not allow label and labelledBy attributes", () => {
      assertType<CamelCaseAria<"superscript">>({
        // @ts-expect-error - should not allow label attribute
        ariaLabel: "superscript message",
      });
      assertType<CamelCaseAria<"awesomesuperscript superscript">>({
        // @ts-expect-error - should not allow label attribute
        ariaLabelledBy: "superscript message",
      });
    });
    it("should not allow invalid superscript role attributes", () => {
      assertType<CamelCaseAria<"superscript">>({
        ariaAtomic: true,
        ariaBusy: false,
        // @ts-expect-error - should not allow invalid attributes
        ariaRowCount: 1,
      });
      assertType<CamelCaseAria<"awesomesuperscript superscript">>({
        ariaAtomic: true,
        ariaBusy: false,
        // @ts-expect-error - should not allow invalid attributes
        ariaRowCount: 1,
      });
    });
  });
  describe("switch role", () => {
    it("should allow valid switch role attributes", () => {
      assertType<CamelCaseAria<"switch">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaChecked: true,
        ariaControls: "switch-controls",
        ariaCurrent: "location",
        ariaDescribedBy: "switch-description",
        ariaDetails: "switch-details",
        ariaDisabled: "true",
        ariaDropEffect: "copy",
        ariaErrorMessage: "switch-error",
        ariaExpanded: "undefined",
        ariaFlowTo: "switch-flow",
        ariaGrabbed: "undefined",
        ariaHasPopup: "menu",
        ariaHidden: "undefined",
        ariaInvalid: "grammar",
        ariaKeyShortcuts: "switch-shortcuts",
        ariaLabel: "Switch message",
        ariaLabelledBy: "switch-label",
        ariaLive: "polite",
        ariaOwns: "switch-owns",
        ariaReadOnly: true,
        ariaRelevant: "additions removals text",
        ariaRequired: true,
        ariaRoleDescription: "Switch role description",
      });
      assertType<CamelCaseAria<"awesomeswitch switch">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "switch-controls",
        ariaCurrent: "location",
        ariaDescribedBy: "switch-description",
        ariaDetails: "switch-details",
        ariaDisabled: "true",
        ariaDropEffect: "copy",
        ariaErrorMessage: "switch-error",
        ariaExpanded: "undefined",
        ariaFlowTo: "switch-flow",
        ariaGrabbed: "undefined",
        ariaHasPopup: "menu",
        ariaHidden: "undefined",
        ariaInvalid: "grammar",
        ariaKeyShortcuts: "switch-shortcuts",
        ariaLabel: "Switch message",
        ariaLabelledBy: "switch-label",
        ariaLive: "polite",
        ariaOwns: "switch-owns",
        ariaReadOnly: true,
        ariaRelevant: "additions removals text",
        ariaRequired: true,
        ariaRoleDescription: "Switch role description",
      });
    });
    it("should not allow invalid switch role attributes", () => {
      assertType<CamelCaseAria<"switch">>({
        ariaAtomic: true,
        ariaBusy: false,
        // @ts-expect-error - should not allow invalid attributes
        ariaRowCount: 1,
      });
      assertType<CamelCaseAria<"awesomeswitch switch">>({
        ariaAtomic: true,
        ariaBusy: false,
        // @ts-expect-error - should not allow invalid attributes
        ariaRowCount: 1,
      });
    });
  });
  describe("tab role", () => {
    it("should allow valid tab role attributes", () => {
      assertType<CamelCaseAria<"tab">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "tab-controls",
        ariaCurrent: "location",
        ariaDescribedBy: "tab-description",
        ariaDetails: "tab-details",
        ariaDisabled: "true",
        ariaDropEffect: "copy",
        ariaErrorMessage: "tab-error",
        ariaExpanded: "undefined",
        ariaFlowTo: "tab-flow",
        ariaGrabbed: "undefined",
        ariaHasPopup: "menu",
        ariaHidden: "undefined",
        ariaInvalid: "grammar",
        ariaKeyShortcuts: "tab-shortcuts",
        ariaLabel: "Tab message",
        ariaLabelledBy: "tab-label",
        ariaLive: "polite",
        ariaOwns: "tab-owns",
        ariaPosInSet: 1,
        ariaRelevant: "additions removals text",
        ariaRoleDescription: "Tab role description",
        ariaSelected: true,
        ariaSetSize: 3,
      });
      assertType<CamelCaseAria<"awesometab tab">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "tab-controls",
        ariaCurrent: "location",
        ariaDescribedBy: "tab-description",
        ariaDetails: "tab-details",
        ariaDisabled: "true",
        ariaDropEffect: "copy",
        ariaErrorMessage: "tab-error",
        ariaExpanded: "undefined",
        ariaFlowTo: "tab-flow",
        ariaGrabbed: "undefined",
        ariaHasPopup: "menu",
        ariaHidden: "undefined",
        ariaInvalid: "grammar",
        ariaKeyShortcuts: "tab-shortcuts",
        ariaLabel: "Tab message",
        ariaLabelledBy: "tab-label",
        ariaLive: "polite",
        ariaOwns: "tab-owns",
        ariaPosInSet: 1,
        ariaRelevant: "additions removals text",
        ariaRoleDescription: "Tab role description",
        ariaSelected: true,
        ariaSetSize: 3,
      });
    });
    it("should not allow invalid tab role attributes", () => {
      assertType<CamelCaseAria<"tab">>({
        // @ts-expect-error - should not allow invalid attributes
        ariaActiveDescendant: "tab-active-descendant",
      });
      assertType<CamelCaseAria<"awesometab tab">>({
        // @ts-expect-error - should not allow invalid attributes
        ariaActiveDescendant: "tab-active-descendant",
      });
    });
  });
  describe("table role", () => {
    it("should allow valid table role attributes", () => {
      assertType<CamelCaseAria<"table">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "table-controls",
        ariaColCount: 3,
        ariaCurrent: "location",
        ariaDescribedBy: "table-description",
        ariaDetails: "table-details",
        ariaDisabled: "true",
        ariaDropEffect: "copy",
        ariaErrorMessage: "table-error",
        ariaFlowTo: "table-flow",
        ariaGrabbed: "undefined",
        ariaHasPopup: "menu",
        ariaHidden: "undefined",
        ariaInvalid: "grammar",
        ariaKeyShortcuts: "table-shortcuts",
        ariaLabel: "Table message",
        ariaLabelledBy: "table-label",
        ariaLive: "polite",
        ariaOwns: "table-owns",
        ariaRelevant: "additions removals text",
        ariaRoleDescription: "Table role description",
        ariaRowCount: 5,
      });
      assertType<CamelCaseAria<"awesometable table">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "table-controls",
        ariaColCount: 3,
        ariaCurrent: "location",
        ariaDescribedBy: "table-description",
        ariaDetails: "table-details",
        ariaDisabled: "true",
        ariaDropEffect: "copy",
        ariaErrorMessage: "table-error",
        ariaFlowTo: "table-flow",
        ariaGrabbed: "undefined",
        ariaHasPopup: "menu",
        ariaHidden: "undefined",
        ariaInvalid: "grammar",
        ariaKeyShortcuts: "table-shortcuts",
        ariaLabel: "Table message",
        ariaLabelledBy: "table-label",
        ariaLive: "polite",
        ariaOwns: "table-owns",
        ariaRelevant: "additions removals text",
        ariaRoleDescription: "Table role description",
        ariaRowCount: 5,
      });
    });
    it("should not allow invalid table role attributes", () => {
      assertType<CamelCaseAria<"table">>({
        // @ts-expect-error - should not allow invalid attributes
        ariaActiveDescendant: "table-active-descendant",
      });
      assertType<CamelCaseAria<"awesometable table">>({
        // @ts-expect-error - should not allow invalid attributes
        ariaActiveDescendant: "table-active-descendant",
      });
    });
  });
  describe("tablist role", () => {
    it("should allow valid tablist role attributes", () => {
      assertType<CamelCaseAria<"tablist">>({
        ariaActiveDescendant: "tablist-active-descendant",
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "tablist-controls",
        ariaCurrent: "location",
        ariaDescribedBy: "tablist-description",
        ariaDetails: "tablist-details",
        ariaDisabled: "true",
        ariaDropEffect: "copy",
        ariaErrorMessage: "tablist-error",
        ariaFlowTo: "tablist-flow",
        ariaGrabbed: "undefined",
        ariaHasPopup: "menu",
        ariaHidden: "undefined",
        ariaInvalid: "grammar",
        ariaKeyShortcuts: "tablist-shortcuts",
        ariaLabel: "Tablist message",
        ariaLabelledBy: "tablist-label",
        ariaLive: "polite",
        ariaMultiSelectable: true,
        ariaOrientation: "horizontal",
        ariaOwns: "tablist-owns",
        ariaRelevant: "additions removals text",
        ariaRoleDescription: "Tablist role description",
      });
      assertType<CamelCaseAria<"awesometablist tablist">>({
        ariaActiveDescendant: "tablist-active-descendant",
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "tablist-controls",
        ariaCurrent: "location",
        ariaDescribedBy: "tablist-description",
        ariaDetails: "tablist-details",
        ariaDisabled: "true",
        ariaDropEffect: "copy",
        ariaErrorMessage: "tablist-error",
        ariaFlowTo: "tablist-flow",
        ariaGrabbed: "undefined",
        ariaHasPopup: "menu",
        ariaHidden: "undefined",
        ariaInvalid: "grammar",
        ariaKeyShortcuts: "tablist-shortcuts",
        ariaLabel: "Tablist message",
        ariaLabelledBy: "tablist-label",
        ariaLive: "polite",
        ariaMultiSelectable: true,
        ariaOrientation: "horizontal",
        ariaOwns: "tablist-owns",
        ariaRelevant: "additions removals text",
        ariaRoleDescription: "Tablist role description",
      });
    });
    it("should not allow invalid tablist role attributes", () => {
      assertType<CamelCaseAria<"tablist">>({
        // @ts-expect-error - should not allow invalid attributes
        ariaRowCount: 1,
      });
      assertType<CamelCaseAria<"awesometablist tablist">>({
        // @ts-expect-error - should not allow invalid attributes
        ariaRowCount: 1,
      });
    });
  });
  describe("tabpanel role", () => {
    it("should allow valid tabpanel role attributes", () => {
      assertType<CamelCaseAria<"tabpanel">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "tabpanel-controls",
        ariaCurrent: "location",
        ariaDescribedBy: "tabpanel-description",
        ariaDetails: "tabpanel-details",
        ariaDisabled: "true",
        ariaDropEffect: "copy",
        ariaErrorMessage: "tabpanel-error",
        ariaFlowTo: "tabpanel-flow",
        ariaGrabbed: "undefined",
        ariaHasPopup: "menu",
        ariaHidden: "undefined",
        ariaInvalid: "grammar",
        ariaKeyShortcuts: "tabpanel-shortcuts",
        ariaLabel: "tabpanel message",
        ariaLabelledBy: "tabpanel-label",
        ariaLive: "polite",
        ariaOwns: "tabpanel-owns",
        ariaRelevant: "additions removals text",
        ariaRoleDescription: "tabpanel role description",
      });
      assertType<CamelCaseAria<"awesometabpanel tabpanel">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "tabpanel-controls",
        ariaCurrent: "location",
        ariaDescribedBy: "tabpanel-description",
        ariaDetails: "tabpanel-details",
        ariaDisabled: "true",
        ariaDropEffect: "copy",
        ariaErrorMessage: "tabpanel-error",
        ariaFlowTo: "tabpanel-flow",
        ariaGrabbed: "undefined",
        ariaHasPopup: "menu",
        ariaHidden: "undefined",
        ariaInvalid: "grammar",
        ariaKeyShortcuts: "tabpanel-shortcuts",
        ariaLabel: "tabpanel message",
        ariaLabelledBy: "tabpanel-label",
        ariaLive: "polite",
        ariaOwns: "tabpanel-owns",
        ariaRelevant: "additions removals text",
        ariaRoleDescription: "tabpanel role description",
      });
    });
  });
  it("should not allow invalid tabpanel role attributes", () => {
    assertType<CamelCaseAria<"tabpanel">>({
      ariaAtomic: true,
      ariaBusy: false,
      // @ts-expect-error - should not allow invalid attributes
      ariaRowCount: 1,
    });
    assertType<CamelCaseAria<"awesometabpanel tabpanel">>({
      ariaAtomic: true,
      ariaBusy: false,
      // @ts-expect-error - should not allow invalid attributes
      ariaRowCount: 1,
    });
  });
  describe("term role", () => {
    it("should allow valid term role attributes", () => {
      assertType<CamelCaseAria<"term">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "term-controls",
        ariaCurrent: "location",
        ariaDescribedBy: "term-description",
        ariaDetails: "term-details",
        ariaDisabled: "true",
        ariaDropEffect: "copy",
        ariaErrorMessage: "term-error",
        ariaFlowTo: "term-flow",
        ariaGrabbed: "undefined",
        ariaHasPopup: "menu",
        ariaHidden: "true",
        ariaInvalid: "grammar",
        ariaKeyShortcuts: "term-shortcuts",
        ariaLive: "polite",
        ariaLabel: "Term message",
        ariaLabelledBy: "term-label",
        ariaOwns: "term-owns",
        ariaRelevant: "additions removals text",
        ariaRoleDescription: "term role description",
      });
      assertType<CamelCaseAria<"awesometerm term">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "term-controls",
        ariaCurrent: "location",
        ariaDescribedBy: "term-description",
        ariaDetails: "term-details",
        ariaDisabled: "true",
        ariaDropEffect: "copy",
        ariaErrorMessage: "term-error",
        ariaFlowTo: "term-flow",
        ariaGrabbed: "undefined",
        ariaHasPopup: "menu",
        ariaHidden: "true",
        ariaInvalid: "grammar",
        ariaKeyShortcuts: "term-shortcuts",
        ariaLabel: "Term message",
        ariaLabelledBy: "term-label",
        ariaLive: "polite",
        ariaOwns: "term-owns",
        ariaRelevant: "additions removals text",
        ariaRoleDescription: "term role description",
      });
    });
    it("should not allow invalid term role attributes", () => {
      assertType<CamelCaseAria<"term">>({
        ariaAtomic: true,
        ariaBusy: false,
        // @ts-expect-error - should not allow invalid attributes
        ariaRowCount: 1,
      });
      assertType<CamelCaseAria<"awesometerm superscript">>({
        ariaAtomic: true,
        ariaBusy: false,
        // @ts-expect-error - should not allow invalid attributes
        ariaRowCount: 1,
      });
    });
  });

  describe("textbox role", () => {
    it("should allow valid textbox role attributes", () => {
      assertType<CamelCaseAria<"textbox">>({
        ariaActiveDescendant: "textbox-active-descendant",
        ariaAtomic: true,
        ariaAutoComplete: "both",
        ariaBusy: false,
        ariaControls: "textbox-controls",
        ariaCurrent: "location",
        ariaDescribedBy: "textbox-description",
        ariaDetails: "textbox-details",
        ariaDisabled: "true",
        ariaDropEffect: "copy",
        ariaErrorMessage: "textbox-error",
        ariaFlowTo: "textbox-flow",
        ariaGrabbed: "undefined",
        ariaHasPopup: "menu",
        ariaHidden: "undefined",
        ariaInvalid: "grammar",
        ariaKeyShortcuts: "textbox-shortcuts",
        ariaLabel: "Textbox message",
        ariaLabelledBy: "textbox-label",
        ariaLive: "polite",
        ariaMultiLine: true,
        ariaOwns: "textbox-owns",
        ariaPlaceholder: "Type here...",
        ariaReadOnly: true,
        ariaRelevant: "additions removals text",
        ariaRequired: true,
        ariaRoleDescription: "Textbox role description",
      });
      assertType<CamelCaseAria<"awesometextbox textbox">>({
        ariaActiveDescendant: "textbox-active-descendant",
        ariaAtomic: true,
        ariaAutoComplete: "both",
        ariaBusy: false,
        ariaControls: "textbox-controls",
        ariaCurrent: "location",
        ariaDescribedBy: "textbox-description",
        ariaDetails: "textbox-details",
        ariaDisabled: "true",
        ariaDropEffect: "copy",
        ariaErrorMessage: "textbox-error",
        ariaFlowTo: "textbox-flow",
        ariaGrabbed: "undefined",
        ariaHasPopup: "menu",
        ariaHidden: "undefined",
        ariaInvalid: "grammar",
        ariaKeyShortcuts: "textbox-shortcuts",
        ariaLabel: "Textbox message",
        ariaLabelledBy: "textbox-label",
        ariaLive: "polite",
        ariaMultiLine: true,
        ariaOwns: "textbox-owns",
        ariaPlaceholder: "Type here...",
        ariaReadOnly: true,
        ariaRelevant: "additions removals text",
        ariaRequired: true,
        ariaRoleDescription: "Textbox role description",
      });
    });
    it("should not allow invalid textbox role attributes", () => {
      assertType<CamelCaseAria<"textbox">>({
        ariaAtomic: true,
        ariaBusy: false,
        // @ts-expect-error - should not allow invalid attributes
        ariaRowCount: 1,
      });
      assertType<CamelCaseAria<"awesometextbox textbox">>({
        ariaAtomic: true,
        ariaBusy: false,
        // @ts-expect-error - should not allow invalid attributes
        ariaRowCount: 1,
      });
    });
  });
  describe("time role", () => {
    it("should allow valid time role attributes", () => {
      assertType<CamelCaseAria<"time">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "time-controls",
        ariaCurrent: "location",
        ariaDescribedBy: "time-description",
        ariaDetails: "time-details",
        ariaDisabled: "true",
        ariaDropEffect: "copy",
        ariaErrorMessage: "time-error",
        ariaFlowTo: "time-flow",
        ariaGrabbed: "undefined",
        ariaHasPopup: "menu",
        ariaHidden: "undefined",
        ariaInvalid: "grammar",
        ariaKeyShortcuts: "time-shortcuts",
        ariaLabel: "time message",
        ariaLabelledBy: "time-label",
        ariaLive: "polite",
        ariaOwns: "time-owns",
        ariaRelevant: "additions removals text",
        ariaRoleDescription: "time role description",
      });
      assertType<CamelCaseAria<"awesometime time">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "time-controls",
        ariaCurrent: "location",
        ariaDescribedBy: "time-description",
        ariaDetails: "time-details",
        ariaDisabled: "true",
        ariaDropEffect: "copy",
        ariaErrorMessage: "time-error",
        ariaFlowTo: "time-flow",
        ariaGrabbed: "undefined",
        ariaHasPopup: "menu",
        ariaHidden: "undefined",
        ariaInvalid: "grammar",
        ariaKeyShortcuts: "time-shortcuts",
        ariaLabel: "time message",
        ariaLabelledBy: "time-label",
        ariaLive: "polite",
        ariaOwns: "time-owns",
        ariaRelevant: "additions removals text",
        ariaRoleDescription: "time role description",
      });
    });
    it("should not allow invalid time role attributes", () => {
      assertType<CamelCaseAria<"time">>({
        ariaAtomic: true,
        ariaBusy: false,
        // @ts-expect-error - should not allow invalid attributes
        ariaRowCount: 1,
      });
      assertType<CamelCaseAria<"awesometime time">>({
        ariaAtomic: true,
        ariaBusy: false,
        // @ts-expect-error - should not allow invalid attributes
        ariaRowCount: 1,
      });
    });
  });
  describe("timer role", () => {
    it("should allow valid timer role attributes", () => {
      assertType<CamelCaseAria<"timer">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "timer-controls",
        ariaCurrent: "location",
        ariaDescribedBy: "timer-description",
        ariaDetails: "timer-details",
        ariaDisabled: "true",
        ariaDropEffect: "copy",
        ariaErrorMessage: "timer-error",
        ariaFlowTo: "timer-flow",
        ariaGrabbed: "undefined",
        ariaHasPopup: "menu",
        ariaHidden: "undefined",
        ariaInvalid: "grammar",
        ariaKeyShortcuts: "timer-shortcuts",
        ariaLabel: "Timer message",
        ariaLabelledBy: "timer-label",
        ariaLive: "polite",
        ariaOwns: "timer-owns",
        ariaRelevant: "additions removals text",
        ariaRoleDescription: "Timer role description",
      });
      assertType<CamelCaseAria<"awesometimer timer">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "timer-controls",
        ariaCurrent: "location",
        ariaDescribedBy: "timer-description",
        ariaDetails: "timer-details",
        ariaDisabled: "true",
        ariaDropEffect: "copy",
        ariaErrorMessage: "timer-error",
        ariaFlowTo: "timer-flow",
        ariaGrabbed: "undefined",
        ariaHasPopup: "menu",
        ariaHidden: "undefined",
        ariaInvalid: "grammar",
        ariaKeyShortcuts: "timer-shortcuts",
        ariaLabel: "Timer message",
        ariaLabelledBy: "timer-label",
        ariaLive: "polite",
        ariaOwns: "timer-owns",
        ariaRelevant: "additions removals text",
        ariaRoleDescription: "Timer role description",
      });
    });
    it("should not allow invalid timer role attributes", () => {
      assertType<CamelCaseAria<"timer">>({
        ariaAtomic: true,
        ariaBusy: false,
        // @ts-expect-error - should not allow invalid attributes
        ariaRowCount: 1,
      });
      assertType<CamelCaseAria<"awesometimer timer">>({
        ariaAtomic: true,
        ariaBusy: false,
        // @ts-expect-error - should not allow invalid attributes
        ariaRowCount: 1,
      });
    });
  });

  describe("toolbar role", () => {
    it("should allow valid toolbar role attributes", () => {
      assertType<CamelCaseAria<"toolbar">>({
        ariaActiveDescendant: "toolbar-active-descendant",
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "toolbar-controls",
        ariaCurrent: "location",
        ariaDescribedBy: "toolbar-description",
        ariaDetails: "toolbar-details",
        ariaDisabled: "true",
        ariaDropEffect: "copy",
        ariaErrorMessage: "toolbar-error",
        ariaFlowTo: "toolbar-flow",
        ariaGrabbed: "undefined",
        ariaHasPopup: "menu",
        ariaHidden: "undefined",
        ariaInvalid: "grammar",
        ariaKeyShortcuts: "toolbar-shortcuts",
        ariaLabel: "Toolbar message",
        ariaLabelledBy: "toolbar-label",
        ariaLive: "polite",
        ariaOrientation: "horizontal",
        ariaOwns: "toolbar-owns",
        ariaRelevant: "additions removals text",
        ariaRoleDescription: "Toolbar role description",
      });
      assertType<CamelCaseAria<"toolbar">>({
        ariaActiveDescendant: "toolbar-active-descendant",
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "toolbar-controls",
        ariaCurrent: "location",
        ariaDescribedBy: "toolbar-description",
        ariaDetails: "toolbar-details",
        ariaDisabled: "true",
        ariaDropEffect: "copy",
        ariaErrorMessage: "toolbar-error",
        ariaFlowTo: "toolbar-flow",
        ariaGrabbed: "undefined",
        ariaHasPopup: "menu",
        ariaHidden: "undefined",
        ariaInvalid: "grammar",
        ariaKeyShortcuts: "toolbar-shortcuts",
        ariaLabel: "Toolbar message",
        ariaLabelledBy: "toolbar-label",
        ariaLive: "polite",
        ariaOrientation: "horizontal",
        ariaOwns: "toolbar-owns",
        ariaRelevant: "additions removals text",
        ariaRoleDescription: "Toolbar role description",
      });
    });
    it("should not allow invalid toolbar role attributes", () => {
      assertType<CamelCaseAria<"toolbar">>({
        // @ts-expect-error - should not allow invalid attributes
        ariaRowCount: 1,
      });
      assertType<CamelCaseAria<"awesometoolbar toolbar">>({
        // @ts-expect-error - should not allow invalid attributes
        ariaRowCount: 1,
      });
    });
  });

  describe("tooltip role", () => {
    it("should allow valid tooltip role attributes", () => {
      assertType<CamelCaseAria<"tooltip">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "tooltip-controls",
        ariaCurrent: "location",
        ariaDescribedBy: "tooltip-description",
        ariaDetails: "tooltip-details",
        ariaDisabled: "true",
        ariaDropEffect: "copy",
        ariaErrorMessage: "tooltip-error",
        ariaFlowTo: "tooltip-flow",
        ariaGrabbed: "undefined",
        ariaHasPopup: "menu",
        ariaHidden: "undefined",
        ariaInvalid: "grammar",
        ariaKeyShortcuts: "tooltip-shortcuts",
        ariaLabel: "Tooltip message",
        ariaLabelledBy: "tooltip-label",
        ariaLive: "polite",
        ariaOwns: "tooltip-owns",
        ariaRelevant: "additions removals text",
        ariaRoleDescription: "Tooltip role description",
      });
      assertType<CamelCaseAria<"awesometooltip tooltip">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "tooltip-controls",
        ariaCurrent: "location",
        ariaDescribedBy: "tooltip-description",
        ariaDetails: "tooltip-details",
        ariaDisabled: "true",
        ariaDropEffect: "copy",
        ariaErrorMessage: "tooltip-error",
        ariaFlowTo: "tooltip-flow",
        ariaGrabbed: "undefined",
        ariaHasPopup: "menu",
        ariaHidden: "undefined",
        ariaInvalid: "grammar",
        ariaKeyShortcuts: "tooltip-shortcuts",
        ariaLabel: "Tooltip message",
        ariaLabelledBy: "tooltip-label",
        ariaLive: "polite",
        ariaOwns: "tooltip-owns",
        ariaRelevant: "additions removals text",
        ariaRoleDescription: "Tooltip role description",
      });
    });
    it("should not allow invalid tooltip role attributes", () => {
      assertType<CamelCaseAria<"tooltip">>({
        ariaAtomic: true,
        ariaBusy: false,
        // @ts-expect-error - should not allow invalid attributes
        ariaRowCount: 1,
      });
      assertType<CamelCaseAria<"awesometooltip tooltip">>({
        ariaAtomic: true,
        ariaBusy: false,
        // @ts-expect-error - should not allow invalid attributes
        ariaRowCount: 1,
      });
    });
  });
  describe("tree role", () => {
    it("should allow valid tree role attributes", () => {
      assertType<CamelCaseAria<"tree">>({
        ariaActiveDescendant: "tree-active-descendant",
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "tree-controls",
        ariaCurrent: "location",
        ariaDescribedBy: "tree-description",
        ariaDetails: "tree-details",
        ariaDisabled: "true",
        ariaDropEffect: "copy",
        ariaErrorMessage: "tree-error",
        ariaFlowTo: "tree-flow",
        ariaGrabbed: "undefined",
        ariaHasPopup: "menu",
        ariaHidden: "undefined",
        ariaInvalid: "grammar",
        ariaKeyShortcuts: "tree-shortcuts",
        ariaLabel: "Tree message",
        ariaLabelledBy: "tree-label",
        ariaLive: "polite",
        ariaMultiSelectable: true,
        ariaOrientation: "vertical",
        ariaOwns: "tree-owns",
        ariaRelevant: "additions removals text",
        ariaRequired: true,
        ariaRoleDescription: "Tree role description",
      });
      assertType<CamelCaseAria<"awesometree tree">>({
        ariaActiveDescendant: "tree-active-descendant",
        ariaAtomic: true,
        ariaBusy: false,
        ariaControls: "tree-controls",
        ariaCurrent: "location",
        ariaDescribedBy: "tree-description",
        ariaDetails: "tree-details",
        ariaDisabled: "true",
        ariaDropEffect: "copy",
        ariaErrorMessage: "tree-error",
        ariaFlowTo: "tree-flow",
        ariaGrabbed: "undefined",
        ariaHasPopup: "menu",
        ariaHidden: "undefined",
        ariaInvalid: "grammar",
        ariaKeyShortcuts: "tree-shortcuts",
        ariaLabel: "Tree message",
        ariaLabelledBy: "tree-label",
        ariaLive: "polite",
        ariaMultiSelectable: true,
        ariaOrientation: "vertical",
        ariaOwns: "tree-owns",
        ariaRelevant: "additions removals text",
        ariaRequired: true,
        ariaRoleDescription: "Tree role description",
      });
    });
    it("should not allow invalid tree role attributes", () => {
      assertType<CamelCaseAria<"tree">>({
        // @ts-expect-error - should not allow invalid attributes
        ariaRowCount: 1,
      });
      assertType<CamelCaseAria<"awesometree tree">>({
        // @ts-expect-error - should not allow invalid attributes
        ariaRowCount: 1,
      });
    });
  });
  describe("treegrid role", () => {
    it("should allow valid treegrid role attributes", () => {
      assertType<CamelCaseAria<"treegrid">>({
        ariaActiveDescendant: "treegrid-active-descendant",
        ariaAtomic: true,
        ariaBusy: false,
        ariaColCount: 3,
        ariaControls: "treegrid-controls",
        ariaCurrent: "location",
        ariaDescribedBy: "treegrid-description",
        ariaDetails: "treegrid-details",
        ariaDisabled: "true",
        ariaDropEffect: "copy",
        ariaErrorMessage: "treegrid-error",
        ariaFlowTo: "treegrid-flow",
        ariaGrabbed: "undefined",
        ariaHasPopup: "menu",
        ariaHidden: "undefined",
        ariaInvalid: "grammar",
        ariaKeyShortcuts: "treegrid-shortcuts",
        ariaLabel: "Treegrid message",
        ariaLabelledBy: "treegrid-label",
        ariaLive: "polite",
        ariaMultiSelectable: true,
        ariaOrientation: "vertical",
        ariaOwns: "treegrid-owns",
        ariaReadOnly: true,
        ariaRelevant: "additions removals text",
        ariaRequired: true,
        ariaRoleDescription: "Treegrid role description",
        ariaRowCount: 5,
      });
      assertType<CamelCaseAria<"awesometreegrid treegrid">>({
        ariaActiveDescendant: "treegrid-active-descendant",
        ariaAtomic: true,
        ariaBusy: false,
        ariaColCount: 3,
        ariaControls: "treegrid-controls",
        ariaCurrent: "location",
        ariaDescribedBy: "treegrid-description",
        ariaDetails: "treegrid-details",
        ariaDisabled: "true",
        ariaDropEffect: "copy",
        ariaErrorMessage: "treegrid-error",
        ariaFlowTo: "treegrid-flow",
        ariaGrabbed: "undefined",
        ariaHasPopup: "menu",
        ariaHidden: "undefined",
        ariaInvalid: "grammar",
        ariaKeyShortcuts: "treegrid-shortcuts",
        ariaLabel: "Treegrid message",
        ariaLabelledBy: "treegrid-label",
        ariaLive: "polite",
        ariaMultiSelectable: true,
        ariaOrientation: "vertical",
        ariaOwns: "treegrid-owns",
        ariaReadOnly: true,
        ariaRelevant: "additions removals text",
        ariaRequired: true,
        ariaRoleDescription: "Treegrid role description",
        ariaRowCount: 5,
      });
    });
    it("should not allow invalid treegrid role attributes", () => {
      assertType<CamelCaseAria<"treegrid">>({
        // @ts-expect-error - should not allow invalid attributes
        ariaRowSpan: 2,
      });
      assertType<CamelCaseAria<"awesometreegrid treegrid">>({
        // @ts-expect-error - should not allow invalid attributes
        ariaRowSpan: 2,
      });
    });
  });
  describe("treeitem role", () => {
    it("should allow valid treeitem role attributes", () => {
      assertType<CamelCaseAria<"treeitem">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaChecked: true,
        ariaControls: "treeitem-controls",
        ariaCurrent: "location",
        ariaDescribedBy: "treeitem-description",
        ariaDetails: "treeitem-details",
        ariaDisabled: "true",
        ariaDropEffect: "copy",
        ariaErrorMessage: "treeitem-error",
        ariaExpanded: "undefined",
        ariaFlowTo: "treeitem-flow",
        ariaGrabbed: "undefined",
        ariaHasPopup: "menu",
        ariaHidden: "undefined",
        ariaInvalid: "grammar",
        ariaKeyShortcuts: "treeitem-shortcuts",
        ariaLabel: "Treeitem message",
        ariaLabelledBy: "treeitem-label",
        ariaLive: "polite",
        ariaOwns: "treeitem-owns",
        ariaPosInSet: 1,
        ariaRelevant: "additions removals text",
        ariaRoleDescription: "Treeitem role description",
        ariaSelected: true,
        ariaSetSize: 3,
      });
      assertType<CamelCaseAria<"awesometreeitem treeitem">>({
        ariaAtomic: true,
        ariaBusy: false,
        ariaChecked: true,
        ariaControls: "treeitem-controls",
        ariaCurrent: "location",
        ariaDescribedBy: "treeitem-description",
        ariaDetails: "treeitem-details",
        ariaDisabled: "true",
        ariaDropEffect: "copy",
        ariaErrorMessage: "treeitem-error",
        ariaExpanded: "undefined",
        ariaFlowTo: "treeitem-flow",
        ariaGrabbed: "undefined",
        ariaHasPopup: "menu",
        ariaHidden: "undefined",
        ariaInvalid: "grammar",
        ariaKeyShortcuts: "treeitem-shortcuts",
        ariaLabel: "Treeitem message",
        ariaLabelledBy: "treeitem-label",
        ariaLive: "polite",
        ariaOwns: "treeitem-owns",
        ariaPosInSet: 1,
        ariaRelevant: "additions removals text",
        ariaRoleDescription: "Treeitem role description",
        ariaSelected: true,
        ariaSetSize: 3,
      });
    });
    it("should not allow invalid treeitem role attributes", () => {
      assertType<CamelCaseAria<"treeitem">>({
        // @ts-expect-error - should not allow invalid attributes
        ariaRowCount: 1,
      });
      assertType<CamelCaseAria<"awesometreeitem treeitem">>({
        // @ts-expect-error - should not allow invalid attributes
        ariaRowCount: 1,
      });
    });
  });
});
