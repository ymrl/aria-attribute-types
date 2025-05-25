import { describe, test, assertType } from "vitest";
import * as K from "./KebabCaseAttributes";
import { KebabCaseAriaAttributes } from "../AriaAttributes";
const globalAttributes: KebabCaseAriaAttributes = {
  "aria-atomic": true,
  "aria-busy": true,
  "aria-controls": "string",
  "aria-current": "page",
  "aria-describedby": "string",
  "aria-details": "string",
  "aria-disabled": true,
  "aria-dropeffect": "copy",
  "aria-errormessage": "string",
  "aria-flowto": "string",
  "aria-grabbed": true,
  "aria-haspopup": "menu",
  "aria-hidden": true,
  "aria-invalid": "spelling",
  "aria-keyshortcuts": "string",
  "aria-label": "string",
  "aria-labelledby": "string",
  "aria-live": "polite",
  "aria-owns": "string",
  "aria-relevant": "additions removals text",
  "aria-roledescription": "string",
};

describe("AlertRoleAriaAttributes", () => {
  test("global attributes", () => {
    assertType<K.KebabCaseAlertRoleAriaAttributes>(globalAttributes);
  });
  test("blank attributes", () => {
    assertType<K.KebabCaseAlertRoleAriaAttributes>({});
  });
});

describe("AlertdialogRoleAriaAttributes", () => {
  test("global attributes", () => {
    assertType<K.KebabCaseAlertdialogRoleAriaAttributes>(globalAttributes);
  });

  test("specific attributes", () => {
    assertType<K.KebabCaseAlertdialogRoleAriaAttributes>({
      "aria-modal": true,
    });
  });
});

describe("ApplicationRoleAriaAttributes", () => {
  test("global attributes", () => {
    assertType<K.KebabCaseApplicationRoleAriaAttributes>(globalAttributes);
  });

  test("specific attributes", () => {
    assertType<K.KebabCaseApplicationRoleAriaAttributes>({
      "aria-activedescendant": "string",
      "aria-disabled": true,
      "aria-errormessage": "string",
      "aria-expanded": true,
      "aria-haspopup": "menu",
      "aria-invalid": "spelling",
    });
  });
});

describe("ArticleRoleAriaAttributes", () => {
  test("global attributes", () => {
    assertType<K.KebabCaseArticleRoleAriaAttributes>(globalAttributes);
  });

  test("specific attributes", () => {
    assertType<K.KebabCaseArticleRoleAriaAttributes>({
      "aria-posinset": 1,
      "aria-setsize": 1,
    });
  });
});

describe("BannerRoleAriaAttributes", () => {
  test("global attributes", () => {
    assertType<K.KebabCaseBannerRoleAriaAttributes>(globalAttributes);
  });
});

describe("BlockquoteRoleAriaAttributes", () => {
  test("global attributes", () => {
    assertType<K.KebabCaseBlockquoteRoleAriaAttributes>(globalAttributes);
  });
});

describe("ButtonRoleAriaAttributes", () => {
  test("global attributes", () => {
    assertType<K.KebabCaseButtonRoleAriaAttributes>(globalAttributes);
  });

  test("specific attributes", () => {
    assertType<K.KebabCaseButtonRoleAriaAttributes>({
      "aria-disabled": true,
      "aria-haspopup": "menu",
      "aria-expanded": true,
      "aria-pressed": true,
    });
  });
});

describe("CaptionRoleAriaAttributes", () => {
  test("global attributes", () => {
    // @ts-expect-error aria-label and aria-labelledby are not allowed
    assertType<K.KebabCaseCaptionRoleAriaAttributes>(globalAttributes);
  });

  test("global attributes without aria-label and aria-labelledby", () => {
    assertType<K.KebabCaseCaptionRoleAriaAttributes>({
      ...globalAttributes,
      "aria-label": undefined,
      "aria-labelledby": undefined,
    });
  });
});
describe("CellRoleAriaAttributes", () => {
  test("global attributes", () => {
    assertType<K.KebabCaseCellRoleAriaAttributes>(globalAttributes);
  });

  test("specific attributes", () => {
    assertType<K.KebabCaseCellRoleAriaAttributes>({
      "aria-colindex": 1,
      "aria-colspan": 1,
      "aria-rowindex": 1,
      "aria-rowspan": 1,
    });
  });
});

