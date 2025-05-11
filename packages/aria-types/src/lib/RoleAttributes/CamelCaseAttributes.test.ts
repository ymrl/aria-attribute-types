import { describe, test, assertType } from "vitest";
import * as C from "./CamelCaseAttributes";
import { CamelCaseAriaAttributes } from "../AriaAttributes";
const globalAttributes: CamelCaseAriaAttributes = {
  ariaAtomic: true,
  ariaBusy: true,
  ariaControls: "string",
  ariaCurrent: "page",
  ariaDescribedBy: "string",
  ariaDetails: "string",
  ariaDisabled: true,
  ariaDropEffect: "copy",
  ariaErrorMessage: "string",
  ariaFlowTo: "string",
  ariaGrabbed: true,
  ariaHasPopup: "menu",
  ariaHidden: true,
  ariaInvalid: "spelling",
  ariaKeyShortcuts: "string",
  ariaLabel: "string",
  ariaLabelledBy: "string",
  ariaLive: "polite",
  ariaOwns: "string",
  ariaRelevant: "additions removals text",
  ariaRoleDescription: "string",
} as const;

describe("AlertRoleAriaAttributes", () => {
  test("global attributes", () => {
    assertType<C.CamelCaseAlertRoleAriaAttributes>(globalAttributes);
  });
  test("blank attributes", () => {
    assertType<C.CamelCaseAlertRoleAriaAttributes>({});
  });
});

describe("AlertdialogRoleAriaAttributes", () => {
  test("global attributes", () => {
    assertType<C.CamelCaseAlertdialogRoleAriaAttributes>(globalAttributes);
  });

  test("specific attributes", () => {
    assertType<C.CamelCaseAlertdialogRoleAriaAttributes>({
      ariaModal: true,
    });
  });
});

describe("ApplicationRoleAriaAttributes", () => {
  test("global attributes", () => {
    assertType<C.CamelCaseApplicationRoleAriaAttributes>(globalAttributes);
  });

  test("specific attributes", () => {
    assertType<C.CamelCaseApplicationRoleAriaAttributes>({
      ariaActiveDescendant: "string",
      ariaDisabled: true,
      ariaErrorMessage: "string",
      ariaExpanded: true,
      ariaHasPopup: "menu",
      ariaInvalid: "spelling",
    });
  });
});

describe("ArticleRoleAriaAttributes", () => {
  test("global attributes", () => {
    assertType<C.CamelCaseArticleRoleAriaAttributes>(globalAttributes);
  });

  test("specific attributes", () => {
    assertType<C.CamelCaseArticleRoleAriaAttributes>({
      ariaPosInSet: 1,
      ariaSetSize: 1,
    });
  });
});

describe("BannerRoleAriaAttributes", () => {
  test("global attributes", () => {
    assertType<C.CamelCaseBannerRoleAriaAttributes>(globalAttributes);
  });
});

describe("BlockquoteRoleAriaAttributes", () => {
  test("global attributes", () => {
    assertType<C.CamelCaseBlockquoteRoleAriaAttributes>(globalAttributes);
  });
});

describe("ButtonRoleAriaAttributes", () => {
  test("global attributes", () => {
    assertType<C.CamelCaseButtonRoleAriaAttributes>(globalAttributes);
  });

  test("specific attributes", () => {
    assertType<C.CamelCaseButtonRoleAriaAttributes>({
      ariaDisabled: true,
      ariaHasPopup: "menu",
      ariaExpanded: true,
      ariaPressed: true,
    });
  });
});

describe("CaptionRoleAriaAttributes", () => {
  test("global attributes", () => {
    // @ts-expect-error aria-label and aria-labelledby are not allowed
    assertType<C.CamelCaseCaptionRoleAriaAttributes>(globalAttributes);
  });

  test("global attributes without aria-label and aria-labelledby", () => {
    assertType<C.CamelCaseCaptionRoleAriaAttributes>({
      ...globalAttributes,
      ariaLabel: undefined,
      ariaLabelledBy: undefined,
    });
  });
});
describe("CellRoleAriaAttributes", () => {
  test("global attributes", () => {
    assertType<C.CamelCaseCellRoleAriaAttributes>(globalAttributes);
  });

  test("specific attributes", () => {
    assertType<C.CamelCaseCellRoleAriaAttributes>({
      ariaColIndex: 1,
      ariaColSpan: 1,
      ariaRowIndex: 1,
      ariaRowSpan: 1,
    });
  });
});

