import { describe, it, assertType } from "vitest";
import { AllAriaAttributeBodies } from "./AllAriaAttributeBodies";

describe("AllAriaAttributeBodies", () => {
  it("should not allow additional properties", () => {
    assertType<AllAriaAttributeBodies>({
      // @ts-expect-error - should not accept additional properties
      additionalProperty: "value",
    });
  });

  it("should allow empty objects", () => {
    assertType<AllAriaAttributeBodies>({});
  });

  describe("activeDescendant", () => {
    it("should be a string", () => {
      assertType<AllAriaAttributeBodies>({ activeDescendant: "it-id" });
    });
    assertType<AllAriaAttributeBodies>({
      // @ts-expect-error - should not accept invalid values
      activeDescendant: 123,
    });
  });

  describe("atomic", () => {
    it("should be a Booleanish", () => {
      assertType<AllAriaAttributeBodies>({ atomic: true });
      assertType<AllAriaAttributeBodies>({ atomic: "true" });
      assertType<AllAriaAttributeBodies>({ atomic: "false" });
      assertType<AllAriaAttributeBodies>({
        // @ts-expect-error - should not accept invalid values
        atomic: "invalid",
      });
    });
  });
  describe("autoComplete", () => {
    it("should be one of the specified strings", () => {
      assertType<AllAriaAttributeBodies>({ autoComplete: "none" });
      assertType<AllAriaAttributeBodies>({ autoComplete: "inline" });
      assertType<AllAriaAttributeBodies>({ autoComplete: "list" });
      assertType<AllAriaAttributeBodies>({ autoComplete: "both" });
      assertType<AllAriaAttributeBodies>({
        // @ts-expect-error - should not accept invalid values
        autoComplete: "invalid",
      });
    });
  });
  describe("busy", () => {
    it("should be a Booleanish", () => {
      assertType<AllAriaAttributeBodies>({ busy: true });
      assertType<AllAriaAttributeBodies>({ busy: "true" });
      assertType<AllAriaAttributeBodies>({ busy: "false" });
    });
  });
  describe("checked", () => {
    it("should be a Tristate", () => {
      assertType<AllAriaAttributeBodies>({ checked: true });
      assertType<AllAriaAttributeBodies>({ checked: "true" });
      assertType<AllAriaAttributeBodies>({ checked: "false" });
      assertType<AllAriaAttributeBodies>({ checked: "mixed" });
      assertType<AllAriaAttributeBodies>({
        // @ts-expect-error - should not accept invalid values
        checked: "invalid",
      });
    });
  });
  describe("colCount", () => {
    it("should be a number", () => {
      assertType<AllAriaAttributeBodies>({ colCount: 3 });
      assertType<AllAriaAttributeBodies>({
        // @ts-expect-error - should not accept invalid values
        colCount: "invalid",
      });
    });
  });
  describe("colIndex", () => {
    it("should be a number", () => {
      assertType<AllAriaAttributeBodies>({ colIndex: 1 });
      assertType<AllAriaAttributeBodies>({
        // @ts-expect-error - should not accept invalid values
        colIndex: "invalid",
      });
    });
  });
  describe("colSpan", () => {
    it("should be a number", () => {
      assertType<AllAriaAttributeBodies>({ colSpan: 2 });
      assertType<AllAriaAttributeBodies>({
        // @ts-expect-error - should not accept invalid values
        colSpan: "invalid",
      });
    });
  });
  describe("controls", () => {
    it("should be a string", () => {
      assertType<AllAriaAttributeBodies>({ controls: "control-id" });
      assertType<AllAriaAttributeBodies>({
        // @ts-expect-error - should not accept invalid values
        controls: 123,
      });
    });
  });
  describe("current", () => {
    it("should be a Booleanish or specific strings", () => {
      assertType<AllAriaAttributeBodies>({ current: true });
      assertType<AllAriaAttributeBodies>({ current: "true" });
      assertType<AllAriaAttributeBodies>({ current: "false" });
      assertType<AllAriaAttributeBodies>({ current: "page" });
      assertType<AllAriaAttributeBodies>({ current: "step" });
      assertType<AllAriaAttributeBodies>({ current: "location" });
      assertType<AllAriaAttributeBodies>({ current: "date" });
      assertType<AllAriaAttributeBodies>({ current: "time" });
      assertType<AllAriaAttributeBodies>({
        // @ts-expect-error - should not accept invalid values
        current: "invalid",
      });
    });
  });
  describe("describedBy", () => {
    it("should be a string", () => {
      assertType<AllAriaAttributeBodies>({ describedBy: "description-id" });
      assertType<AllAriaAttributeBodies>({
        // @ts-expect-error - should not accept invalid values
        describedBy: 123,
      });
    });
  });
  describe("details", () => {
    it("should be a string", () => {
      assertType<AllAriaAttributeBodies>({ details: "details-id" });
      assertType<AllAriaAttributeBodies>({
        // @ts-expect-error - should not accept invalid values
        details: 123,
      });
    });
  });
  describe("disabled", () => {
    it("should be a Booleanish", () => {
      assertType<AllAriaAttributeBodies>({ disabled: true });
      assertType<AllAriaAttributeBodies>({ disabled: "true" });
      assertType<AllAriaAttributeBodies>({ disabled: "false" });
      assertType<AllAriaAttributeBodies>({
        // @ts-expect-error - should not accept invalid values
        diesabled: "invalid",
      });
    });
  });
  describe("dropEffect", () => {
    it("should be one of the specified strings", () => {
      assertType<AllAriaAttributeBodies>({ dropEffect: "copy" });
      assertType<AllAriaAttributeBodies>({ dropEffect: "execute" });
      assertType<AllAriaAttributeBodies>({ dropEffect: "link" });
      assertType<AllAriaAttributeBodies>({ dropEffect: "move" });
      assertType<AllAriaAttributeBodies>({ dropEffect: "popup" });
      assertType<AllAriaAttributeBodies>({ dropEffect: "none" });
      assertType<AllAriaAttributeBodies>({
        // @ts-expect-error - should not accept invalid values
        dropEffect: "invalid",
      });
    });
  });
  describe("errorMessage", () => {
    it("should be a string", () => {
      assertType<AllAriaAttributeBodies>({ errorMessage: "error-id" });
      assertType<AllAriaAttributeBodies>({
        // @ts-expect-error - should not accept invalid values
        errorMessage: 123,
      });
    });
  });
  describe("expanded", () => {
    it("should be an Undefinedable Booleanish", () => {
      assertType<AllAriaAttributeBodies>({ expanded: true });
      assertType<AllAriaAttributeBodies>({ expanded: "true" });
      assertType<AllAriaAttributeBodies>({ expanded: "false" });
      assertType<AllAriaAttributeBodies>({
        // @ts-expect-error - should not accept invalid values
        expanded: "invalid",
      });
    });
  });
  describe("flowTo", () => {
    it("should be a string", () => {
      assertType<AllAriaAttributeBodies>({ flowTo: "flow-id" });
      assertType<AllAriaAttributeBodies>({
        // @ts-expect-error - should not accept invalid values
        flowTo: 123,
      });
    });
  });
  describe("grabbed", () => {
    it("should be an Undefinedable Booleanish", () => {
      assertType<AllAriaAttributeBodies>({ grabbed: true });
      assertType<AllAriaAttributeBodies>({ grabbed: "true" });
      assertType<AllAriaAttributeBodies>({ grabbed: "false" });
      assertType<AllAriaAttributeBodies>({
        // @ts-expect-error - should not accept invalid values
        grabbed: "invalid",
      });
    });
  });
  describe("hasPopup", () => {
    it("should be a Booleanish or specific strings", () => {
      assertType<AllAriaAttributeBodies>({ hasPopup: true });
      assertType<AllAriaAttributeBodies>({ hasPopup: "true" });
      assertType<AllAriaAttributeBodies>({ hasPopup: "false" });
      assertType<AllAriaAttributeBodies>({ hasPopup: "menu" });
      assertType<AllAriaAttributeBodies>({ hasPopup: "listbox" });
      assertType<AllAriaAttributeBodies>({ hasPopup: "tree" });
      assertType<AllAriaAttributeBodies>({ hasPopup: "grid" });
      assertType<AllAriaAttributeBodies>({ hasPopup: "dialog" });
      assertType<AllAriaAttributeBodies>({
        // @ts-expect-error - should not accept invalid values
        hasPopup: "invalid",
      });
    });
  });
  describe("hidden", () => {
    it("should be an Undefinedable Booleanish", () => {
      assertType<AllAriaAttributeBodies>({ hidden: true });
      assertType<AllAriaAttributeBodies>({ hidden: "true" });
      assertType<AllAriaAttributeBodies>({ hidden: "false" });
      assertType<AllAriaAttributeBodies>({
        // @ts-expect-error - should not accept invalid values
        hidden: "invalid",
      });
    });
  });
  describe("invalid", () => {
    it("should be a Booleanish or specific strings", () => {
      assertType<AllAriaAttributeBodies>({ invalid: true });
      assertType<AllAriaAttributeBodies>({ invalid: "true" });
      assertType<AllAriaAttributeBodies>({ invalid: "false" });
      assertType<AllAriaAttributeBodies>({ invalid: "grammar" });
      assertType<AllAriaAttributeBodies>({ invalid: "spelling" });
      assertType<AllAriaAttributeBodies>({
        // @ts-expect-error - should not accept invalid values
        invalid: "invalid",
      });
    });
  });
  describe("keyShortcuts", () => {
    it("should be a string", () => {
      assertType<AllAriaAttributeBodies>({ keyShortcuts: "Ctrl+C" });
      assertType<AllAriaAttributeBodies>({
        // @ts-expect-error - should not accept invalid values
        keyShortcuts: 123,
      });
    });
  });
  describe("label", () => {
    it("should be a string", () => {
      assertType<AllAriaAttributeBodies>({ label: "label-id" });
      assertType<AllAriaAttributeBodies>({
        // @ts-expect-error - should not accept invalid values
        label: 123,
      });
    });
  });
  describe("labelledBy", () => {
    it("should be a string", () => {
      assertType<AllAriaAttributeBodies>({ labelledBy: "label-id" });
      assertType<AllAriaAttributeBodies>({
        // @ts-expect-error - should not accept invalid values
        labelledBy: 123,
      });
    });
  });

  describe("level", () => {
    it("should be a number", () => {
      assertType<AllAriaAttributeBodies>({ level: 1 });
      assertType<AllAriaAttributeBodies>({
        // @ts-expect-error - should not accept invalid values
        level: "invalid",
      });
    });
  });

  describe("live", () => {
    it("should be one of the specified strings", () => {
      assertType<AllAriaAttributeBodies>({ live: "off" });
      assertType<AllAriaAttributeBodies>({ live: "assertive" });
      assertType<AllAriaAttributeBodies>({ live: "polite" });
      assertType<AllAriaAttributeBodies>({
        // @ts-expect-error - should not accept invalid values
        live: "invalid",
      });
    });
  });
  describe("modal", () => {
    it("should be a Booleanish", () => {
      assertType<AllAriaAttributeBodies>({ modal: true });
      assertType<AllAriaAttributeBodies>({ modal: "true" });
      assertType<AllAriaAttributeBodies>({ modal: "false" });
      assertType<AllAriaAttributeBodies>({
        // @ts-expect-error - should not accept invalid values
        modal: "invalid",
      });
    });
  });
  describe("multiLine", () => {
    it("should be a Booleanish", () => {
      assertType<AllAriaAttributeBodies>({ multiLine: true });
      assertType<AllAriaAttributeBodies>({ multiLine: "true" });
      assertType<AllAriaAttributeBodies>({ multiLine: "false" });
      assertType<AllAriaAttributeBodies>({
        // @ts-expect-error - should not accept invalid values
        multiLine: "invalid",
      });
    });
  });
  describe("multiSelectable", () => {
    it("should be a Booleanish", () => {
      assertType<AllAriaAttributeBodies>({ multiSelectable: true });
      assertType<AllAriaAttributeBodies>({ multiSelectable: "true" });
      assertType<AllAriaAttributeBodies>({ multiSelectable: "false" });
      assertType<AllAriaAttributeBodies>({
        // @ts-expect-error - should not accept invalid values
        multiSelectable: "invalid",
      });
    });
  });
  describe("orientation", () => {
    it("should be one of the specified strings", () => {
      assertType<AllAriaAttributeBodies>({ orientation: "horizontal" });
      assertType<AllAriaAttributeBodies>({ orientation: "vertical" });
      assertType<AllAriaAttributeBodies>({ orientation: "undefined" });
      assertType<AllAriaAttributeBodies>({
        // @ts-expect-error - should not accept invalid values
        orientation: "invalid",
      });
    });
  });
  describe("owns", () => {
    it("should be a string", () => {
      assertType<AllAriaAttributeBodies>({ owns: "owned-id" });
      assertType<AllAriaAttributeBodies>({
        // @ts-expect-error - should not accept invalid values
        owns: 123,
      });
    });
  });

  describe("placeholder", () => {
    it("should be a string", () => {
      assertType<AllAriaAttributeBodies>({ placeholder: "Enter text" });
      assertType<AllAriaAttributeBodies>({
        // @ts-expect-error - should not accept invalid values
        placeholder: 123,
      });
    });
  });
  describe("posInSet", () => {
    it("should be a number", () => {
      assertType<AllAriaAttributeBodies>({ posInSet: 1 });
      assertType<AllAriaAttributeBodies>({
        // @ts-expect-error - should not accept invalid values
        posInSet: "invalid",
      });
    });
  });
  describe("pressed", () => {
    it("should be a Tristate or 'undefined'", () => {
      assertType<AllAriaAttributeBodies>({ pressed: true });
      assertType<AllAriaAttributeBodies>({ pressed: "true" });
      assertType<AllAriaAttributeBodies>({ pressed: "false" });
      assertType<AllAriaAttributeBodies>({ pressed: "mixed" });
      assertType<AllAriaAttributeBodies>({ pressed: "undefined" });
      assertType<AllAriaAttributeBodies>({
        // @ts-expect-error - should not accept invalid values
        pressed: "invalid",
      });
    });
  });
  describe("readOnly", () => {
    it("should be a Booleanish", () => {
      assertType<AllAriaAttributeBodies>({ readOnly: true });
      assertType<AllAriaAttributeBodies>({ readOnly: "true" });
      assertType<AllAriaAttributeBodies>({ readOnly: "false" });
      assertType<AllAriaAttributeBodies>({
        // @ts-expect-error - should not accept invalid values
        readOnly: "invalid",
      });
    });
  });

  describe("relevant", () => {
    it("should be one of the specified strings or combinations", () => {
      assertType<AllAriaAttributeBodies>({ relevant: "additions" });
      assertType<AllAriaAttributeBodies>({ relevant: "removals" });
      assertType<AllAriaAttributeBodies>({ relevant: "text" });
      assertType<AllAriaAttributeBodies>({ relevant: "all" });
      assertType<AllAriaAttributeBodies>({
        relevant: "additions removals",
      });
      assertType<AllAriaAttributeBodies>({
        relevant: "additions text removals",
      });
      assertType<AllAriaAttributeBodies>({
        // @ts-expect-error - should not accept invalid values
        relevant: "invalid",
      });
    });
  });

  describe("required", () => {
    it("should be a Booleanish", () => {
      assertType<AllAriaAttributeBodies>({ required: true });
      assertType<AllAriaAttributeBodies>({ required: "true" });
      assertType<AllAriaAttributeBodies>({ required: "false" });
      assertType<AllAriaAttributeBodies>({
        // @ts-expect-error - should not accept invalid values
        required: "invalid",
      });
    });
  });
  describe("roleDescription", () => {
    it("should be a string", () => {
      assertType<AllAriaAttributeBodies>({ roleDescription: "description" });
      assertType<AllAriaAttributeBodies>({
        // @ts-expect-error - should not accept invalid values
        roleDescription: 123,
      });
    });
  });
  describe("rowCount", () => {
    it("should be a number", () => {
      assertType<AllAriaAttributeBodies>({ rowCount: 5 });
      assertType<AllAriaAttributeBodies>({
        // @ts-expect-error - should not accept invalid values
        rowCount: "invalid",
      });
    });
  });
  describe("rowIndex", () => {
    it("should be a number", () => {
      assertType<AllAriaAttributeBodies>({ rowIndex: 2 });
      assertType<AllAriaAttributeBodies>({
        // @ts-expect-error - should not accept invalid values
        rowIndex: "invalid",
      });
    });
  });
  describe("rowSpan", () => {
    it("should be a number", () => {
      assertType<AllAriaAttributeBodies>({ rowSpan: 3 });
      assertType<AllAriaAttributeBodies>({
        // @ts-expect-error - should not accept invalid values
        rowSpan: "invalid",
      });
    });
  });
  describe("selected", () => {
    it("should be an Undefinedable Booleanish", () => {
      assertType<AllAriaAttributeBodies>({ selected: true });
      assertType<AllAriaAttributeBodies>({ selected: "true" });
      assertType<AllAriaAttributeBodies>({ selected: "false" });
      assertType<AllAriaAttributeBodies>({
        // @ts-expect-error - should not accept invalid values
        selected: "invalid",
      });
    });
  });
  describe("setSize", () => {
    it("should be a number", () => {
      assertType<AllAriaAttributeBodies>({ setSize: 4 });
      assertType<AllAriaAttributeBodies>({
        // @ts-expect-error - should not accept invalid values
        setSize: "invalid",
      });
    });
  });
  describe("sort", () => {
    it("should be one of the specified strings", () => {
      assertType<AllAriaAttributeBodies>({ sort: "ascending" });
      assertType<AllAriaAttributeBodies>({ sort: "descending" });
      assertType<AllAriaAttributeBodies>({ sort: "none" });
      assertType<AllAriaAttributeBodies>({ sort: "other" });
      assertType<AllAriaAttributeBodies>({
        // @ts-expect-error - should not accept invalid values
        sort: "invalid",
      });
    });
  });
  describe("valueMax", () => {
    it("should be a number", () => {
      assertType<AllAriaAttributeBodies>({ valueMax: 100 });
      assertType<AllAriaAttributeBodies>({
        // @ts-expect-error - should not accept invalid values
        valueMax: "invalid",
      });
    });
  });
  describe("valueMin", () => {
    it("should be a number", () => {
      assertType<AllAriaAttributeBodies>({ valueMin: 0 });
      assertType<AllAriaAttributeBodies>({
        // @ts-expect-error - should not accept invalid values
        valueMin: "invalid",
      });
    });
  });
  describe("valueNow", () => {
    it("should be a number", () => {
      assertType<AllAriaAttributeBodies>({ valueNow: 50 });
      assertType<AllAriaAttributeBodies>({
        // @ts-expect-error - should not accept invalid values
        valueNow: "invalid",
      });
    });
  });
  describe("valueText", () => {
    it("should be a string", () => {
      assertType<AllAriaAttributeBodies>({ valueText: "50%" });
      assertType<AllAriaAttributeBodies>({
        // @ts-expect-error - should not accept invalid values
        valueText: 123,
      });
    });
  });
});
