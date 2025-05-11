import { describe, test, assertType } from "vitest";
import * as B from "./RoleAttributeBodies";
import { AriaAttributeBodies } from "../AriaAttributes";

const globalAttributes: AriaAttributeBodies = {
  atomic: true,
  busy: true,
  controls: "string",
  current: "page",
  describedBy: "string",
  details: "string",
  disabled: true,
  dropEffect: "copy",
  errorMessage: "string",
  flowTo: "string",
  grabbed: true,
  hasPopup: "menu",
  hidden: true,
  invalid: "spelling",
  keyShortcuts: "string",
  label: "string",
  labelledBy: "string",
  live: "polite",
  owns: "string",
  relevant: "additions removals text",
  roleDescription: "string",
};

describe("AlertRoleAriaAttributeBodies", () => {
  test("global attributes", () => {
    assertType<B.AlertRoleAriaAttributeBodies>(globalAttributes);
  });
});

describe("AlertdialogRoleAriaAttributeBodies", () => {
  test("global attributes", () => {
    assertType<B.AlertdialogRoleAriaAttributeBodies>(globalAttributes);
  });
  test("global attributes with modal", () => {
    assertType<B.AlertdialogRoleAriaAttributeBodies>({
      ...globalAttributes,
      modal: true,
    });
  });
});

describe("ApplicationRoleAriaAttributeBodies", () => {
  test("attributes", () => {
    assertType<B.ApplicationRoleAriaAttributeBodies>({
      ...globalAttributes,
      activeDescendant: "string",
      disabled: true,
      errorMessage: "string",
      expanded: true,
      hasPopup: "menu",
      invalid: true,
    });
  });
});

describe("ArticleRoleAriaAttributeBodies", () => {
  test("attributes", () => {
    assertType<B.ArticleRoleAriaAttributeBodies>({
      ...globalAttributes,
      posInSet: 1,
      setSize: 1,
    });
  });
});

describe("BannerRoleAriaAttributeBodies", () => {
  test("global attributes", () => {
    assertType<B.BannerRoleAriaAttributeBodies>(globalAttributes);
  });
});

describe("BlockquoteRoleAriaAttributeBodies", () => {
  test("global attributes", () => {
    assertType<B.BlockquoteRoleAriaAttributeBodies>(globalAttributes);
  });
});

describe("ButtonRoleAriaAttributeBodies", () => {
  test("global attributes", () => {
    assertType<B.ButtonRoleAriaAttributeBodies>(globalAttributes);
  });
  test("global attributes with more", () => {
    assertType<B.ButtonRoleAriaAttributeBodies>({
      ...globalAttributes,
      disabled: true,
      hasPopup: "menu",
      expanded: true,
      pressed: true,
    });
  });
});

describe("CaptionRoleAriaAttributeBodies", () => {
  test("global attributes", () => {
    // @ts-expect-error label and labelledBy are not allowed
    assertType<B.CaptionRoleAriaAttributeBodies>(globalAttributes);
  });

  test("global attributes without label and labelledBy", () => {
    assertType<B.CaptionRoleAriaAttributeBodies>({
      ...globalAttributes,
      label: undefined,
      labelledBy: undefined,
    });
  });
});

describe("CellRoleAriaAttributeBodies", () => {
  test("global attributes", () => {
    assertType<B.CellRoleAriaAttributeBodies>(globalAttributes);
  });
  test("global attributes with more", () => {
    assertType<B.CellRoleAriaAttributeBodies>({
      ...globalAttributes,
      colIndex: 1,
      colSpan: 1,
      rowIndex: 1,
      rowSpan: 1,
    });
  });
});

describe("CheckboxRoleAriaAttributeBodies", () => {
  test("global attributes", () => {
    assertType<B.CheckboxRoleAriaAttributeBodies>(globalAttributes);
  });
  test("global attributes with more", () => {
    assertType<B.CheckboxRoleAriaAttributeBodies>({
      ...globalAttributes,
      disabled: true,
      checked: "mixed",
      errorMessage: "string",
      expanded: true,
      invalid: true,
      readOnly: true,
      required: true,
    });
  });
});