describe("CheckboxRoleAriaAttributes", () => {
  test("global attributes", () => {
    assertType<K.KebabCaseCheckboxRoleAriaAttributes>(globalAttributes);
  });

  test("specific attributes", () => {
    assertType<K.KebabCaseCheckboxRoleAriaAttributes>({
      "aria-checked": true,
      "aria-errormessage": "string",
      "aria-expanded": true,
      "aria-invalid": "spelling",
      "aria-readonly": true,
    });
  });
});

describe("CodeRoleAriaAttributes", () => {
  test("global attributes", () => {
    // @ts-expect-error aria-label and aria-labelledby are not allowed
    assertType<K.KebabCaseCodeRoleAriaAttributes>(globalAttributes);
  });

  test("global attributes without aria-label and aria-labelledby", () => {
    assertType<K.KebabCaseCodeRoleAriaAttributes>({
      ...globalAttributes,
      "aria-label": undefined,
      "aria-labelledby": undefined,
    });
  });
});

describe("ColumnheaderRoleAriaAttributes", () => {
  test("global attributes", () => {
    assertType<K.KebabCaseColumnheaderRoleAriaAttributes>(globalAttributes);
  });

  test("specific attributes", () => {
    assertType<K.KebabCaseColumnheaderRoleAriaAttributes>({
      "aria-colindex": 1,
      "aria-colspan": 1,
    });
  });
});

describe("ComboboxRoleAriaAttributes", () => {
  test("global attributes", () => {
    assertType<K.KebabCaseComboboxRoleAriaAttributes>(globalAttributes);
  });

  test("specific attributes", () => {
    assertType<K.KebabCaseComboboxRoleAriaAttributes>({
      "aria-controls": "string",
      "aria-expanded": true,
      "aria-activedescendant": "string",
      "aria-autocomplete": "list",
      "aria-errormessage": "string",
      "aria-haspopup": "listbox",
      "aria-invalid": "spelling",
      "aria-readonly": true,
    });
  });
});

describe("ComplementaryRoleAriaAttributes", () => {
  test("global attributes", () => {
    assertType<K.KebabCaseComplementaryRoleAriaAttributes>(globalAttributes);
  });
});

describe("ContentinfoRoleAriaAttributes", () => {
  test("global attributes", () => {
    assertType<K.KebabCaseContentinfoRoleAriaAttributes>(globalAttributes);
  });
});

describe("DefinitionRoleAriaAttributes", () => {
  test("global attributes", () => {
    assertType<K.KebabCaseDefinitionRoleAriaAttributes>(globalAttributes);
  });
});

describe("DeletionRoleAriaAttributes", () => {
  test("global attributes", () => {
    // @ts-expect-error aria-label and aria-labelledby are not allowed
    assertType<K.KebabCaseDeletionRoleAriaAttributes>(globalAttributes);
  });

  test("global attributes without aria-label and aria-labelledby", () => {
    assertType<K.KebabCaseDeletionRoleAriaAttributes>({
      ...globalAttributes,
      "aria-label": undefined,
      "aria-labelledby": undefined,
    });
  });
});

describe("DialogRoleAriaAttributes", () => {
  test("global attributes", () => {
    assertType<K.KebabCaseDialogRoleAriaAttributes>(globalAttributes);
  });

  test("specific attributes", () => {
    assertType<K.KebabCaseDialogRoleAriaAttributes>({
      "aria-modal": true,
    });
  });
});

describe("DirectoryRoleAriaAttributes", () => {
  test("global attributes", () => {
    assertType<K.KebabCaseDirectoryRoleAriaAttributes>(globalAttributes);
  });
});

describe("DocumentRoleAriaAttributes", () => {
  test("global attributes", () => {
    assertType<K.KebabCaseDocumentRoleAriaAttributes>(globalAttributes);
  });
});

describe("EmphasisRoleAriaAttributes", () => {
  test("global attributes", () => {
    // @ts-expect-error aria-label and aria-labelledBy are not allowed
    assertType<K.KebabCaseEmphasisRoleAriaAttributes>(globalAttributes);
  });

  test("global attributes without aria-label and aria-labelledby", () => {
    assertType<K.KebabCaseEmphasisRoleAriaAttributes>({
      ...globalAttributes,
      "aria-label": undefined,
      "aria-labelledby": undefined,
    });
  });
});

