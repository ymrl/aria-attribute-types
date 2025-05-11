import { describe, it, test, assertType } from "vitest";
import {
  AriaAttributeBodies,
  KebabCaseAriaAttributes,
  CamelCaseAriaAttributes,
} from ".";

describe("AriaAttributeBodies", () => {
  test("attributes", () => {
    assertType<AriaAttributeBodies>({
      activeDescendant: "string",
      atomic: true,
      autoComplete: "none",
      busy: true,
      checked: "mixed",
      colCount: 1,
      colIndex: 1,
      colSpan: 1,
      controls: "string",
      current: "page",
      describedBy: "string",
      details: "string",
      disabled: true,
      dropEffect: "copy",
      errorMessage: "string",
      expanded: true,
      flowTo: "string",
      grabbed: true,
      hasPopup: "menu",
      hidden: true,
      invalid: true,
      keyShortcuts: "string",
      label: "string",
      labelledBy: "string",
      level: 1,
      live: "off",
      modal: true,
      multiLine: true,
      multiSelectable: true,
      orientation: "horizontal",
      owns: "string",
      placeholder: "string",
      posInSet: 1,
      pressed: true,
      readOnly: true,
      relevant: "additions removals text", // this is the one we are testing
      required: true,
      roleDescription: "string",
      rowCount: 1,
      rowIndex: 1,
      rowSpan: 1,
      selected: true,
      setSize: 1,
      sort: "ascending",
      valueMax: 1,
      valueMin: 1,
      valueNow: 1,
      valueText: "string",
    });
  });

  describe("relevant", () => {
    it("can be used as additions", () => {
      assertType<AriaAttributeBodies>({
        relevant: "additions",
      });
    });
    it("can be used as removals", () => {
      assertType<AriaAttributeBodies>({
        relevant: "removals",
      });
    });
    it("can be used as text", () => {
      assertType<AriaAttributeBodies>({
        relevant: "text",
      });
    });
    it("can be used as all", () => {
      assertType<AriaAttributeBodies>({
        relevant: "all",
      });
    });
    it("can be used as additions text", () => {
      assertType<AriaAttributeBodies>({
        relevant: "additions text",
      });
    });
    it("can used as  additions removals", () => {
      assertType<AriaAttributeBodies>({
        relevant: "additions removals",
      });
    });
    it("can be used as removals text", () => {
      assertType<AriaAttributeBodies>({
        relevant: "removals text",
      });
    });
    it("can be used as additions removals text", () => {
      assertType<AriaAttributeBodies>({
        relevant: "additions removals text",
      });
    });
  });
});

describe("KebabCaseAriaAttributes", () => {
  test("attributes", () => {
    assertType<KebabCaseAriaAttributes>({
      "aria-activedescendant": "string",
      "aria-atomic": true,
      "aria-autocomplete": "none",
      "aria-busy": true,
      "aria-checked": "mixed",
      "aria-colcount": 1,
      "aria-colindex": 1,
      "aria-colspan": 1,
      "aria-controls": "string",
      "aria-current": "page",
      "aria-describedby": "string",
      "aria-details": "string",
      "aria-disabled": true,
      "aria-dropeffect": "copy",
      "aria-errormessage": "string",
      "aria-expanded": true,
      "aria-flowto": "string",
      "aria-grabbed": true,
      "aria-haspopup": "menu",
      "aria-hidden": true,
      "aria-invalid": true,
      "aria-keyshortcuts": "string",
      "aria-label": "string",
      "aria-labelledby": "string",
      "aria-level": 1,
      "aria-live": "off",
      "aria-modal": true,
      "aria-multiline": true,
      "aria-multiselectable": true,
      "aria-orientation": "horizontal",
      "aria-owns": "string",
      "aria-placeholder": "string",
      "aria-posinset": 1,
      "aria-pressed": true,
      "aria-readonly": true,
      "aria-relevant": "additions removals text",
      "aria-required": true,
      "aria-roledescription": "string",
      "aria-rowcount": 1,
      "aria-rowindex": 1,
      "aria-rowspan": 1,
      "aria-selected": true,
      "aria-setsize": 1,
      "aria-sort": "ascending",
      "aria-valuemax": 1,
      "aria-valuemin": 1,
      "aria-valuenow": 1,
      "aria-valuetext": "string",
    });
  });
});

describe("CamelCaseAriaAttributes", () => {
  test("attributes", () => {
    assertType<CamelCaseAriaAttributes>({
      ariaActiveDescendant: "string",
      ariaAtomic: true,
      ariaAutoComplete: "none",
      ariaBusy: true,
      ariaChecked: "mixed",
      ariaColCount: 1,
      ariaColIndex: 1,
      ariaColSpan: 1,
      ariaControls: "string",
      ariaCurrent: "page",
      ariaDescribedBy: "string",
      ariaDetails: "string",
      ariaDisabled: true,
      ariaDropEffect: "copy",
      ariaErrorMessage: "string",
      ariaExpanded: true,
      ariaFlowTo: "string",
      ariaGrabbed: true,
      ariaHasPopup: "menu",
      ariaHidden: true,
      ariaInvalid: true,
      ariaKeyShortcuts: "string",
      ariaLabel: "string",
      ariaLabelledBy: "string",
      ariaLevel: 1,
      ariaLive: "off",
      ariaModal: true,
      ariaMultiLine: true,
      ariaMultiSelectable: true,
      ariaOrientation: "horizontal",
      ariaOwns: "string",
      ariaPlaceholder: "string",
      ariaPosInSet: 1,
      ariaPressed: true,
      ariaReadOnly: true,
      ariaRelevant: "additions removals text", // this is the one we are testing
      ariaRequired: true,
      ariaRoleDescription: "string",
      ariaRowCount: 1,
      ariaRowIndex: 1,
      ariaRowSpan: 1,
      ariaSelected: true,
      ariaSetSize: 1,
      ariaSort: "ascending",
      ariaValueMax: 1,
      ariaValueMin: 1,
      ariaValueNow: 1,
      ariaValueText: "string",
    });
  });
});