describe("CodeRoleAriaAttributeBodies", () => {
  test("global attributes", () => {
    assertType<B.CodeRoleAriaAttributeBodies>(globalAttributes);
  });
});

describe("ColumnHeaderRoleAriaAttributeBodies", () => {
  test("global attributes", () => {
    assertType<B.ColumnheaderRoleAriaAttributeBodies>(globalAttributes);
  });
  test("global attributes with more", () => {
    assertType<B.ColumnheaderRoleAriaAttributeBodies>({
      ...globalAttributes,
      colIndex: 1,
      colSpan: 1,
      rowIndex: 1,
      rowSpan: 1,
      disabled: true,
      errorMessage: "string",
      expanded: true,
      hasPopup: "menu",
      invalid: true,
      readOnly: true,
      required: true,
      selected: true,
      sort: "ascending",
    });
  });
});

describe("ComboboxRoleAriaAttributeBodies", () => {
  test("global attributes", () => {
    assertType<B.ComboboxRoleAriaAttributeBodies>(globalAttributes);
  });
  test("global attributes with more", () => {
    assertType<B.ComboboxRoleAriaAttributeBodies>({
      ...globalAttributes,
      disabled: true,
      controls: "string",
      expanded: true,
      activeDescendant: "string",
      autoComplete: "inline",
      errorMessage: "string",
      hasPopup: "menu",
      invalid: true,
      readOnly: true,
      required: true,
    });
  });
});

describe("ComplementaryRoleAriaAttributeBodies", () => {
  test("global attributes", () => {
    assertType<B.ComplementaryRoleAriaAttributeBodies>(globalAttributes);
  });
});

describe("ContentinfoRoleAriaAttributeBodies", () => {
  test("global attributes", () => {
    assertType<B.ContentinfoRoleAriaAttributeBodies>(globalAttributes);
  });
});

describe("DefinitionRoleAriaAttributeBodies", () => {
  test("global attributes", () => {
    assertType<B.DefinitionRoleAriaAttributeBodies>(globalAttributes);
  });
});

describe("DeletionRoleAriaAttributeBodies", () => {
  test("global attributes", () => {
    // @ts-expect-error label and labelledBy are not allowed
    assertType<B.DeletionRoleAriaAttributeBodies>(globalAttributes);
  });

  test("global attributes without label and labelledBy", () => {
    assertType<B.DeletionRoleAriaAttributeBodies>({
      ...globalAttributes,
      label: undefined,
      labelledBy: undefined,
    });
  });
});

describe("DialogRoleAriaAttributeBodies", () => {
  test("global attributes", () => {
    assertType<B.DialogRoleAriaAttributeBodies>(globalAttributes);
  });
  test("global attributes with modal", () => {
    assertType<B.DialogRoleAriaAttributeBodies>({
      ...globalAttributes,
      modal: true,
    });
  });
});

describe("DirectoryRoleAriaAttributeBodies", () => {
  test("global attributes", () => {
    assertType<B.DirectoryRoleAriaAttributeBodies>(globalAttributes);
  });
});

describe("DocumentRoleAriaAttributeBodies", () => {
  test("attributes", () => {
    assertType<B.DocumentRoleAriaAttributeBodies>(globalAttributes);
  });
});

describe("EmphasisRoleAriaAttributeBodies", () => {
  test("global attributes", () => {
    // @ts-expect-error label and labelledBy are not allowed
    assertType<B.EmphasisRoleAriaAttributeBodies>(globalAttributes);
  });

  test("global attributes without label and labelledBy", () => {
    assertType<B.EmphasisRoleAriaAttributeBodies>({
      ...globalAttributes,
      label: undefined,
      labelledBy: undefined,
    });
  });
});

describe("FeedRoleAriaAttributeBodies", () => {
  test("global attributes", () => {
    assertType<B.FeedRoleAriaAttributeBodies>(globalAttributes);
  });
});