describe("FeedRoleAriaAttributes", () => {
  test("global attributes", () => {
    assertType<K.KebabCaseFeedRoleAriaAttributes>(globalAttributes);
  });
});

describe("FigureRoleAriaAttributes", () => {
  test("global attributes", () => {
    assertType<K.KebabCaseFigureRoleAriaAttributes>(globalAttributes);
  });
});

describe("FormRoleAriaAttributes", () => {
  test("global attributes", () => {
    assertType<K.KebabCaseFormRoleAriaAttributes>(globalAttributes);
  });
});

describe("GenericRoleAriaAttributes", () => {
  test("global attributes", () => {
    // @ts-expect-error aria-label, aria-labelledby and aria-roledescription are not allowed
    assertType<K.KebabCaseGenericRoleAriaAttributes>(globalAttributes);
  });

  test("global attributes without aria-label, aria-labelledby and aria-roledescription", () => {
    assertType<K.KebabCaseGenericRoleAriaAttributes>({
      ...globalAttributes,
      "aria-label": undefined,
      "aria-labelledby": undefined,
      "aria-roledescription": undefined,
    });
  });

  test("empty attributes", () => {
    assertType<K.KebabCaseGenericRoleAriaAttributes>({});
  });
});

describe("GridRoleAriaAttributes", () => {
  test("global attributes", () => {
    assertType<K.KebabCaseGridRoleAriaAttributes>(globalAttributes);
  });

  test("specific attributes", () => {
    assertType<K.KebabCaseGridRoleAriaAttributes>({
      "aria-multiselectable": true,
      "aria-readonly": true,
      "aria-activedescendant": "string",
      "aria-colcount": 1,
      "aria-rowcount": 1,
    });
  });
});

describe("GridcellRoleAriaAttributes", () => {
  test("global attributes", () => {
    assertType<K.KebabCaseGridcellRoleAriaAttributes>(globalAttributes);
  });

  test("specific attributes", () => {
    assertType<K.KebabCaseGridcellRoleAriaAttributes>({
      "aria-colindex": 1,
      "aria-colspan": 1,
      "aria-rowindex": 1,
      "aria-rowspan": 1,
    });
  });
});

describe("GroupRoleAriaAttributes", () => {
  test("global attributes", () => {
    assertType<K.KebabCaseGroupRoleAriaAttributes>(globalAttributes);
  });

  test("specific attributes", () => {
    assertType<K.KebabCaseGroupRoleAriaAttributes>({
      "aria-activedescendant": "string",
      "aria-disabled": true,
    });
  });
});

describe("HeadingRoleAriaAttributes", () => {
  test("global attributes", () => {
    assertType<K.KebabCaseHeadingRoleAriaAttributes>(globalAttributes);
  });

  test("specific attributes", () => {
    assertType<K.KebabCaseHeadingRoleAriaAttributes>({
      "aria-level": 1,
    });
  });
});

describe("ImgRoleAriaAttributes", () => {
  test("global attributes", () => {
    assertType<K.KebabCaseImgRoleAriaAttributes>(globalAttributes);
  });
});

describe("InsertionRoleAriaAttributes", () => {
  test("global attributes", () => {
    // @ts-expect-error aria-label and aria-labelledby are not allowed
    assertType<K.KebabCaseInsertionRoleAriaAttributes>(globalAttributes);
  });

  test("global attributes without aria-label and aria-labelledby", () => {
    assertType<K.KebabCaseInsertionRoleAriaAttributes>({
      ...globalAttributes,
      "aria-label": undefined,
      "aria-labelledby": undefined,
    });
  });
});

describe("LinkRoleAriaAttributes", () => {
  test("global attributes", () => {
    assertType<K.KebabCaseLinkRoleAriaAttributes>(globalAttributes);
  });

  test("specific attributes", () => {
    assertType<K.KebabCaseLinkRoleAriaAttributes>({
      "aria-disabled": true,
      "aria-expanded": true,
      "aria-haspopup": "menu",
      "aria-current": "page",
      "aria-errormessage": "string",
      "aria-invalid": "spelling",
    });
  });
});

