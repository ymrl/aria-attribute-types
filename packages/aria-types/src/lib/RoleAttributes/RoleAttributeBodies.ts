import { AriaAttributeBodies } from "../AriaAttributes";

type RoletypeRoleAriaAttributeBodies = Pick<
  AriaAttributeBodies,
  | "atomic"
  | "busy"
  | "controls"
  | "current"
  | "describedBy"
  | "details"
  | "disabled" // deprecated for global attribute on ARIA 1.2
  | "dropEffect" // @deprecated on ARIA 1.1
  | "errorMessage" // deprecated for global attribute on ARIA 1.2
  | "flowTo"
  | "grabbed" // @deprecated on ARIA 1.1
  | "hasPopup" // deprecated for global attribute on ARIA 1.2
  | "hidden"
  | "invalid" // deprecated for global attribute on ARIA 1.2
  | "keyShortcuts"
  | "label"
  | "labelledBy"
  | "live"
  | "owns"
  | "relevant"
  | "roleDescription"
>;

// structure role
// Superclass role: roletype
type StructureRoleAriaAttributeBodies = RoletypeRoleAriaAttributeBodies;

// widget role
// Superclass role: roletype
type WidgetRoleAriaAttributeBodies = RoletypeRoleAriaAttributeBodies;

// window role
// Superclass role: widget
type WindowRoleAriaAttributeBodies = RoletypeRoleAriaAttributeBodies &
  Pick<AriaAttributeBodies, "modal">;

// alert role
// Superclass role: section
export type AlertRoleAriaAttributeBodies = SectionRoleAriaAttributeBodies;

// alertdialog role
// Superclass role: alert, dialog
export type AlertdialogRoleAriaAttributeBodies = AlertRoleAriaAttributeBodies &
  DialogRoleAriaAttributeBodies;

// application role
// Superclass role: structure
export type ApplicationRoleAriaAttributeBodies =
  StructureRoleAriaAttributeBodies &
    Pick<
      AriaAttributeBodies,
      | "activeDescendant"
      | "disabled"
      | "errorMessage"
      | "expanded"
      | "hasPopup"
      | "invalid"
    >;

// article role
// Superclass role: document
export type ArticleRoleAriaAttributeBodies = DocumentRoleAriaAttributeBodies &
  Pick<AriaAttributeBodies, "posInSet" | "setSize">;

// banner role
// Superclass role: landmark
export type BannerRoleAriaAttributeBodies = LandmarkRoleAriaAttributeBodies;

// blockquote role
// Superclass role: section
export type BlockquoteRoleAriaAttributeBodies = SectionRoleAriaAttributeBodies;

// button role
// Superclass role: command
export type ButtonRoleAriaAttributeBodies = CommandRoleAriaAttributeBodies &
  Pick<AriaAttributeBodies, "disabled" | "hasPopup" | "expanded" | "pressed">;

// caption role
// Superclass role: section
export type CaptionRoleAriaAttributeBodies = Omit<
  SectionRoleAriaAttributeBodies,
  "label" | "labelledBy"
> & {
  label?: undefined;
  labelledBy?: undefined;
};

// cell role
// Superclass role: section
export type CellRoleAriaAttributeBodies = SectionRoleAriaAttributeBodies &
  Pick<AriaAttributeBodies, "colIndex" | "colSpan" | "rowIndex" | "rowSpan">;

// checkbox role
// Superclass role: input
export type CheckboxRoleAriaAttributeBodies = InputRoleAriaAttributeBodies &
  Pick<
    AriaAttributeBodies,
    | "checked" // required
    | "errorMessage"
    | "expanded"
    | "invalid"
    | "readOnly"
    | "required"
  >;

// code role
// Superclass role: section
export type CodeRoleAriaAttributeBodies = SectionRoleAriaAttributeBodies;

// columnheader role
// Superclass role: cell, gridcell, sectionhead
export type ColumnheaderRoleAriaAttributeBodies = CellRoleAriaAttributeBodies &
  GridcellRoleAriaAttributeBodies &
  SectionheadRoleAriaAttributeBodies &
  Pick<AriaAttributeBodies, "sort">;