describe("FigureRoleAriaAttributeBodies", () => {
  test("global attributes", () => {
    assertType<B.FigureRoleAriaAttributeBodies>(globalAttributes);
  });
});

describe("FormRoleAriaAttributeBodies", () => {
  test("global attributes", () => {
    assertType<B.FormRoleAriaAttributeBodies>(globalAttributes);
  });
});

describe("GenericRoleAriaAttributeBodies", () => {
  test("global attributes", () => {
    // @ts-expect-error label, labelledBy, and roleDescription are not allowed
    assertType<B.GenericRoleAriaAttributeBodies>(globalAttributes);
  });
  test("global attributes without label, labelledBy, and roleDescription", () => {
    assertType<B.GenericRoleAriaAttributeBodies>({
      ...globalAttributes,
      label: undefined,
      labelledBy: undefined,
      roleDescription: undefined,
    });
  });
  test("some attributes", () => {
    assertType<B.GenericRoleAriaAttributeBodies>({
      atomic: true,
      live: "polite",
      relevant: "text removals",
    });
  });
});

describe("GridRoleAriaAttributeBodies", () => {
  test("global attributes", () => {
    assertType<B.GridRoleAriaAttributeBodies>(globalAttributes);
  });

  test("global attributes with more", () => {
    assertType<B.GridRoleAriaAttributeBodies>({
      ...globalAttributes,
      colCount: 1,
      rowCount: 1,
      multiSelectable: true,
      readOnly: true,
      disabled: true,
    });
  });
});

describe("GridcellRoleAriaAttributeBodies", () => {
  test("global attributes", () => {
    assertType<B.GridcellRoleAriaAttributeBodies>(globalAttributes);
  });

  test("global attributes with more", () => {
    assertType<B.GridcellRoleAriaAttributeBodies>({
      ...globalAttributes,
      colIndex: 1,
      colSpan: 1,
      rowIndex: 1,
      rowSpan: 1,
      disabled: true,
      errorMessage: "string",
      expanded: true,
      hasPopup: "menu",
      invalid: true,
      readOnly: true,
      required: true,
      selected: true,
    });
  });
});

describe("GroupRoleAriaAttributeBodies", () => {
  test("global attributes", () => {
    assertType<B.GroupRoleAriaAttributeBodies>(globalAttributes);
  });
  test("global attributes with more", () => {
    assertType<B.GroupRoleAriaAttributeBodies>({
      ...globalAttributes,
      activeDescendant: "string",
      disabled: true,
    });
  });
});

describe("HeadingRoleAriaAttributeBodies", () => {
  test("global attributes", () => {
    assertType<B.HeadingRoleAriaAttributeBodies>(globalAttributes);
  });
  test("global attributes with level", () => {
    assertType<B.HeadingRoleAriaAttributeBodies>({
      ...globalAttributes,
      level: 1,
    });
  });
});

describe("ImgRoleAriaAttributeBodies", () => {
  test("global attributes", () => {
    assertType<B.ImgRoleAriaAttributeBodies>(globalAttributes);
  });
});

describe("InsertionRoleAriaAttributeBodies", () => {
  test("global attributes", () => {
    // @ts-expect-error label and labelledBy are not allowed
    assertType<B.InsertionRoleAriaAttributeBodies>(globalAttributes);
  });

  test("global attributes without label and labelledBy", () => {
    assertType<B.InsertionRoleAriaAttributeBodies>({
      ...globalAttributes,
      label: undefined,
      labelledBy: undefined,
    });
  });
});

describe("LinkRoleAriaAttributeBodies", () => {
  test("global attributes", () => {
    assertType<B.LinkRoleAriaAttributeBodies>(globalAttributes);
  });
  test("global attributes with more", () => {
    assertType<B.LinkRoleAriaAttributeBodies>({
      ...globalAttributes,
      disabled: true,
      hasPopup: "menu",
      expanded: true,
    });
  });
});

describe("ListRoleAriaAttributeBodies", () => {
  test("global attributes", () => {
    assertType<B.ListRoleAriaAttributeBodies>(globalAttributes);
  });
});