describe("ListRoleAriaAttributes", () => {
  test("global attributes", () => {
    assertType<K.KebabCaseListRoleAriaAttributes>(globalAttributes);
  });
});

describe("ListboxRoleAriaAttributes", () => {
  test("global attributes", () => {
    assertType<K.KebabCaseListboxRoleAriaAttributes>(globalAttributes);
  });

  test("specific attributes", () => {
    assertType<K.KebabCaseListboxRoleAriaAttributes>({
      "aria-errormessage": "string",
      "aria-expanded": true,
      "aria-invalid": "spelling",
      "aria-multiselectable": true,
      "aria-readonly": true,
      "aria-required": true,
      "aria-activedescendant": "string",
      "aria-disabled": true,
    });
  });
});

describe("ListitemRoleAriaAttributes", () => {
  test("global attributes", () => {
    assertType<K.KebabCaseListitemRoleAriaAttributes>(globalAttributes);
  });

  test("specific attributes", () => {
    assertType<K.KebabCaseListitemRoleAriaAttributes>({
      "aria-level": 1,
      "aria-posinset": 1,
      "aria-setsize": 1,
    });
  });
});

describe("LogRoleAriaAttributes", () => {
  test("global attributes", () => {
    assertType<K.KebabCaseLogRoleAriaAttributes>(globalAttributes);
  });
});

describe("MainRoleAriaAttributes", () => {
  test("global attributes", () => {
    assertType<K.KebabCaseMainRoleAriaAttributes>(globalAttributes);
  });
});

describe("MarqueeRoleAriaAttributes", () => {
  test("global attributes", () => {
    assertType<K.KebabCaseMarqueeRoleAriaAttributes>(globalAttributes);
  });
});
describe("MathRoleAriaAttributes", () => {
  test("global attributes", () => {
    assertType<K.KebabCaseMathRoleAriaAttributes>(globalAttributes);
  });
});

describe("MeterRoleAriaAttributes", () => {
  test("global attributes", () => {
    assertType<K.KebabCaseMeterRoleAriaAttributes>(globalAttributes);
  });

  test("specific attributes", () => {
    assertType<K.KebabCaseMeterRoleAriaAttributes>({
      "aria-valuenow": 1,
      "aria-valuemin": 1,
      "aria-valuemax": 1,
      "aria-valuetext": "string",
    });
  });
});

describe("MenuRoleAriaAttributes", () => {
  test("global attributes", () => {
    assertType<K.KebabCaseMenuRoleAriaAttributes>(globalAttributes);
  });

  test("specific attributes", () => {
    assertType<K.KebabCaseMenuRoleAriaAttributes>({
      "aria-activedescendant": "string",
      "aria-disabled": true,
    });
  });
});

describe("MenubarRoleAriaAttributes", () => {
  test("global attributes", () => {
    assertType<K.KebabCaseMenubarRoleAriaAttributes>(globalAttributes);
  });
  test("specific attributes", () => {
    assertType<K.KebabCaseMenubarRoleAriaAttributes>({
      "aria-activedescendant": "string",
      "aria-disabled": true,
    });
  });
});

describe("MenuitemRoleAriaAttributes", () => {
  test("global attributes", () => {
    assertType<K.KebabCaseMenuitemRoleAriaAttributes>(globalAttributes);
  });

  test("specific attributes", () => {
    assertType<K.KebabCaseMenuitemRoleAriaAttributes>({
      "aria-disabled": true,
      "aria-expanded": true,
      "aria-haspopup": "menu",
      "aria-posinset": 1,
      "aria-setsize": 1,
    });
  });
});

describe("MenuitemcheckboxRoleAriaAttributes", () => {
  test("global attributes", () => {
    assertType<K.KebabCaseMenuitemcheckboxRoleAriaAttributes>(globalAttributes);
  });

  test("specific attributes", () => {
    assertType<K.KebabCaseMenuitemcheckboxRoleAriaAttributes>({
      "aria-checked": true,
      "aria-disabled": true,
      "aria-expanded": true,
      "aria-haspopup": "menu",
      "aria-posinset": 1,
      "aria-setsize": 1,
    });
  });
});