describe("CheckboxRoleAriaAttributes", () => {
  test("global attributes", () => {
    assertType<C.CamelCaseCheckboxRoleAriaAttributes>(globalAttributes);
  });

  test("specific attributes", () => {
    assertType<C.CamelCaseCheckboxRoleAriaAttributes>({
      ariaChecked: true,
      ariaErrorMessage: "string",
      ariaExpanded: true,
      ariaInvalid: "spelling",
      ariaReadOnly: true,
    });
  });
});

describe("CodeRoleAriaAttributes", () => {
  test("global attributes", () => {
    assertType<C.CamelCaseCodeRoleAriaAttributes>(globalAttributes);
  });
});

describe("ColumnheaderRoleAriaAttributes", () => {
  test("global attributes", () => {
    assertType<C.CamelCaseColumnheaderRoleAriaAttributes>(globalAttributes);
  });

  test("specific attributes", () => {
    assertType<C.CamelCaseColumnheaderRoleAriaAttributes>({
      ariaColIndex: 1,
      ariaColSpan: 1,
    });
  });
});

describe("ComboboxRoleAriaAttributes", () => {
  test("global attributes", () => {
    assertType<C.CamelCaseComboboxRoleAriaAttributes>(globalAttributes);
  });

  test("specific attributes", () => {
    assertType<C.CamelCaseComboboxRoleAriaAttributes>({
      ariaControls: "string",
      ariaExpanded: true,
      ariaActiveDescendant: "string",
      ariaAutoComplete: "list",
      ariaErrorMessage: "string",
      ariaHasPopup: "listbox",
      ariaInvalid: "spelling",
      ariaReadOnly: true,
    });
  });
});

describe("ComplementaryRoleAriaAttributes", () => {
  test("global attributes", () => {
    assertType<C.CamelCaseComplementaryRoleAriaAttributes>(globalAttributes);
  });
});

describe("ContentinfoRoleAriaAttributes", () => {
  test("global attributes", () => {
    assertType<C.CamelCaseContentinfoRoleAriaAttributes>(globalAttributes);
  });
});

describe("DefinitionRoleAriaAttributes", () => {
  test("global attributes", () => {
    assertType<C.CamelCaseDefinitionRoleAriaAttributes>(globalAttributes);
  });
});

describe("DeletionRoleAriaAttributes", () => {
  test("global attributes", () => {
    // @ts-expect-error aria-label and aria-labelledby are not allowed
    assertType<C.CamelCaseDeletionRoleAriaAttributes>(globalAttributes);
  });

  test("global attributes without aria-label and aria-labelledby", () => {
    assertType<C.CamelCaseDeletionRoleAriaAttributes>({
      ...globalAttributes,
      ariaLabel: undefined,
      ariaLabelledBy: undefined,
    });
  });
});

describe("DialogRoleAriaAttributes", () => {
  test("global attributes", () => {
    assertType<C.CamelCaseDialogRoleAriaAttributes>(globalAttributes);
  });

  test("specific attributes", () => {
    assertType<C.CamelCaseDialogRoleAriaAttributes>({
      ariaModal: true,
    });
  });
});

describe("DirectoryRoleAriaAttributes", () => {
  test("global attributes", () => {
    assertType<C.CamelCaseDirectoryRoleAriaAttributes>(globalAttributes);
  });
});

describe("DocumentRoleAriaAttributes", () => {
  test("global attributes", () => {
    assertType<C.CamelCaseDocumentRoleAriaAttributes>(globalAttributes);
  });
});

describe("EmphasisRoleAriaAttributes", () => {
  test("global attributes", () => {
    // @ts-expect-error aria-label and aria-labelledBy are not allowed
    assertType<C.CamelCaseEmphasisRoleAriaAttributes>(globalAttributes);
  });

  test("global attributes without aria-label and aria-labelledby", () => {
    assertType<C.CamelCaseEmphasisRoleAriaAttributes>({
      ...globalAttributes,
      ariaLabel: undefined,
      ariaLabelledBy: undefined,
    });
  });
});