describe("ListboxRoleAriaAttributeBodies", () => {
  test("global attributes", () => {
    assertType<B.ListboxRoleAriaAttributeBodies>(globalAttributes);
  });
  test("global attributes with more", () => {
    assertType<B.ListboxRoleAriaAttributeBodies>({
      ...globalAttributes,
      activeDescendant: "string",
      orientation: "horizontal",
      disabled: true,
      errorMessage: "string",
      expanded: true,
      invalid: true,
      multiSelectable: true,
      readOnly: true,
      required: true,
    });
  });
});

describe("ListitemRoleAriaAttributeBodies", () => {
  test("global attributes", () => {
    assertType<B.ListitemRoleAriaAttributeBodies>(globalAttributes);
  });
  test("global attributes with more", () => {
    assertType<B.ListitemRoleAriaAttributeBodies>({
      ...globalAttributes,
      level: 1,
      posInSet: 1,
      setSize: 1,
    });
  });
});

describe("LogRoleAriaAttributeBodies", () => {
  test("global attributes", () => {
    assertType<B.LogRoleAriaAttributeBodies>(globalAttributes);
  });
});

describe("MainRoleAriaAttributeBodies", () => {
  test("global attributes", () => {
    assertType<B.MainRoleAriaAttributeBodies>(globalAttributes);
  });
});

describe("MarqueeRoleAriaAttributeBodies", () => {
  test("global attributes", () => {
    assertType<B.MarqueeRoleAriaAttributeBodies>(globalAttributes);
  });
});

describe("MathRoleAriaAttributeBodies", () => {
  test("global attributes", () => {
    assertType<B.MathRoleAriaAttributeBodies>(globalAttributes);
  });
});

describe("MeterRoleAriaAttributeBodies", () => {
  test("global attributes", () => {
    assertType<B.MeterRoleAriaAttributeBodies>(globalAttributes);
  });
  test("global attributes with values", () => {
    assertType<B.MeterRoleAriaAttributeBodies>({
      ...globalAttributes,
      valueMax: 1,
      valueMin: 1,
      valueNow: 1,
      valueText: "string",
    });
  });
});

describe("MenuRoleAriaAttributeBodies", () => {
  test("global attributes", () => {
    assertType<B.MenuRoleAriaAttributeBodies>(globalAttributes);
  });
  test("global attributes with more", () => {
    assertType<B.MenuRoleAriaAttributeBodies>({
      ...globalAttributes,
      activeDescendant: "string",
      disabled: true,
      orientation: "horizontal",
    });
  });
});

describe("MenubarRoleAriaAttributeBodies", () => {
  test("global attributes", () => {
    assertType<B.MenubarRoleAriaAttributeBodies>(globalAttributes);
  });
  test("global attributes with more", () => {
    assertType<B.MenubarRoleAriaAttributeBodies>({
      ...globalAttributes,
      activeDescendant: "string",
      disabled: true,
      orientation: "horizontal",
    });
  });
});

describe("MenuItemRoleAriaAttributeBodies", () => {
  test("global attributes", () => {
    assertType<B.MenuitemRoleAriaAttributeBodies>(globalAttributes);
  });

  test("global attributes with more", () => {
    assertType<B.MenuitemRoleAriaAttributeBodies>({
      ...globalAttributes,
      disabled: true,
      hasPopup: "menu",
      expanded: true,
      posInSet: 1,
      setSize: 1,
    });
  });
});

describe("MenuitemcheckboxRoleAriaAttributeBodies", () => {
  test("global attributes", () => {
    assertType<B.MenuitemcheckboxRoleAriaAttributeBodies>(globalAttributes);
  });
  test("global attributes with more", () => {
    assertType<B.MenuitemcheckboxRoleAriaAttributeBodies>({
      ...globalAttributes,
      disabled: true,
      hasPopup: "menu",
      expanded: true,
      checked: "mixed",
      posInSet: 1,
      setSize: 1,
    });
  });
});