// Superclass role: section
export type ComboboxRoleAriaAttributeBodies = InputRoleAriaAttributeBodies &
  Pick<
    AriaAttributeBodies,
    | "controls"
    | "expanded"
    | "activeDescendant"
    | "autoComplete"
    | "errorMessage"
    | "hasPopup"
    | "invalid"
    | "readOnly"
    | "required"
  >;

// Superclass role: widget
// abstract role
type CommandRoleAriaAttributeBodies = WidgetRoleAriaAttributeBodies;

// Superclass role: landmark
export type ComplementaryRoleAriaAttributeBodies =
  LandmarkRoleAriaAttributeBodies;

// Superclass role: widget
// abstract role
type CompositeRoleAriaAttributeBodies = WidgetRoleAriaAttributeBodies &
  Pick<AriaAttributeBodies, "activeDescendant" | "disabled">;

// Superclass role: landmark
export type ContentinfoRoleAriaAttributeBodies =
  LandmarkRoleAriaAttributeBodies;

// definition role
// Superclass role: section
export type DefinitionRoleAriaAttributeBodies = SectionRoleAriaAttributeBodies;

// deletion role
// Superclass role: section
export type DeletionRoleAriaAttributeBodies = Omit<
  SectionRoleAriaAttributeBodies,
  "label" | "labelledBy"
> & {
  label?: undefined;
  labelledBy?: undefined;
};

// dialog role
// Superclass role: window
export type DialogRoleAriaAttributeBodies = WindowRoleAriaAttributeBodies;

// directory role
// Superclass role: list
/** @deprecated on ARIA 1.2 use `list` instead */
export type DirectoryRoleAriaAttributeBodies = SectionRoleAriaAttributeBodies;

// document role
// Superclass role: structure
export type DocumentRoleAriaAttributeBodies = StructureRoleAriaAttributeBodies;

// emphasis role
// Superclass role: section
export type EmphasisRoleAriaAttributeBodies = Omit<
  SectionRoleAriaAttributeBodies,
  "label" | "labelledBy"
> & {
  label?: undefined;
  labelledBy?: undefined;
};

// feed role
// Superclass role: list
export type FeedRoleAriaAttributeBodies = ListRoleAriaAttributeBodies;

// figure role
// Superclass role: section
export type FigureRoleAriaAttributeBodies = SectionRoleAriaAttributeBodies;

// form role
// Superclass role: landmark
export type FormRoleAriaAttributeBodies = LandmarkRoleAriaAttributeBodies;

// generic role
// Superclass role: structure
export type GenericRoleAriaAttributeBodies = Omit<
  StructureRoleAriaAttributeBodies,
  "label" | "labelledBy" | "roleDescription"
> & {
  // prohibited attributes
  label?: undefined;
  labelledBy?: undefined;
  roleDescription?: undefined;
};

// grid role
// Superclass role: composite, table
export type GridRoleAriaAttributeBodies = CompositeRoleAriaAttributeBodies &
  TableRoleAriaAttributeBodies &
  Pick<AriaAttributeBodies, "multiSelectable" | "readOnly">;

// gridcell role
// Superclass role: cell, widget
export type GridcellRoleAriaAttributeBodies = CellRoleAriaAttributeBodies &
  WidgetRoleAriaAttributeBodies &
  Pick<
    AriaAttributeBodies,
    | "disabled"
    | "errorMessage"
    | "expanded"
    | "hasPopup"
    | "invalid"
    | "readOnly"
    | "required"
    | "selected"
  >;

// group role
// Superclass role: section
export type GroupRoleAriaAttributeBodies = SectionRoleAriaAttributeBodies &
  Pick<AriaAttributeBodies, "activeDescendant" | "disabled">;

// heading role
// Superclass role: section
export type HeadingRoleAriaAttributeBodies = SectionRoleAriaAttributeBodies &
  Pick<AriaAttributeBodies, "level">;

// img role
// Superclass role: section
export type ImgRoleAriaAttributeBodies = SectionRoleAriaAttributeBodies;

// input role
// Superclass role: widget
// abstract role
type InputRoleAriaAttributeBodies = WidgetRoleAriaAttributeBodies &
  Pick<AriaAttributeBodies, "disabled">;

