import { KebabCaseAriaAttributes } from "../AriaAttributes";
import * as C from "../RoleAttributes";

export type KebabCaseRoleAttributes =
  | ({ role?: undefined } & {
      [key in keyof KebabCaseAriaAttributes]?: undefined;
    })
  | ({ role: `${string} alert` | "alert" } & C.KebabCaseAlertRoleAriaAttributes)
  | ({
      role: `${string} alertdialog` | "alertdialog";
    } & C.KebabCaseAlertdialogRoleAriaAttributes)
  | ({
      role: `${string} application` | "application";
    } & C.KebabCaseApplicationRoleAriaAttributes)
  | ({
      role: `${string} article` | "article";
    } & C.KebabCaseArticleRoleAriaAttributes)
  | ({
      role: `${string} banner` | "banner";
    } & C.KebabCaseBannerRoleAriaAttributes)
  | ({
      role: `${string} blockquote` | "blockquote";
    } & C.KebabCaseBlockquoteRoleAriaAttributes)
  | ({
      role: `${string} button` | "button";
    } & C.KebabCaseButtonRoleAriaAttributes)
  | ({
      role: `${string} caption` | "caption";
    } & C.KebabCaseCaptionRoleAriaAttributes)
  | ({ role: `${string} cell` | "cell" } & C.KebabCaseCellRoleAriaAttributes)
  | ({
      role: `${string} checkbox` | "checkbox";
    } & C.KebabCaseCheckboxRoleAriaAttributes)
  | ({
      role: `${string} code` | "code";
    } & C.KebabCaseCodeRoleAriaAttributes)
  | ({
      role: `${string} columnheader` | "columnheader";
    } & C.KebabCaseColumnheaderRoleAriaAttributes)
  | ({
      role: `${string} combobox` | "combobox";
    } & C.KebabCaseComboboxRoleAriaAttributes)
  | ({
      role: `${string} complementary` | "complementary";
    } & C.KebabCaseComplementaryRoleAriaAttributes)
  | ({
      role: `${string} contentinfo` | "contentinfo";
    } & C.KebabCaseContentinfoRoleAriaAttributes)
  | ({
      role: `${string} definition` | "definition";
    } & C.KebabCaseDefinitionRoleAriaAttributes)
  | ({
      role: `${string} deletion` | "deletion";
    } & C.KebabCaseDeletionRoleAriaAttributes)
  | ({
      role: `${string} dialog` | "dialog";
    } & C.KebabCaseDialogRoleAriaAttributes)
  | ({
      role: `${string} directory` | "directory";
    } & C.KebabCaseDirectoryRoleAriaAttributes)
  | ({
      role: `${string} document` | "document";
    } & C.KebabCaseDocumentRoleAriaAttributes)
  | ({
      role: `${string} emphasis` | "emphasis";
    } & C.KebabCaseEmphasisRoleAriaAttributes)
  | ({ role: `${string} feed` | "feed" } & C.KebabCaseFeedRoleAriaAttributes)
  | ({
      role: `${string} figure` | "figure";
    } & C.KebabCaseFigureRoleAriaAttributes)
  | ({ role: `${string} form` | "form" } & C.KebabCaseFormRoleAriaAttributes)
  | ({
      role: `${string} generic` | "generic";
    } & C.KebabCaseGenericRoleAriaAttributes)
  | ({ role: `${string} grid` | "grid" } & C.KebabCaseGridRoleAriaAttributes)
  | ({
      role: `${string} gridcell` | "gridcell";
    } & C.KebabCaseGridcellRoleAriaAttributes)
  | ({ role: `${string} group` | "group" } & C.KebabCaseGroupRoleAriaAttributes)
  | ({
      role: `${string} heading` | "heading";
    } & C.KebabCaseHeadingRoleAriaAttributes)
  | ({ role: `${string} img` | "img" } & C.KebabCaseImgRoleAriaAttributes)
  | ({
      role: `${string} insertion` | "insertion";
    } & C.KebabCaseInsertionRoleAriaAttributes)
  | ({ role: `${string} link` | "link" } & C.KebabCaseLinkRoleAriaAttributes)
  | ({ role: `${string} list` | "list" } & C.KebabCaseListRoleAriaAttributes)
  | ({
      role: `${string} listbox` | "listbox";
    } & C.KebabCaseListboxRoleAriaAttributes)
  | ({
      role: `${string} listitem` | "listitem";
    } & C.KebabCaseListitemRoleAriaAttributes)
  | ({ role: `${string} log` | "log" } & C.KebabCaseLogRoleAriaAttributes)
  | ({ role: `${string} main` | "main" } & C.KebabCaseMainRoleAriaAttributes)
  | ({
      role: `${string} marquee` | "marquee";
    } & C.KebabCaseMarqueeRoleAriaAttributes)
  | ({ role: `${string} math` | "math" } & C.KebabCaseMathRoleAriaAttributes)
  | ({ role: `${string} meter` | "meter" } & C.KebabCaseMeterRoleAriaAttributes)
  | ({ role: `${string} menu` | "menu" } & C.KebabCaseMenuRoleAriaAttributes)
  | ({
      role: `${string} menubar` | "menubar";
    } & C.KebabCaseMenubarRoleAriaAttributes)
  | ({
      role: `${string} menuitem` | "menuitem";
    } & C.KebabCaseMenuitemRoleAriaAttributes)
  | ({
      role: `${string} menuitemcheckbox` | "menuitemcheckbox";
    } & C.KebabCaseMenuitemcheckboxRoleAriaAttributes)
  | ({
      role: `${string} menuitemradio` | "menuitemradio";
    } & C.KebabCaseMenuitemradioRoleAriaAttributes)
  | ({
      role: `${string} navigation` | "navigation";
    } & C.KebabCaseNavigationRoleAriaAttributes)
  | ({ role: `${string} none` | "none" } & C.KebabCaseNoneRoleAriaAttributes)
  | ({ role: `${string} note` | "note" } & C.KebabCaseNoteRoleAriaAttributes)
  | ({
      role: `${string} option` | "option";
    } & C.KebabCaseOptionRoleAriaAttributes)
  | ({
      role: `${string} paragraph` | "paragraph";
    } & C.KebabCaseParagraphRoleAriaAttributes)
  | ({
      role: `${string} presentation` | "presentation";
    } & C.KebabCasePresentationRoleAriaAttributes)
  | ({
      role: `${string} progressbar` | "progressbar";
    } & C.KebabCaseProgressbarRoleAriaAttributes)
  | ({ role: `${string} radio` | "radio" } & C.KebabCaseRadioRoleAriaAttributes)
  | ({
      role: `${string} radiogroup` | "radiogroup";
    } & C.KebabCaseRadiogroupRoleAriaAttributes)
  | ({
      role: `${string} region` | "region";
    } & C.KebabCaseRegionRoleAriaAttributes)
  | ({ role: `${string} row` | "row" } & C.KebabCaseRowRoleAriaAttributes)
  | ({
      role: `${string} rowgroup` | "rowgroup";
    } & C.KebabCaseRowgroupRoleAriaAttributes)
  | ({
      role: `${string} rowheader` | "rowheader";
    } & C.KebabCaseRowheaderRoleAriaAttributes)
  | ({
      role: `${string} scrollbar` | "scrollbar";
    } & C.KebabCaseScrollbarRoleAriaAttributes)
  | ({
      role: `${string} search` | "search";
    } & C.KebabCaseSearchRoleAriaAttributes)
  | ({
      role: `${string} searchbox` | "searchbox";
    } & C.KebabCaseSearchboxRoleAriaAttributes)
  | ({
      role: `${string} separator` | "separator";
    } & C.KebabCaseSeparatorRoleAriaAttributes)
  | ({
      role: `${string} slider` | "slider";
    } & C.KebabCaseSliderRoleAriaAttributes)
  | ({
      role: `${string} spinbutton` | "spinbutton";
    } & C.KebabCaseSpinbuttonRoleAriaAttributes)
  | ({
      role: `${string} status` | "status";
    } & C.KebabCaseStatusRoleAriaAttributes)
  | ({
      role: `${string} strong` | "strong";
    } & C.KebabCaseStrongRoleAriaAttributes)
  | ({
      role: `${string} subscript` | "subscript";
    } & C.KebabCaseSubscriptRoleAriaAttributes)
  | ({
      role: `${string} superscript` | "superscript";
    } & C.KebabCaseSuperscriptRoleAriaAttributes)
  | ({
      role: `${string} switch` | "switch";
    } & C.KebabCaseSwitchRoleAriaAttributes)
  | ({ role: `${string} tab` | "tab" } & C.KebabCaseTabRoleAriaAttributes)
  | ({ role: `${string} table` | "table" } & C.KebabCaseTableRoleAriaAttributes)
  | ({
      role: `${string} tablist` | "tablist";
    } & C.KebabCaseTablistRoleAriaAttributes)
  | ({
      role: `${string} tabpanel` | "tabpanel";
    } & C.KebabCaseTabpanelRoleAriaAttributes)
  | ({ role: `${string} term` | "term" } & C.KebabCaseTermRoleAriaAttributes)
  | ({
      role: `${string} textbox` | "textbox";
    } & C.KebabCaseTextboxRoleAriaAttributes)
  | ({ role: `${string} time` | "time" } & C.KebabCaseTimeRoleAriaAttributes)
  | ({ role: `${string} timer` | "timer" } & C.KebabCaseTimerRoleAriaAttributes)
  | ({
      role: `${string} toolbar` | "toolbar";
    } & C.KebabCaseToolbarRoleAriaAttributes)
  | ({
      role: `${string} tooltip` | "tooltip";
    } & C.KebabCaseTooltipRoleAriaAttributes)
  | ({ role: `${string} tree` | "tree" } & C.KebabCaseTreeRoleAriaAttributes)
  | ({
      role: `${string} treegrid` | "treegrid";
    } & C.KebabCaseTreegridRoleAriaAttributes)
  | ({
      role: `${string} treeitem` | "treeitem";
    } & C.KebabCaseTreeitemRoleAriaAttributes);