describe("MenuitemradioRoleAriaAttributeBodies", () => {
  test("global attributes", () => {
    assertType<B.MenuitemradioRoleAriaAttributeBodies>(globalAttributes);
  });
  test("global attributes with more", () => {
    assertType<B.MenuitemradioRoleAriaAttributeBodies>({
      ...globalAttributes,
      disabled: true,
      hasPopup: "menu",
      expanded: true,
      checked: "mixed",
      posInSet: 1,
      setSize: 1,
    });
  });
});

describe("NavigationRoleAriaAttributeBodies", () => {
  test("global attributes", () => {
    assertType<B.NavigationRoleAriaAttributeBodies>(globalAttributes);
  });
});

describe("NoneRoleAriaAttributeBodies", () => {
  test("global attributes", () => {
    // @ts-expect-error label and labelledBy are not allowed
    assertType<B.NoneRoleAriaAttributeBodies>(globalAttributes);
  });
  test("global attributes without label and labelledBy", () => {
    assertType<B.NoneRoleAriaAttributeBodies>({
      ...globalAttributes,
      label: undefined,
      labelledBy: undefined,
    });
  });
  test("some attributes", () => {
    assertType<B.NoneRoleAriaAttributeBodies>({
      atomic: true,
      live: "polite",
      relevant: "text removals",
    });
  });
});

describe("NoteRoleAriaAttributeBodies", () => {
  test("global attributes", () => {
    assertType<B.NoteRoleAriaAttributeBodies>(globalAttributes);
  });
});

describe("OptionRoleAriaAttributeBodies", () => {
  test("global attributes", () => {
    assertType<B.OptionRoleAriaAttributeBodies>(globalAttributes);
  });
  test("global attributes with more", () => {
    assertType<B.OptionRoleAriaAttributeBodies>({
      ...globalAttributes,
      disabled: true,
      selected: true,
      posInSet: 1,
      setSize: 1,
      checked: "mixed",
    });
  });
});

describe("ParagraphRoleAriaAttributeBodies", () => {
  test("global attributes", () => {
    // @ts-expect-error label and labelledBy are not allowed
    assertType<B.ParagraphRoleAriaAttributeBodies>(globalAttributes);
  });

  test("global attributes without label and labelledBy", () => {
    assertType<B.ParagraphRoleAriaAttributeBodies>({
      ...globalAttributes,
      label: undefined,
      labelledBy: undefined,
    });
  });
});

describe("PresentationRoleAriaAttributeBodies", () => {
  test("global attributes", () => {
    // @ts-expect-error label and labelledBy are not allowed
    assertType<B.PresentationRoleAriaAttributeBodies>(globalAttributes);
  });
  test("global attributes without label and labelledBy", () => {
    assertType<B.PresentationRoleAriaAttributeBodies>({
      ...globalAttributes,
      label: undefined,
      labelledBy: undefined,
    });
  });
  test("some attributes", () => {
    assertType<B.PresentationRoleAriaAttributeBodies>({
      atomic: true,
      live: "polite",
      relevant: "text removals",
    });
  });
});

describe("ProgressbarRoleAriaAttributeBodies", () => {
  test("global attributes", () => {
    assertType<B.ProgressbarRoleAriaAttributeBodies>(globalAttributes);
  });
  test("global attributes with values", () => {
    assertType<B.ProgressbarRoleAriaAttributeBodies>({
      ...globalAttributes,
      valueMax: 1,
      valueMin: 1,
      valueNow: 1,
      valueText: "string",
    });
  });
});

describe("RadioRoleAriaAttributeBodies", () => {
  test("global attributes", () => {
    assertType<B.RadioRoleAriaAttributeBodies>(globalAttributes);
  });
  test("global attributes with more", () => {
    assertType<B.RadioRoleAriaAttributeBodies>({
      ...globalAttributes,
      disabled: true,
      checked: "mixed",
      posInSet: 1,
      setSize: 1,
    });
  });
});

describe("RadiogroupRoleAriaAttributeBodies", () => {
  test("global attributes", () => {
    assertType<B.RadiogroupRoleAriaAttributeBodies>(globalAttributes);
  });
  test("global attributes with more", () => {
    assertType<B.RadiogroupRoleAriaAttributeBodies>({
      ...globalAttributes,
      activeDescendant: "string",
      disabled: true,
      errorMessage: "string",
      invalid: true,
      readOnly: true,
      required: true,
    });
  });
});