describe("MenuitemradioRoleAriaAttributes", () => {
  test("global attributes", () => {
    assertType<K.KebabCaseMenuitemradioRoleAriaAttributes>(globalAttributes);
  });

  test("specific attributes", () => {
    assertType<K.KebabCaseMenuitemradioRoleAriaAttributes>({
      "aria-checked": true,
      "aria-disabled": true,
      "aria-expanded": true,
      "aria-haspopup": "menu",
      "aria-posinset": 1,
      "aria-setsize": 1,
    });
  });
});

describe("NavigationRoleAriaAttributes", () => {
  test("global attributes", () => {
    assertType<K.KebabCaseNavigationRoleAriaAttributes>(globalAttributes);
  });
});

describe("NoneRoleAriaAttributes", () => {
  test("global attributes", () => {
    // @ts-expect-error aria-label and aria-labelledby are not allowed
    assertType<K.KebabCaseNoneRoleAriaAttributes>(globalAttributes);
  });

  test("global attributes without aria-label and aria-labelledby", () => {
    assertType<K.KebabCaseNoneRoleAriaAttributes>({
      ...globalAttributes,
      "aria-label": undefined,
      "aria-labelledby": undefined,
    });
  });
});

describe("NoteRoleAriaAttributes", () => {
  test("global attributes", () => {
    assertType<K.KebabCaseNoteRoleAriaAttributes>(globalAttributes);
  });
});

describe("OptionRoleAriaAttributes", () => {
  test("global attributes", () => {
    assertType<K.KebabCaseOptionRoleAriaAttributes>(globalAttributes);
  });

  test("specific attributes", () => {
    assertType<K.KebabCaseOptionRoleAriaAttributes>({
      "aria-checked": true,
      "aria-posinset": 1,
      "aria-setsize": 1,
    });
  });
});

describe("ParagraphRoleAriaAttributes", () => {
  test("global attributes", () => {
    // @ts-expect-error aria-label and aria-labelledby are not allowed
    assertType<K.KebabCaseParagraphRoleAriaAttributes>(globalAttributes);
  });

  test("global attributes without aria-label and aria-labelledby", () => {
    assertType<K.KebabCaseParagraphRoleAriaAttributes>({
      ...globalAttributes,
      "aria-label": undefined,
      "aria-labelledby": undefined,
    });
  });
});

describe("PresentationRoleAriaAttributes", () => {
  test("global attributes", () => {
    // @ts-expect-error aria-label and aria-labelledby are not allowed
    assertType<K.KebabCasePresentationRoleAriaAttributes>(globalAttributes);
  });

  test("global attributes without aria-label and aria-labelledby", () => {
    assertType<K.KebabCasePresentationRoleAriaAttributes>({
      ...globalAttributes,
      "aria-label": undefined,
      "aria-labelledby": undefined,
    });
  });
});

describe("ProgressbarRoleAriaAttributes", () => {
  test("global attributes", () => {
    assertType<K.KebabCaseProgressbarRoleAriaAttributes>(globalAttributes);
  });

  test("specific attributes", () => {
    assertType<K.KebabCaseProgressbarRoleAriaAttributes>({
      "aria-valuenow": 1,
      "aria-valuemin": 1,
      "aria-valuemax": 1,
      "aria-valuetext": "string",
    });
  });
});

describe("RadioRoleAriaAttributes", () => {
  test("global attributes", () => {
    assertType<K.KebabCaseRadioRoleAriaAttributes>(globalAttributes);
  });

  test("specific attributes", () => {
    assertType<K.KebabCaseRadioRoleAriaAttributes>({
      "aria-checked": true,
      "aria-posinset": 1,
      "aria-setsize": 1,
      "aria-errormessage": "string",
      "aria-invalid": "spelling",
    });
  });
});

describe("RadiogroupRoleAriaAttributes", () => {
  test("global attributes", () => {
    assertType<K.KebabCaseRadiogroupRoleAriaAttributes>(globalAttributes);
  });

  test("specific attributes", () => {
    assertType<K.KebabCaseRadiogroupRoleAriaAttributes>({
      "aria-errormessage": "string",
      "aria-invalid": "spelling",
      "aria-readonly": true,
      "aria-required": true,
      "aria-activedescendant": "string",
    });
  });
});