describe("FeedRoleAriaAttributes", () => {
  test("global attributes", () => {
    assertType<C.CamelCaseFeedRoleAriaAttributes>(globalAttributes);
  });
});

describe("FigureRoleAriaAttributes", () => {
  test("global attributes", () => {
    assertType<C.CamelCaseFigureRoleAriaAttributes>(globalAttributes);
  });
});

describe("FormRoleAriaAttributes", () => {
  test("global attributes", () => {
    assertType<C.CamelCaseFormRoleAriaAttributes>(globalAttributes);
  });
});

describe("GenericRoleAriaAttributes", () => {
  test("global attributes", () => {
    // @ts-expect-error aria-label, aria-labelledby and aria-roledescription are not allowed
    assertType<C.CamelCaseGenericRoleAriaAttributes>(globalAttributes);
  });

  test("global attributes without aria-label, aria-labelledby and aria-roledescription", () => {
    assertType<C.CamelCaseGenericRoleAriaAttributes>({
      ...globalAttributes,
      ariaLabel: undefined,
      ariaLabelledBy: undefined,
      ariaRoleDescription: undefined,
    });
  });

  test("empty attributes", () => {
    assertType<C.CamelCaseGenericRoleAriaAttributes>({});
  });
});

describe("GridRoleAriaAttributes", () => {
  test("global attributes", () => {
    assertType<C.CamelCaseGridRoleAriaAttributes>(globalAttributes);
  });

  test("specific attributes", () => {
    assertType<C.CamelCaseGridRoleAriaAttributes>({
      ariaMultiSelectable: true,
      ariaReadOnly: true,
      ariaActiveDescendant: "string",
      ariaColCount: 1,
      ariaRowCount: 1,
    });
  });
});

describe("GridcellRoleAriaAttributes", () => {
  test("global attributes", () => {
    assertType<C.CamelCaseGridcellRoleAriaAttributes>(globalAttributes);
  });

  test("specific attributes", () => {
    assertType<C.CamelCaseGridcellRoleAriaAttributes>({
      ariaColIndex: 1,
      ariaColSpan: 1,
      ariaRowIndex: 1,
      ariaRowSpan: 1,
    });
  });
});

describe("GroupRoleAriaAttributes", () => {
  test("global attributes", () => {
    assertType<C.CamelCaseGroupRoleAriaAttributes>(globalAttributes);
  });

  test("specific attributes", () => {
    assertType<C.CamelCaseGroupRoleAriaAttributes>({
      ariaActiveDescendant: "string",
      ariaDisabled: true,
    });
  });
});

describe("HeadingRoleAriaAttributes", () => {
  test("global attributes", () => {
    assertType<C.CamelCaseHeadingRoleAriaAttributes>(globalAttributes);
  });

  test("specific attributes", () => {
    assertType<C.CamelCaseHeadingRoleAriaAttributes>({
      ariaLevel: 1,
    });
  });
});

describe("ImgRoleAriaAttributes", () => {
  test("global attributes", () => {
    assertType<C.CamelCaseImgRoleAriaAttributes>(globalAttributes);
  });
});

describe("InsertionRoleAriaAttributes", () => {
  test("global attributes", () => {
    // @ts-expect-error aria-label and aria-labelledby are not allowed
    assertType<C.CamelCaseInsertionRoleAriaAttributes>(globalAttributes);
  });

  test("global attributes without aria-label and aria-labelledby", () => {
    assertType<C.CamelCaseInsertionRoleAriaAttributes>({
      ...globalAttributes,
      ariaLabel: undefined,
      ariaLabelledBy: undefined,
    });
  });
});

describe("LinkRoleAriaAttributes", () => {
  test("global attributes", () => {
    assertType<C.CamelCaseLinkRoleAriaAttributes>(globalAttributes);
  });

  test("specific attributes", () => {
    assertType<C.CamelCaseLinkRoleAriaAttributes>({
      ariaDisabled: true,
      ariaExpanded: true,
      ariaHasPopup: "menu",
      ariaCurrent: "page",
      ariaErrorMessage: "string",
      ariaInvalid: "spelling",
    });
  });
});