// insertion role
// Superclass role: section
export type InsertionRoleAriaAttributeBodies = Omit<
  SectionRoleAriaAttributeBodies,
  "label" | "labelledBy"
> & {
  label?: undefined;
  labelledBy?: undefined;
};

// landmark role
// Superclass role: section
// abstract role
type LandmarkRoleAriaAttributeBodies = SectionRoleAriaAttributeBodies;

// link role
// Superclass role: command
export type LinkRoleAriaAttributeBodies = CommandRoleAriaAttributeBodies &
  Pick<AriaAttributeBodies, "disabled" | "expanded" | "hasPopup">;

// list role
// Superclass role: section
export type ListRoleAriaAttributeBodies = SectionRoleAriaAttributeBodies;

// listbox role
// Superclass role: select
export type ListboxRoleAriaAttributeBodies = SelectRoleAriaAttributeBodies &
  Pick<
    AriaAttributeBodies,
    | "errorMessage"
    | "expanded"
    | "invalid"
    | "multiSelectable"
    | "readOnly"
    | "required"
  >;

// listitem role
// Superclass role: section
export type ListitemRoleAriaAttributeBodies = SectionRoleAriaAttributeBodies &
  Pick<AriaAttributeBodies, "level" | "posInSet" | "setSize">;

//log role
// Superclass role: section
export type LogRoleAriaAttributeBodies = SectionRoleAriaAttributeBodies;

// main role
// Superclass role: landmark
export type MainRoleAriaAttributeBodies = LandmarkRoleAriaAttributeBodies;

// marquee role
// Superclass role: section
export type MarqueeRoleAriaAttributeBodies = SectionRoleAriaAttributeBodies;

// math role
// Superclass role: section
export type MathRoleAriaAttributeBodies = SectionRoleAriaAttributeBodies;

// meter role
// Superclass role: range
export type MeterRoleAriaAttributeBodies = RangeRoleAriaAttributeBodies;

// menu role
// Superclass role: select
export type MenuRoleAriaAttributeBodies = SelectRoleAriaAttributeBodies;

// menubar role
// Superclass role: menu
export type MenubarRoleAriaAttributeBodies = MenuRoleAriaAttributeBodies;

// menuitem role
// Superclass role: command
export type MenuitemRoleAriaAttributeBodies = CommandRoleAriaAttributeBodies &
  Pick<
    AriaAttributeBodies,
    "disabled" | "expanded" | "hasPopup" | "posInSet" | "setSize"
  >;

// menuitemcheckbox role
// Superclass role: menuitem
export type MenuitemcheckboxRoleAriaAttributeBodies =
  MenuitemRoleAriaAttributeBodies &
    Pick<
      AriaAttributeBodies,
      "checked" // required
    >;

// menuitemradio role
// Superclass role: menuitemcheckbox
export type MenuitemradioRoleAriaAttributeBodies =
  MenuitemcheckboxRoleAriaAttributeBodies;

//navigation role
// Superclass role: landmark
export type NavigationRoleAriaAttributeBodies = LandmarkRoleAriaAttributeBodies;

// none role
// It is same as presentation role
export type NoneRoleAriaAttributeBodies = PresentationRoleAriaAttributeBodies;

// note role
// Superclass role: section
export type NoteRoleAriaAttributeBodies = SectionRoleAriaAttributeBodies;

// option role
// Superclass role: input
export type OptionRoleAriaAttributeBodies = InputRoleAriaAttributeBodies &
  Pick<
    AriaAttributeBodies,
    | "selected" // required
    | "checked"
    | "posInSet"
    | "setSize"
  >;

// paragraph role
// Superclass role: section
export type ParagraphRoleAriaAttributeBodies = Omit<
  SectionRoleAriaAttributeBodies,
  "label" | "labelledBy"
> & {
  label?: undefined;
  labelledBy?: undefined;
};

// presentation role
// Superclass role: structure
export type PresentationRoleAriaAttributeBodies = Omit<
  StructureRoleAriaAttributeBodies,
  "label" | "labelledBy"
> & {
  // prohibited attributes
  label?: undefined;
  labelledBy?: undefined;
};