describe("RegionRoleAriaAttributes", () => {
  test("global attributes", () => {
    assertType<K.KebabCaseRegionRoleAriaAttributes>(globalAttributes);
  });
});

describe("RowRoleAriaAttributes", () => {
  test("global attributes", () => {
    assertType<K.KebabCaseRowRoleAriaAttributes>(globalAttributes);
  });

  test("specific attributes", () => {
    assertType<K.KebabCaseRowRoleAriaAttributes>({
      "aria-activedescendant": "string",
      "aria-colindex": 1,
      "aria-expanded": true,
      "aria-level": 1,
      "aria-posinset": 1,
      "aria-rowindex": 1,
      "aria-setsize": 1,
      "aria-selected": true,
    });
  });
});

describe("RowgroupRoleAriaAttributes", () => {
  test("global attributes", () => {
    assertType<K.KebabCaseRowgroupRoleAriaAttributes>(globalAttributes);
  });
});

describe("RowheaderRoleAriaAttributes", () => {
  test("global attributes", () => {
    assertType<K.KebabCaseRowheaderRoleAriaAttributes>(globalAttributes);
  });

  test("specific attributes", () => {
    assertType<K.KebabCaseRowheaderRoleAriaAttributes>({
      "aria-expanded": true,
      "aria-sort": "ascending",
      "aria-colindex": 1,
      "aria-colspan": 1,
      "aria-rowindex": 1,
      "aria-rowspan": 1,
    });
  });
});

describe("ScrollbarRoleAriaAttributes", () => {
  test("global attributes", () => {
    assertType<K.KebabCaseScrollbarRoleAriaAttributes>(globalAttributes);
  });

  test("specific attributes", () => {
    assertType<K.KebabCaseScrollbarRoleAriaAttributes>({
      "aria-controls": "string",
      "aria-valuenow": 1,
      "aria-disabled": true,
      "aria-orientation": "horizontal",
      "aria-valuemin": 1,
      "aria-valuemax": 1,
      "aria-valuetext": "string",
    });
  });
});

describe("SearchRoleAriaAttributes", () => {
  test("global attributes", () => {
    assertType<K.KebabCaseSearchRoleAriaAttributes>(globalAttributes);
  });
});

describe("SearchboxRoleAriaAttributes", () => {
  test("global attributes", () => {
    assertType<K.KebabCaseSearchboxRoleAriaAttributes>(globalAttributes);
  });

  test("specific attributes", () => {
    assertType<K.KebabCaseSearchboxRoleAriaAttributes>({
      "aria-activedescendant": "string",
      "aria-autocomplete": "list",
      "aria-controls": "string",
      "aria-haspopup": "listbox",
      "aria-invalid": "spelling",
      "aria-readonly": true,
    });
  });
});

describe("SeparatorRoleAriaAttributes", () => {
  test("global attributes", () => {
    assertType<K.KebabCaseSeparatorRoleAriaAttributes>(globalAttributes);
  });

  test("specific attributes", () => {
    assertType<K.KebabCaseSeparatorRoleAriaAttributes>({
      "aria-disabled": true,
      "aria-orientation": "horizontal",
      "aria-valuenow": 1,
      "aria-valuemin": 1,
      "aria-valuemax": 1,
    });
  });
});

describe("SeparatorNonFocusableRoleAriaAttributes", () => {
  test("global attributes", () => {
    assertType<K.KebabCaseSeparatorNonFocusableRoleAriaAttributes>(
      globalAttributes,
    );
  });

  test("specific attributes", () => {
    assertType<K.KebabCaseSeparatorNonFocusableRoleAriaAttributes>({
      "aria-disabled": true,
      "aria-orientation": "horizontal",
    });
  });

  test("prohibited attributes", () => {
    assertType<K.KebabCaseSeparatorNonFocusableRoleAriaAttributes>({
      // @ts-expect-error aria-valuenow is not allowed
      "aria-valuenow": 1,
    });
    assertType<K.KebabCaseSeparatorNonFocusableRoleAriaAttributes>({
      // @ts-expect-error aria-valuemin is not allowed
      "aria-valuemin": 1,
    });
    assertType<K.KebabCaseSeparatorNonFocusableRoleAriaAttributes>({
      // @ts-expect-error aria-valuemax is not allowed
      "aria-valuemax": 1,
    });
  });
});