describe("ListRoleAriaAttributes", () => {
  test("global attributes", () => {
    assertType<C.CamelCaseListRoleAriaAttributes>(globalAttributes);
  });
});

describe("ListboxRoleAriaAttributes", () => {
  test("global attributes", () => {
    assertType<C.CamelCaseListboxRoleAriaAttributes>(globalAttributes);
  });

  test("specific attributes", () => {
    assertType<C.CamelCaseListboxRoleAriaAttributes>({
      ariaErrorMessage: "string",
      ariaExpanded: true,
      ariaInvalid: "spelling",
      ariaMultiSelectable: true,
      ariaReadOnly: true,
      ariaRequired: true,
      ariaActiveDescendant: "string",
      ariaDisabled: true,
    });
  });
});

describe("ListitemRoleAriaAttributes", () => {
  test("global attributes", () => {
    assertType<C.CamelCaseListitemRoleAriaAttributes>(globalAttributes);
  });

  test("specific attributes", () => {
    assertType<C.CamelCaseListitemRoleAriaAttributes>({
      ariaLevel: 1,
      ariaPosInSet: 1,
      ariaSetSize: 1,
    });
  });
});

describe("LogRoleAriaAttributes", () => {
  test("global attributes", () => {
    assertType<C.CamelCaseLogRoleAriaAttributes>(globalAttributes);
  });
});

describe("MainRoleAriaAttributes", () => {
  test("global attributes", () => {
    assertType<C.CamelCaseMainRoleAriaAttributes>(globalAttributes);
  });
});

describe("MarqueeRoleAriaAttributes", () => {
  test("global attributes", () => {
    assertType<C.CamelCaseMarqueeRoleAriaAttributes>(globalAttributes);
  });
});
describe("MathRoleAriaAttributes", () => {
  test("global attributes", () => {
    assertType<C.CamelCaseMathRoleAriaAttributes>(globalAttributes);
  });
});

describe("MeterRoleAriaAttributes", () => {
  test("global attributes", () => {
    assertType<C.CamelCaseMeterRoleAriaAttributes>(globalAttributes);
  });

  test("specific attributes", () => {
    assertType<C.CamelCaseMeterRoleAriaAttributes>({
      ariaValueNow: 1,
      ariaValueMin: 1,
      ariaValueMax: 1,
      ariaValueText: "string",
    });
  });
});

describe("MenuRoleAriaAttributes", () => {
  test("global attributes", () => {
    assertType<C.CamelCaseMenuRoleAriaAttributes>(globalAttributes);
  });

  test("specific attributes", () => {
    assertType<C.CamelCaseMenuRoleAriaAttributes>({
      ariaActiveDescendant: "string",
      ariaDisabled: true,
    });
  });
});

describe("MenubarRoleAriaAttributes", () => {
  test("global attributes", () => {
    assertType<C.CamelCaseMenubarRoleAriaAttributes>(globalAttributes);
  });
  test("specific attributes", () => {
    assertType<C.CamelCaseMenubarRoleAriaAttributes>({
      ariaActiveDescendant: "string",
      ariaDisabled: true,
    });
  });
});

describe("MenuitemRoleAriaAttributes", () => {
  test("global attributes", () => {
    assertType<C.CamelCaseMenuitemRoleAriaAttributes>(globalAttributes);
  });

  test("specific attributes", () => {
    assertType<C.CamelCaseMenuitemRoleAriaAttributes>({
      ariaDisabled: true,
      ariaExpanded: true,
      ariaHasPopup: "menu",
      ariaPosInSet: 1,
      ariaSetSize: 1,
    });
  });
});

describe("MenuitemcheckboxRoleAriaAttributes", () => {
  test("global attributes", () => {
    assertType<C.CamelCaseMenuitemcheckboxRoleAriaAttributes>(globalAttributes);
  });

  test("specific attributes", () => {
    assertType<C.CamelCaseMenuitemcheckboxRoleAriaAttributes>({
      ariaChecked: true,
      ariaDisabled: true,
      ariaExpanded: true,
      ariaHasPopup: "menu",
      ariaPosInSet: 1,
      ariaSetSize: 1,
    });
  });
});