describe("RegionRoleAriaAttributeBodies", () => {
  test("global attributes", () => {
    assertType<B.RegionRoleAriaAttributeBodies>(globalAttributes);
  });
});

describe("RowRoleAriaAttributeBodies", () => {
  test("global attributes", () => {
    assertType<B.RowRoleAriaAttributeBodies>(globalAttributes);
  });
  test("global attributes with more", () => {
    assertType<B.RowRoleAriaAttributeBodies>({
      ...globalAttributes,
      activeDescendant: "string",
      disabled: true,
      colIndex: 1,
      expanded: true,
      level: 1,
      posInSet: 1,
      rowIndex: 1,
      setSize: 1,
      selected: true,
    });
  });
});

describe("RowgroupRoleAriaAttributeBodies", () => {
  test("global attributes", () => {
    assertType<B.RowgroupRoleAriaAttributeBodies>(globalAttributes);
  });
});

describe("RowheaderRoleAriaAttributeBodies", () => {
  test("global attributes", () => {
    assertType<B.RowheaderRoleAriaAttributeBodies>(globalAttributes);
  });
  test("global attributes with more", () => {
    assertType<B.RowheaderRoleAriaAttributeBodies>({
      ...globalAttributes,
      colIndex: 1,
      colSpan: 1,
      rowIndex: 1,
      rowSpan: 1,
      disabled: true,
      errorMessage: "string",
      expanded: true,
      hasPopup: "menu",
      invalid: true,
      readOnly: true,
      required: true,
      selected: true,
      sort: "ascending",
    });
  });
});

describe("ScrollbarRoleAriaAttributeBodies", () => {
  test("global attributes", () => {
    assertType<B.ScrollbarRoleAriaAttributeBodies>(globalAttributes);
  });
  test("global attributes with more", () => {
    assertType<B.ScrollbarRoleAriaAttributeBodies>({
      ...globalAttributes,
      controls: "string",
      disabled: true,
      orientation: "horizontal",
      valueMax: 1,
      valueMin: 1,
      valueNow: 1,
      valueText: "string",
    });
  });
});

describe("SearchRoleAriaAttributeBodies", () => {
  test("global attributes", () => {
    assertType<B.SearchRoleAriaAttributeBodies>(globalAttributes);
  });
});

describe("SearchboxRoleAriaAttributeBodies", () => {
  test("global attributes", () => {
    assertType<B.SearchboxRoleAriaAttributeBodies>(globalAttributes);
  });
  test("global attributes with more", () => {
    assertType<B.SearchboxRoleAriaAttributeBodies>({
      ...globalAttributes,
      activeDescendant: "string",
      autoComplete: "inline",
      errorMessage: "string",
      hasPopup: "menu",
      invalid: true,
      multiLine: true,
      readOnly: true,
      required: true,
      disabled: true,
    });
  });
});

describe("SeparatorRoleAriaAttributeBodies", () => {
  test("global attributes", () => {
    assertType<B.SeparatorRoleAriaAttributeBodies>(globalAttributes);
  });

  test("global attributes with more", () => {
    assertType<B.SeparatorRoleAriaAttributeBodies>({
      ...globalAttributes,
      valueNow: 1,
      disabled: true,
      orientation: "horizontal",
      valueMax: 1,
      valueMin: 1,
      valueText: "string",
    });
  });
});

describe("SeparatorNonFocusableRoleAriaAttributeBodies", () => {
  test("global attributes", () => {
    assertType<B.SeparatorNonFocusableRoleAriaAttributeBodies>(
      globalAttributes,
    );
  });
  test("global attributes with valid attributes", () => {
    assertType<B.SeparatorNonFocusableRoleAriaAttributeBodies>({
      ...globalAttributes,
      disabled: true, // this is deprecated because of as global attribute
      orientation: "horizontal",
    });
  });
  test("global attributes with invalid attributes", () => {
    assertType<B.SeparatorNonFocusableRoleAriaAttributeBodies>({
      ...globalAttributes,
      //@ts-expect-error invalid attributes
      valueNow: 1,
      disabled: true,
      orientation: "horizontal",
      valueMax: 1,
      valueMin: 1,
      valueText: "string",
    });
  });
});