describe("SliderRoleAriaAttributes", () => {
  test("global attributes", () => {
    assertType<K.KebabCaseSliderRoleAriaAttributes>(globalAttributes);
  });

  test("specific attributes", () => {
    assertType<K.KebabCaseSliderRoleAriaAttributes>({
      "aria-valuenow": 1,
      "aria-haspopup": "menu",
      "aria-invalid": "spelling",
      "aria-orientation": "horizontal",
      "aria-readonly": true,
      "aria-valuemin": 1,
      "aria-valuemax": 1,
      "aria-valuetext": "string",
    });
  });
});

describe("SpinbuttonRoleAriaAttributes", () => {
  test("global attributes", () => {
    assertType<K.KebabCaseSpinbuttonRoleAriaAttributes>(globalAttributes);
  });

  test("specific attributes", () => {
    assertType<K.KebabCaseSpinbuttonRoleAriaAttributes>({
      "aria-errormessage": "string",
      "aria-invalid": "spelling",
      "aria-readonly": true,
      "aria-required": true,
      "aria-valuenow": 1,
      "aria-valuemin": 1,
      "aria-valuemax": 1,
      "aria-valuetext": "string",
    });
  });
});

describe("StatusRoleAriaAttributes", () => {
  test("global attributes", () => {
    assertType<K.KebabCaseStatusRoleAriaAttributes>(globalAttributes);
  });
});

describe("StrongRoleAriaAttributes", () => {
  test("global attributes", () => {
    // @ts-expect-error aria-label and aria-labelledby are not allowed
    assertType<K.KebabCaseStrongRoleAriaAttributes>(globalAttributes);
  });

  test("global attributes without aria-label and aria-labelledby", () => {
    assertType<K.KebabCaseStrongRoleAriaAttributes>({
      ...globalAttributes,
      "aria-label": undefined,
      "aria-labelledby": undefined,
    });
  });
});
describe("SubscriptRoleAriaAttributes", () => {
  test("global attributes", () => {
    // @ts-expect-error aria-label and aria-labelledby are not allowed
    assertType<K.KebabCaseSubscriptRoleAriaAttributes>(globalAttributes);
  });

  test("global attributes without aria-label and aria-labelledby", () => {
    assertType<K.KebabCaseSubscriptRoleAriaAttributes>({
      ...globalAttributes,
      "aria-label": undefined,
      "aria-labelledby": undefined,
    });
  });
});

describe("SuperscriptRoleAriaAttributes", () => {
  test("global attributes", () => {
    // @ts-expect-error aria-label and aria-labelledby are not allowed
    assertType<K.KebabCaseSuperscriptRoleAriaAttributes>(globalAttributes);
  });

  test("global attributes without aria-label and aria-labelledby", () => {
    assertType<K.KebabCaseSuperscriptRoleAriaAttributes>({
      ...globalAttributes,
      "aria-label": undefined,
      "aria-labelledby": undefined,
    });
  });
});

describe("SwitchRoleAriaAttributes", () => {
  test("global attributes", () => {
    assertType<K.KebabCaseSwitchRoleAriaAttributes>(globalAttributes);
  });

  test("specific attributes", () => {
    assertType<K.KebabCaseSwitchRoleAriaAttributes>({
      "aria-checked": true,
      "aria-errormessage": "string",
      "aria-expanded": true,
      "aria-invalid": "spelling",
      "aria-readonly": true,
    });
  });
});

describe("TabRoleAriaAttributes", () => {
  test("global attributes", () => {
    assertType<K.KebabCaseTabRoleAriaAttributes>(globalAttributes);
  });

  test("specific attributes", () => {
    assertType<K.KebabCaseTabRoleAriaAttributes>({
      "aria-disabled": true,
      "aria-expanded": true,
      "aria-haspopup": "menu",
      "aria-posinset": 1,
      "aria-selected": true,
      "aria-setsize": 1,
      "aria-controls": "string",
    });
  });
});