describe("MenuitemradioRoleAriaAttributes", () => {
  test("global attributes", () => {
    assertType<C.CamelCaseMenuitemradioRoleAriaAttributes>(globalAttributes);
  });

  test("specific attributes", () => {
    assertType<C.CamelCaseMenuitemradioRoleAriaAttributes>({
      ariaChecked: true,
      ariaDisabled: true,
      ariaExpanded: true,
      ariaHasPopup: "menu",
      ariaPosInSet: 1,
      ariaSetSize: 1,
    });
  });
});

describe("NavigationRoleAriaAttributes", () => {
  test("global attributes", () => {
    assertType<C.CamelCaseNavigationRoleAriaAttributes>(globalAttributes);
  });
});

describe("NoneRoleAriaAttributes", () => {
  test("global attributes", () => {
    // @ts-expect-error aria-label and aria-labelledby are not allowed
    assertType<C.CamelCaseNoneRoleAriaAttributes>(globalAttributes);
  });

  test("global attributes without aria-label and aria-labelledby", () => {
    assertType<C.CamelCaseNoneRoleAriaAttributes>({
      ...globalAttributes,
      ariaLabel: undefined,
      ariaLabelledBy: undefined,
    });
  });
});

describe("NoteRoleAriaAttributes", () => {
  test("global attributes", () => {
    assertType<C.CamelCaseNoteRoleAriaAttributes>(globalAttributes);
  });
});

describe("OptionRoleAriaAttributes", () => {
  test("global attributes", () => {
    assertType<C.CamelCaseOptionRoleAriaAttributes>(globalAttributes);
  });

  test("specific attributes", () => {
    assertType<C.CamelCaseOptionRoleAriaAttributes>({
      ariaChecked: true,
      ariaPosInSet: 1,
      ariaSetSize: 1,
    });
  });
});

describe("ParagraphRoleAriaAttributes", () => {
  test("global attributes", () => {
    // @ts-expect-error aria-label and aria-labelledby are not allowed
    assertType<C.CamelCaseParagraphRoleAriaAttributes>(globalAttributes);
  });

  test("global attributes without aria-label and aria-labelledby", () => {
    assertType<C.CamelCaseParagraphRoleAriaAttributes>({
      ...globalAttributes,
      ariaLabel: undefined,
      ariaLabelledBy: undefined,
    });
  });
});

describe("PresentationRoleAriaAttributes", () => {
  test("global attributes", () => {
    // @ts-expect-error aria-label and aria-labelledby are not allowed
    assertType<C.CamelCasePresentationRoleAriaAttributes>(globalAttributes);
  });

  test("global attributes without aria-label and aria-labelledby", () => {
    assertType<C.CamelCasePresentationRoleAriaAttributes>({
      ...globalAttributes,
      ariaLabel: undefined,
      ariaLabelledBy: undefined,
    });
  });
});

describe("ProgressbarRoleAriaAttributes", () => {
  test("global attributes", () => {
    assertType<C.CamelCaseProgressbarRoleAriaAttributes>(globalAttributes);
  });

  test("specific attributes", () => {
    assertType<C.CamelCaseProgressbarRoleAriaAttributes>({
      ariaValueNow: 1,
      ariaValueMin: 1,
      ariaValueMax: 1,
      ariaValueText: "string",
    });
  });
});

describe("RadioRoleAriaAttributes", () => {
  test("global attributes", () => {
    assertType<C.CamelCaseRadioRoleAriaAttributes>(globalAttributes);
  });

  test("specific attributes", () => {
    assertType<C.CamelCaseRadioRoleAriaAttributes>({
      ariaChecked: true,
      ariaPosInSet: 1,
      ariaSetSize: 1,
      ariaErrorMessage: "string",
      ariaInvalid: "spelling",
    });
  });
});

describe("RadiogroupRoleAriaAttributes", () => {
  test("global attributes", () => {
    assertType<C.CamelCaseRadiogroupRoleAriaAttributes>(globalAttributes);
  });

  test("specific attributes", () => {
    assertType<C.CamelCaseRadiogroupRoleAriaAttributes>({
      ariaErrorMessage: "string",
      ariaInvalid: "spelling",
      ariaReadOnly: true,
      ariaRequired: true,
      ariaActiveDescendant: "string",
    });
  });
});