describe("SliderRoleAriaAttributeBodies", () => {
  test("global attributes", () => {
    assertType<B.SliderRoleAriaAttributeBodies>(globalAttributes);
  });
  test("global attributes with values", () => {
    assertType<B.SliderRoleAriaAttributeBodies>({
      ...globalAttributes,
      errorMessage: "string",
      hasPopup: "menu",
      invalid: true,
      orientation: "horizontal",
      readOnly: true,
      valueMax: 1,
      valueMin: 1,
      valueNow: 1,
      valueText: "string",
    });
  });
});

describe("SpinbuttonRoleAriaAttributeBodies", () => {
  test("global attributes", () => {
    assertType<B.SpinbuttonRoleAriaAttributeBodies>(globalAttributes);
  });
  test("global attributes with values", () => {
    assertType<B.SpinbuttonRoleAriaAttributeBodies>({
      ...globalAttributes,
      errorMessage: "string",
      invalid: true,
      readOnly: true,
      valueMax: 1,
      valueMin: 1,
      valueNow: 1,
      valueText: "string",
      activeDescendant: "string",
      disabled: true,
    });
  });
});

describe("StatusRoleAriaAttributeBodies", () => {
  test("global attributes", () => {
    assertType<B.StatusRoleAriaAttributeBodies>(globalAttributes);
  });
});

describe("StrongRoleAriaAttributeBodies", () => {
  test("global attributes", () => {
    // @ts-expect-error label and labelledBy are not allowed
    assertType<B.StrongRoleAriaAttributeBodies>(globalAttributes);
  });

  test("global attributes without label and labelledBy", () => {
    assertType<B.StrongRoleAriaAttributeBodies>({
      ...globalAttributes,
      label: undefined,
      labelledBy: undefined,
    });
  });
});

describe("SubscriptRoleAriaAttributeBodies", () => {
  test("global attributes", () => {
    // @ts-expect-error label and labelledBy are not allowed
    assertType<B.SubscriptRoleAriaAttributeBodies>(globalAttributes);
  });

  test("global attributes without label and labelledBy", () => {
    assertType<B.SubscriptRoleAriaAttributeBodies>({
      ...globalAttributes,
      label: undefined,
      labelledBy: undefined,
    });
  });
});

describe("SuperscriptRoleAriaAttributeBodies", () => {
  test("global attributes", () => {
    // @ts-expect-error label and labelledBy are not allowed
    assertType<B.SuperscriptRoleAriaAttributeBodies>(globalAttributes);
  });

  test("global attributes without label and labelledBy", () => {
    assertType<B.SuperscriptRoleAriaAttributeBodies>({
      ...globalAttributes,
      label: undefined,
      labelledBy: undefined,
    });
  });
});

describe("SwitchRoleAriaAttributeBodies", () => {
  test("global attributes", () => {
    assertType<B.SwitchRoleAriaAttributeBodies>(globalAttributes);
  });
  test("global attributes with more", () => {
    assertType<B.SwitchRoleAriaAttributeBodies>({
      ...globalAttributes,
      disabled: true,
      checked: "mixed",
      errorMessage: "string",
      hasPopup: "menu",
      invalid: true,
      readOnly: true,
      required: true,
    });
  });
});

describe("TabRoleAriaAttributeBodies", () => {
  test("global attributes", () => {
    assertType<B.TabRoleAriaAttributeBodies>(globalAttributes);
  });
  test("global attributes with more", () => {
    assertType<B.TabRoleAriaAttributeBodies>({
      ...globalAttributes,
      disabled: true,
      expanded: true,
      selected: true,
      posInSet: 1,
      setSize: 1,
    });
  });
});

