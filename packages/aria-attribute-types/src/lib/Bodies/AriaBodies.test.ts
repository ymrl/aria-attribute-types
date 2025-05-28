import { describe, it, assertType } from "vitest";
import { AriaBodies } from "./AriaBodies";

describe("AriaBodies", () => {
  it("should not allow invalid role types", () => {
    // @ts-expect-error - should not allow invalid role types
    assertType<AriaBodies<"invalidRole">>({ label: "test" });
  });

  describe("alert role", () => {
    it("should allow valid alert role attributes", () => {
      assertType<AriaBodies<"alert">>({
        atomic: true,
        busy: false,
        controls: "alert-controls",
        current: "location",
        describedBy: "alert-description",
        details: "alert-details",
        disabled: "true",
        dropEffect: "copy",
        errorMessage: "alert-error",
        flowTo: "alert-flow",
        grabbed: "undefined",
        hasPopup: "menu",
        hidden: "undefined",
        invalid: "grammar",
        keyShortcuts: "alert-shortcuts",
        label: "Alert message",
        labelledBy: "alert-label",
        live: "assertive",
        owns: "alert-owns",
        relevant: "additions removals",
        roleDescription: "Alert role description",
      });
      assertType<AriaBodies<"awesomealert alert">>({
        atomic: true,
        busy: false,
        controls: "alert-controls",
        current: "location",
        describedBy: "alert-description",
        details: "alert-details",
        disabled: "true",
        dropEffect: "copy",
        errorMessage: "alert-error",
        flowTo: "alert-flow",
        grabbed: "undefined",
        hasPopup: "menu",
        hidden: "undefined",
        invalid: "grammar",
        keyShortcuts: "alert-shortcuts",
        label: "Alert message",
        labelledBy: "alert-label",
        live: "assertive",
        owns: "alert-owns",
        relevant: "additions removals",
        roleDescription: "Alert role description",
      });
    });
    it("should not allow invalid alert role attributes", () => {
      assertType<AriaBodies<"alert">>({
        atomic: true,
        busy: false,
        controls: "alert-controls",
        // @ts-expect-error - should not allow invalid attributes
        modal: "true",
      });
      assertType<AriaBodies<"awesomealert alert">>({
        atomic: true,
        busy: false,
        controls: "alert-controls",
        // @ts-expect-error - should not allow invalid attributes
        modal: "true",
      });
    });
  });

  describe("alertdialog role", () => {
    it("should allow valid alertdialog role attributes", () => {
      assertType<AriaBodies<"alertdialog">>({
        atomic: true,
        busy: false,
        controls: "alertdialog-controls",
        current: "location",
        describedBy: "alertdialog-description",
        details: "alertdialog-details",
        disabled: "true",
        dropEffect: "copy",
        errorMessage: "alertdialog-error",
        flowTo: "alertdialog-flow",
        grabbed: "undefined",
        hasPopup: "dialog",
        hidden: "undefined",
        invalid: "spelling",
        keyShortcuts: "alertdialog-shortcuts",
        label: "Alert dialog message",
        labelledBy: "alertdialog-label",
        live: "assertive",
        modal: "true",
        owns: "alertdialog-owns",
        relevant: "text removals",
        roleDescription: "Alert dialog role description",
      });
      assertType<AriaBodies<"awesomealertdialog alertdialog">>({
        atomic: true,
        busy: false,
        controls: "alertdialog-controls",
        current: "location",
        describedBy: "alertdialog-description",
        details: "alertdialog-details",
        disabled: "true",
        dropEffect: "copy",
        errorMessage: "alertdialog-error",
        flowTo: "alertdialog-flow",
        grabbed: "undefined",
        hasPopup: "dialog",
        hidden: "undefined",
        invalid: "spelling",
        keyShortcuts: "alertdialog-shortcuts",
        label: "Alert dialog message",
        labelledBy: "alertdialog-label",
        live: "assertive",
        modal: "true",
        owns: "alertdialog-owns",
        relevant: "text removals",
        roleDescription: "Alert dialog role description",
      });
    });
    it("should not allow invalid alertdialog role attributes", () => {
      assertType<AriaBodies<"alertdialog">>({
        atomic: true,
        busy: false,
        controls: "alertdialog-controls",
        // @ts-expect-error - should not allow invalid attributes
        colCount: 1,
      });
      assertType<AriaBodies<"awesomealertdialog alertdialog">>({
        atomic: true,
        busy: false,
        controls: "alertdialog-controls",
        // @ts-expect-error - should not allow invalid attributes
        colCount: 1,
      });
    });
  });

  describe("application role", () => {
    it("should allow valid application role attributes", () => {
      assertType<AriaBodies<"application">>({
        activeDescendant: "application-active-descendant",
        atomic: true,
        busy: false,
        controls: "application-controls",
        current: "location",
        describedBy: "application-description",
        details: "application-details",
        disabled: "true",
        dropEffect: "copy",
        errorMessage: "application-error",
        expanded: "undefined",
        flowTo: "application-flow",
        grabbed: "undefined",
        hasPopup: "menu",
        hidden: "undefined",
        invalid: "grammar",
        keyShortcuts: "application-shortcuts",
        label: "Application message",
        labelledBy: "application-label",
        live: "polite",
        owns: "application-owns",
        relevant: "additions removals text",
        roleDescription: "Application role description",
      });
      assertType<AriaBodies<"awesomeapplication application">>({
        activeDescendant: "application-active-descendant",
        atomic: true,
        busy: false,
        controls: "application-controls",
        current: "location",
        describedBy: "application-description",
        details: "application-details",
        disabled: "true",
        dropEffect: "copy",
        errorMessage: "application-error",
        expanded: "undefined",
        flowTo: "application-flow",
        grabbed: "undefined",
        hasPopup: "menu",
        hidden: "undefined",
        invalid: "grammar",
        keyShortcuts: "application-shortcuts",
        label: "Application message",
        labelledBy: "application-label",
        live: "polite",
        owns: "application-owns",
        relevant: "additions removals text",
        roleDescription: "Application role description",
      });
    });
    it("should not allow invalid application role attributes", () => {
      assertType<AriaBodies<"application">>({
        atomic: true,
        busy: false,
        controls: "application-controls",
        // @ts-expect-error - should not allow invalid attributes
        rowCount: 1,
      });
      assertType<AriaBodies<"awesomeapplication application">>({
        atomic: true,
        busy: false,
        controls: "application-controls",
        // @ts-expect-error - should not allow invalid attributes
        rowCount: 1,
      });
    });
  });

  describe("article role", () => {
    it("should allow valid article role attributes", () => {
      assertType<AriaBodies<"article">>({
        atomic: true,
        busy: false,
        controls: "article-controls",
        current: "location",
        describedBy: "article-description",
        details: "article-details",
        disabled: "true",
        dropEffect: "copy",
        errorMessage: "article-error",
        flowTo: "article-flow",
        grabbed: "undefined",
        hasPopup: "menu",
        hidden: "undefined",
        invalid: "grammar",
        keyShortcuts: "article-shortcuts",
        label: "Article message",
        labelledBy: "article-label",
        live: "polite",
        owns: "article-owns",
        posInSet: 1,
        relevant: "additions removals text",
        roleDescription: "Article role description",
        setSize: 1,
      });
      assertType<AriaBodies<"awesomearticle article">>({
        atomic: true,
        busy: false,
        controls: "article-controls",
        current: "location",
        describedBy: "article-description",
        details: "article-details",
        disabled: "true",
        dropEffect: "copy",
        errorMessage: "article-error",
        flowTo: "article-flow",
        grabbed: "undefined",
        hasPopup: "menu",
        hidden: "undefined",
        invalid: "grammar",
        keyShortcuts: "article-shortcuts",
        label: "Article message",
        labelledBy: "article-label",
        live: "polite",
        owns: "article-owns",
        posInSet: 1,
        relevant: "additions removals text",
        roleDescription: "Article role description",
        setSize: 1,
      });
    });
    it("should not allow invalid article role attributes", () => {
      assertType<AriaBodies<"article">>({
        atomic: true,
        busy: false,
        controls: "article-controls",
        // @ts-expect-error - should not allow invalid attributes
        rowCount: 1,
      });
      assertType<AriaBodies<"awesomearticle article">>({
        atomic: true,
        busy: false,
        controls: "article-controls",
        // @ts-expect-error - should not allow invalid attributes
        rowCount: 1,
      });
    });
  });
  describe("banner role", () => {
    it("should allow valid banner role attributes", () => {
      assertType<AriaBodies<"banner">>({
        atomic: true,
        busy: false,
        controls: "banner-controls",
        current: "location",
        describedBy: "banner-description",
        details: "banner-details",
        disabled: "true",
        dropEffect: "copy",
        errorMessage: "banner-error",
        flowTo: "banner-flow",
        grabbed: "undefined",
        hasPopup: "menu",
        hidden: "undefined",
        invalid: "grammar",
        keyShortcuts: "banner-shortcuts",
        label: "Banner message",
        labelledBy: "banner-label",
        live: "polite",
        owns: "banner-owns",
        relevant: "additions removals text",
        roleDescription: "Banner role description",
      });
      assertType<AriaBodies<"awesomebanner banner">>({
        atomic: true,
        busy: false,
        controls: "banner-controls",
        current: "location",
        describedBy: "banner-description",
        details: "banner-details",
        disabled: "true",
        dropEffect: "copy",
        errorMessage: "banner-error",
        flowTo: "banner-flow",
        grabbed: "undefined",
        hasPopup: "menu",
        hidden: "undefined",
        invalid: "grammar",
        keyShortcuts: "banner-shortcuts",
        label: "Banner message",
        labelledBy: "banner-label",
        live: "polite",
        owns: "banner-owns",
        relevant: "additions removals text",
        roleDescription: "Banner role description",
      });
    });
    it("should not allow invalid banner role attributes", () => {
      assertType<AriaBodies<"banner">>({
        atomic: true,
        busy: false,
        controls: "banner-controls",
        // @ts-expect-error - should not allow invalid attributes
        rowCount: 1,
      });
      assertType<AriaBodies<"awesomebanner banner">>({
        atomic: true,
        busy: false,
        controls: "banner-controls",
        // @ts-expect-error - should not allow invalid attributes
        rowCount: 1,
      });
    });
  });
  describe("blockquote role", () => {
    it("should allow valid blockquote role attributes", () => {
      assertType<AriaBodies<"blockquote">>({
        atomic: true,
        busy: false,
        controls: "blockquote-controls",
        current: "location",
        describedBy: "blockquote-description",
        details: "blockquote-details",
        disabled: "true",
        dropEffect: "copy",
        errorMessage: "blockquote-error",
        flowTo: "blockquote-flow",
        grabbed: "undefined",
        hasPopup: "menu",
        hidden: "undefined",
        invalid: "grammar",
        keyShortcuts: "blockquote-shortcuts",
        label: "Blockquote message",
        labelledBy: "blockquote-label",
        live: "polite",
        owns: "blockquote-owns",
        relevant: "additions removals text",
        roleDescription: "Blockquote role description",
      });
      assertType<AriaBodies<"awesomeblockquote blockquote">>({
        atomic: true,
        busy: false,
        controls: "blockquote-controls",
        current: "location",
        describedBy: "blockquote-description",
        details: "blockquote-details",
        disabled: "true",
        dropEffect: "copy",
        errorMessage: "blockquote-error",
        flowTo: "blockquote-flow",
        grabbed: "undefined",
        hasPopup: "menu",
        hidden: "undefined",
        invalid: "grammar",
        keyShortcuts: "blockquote-shortcuts",
        label: "Blockquote message",
        labelledBy: "blockquote-label",
        live: "polite",
        owns: "blockquote-owns",
        relevant: "additions removals text",
        roleDescription: "Blockquote role description",
      });
    });
    it("should not allow invalid blockquote role attributes", () => {
      assertType<AriaBodies<"blockquote">>({
        atomic: true,
        busy: false,
        controls: "blockquote-controls",
        // @ts-expect-error - should not allow invalid attributes
        rowCount: 1,
      });
      assertType<AriaBodies<"awesomeblockquote blockquote">>({
        atomic: true,
        busy: false,
        controls: "blockquote-controls",
        // @ts-expect-error - should not allow invalid attributes
        rowCount: 1,
      });
    });
  });

  describe("button role", () => {
    it("should allow valid button role attributes", () => {
      assertType<AriaBodies<"button">>({
        atomic: true,
        busy: false,
        controls: "button-controls",
        current: "location",
        describedBy: "button-description",
        details: "button-details",
        disabled: "true",
        dropEffect: "copy",
        errorMessage: "button-error",
        expanded: "undefined",
        flowTo: "button-flow",
        grabbed: "undefined",
        hasPopup: "menu",
        hidden: "undefined",
        invalid: "grammar",
        keyShortcuts: "button-shortcuts",
        label: "Button message",
        labelledBy: "button-label",
        live: "polite",
        owns: "button-owns",
        pressed: "true",
        relevant: "additions removals text",
        roleDescription: "Button role description",
      });
      assertType<AriaBodies<"awesomebutton button">>({
        atomic: true,
        busy: false,
        controls: "button-controls",
        current: "location",
        describedBy: "button-description",
        details: "button-details",
        disabled: "true",
        dropEffect: "copy",
        errorMessage: "button-error",
        expanded: "undefined",
        flowTo: "button-flow",
        grabbed: "undefined",
        hasPopup: "menu",
        hidden: "undefined",
        invalid: "grammar",
        keyShortcuts: "button-shortcuts",
        label: "Button message",
        labelledBy: "button-label",
        live: "polite",
        owns: "button-owns",
        pressed: "true",
        relevant: "additions removals text",
        roleDescription: "Button role description",
      });
    });
    it("should not allow invalid button role attributes", () => {
      assertType<AriaBodies<"button">>({
        atomic: true,
        busy: false,
        controls: "button-controls",
        // @ts-expect-error - should not allow invalid attributes
        rowCount: 1,
      });
      assertType<AriaBodies<"awesomebutton button">>({
        atomic: true,
        busy: false,
        controls: "button-controls",
        // @ts-expect-error - should not allow invalid attributes
        rowCount: 1,
      });
    });
  });

  describe("caption role", () => {
    it("should allow valid caption role attributes", () => {
      assertType<AriaBodies<"caption">>({
        atomic: true,
        busy: false,
        controls: "caption-controls",
        current: "location",
        describedBy: "caption-description",
        details: "caption-details",
        disabled: "true",
        dropEffect: "copy",
        errorMessage: "caption-error",
        flowTo: "caption-flow",
        grabbed: "undefined",
        hasPopup: "menu",
        hidden: "undefined",
        invalid: "grammar",
        keyShortcuts: "caption-shortcuts",
        live: "polite",
        owns: "caption-owns",
        relevant: "additions removals text",
        roleDescription: "Caption role description",
      });
      assertType<AriaBodies<"awesomecaption caption">>({
        atomic: true,
        busy: false,
        controls: "caption-controls",
        current: "location",
        describedBy: "caption-description",
        details: "caption-details",
        disabled: "true",
        dropEffect: "copy",
        errorMessage: "caption-error",
        flowTo: "caption-flow",
        grabbed: "undefined",
        hasPopup: "menu",
        hidden: "undefined",
        invalid: "grammar",
        keyShortcuts: "caption-shortcuts",
        live: "polite",
        owns: "caption-owns",
        relevant: "additions removals text",
        roleDescription: "Caption role description",
      });
    });
    it("should not allow label and labelledBy attributes", () => {
      assertType<AriaBodies<"caption">>({
        // @ts-expect-error - should not allow label attribute
        label: "Caption label",
      });
      assertType<AriaBodies<"caption">>({
        // @ts-expect-error - should not allow labelledby attribute
        labelledBy: "Caption label",
      });
    });

    it("should not allow invalid caption role attributes", () => {
      assertType<AriaBodies<"caption">>({
        atomic: true,
        busy: false,
        controls: "caption-controls",
        // @ts-expect-error - should not allow invalid attributes
        rowCount: 1,
      });
      assertType<AriaBodies<"awesomecaption caption">>({
        atomic: true,
        busy: false,
        controls: "caption-controls",
        // @ts-expect-error - should not allow invalid attributes
        rowCount: 1,
      });
    });
  });

  describe("cell role", () => {
    it("should allow valid cell role attributes", () => {
      assertType<AriaBodies<"cell">>({
        atomic: true,
        busy: false,
        controls: "cell-controls",
        colIndex: 1,
        colSpan: 2,
        current: "location",
        describedBy: "cell-description",
        details: "cell-details",
        disabled: "true",
        dropEffect: "copy",
        errorMessage: "cell-error",
        flowTo: "cell-flow",
        grabbed: "undefined",
        hasPopup: "menu",
        hidden: "undefined",
        invalid: "grammar",
        keyShortcuts: "cell-shortcuts",
        label: "Cell message",
        labelledBy: "cell-label",
        live: "polite",
        owns: "cell-owns",
        relevant: "additions removals text",
        roleDescription: "Cell role description",
        rowIndex: 1,
        rowSpan: 2,
      });
      assertType<AriaBodies<"awesomecell cell">>({
        atomic: true,
        busy: false,
        controls: "cell-controls",
        colIndex: 1,
        colSpan: 2,
        current: "location",
        describedBy: "cell-description",
        details: "cell-details",
        disabled: "true",
        dropEffect: "copy",
        errorMessage: "cell-error",
        flowTo: "cell-flow",
        grabbed: "undefined",
        hasPopup: "menu",
        hidden: "undefined",
        invalid: "grammar",
        keyShortcuts: "cell-shortcuts",
        label: "Cell message",
        labelledBy: "cell-label",
        live: "polite",
        owns: "cell-owns",
        relevant: "additions removals text",
        roleDescription: "Cell role description",
        rowIndex: 1,
        rowSpan: 2,
      });
    });
    it("should not allow invalid cell role attributes", () => {
      assertType<AriaBodies<"cell">>({
        atomic: true,
        busy: false,
        controls: "cell-controls",
        // @ts-expect-error - should not allow invalid attributes
        rowCount: 1,
      });
      assertType<AriaBodies<"awesomecell cell">>({
        atomic: true,
        busy: false,
        controls: "cell-controls",
        // @ts-expect-error - should not allow invalid attributes
        rowCount: 1,
      });
    });
  });
  describe("checkbox role", () => {
    it("should allow valid checkbox role attributes", () => {
      assertType<AriaBodies<"checkbox">>({
        atomic: true,
        busy: false,
        checked: "mixed",
        controls: "checkbox-controls",
        current: "location",
        describedBy: "checkbox-description",
        details: "checkbox-details",
        disabled: "true",
        dropEffect: "copy",
        errorMessage: "checkbox-error",
        expanded: "undefined",
        flowTo: "checkbox-flow",
        grabbed: "undefined",
        hasPopup: "menu",
        hidden: "undefined",
        invalid: "grammar",
        keyShortcuts: "checkbox-shortcuts",
        label: "Checkbox message",
        labelledBy: "checkbox-label",
        live: "polite",
        owns: "checkbox-owns",
        readOnly: "true",
        relevant: "additions removals text",
        required: "true",
        roleDescription: "Checkbox role description",
      });
      assertType<AriaBodies<"awesomecheckbox checkbox">>({
        atomic: true,
        busy: false,
        checked: "mixed",
        controls: "checkbox-controls",
        current: "location",
        describedBy: "checkbox-description",
        details: "checkbox-details",
        disabled: "true",
        dropEffect: "copy",
        errorMessage: "checkbox-error",
        expanded: "undefined",
        flowTo: "checkbox-flow",
        grabbed: "undefined",
        hasPopup: "menu",
        hidden: "undefined",
        invalid: "grammar",
        keyShortcuts: "checkbox-shortcuts",
        label: "Checkbox message",
        labelledBy: "checkbox-label",
        live: "polite",
        owns: "checkbox-owns",
        readOnly: "true",
        relevant: "additions removals text",
        required: "true",
        roleDescription: "Checkbox role description",
      });
    });
    it("should not allow invalid checkbox role attributes", () => {
      assertType<AriaBodies<"checkbox">>({
        atomic: true,
        busy: false,
        controls: "checkbox-controls",
        // @ts-expect-error - should not allow invalid attributes
        rowCount: 1,
      });
      assertType<AriaBodies<"awesomecheckbox checkbox">>({
        atomic: true,
        busy: false,
        controls: "checkbox-controls",
        // @ts-expect-error - should not allow invalid attributes
        rowCount: 1,
      });
    });
  });

  describe("code role", () => {
    it("should allow valid code role attributes", () => {
      assertType<AriaBodies<"code">>({
        atomic: true,
        busy: false,
        controls: "code-controls",
        current: "location",
        describedBy: "code-description",
        details: "code-details",
        disabled: "true",
        dropEffect: "copy",
        errorMessage: "code-error",
        flowTo: "code-flow",
        grabbed: "undefined",
        hasPopup: "menu",
        hidden: "undefined",
        invalid: "grammar",
        keyShortcuts: "code-shortcuts",
        live: "polite",
        owns: "code-owns",
        relevant: "additions removals text",
        roleDescription: "Code role description",
      });
      assertType<AriaBodies<"awesomecode code">>({
        atomic: true,
        busy: false,
        controls: "code-controls",
        describedBy: "code-description",
        details: "code-details",
        disabled: "true",
        dropEffect: "copy",
        errorMessage: "code-error",
        flowTo: "code-flow",
        grabbed: "undefined",
        hasPopup: "menu",
        hidden: "undefined",
        invalid: "grammar",
        live: "polite",
        owns: "code-owns",
        relevant: "additions removals text",
        roleDescription: "Code role description",
      });
    });
    it("should not allow label and labelledBy attributes", () => {
      assertType<AriaBodies<"code">>({
        // @ts-expect-error - should not allow label attribute
        label: "Code label",
      });
      assertType<AriaBodies<"code">>({
        // @ts-expect-error - should not allow labelledby attribute
        labelledBy: "Code label",
      });
    });
    it("should not allow invalid code role attributes", () => {
      assertType<AriaBodies<"code">>({
        atomic: true,
        busy: false,
        controls: "code-controls",
        // @ts-expect-error - should not allow invalid attributes
        rowCount: 1,
      });
      assertType<AriaBodies<"awesomecode code">>({
        atomic: true,
        busy: false,
        controls: "code-controls",
        // @ts-expect-error - should not allow invalid attributes
        rowCount: 1,
      });
    });
  });

  describe("columnheader role", () => {
    it("should allow valid columnheader role attributes", () => {
      assertType<AriaBodies<"columnheader">>({
        atomic: true,
        busy: false,
        colIndex: 1,
        colSpan: 2,
        controls: "columnheader-controls",
        current: "location",
        describedBy: "columnheader-description",
        details: "columnheader-details",
        disabled: "true",
        dropEffect: "copy",
        errorMessage: "columnheader-error",
        expanded: "true",
        flowTo: "columnheader-flow",
        grabbed: "undefined",
        hasPopup: "menu",
        hidden: "undefined",
        invalid: "grammar",
        keyShortcuts: "columnheader-shortcuts",
        label: "Column header message",
        labelledBy: "columnheader-label",
        live: "polite",
        owns: "columnheader-owns",
        readOnly: "true",
        relevant: "additions removals text",
        required: "true",
        roleDescription: "Column header role description",
        rowIndex: 1,
        rowSpan: 2,
        selected: "undefined",
        sort: "ascending",
      });
      assertType<AriaBodies<"awesomecolumnheader columnheader">>({
        atomic: true,
        busy: false,
        colIndex: 1,
        colSpan: 2,
        controls: "columnheader-controls",
        current: "location",
        describedBy: "columnheader-description",
        details: "columnheader-details",
        disabled: "true",
        dropEffect: "copy",
        errorMessage: "columnheader-error",
        expanded: "true",
        flowTo: "columnheader-flow",
        grabbed: "undefined",
        hasPopup: "menu",
        hidden: "undefined",
        invalid: "grammar",
        keyShortcuts: "columnheader-shortcuts",
        label: "Column header message",
        labelledBy: "columnheader-label",
        live: "polite",
        owns: "columnheader-owns",
        readOnly: "true",
        relevant: "additions removals text",
        required: "true",
        roleDescription: "Column header role description",
        rowIndex: 1,
        rowSpan: 2,
        selected: "undefined",
        sort: "ascending",
      });
    });
    it("should not allow invalid columnheader role attributes", () => {
      assertType<AriaBodies<"columnheader">>({
        atomic: true,
        busy: false,
        controls: "columnheader-controls",
        // @ts-expect-error - should not allow invalid attributes
        rowCount: 1,
      });
      assertType<AriaBodies<"awesomecolumnheader columnheader">>({
        atomic: true,
        busy: false,
        controls: "columnheader-controls",
        // @ts-expect-error - should not allow invalid attributes
        rowCount: 1,
      });
    });
  });

  describe("combobox role", () => {
    it("should allow valid combobox role attributes", () => {
      assertType<AriaBodies<"combobox">>({
        activeDescendant: "combobox-active-descendant",
        atomic: true,
        autoComplete: "list",
        busy: false,
        controls: "combobox-controls",
        current: "location",
        describedBy: "combobox-description",
        details: "combobox-details",
        disabled: "true",
        dropEffect: "copy",
        errorMessage: "combobox-error",
        expanded: "undefined",
        flowTo: "combobox-flow",
        grabbed: "undefined",
        hasPopup: "listbox",
        hidden: "undefined",
        invalid: "grammar",
        keyShortcuts: "combobox-shortcuts",
        label: "Combobox message",
        labelledBy: "combobox-label",
        live: "polite",
        owns: "combobox-owns",
        readOnly: true,
        relevant: "additions removals text",
        required: true,
        roleDescription: "Combobox role description",
      });
      assertType<AriaBodies<"awesomecombobox combobox">>({
        activeDescendant: "combobox-active-descendant",
        atomic: true,
        autoComplete: "list",
        busy: false,
        controls: "combobox-controls",
        describedBy: "combobox-description",
        details: "combobox-details",
        disabled: "true",
        dropEffect: "copy",
        errorMessage: "combobox-error",
        expanded: "undefined",
        flowTo: "combobox-flow",
        grabbed: "undefined",
        hasPopup: "listbox",
        hidden: "undefined",
        invalid: "grammar",
        keyShortcuts: "combobox-shortcuts",
        label: "Combobox message",
        labelledBy: "combobox-label",
        live: "polite",
        owns: "combobox-owns",
        readOnly: true,
        relevant: "additions removals text",
        required: true,
      });
    });
    it("should not allow invalid combobox role attributes", () => {
      assertType<AriaBodies<"combobox">>({
        atomic: true,
        busy: false,
        controls: "combobox-controls",
        // @ts-expect-error - should not allow invalid attributes
        rowCount: 1,
      });
      assertType<AriaBodies<"awesomecombobox combobox">>({
        atomic: true,
        busy: false,
        controls: "combobox-controls",
        // @ts-expect-error - should not allow invalid attributes
        rowCount: 1,
      });
    });
  });
  describe("complementary role", () => {
    it("should allow valid complementary role attributes", () => {
      assertType<AriaBodies<"complementary">>({
        atomic: true,
        busy: false,
        controls: "complementary-controls",
        current: "location",
        describedBy: "complementary-description",
        details: "complementary-details",
        disabled: "true",
        dropEffect: "copy",
        errorMessage: "complementary-error",
        flowTo: "complementary-flow",
        grabbed: "undefined",
        hasPopup: "menu",
        hidden: "undefined",
        invalid: "grammar",
        keyShortcuts: "complementary-shortcuts",
        label: "Complementary message",
        labelledBy: "complementary-label",
        live: "polite",
        owns: "complementary-owns",
        relevant: "additions removals text",
        roleDescription: "Complementary role description",
      });
      assertType<AriaBodies<"awesomecomplementary complementary">>({
        atomic: true,
        busy: false,
        controls: "complementary-controls",
        current: "location",
        describedBy: "complementary-description",
        details: "complementary-details",
        disabled: "true",
        dropEffect: "copy",
        errorMessage: "complementary-error",
        flowTo: "complementary-flow",
        grabbed: "undefined",
        hasPopup: "menu",
        hidden: "undefined",
        invalid: "grammar",
        keyShortcuts: "complementary-shortcuts",
        label: "Complementary message",
        labelledBy: "complementary-label",
        live: "polite",
        owns: "complementary-owns",
        relevant: "additions removals text",
      });
    });
    it("should not allow invalid complementary role attributes", () => {
      assertType<AriaBodies<"complementary">>({
        atomic: true,
        busy: false,
        controls: "complementary-controls",
        // @ts-expect-error - should not allow invalid attributes
        rowCount: 1,
      });
      assertType<AriaBodies<"awesomecomplementary complementary">>({
        atomic: true,
        busy: false,
        controls: "complementary-controls",
        // @ts-expect-error - should not allow invalid attributes
        rowCount: 1,
      });
    });
  });

  describe("contentinfo role", () => {
    it("should allow valid contentinfo role attributes", () => {
      assertType<AriaBodies<"contentinfo">>({
        atomic: true,
        busy: false,
        controls: "contentinfo-controls",
        current: "location",
        describedBy: "contentinfo-description",
        details: "contentinfo-details",
        disabled: "true",
        dropEffect: "copy",
        errorMessage: "contentinfo-error",
        flowTo: "contentinfo-flow",
        grabbed: "undefined",
        hasPopup: "menu",
        hidden: "undefined",
        invalid: "grammar",
        keyShortcuts: "contentinfo-shortcuts",
        label: "Content info message",
        labelledBy: "contentinfo-label",
        live: "polite",
        owns: "contentinfo-owns",
        relevant: "additions removals text",
        roleDescription: "Content info role description",
      });
      assertType<AriaBodies<"awesomecontentinfo contentinfo">>({
        atomic: true,
        busy: false,
        controls: "contentinfo-controls",
        current: "location",
        describedBy: "contentinfo-description",
        details: "contentinfo-details",
        disabled: "true",
        dropEffect: "copy",
        errorMessage: "contentinfo-error",
        flowTo: "contentinfo-flow",
        grabbed: "undefined",
        hasPopup: "menu",
        hidden: "undefined",
        invalid: "grammar",
        keyShortcuts: "contentinfo-shortcuts",
        label: "Content info message",
        labelledBy: "contentinfo-label",
        live: "polite",
        owns: "contentinfo-owns",
        relevant: "additions removals text",
      });
    });
    it("should not allow invalid contentinfo role attributes", () => {
      assertType<AriaBodies<"contentinfo">>({
        atomic: true,
        busy: false,
        controls: "contentinfo-controls",
        // @ts-expect-error - should not allow invalid attributes
        rowCount: 1,
      });
      assertType<AriaBodies<"awesomecontentinfo contentinfo">>({
        atomic: true,
        busy: false,
        controls: "contentinfo-controls",
        // @ts-expect-error - should not allow invalid attributes
        rowCount: 1,
      });
    });
  });

  describe("definition role", () => {
    it("should allow valid definition role attributes", () => {
      assertType<AriaBodies<"definition">>({
        atomic: true,
        busy: false,
        controls: "definition-controls",
        current: "location",
        describedBy: "definition-description",
        details: "definition-details",
        disabled: "true",
        dropEffect: "copy",
        errorMessage: "definition-error",
        flowTo: "definition-flow",
        grabbed: "undefined",
        hasPopup: "menu",
        hidden: "undefined",
        invalid: "grammar",
        keyShortcuts: "definition-shortcuts",
        label: "Definition message",
        labelledBy: "definition-label",
        live: "polite",
        owns: "definition-owns",
        relevant: "additions removals text",
        roleDescription: "Definition role description",
      });
      assertType<AriaBodies<"awesomedefinition definition">>({
        atomic: true,
        busy: false,
        controls: "definition-controls",
        current: "location",
        describedBy: "definition-description",
        details: "definition-details",
        disabled: "true",
        dropEffect: "copy",
        errorMessage: "definition-error",
        flowTo: "definition-flow",
        grabbed: "undefined",
        hasPopup: "menu",
        hidden: "undefined",
        invalid: "grammar",
        keyShortcuts: "definition-shortcuts",
        label: "Definition message",
        labelledBy: "definition-label",
        live: "polite",
        owns: "definition-owns",
        relevant: "additions removals text",
      });
    });
    it("should not allow invalid definition role attributes", () => {
      assertType<AriaBodies<"definition">>({
        atomic: true,
        busy: false,
        controls: "definition-controls",
        // @ts-expect-error - should not allow invalid attributes
        rowCount: 1,
      });
      assertType<AriaBodies<"awesomedefinition definition">>({
        atomic: true,
        busy: false,
        controls: "definition-controls",
        // @ts-expect-error - should not allow invalid attributes
        rowCount: 1,
      });
    });
  });
  describe("deletion role", () => {
    it("should allow valid deletion role attributes", () => {
      assertType<AriaBodies<"deletion">>({
        atomic: true,
        busy: false,
        controls: "deletion-controls",
        current: "location",
        describedBy: "deletion-description",
        details: "deletion-details",
        disabled: "true",
        dropEffect: "copy",
        errorMessage: "deletion-error",
        flowTo: "deletion-flow",
        grabbed: "undefined",
        hasPopup: "menu",
        hidden: "undefined",
        keyShortcuts: "deletion-shortcuts",
        invalid: "grammar",
        live: "polite",
        owns: "deletion-owns",
        relevant: "additions removals text",
        roleDescription: "Deletion role description",
      });
      assertType<AriaBodies<"awesomedeletion deletion">>({
        atomic: true,
        busy: false,
        controls: "deletion-controls",
        current: "location",
        describedBy: "deletion-description",
        details: "deletion-details",
        disabled: "true",
        dropEffect: "copy",
        errorMessage: "deletion-error",
        flowTo: "deletion-flow",
        grabbed: "undefined",
        hasPopup: "menu",
        hidden: "undefined",
        invalid: "grammar",
        keyShortcuts: "deletion-shortcuts",
        live: "polite",
        owns: "deletion-owns",
        relevant: "additions removals text",
        roleDescription: "Deletion role description",
      });
    });
    it("should not allow label and labelledBy attributes", () => {
      assertType<AriaBodies<"deletion">>({
        // @ts-expect-error - should not allow label attribute
        label: "Deletion label",
      });
      assertType<AriaBodies<"deletion">>({
        // @ts-expect-error - should not allow labelledby attribute
        labelledBy: "Deletion label",
      });
    });
    it("should not allow invalid deletion role attributes", () => {
      assertType<AriaBodies<"deletion">>({
        atomic: true,
        busy: false,
        controls: "deletion-controls",
        // @ts-expect-error - should not allow invalid attributes
        rowCount: 1,
      });
      assertType<AriaBodies<"awesomedeletion deletion">>({
        atomic: true,
        busy: false,
        controls: "deletion-controls",
        // @ts-expect-error - should not allow invalid attributes
        rowCount: 1,
      });
    });
  });

  describe("dialog role", () => {
    it("should allow valid dialog role attributes", () => {
      assertType<AriaBodies<"dialog">>({
        atomic: true,
        busy: false,
        controls: "dialog-controls",
        current: "location",
        describedBy: "dialog-description",
        details: "dialog-details",
        disabled: "true",
        dropEffect: "copy",
        errorMessage: "dialog-error",
        flowTo: "dialog-flow",
        grabbed: "undefined",
        hasPopup: "menu",
        hidden: "undefined",
        invalid: "grammar",
        keyShortcuts: "dialog-shortcuts",
        label: "Dialog message",
        labelledBy: "dialog-label",
        live: "polite",
        modal: "true",
        owns: "dialog-owns",
        relevant: "additions removals text",
        roleDescription: "Dialog role description",
      });
      assertType<AriaBodies<"awesomedialog dialog">>({
        atomic: true,
        busy: false,
        controls: "dialog-controls",
        current: "location",
        describedBy: "dialog-description",
        details: "dialog-details",
        disabled: "true",
        dropEffect: "copy",
        errorMessage: "dialog-error",
        flowTo: "dialog-flow",
        grabbed: "undefined",
        hasPopup: "menu",
        hidden: "undefined",
        invalid: "grammar",
        keyShortcuts: "dialog-shortcuts",
        label: "Dialog message",
        labelledBy: "dialog-label",
        live: "polite",
        modal: "true",
        owns: "dialog-owns",
        relevant: "additions removals text",
        roleDescription: "Dialog role description",
      });
    });
    it("should not allow invalid dialog role attributes", () => {
      assertType<AriaBodies<"dialog">>({
        atomic: true,
        busy: false,
        controls: "dialog-controls",
        // @ts-expect-error - should not allow invalid attributes
        rowCount: 1,
      });
      assertType<AriaBodies<"awesomedialog dialog">>({
        atomic: true,
        busy: false,
        controls: "dialog-controls",
        // @ts-expect-error - should not allow invalid attributes
        rowCount: 1,
      });
    });
  });
  describe("directory role", () => {
    it("should allow valid directory role attributes", () => {
      assertType<AriaBodies<"directory">>({
        atomic: true,
        busy: false,
        controls: "directory-controls",
        current: "location",
        describedBy: "directory-description",
        details: "directory-details",
        disabled: "true",
        dropEffect: "copy",
        errorMessage: "directory-error",
        flowTo: "directory-flow",
        grabbed: "undefined",
        hasPopup: "menu",
        hidden: "undefined",
        invalid: "grammar",
        keyShortcuts: "directory-shortcuts",
        label: "Directory message",
        labelledBy: "directory-label",
        live: "polite",
        owns: "directory-owns",
        relevant: "additions removals text",
        roleDescription: "Directory role description",
      });
      assertType<AriaBodies<"awesomedirectory directory">>({
        atomic: true,
        busy: false,
        controls: "directory-controls",
        current: "location",
        describedBy: "directory-description",
        details: "directory-details",
        disabled: "true",
        dropEffect: "copy",
        errorMessage: "directory-error",
        flowTo: "directory-flow",
        grabbed: "undefined",
        hasPopup: "menu",
        hidden: "undefined",
        invalid: "grammar",
        keyShortcuts: "directory-shortcuts",
        label: "Directory message",
        labelledBy: "directory-label",
        live: "polite",
        owns: "directory-owns",
      });
    });
    it("should not allow invalid directory role attributes", () => {
      assertType<AriaBodies<"directory">>({
        atomic: true,
        busy: false,
        controls: "directory-controls",
        // @ts-expect-error - should not allow invalid attributes
        rowCount: 1,
      });
      assertType<AriaBodies<"awesomedirectory directory">>({
        atomic: true,
        busy: false,
        controls: "directory-controls",
        // @ts-expect-error - should not allow invalid attributes
        rowCount: 1,
      });
    });
  });

  describe("document role", () => {
    it("should allow valid document role attributes", () => {
      assertType<AriaBodies<"document">>({
        atomic: true,
        busy: false,
        controls: "document-controls",
        current: "location",
        describedBy: "document-description",
        details: "document-details",
        disabled: "true",
        dropEffect: "copy",
        errorMessage: "document-error",
        flowTo: "document-flow",
        grabbed: "undefined",
        hasPopup: "menu",
        hidden: "undefined",
        invalid: "grammar",
        keyShortcuts: "document-shortcuts",
        label: "Document message",
        labelledBy: "document-label",
        live: "polite",
        owns: "document-owns",
        relevant: "additions removals text",
        roleDescription: "Document role description",
      });
      assertType<AriaBodies<"awesomedocument document">>({
        atomic: true,
        busy: false,
        controls: "document-controls",
        current: "location",
        describedBy: "document-description",
        details: "document-details",
        disabled: "true",
        dropEffect: "copy",
        errorMessage: "document-error",
        flowTo: "document-flow",
        grabbed: "undefined",
        hasPopup: "menu",
        hidden: "undefined",
        invalid: "grammar",
        keyShortcuts: "document-shortcuts",
        label: "Document message",
        labelledBy: "document-label",
        live: "polite",
        owns: "document-owns",
        relevant: "additions removals text",
        roleDescription: "Document role description",
      });
    });
    it("should not allow invalid document role attributes", () => {
      assertType<AriaBodies<"document">>({
        atomic: true,
        busy: false,
        controls: "document-controls",
        // @ts-expect-error - should not allow invalid attributes
        rowCount: 1,
      });
      assertType<AriaBodies<"awesomedocument document">>({
        atomic: true,
        busy: false,
        controls: "document-controls",
        // @ts-expect-error - should not allow invalid attributes
        rowCount: 1,
      });
    });
  });
  describe("emphasis role", () => {
    it("should allow valid emphasis role attributes", () => {
      assertType<AriaBodies<"emphasis">>({
        atomic: true,
        busy: false,
        controls: "emphasis-controls",
        current: "location",
        describedBy: "emphasis-description",
        details: "emphasis-details",
        disabled: "true",
        dropEffect: "copy",
        errorMessage: "emphasis-error",
        flowTo: "emphasis-flow",
        grabbed: "undefined",
        hasPopup: "menu",
        hidden: "undefined",
        invalid: "grammar",
        keyShortcuts: "emphasis-shortcuts",
        live: "polite",
        owns: "emphasis-owns",
        relevant: "additions removals text",
        roleDescription: "Emphasis role description",
      });
      assertType<AriaBodies<"awesomeemphasis emphasis">>({
        atomic: true,
        busy: false,
        controls: "emphasis-controls",
        current: "location",
        describedBy: "emphasis-description",
        details: "emphasis-details",
        disabled: "true",
        dropEffect: "copy",
        errorMessage: "emphasis-error",
        flowTo: "emphasis-flow",
        grabbed: "undefined",
        hasPopup: "menu",
        hidden: "undefined",
        invalid: "grammar",
        keyShortcuts: "emphasis-shortcuts",
        live: "polite",
        owns: "emphasis-owns",
        relevant: "additions removals text",
        roleDescription: "Emphasis role description",
      });
    });
    it("should not allow label and labelledBy attributes", () => {
      assertType<AriaBodies<"emphasis">>({
        // @ts-expect-error - should not allow label attribute
        label: "Emphasis label",
      });
      assertType<AriaBodies<"emphasis">>({
        // @ts-expect-error - should not allow labelledby attribute
        labelledBy: "Emphasis label",
      });
    });
    it("should not allow invalid emphasis role attributes", () => {
      assertType<AriaBodies<"emphasis">>({
        atomic: true,
        busy: false,
        controls: "emphasis-controls",
        // @ts-expect-error - should not allow invalid attributes
        rowCount: 1,
      });
      assertType<AriaBodies<"awesomeemphasis emphasis">>({
        atomic: true,
        busy: false,
        controls: "emphasis-controls",
        // @ts-expect-error - should not allow invalid attributes
        rowCount: 1,
      });
    });
  });

  describe("feed role", () => {
    it("should allow valid feed role attributes", () => {
      assertType<AriaBodies<"feed">>({
        atomic: true,
        busy: false,
        controls: "feed-controls",
        current: "location",
        describedBy: "feed-description",
        details: "feed-details",
        disabled: "true",
        dropEffect: "copy",
        errorMessage: "feed-error",
        flowTo: "feed-flow",
        grabbed: "undefined",
        hasPopup: "menu",
        hidden: "undefined",
        invalid: "grammar",
        keyShortcuts: "feed-shortcuts",
        label: "Feed message",
        labelledBy: "feed-label",
        live: "polite",
        owns: "feed-owns",
        relevant: "additions removals text",
        roleDescription: "Feed role description",
      });
      assertType<AriaBodies<"awesomefeed feed">>({
        atomic: true,
        busy: false,
        controls: "feed-controls",
        current: "location",
        describedBy: "feed-description",
        details: "feed-details",
        disabled: "true",
        dropEffect: "copy",
        errorMessage: "feed-error",
        flowTo: "feed-flow",
        grabbed: "undefined",
        hasPopup: "menu",
        hidden: "undefined",
        invalid: "grammar",
        keyShortcuts: "feed-shortcuts",
        label: "Feed message",
        labelledBy: "feed-label",
        live: "polite",
        owns: "feed-owns",
        relevant: "additions removals text",
        roleDescription: "Feed role description",
      });
    });
    it("should not allow invalid feed role attributes", () => {
      assertType<AriaBodies<"feed">>({
        atomic: true,
        busy: false,
        controls: "feed-controls",
        // @ts-expect-error - should not allow invalid attributes
        rowCount: 1,
      });
      assertType<AriaBodies<"awesomefeed feed">>({
        atomic: true,
        busy: false,
        controls: "feed-controls",
        // @ts-expect-error - should not allow invalid attributes
        rowCount: 1,
      });
    });
  });
  describe("figure role", () => {
    it("should allow valid figure role attributes", () => {
      assertType<AriaBodies<"figure">>({
        atomic: true,
        busy: false,
        controls: "figure-controls",
        current: "location",
        describedBy: "figure-description",
        details: "figure-details",
        disabled: "true",
        dropEffect: "copy",
        errorMessage: "figure-error",
        flowTo: "figure-flow",
        grabbed: "undefined",
        hasPopup: "menu",
        hidden: "undefined",
        invalid: "grammar",
        keyShortcuts: "figure-shortcuts",
        label: "Figure message",
        labelledBy: "figure-label",
        live: "polite",
        owns: "figure-owns",
        relevant: "additions removals text",
        roleDescription: "Figure role description",
      });
      assertType<AriaBodies<"awesomefigure figure">>({
        atomic: true,
        busy: false,
        controls: "figure-controls",
        current: "location",
        describedBy: "figure-description",
        details: "figure-details",
        disabled: "true",
        dropEffect: "copy",
        errorMessage: "figure-error",
        flowTo: "figure-flow",
        grabbed: "undefined",
        hasPopup: "menu",
        hidden: "undefined",
        invalid: "grammar",
        keyShortcuts: "figure-shortcuts",
        label: "Figure message",
        labelledBy: "figure-label",
        live: "polite",
        owns: "figure-owns",
        relevant: "additions removals text",
        roleDescription: "Figure role description",
      });
    });
    it("should not allow invalid figure role attributes", () => {
      assertType<AriaBodies<"figure">>({
        atomic: true,
        busy: false,
        controls: "figure-controls",
        // @ts-expect-error - should not allow invalid attributes
        rowCount: 1,
      });
      assertType<AriaBodies<"awesomefigure figure">>({
        atomic: true,
        busy: false,
        controls: "figure-controls",
        // @ts-expect-error - should not allow invalid attributes
        rowCount: 1,
      });
    });
  });

  describe("form role", () => {
    it("should allow valid form role attributes", () => {
      assertType<AriaBodies<"form">>({
        atomic: true,
        busy: false,
        controls: "form-controls",
        current: "location",
        describedBy: "form-description",
        details: "form-details",
        disabled: "true",
        dropEffect: "copy",
        errorMessage: "form-error",
        flowTo: "form-flow",
        grabbed: "undefined",
        hasPopup: "menu",
        hidden: "undefined",
        invalid: "grammar",
        keyShortcuts: "form-shortcuts",
        label: "Form message",
        labelledBy: "form-label",
        live: "polite",
        owns: "form-owns",
        relevant: "additions removals text",
        roleDescription: "Form role description",
      });
      assertType<AriaBodies<"awesomeform form">>({
        atomic: true,
        busy: false,
        controls: "form-controls",
        current: "location",
        describedBy: "form-description",
        details: "form-details",
        disabled: "true",
        dropEffect: "copy",
        errorMessage: "form-error",
        flowTo: "form-flow",
        grabbed: "undefined",
        hasPopup: "menu",
        hidden: "undefined",
        invalid: "grammar",
        keyShortcuts: "form-shortcuts",
        label: "Form message",
        labelledBy: "form-label",
        live: "polite",
        owns: "form-owns",
        relevant: "additions removals text",
        roleDescription: "Form role description",
      });
    });
    it("should not allow invalid form role attributes", () => {
      assertType<AriaBodies<"form">>({
        atomic: true,
        busy: false,
        controls: "form-controls",
        // @ts-expect-error - should not allow invalid attributes
        rowCount: 1,
      });
      assertType<AriaBodies<"awesomeform form">>({
        atomic: true,
        busy: false,
        controls: "form-controls",
        // @ts-expect-error - should not allow invalid attributes
        rowCount: 1,
      });
    });
  });

  describe("generic role", () => {
    it("should allow valid generic role attributes", () => {
      assertType<AriaBodies<"generic">>({
        atomic: true,
        busy: false,
        controls: "generic-controls",
        current: "location",
        describedBy: "generic-description",
        details: "generic-details",
        disabled: "true",
        dropEffect: "copy",
        errorMessage: "generic-error",
        flowTo: "generic-flow",
        grabbed: "undefined",
        hasPopup: "menu",
        hidden: "undefined",
        invalid: "grammar",
        keyShortcuts: "generic-shortcuts",
        live: "polite",
        owns: "generic-owns",
        relevant: "additions removals text",
      });
      assertType<AriaBodies<"awesomegeneric generic">>({
        atomic: true,
        busy: false,
        controls: "generic-controls",
        current: "location",
        describedBy: "generic-description",
        details: "generic-details",
        disabled: "true",
        dropEffect: "copy",
        errorMessage: "generic-error",
        flowTo: "generic-flow",
        grabbed: "undefined",
        hasPopup: "menu",
        hidden: "undefined",
        invalid: "grammar",
        keyShortcuts: "generic-shortcuts",
        live: "polite",
        owns: "generic-owns",
        relevant: "additions removals text",
      });
    });
    it("should not allow label, labelledBy and roleDescription attributes", () => {
      assertType<AriaBodies<"generic">>({
        // @ts-expect-error - should not allow label attribute
        label: "Generic label",
      });
      assertType<AriaBodies<"generic">>({
        // @ts-expect-error - should not allow labelledby attribute
        labelledBy: "Generic label",
      });
      assertType<AriaBodies<"generic">>({
        // @ts-expect-error - should not allow roleDescription attribute
        roleDescription: "Generic role description",
      });
    });
    it("should not allow invalid generic role attributes", () => {
      assertType<AriaBodies<"generic">>({
        atomic: true,
        busy: false,
        controls: "generic-controls",
        // @ts-expect-error - should not allow invalid attributes
        rowCount: 1,
      });
      assertType<AriaBodies<"awesomegeneric generic">>({
        atomic: true,
        busy: false,
        controls: "generic-controls",
        // @ts-expect-error - should not allow invalid attributes
        rowCount: 1,
      });
    });
  });

  describe("grid role", () => {
    it("should allow valid grid role attributes", () => {
      assertType<AriaBodies<"grid">>({
        activeDescendant: "grid-active-descendant",
        atomic: true,
        busy: false,
        colCount: 3,
        controls: "grid-controls",
        current: "location",
        describedBy: "grid-description",
        details: "grid-details",
        disabled: "true",
        dropEffect: "copy",
        errorMessage: "grid-error",
        flowTo: "grid-flow",
        grabbed: "undefined",
        hasPopup: "menu",
        hidden: "undefined",
        invalid: "grammar",
        keyShortcuts: "grid-shortcuts",
        label: "Grid message",
        labelledBy: "grid-label",
        live: "polite",
        multiSelectable: true,
        owns: "grid-owns",
        readOnly: true,
        relevant: "additions removals text",
        roleDescription: "Grid role description",
        rowCount: 2,
      });
      assertType<AriaBodies<"awesomegrid grid">>({
        activeDescendant: "grid-active-descendant",
        atomic: true,
        busy: false,
        colCount: 3,
        controls: "grid-controls",
        current: "location",
        describedBy: "grid-description",
        details: "grid-details",
        disabled: "true",
        dropEffect: "copy",
        errorMessage: "grid-error",
        flowTo: "grid-flow",
        grabbed: "undefined",
        hasPopup: "menu",
        hidden: "undefined",
        invalid: "grammar",
        keyShortcuts: "grid-shortcuts",
        label: "Grid message",
        labelledBy: "grid-label",
        live: "polite",
        multiSelectable: true,
        owns: "grid-owns",
        relevant: "additions removals text",
        readOnly: true,
        roleDescription: "Grid role description",
        rowCount: 2,
      });
    });
    it("should not allow invalid grid role attributes", () => {
      assertType<AriaBodies<"grid">>({
        activeDescendant: "grid-active-descendant",
        atomic: true,
        busy: false,
        controls: "grid-controls",
        // @ts-expect-error - should not allow invalid attributes
        rowIndex: 1,
      });
      assertType<AriaBodies<"awesomegrid grid">>({
        activeDescendant: "grid-active-descendant",
        atomic: true,
        busy: false,
        controls: "grid-controls",
        // @ts-expect-error - should not allow invalid attributes
        rowSpan: 1,
      });
    });
  });

  describe("gridcell role", () => {
    it("should allow valid gridcell role attributes", () => {
      assertType<AriaBodies<"gridcell">>({
        atomic: true,
        busy: false,
        colIndex: 1,
        colSpan: 2,
        controls: "gridcell-controls",
        current: "location",
        describedBy: "gridcell-description",
        details: "gridcell-details",
        disabled: "true",
        dropEffect: "copy",
        errorMessage: "gridcell-error",
        expanded: "undefined",
        flowTo: "gridcell-flow",
        grabbed: "undefined",
        hasPopup: "menu",
        hidden: "undefined",
        invalid: "grammar",
        keyShortcuts: "gridcell-shortcuts",
        label: "Grid cell message",
        labelledBy: "gridcell-label",
        live: "polite",
        owns: "gridcell-owns",
        readOnly: true,
        required: true,
        relevant: "additions removals text",
        roleDescription: "Grid cell role description",
        selected: true,
      });
      assertType<AriaBodies<"awesomegridcell gridcell">>({
        atomic: true,
        busy: false,
        colIndex: 1,
        colSpan: 2,
        controls: "gridcell-controls",
        current: "location",
        describedBy: "gridcell-description",
        details: "gridcell-details",
        disabled: "true",
        dropEffect: "copy",
        errorMessage: "gridcell-error",
        expanded: "undefined",
        flowTo: "gridcell-flow",
        grabbed: "undefined",
        hasPopup: "menu",
        hidden: "undefined",
        invalid: "grammar",
        keyShortcuts: "gridcell-shortcuts",
        label: "Grid cell message",
        labelledBy: "gridcell-label",
        live: "polite",
        owns: "gridcell-owns",
        readOnly: true,
        required: true,
        relevant: "additions removals text",
        roleDescription: "Grid cell role description",
        selected: true,
      });
    });
    it("should not allow invalid gridcell role attributes", () => {
      assertType<AriaBodies<"gridcell">>({
        // @ts-expect-error - should not allow invalid attributes
        activeDescendant: "gridcell-active-descendant",
      });
      assertType<AriaBodies<"awesomegridcell gridcell">>({
        // @ts-expect-error - should not allow invalid attributes
        activeDescendant: "gridcell-active-descendant",
      });
    });
  });

  describe("group role", () => {
    it("should allow valid group role attributes", () => {
      assertType<AriaBodies<"group">>({
        activeDescendant: "group-active-descendant",
        atomic: true,
        busy: false,
        controls: "group-controls",
        current: "location",
        describedBy: "group-description",
        details: "group-details",
        disabled: "true",
        dropEffect: "copy",
        errorMessage: "group-error",
        flowTo: "group-flow",
        grabbed: "undefined",
        hasPopup: "menu",
        hidden: "undefined",
        invalid: "grammar",
        keyShortcuts: "group-shortcuts",
        label: "Group message",
        labelledBy: "group-label",
        live: "polite",
        owns: "group-owns",
        relevant: "additions removals text",
        roleDescription: "Group role description",
      });
      assertType<AriaBodies<"awesomegroup group">>({
        activeDescendant: "group-active-descendant",
        atomic: true,
        busy: false,
        controls: "group-controls",
        current: "location",
        describedBy: "group-description",
        details: "group-details",
        disabled: "true",
        dropEffect: "copy",
        errorMessage: "group-error",
        flowTo: "group-flow",
        grabbed: "undefined",
        hasPopup: "menu",
        hidden: "undefined",
        invalid: "grammar",
        keyShortcuts: "group-shortcuts",
        label: "Group message",
        labelledBy: "group-label",
        live: "polite",
        owns: "group-owns",
        relevant: "additions removals text",
        roleDescription: "Group role description",
      });
    });
    it("should not allow invalid group role attributes", () => {
      assertType<AriaBodies<"group">>({
        atomic: true,
        busy: false,
        controls: "group-controls",
        // @ts-expect-error - should not allow invalid attributes
        rowCount: 1,
      });
      assertType<AriaBodies<"awesomegroup group">>({
        atomic: true,
        busy: false,
        controls: "group-controls",
        // @ts-expect-error - should not allow invalid attributes
        rowCount: 1,
      });
    });
  });

  describe("heading role", () => {
    it("should allow valid heading role attributes", () => {
      assertType<AriaBodies<"heading">>({
        atomic: true,
        busy: false,
        controls: "heading-controls",
        current: "location",
        describedBy: "heading-description",
        details: "heading-details",
        disabled: "true",
        dropEffect: "copy",
        errorMessage: "heading-error",
        flowTo: "heading-flow",
        grabbed: "undefined",
        hasPopup: "menu",
        hidden: "undefined",
        invalid: "grammar",
        keyShortcuts: "heading-shortcuts",
        label: "Heading message",
        labelledBy: "heading-label",
        live: "polite",
        owns: "heading-owns",
        relevant: "additions removals text",
        roleDescription: "Heading role description",
      });
      assertType<AriaBodies<"awesomeheading heading">>({
        atomic: true,
        busy: false,
        controls: "heading-controls",
        current: "location",
        describedBy: "heading-description",
        details: "heading-details",
        disabled: "true",
        dropEffect: "copy",
        errorMessage: "heading-error",
        flowTo: "heading-flow",
        grabbed: "undefined",
        hasPopup: "menu",
        hidden: "undefined",
        invalid: "grammar",
        keyShortcuts: "heading-shortcuts",
        label: "Heading message",
        labelledBy: "heading-label",
        live: "polite",
        owns: "heading-owns",
        relevant: "additions removals text",
        roleDescription: "Heading role description",
      });
    });
    it("should not allow invalid heading role attributes", () => {
      assertType<AriaBodies<"heading">>({
        atomic: true,
        busy: false,
        controls: "heading-controls",
        // @ts-expect-error - should not allow invalid attributes
        rowCount: 1,
      });
      assertType<AriaBodies<"awesomeheading heading">>({
        atomic: true,
        busy: false,
        controls: "heading-controls",
        // @ts-expect-error - should not allow invalid attributes
        rowCount: 1,
      });
    });
  });

  describe("img role", () => {
    it("should allow valid img role attributes", () => {
      assertType<AriaBodies<"img">>({
        atomic: true,
        busy: false,
        controls: "img-controls",
        current: "location",
        describedBy: "img-description",
        details: "img-details",
        disabled: "true",
        dropEffect: "copy",
        errorMessage: "img-error",
        flowTo: "img-flow",
        grabbed: "undefined",
        hasPopup: "menu",
        hidden: "undefined",
        invalid: "grammar",
        keyShortcuts: "img-shortcuts",
        label: "Image message",
        labelledBy: "img-label",
        live: "polite",
        owns: "img-owns",
        relevant: "additions removals text",
        roleDescription: "Image role description",
      });
      assertType<AriaBodies<"awesomeimg img">>({
        atomic: true,
        busy: false,
        controls: "img-controls",
        current: "location",
        describedBy: "img-description",
        details: "img-details",
        disabled: "true",
        dropEffect: "copy",
        errorMessage: "img-error",
        flowTo: "img-flow",
        grabbed: "undefined",
        hasPopup: "menu",
        hidden: "undefined",
        invalid: "grammar",
        keyShortcuts: "img-shortcuts",
        label: "Image message",
        labelledBy: "img-label",
        live: "polite",
        owns: "img-owns",
        relevant: "additions removals text",
        roleDescription: "Image role description",
      });
    });
    it("should not allow invalid img role attributes", () => {
      assertType<AriaBodies<"img">>({
        atomic: true,
        busy: false,
        controls: "img-controls",
        // @ts-expect-error - should not allow invalid attributes
        rowCount: 1,
      });
      assertType<AriaBodies<"awesomeimg img">>({
        atomic: true,
        busy: false,
        controls: "img-controls",
        // @ts-expect-error - should not allow invalid attributes
        rowCount: 1,
      });
    });
  });
  describe("insertion role", () => {
    it("should allow valid insertion role attributes", () => {
      assertType<AriaBodies<"insertion">>({
        atomic: true,
        busy: false,
        controls: "insertion-controls",
        current: "location",
        describedBy: "insertion-description",
        details: "insertion-details",
        disabled: "true",
        dropEffect: "copy",
        errorMessage: "insertion-error",
        flowTo: "insertion-flow",
        grabbed: "undefined",
        hasPopup: "menu",
        hidden: "undefined",
        invalid: "grammar",
        keyShortcuts: "insertion-shortcuts",
        live: "polite",
        owns: "insertion-owns",
        relevant: "additions removals text",
        roleDescription: "Insertion role description",
      });
      assertType<AriaBodies<"awesomeinsertion insertion">>({
        atomic: true,
        busy: false,
        controls: "insertion-controls",
        current: "location",
        describedBy: "insertion-description",
        details: "insertion-details",
        disabled: "true",
        dropEffect: "copy",
        errorMessage: "insertion-error",
        flowTo: "insertion-flow",
        grabbed: "undefined",
        hasPopup: "menu",
        hidden: "undefined",
        invalid: "grammar",
        keyShortcuts: "insertion-shortcuts",
        live: "polite",
        owns: "insertion-owns",
        relevant: "additions removals text",
        roleDescription: "Insertion role description",
      });
    });
    it("should not allow label and labelledBy attributes", () => {
      assertType<AriaBodies<"insertion">>({
        // @ts-expect-error - should not allow label attribute
        label: "Insertion label",
      });
      assertType<AriaBodies<"insertion">>({
        // @ts-expect-error - should not allow labelledby attribute
        labelledBy: "Insertion label",
      });
    });
  });
  describe("link role", () => {
    it("should allow valid link role attributes", () => {
      assertType<AriaBodies<"link">>({
        atomic: true,
        busy: false,
        controls: "link-controls",
        current: "location",
        describedBy: "link-description",
        details: "link-details",
        disabled: "true",
        dropEffect: "copy",
        errorMessage: "link-error",
        expanded: "undefined",
        flowTo: "link-flow",
        grabbed: "undefined",
        hasPopup: "menu",
        hidden: "undefined",
        invalid: "grammar",
        keyShortcuts: "link-shortcuts",
        label: "Link message",
        labelledBy: "link-label",
        live: "polite",
        owns: "link-owns",
        relevant: "additions removals text",
        roleDescription: "Link role description",
      });
      assertType<AriaBodies<"awesomelink link">>({
        atomic: true,
        busy: false,
        controls: "link-controls",
        current: "location",
        describedBy: "link-description",
        details: "link-details",
        disabled: "true",
        dropEffect: "copy",
        errorMessage: "link-error",
        expanded: "undefined",
        flowTo: "link-flow",
        grabbed: "undefined",
        hasPopup: "menu",
        hidden: "undefined",
        invalid: "grammar",
        keyShortcuts: "link-shortcuts",
        label: "Link message",
        labelledBy: "link-label",
        live: "polite",
        owns: "link-owns",
        relevant: "additions removals text",
        roleDescription: "Link role description",
      });
    });
    it("should not allow invalid link role attributes", () => {
      assertType<AriaBodies<"link">>({
        atomic: true,
        busy: false,
        controls: "link-controls",
        // @ts-expect-error - should not allow invalid attributes
        rowCount: 1,
      });
      assertType<AriaBodies<"awesomelink link">>({
        atomic: true,
        busy: false,
        controls: "link-controls",
        // @ts-expect-error - should not allow invalid attributes
        rowCount: 1,
      });
    });
  });

  describe("list role", () => {
    it("should allow valid list role attributes", () => {
      assertType<AriaBodies<"list">>({
        atomic: true,
        busy: false,
        controls: "list-controls",
        current: "location",
        describedBy: "list-description",
        details: "list-details",
        disabled: "true",
        dropEffect: "copy",
        errorMessage: "list-error",
        flowTo: "list-flow",
        grabbed: "undefined",
        hasPopup: "menu",
        hidden: "undefined",
        invalid: "grammar",
        keyShortcuts: "list-shortcuts",
        label: "List message",
        labelledBy: "list-label",
        live: "polite",
        owns: "list-owns",
        relevant: "additions removals text",
        roleDescription: "List role description",
      });
      assertType<AriaBodies<"awesomelist list">>({
        atomic: true,
        busy: false,
        controls: "list-controls",
        current: "location",
        describedBy: "list-description",
        details: "list-details",
        disabled: "true",
        dropEffect: "copy",
        errorMessage: "list-error",
        flowTo: "list-flow",
        grabbed: "undefined",
        hasPopup: "menu",
        hidden: "undefined",
        invalid: "grammar",
        keyShortcuts: "list-shortcuts",
        label: "List message",
        labelledBy: "list-label",
        live: "polite",
        owns: "list-owns",
        relevant: "additions removals text",
        roleDescription: "List role description",
      });
    });
    it("should not allow invalid list role attributes", () => {
      assertType<AriaBodies<"list">>({
        atomic: true,
        busy: false,
        controls: "list-controls",
        // @ts-expect-error - should not allow invalid attributes
        rowCount: 1,
      });
      assertType<AriaBodies<"awesomelist list">>({
        atomic: true,
        busy: false,
        controls: "list-controls",
        // @ts-expect-error - should not allow invalid attributes
        rowCount: 1,
      });
    });
  });

  describe("listbox role", () => {
    it("should allow valid listbox role attributes", () => {
      assertType<AriaBodies<"listbox">>({
        activeDescendant: "listbox-active-descendant",
        atomic: true,
        busy: false,
        controls: "listbox-controls",
        current: "location",
        describedBy: "listbox-description",
        details: "listbox-details",
        disabled: "true",
        dropEffect: "copy",
        errorMessage: "listbox-error",
        expanded: "undefined",
        flowTo: "listbox-flow",
        grabbed: "undefined",
        hasPopup: "menu",
        hidden: "undefined",
        invalid: "grammar",
        keyShortcuts: "listbox-shortcuts",
        label: "Listbox message",
        labelledBy: "listbox-label",
        live: "polite",
        multiSelectable: true,
        owns: "listbox-owns",
        readOnly: true,
        relevant: "additions removals text",
        roleDescription: "Listbox role description",
      });
      assertType<AriaBodies<"awesomelistbox listbox">>({
        activeDescendant: "listbox-active-descendant",
        atomic: true,
        busy: false,
        controls: "listbox-controls",
        current: "location",
        describedBy: "listbox-description",
        details: "listbox-details",
        disabled: "true",
        dropEffect: "copy",
        errorMessage: "listbox-error",
        expanded: "undefined",
        flowTo: "listbox-flow",
        grabbed: "undefined",
        hasPopup: "menu",
        hidden: "undefined",
        invalid: "grammar",
        keyShortcuts: "listbox-shortcuts",
        label: "Listbox message",
        labelledBy: "listbox-label",
        live: "polite",
        multiSelectable: true,
        owns: "listbox-owns",
        readOnly: true,
        relevant: "additions removals text",
        roleDescription: "Listbox role description",
      });
    });
    it("should not allow invalid listbox role attributes", () => {
      assertType<AriaBodies<"listbox">>({
        activeDescendant: "listbox-active-descendant",
        atomic: true,
        busy: false,
        controls: "listbox-controls",
        // @ts-expect-error - should not allow invalid attributes
        rowIndex: 1,
      });
      assertType<AriaBodies<"awesomelistbox listbox">>({
        activeDescendant: "listbox-active-descendant",
        atomic: true,
        busy: false,
        controls: "listbox-controls",
        // @ts-expect-error - should not allow invalid attributes
        rowSpan: 1,
      });
    });
  });
  describe("listitem role", () => {
    it("should allow valid listitem role attributes", () => {
      assertType<AriaBodies<"listitem">>({
        atomic: true,
        busy: false,
        controls: "listitem-controls",
        current: "location",
        describedBy: "listitem-description",
        details: "listitem-details",
        disabled: "true",
        dropEffect: "copy",
        errorMessage: "listitem-error",
        flowTo: "listitem-flow",
        grabbed: "undefined",
        hasPopup: "menu",
        hidden: "undefined",
        invalid: "grammar",
        keyShortcuts: "listitem-shortcuts",
        label: "List item message",
        labelledBy: "listitem-label",
        level: 1,
        live: "polite",
        owns: "listitem-owns",
        posInSet: 1,
        relevant: "additions removals text",
        roleDescription: "List item role description",
        setSize: 3,
      });
      assertType<AriaBodies<"awesomelistitem listitem">>({
        atomic: true,
        busy: false,
        controls: "listitem-controls",
        current: "location",
        describedBy: "listitem-description",
        details: "listitem-details",
        disabled: "true",
        dropEffect: "copy",
        errorMessage: "listitem-error",
        flowTo: "listitem-flow",
        grabbed: "undefined",
        hasPopup: "menu",
        hidden: "undefined",
        invalid: "grammar",
        keyShortcuts: "listitem-shortcuts",
        label: "List item message",
        labelledBy: "listitem-label",
        level: 1,
        live: "polite",
        owns: "listitem-owns",
        posInSet: 1,
        relevant: "additions removals text",
        roleDescription: "List item role description",
        setSize: 3,
      });
    });
    it("should not allow invalid listitem role attributes", () => {
      assertType<AriaBodies<"listitem">>({
        // @ts-expect-error - should not allow invalid attributes
        activeDescendant: "listitem-active-descendant",
      });
      assertType<AriaBodies<"awesomelistitem listitem">>({
        // @ts-expect-error - should not allow
        activeDescendant: "listitem-active-descendant",
      });
    });
  });
  describe("log role", () => {
    it("should allow valid log role attributes", () => {
      assertType<AriaBodies<"log">>({
        atomic: true,
        busy: false,
        controls: "log-controls",
        current: "location",
        describedBy: "log-description",
        details: "log-details",
        disabled: "true",
        dropEffect: "copy",
        errorMessage: "log-error",
        flowTo: "log-flow",
        grabbed: "undefined",
        hasPopup: "menu",
        hidden: "undefined",
        invalid: "grammar",
        keyShortcuts: "log-shortcuts",
        label: "Log message",
        labelledBy: "log-label",
        live: "polite",
        owns: "log-owns",
        relevant: "additions removals text",
        roleDescription: "Log role description",
      });
      assertType<AriaBodies<"awesomelog log">>({
        atomic: true,
        busy: false,
        controls: "log-controls",
        current: "location",
        describedBy: "log-description",
        details: "log-details",
        disabled: "true",
        dropEffect: "copy",
        errorMessage: "log-error",
        flowTo: "log-flow",
        grabbed: "undefined",
        hasPopup: "menu",
        hidden: "undefined",
        invalid: "grammar",
        keyShortcuts: "log-shortcuts",
        label: "Log message",
        labelledBy: "log-label",
        live: "polite",
        owns: "log-owns",
        relevant: "additions removals text",
        roleDescription: "Log role description",
      });
    });
    it("should not allow invalid log role attributes", () => {
      assertType<AriaBodies<"log">>({
        atomic: true,
        busy: false,
        controls: "log-controls",
        // @ts-expect-error - should not allow invalid attributes
        rowCount: 1,
      });
      assertType<AriaBodies<"awesomelog log">>({
        atomic: true,
        busy: false,
        controls: "log-controls",
        // @ts-expect-error - should not allow invalid attributes
        rowCount: 1,
      });
    });
  });
  describe("main role", () => {
    it("should allow valid main role attributes", () => {
      assertType<AriaBodies<"main">>({
        atomic: true,
        busy: false,
        controls: "main-controls",
        current: "location",
        describedBy: "main-description",
        details: "main-details",
        disabled: "true",
        dropEffect: "copy",
        errorMessage: "main-error",
        flowTo: "main-flow",
        grabbed: "undefined",
        hasPopup: "menu",
        hidden: "undefined",
        invalid: "grammar",
        keyShortcuts: "main-shortcuts",
        label: "Main message",
        labelledBy: "main-label",
        live: "polite",
        owns: "main-owns",
        relevant: "additions removals text",
        roleDescription: "Main role description",
      });
      assertType<AriaBodies<"awesomemain main">>({
        atomic: true,
        busy: false,
        controls: "main-controls",
        current: "location",
        describedBy: "main-description",
        details: "main-details",
        disabled: "true",
        dropEffect: "copy",
        errorMessage: "main-error",
        flowTo: "main-flow",
        grabbed: "undefined",
        hasPopup: "menu",
        hidden: "undefined",
        invalid: "grammar",
        keyShortcuts: "main-shortcuts",
        label: "Main message",
        labelledBy: "main-label",
        live: "polite",
        owns: "main-owns",
        relevant: "additions removals text",
        roleDescription: "Main role description",
      });
    });
    it("should not allow invalid main role attributes", () => {
      assertType<AriaBodies<"main">>({
        atomic: true,
        busy: false,
        controls: "main-controls",
        // @ts-expect-error - should not allow invalid attributes
        rowCount: 1,
      });
      assertType<AriaBodies<"awesomemain main">>({
        atomic: true,
        busy: false,
        controls: "main-controls",
        // @ts-expect-error - should not allow invalid attributes
        rowCount: 1,
      });
    });
  });
  describe("marquee role", () => {
    it("should allow valid marquee role attributes", () => {
      assertType<AriaBodies<"marquee">>({
        atomic: true,
        busy: false,
        controls: "marquee-controls",
        current: "location",
        describedBy: "marquee-description",
        details: "marquee-details",
        disabled: "true",
        dropEffect: "copy",
        errorMessage: "marquee-error",
        flowTo: "marquee-flow",
        grabbed: "undefined",
        hasPopup: "menu",
        hidden: "undefined",
        invalid: "grammar",
        keyShortcuts: "marquee-shortcuts",
        label: "Marquee message",
        labelledBy: "marquee-label",
        live: "polite",
        owns: "marquee-owns",
        relevant: "additions removals text",
        roleDescription: "Marquee role description",
      });
      assertType<AriaBodies<"awesomemarquee marquee">>({
        atomic: true,
        busy: false,
        controls: "marquee-controls",
        current: "location",
        describedBy: "marquee-description",
        details: "marquee-details",
        disabled: "true",
        dropEffect: "copy",
        errorMessage: "marquee-error",
        flowTo: "marquee-flow",
        grabbed: "undefined",
        hasPopup: "menu",
        hidden: "undefined",
        invalid: "grammar",
        keyShortcuts: "marquee-shortcuts",
        label: "Marquee message",
        labelledBy: "marquee-label",
        live: "polite",
        owns: "marquee-owns",
        relevant: "additions removals text",
        roleDescription: "Marquee role description",
      });
    });
    it("should not allow invalid marquee role attributes", () => {
      assertType<AriaBodies<"marquee">>({
        atomic: true,
        busy: false,
        controls: "marquee-controls",
        // @ts-expect-error - should not allow invalid attributes
        rowCount: 1,
      });
      assertType<AriaBodies<"awesomemarquee marquee">>({
        atomic: true,
        busy: false,
        controls: "marquee-controls",
        // @ts-expect-error - should not allow invalid attributes
        rowCount: 1,
      });
    });
  });
  describe("math role", () => {
    it("should allow valid math role attributes", () => {
      assertType<AriaBodies<"math">>({
        atomic: true,
        busy: false,
        controls: "math-controls",
        current: "location",
        describedBy: "math-description",
        details: "math-details",
        disabled: "true",
        dropEffect: "copy",
        errorMessage: "math-error",
        flowTo: "math-flow",
        grabbed: "undefined",
        hasPopup: "menu",
        hidden: "undefined",
        invalid: "grammar",
        keyShortcuts: "math-shortcuts",
        label: "Math message",
        labelledBy: "math-label",
        live: "polite",
        owns: "math-owns",
        relevant: "additions removals text",
        roleDescription: "Math role description",
      });
      assertType<AriaBodies<"awesomemath math">>({
        atomic: true,
        busy: false,
        controls: "math-controls",
        current: "location",
        describedBy: "math-description",
        details: "math-details",
        disabled: "true",
        dropEffect: "copy",
        errorMessage: "math-error",
        flowTo: "math-flow",
        grabbed: "undefined",
        hasPopup: "menu",
        hidden: "undefined",
        invalid: "grammar",
        keyShortcuts: "math-shortcuts",
        label: "Math message",
        labelledBy: "math-label",
        live: "polite",
        owns: "math-owns",
        relevant: "additions removals text",
        roleDescription: "Math role description",
      });
    });
    it("should not allow invalid math role attributes", () => {
      assertType<AriaBodies<"math">>({
        atomic: true,
        busy: false,
        controls: "math-controls",
        // @ts-expect-error - should not allow invalid attributes
        rowCount: 1,
      });
      assertType<AriaBodies<"awesomemath math">>({
        atomic: true,
        busy: false,
        controls: "math-controls",
        // @ts-expect-error - should not allow invalid attributes
        rowCount: 1,
      });
    });
  });

  describe("meter role", () => {
    it("should allow valid meter role attributes", () => {
      assertType<AriaBodies<"meter">>({
        atomic: true,
        busy: false,
        controls: "meter-controls",
        current: "location",
        describedBy: "meter-description",
        details: "meter-details",
        disabled: "true",
        dropEffect: "copy",
        errorMessage: "meter-error",
        flowTo: "meter-flow",
        grabbed: "undefined",
        hasPopup: "menu",
        hidden: "undefined",
        invalid: "grammar",
        keyShortcuts: "meter-shortcuts",
        label: "Meter message",
        labelledBy: "meter-label",
        live: "polite",
        owns: "meter-owns",
        relevant: "additions removals text",
        roleDescription: "Meter role description",
        valueMax: 100,
        valueMin: 0,
        valueNow: 50,
      });
      assertType<AriaBodies<"awesomemeter meter">>({
        atomic: true,
        busy: false,
        controls: "meter-controls",
        current: "location",
        describedBy: "meter-description",
        details: "meter-details",
        disabled: "true",
        dropEffect: "copy",
        errorMessage: "meter-error",
        flowTo: "meter-flow",
        grabbed: "undefined",
        hasPopup: "menu",
        hidden: "undefined",
        invalid: "grammar",
        keyShortcuts: "meter-shortcuts",
        label: "Meter message",
        labelledBy: "meter-label",
        live: "polite",
        owns: "meter-owns",
        relevant: "additions removals text",
        roleDescription: "Meter role description",
        valueMax: 100,
        valueMin: 0,
        valueNow: 50,
      });
    });
    it("should not allow invalid meter role attributes", () => {
      assertType<AriaBodies<"meter">>({
        atomic: true,
        busy: false,
        controls: "meter-controls",
        // @ts-expect-error - should not allow invalid attributes
        rowCount: 1,
      });
      assertType<AriaBodies<"awesomemeter meter">>({
        atomic: true,
        busy: false,
        controls: "meter-controls",
        // @ts-expect-error - should not allow invalid attributes
        rowCount: 1,
      });
    });
  });

  describe("menu role", () => {
    it("should allow valid menu role attributes", () => {
      assertType<AriaBodies<"menu">>({
        activeDescendant: "menu-active-descendant",
        atomic: true,
        busy: false,
        controls: "menu-controls",
        current: "location",
        describedBy: "menu-description",
        details: "menu-details",
        disabled: "true",
        dropEffect: "copy",
        errorMessage: "menu-error",
        flowTo: "menu-flow",
        grabbed: "undefined",
        hasPopup: "menu",
        hidden: "undefined",
        invalid: "grammar",
        keyShortcuts: "menu-shortcuts",
        label: "Menu message",
        labelledBy: "menu-label",
        live: "polite",
        owns: "menu-owns",
        orientation: "horizontal",
        relevant: "additions removals text",
        roleDescription: "Menu role description",
      });
      assertType<AriaBodies<"awesomemenu menu">>({
        activeDescendant: "menu-active-descendant",
        atomic: true,
        busy: false,
        controls: "menu-controls",
        current: "location",
        describedBy: "menu-description",
        details: "menu-details",
        disabled: "true",
        dropEffect: "copy",
        errorMessage: "menu-error",
        flowTo: "menu-flow",
        grabbed: "undefined",
        hasPopup: "menu",
        hidden: "undefined",
        invalid: "grammar",
        keyShortcuts: "menu-shortcuts",
        label: "Menu message",
        labelledBy: "menu-label",
        live: "polite",
        owns: "menu-owns",
        orientation: "horizontal",
        relevant: "additions removals text",
        roleDescription: "Menu role description",
      });
    });
    it("should not allow invalid menu role attributes", () => {
      assertType<AriaBodies<"menu">>({
        activeDescendant: "menu-active-descendant",
        atomic: true,
        busy: false,
        controls: "menu-controls",
        // @ts-expect-error - should not allow invalid attributes
        rowIndex: 1,
      });
      assertType<AriaBodies<"awesomemenu menu">>({
        activeDescendant: "menu-active-descendant",
        atomic: true,
        busy: false,
        controls: "menu-controls",
        // @ts-expect-error - should not allow invalid attributes
        rowSpan: 1,
      });
    });
  });
  describe("menubar role", () => {
    it("should allow valid menubar role attributes", () => {
      assertType<AriaBodies<"menubar">>({
        activeDescendant: "menubar-active-descendant",
        atomic: true,
        busy: false,
        controls: "menubar-controls",
        current: "location",
        describedBy: "menubar-description",
        details: "menubar-details",
        disabled: "true",
        dropEffect: "copy",
        errorMessage: "menubar-error",
        flowTo: "menubar-flow",
        grabbed: "undefined",
        hasPopup: "menu",
        hidden: "undefined",
        invalid: "grammar",
        keyShortcuts: "menubar-shortcuts",
        label: "Menubar message",
        labelledBy: "menubar-label",
        live: "polite",
        owns: "menubar-owns",
        orientation: "horizontal",
        relevant: "additions removals text",
        roleDescription: "Menubar role description",
      });
      assertType<AriaBodies<"awesomemenubar menubar">>({
        activeDescendant: "menubar-active-descendant",
        atomic: true,
        busy: false,
        controls: "menubar-controls",
        current: "location",
        describedBy: "menubar-description",
        details: "menubar-details",
        disabled: "true",
        dropEffect: "copy",
        errorMessage: "menubar-error",
        flowTo: "menubar-flow",
        grabbed: "undefined",
        hasPopup: "menu",
        hidden: "undefined",
        invalid: "grammar",
        keyShortcuts: "menubar-shortcuts",
        label: "Menubar message",
        labelledBy: "menubar-label",
        live: "polite",
        owns: "menubar-owns",
        orientation: "horizontal",
        relevant: "additions removals text",
        roleDescription: "Menubar role description",
      });
    });
    it("should not allow invalid menubar role attributes", () => {
      assertType<AriaBodies<"menubar">>({
        activeDescendant: "menubar-active-descendant",
        atomic: true,
        busy: false,
        controls: "menubar-controls",
        // @ts-expect-error - should not allow invalid attributes
        rowIndex: 1,
      });
      assertType<AriaBodies<"awesomemenubar menubar">>({
        activeDescendant: "menubar-active-descendant",
        atomic: true,
        busy: false,
        controls: "menubar-controls",
        // @ts-expect-error - should not allow invalid attributes
        rowSpan: 1,
      });
    });
  });
  describe("menuitem role", () => {
    it("should allow valid menuitem role attributes", () => {
      assertType<AriaBodies<"menuitem">>({
        atomic: true,
        busy: false,
        controls: "menuitem-controls",
        current: "location",
        describedBy: "menuitem-description",
        details: "menuitem-details",
        disabled: "true",
        dropEffect: "copy",
        errorMessage: "menuitem-error",
        expanded: "undefined",
        flowTo: "menuitem-flow",
        grabbed: "undefined",
        hasPopup: "menu",
        hidden: "undefined",
        invalid: "grammar",
        keyShortcuts: "menuitem-shortcuts",
        label: "Menu item message",
        labelledBy: "menuitem-label",
        live: "polite",
        owns: "menuitem-owns",
        posInSet: 1,
        relevant: "additions removals text",
        roleDescription: "Menu item role description",
        setSize: 3,
      });
      assertType<AriaBodies<"awesomemenuitem menuitem">>({
        atomic: true,
        busy: false,
        controls: "menuitem-controls",
        current: "location",
        describedBy: "menuitem-description",
        details: "menuitem-details",
        disabled: "true",
        dropEffect: "copy",
        errorMessage: "menuitem-error",
        expanded: "undefined",
        flowTo: "menuitem-flow",
        grabbed: "undefined",
        hasPopup: "menu",
        hidden: "undefined",
        invalid: "grammar",
        keyShortcuts: "menuitem-shortcuts",
        label: "Menu item message",
        labelledBy: "menuitem-label",
        live: "polite",
        owns: "menuitem-owns",
        posInSet: 1,
        relevant: "additions removals text",
        roleDescription: "Menu item role description",
        setSize: 3,
      });
    });
    it("should not allow invalid menuitem role attributes", () => {
      assertType<AriaBodies<"menuitem">>({
        atomic: true,
        busy: false,
        controls: "menuitem-controls",
      });
      assertType<AriaBodies<"awesomemenuitem menuitem">>({
        atomic: true,
        busy: false,
        controls: "menuitem-controls",
      });
    });
  });

  describe("menuitemcheckbox role", () => {
    it("should allow valid menuitemcheckbox role attributes", () => {
      assertType<AriaBodies<"menuitemcheckbox">>({
        atomic: true,
        busy: false,
        checked: true,
        controls: "menuitemcheckbox-controls",
        current: "location",
        describedBy: "menuitemcheckbox-description",
        details: "menuitemcheckbox-details",
        disabled: "true",
        dropEffect: "copy",
        errorMessage: "menuitemcheckbox-error",
        expanded: "undefined",
        flowTo: "menuitemcheckbox-flow",
        grabbed: "undefined",
        hasPopup: "menu",
        hidden: "undefined",
        invalid: "grammar",
        keyShortcuts: "menuitemcheckbox-shortcuts",
        label: "Menu item checkbox message",
        labelledBy: "menuitemcheckbox-label",
        live: "polite",
        owns: "menuitemcheckbox-owns",
        posInSet: 1,
        relevant: "additions removals text",
        roleDescription: "Menu item checkbox role description",
        setSize: 3,
      });
      assertType<AriaBodies<"awesomemenuitemcheckbox menuitemcheckbox">>({
        atomic: true,
        busy: false,
        checked: true,
        controls: "menuitemcheckbox-controls",
        current: "location",
        describedBy: "menuitemcheckbox-description",
        details: "menuitemcheckbox-details",
        disabled: "true",
        dropEffect: "copy",
        errorMessage: "menuitemcheckbox-error",
        expanded: "undefined",
        flowTo: "menuitemcheckbox-flow",
        grabbed: "undefined",
        hasPopup: "menu",
        hidden: "undefined",
        invalid: "grammar",
        keyShortcuts: "menuitemcheckbox-shortcuts",
        label: "Menu item checkbox message",
        labelledBy: "menuitemcheckbox-label",
        live: "polite",
        owns: "menuitemcheckbox-owns",
        posInSet: 1,
        relevant: "additions removals text",
        roleDescription: "Menu item checkbox role description",
        setSize: 3,
      });
    });
    it("should not allow invalid menuitemcheckbox role attributes", () => {
      assertType<AriaBodies<"menuitemcheckbox">>({
        atomic: true,
        busy: false,
        // @ts-expect-error - should not allow invalid attributes
        rowCount: 1,
      });
      assertType<AriaBodies<"awesomemenuitemcheckbox menuitemcheckbox">>({
        atomic: true,
        busy: false,
        controls: "menuitemcheckbox-controls",
        // @ts-expect-error - should not allow invalid attributes
        rowCount: 1,
      });
    });
  });

  describe("menuitemradio role", () => {
    it("should allow valid menuitemradio role attributes", () => {
      assertType<AriaBodies<"menuitemradio">>({
        atomic: true,
        busy: false,
        checked: true,
        controls: "menuitemradio-controls",
        current: "location",
        describedBy: "menuitemradio-description",
        details: "menuitemradio-details",
        disabled: "true",
        dropEffect: "copy",
        errorMessage: "menuitemradio-error",
        expanded: "undefined",
        flowTo: "menuitemradio-flow",
        grabbed: "undefined",
        hasPopup: "menu",
        hidden: "undefined",
        invalid: "grammar",
        keyShortcuts: "menuitemradio-shortcuts",
        label: "Menu item radio message",
        labelledBy: "menuitemradio-label",
        live: "polite",
        owns: "menuitemradio-owns",
        posInSet: 1,
        relevant: "additions removals text",
        roleDescription: "Menu item radio role description",
        setSize: 3,
      });
      assertType<AriaBodies<"awesomemenuitemradio menuitemradio">>({
        atomic: true,
        busy: false,
        checked: true,
        controls: "menuitemradio-controls",
        current: "location",
        describedBy: "menuitemradio-description",
        details: "menuitemradio-details",
        disabled: "true",
        dropEffect: "copy",
        errorMessage: "menuitemradio-error",
        expanded: "undefined",
        flowTo: "menuitemradio-flow",
        grabbed: "undefined",
        hasPopup: "menu",
        hidden: "undefined",
        invalid: "grammar",
        keyShortcuts: "menuitemradio-shortcuts",
        label: "Menu item radio message",
        labelledBy: "menuitemradio-label",
        live: "polite",
        owns: "menuitemradio-owns",
        posInSet: 1,
        relevant: "additions removals text",
        roleDescription: "Menu item radio role description",
        setSize: 3,
      });
    });
    it("should not allow invalid menuitemradio role attributes", () => {
      assertType<AriaBodies<"menuitemradio">>({
        atomic: true,
        busy: false,
        // @ts-expect-error - should not allow invalid attributes
        rowCount: 1,
      });
      assertType<AriaBodies<"awesomemenuitemradio menuitemradio">>({
        atomic: true,
        busy: false,
        controls: "menuitemradio-controls",
        // @ts-expect-error - should not allow invalid attributes
        rowCount: 1,
      });
    });
  });
  describe("navigation role", () => {
    it("should allow valid navigation role attributes", () => {
      assertType<AriaBodies<"navigation">>({
        atomic: true,
        busy: false,
        controls: "navigation-controls",
        current: "location",
        describedBy: "navigation-description",
        details: "navigation-details",
        disabled: "true",
        dropEffect: "copy",
        errorMessage: "navigation-error",
        flowTo: "navigation-flow",
        grabbed: "undefined",
        hasPopup: "menu",
        hidden: "undefined",
        invalid: "grammar",
        keyShortcuts: "navigation-shortcuts",
        label: "Navigation message",
        labelledBy: "navigation-label",
        live: "polite",
        owns: "navigation-owns",
        relevant: "additions removals text",
        roleDescription: "Navigation role description",
      });
      assertType<AriaBodies<"awesomenavigation navigation">>({
        atomic: true,
        busy: false,
        controls: "navigation-controls",
        current: "location",
        describedBy: "navigation-description",
        details: "navigation-details",
        disabled: "true",
        dropEffect: "copy",
        errorMessage: "navigation-error",
        flowTo: "navigation-flow",
        grabbed: "undefined",
        hasPopup: "menu",
        hidden: "undefined",
        invalid: "grammar",
        keyShortcuts: "navigation-shortcuts",
        label: "Navigation message",
        labelledBy: "navigation-label",
        live: "polite",
        owns: "navigation-owns",
        relevant: "additions removals text",
        roleDescription: "Navigation role description",
      });
    });
    it("should not allow invalid navigation role attributes", () => {
      assertType<AriaBodies<"navigation">>({
        atomic: true,
        busy: false,
        // @ts-expect-error - should not allow invalid attributes
        rowCount: 1,
      });
      assertType<AriaBodies<"awesomenavigation navigation">>({
        atomic: true,
        busy: false,
        // @ts-expect-error - should not allow invalid attributes
        rowCount: 1,
      });
    });
  });

  describe("none role", () => {
    it("should allow valid none role attributes", () => {
      assertType<AriaBodies<"none">>({
        atomic: true,
        busy: false,
        controls: "none-controls",
        current: "location",
        describedBy: "none-description",
        details: "none-details",
        disabled: "true",
        dropEffect: "copy",
        errorMessage: "none-error",
        flowTo: "none-flow",
        grabbed: "undefined",
        hasPopup: "menu",
        hidden: "undefined",
        invalid: "grammar",
        keyShortcuts: "none-shortcuts",
        live: "polite",
        owns: "none-owns",
        relevant: "additions removals text",
        roleDescription: "None role description",
      });
      assertType<AriaBodies<"awesomenone none">>({
        atomic: true,
        busy: false,
        controls: "none-controls",
        current: "location",
        describedBy: "none-description",
        details: "none-details",
        disabled: "true",
        dropEffect: "copy",
        errorMessage: "none-error",
        flowTo: "none-flow",
        grabbed: "undefined",
        hasPopup: "menu",
        hidden: "undefined",
        invalid: "grammar",
        keyShortcuts: "none-shortcuts",
        live: "polite",
        owns: "none-owns",
        relevant: "additions removals text",
        roleDescription: "None role description",
      });
    });
    it("should not allow label and labelledBy attributes", () => {
      assertType<AriaBodies<"none">>({
        atomic: true,
        busy: false,
        controls: "none-controls",
        // @ts-expect-error - should not allow label attribute
        label: "None message",
      });
      assertType<AriaBodies<"awesomenone none">>({
        atomic: true,
        busy: false,
        controls: "none-controls",
        // @ts-expect-error - should not allow labelledBy attribute
        labelledBy: "none-label",
      });
    });
    it("should not allow invalid none role attributes", () => {
      assertType<AriaBodies<"none">>({
        atomic: true,
        busy: false,
        controls: "none-controls",
        // @ts-expect-error - should not allow invalid attributes
        rowCount: 1,
      });
      assertType<AriaBodies<"awesomenone none">>({
        atomic: true,
        busy: false,
        controls: "none-controls",
        // @ts-expect-error - should not allow invalid attributes
        rowCount: 1,
      });
    });
  });

  describe("option role", () => {
    it("should allow valid option role attributes", () => {
      assertType<AriaBodies<"option">>({
        atomic: true,
        busy: false,
        checked: true,
        controls: "option-controls",
        current: "location",
        describedBy: "option-description",
        details: "option-details",
        disabled: "true",
        dropEffect: "copy",
        errorMessage: "option-error",
        flowTo: "option-flow",
        grabbed: "undefined",
        hasPopup: "menu",
        hidden: "undefined",
        invalid: "grammar",
        keyShortcuts: "option-shortcuts",
        label: "Option message",
        labelledBy: "option-label",
        live: "polite",
        owns: "option-owns",
        posInSet: 1,
        relevant: "additions removals text",
        roleDescription: "Option role description",
        selected: true,
        setSize: 3,
      });
      assertType<AriaBodies<"awesomeoption option">>({
        atomic: true,
        busy: false,
        checked: true,
        controls: "option-controls",
        current: "location",
        describedBy: "option-description",
        details: "option-details",
        disabled: "true",
        dropEffect: "copy",
        errorMessage: "option-error",
        flowTo: "option-flow",
        grabbed: "undefined",
        hasPopup: "menu",
        hidden: "undefined",
        invalid: "grammar",
        keyShortcuts: "option-shortcuts",
        label: "Option message",
        labelledBy: "option-label",
        live: "polite",
        owns: "option-owns",
        posInSet: 1,
        relevant: "additions removals text",
        roleDescription: "Option role description",
        selected: true,
        setSize: 3,
      });
    });
    it("should not allow invalid option role attributes", () => {
      assertType<AriaBodies<"option">>({
        atomic: true,
        busy: false,
        // @ts-expect-error - should not allow invalid attributes
        rowCount: 1,
      });
      assertType<AriaBodies<"awesomeoption option">>({
        atomic: true,
        busy: false,
        // @ts-expect-error - should not allow invalid attributes
        rowCount: 1,
      });
    });
  });
  describe("paragraph role", () => {
    it("should allow valid paragraph role attributes", () => {
      assertType<AriaBodies<"paragraph">>({
        atomic: true,
        busy: false,
        controls: "paragraph-controls",
        current: "location",
        describedBy: "paragraph-description",
        details: "paragraph-details",
        disabled: "true",
        dropEffect: "copy",
        errorMessage: "paragraph-error",
        flowTo: "paragraph-flow",
        grabbed: "undefined",
        hasPopup: "menu",
        hidden: "undefined",
        invalid: "grammar",
        keyShortcuts: "paragraph-shortcuts",
        live: "polite",
        owns: "paragraph-owns",
        relevant: "additions removals text",
        roleDescription: "Paragraph role description",
      });
      assertType<AriaBodies<"awesomeparagraph paragraph">>({
        atomic: true,
        busy: false,
        controls: "paragraph-controls",
        current: "location",
        describedBy: "paragraph-description",
        details: "paragraph-details",
        disabled: "true",
        dropEffect: "copy",
        errorMessage: "paragraph-error",
        flowTo: "paragraph-flow",
        grabbed: "undefined",
        hasPopup: "menu",
        hidden: "undefined",
        invalid: "grammar",
        keyShortcuts: "paragraph-shortcuts",
        live: "polite",
        owns: "paragraph-owns",
        relevant: "additions removals text",
        roleDescription: "Paragraph role description",
      });
    });
    it("should not allow label and labelledBy attributes", () => {
      assertType<AriaBodies<"paragraph">>({
        atomic: true,
        busy: false,
        controls: "paragraph-controls",
        // @ts-expect-error - should not allow label attribute
        label: "Paragraph message",
      });
      assertType<AriaBodies<"awesomeparagraph paragraph">>({
        atomic: true,
        busy: false,
        controls: "paragraph-controls",
        // @ts-expect-error - should not allow labelledBy attribute
        labelledBy: "paragraph-label",
      });
    });
    it("should not allow invalid paragraph role attributes", () => {
      assertType<AriaBodies<"paragraph">>({
        atomic: true,
        busy: false,
        // @ts-expect-error - should not allow invalid attributes
        rowCount: 1,
      });
      assertType<AriaBodies<"awesomeparagraph paragraph">>({
        atomic: true,
        busy: false,
        // @ts-expect-error - should not allow invalid attributes
        rowCount: 1,
      });
    });
  });
  describe("presentation role", () => {
    it("should allow valid presentation role attributes", () => {
      assertType<AriaBodies<"presentation">>({
        atomic: true,
        busy: false,
        controls: "presentation-controls",
        current: "location",
        describedBy: "presentation-description",
        details: "presentation-details",
        disabled: "true",
        dropEffect: "copy",
        errorMessage: "presentation-error",
        flowTo: "presentation-flow",
        grabbed: "undefined",
        hasPopup: "menu",
        hidden: "undefined",
        invalid: "grammar",
        keyShortcuts: "presentation-shortcuts",
        live: "polite",
        owns: "presentation-owns",
        relevant: "additions removals text",
        roleDescription: "Presentation role description",
      });
      assertType<AriaBodies<"awesomepresentation presentation">>({
        atomic: true,
        busy: false,
        controls: "presentation-controls",
        current: "location",
        describedBy: "presentation-description",
        details: "presentation-details",
        disabled: "true",
        dropEffect: "copy",
        errorMessage: "presentation-error",
        flowTo: "presentation-flow",
        grabbed: "undefined",
        hasPopup: "menu",
        hidden: "undefined",
        invalid: "grammar",
        keyShortcuts: "presentation-shortcuts",
        live: "polite",
        owns: "presentation-owns",
        relevant: "additions removals text",
        roleDescription: "Presentation role description",
      });
    });
    it("should not allow label and labelledBy attributes", () => {
      assertType<AriaBodies<"presentation">>({
        atomic: true,
        busy: false,
        controls: "presentation-controls",
        // @ts-expect-error - should not allow label attribute
        label: "Presentation message",
      });
      assertType<AriaBodies<"awesomepresentation presentation">>({
        atomic: true,
        busy: false,
        controls: "presentation-controls",
        // @ts-expect-error - should not allow labelledBy attribute
        labelledBy: "presentation-label",
      });
    });
    it("should not allow invalid presentation role attributes", () => {
      assertType<AriaBodies<"presentation">>({
        atomic: true,
        busy: false,
        // @ts-expect-error - should not allow invalid attributes
        rowCount: 1,
      });
      assertType<AriaBodies<"awesomepresentation presentation">>({
        atomic: true,
        busy: false,
        // @ts-expect-error - should not allow invalid attributes
        rowCount: 1,
      });
    });
  });
  describe("progressbar role", () => {
    it("should allow valid progressbar role attributes", () => {
      assertType<AriaBodies<"progressbar">>({
        atomic: true,
        busy: false,
        controls: "progressbar-controls",
        current: "location",
        describedBy: "progressbar-description",
        details: "progressbar-details",
        disabled: "true",
        dropEffect: "copy",
        errorMessage: "progressbar-error",
        flowTo: "progressbar-flow",
        grabbed: "undefined",
        hasPopup: "menu",
        hidden: "undefined",
        invalid: "grammar",
        keyShortcuts: "progressbar-shortcuts",
        label: "Progress bar message",
        labelledBy: "progressbar-label",
        live: "polite",
        owns: "progressbar-owns",
        relevant: "additions removals text",
        roleDescription: "Progress bar role description",
        valueMax: 100,
        valueMin: 0,
        valueNow: 50,
      });
      assertType<AriaBodies<"awesomeprogressbar progressbar">>({
        atomic: true,
        busy: false,
        controls: "progressbar-controls",
        current: "location",
        describedBy: "progressbar-description",
        details: "progressbar-details",
        disabled: "true",
        dropEffect: "copy",
        errorMessage: "progressbar-error",
        flowTo: "progressbar-flow",
        grabbed: "undefined",
        hasPopup: "menu",
        hidden: "undefined",
        invalid: "grammar",
        keyShortcuts: "progressbar-shortcuts",
        label: "Progress bar message",
        labelledBy: "progressbar-label",
        live: "polite",
        owns: "progressbar-owns",
        relevant: "additions removals text",
        roleDescription: "Progress bar role description",
        valueMax: 100,
        valueMin: 0,
        valueNow: 50,
      });
    });
    it("should not allow invalid progressbar role attributes", () => {
      assertType<AriaBodies<"progressbar">>({
        atomic: true,
        busy: false,
        // @ts-expect-error - should not allow invalid attributes
        rowCount: 1,
      });
      assertType<AriaBodies<"awesomeprogressbar progressbar">>({
        atomic: true,
        busy: false,
        // @ts-expect-error - should not allow invalid attributes
        rowCount: 1,
      });
    });
  });
  describe("radio role", () => {
    it("should allow valid radio role attributes", () => {
      assertType<AriaBodies<"radio">>({
        atomic: true,
        busy: false,
        checked: true,
        controls: "radio-controls",
        current: "location",
        describedBy: "radio-description",
        details: "radio-details",
        disabled: "true",
        dropEffect: "copy",
        errorMessage: "radio-error",
        flowTo: "radio-flow",
        grabbed: "undefined",
        hasPopup: "menu",
        hidden: "undefined",
        invalid: "grammar",
        keyShortcuts: "radio-shortcuts",
        label: "Radio message",
        labelledBy: "radio-label",
        live: "polite",
        owns: "radio-owns",
        posInSet: 1,
        relevant: "additions removals text",
        roleDescription: "Radio role description",
        setSize: 3,
      });
      assertType<AriaBodies<"awesomeradio radio">>({
        atomic: true,
        busy: false,
        checked: true,
        controls: "radio-controls",
        current: "location",
        describedBy: "radio-description",
        details: "radio-details",
        disabled: "true",
        dropEffect: "copy",
        errorMessage: "radio-error",
        flowTo: "radio-flow",
        grabbed: "undefined",
        hasPopup: "menu",
        hidden: "undefined",
        invalid: "grammar",
        keyShortcuts: "radio-shortcuts",
        label: "Radio message",
        labelledBy: "radio-label",
        live: "polite",
        owns: "radio-owns",
        posInSet: 1,
        relevant: "additions removals text",
        roleDescription: "Radio role description",
        setSize: 3,
      });
    });
    it("should not allow invalid radio role attributes", () => {
      assertType<AriaBodies<"radio">>({
        atomic: true,
        busy: false,
        // @ts-expect-error - should not allow invalid attributes
        rowCount: 1,
      });
      assertType<AriaBodies<"awesomeradio radio">>({
        atomic: true,
        busy: false,
        // @ts-expect-error - should not allow invalid attributes
        rowCount: 1,
      });
    });
  });
  describe("radiogroup role", () => {
    it("should allow valid radiogroup role attributes", () => {
      assertType<AriaBodies<"radiogroup">>({
        atomic: true,
        busy: false,
        controls: "radiogroup-controls",
        current: "location",
        describedBy: "radiogroup-description",
        details: "radiogroup-details",
        disabled: "true",
        dropEffect: "copy",
        errorMessage: "radiogroup-error",
        flowTo: "radiogroup-flow",
        grabbed: "undefined",
        hasPopup: "menu",
        hidden: "undefined",
        invalid: "grammar",
        keyShortcuts: "radiogroup-shortcuts",
        label: "Radio group message",
        labelledBy: "radiogroup-label",
        live: "polite",
        owns: "radiogroup-owns",
        readOnly: true,
        required: true,
        relevant: "additions removals text",
        roleDescription: "Radio group role description",
      });
      assertType<AriaBodies<"awesomeradiogroup radiogroup">>({
        atomic: true,
        busy: false,
        controls: "radiogroup-controls",
        current: "location",
        describedBy: "radiogroup-description",
        details: "radiogroup-details",
        disabled: "true",
        dropEffect: "copy",
        errorMessage: "radiogroup-error",
        flowTo: "radiogroup-flow",
        grabbed: "undefined",
        hasPopup: "menu",
        hidden: "undefined",
        invalid: "grammar",
        keyShortcuts: "radiogroup-shortcuts",
        label: "Radio group message",
        labelledBy: "radiogroup-label",
        live: "polite",
        owns: "radiogroup-owns",
        readOnly: true,
        required: true,
        relevant: "additions removals text",
        roleDescription: "Radio group role description",
      });
    });
    it("should not allow invalid radiogroup role attributes", () => {
      assertType<AriaBodies<"radiogroup">>({
        atomic: true,
        busy: false,
        // @ts-expect-error - should not allow invalid attributes
        rowCount: 1,
      });
      assertType<AriaBodies<"awesomeradiogroup radiogroup">>({
        atomic: true,
        busy: false,
        // @ts-expect-error - should not allow invalid attributes
        rowCount: 1,
      });
    });
  });

  describe("region role", () => {
    it("should allow valid region role attributes", () => {
      assertType<AriaBodies<"region">>({
        atomic: true,
        busy: false,
        controls: "region-controls",
        current: "location",
        describedBy: "region-description",
        details: "region-details",
        disabled: "true",
        dropEffect: "copy",
        errorMessage: "region-error",
        flowTo: "region-flow",
        grabbed: "undefined",
        hasPopup: "menu",
        hidden: "undefined",
        invalid: "grammar",
        keyShortcuts: "region-shortcuts",
        label: "Region message",
        labelledBy: "region-label",
        live: "polite",
        owns: "region-owns",
        relevant: "additions removals text",
        roleDescription: "Region role description",
      });
      assertType<AriaBodies<"awesomeregion region">>({
        atomic: true,
        busy: false,
        controls: "region-controls",
        current: "location",
        describedBy: "region-description",
        details: "region-details",
        disabled: "true",
        dropEffect: "copy",
        errorMessage: "region-error",
        flowTo: "region-flow",
        grabbed: "undefined",
        hasPopup: "menu",
        hidden: "undefined",
        invalid: "grammar",
        keyShortcuts: "region-shortcuts",
        label: "Region message",
        labelledBy: "region-label",
        live: "polite",
        owns: "region-owns",
        relevant: "additions removals text",
        roleDescription: "Region role description",
      });
    });
    it("should not allow invalid region role attributes", () => {
      assertType<AriaBodies<"region">>({
        atomic: true,
        busy: false,
        // @ts-expect-error - should not allow invalid attributes
        rowCount: 1,
      });
      assertType<AriaBodies<"awesomeregion region">>({
        atomic: true,
        busy: false,
        // @ts-expect-error - should not allow invalid attributes
        rowCount: 1,
      });
    });
  });
  describe("row role", () => {
    it("should allow valid row role attributes", () => {
      assertType<AriaBodies<"row">>({
        activeDescendant: "row-active-descendant",
        atomic: true,
        busy: false,
        controls: "row-controls",
        colIndex: 1,
        current: "location",
        describedBy: "row-description",
        details: "row-details",
        disabled: "true",
        dropEffect: "copy",
        errorMessage: "row-error",
        expanded: "undefined",
        flowTo: "row-flow",
        grabbed: "undefined",
        hasPopup: "menu",
        hidden: "undefined",
        invalid: "grammar",
        keyShortcuts: "row-shortcuts",
        label: "Row message",
        labelledBy: "row-label",
        level: 1,
        live: "polite",
        owns: "row-owns",
        posInSet: 1,
        relevant: "additions removals text",
        roleDescription: "Row role description",
        rowIndex: 1,
        setSize: 3,
        selected: true,
      });
      assertType<AriaBodies<"awesomerow row">>({
        activeDescendant: "row-active-descendant",
        atomic: true,
        busy: false,
        controls: "row-controls",
        colIndex: 1,
        current: "location",
        describedBy: "row-description",
        details: "row-details",
        disabled: "true",
        dropEffect: "copy",
        errorMessage: "row-error",
        expanded: "undefined",
        flowTo: "row-flow",
        grabbed: "undefined",
        hasPopup: "menu",
        hidden: "undefined",
        invalid: "grammar",
        keyShortcuts: "row-shortcuts",
        label: "Row message",
        labelledBy: "row-label",
        level: 1,
        live: "polite",
        owns: "row-owns",
        posInSet: 1,
        relevant: "additions removals text",
        roleDescription: "Row role description",
        rowIndex: 1,
        setSize: 3,
        selected: true,
      });
    });
    it("should not allow invalid row role attributes", () => {
      assertType<AriaBodies<"row">>({
        activeDescendant: "row-active-descendant",
        atomic: true,
        busy: false,
        controls: "row-controls",
        // @ts-expect-error - should not allow invalid attributes
        rowSpan: 1,
      });
      assertType<AriaBodies<"awesomerow row">>({
        activeDescendant: "row-active-descendant",
        atomic: true,
        busy: false,
        controls: "row-controls",
        // @ts-expect-error - should not allow invalid attributes
        rowSpan: 1,
      });
    });
  });
  describe("rowgroup role", () => {
    it("should allow valid rowgroup role attributes", () => {
      assertType<AriaBodies<"rowgroup">>({
        atomic: true,
        busy: false,
        controls: "rowgroup-controls",
        current: "location",
        describedBy: "rowgroup-description",
        details: "rowgroup-details",
        disabled: "true",
        dropEffect: "copy",
        errorMessage: "rowgroup-error",
        flowTo: "rowgroup-flow",
        grabbed: "undefined",
        hasPopup: "menu",
        hidden: "undefined",
        invalid: "grammar",
        keyShortcuts: "rowgroup-shortcuts",
        label: "Row group message",
        labelledBy: "rowgroup-label",
        live: "polite",
        owns: "rowgroup-owns",
        relevant: "additions removals text",
        roleDescription: "Row group role description",
      });
      assertType<AriaBodies<"awesomerowgroup rowgroup">>({
        atomic: true,
        busy: false,
        controls: "rowgroup-controls",
        current: "location",
        describedBy: "rowgroup-description",
        details: "rowgroup-details",
        disabled: "true",
        dropEffect: "copy",
        errorMessage: "rowgroup-error",
        flowTo: "rowgroup-flow",
        grabbed: "undefined",
        hasPopup: "menu",
        hidden: "undefined",
        invalid: "grammar",
        keyShortcuts: "rowgroup-shortcuts",
        label: "Row group message",
        labelledBy: "rowgroup-label",
        live: "polite",
        owns: "rowgroup-owns",
        relevant: "additions removals text",
        roleDescription: "Row group role description",
      });
    });
    it("should not allow invalid rowgroup role attributes", () => {
      assertType<AriaBodies<"rowgroup">>({
        atomic: true,
        busy: false,
        // @ts-expect-error - should not allow invalid attributes
        rowCount: 1,
      });
      assertType<AriaBodies<"awesomerowgroup rowgroup">>({
        atomic: true,
        busy: false,
        // @ts-expect-error - should not allow invalid attributes
        rowCount: 1,
      });
    });
  });
  describe("rowheader role", () => {
    it("should allow valid rowheader role attributes", () => {
      assertType<AriaBodies<"rowheader">>({
        atomic: true,
        busy: false,
        controls: "rowheader-controls",
        colIndex: 1,
        colSpan: 2,
        current: "location",
        describedBy: "rowheader-description",
        details: "rowheader-details",
        disabled: "true",
        dropEffect: "copy",
        errorMessage: "rowheader-error",
        expanded: "undefined",
        flowTo: "rowheader-flow",
        grabbed: "undefined",
        hasPopup: "menu",
        hidden: "undefined",
        invalid: "grammar",
        keyShortcuts: "rowheader-shortcuts",
        label: "Row header message",
        labelledBy: "rowheader-label",
        live: "polite",
        owns: "rowheader-owns",
        readOnly: true,
        relevant: "additions removals text",
        required: true,
        roleDescription: "Row header role description",
        rowIndex: 1,
        rowSpan: 2,
        selected: true,
      });
      assertType<AriaBodies<"awesomerowheader rowheader">>({
        atomic: true,
        busy: false,
        controls: "rowheader-controls",
        colIndex: 1,
        colSpan: 2,
        current: "location",
        describedBy: "rowheader-description",
        details: "rowheader-details",
        disabled: "true",
        dropEffect: "copy",
        errorMessage: "rowheader-error",
        expanded: "undefined",
        flowTo: "rowheader-flow",
        grabbed: "undefined",
        hasPopup: "menu",
        hidden: "undefined",
        invalid: "grammar",
        keyShortcuts: "rowheader-shortcuts",
        label: "Row header message",
        labelledBy: "rowheader-label",
        live: "polite",
        owns: "rowheader-owns",
        readOnly: true,
        relevant: "additions removals text",
        required: true,
        roleDescription: "Row header role description",
        rowIndex: 1,
        rowSpan: 2,
        selected: true,
      });
    });
    it("should not allow invalid rowheader role attributes", () => {
      assertType<AriaBodies<"rowheader">>({
        atomic: true,
        busy: false,
        // @ts-expect-error - should not allow invalid attributes
        rowCount: 1,
      });
      assertType<AriaBodies<"awesomerowheader rowheader">>({
        atomic: true,
        busy: false,
        // @ts-expect-error - should not allow invalid attributes
        rowCount: 1,
      });
    });
  });
  describe("scrollbar role", () => {
    it("should allow valid scrollbar role attributes", () => {
      assertType<AriaBodies<"scrollbar">>({
        atomic: true,
        busy: false,
        controls: "scrollbar-controls",
        current: "location",
        describedBy: "scrollbar-description",
        details: "scrollbar-details",
        disabled: "true",
        dropEffect: "copy",
        errorMessage: "scrollbar-error",
        flowTo: "scrollbar-flow",
        grabbed: "undefined",
        hasPopup: "menu",
        hidden: "undefined",
        invalid: "grammar",
        keyShortcuts: "scrollbar-shortcuts",
        label: "Scrollbar message",
        labelledBy: "scrollbar-label",
        live: "polite",
        owns: "scrollbar-owns",
        orientation: "vertical",
        relevant: "additions removals text",
        roleDescription: "Scrollbar role description",
        valueMax: 100,
        valueMin: 0,
        valueNow: 50,
        valueText: "50%",
      });
      assertType<AriaBodies<"awesomescrollbar scrollbar">>({
        atomic: true,
        busy: false,
        controls: "scrollbar-controls",
        current: "location",
        describedBy: "scrollbar-description",
        details: "scrollbar-details",
        disabled: "true",
        dropEffect: "copy",
        errorMessage: "scrollbar-error",
        flowTo: "scrollbar-flow",
        grabbed: "undefined",
        hasPopup: "menu",
        hidden: "undefined",
        invalid: "grammar",
        keyShortcuts: "scrollbar-shortcuts",
        label: "Scrollbar message",
        labelledBy: "scrollbar-label",
        live: "polite",
        owns: "scrollbar-owns",
        orientation: "vertical",
        relevant: "additions removals text",
        roleDescription: "Scrollbar role description",
        valueMax: 100,
        valueMin: 0,
        valueNow: 50,
        valueText: "50%",
      });
    });
    it("should not allow invalid scrollbar role attributes", () => {
      assertType<AriaBodies<"scrollbar">>({
        atomic: true,
        busy: false,
        // @ts-expect-error - should not allow invalid attributes
        rowCount: 1,
      });
      assertType<AriaBodies<"awesomescrollbar scrollbar">>({
        atomic: true,
        busy: false,
        // @ts-expect-error - should not allow invalid attributes
        rowCount: 1,
      });
    });
  });

  describe("search role", () => {
    it("should allow valid search role attributes", () => {
      assertType<AriaBodies<"search">>({
        atomic: true,
        busy: false,
        controls: "search-controls",
        current: "location",
        describedBy: "search-description",
        details: "search-details",
        disabled: "true",
        dropEffect: "copy",
        errorMessage: "search-error",
        flowTo: "search-flow",
        grabbed: "undefined",
        hasPopup: "menu",
        hidden: "undefined",
        invalid: "grammar",
        keyShortcuts: "search-shortcuts",
        label: "Search message",
        labelledBy: "search-label",
        live: "polite",
        owns: "search-owns",
        relevant: "additions removals text",
        roleDescription: "Search role description",
      });
      assertType<AriaBodies<"awesomesearch search">>({
        atomic: true,
        busy: false,
        controls: "search-controls",
        current: "location",
        describedBy: "search-description",
        details: "search-details",
        disabled: "true",
        dropEffect: "copy",
        errorMessage: "search-error",
        flowTo: "search-flow",
        grabbed: "undefined",
        hasPopup: "menu",
        hidden: "undefined",
        invalid: "grammar",
        keyShortcuts: "search-shortcuts",
        label: "Search message",
        labelledBy: "search-label",
        live: "polite",
        owns: "search-owns",
        relevant: "additions removals text",
        roleDescription: "Search role description",
      });
    });
    it("should not allow invalid search role attributes", () => {
      assertType<AriaBodies<"search">>({
        atomic: true,
        busy: false,
        // @ts-expect-error - should not allow invalid attributes
        rowCount: 1,
      });
      assertType<AriaBodies<"awesomesearch search">>({
        atomic: true,
        busy: false,
        // @ts-expect-error - should not allow invalid attributes
        rowCount: 1,
      });
    });
  });

  describe("searchbox role", () => {
    it("should allow valid searchbox role attributes", () => {
      assertType<AriaBodies<"searchbox">>({
        activeDescendant: "searchbox-active-descendant",
        atomic: true,
        autoComplete: "both",
        busy: false,
        controls: "searchbox-controls",
        current: "location",
        describedBy: "searchbox-description",
        details: "searchbox-details",
        disabled: "true",
        dropEffect: "copy",
        errorMessage: "searchbox-error",
        flowTo: "searchbox-flow",
        grabbed: "undefined",
        hasPopup: "menu",
        hidden: "undefined",
        invalid: "grammar",
        keyShortcuts: "searchbox-shortcuts",
        label: "Search box message",
        labelledBy: "searchbox-label",
        live: "polite",
        multiLine: true,
        owns: "searchbox-owns",
        placeholder: "Search here",
        readOnly: true,
        relevant: "additions removals text",
        required: true,
        roleDescription: "Search box role description",
      });
      assertType<AriaBodies<"awesomesearchbox searchbox">>({
        activeDescendant: "searchbox-active-descendant",
        atomic: true,
        autoComplete: "both",
        busy: false,
        controls: "searchbox-controls",
        current: "location",
        describedBy: "searchbox-description",
        details: "searchbox-details",
        disabled: "true",
        dropEffect: "copy",
        errorMessage: "searchbox-error",
        flowTo: "searchbox-flow",
        grabbed: "undefined",
        hasPopup: "menu",
        hidden: "undefined",
        invalid: "grammar",
        keyShortcuts: "searchbox-shortcuts",
        label: "Search box message",
        labelledBy: "searchbox-label",
        live: "polite",
        multiLine: true,
        owns: "searchbox-owns",
        placeholder: "Search here",
        readOnly: true,
        relevant: "additions removals text",
        required: true,
        roleDescription: "Search box role description",
      });
    });
    it("should not allow invalid searchbox role attributes", () => {
      assertType<AriaBodies<"searchbox">>({
        atomic: true,
        busy: false,
        // @ts-expect-error - should not allow invalid attributes
        rowCount: 1,
      });
      assertType<AriaBodies<"awesomesearchbox searchbox">>({
        atomic: true,
        busy: false,
        // @ts-expect-error - should not allow invalid attributes
        rowCount: 1,
      });
    });
  });
  describe("separator role", () => {
    it("should allow valid separator role attributes", () => {
      assertType<AriaBodies<"separator">>({
        atomic: true,
        busy: false,
        controls: "separator-controls",
        current: "location",
        describedBy: "separator-description",
        details: "separator-details",
        disabled: "true",
        dropEffect: "copy",
        errorMessage: "separator-error",
        flowTo: "separator-flow",
        grabbed: "undefined",
        hasPopup: "menu",
        hidden: "undefined",
        invalid: "grammar",
        keyShortcuts: "separator-shortcuts",
        label: "Separator message",
        labelledBy: "separator-label",
        live: "polite",
        owns: "separator-owns",
        relevant: "additions removals text",
        roleDescription: "Separator role description",
      });
      assertType<AriaBodies<"awesomeseparator separator">>({
        atomic: true,
        busy: false,
        controls: "separator-controls",
        current: "location",
        describedBy: "separator-description",
        details: "separator-details",
        disabled: "true",
        dropEffect: "copy",
        errorMessage: "separator-error",
        flowTo: "separator-flow",
        grabbed: "undefined",
        hasPopup: "menu",
        hidden: "undefined",
        invalid: "grammar",
        keyShortcuts: "separator-shortcuts",
        label: "Separator message",
        labelledBy: "separator-label",
        live: "polite",
        owns: "separator-owns",
        relevant: "additions removals text",
        roleDescription: "Separator role description",
      });
    });
    it("should not allow invalid separator role attributes", () => {
      assertType<AriaBodies<"separator">>({
        atomic: true,
        busy: false,
        // @ts-expect-error - should not allow invalid attributes
        rowCount: 1,
      });
      assertType<AriaBodies<"awesomeseparator separator">>({
        atomic: true,
        busy: false,
        // @ts-expect-error - should not allow invalid attributes
        rowCount: 1,
      });
    });
  });
  // describe("slider role", () => {
  //   it("should allow valid slider role attributes", () => {
  //     assertType<AriaBodies<"slider">>({
  //       atomic: true,
  //       busy: false,
  //       controls: "slider-controls",
  //       current: "location",
  //       describedBy: "slider-description",
  //       details: "slider-details",
  //       disabled: "true",
  //       dropEffect: "copy",
  //       errorMessage: "slider-error",
  //       flowTo: "slider-flow",
  //       grabbed: "undefined",
  //       hasPopup: "menu",
  //       hidden: "undefined",
  //       invalid: "grammar",
  //       keyShortcuts: "slider-shortcuts",
  //       label: "Slider message",
  //       labelledBy: "slider-label",
  //       live: "polite",
  //       orientation: "horizontal",
  //       owns: "slider-owns",
  //       readOnly: true,
  //       relevant: "additions removals text",
  //       roleDescription: "Slider role description",
  //       valueMax: 100,
  //       valueMin: 0,
  //       valueNow: 50,
  //     });
  //     assertType<AriaBodies<"awesomeslider slider">>({
  //       atomic: true,
  //       busy: false,
  //       controls: "slider-controls",
  //       current: "location",
  //       describedBy: "slider-description",
  //       details: "slider-details",
  //       disabled: "true",
  //       dropEffect: "copy",
  //       errorMessage: "slider-error",
  //       flowTo: "slider-flow",
  //       grabbed: "undefined",
  //       hasPopup: "menu",
  //       hidden: "undefined",
  //       invalid: "grammar",
  //       keyShortcuts: "slider-shortcuts",
  //       label: "Slider message",
  //       labelledBy: "slider-label",
  //       live: "polite",
  //       orientation: "horizontal",
  //       owns: "slider-owns",
  //       readOnly: true,
  //       relevant: "additions removals text",
  //       roleDescription: "Slider role description",
  //       valueMax: 100,
  //       valueMin: 0,
  //       valueNow: 50,
  //     });
  //   });
  //   it("should not allow invalid slider role attributes", () => {
  //     assertType<AriaBodies<"slider">>({
  //       atomic: true,
  //       busy: false,
  //       // @ts-expect-error - should not allow invalid attributes
  //       rowCount: 1,
  //     });
  //     assertType<AriaBodies<"awesomeslider slider">>({
  //       atomic: true,
  //       busy: false,
  //       // @ts-expect-error - should not allow invalid attributes
  //       rowCount: 1,
  //     });
  //   });
  // });

  // describe("spinbutton role", () => {
  //   it("should allow valid spinbutton role attributes", () => {
  //     assertType<AriaBodies<"spinbutton">>({
  //       activeDescendant: "spinbutton-active-descendant",
  //       atomic: true,
  //       busy: false,
  //       controls: "spinbutton-controls",
  //       current: "location",
  //       describedBy: "spinbutton-description",
  //       details: "spinbutton-details",
  //       disabled: "true",
  //       dropEffect: "copy",
  //       errorMessage: "spinbutton-error",
  //       flowTo: "spinbutton-flow",
  //       grabbed: "undefined",
  //       hasPopup: "menu",
  //       hidden: "undefined",
  //       invalid: "grammar",
  //       keyShortcuts: "spinbutton-shortcuts",
  //       label: "Spin button message",
  //       labelledBy: "spinbutton-label",
  //       live: "polite",
  //       owns: "spinbutton-owns",
  //       readOnly: true,
  //       relevant: "additions removals text",
  //       required: true,
  //       roleDescription: "Spin button role description",
  //       valueMax: 100,
  //       valueMin: 0,
  //       valueNow: 50,
  //     });
  //     assertType<AriaBodies<"awesomespinbutton spinbutton">>({
  //       activeDescendant: "spinbutton-active-descendant",
  //       atomic: true,
  //       busy: false,
  //       controls: "spinbutton-controls",
  //       current: "location",
  //       describedBy: "spinbutton-description",
  //       details: "spinbutton-details",
  //       disabled: "true",
  //       dropEffect: "copy",
  //       errorMessage: "spinbutton-error",
  //       flowTo: "spinbutton-flow",
  //       grabbed: "undefined",
  //       hasPopup: "menu",
  //       hidden: "undefined",
  //       invalid: "grammar",
  //       keyShortcuts: "spinbutton-shortcuts",
  //       label: "Spin button message",
  //       labelledBy: "spinbutton-label",
  //       live: "polite",
  //       owns: "spinbutton-owns",
  //       readOnly: true,
  //       relevant: "additions removals text",
  //       required: true,
  //       roleDescription: "Spin button role description",
  //       valueMax: 100,
  //       valueMin: 0,
  //       valueNow: 50,
  //     });
  //   });
  //   it("should not allow invalid spinbutton role attributes", () => {
  //     assertType<AriaBodies<"spinbutton">>({
  //       atomic: true,
  //       busy: false,
  //       // @ts-expect-error - should not allow invalid attributes
  //       rowCount: 1,
  //     });
  //     assertType<AriaBodies<"awesomespinbutton spinbutton">>({
  //       atomic: true,
  //       busy: false,
  //       // @ts-expect-error - should not allow invalid attributes
  //       rowCount: 1,
  //     });
  //   });
  // });

  // describe("status role", () => {
  //   it("should allow valid status role attributes", () => {
  //     assertType<AriaBodies<"status">>({
  //       atomic: true,
  //       busy: false,
  //       controls: "status-controls",
  //       current: "location",
  //       describedBy: "status-description",
  //       details: "status-details",
  //       disabled: "true",
  //       dropEffect: "copy",
  //       errorMessage: "status-error",
  //       flowTo: "status-flow",
  //       grabbed: "undefined",
  //       hasPopup: "menu",
  //       hidden: "undefined",
  //       invalid: "grammar",
  //       keyShortcuts: "status-shortcuts",
  //       label: "Status message",
  //       labelledBy: "status-label",
  //       live: "polite",
  //       owns: "status-owns",
  //       relevant: "additions removals text",
  //       roleDescription: "Status role description",
  //     });
  //     assertType<AriaBodies<"awesomestatus status">>({
  //       atomic: true,
  //       busy: false,
  //       controls: "status-controls",
  //       current: "location",
  //       describedBy: "status-description",
  //       details: "status-details",
  //       disabled: "true",
  //       dropEffect: "copy",
  //       errorMessage: "status-error",
  //       flowTo: "status-flow",
  //       grabbed: "undefined",
  //       hasPopup: "menu",
  //       hidden: "undefined",
  //       invalid: "grammar",
  //       keyShortcuts: "status-shortcuts",
  //       label: "Status message",
  //       labelledBy: "status-label",
  //       live: "polite",
  //       owns: "status-owns",
  //       relevant: "additions removals text",
  //       roleDescription: "Status role description",
  //     });
  //   });
  //   it("should not allow invalid status role attributes", () => {
  //     assertType<AriaBodies<"status">>({
  //       atomic: true,
  //       busy: false,
  //       // @ts-expect-error - should not allow invalid attributes
  //       rowCount: 1,
  //     });
  //     assertType<AriaBodies<"awesomestatus status">>({
  //       atomic: true,
  //       busy: false,
  //       // @ts-expect-error - should not allow invalid attributes
  //       rowCount: 1,
  //     });
  //   });
  // });
  describe("strong role", () => {
    it("should allow valid strong role attributes", () => {
      assertType<AriaBodies<"strong">>({
        atomic: true,
        busy: false,
        controls: "strong-controls",
        current: "location",
        describedBy: "strong-description",
        details: "strong-details",
        disabled: "true",
        dropEffect: "copy",
        errorMessage: "strong-error",
        flowTo: "strong-flow",
        grabbed: "undefined",
        hasPopup: "menu",
        hidden: "undefined",
        invalid: "grammar",
        keyShortcuts: "strong-shortcuts",
        live: "polite",
        owns: "strong-owns",
        relevant: "additions removals text",
        roleDescription: "Strong role description",
      });
      assertType<AriaBodies<"awesomestrong strong">>({
        atomic: true,
        busy: false,
        controls: "strong-controls",
        current: "location",
        describedBy: "strong-description",
        details: "strong-details",
        disabled: "true",
        dropEffect: "copy",
        errorMessage: "strong-error",
        flowTo: "strong-flow",
        grabbed: "undefined",
        hasPopup: "menu",
        hidden: "undefined",
        invalid: "grammar",
        keyShortcuts: "strong-shortcuts",
        live: "polite",
        owns: "strong-owns",
        relevant: "additions removals text",
        roleDescription: "Strong role description",
      });
    });
    it("should not allow label and labelledBy attributes", () => {
      assertType<AriaBodies<"strong">>({
        // @ts-expect-error - should not allow label attribute
        label: "Strong message",
      });
      assertType<AriaBodies<"awesomestrong strong">>({
        // @ts-expect-error - should not allow label attribute
        labelledBy: "Strong message",
      });
    });

    it("should not allow invalid strong role attributes", () => {
      assertType<AriaBodies<"strong">>({
        atomic: true,
        busy: false,
        // @ts-expect-error - should not allow invalid attributes
        rowCount: 1,
      });
      assertType<AriaBodies<"awesomestrong strong">>({
        atomic: true,
        busy: false,
        // @ts-expect-error - should not allow invalid attributes
        rowCount: 1,
      });
    });
  });

  describe("subscript role", () => {
    it("should allow valid subscript role attributes", () => {
      assertType<AriaBodies<"subscript">>({
        atomic: true,
        busy: false,
        controls: "subscript-controls",
        current: "location",
        describedBy: "subscript-description",
        details: "subscript-details",
        disabled: "true",
        dropEffect: "copy",
        errorMessage: "subscript-error",
        flowTo: "subscript-flow",
        grabbed: "undefined",
        hasPopup: "menu",
        hidden: "true",
        invalid: "grammar",
        keyShortcuts: "subscript-shortcuts",
        live: "polite",
        owns: "subscript-owns",
        relevant: "additions removals text",
        roleDescription: "Subscript role description",
      });
      assertType<AriaBodies<"awesomesubscript subscript">>({
        atomic: true,
        busy: false,
        controls: "subscript-controls",
        current: "location",
        describedBy: "subscript-description",
        details: "subscript-details",
        disabled: "true",
        dropEffect: "copy",
        errorMessage: "subscript-error",
        flowTo: "subscript-flow",
        grabbed: "undefined",
        hasPopup: "menu",
        hidden: "true",
        invalid: "grammar",
        keyShortcuts: "subscript-shortcuts",
        live: "polite",
        owns: "subscript-owns",
        relevant: "additions removals text",
        roleDescription: "Subscript role description",
      });
    });
    it("should not allow label and labelledBy attributes", () => {
      assertType<AriaBodies<"subscript">>({
        // @ts-expect-error - should not allow label attribute
        label: "Subscript message",
      });
      assertType<AriaBodies<"awesomesubscript subscript">>({
        // @ts-expect-error - should not allow label attribute
        labelledBy: "Subscript message",
      });
    });
    it("should not allow invalid subscript role attributes", () => {
      assertType<AriaBodies<"subscript">>({
        atomic: true,
        busy: false,
        // @ts-expect-error - should not allow invalid attributes
        rowCount: 1,
      });
      assertType<AriaBodies<"awesomesubscript subscript">>({
        atomic: true,
        busy: false,
        // @ts-expect-error - should not allow invalid attributes
        rowCount: 1,
      });
    });
  });
  describe("superscript role", () => {
    it("should allow valid superscript role attributes", () => {
      assertType<AriaBodies<"superscript">>({
        atomic: true,
        busy: false,
        controls: "superscript-controls",
        current: "location",
        describedBy: "superscript-description",
        details: "superscript-details",
        disabled: "true",
        dropEffect: "copy",
        errorMessage: "superscript-error",
        flowTo: "superscript-flow",
        grabbed: "undefined",
        hasPopup: "menu",
        hidden: "true",
        invalid: "grammar",
        keyShortcuts: "superscript-shortcuts",
        live: "polite",
        owns: "superscript-owns",
        relevant: "additions removals text",
        roleDescription: "superscript role description",
      });
      assertType<AriaBodies<"awesomesuperscript superscript">>({
        atomic: true,
        busy: false,
        controls: "superscript-controls",
        current: "location",
        describedBy: "superscript-description",
        details: "superscript-details",
        disabled: "true",
        dropEffect: "copy",
        errorMessage: "superscript-error",
        flowTo: "superscript-flow",
        grabbed: "undefined",
        hasPopup: "menu",
        hidden: "true",
        invalid: "grammar",
        keyShortcuts: "superscript-shortcuts",
        live: "polite",
        owns: "superscript-owns",
        relevant: "additions removals text",
        roleDescription: "superscript role description",
      });
    });
    it("should not allow label and labelledBy attributes", () => {
      assertType<AriaBodies<"superscript">>({
        // @ts-expect-error - should not allow label attribute
        label: "superscript message",
      });
      assertType<AriaBodies<"awesomesuperscript superscript">>({
        // @ts-expect-error - should not allow label attribute
        labelledBy: "superscript message",
      });
    });
    it("should not allow invalid superscript role attributes", () => {
      assertType<AriaBodies<"superscript">>({
        atomic: true,
        busy: false,
        // @ts-expect-error - should not allow invalid attributes
        rowCount: 1,
      });
      assertType<AriaBodies<"awesomesuperscript superscript">>({
        atomic: true,
        busy: false,
        // @ts-expect-error - should not allow invalid attributes
        rowCount: 1,
      });
    });
  });
  describe("switch role", () => {
    it("should allow valid switch role attributes", () => {
      assertType<AriaBodies<"switch">>({
        atomic: true,
        busy: false,
        checked: true,
        controls: "switch-controls",
        current: "location",
        describedBy: "switch-description",
        details: "switch-details",
        disabled: "true",
        dropEffect: "copy",
        errorMessage: "switch-error",
        expanded: "undefined",
        flowTo: "switch-flow",
        grabbed: "undefined",
        hasPopup: "menu",
        hidden: "undefined",
        invalid: "grammar",
        keyShortcuts: "switch-shortcuts",
        label: "Switch message",
        labelledBy: "switch-label",
        live: "polite",
        owns: "switch-owns",
        readOnly: true,
        relevant: "additions removals text",
        required: true,
        roleDescription: "Switch role description",
      });
      assertType<AriaBodies<"awesomeswitch switch">>({
        atomic: true,
        busy: false,
        controls: "switch-controls",
        current: "location",
        describedBy: "switch-description",
        details: "switch-details",
        disabled: "true",
        dropEffect: "copy",
        errorMessage: "switch-error",
        expanded: "undefined",
        flowTo: "switch-flow",
        grabbed: "undefined",
        hasPopup: "menu",
        hidden: "undefined",
        invalid: "grammar",
        keyShortcuts: "switch-shortcuts",
        label: "Switch message",
        labelledBy: "switch-label",
        live: "polite",
        owns: "switch-owns",
        readOnly: true,
        relevant: "additions removals text",
        required: true,
        roleDescription: "Switch role description",
      });
    });
    it("should not allow invalid switch role attributes", () => {
      assertType<AriaBodies<"switch">>({
        atomic: true,
        busy: false,
        // @ts-expect-error - should not allow invalid attributes
        rowCount: 1,
      });
      assertType<AriaBodies<"awesomeswitch switch">>({
        atomic: true,
        busy: false,
        // @ts-expect-error - should not allow invalid attributes
        rowCount: 1,
      });
    });
  });
  describe("tab role", () => {
    it("should allow valid tab role attributes", () => {
      assertType<AriaBodies<"tab">>({
        atomic: true,
        busy: false,
        controls: "tab-controls",
        current: "location",
        describedBy: "tab-description",
        details: "tab-details",
        disabled: "true",
        dropEffect: "copy",
        errorMessage: "tab-error",
        expanded: "undefined",
        flowTo: "tab-flow",
        grabbed: "undefined",
        hasPopup: "menu",
        hidden: "undefined",
        invalid: "grammar",
        keyShortcuts: "tab-shortcuts",
        label: "Tab message",
        labelledBy: "tab-label",
        live: "polite",
        owns: "tab-owns",
        posInSet: 1,
        relevant: "additions removals text",
        roleDescription: "Tab role description",
        selected: true,
        setSize: 3,
      });
      assertType<AriaBodies<"awesometab tab">>({
        atomic: true,
        busy: false,
        controls: "tab-controls",
        current: "location",
        describedBy: "tab-description",
        details: "tab-details",
        disabled: "true",
        dropEffect: "copy",
        errorMessage: "tab-error",
        expanded: "undefined",
        flowTo: "tab-flow",
        grabbed: "undefined",
        hasPopup: "menu",
        hidden: "undefined",
        invalid: "grammar",
        keyShortcuts: "tab-shortcuts",
        label: "Tab message",
        labelledBy: "tab-label",
        live: "polite",
        owns: "tab-owns",
        posInSet: 1,
        relevant: "additions removals text",
        roleDescription: "Tab role description",
        selected: true,
        setSize: 3,
      });
    });
    it("should not allow invalid tab role attributes", () => {
      assertType<AriaBodies<"tab">>({
        // @ts-expect-error - should not allow invalid attributes
        activeDescendant: "tab-active-descendant",
      });
      assertType<AriaBodies<"awesometab tab">>({
        // @ts-expect-error - should not allow invalid attributes
        activeDescendant: "tab-active-descendant",
      });
    });
  });
  describe("table role", () => {
    it("should allow valid table role attributes", () => {
      assertType<AriaBodies<"table">>({
        atomic: true,
        busy: false,
        controls: "table-controls",
        colCount: 3,
        current: "location",
        describedBy: "table-description",
        details: "table-details",
        disabled: "true",
        dropEffect: "copy",
        errorMessage: "table-error",
        flowTo: "table-flow",
        grabbed: "undefined",
        hasPopup: "menu",
        hidden: "undefined",
        invalid: "grammar",
        keyShortcuts: "table-shortcuts",
        label: "Table message",
        labelledBy: "table-label",
        live: "polite",
        owns: "table-owns",
        relevant: "additions removals text",
        roleDescription: "Table role description",
        rowCount: 5,
      });
      assertType<AriaBodies<"awesometable table">>({
        atomic: true,
        busy: false,
        controls: "table-controls",
        colCount: 3,
        current: "location",
        describedBy: "table-description",
        details: "table-details",
        disabled: "true",
        dropEffect: "copy",
        errorMessage: "table-error",
        flowTo: "table-flow",
        grabbed: "undefined",
        hasPopup: "menu",
        hidden: "undefined",
        invalid: "grammar",
        keyShortcuts: "table-shortcuts",
        label: "Table message",
        labelledBy: "table-label",
        live: "polite",
        owns: "table-owns",
        relevant: "additions removals text",
        roleDescription: "Table role description",
        rowCount: 5,
      });
    });
    it("should not allow invalid table role attributes", () => {
      assertType<AriaBodies<"table">>({
        // @ts-expect-error - should not allow invalid attributes
        activeDescendant: "table-active-descendant",
      });
      assertType<AriaBodies<"awesometable table">>({
        // @ts-expect-error - should not allow invalid attributes
        activeDescendant: "table-active-descendant",
      });
    });
  });
  describe("tablist role", () => {
    it("should allow valid tablist role attributes", () => {
      assertType<AriaBodies<"tablist">>({
        activeDescendant: "tablist-active-descendant",
        atomic: true,
        busy: false,
        controls: "tablist-controls",
        current: "location",
        describedBy: "tablist-description",
        details: "tablist-details",
        disabled: "true",
        dropEffect: "copy",
        errorMessage: "tablist-error",
        flowTo: "tablist-flow",
        grabbed: "undefined",
        hasPopup: "menu",
        hidden: "undefined",
        invalid: "grammar",
        keyShortcuts: "tablist-shortcuts",
        label: "Tablist message",
        labelledBy: "tablist-label",
        live: "polite",
        multiSelectable: true,
        orientation: "horizontal",
        owns: "tablist-owns",
        relevant: "additions removals text",
        roleDescription: "Tablist role description",
      });
      assertType<AriaBodies<"awesometablist tablist">>({
        activeDescendant: "tablist-active-descendant",
        atomic: true,
        busy: false,
        controls: "tablist-controls",
        current: "location",
        describedBy: "tablist-description",
        details: "tablist-details",
        disabled: "true",
        dropEffect: "copy",
        errorMessage: "tablist-error",
        flowTo: "tablist-flow",
        grabbed: "undefined",
        hasPopup: "menu",
        hidden: "undefined",
        invalid: "grammar",
        keyShortcuts: "tablist-shortcuts",
        label: "Tablist message",
        labelledBy: "tablist-label",
        live: "polite",
        multiSelectable: true,
        orientation: "horizontal",
        owns: "tablist-owns",
        relevant: "additions removals text",
        roleDescription: "Tablist role description",
      });
    });
    it("should not allow invalid tablist role attributes", () => {
      assertType<AriaBodies<"tablist">>({
        // @ts-expect-error - should not allow invalid attributes
        rowCount: 1,
      });
      assertType<AriaBodies<"awesometablist tablist">>({
        // @ts-expect-error - should not allow invalid attributes
        rowCount: 1,
      });
    });
  });
  describe("tabpanel role", () => {
    it("should allow valid tabpanel role attributes", () => {
      assertType<AriaBodies<"tabpanel">>({
        atomic: true,
        busy: false,
        controls: "tabpanel-controls",
        current: "location",
        describedBy: "tabpanel-description",
        details: "tabpanel-details",
        disabled: "true",
        dropEffect: "copy",
        errorMessage: "tabpanel-error",
        flowTo: "tabpanel-flow",
        grabbed: "undefined",
        hasPopup: "menu",
        hidden: "undefined",
        invalid: "grammar",
        keyShortcuts: "tabpanel-shortcuts",
        label: "tabpanel message",
        labelledBy: "tabpanel-label",
        live: "polite",
        owns: "tabpanel-owns",
        relevant: "additions removals text",
        roleDescription: "tabpanel role description",
      });
      assertType<AriaBodies<"awesometabpanel tabpanel">>({
        atomic: true,
        busy: false,
        controls: "tabpanel-controls",
        current: "location",
        describedBy: "tabpanel-description",
        details: "tabpanel-details",
        disabled: "true",
        dropEffect: "copy",
        errorMessage: "tabpanel-error",
        flowTo: "tabpanel-flow",
        grabbed: "undefined",
        hasPopup: "menu",
        hidden: "undefined",
        invalid: "grammar",
        keyShortcuts: "tabpanel-shortcuts",
        label: "tabpanel message",
        labelledBy: "tabpanel-label",
        live: "polite",
        owns: "tabpanel-owns",
        relevant: "additions removals text",
        roleDescription: "tabpanel role description",
      });
    });
  });
  it("should not allow invalid tabpanel role attributes", () => {
    assertType<AriaBodies<"tabpanel">>({
      atomic: true,
      busy: false,
      // @ts-expect-error - should not allow invalid attributes
      rowCount: 1,
    });
    assertType<AriaBodies<"awesometabpanel tabpanel">>({
      atomic: true,
      busy: false,
      // @ts-expect-error - should not allow invalid attributes
      rowCount: 1,
    });
  });
  describe("term role", () => {
    it("should allow valid term role attributes", () => {
      assertType<AriaBodies<"term">>({
        atomic: true,
        busy: false,
        controls: "term-controls",
        current: "location",
        describedBy: "term-description",
        details: "term-details",
        disabled: "true",
        dropEffect: "copy",
        errorMessage: "term-error",
        flowTo: "term-flow",
        grabbed: "undefined",
        hasPopup: "menu",
        hidden: "true",
        invalid: "grammar",
        keyShortcuts: "term-shortcuts",
        live: "polite",
        label: "Term message",
        labelledBy: "term-label",
        owns: "term-owns",
        relevant: "additions removals text",
        roleDescription: "term role description",
      });
      assertType<AriaBodies<"awesometerm term">>({
        atomic: true,
        busy: false,
        controls: "term-controls",
        current: "location",
        describedBy: "term-description",
        details: "term-details",
        disabled: "true",
        dropEffect: "copy",
        errorMessage: "term-error",
        flowTo: "term-flow",
        grabbed: "undefined",
        hasPopup: "menu",
        hidden: "true",
        invalid: "grammar",
        keyShortcuts: "term-shortcuts",
        label: "Term message",
        labelledBy: "term-label",
        live: "polite",
        owns: "term-owns",
        relevant: "additions removals text",
        roleDescription: "term role description",
      });
    });
    it("should not allow invalid term role attributes", () => {
      assertType<AriaBodies<"term">>({
        atomic: true,
        busy: false,
        // @ts-expect-error - should not allow invalid attributes
        rowCount: 1,
      });
      assertType<AriaBodies<"awesometerm superscript">>({
        atomic: true,
        busy: false,
        // @ts-expect-error - should not allow invalid attributes
        rowCount: 1,
      });
    });
  });

  describe("textbox role", () => {
    it("should allow valid textbox role attributes", () => {
      assertType<AriaBodies<"textbox">>({
        activeDescendant: "textbox-active-descendant",
        atomic: true,
        autoComplete: "both",
        busy: false,
        controls: "textbox-controls",
        current: "location",
        describedBy: "textbox-description",
        details: "textbox-details",
        disabled: "true",
        dropEffect: "copy",
        errorMessage: "textbox-error",
        flowTo: "textbox-flow",
        grabbed: "undefined",
        hasPopup: "menu",
        hidden: "undefined",
        invalid: "grammar",
        keyShortcuts: "textbox-shortcuts",
        label: "Textbox message",
        labelledBy: "textbox-label",
        live: "polite",
        multiLine: true,
        owns: "textbox-owns",
        placeholder: "Type here...",
        readOnly: true,
        relevant: "additions removals text",
        required: true,
        roleDescription: "Textbox role description",
      });
      assertType<AriaBodies<"awesometextbox textbox">>({
        activeDescendant: "textbox-active-descendant",
        atomic: true,
        autoComplete: "both",
        busy: false,
        controls: "textbox-controls",
        current: "location",
        describedBy: "textbox-description",
        details: "textbox-details",
        disabled: "true",
        dropEffect: "copy",
        errorMessage: "textbox-error",
        flowTo: "textbox-flow",
        grabbed: "undefined",
        hasPopup: "menu",
        hidden: "undefined",
        invalid: "grammar",
        keyShortcuts: "textbox-shortcuts",
        label: "Textbox message",
        labelledBy: "textbox-label",
        live: "polite",
        multiLine: true,
        owns: "textbox-owns",
        placeholder: "Type here...",
        readOnly: true,
        relevant: "additions removals text",
        required: true,
        roleDescription: "Textbox role description",
      });
    });
    it("should not allow invalid textbox role attributes", () => {
      assertType<AriaBodies<"textbox">>({
        atomic: true,
        busy: false,
        // @ts-expect-error - should not allow invalid attributes
        rowCount: 1,
      });
      assertType<AriaBodies<"awesometextbox textbox">>({
        atomic: true,
        busy: false,
        // @ts-expect-error - should not allow invalid attributes
        rowCount: 1,
      });
    });
  });
  describe("time role", () => {
    it("should allow valid time role attributes", () => {
      assertType<AriaBodies<"time">>({
        atomic: true,
        busy: false,
        controls: "time-controls",
        current: "location",
        describedBy: "time-description",
        details: "time-details",
        disabled: "true",
        dropEffect: "copy",
        errorMessage: "time-error",
        flowTo: "time-flow",
        grabbed: "undefined",
        hasPopup: "menu",
        hidden: "undefined",
        invalid: "grammar",
        keyShortcuts: "time-shortcuts",
        label: "time message",
        labelledBy: "time-label",
        live: "polite",
        owns: "time-owns",
        relevant: "additions removals text",
        roleDescription: "time role description",
      });
      assertType<AriaBodies<"awesometime time">>({
        atomic: true,
        busy: false,
        controls: "time-controls",
        current: "location",
        describedBy: "time-description",
        details: "time-details",
        disabled: "true",
        dropEffect: "copy",
        errorMessage: "time-error",
        flowTo: "time-flow",
        grabbed: "undefined",
        hasPopup: "menu",
        hidden: "undefined",
        invalid: "grammar",
        keyShortcuts: "time-shortcuts",
        label: "time message",
        labelledBy: "time-label",
        live: "polite",
        owns: "time-owns",
        relevant: "additions removals text",
        roleDescription: "time role description",
      });
    });
    it("should not allow invalid time role attributes", () => {
      assertType<AriaBodies<"time">>({
        atomic: true,
        busy: false,
        // @ts-expect-error - should not allow invalid attributes
        rowCount: 1,
      });
      assertType<AriaBodies<"awesometime time">>({
        atomic: true,
        busy: false,
        // @ts-expect-error - should not allow invalid attributes
        rowCount: 1,
      });
    });
  });
  describe("timer role", () => {
    it("should allow valid timer role attributes", () => {
      assertType<AriaBodies<"timer">>({
        atomic: true,
        busy: false,
        controls: "timer-controls",
        current: "location",
        describedBy: "timer-description",
        details: "timer-details",
        disabled: "true",
        dropEffect: "copy",
        errorMessage: "timer-error",
        flowTo: "timer-flow",
        grabbed: "undefined",
        hasPopup: "menu",
        hidden: "undefined",
        invalid: "grammar",
        keyShortcuts: "timer-shortcuts",
        label: "Timer message",
        labelledBy: "timer-label",
        live: "polite",
        owns: "timer-owns",
        relevant: "additions removals text",
        roleDescription: "Timer role description",
      });
      assertType<AriaBodies<"awesometimer timer">>({
        atomic: true,
        busy: false,
        controls: "timer-controls",
        current: "location",
        describedBy: "timer-description",
        details: "timer-details",
        disabled: "true",
        dropEffect: "copy",
        errorMessage: "timer-error",
        flowTo: "timer-flow",
        grabbed: "undefined",
        hasPopup: "menu",
        hidden: "undefined",
        invalid: "grammar",
        keyShortcuts: "timer-shortcuts",
        label: "Timer message",
        labelledBy: "timer-label",
        live: "polite",
        owns: "timer-owns",
        relevant: "additions removals text",
        roleDescription: "Timer role description",
      });
    });
    it("should not allow invalid timer role attributes", () => {
      assertType<AriaBodies<"timer">>({
        atomic: true,
        busy: false,
        // @ts-expect-error - should not allow invalid attributes
        rowCount: 1,
      });
      assertType<AriaBodies<"awesometimer timer">>({
        atomic: true,
        busy: false,
        // @ts-expect-error - should not allow invalid attributes
        rowCount: 1,
      });
    });
  });

  describe("toolbar role", () => {
    it("should allow valid toolbar role attributes", () => {
      assertType<AriaBodies<"toolbar">>({
        activeDescendant: "toolbar-active-descendant",
        atomic: true,
        busy: false,
        controls: "toolbar-controls",
        current: "location",
        describedBy: "toolbar-description",
        details: "toolbar-details",
        disabled: "true",
        dropEffect: "copy",
        errorMessage: "toolbar-error",
        flowTo: "toolbar-flow",
        grabbed: "undefined",
        hasPopup: "menu",
        hidden: "undefined",
        invalid: "grammar",
        keyShortcuts: "toolbar-shortcuts",
        label: "Toolbar message",
        labelledBy: "toolbar-label",
        live: "polite",
        orientation: "horizontal",
        owns: "toolbar-owns",
        relevant: "additions removals text",
        roleDescription: "Toolbar role description",
      });
      assertType<AriaBodies<"toolbar">>({
        activeDescendant: "toolbar-active-descendant",
        atomic: true,
        busy: false,
        controls: "toolbar-controls",
        current: "location",
        describedBy: "toolbar-description",
        details: "toolbar-details",
        disabled: "true",
        dropEffect: "copy",
        errorMessage: "toolbar-error",
        flowTo: "toolbar-flow",
        grabbed: "undefined",
        hasPopup: "menu",
        hidden: "undefined",
        invalid: "grammar",
        keyShortcuts: "toolbar-shortcuts",
        label: "Toolbar message",
        labelledBy: "toolbar-label",
        live: "polite",
        orientation: "horizontal",
        owns: "toolbar-owns",
        relevant: "additions removals text",
        roleDescription: "Toolbar role description",
      });
    });
    it("should not allow invalid toolbar role attributes", () => {
      assertType<AriaBodies<"toolbar">>({
        // @ts-expect-error - should not allow invalid attributes
        rowCount: 1,
      });
      assertType<AriaBodies<"awesometoolbar toolbar">>({
        // @ts-expect-error - should not allow invalid attributes
        rowCount: 1,
      });
    });
  });

  describe("tooltip role", () => {
    it("should allow valid tooltip role attributes", () => {
      assertType<AriaBodies<"tooltip">>({
        atomic: true,
        busy: false,
        controls: "tooltip-controls",
        current: "location",
        describedBy: "tooltip-description",
        details: "tooltip-details",
        disabled: "true",
        dropEffect: "copy",
        errorMessage: "tooltip-error",
        flowTo: "tooltip-flow",
        grabbed: "undefined",
        hasPopup: "menu",
        hidden: "undefined",
        invalid: "grammar",
        keyShortcuts: "tooltip-shortcuts",
        label: "Tooltip message",
        labelledBy: "tooltip-label",
        live: "polite",
        owns: "tooltip-owns",
        relevant: "additions removals text",
        roleDescription: "Tooltip role description",
      });
      assertType<AriaBodies<"awesometooltip tooltip">>({
        atomic: true,
        busy: false,
        controls: "tooltip-controls",
        current: "location",
        describedBy: "tooltip-description",
        details: "tooltip-details",
        disabled: "true",
        dropEffect: "copy",
        errorMessage: "tooltip-error",
        flowTo: "tooltip-flow",
        grabbed: "undefined",
        hasPopup: "menu",
        hidden: "undefined",
        invalid: "grammar",
        keyShortcuts: "tooltip-shortcuts",
        label: "Tooltip message",
        labelledBy: "tooltip-label",
        live: "polite",
        owns: "tooltip-owns",
        relevant: "additions removals text",
        roleDescription: "Tooltip role description",
      });
    });
    it("should not allow invalid tooltip role attributes", () => {
      assertType<AriaBodies<"tooltip">>({
        atomic: true,
        busy: false,
        // @ts-expect-error - should not allow invalid attributes
        rowCount: 1,
      });
      assertType<AriaBodies<"awesometooltip tooltip">>({
        atomic: true,
        busy: false,
        // @ts-expect-error - should not allow invalid attributes
        rowCount: 1,
      });
    });
  });
  describe("tree role", () => {
    it("should allow valid tree role attributes", () => {
      assertType<AriaBodies<"tree">>({
        activeDescendant: "tree-active-descendant",
        atomic: true,
        busy: false,
        controls: "tree-controls",
        current: "location",
        describedBy: "tree-description",
        details: "tree-details",
        disabled: "true",
        dropEffect: "copy",
        errorMessage: "tree-error",
        flowTo: "tree-flow",
        grabbed: "undefined",
        hasPopup: "menu",
        hidden: "undefined",
        invalid: "grammar",
        keyShortcuts: "tree-shortcuts",
        label: "Tree message",
        labelledBy: "tree-label",
        live: "polite",
        multiSelectable: true,
        orientation: "vertical",
        owns: "tree-owns",
        relevant: "additions removals text",
        required: true,
        roleDescription: "Tree role description",
      });
      assertType<AriaBodies<"awesometree tree">>({
        activeDescendant: "tree-active-descendant",
        atomic: true,
        busy: false,
        controls: "tree-controls",
        current: "location",
        describedBy: "tree-description",
        details: "tree-details",
        disabled: "true",
        dropEffect: "copy",
        errorMessage: "tree-error",
        flowTo: "tree-flow",
        grabbed: "undefined",
        hasPopup: "menu",
        hidden: "undefined",
        invalid: "grammar",
        keyShortcuts: "tree-shortcuts",
        label: "Tree message",
        labelledBy: "tree-label",
        live: "polite",
        multiSelectable: true,
        orientation: "vertical",
        owns: "tree-owns",
        relevant: "additions removals text",
        required: true,
        roleDescription: "Tree role description",
      });
    });
    it("should not allow invalid tree role attributes", () => {
      assertType<AriaBodies<"tree">>({
        // @ts-expect-error - should not allow invalid attributes
        rowCount: 1,
      });
      assertType<AriaBodies<"awesometree tree">>({
        // @ts-expect-error - should not allow invalid attributes
        rowCount: 1,
      });
    });
  });
  describe("treegrid role", () => {
    it("should allow valid treegrid role attributes", () => {
      assertType<AriaBodies<"treegrid">>({
        activeDescendant: "treegrid-active-descendant",
        atomic: true,
        busy: false,
        colCount: 3,
        controls: "treegrid-controls",
        current: "location",
        describedBy: "treegrid-description",
        details: "treegrid-details",
        disabled: "true",
        dropEffect: "copy",
        errorMessage: "treegrid-error",
        flowTo: "treegrid-flow",
        grabbed: "undefined",
        hasPopup: "menu",
        hidden: "undefined",
        invalid: "grammar",
        keyShortcuts: "treegrid-shortcuts",
        label: "Treegrid message",
        labelledBy: "treegrid-label",
        live: "polite",
        multiSelectable: true,
        orientation: "vertical",
        owns: "treegrid-owns",
        readOnly: true,
        relevant: "additions removals text",
        required: true,
        roleDescription: "Treegrid role description",
        rowCount: 5,
      });
      assertType<AriaBodies<"awesometreegrid treegrid">>({
        activeDescendant: "treegrid-active-descendant",
        atomic: true,
        busy: false,
        colCount: 3,
        controls: "treegrid-controls",
        current: "location",
        describedBy: "treegrid-description",
        details: "treegrid-details",
        disabled: "true",
        dropEffect: "copy",
        errorMessage: "treegrid-error",
        flowTo: "treegrid-flow",
        grabbed: "undefined",
        hasPopup: "menu",
        hidden: "undefined",
        invalid: "grammar",
        keyShortcuts: "treegrid-shortcuts",
        label: "Treegrid message",
        labelledBy: "treegrid-label",
        live: "polite",
        multiSelectable: true,
        orientation: "vertical",
        owns: "treegrid-owns",
        readOnly: true,
        relevant: "additions removals text",
        required: true,
        roleDescription: "Treegrid role description",
        rowCount: 5,
      });
    });
    it("should not allow invalid treegrid role attributes", () => {
      assertType<AriaBodies<"treegrid">>({
        // @ts-expect-error - should not allow invalid attributes
        rowSpan: 2,
      });
      assertType<AriaBodies<"awesometreegrid treegrid">>({
        // @ts-expect-error - should not allow invalid attributes
        rowSpan: 2,
      });
    });
  });
  describe("treeitem role", () => {
    it("should allow valid treeitem role attributes", () => {
      assertType<AriaBodies<"treeitem">>({
        atomic: true,
        busy: false,
        checked: true,
        controls: "treeitem-controls",
        current: "location",
        describedBy: "treeitem-description",
        details: "treeitem-details",
        disabled: "true",
        dropEffect: "copy",
        errorMessage: "treeitem-error",
        expanded: "undefined",
        flowTo: "treeitem-flow",
        grabbed: "undefined",
        hasPopup: "menu",
        hidden: "undefined",
        invalid: "grammar",
        keyShortcuts: "treeitem-shortcuts",
        label: "Treeitem message",
        labelledBy: "treeitem-label",
        live: "polite",
        owns: "treeitem-owns",
        posInSet: 1,
        relevant: "additions removals text",
        roleDescription: "Treeitem role description",
        selected: true,
        setSize: 3,
      });
      assertType<AriaBodies<"awesometreeitem treeitem">>({
        atomic: true,
        busy: false,
        checked: true,
        controls: "treeitem-controls",
        current: "location",
        describedBy: "treeitem-description",
        details: "treeitem-details",
        disabled: "true",
        dropEffect: "copy",
        errorMessage: "treeitem-error",
        expanded: "undefined",
        flowTo: "treeitem-flow",
        grabbed: "undefined",
        hasPopup: "menu",
        hidden: "undefined",
        invalid: "grammar",
        keyShortcuts: "treeitem-shortcuts",
        label: "Treeitem message",
        labelledBy: "treeitem-label",
        live: "polite",
        owns: "treeitem-owns",
        posInSet: 1,
        relevant: "additions removals text",
        roleDescription: "Treeitem role description",
        selected: true,
        setSize: 3,
      });
    });
    it("should not allow invalid treeitem role attributes", () => {
      assertType<AriaBodies<"treeitem">>({
        // @ts-expect-error - should not allow invalid attributes
        rowCount: 1,
      });
      assertType<AriaBodies<"awesometreeitem treeitem">>({
        // @ts-expect-error - should not allow invalid attributes
        rowCount: 1,
      });
    });
  });
});