describe("RegionRoleAriaAttributes", () => {
  test("global attributes", () => {
    assertType<C.CamelCaseRegionRoleAriaAttributes>(globalAttributes);
  });
});

describe("RowRoleAriaAttributes", () => {
  test("global attributes", () => {
    assertType<C.CamelCaseRowRoleAriaAttributes>(globalAttributes);
  });

  test("specific attributes", () => {
    assertType<C.CamelCaseRowRoleAriaAttributes>({
      ariaActiveDescendant: "string",
      ariaColIndex: 1,
      ariaExpanded: true,
      ariaLevel: 1,
      ariaPosInSet: 1,
      ariaRowIndex: 1,
      ariaSetSize: 1,
      ariaSelected: true,
    });
  });
});

describe("RowgroupRoleAriaAttributes", () => {
  test("global attributes", () => {
    assertType<C.CamelCaseRowgroupRoleAriaAttributes>(globalAttributes);
  });
});

describe("RowheaderRoleAriaAttributes", () => {
  test("global attributes", () => {
    assertType<C.CamelCaseRowheaderRoleAriaAttributes>(globalAttributes);
  });

  test("specific attributes", () => {
    assertType<C.CamelCaseRowheaderRoleAriaAttributes>({
      ariaExpanded: true,
      ariaSort: "ascending",
      ariaColIndex: 1,
      ariaColSpan: 1,
      ariaRowIndex: 1,
      ariaRowSpan: 1,
    });
  });
});

describe("ScrollbarRoleAriaAttributes", () => {
  test("global attributes", () => {
    assertType<C.CamelCaseScrollbarRoleAriaAttributes>(globalAttributes);
  });

  test("specific attributes", () => {
    assertType<C.CamelCaseScrollbarRoleAriaAttributes>({
      ariaControls: "string",
      ariaValueNow: 1,
      ariaDisabled: true,
      ariaOrientation: "horizontal",
      ariaValueMin: 1,
      ariaValueMax: 1,
      ariaValueText: "string",
    });
  });
});

describe("SearchRoleAriaAttributes", () => {
  test("global attributes", () => {
    assertType<C.CamelCaseSearchRoleAriaAttributes>(globalAttributes);
  });
});

describe("SearchboxRoleAriaAttributes", () => {
  test("global attributes", () => {
    assertType<C.CamelCaseSearchboxRoleAriaAttributes>(globalAttributes);
  });

  test("specific attributes", () => {
    assertType<C.CamelCaseSearchboxRoleAriaAttributes>({
      ariaActiveDescendant: "string",
      ariaAutoComplete: "list",
      ariaControls: "string",
      ariaHasPopup: "listbox",
      ariaInvalid: "spelling",
      ariaReadOnly: true,
    });
  });
});

describe("SeparatorRoleAriaAttributes", () => {
  test("global attributes", () => {
    assertType<C.CamelCaseSeparatorRoleAriaAttributes>(globalAttributes);
  });

  test("specific attributes", () => {
    assertType<C.CamelCaseSeparatorRoleAriaAttributes>({
      ariaDisabled: true,
      ariaOrientation: "horizontal",
      ariaValueNow: 1,
      ariaValueMin: 1,
      ariaValueMax: 1,
    });
  });
});

describe("SeparatorNonFocusableRoleAriaAttributes", () => {
  test("global attributes", () => {
    assertType<C.CamelCaseSeparatorNonFocusableRoleAriaAttributes>(
      globalAttributes,
    );
  });

  test("specific attributes", () => {
    assertType<C.CamelCaseSeparatorNonFocusableRoleAriaAttributes>({
      ariaDisabled: true,
      ariaOrientation: "horizontal",
    });
  });

  test("prohibited attributes", () => {
    assertType<C.CamelCaseSeparatorNonFocusableRoleAriaAttributes>({
      // @ts-expect-error aria-valuenow is not allowed
      ariaValueNow: 1,
    });
    assertType<C.CamelCaseSeparatorNonFocusableRoleAriaAttributes>({
      // @ts-expect-error aria-valuemin is not allowed
      ariaValueMin: 1,
    });
    assertType<C.CamelCaseSeparatorNonFocusableRoleAriaAttributes>({
      // @ts-expect-error aria-valuemax is not allowed
      ariaValueMax: 1,
    });
  });
});