describe("TableRoleAriaAttributeBodies", () => {
  test("global attributes", () => {
    assertType<B.TableRoleAriaAttributeBodies>(globalAttributes);
  });
  test("global attributes with more", () => {
    assertType<B.TableRoleAriaAttributeBodies>({
      ...globalAttributes,
      colCount: 1,
      rowCount: 1,
    });
  });
});

describe("TablistRoleAriaAttributeBodies", () => {
  test("global attributes", () => {
    assertType<B.TablistRoleAriaAttributeBodies>(globalAttributes);
  });
  test("global attributes with more", () => {
    assertType<B.TablistRoleAriaAttributeBodies>({
      ...globalAttributes,
      multiSelectable: true,
      orientation: "horizontal",
      activeDescendant: "string",
    });
  });
});

describe("TabpanelRoleAriaAttributeBodies", () => {
  test("global attributes", () => {
    assertType<B.TabpanelRoleAriaAttributeBodies>(globalAttributes);
  });
});

describe("TermRoleAriaAttributeBodies", () => {
  test("global attributes", () => {
    assertType<B.TermRoleAriaAttributeBodies>(globalAttributes);
  });
});

describe("TextboxRoleAriaAttributeBodies", () => {
  test("global attributes", () => {
    assertType<B.TextboxRoleAriaAttributeBodies>(globalAttributes);
  });
  test("global attributes with more", () => {
    assertType<B.TextboxRoleAriaAttributeBodies>({
      ...globalAttributes,
      activeDescendant: "string",
      autoComplete: "inline",
      errorMessage: "string",
      hasPopup: "menu",
      invalid: true,
      multiLine: true,
      readOnly: true,
      required: true,
      disabled: true,
    });
  });
});

describe("TimeRoleAriaAttributeBodies", () => {
  test("global attributes", () => {
    assertType<B.TimeRoleAriaAttributeBodies>(globalAttributes);
  });
});

describe("TimerRoleAriaAttributeBodies", () => {
  test("global attributes", () => {
    assertType<B.TimerRoleAriaAttributeBodies>(globalAttributes);
  });
});

describe("ToolbarRoleAriaAttributeBodies", () => {
  test("global attributes", () => {
    assertType<B.ToolbarRoleAriaAttributeBodies>(globalAttributes);
  });
  test("global attributes with more", () => {
    assertType<B.ToolbarRoleAriaAttributeBodies>({
      ...globalAttributes,
      orientation: "horizontal",
      activeDescendant: "string",
      disabled: true,
    });
  });
});

describe("TooltipRoleAriaAttributeBodies", () => {
  test("global attributes", () => {
    assertType<B.TooltipRoleAriaAttributeBodies>(globalAttributes);
  });
});

describe("TreeRoleAriaAttributeBodies", () => {
  test("global attributes", () => {
    assertType<B.TreeRoleAriaAttributeBodies>(globalAttributes);
  });
  test("global attributes with more", () => {
    assertType<B.TreeRoleAriaAttributeBodies>({
      ...globalAttributes,
      errorMessage: "string",
      invalid: true,
      multiSelectable: true,
      required: true,
    });
  });
});

describe("TreegridRoleAriaAttributeBodies", () => {
  test("global attributes", () => {
    assertType<B.TreegridRoleAriaAttributeBodies>(globalAttributes);
  });
  test("global attributes with more", () => {
    assertType<B.TreegridRoleAriaAttributeBodies>({
      ...globalAttributes,
      activeDescendant: "string",
      colCount: 1,
      rowCount: 1,
      multiSelectable: true,
      readOnly: true,
      disabled: true,
    });
  });
});

describe("TreeitemRoleAriaAttributeBodies", () => {
  test("global attributes", () => {
    assertType<B.TreeitemRoleAriaAttributeBodies>(globalAttributes);
  });
  test("global attributes with more", () => {
    assertType<B.TreeitemRoleAriaAttributeBodies>({
      ...globalAttributes,
      level: 1,
      posInSet: 1,
      setSize: 1,
      expanded: true,
      selected: true,
    });
  });
});