describe("TableRoleAriaAttributes", () => {
  test("global attributes", () => {
    assertType<K.KebabCaseTableRoleAriaAttributes>(globalAttributes);
  });

  test("specific attributes", () => {
    assertType<K.KebabCaseTableRoleAriaAttributes>({
      "aria-colcount": 1,
      "aria-rowcount": 1,
    });
  });
});

describe("TablistRoleAriaAttributes", () => {
  test("global attributes", () => {
    assertType<K.KebabCaseTablistRoleAriaAttributes>(globalAttributes);
  });

  test("specific attributes", () => {
    assertType<K.KebabCaseTablistRoleAriaAttributes>({
      "aria-multiselectable": true,
      "aria-orientation": "horizontal",
      "aria-controls": "string",
      "aria-activedescendant": "string",
    });
  });
});

describe("TabpanelRoleAriaAttributes", () => {
  test("global attributes", () => {
    assertType<K.KebabCaseTabpanelRoleAriaAttributes>(globalAttributes);
  });
});

describe("TermRoleAriaAttributes", () => {
  test("global attributes", () => {
    assertType<K.KebabCaseTermRoleAriaAttributes>(globalAttributes);
  });
});

describe("TextboxRoleAriaAttributes", () => {
  test("global attributes", () => {
    assertType<K.KebabCaseTextboxRoleAriaAttributes>(globalAttributes);
  });

  test("specific attributes", () => {
    assertType<K.KebabCaseTextboxRoleAriaAttributes>({
      "aria-activedescendant": "string",
      "aria-autocomplete": "list",
      "aria-errormessage": "string",
      "aria-haspopup": "listbox",
      "aria-invalid": "spelling",
      "aria-multiline": true,
      "aria-placeholder": "string",
      "aria-readonly": true,
      "aria-required": true,
    });
  });
});

describe("TimeRoleAriaAttributes", () => {
  test("global attributes", () => {
    assertType<K.KebabCaseTimeRoleAriaAttributes>(globalAttributes);
  });
});

describe("TimerRoleAriaAttributes", () => {
  test("global attributes", () => {
    assertType<K.KebabCaseTimerRoleAriaAttributes>(globalAttributes);
  });
});

describe("ToolbarRoleAriaAttributes", () => {
  test("global attributes", () => {
    assertType<K.KebabCaseToolbarRoleAriaAttributes>(globalAttributes);
  });

  test("specific attributes", () => {
    assertType<K.KebabCaseToolbarRoleAriaAttributes>({
      "aria-controls": "string",
      "aria-orientation": "horizontal",
    });
  });
});

describe("TooltipRoleAriaAttributes", () => {
  test("global attributes", () => {
    assertType<K.KebabCaseTooltipRoleAriaAttributes>(globalAttributes);
  });
});

describe("TreeRoleAriaAttributes", () => {
  test("global attributes", () => {
    assertType<K.KebabCaseTreeRoleAriaAttributes>(globalAttributes);
  });

  test("specific attributes", () => {
    assertType<K.KebabCaseTreeRoleAriaAttributes>({
      "aria-errormessage": "string",
      "aria-invalid": "spelling",
      "aria-multiselectable": true,
      "aria-required": true,
      "aria-activedescendant": "string",
    });
  });
});

describe("TreegridRoleAriaAttributes", () => {
  test("global attributes", () => {
    assertType<K.KebabCaseTreegridRoleAriaAttributes>(globalAttributes);
  });

  test("specific attributes", () => {
    assertType<K.KebabCaseTreegridRoleAriaAttributes>({
      "aria-activedescendant": "string",
      "aria-colcount": 1,
      "aria-multiselectable": true,
      "aria-readonly": true,
      "aria-rowcount": 1,
    });
  });
});

describe("TreeitemRoleAriaAttributes", () => {
  test("global attributes", () => {
    assertType<K.KebabCaseTreeitemRoleAriaAttributes>(globalAttributes);
  });

  test("specific attributes", () => {
    assertType<K.KebabCaseTreeitemRoleAriaAttributes>({
      "aria-expanded": true,
      "aria-level": 1,
      "aria-posinset": 1,
      "aria-setsize": 1,
    });
  });
});