describe("SliderRoleAriaAttributes", () => {
  test("global attributes", () => {
    assertType<C.CamelCaseSliderRoleAriaAttributes>(globalAttributes);
  });

  test("specific attributes", () => {
    assertType<C.CamelCaseSliderRoleAriaAttributes>({
      ariaValueNow: 1,
      ariaHasPopup: "menu",
      ariaInvalid: "spelling",
      ariaOrientation: "horizontal",
      ariaReadOnly: true,
      ariaValueMin: 1,
      ariaValueMax: 1,
      ariaValueText: "string",
    });
  });
});

describe("SpinbuttonRoleAriaAttributes", () => {
  test("global attributes", () => {
    assertType<C.CamelCaseSpinbuttonRoleAriaAttributes>(globalAttributes);
  });

  test("specific attributes", () => {
    assertType<C.CamelCaseSpinbuttonRoleAriaAttributes>({
      ariaErrorMessage: "string",
      ariaInvalid: "spelling",
      ariaReadOnly: true,
      ariaRequired: true,
      ariaValueNow: 1,
      ariaValueMin: 1,
      ariaValueMax: 1,
      ariaValueText: "string",
    });
  });
});

describe("StatusRoleAriaAttributes", () => {
  test("global attributes", () => {
    assertType<C.CamelCaseStatusRoleAriaAttributes>(globalAttributes);
  });
});

describe("StrongRoleAriaAttributes", () => {
  test("global attributes", () => {
    // @ts-expect-error aria-label and aria-labelledby are not allowed
    assertType<C.CamelCaseStrongRoleAriaAttributes>(globalAttributes);
  });

  test("global attributes without aria-label and aria-labelledby", () => {
    assertType<C.CamelCaseStrongRoleAriaAttributes>({
      ...globalAttributes,
      ariaLabel: undefined,
      ariaLabelledBy: undefined,
    });
  });
});
describe("SubscriptRoleAriaAttributes", () => {
  test("global attributes", () => {
    // @ts-expect-error aria-label and aria-labelledby are not allowed
    assertType<C.CamelCaseSubscriptRoleAriaAttributes>(globalAttributes);
  });

  test("global attributes without aria-label and aria-labelledby", () => {
    assertType<C.CamelCaseSubscriptRoleAriaAttributes>({
      ...globalAttributes,
      ariaLabel: undefined,
      ariaLabelledBy: undefined,
    });
  });
});

describe("SuperscriptRoleAriaAttributes", () => {
  test("global attributes", () => {
    // @ts-expect-error aria-label and aria-labelledby are not allowed
    assertType<C.CamelCaseSuperscriptRoleAriaAttributes>(globalAttributes);
  });

  test("global attributes without aria-label and aria-labelledby", () => {
    assertType<C.CamelCaseSuperscriptRoleAriaAttributes>({
      ...globalAttributes,
      ariaLabel: undefined,
      ariaLabelledBy: undefined,
    });
  });
});

describe("SwitchRoleAriaAttributes", () => {
  test("global attributes", () => {
    assertType<C.CamelCaseSwitchRoleAriaAttributes>(globalAttributes);
  });

  test("specific attributes", () => {
    assertType<C.CamelCaseSwitchRoleAriaAttributes>({
      ariaChecked: true,
      ariaErrorMessage: "string",
      ariaExpanded: true,
      ariaInvalid: "spelling",
      ariaReadOnly: true,
    });
  });
});

describe("TabRoleAriaAttributes", () => {
  test("global attributes", () => {
    assertType<C.CamelCaseTabRoleAriaAttributes>(globalAttributes);
  });

  test("specific attributes", () => {
    assertType<C.CamelCaseTabRoleAriaAttributes>({
      ariaDisabled: true,
      ariaExpanded: true,
      ariaHasPopup: "menu",
      ariaPosInSet: 1,
      ariaSelected: true,
      ariaSetSize: 1,
      ariaControls: "string",
    });
  });
});