// progressbar role
// Superclass role: range, widget
export type ProgressbarRoleAriaAttributeBodies = RangeRoleAriaAttributeBodies &
  WidgetRoleAriaAttributeBodies;

// radio role
// Superclass role: input
export type RadioRoleAriaAttributeBodies = InputRoleAriaAttributeBodies &
  Pick<
    AriaAttributeBodies,
    | "checked" // required
    | "posInSet"
    | "setSize"
  >;

// radiogroup role
// Superclass role: select
export type RadiogroupRoleAriaAttributeBodies = SelectRoleAriaAttributeBodies &
  Pick<
    AriaAttributeBodies,
    "errorMessage" | "invalid" | "readOnly" | "required"
  >;

// range role
// Superclass role: structure
// abstract role
type RangeRoleAriaAttributeBodies = StructureRoleAriaAttributeBodies &
  Pick<
    AriaAttributeBodies,
    | "valueMax"
    | "valueMin"
    | "valueNow" // required
    | "valueText"
  >;

// region role
// Superclass role: landmark
export type RegionRoleAriaAttributeBodies = LandmarkRoleAriaAttributeBodies;

// row role
// Superclass role: group, widget
export type RowRoleAriaAttributeBodies = GroupRoleAriaAttributeBodies &
  WidgetRoleAriaAttributeBodies &
  Pick<
    AriaAttributeBodies,
    | "colIndex"
    | "expanded"
    | "level"
    | "posInSet"
    | "rowIndex"
    | "setSize"
    | "selected"
  >;

// rowgroup role
// Superclass role: struture
export type RowgroupRoleAriaAttributeBodies = StructureRoleAriaAttributeBodies;

// rowheader role
// Superclass role: cell, gridcell, sectionhead
export type RowheaderRoleAriaAttributeBodies = CellRoleAriaAttributeBodies &
  GridcellRoleAriaAttributeBodies &
  SectionheadRoleAriaAttributeBodies &
  Pick<AriaAttributeBodies, "sort">;

// scrollbar role
// Superclass role: range, widget
export type ScrollbarRoleAriaAttributeBodies = RangeRoleAriaAttributeBodies &
  WidgetRoleAriaAttributeBodies &
  Pick<
    AriaAttributeBodies,
    | "controls" // required
    | "disabled"
    | "orientation"
  >;

// search role
// Superclass role: landmark
export type SearchRoleAriaAttributeBodies = LandmarkRoleAriaAttributeBodies;

// searchbox role
// Superclass role: textbox
export type SearchboxRoleAriaAttributeBodies = TextboxRoleAriaAttributeBodies;

// section role
// Superclass role: structure
// abstract role
type SectionRoleAriaAttributeBodies = StructureRoleAriaAttributeBodies;

// sectionhead role
type SectionheadRoleAriaAttributeBodies = StructureRoleAriaAttributeBodies;

// select role
// Superclass role: composite, group
// abstract role
type SelectRoleAriaAttributeBodies = CompositeRoleAriaAttributeBodies &
  GroupRoleAriaAttributeBodies &
  Pick<AriaAttributeBodies, "orientation">;

// separator role (focusable)
// Superclass role: widget
export type SeparatorRoleAriaAttributeBodies = WidgetRoleAriaAttributeBodies &
  Pick<
    AriaAttributeBodies,
    | "valueNow" // only focusable
    | "disabled" // only focusable
    | "orientation"
    | "valueMax" // only focusable
    | "valueMin" // only focusable
    | "valueText" // only focusable
  >;

// separator role (non-focusable)
// Superclass role: structure
export type SeparatorNonFocusableRoleAriaAttributeBodies =
  StructureRoleAriaAttributeBodies & Pick<AriaAttributeBodies, "orientation">;

// slider role
// Superclass role: input, range
export type SliderRoleAriaAttributeBodies = RangeRoleAriaAttributeBodies &
  InputRoleAriaAttributeBodies &
  Pick<
    AriaAttributeBodies,
    "errorMessage" | "hasPopup" | "invalid" | "orientation" | "readOnly"
  >;

