type Booleanish = boolean | "true" | "false";
type Tristate = Booleanish | "mixed";
type Undefinedable = Booleanish | "undefined";
type RelevantValue = "additions" | "removals" | "text" | "all";

export type AllAriaAttributeBodies = {
  activeDescendant?: string;
  atomic?: Booleanish;
  autoComplete?: "none" | "inline" | "list" | "both";
  busy?: Booleanish;
  checked?: Tristate;
  colCount?: number;
  colIndex?: number;
  colSpan?: number;
  controls?: string;
  current?: Booleanish | "page" | "step" | "location" | "date" | "time";
  describedBy?: string;
  details?: string;
  disabled?: Booleanish;
  dropEffect?: "copy" | "execute" | "link" | "move" | "popup" | "none";
  errorMessage?: string;
  expanded?: Undefinedable;
  flowTo?: string;
  grabbed?: Undefinedable;
  hasPopup?: Booleanish | "menu" | "listbox" | "tree" | "grid" | "dialog";
  hidden?: Undefinedable;
  invalid?: Booleanish | "grammar" | "spelling";
  keyShortcuts?: string;
  label?: string;
  labelledBy?: string;
  level?: number;
  live?: "off" | "assertive" | "polite";
  modal?: Booleanish;
  multiLine?: Booleanish;
  multiSelectable?: Booleanish;
  orientation?: "horizontal" | "vertical" | "undefined";
  owns?: string;
  placeholder?: string;
  posInSet?: number;
  pressed?: Tristate | "undefined";
  readOnly?: Booleanish;
  relevant?:
    | RelevantValue
    | `${RelevantValue} ${RelevantValue}`
    | `${RelevantValue} ${RelevantValue} ${RelevantValue}`;
  required?: Booleanish;
  roleDescription?: string;
  rowCount?: number;
  rowIndex?: number;
  rowSpan?: number;
  selected?: Undefinedable;
  setSize?: number;
  sort?: "ascending" | "descending" | "none" | "other";
  valueMax?: number;
  valueMin?: number;
  valueNow?: number;
  valueText?: string;
};