describe("TableRoleAriaAttributes", () => {
  test("global attributes", () => {
    assertType<C.CamelCaseTableRoleAriaAttributes>(globalAttributes);
  });

  test("specific attributes", () => {
    assertType<C.CamelCaseTableRoleAriaAttributes>({
      ariaColCount: 1,
      ariaRowCount: 1,
    });
  });
});

describe("TablistRoleAriaAttributes", () => {
  test("global attributes", () => {
    assertType<C.CamelCaseTablistRoleAriaAttributes>(globalAttributes);
  });

  test("specific attributes", () => {
    assertType<C.CamelCaseTablistRoleAriaAttributes>({
      ariaMultiSelectable: true,
      ariaOrientation: "horizontal",
      ariaControls: "string",
      ariaActiveDescendant: "string",
    });
  });
});

describe("TabpanelRoleAriaAttributes", () => {
  test("global attributes", () => {
    assertType<C.CamelCaseTabpanelRoleAriaAttributes>(globalAttributes);
  });
});

describe("TermRoleAriaAttributes", () => {
  test("global attributes", () => {
    assertType<C.CamelCaseTermRoleAriaAttributes>(globalAttributes);
  });
});

describe("TextboxRoleAriaAttributes", () => {
  test("global attributes", () => {
    assertType<C.CamelCaseTextboxRoleAriaAttributes>(globalAttributes);
  });

  test("specific attributes", () => {
    assertType<C.CamelCaseTextboxRoleAriaAttributes>({
      ariaActiveDescendant: "string",
      ariaAutoComplete: "list",
      ariaErrorMessage: "string",
      ariaHasPopup: "listbox",
      ariaInvalid: "spelling",
      ariaMultiLine: true,
      ariaPlaceholder: "string",
      ariaReadOnly: true,
      ariaRequired: true,
    });
  });
});

describe("TimeRoleAriaAttributes", () => {
  test("global attributes", () => {
    assertType<C.CamelCaseTimeRoleAriaAttributes>(globalAttributes);
  });
});

describe("TimerRoleAriaAttributes", () => {
  test("global attributes", () => {
    assertType<C.CamelCaseTimerRoleAriaAttributes>(globalAttributes);
  });
});

describe("ToolbarRoleAriaAttributes", () => {
  test("global attributes", () => {
    assertType<C.CamelCaseToolbarRoleAriaAttributes>(globalAttributes);
  });

  test("specific attributes", () => {
    assertType<C.CamelCaseToolbarRoleAriaAttributes>({
      ariaControls: "string",
      ariaOrientation: "horizontal",
    });
  });
});

describe("TooltipRoleAriaAttributes", () => {
  test("global attributes", () => {
    assertType<C.CamelCaseTooltipRoleAriaAttributes>(globalAttributes);
  });
});

describe("TreeRoleAriaAttributes", () => {
  test("global attributes", () => {
    assertType<C.CamelCaseTreeRoleAriaAttributes>(globalAttributes);
  });

  test("specific attributes", () => {
    assertType<C.CamelCaseTreeRoleAriaAttributes>({
      ariaErrorMessage: "string",
      ariaInvalid: "spelling",
      ariaMultiSelectable: true,
      ariaRequired: true,
      ariaActiveDescendant: "string",
    });
  });
});

describe("TreegridRoleAriaAttributes", () => {
  test("global attributes", () => {
    assertType<C.CamelCaseTreegridRoleAriaAttributes>(globalAttributes);
  });

  test("specific attributes", () => {
    assertType<C.CamelCaseTreegridRoleAriaAttributes>({
      ariaActiveDescendant: "string",
      ariaColCount: 1,
      ariaMultiSelectable: true,
      ariaReadOnly: true,
      ariaRowCount: 1,
    });
  });
});

describe("TreeitemRoleAriaAttributes", () => {
  test("global attributes", () => {
    assertType<C.CamelCaseTreeitemRoleAriaAttributes>(globalAttributes);
  });

  test("specific attributes", () => {
    assertType<C.CamelCaseTreeitemRoleAriaAttributes>({
      ariaExpanded: true,
      ariaLevel: 1,
      ariaPosInSet: 1,
      ariaSetSize: 1,
    });
  });
});