// Superclass role: composite, input, range
export type SpinbuttonRoleAriaAttributeBodies =
  CompositeRoleAriaAttributeBodies &
    InputRoleAriaAttributeBodies &
    RangeRoleAriaAttributeBodies &
    Pick<
      AriaAttributeBodies,
      "errorMessage" | "invalid" | "readOnly" | "required"
    >;

// status role
// Superclass role: section
export type StatusRoleAriaAttributeBodies = SectionRoleAriaAttributeBodies;

// strong role
// Superclass role: section
export type StrongRoleAriaAttributeBodies = Omit<
  SectionRoleAriaAttributeBodies,
  "label" | "labelledBy"
> & {
  label?: undefined;
  labelledBy?: undefined;
};

//subscript role
// Superclass role: section
export type SubscriptRoleAriaAttributeBodies = Omit<
  SectionRoleAriaAttributeBodies,
  "label" | "labelledBy"
> & {
  label?: undefined;
  labelledBy?: undefined;
};

// superscript role
// Superclass role: section
export type SuperscriptRoleAriaAttributeBodies = Omit<
  SectionRoleAriaAttributeBodies,
  "label" | "labelledBy"
> & {
  label?: undefined;
  labelledBy?: undefined;
};

// switch role
// Superclass role: checkbox
export type SwitchRoleAriaAttributeBodies = CheckboxRoleAriaAttributeBodies &
  Pick<
    AriaAttributeBodies,
    "checked" // required
  >;

// tab role
// Superclass role: sectionhead, widget
export type TabRoleAriaAttributeBodies = SectionheadRoleAriaAttributeBodies &
  WidgetRoleAriaAttributeBodies &
  Pick<
    AriaAttributeBodies,
    "disabled" | "expanded" | "hasPopup" | "posInSet" | "selected" | "setSize"
  >;

// table role
// superclass role: section
export type TableRoleAriaAttributeBodies = SectionRoleAriaAttributeBodies &
  Pick<AriaAttributeBodies, "colCount" | "rowCount">;

// tablist role
// Superclass role: composite
export type TablistRoleAriaAttributeBodies = CompositeRoleAriaAttributeBodies &
  Pick<AriaAttributeBodies, "multiSelectable" | "orientation">;

// tabpanel role
// Superclass role: section
export type TabpanelRoleAriaAttributeBodies = SectionRoleAriaAttributeBodies;

// term role
// Superclass role: section
export type TermRoleAriaAttributeBodies = SectionRoleAriaAttributeBodies;

// textbox role
// Superclass role: input
export type TextboxRoleAriaAttributeBodies = InputRoleAriaAttributeBodies &
  Pick<
    AriaAttributeBodies,
    | "activeDescendant"
    | "autoComplete"
    | "controls"
    | "errorMessage"
    | "hasPopup"
    | "invalid"
    | "multiLine"
    | "placeholder"
    | "readOnly"
    | "required"
  >;

// time role
// Superclass role: section
export type TimeRoleAriaAttributeBodies = SectionRoleAriaAttributeBodies;

// timer role
// Superclass role: status
export type TimerRoleAriaAttributeBodies = StatusRoleAriaAttributeBodies;

// toolbar role
// Superclass role: group
export type ToolbarRoleAriaAttributeBodies = GroupRoleAriaAttributeBodies &
  Pick<AriaAttributeBodies, "orientation">;

// tooltip role
// Superclass role: section
export type TooltipRoleAriaAttributeBodies = SectionRoleAriaAttributeBodies;

// tree role
// Superclass role: select
export type TreeRoleAriaAttributeBodies = SelectRoleAriaAttributeBodies &
  Pick<
    AriaAttributeBodies,
    "errorMessage" | "invalid" | "multiSelectable" | "required"
  >;

// treegrid role
// Superclass role: grid, tree
export type TreegridRoleAriaAttributeBodies = GridRoleAriaAttributeBodies &
  TreeRoleAriaAttributeBodies;

// treeitem role
// Superclass role: listitem, option
export type TreeitemRoleAriaAttributeBodies = ListitemRoleAriaAttributeBodies &
  OptionRoleAriaAttributeBodies &
  Pick<AriaAttributeBodies, "expanded" | "hasPopup">;
