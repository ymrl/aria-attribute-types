import { CamelCaseAriaAttributes } from "../AriaAttributes";
import * as C from "../RoleAttributes";

export type CamelCaseRoleAttributes =
  | ({ role?: undefined } & {
      [key in keyof CamelCaseAriaAttributes]?: undefined;
    })
  | ({ role: `${string} alert` | "alert" } & C.CamelCaseAlertRoleAriaAttributes)
  | ({
      role: `${string} alertdialog` | "alertdialog";
    } & C.CamelCaseAlertdialogRoleAriaAttributes)
  | ({
      role: `${string} application` | "application";
    } & C.CamelCaseApplicationRoleAriaAttributes)
  | ({
      role: `${string} article` | "article";
    } & C.CamelCaseArticleRoleAriaAttributes)
  | ({
      role: `${string} banner` | "banner";
    } & C.CamelCaseBannerRoleAriaAttributes)
  | ({
      role: `${string} blockquote` | "blockquote";
    } & C.CamelCaseBlockquoteRoleAriaAttributes)
  | ({
      role: `${string} button` | "button";
    } & C.CamelCaseButtonRoleAriaAttributes)
  | ({
      role: `${string} caption` | "caption";
    } & C.CamelCaseCaptionRoleAriaAttributes)
  | ({ role: `${string} cell` | "cell" } & C.CamelCaseCellRoleAriaAttributes)
  | ({
      role: `${string} checkbox` | "checkbox";
    } & C.CamelCaseCheckboxRoleAriaAttributes)
  | ({
      role: `${string} code` | "code";
    } & C.CamelCaseCodeRoleAriaAttributes)
  | ({
      role: `${string} columnheader` | "columnheader";
    } & C.CamelCaseColumnheaderRoleAriaAttributes)
  | ({
      role: `${string} combobox` | "combobox";
    } & C.CamelCaseComboboxRoleAriaAttributes)
  | ({
      role: `${string} complementary` | "complementary";
    } & C.CamelCaseComplementaryRoleAriaAttributes)
  | ({
      role: `${string} contentinfo` | "contentinfo";
    } & C.CamelCaseContentinfoRoleAriaAttributes)
  | ({
      role: `${string} definition` | "definition";
    } & C.CamelCaseDefinitionRoleAriaAttributes)
  | ({
      role: `${string} deletion` | "deletion";
    } & C.CamelCaseDeletionRoleAriaAttributes)
  | ({
      role: `${string} dialog` | "dialog";
    } & C.CamelCaseDialogRoleAriaAttributes)
  | ({
      role: `${string} directory` | "directory";
    } & C.CamelCaseDirectoryRoleAriaAttributes)
  | ({
      role: `${string} document` | "document";
    } & C.CamelCaseDocumentRoleAriaAttributes)
  | ({
      role: `${string} emphasis` | "emphasis";
    } & C.CamelCaseEmphasisRoleAriaAttributes)
  | ({ role: `${string} feed` | "feed" } & C.CamelCaseFeedRoleAriaAttributes)
  | ({
      role: `${string} figure` | "figure";
    } & C.CamelCaseFigureRoleAriaAttributes)
  | ({ role: `${string} form` | "form" } & C.CamelCaseFormRoleAriaAttributes)
  | ({
      role: `${string} generic` | "generic";
    } & C.CamelCaseGenericRoleAriaAttributes)
  | ({ role: `${string} grid` | "grid" } & C.CamelCaseGridRoleAriaAttributes)
  | ({
      role: `${string} gridcell` | "gridcell";
    } & C.CamelCaseGridcellRoleAriaAttributes)
  | ({ role: `${string} group` | "group" } & C.CamelCaseGroupRoleAriaAttributes)
  | ({
      role: `${string} heading` | "heading";
    } & C.CamelCaseHeadingRoleAriaAttributes)
  | ({ role: `${string} img` | "img" } & C.CamelCaseImgRoleAriaAttributes)
  | ({
      role: `${string} insertion` | "insertion";
    } & C.CamelCaseInsertionRoleAriaAttributes)
  | ({ role: `${string} link` | "link" } & C.CamelCaseLinkRoleAriaAttributes)
  | ({ role: `${string} list` | "list" } & C.CamelCaseListRoleAriaAttributes)
  | ({
      role: `${string} listbox` | "listbox";
    } & C.CamelCaseListboxRoleAriaAttributes)
  | ({
      role: `${string} listitem` | "listitem";
    } & C.CamelCaseListitemRoleAriaAttributes)
  | ({ role: `${string} log` | "log" } & C.CamelCaseLogRoleAriaAttributes)
  | ({ role: `${string} main` | "main" } & C.CamelCaseMainRoleAriaAttributes)
  | ({
      role: `${string} marquee` | "marquee";
    } & C.CamelCaseMarqueeRoleAriaAttributes)
  | ({ role: `${string} math` | "math" } & C.CamelCaseMathRoleAriaAttributes)
  | ({ role: `${string} meter` | "meter" } & C.CamelCaseMeterRoleAriaAttributes)
  | ({ role: `${string} menu` | "menu" } & C.CamelCaseMenuRoleAriaAttributes)
  | ({
      role: `${string} menubar` | "menubar";
    } & C.CamelCaseMenubarRoleAriaAttributes)
  | ({
      role: `${string} menuitem` | "menuitem";
    } & C.CamelCaseMenuitemRoleAriaAttributes)
  | ({
      role: `${string} menuitemcheckbox` | "menuitemcheckbox";
    } & C.CamelCaseMenuitemcheckboxRoleAriaAttributes)
  | ({
      role: `${string} menuitemradio` | "menuitemradio";
    } & C.CamelCaseMenuitemradioRoleAriaAttributes)
  | ({
      role: `${string} navigation` | "navigation";
    } & C.CamelCaseNavigationRoleAriaAttributes)
  | ({ role: `${string} none` | "none" } & C.CamelCaseNoneRoleAriaAttributes)
  | ({ role: `${string} note` | "note" } & C.CamelCaseNoteRoleAriaAttributes)
  | ({
      role: `${string} option` | "option";
    } & C.CamelCaseOptionRoleAriaAttributes)
  | ({
      role: `${string} paragraph` | "paragraph";
    } & C.CamelCaseParagraphRoleAriaAttributes)
  | ({
      role: `${string} presentation` | "presentation";
    } & C.CamelCasePresentationRoleAriaAttributes)
  | ({
      role: `${string} progressbar` | "progressbar";
    } & C.CamelCaseProgressbarRoleAriaAttributes)
  | ({ role: `${string} radio` | "radio" } & C.CamelCaseRadioRoleAriaAttributes)
  | ({
      role: `${string} radiogroup` | "radiogroup";
    } & C.CamelCaseRadiogroupRoleAriaAttributes)
  | ({
      role: `${string} region` | "region";
    } & C.CamelCaseRegionRoleAriaAttributes)
  | ({ role: `${string} row` | "row" } & C.CamelCaseRowRoleAriaAttributes)
  | ({
      role: `${string} rowgroup` | "rowgroup";
    } & C.CamelCaseRowgroupRoleAriaAttributes)
  | ({
      role: `${string} rowheader` | "rowheader";
    } & C.CamelCaseRowheaderRoleAriaAttributes)
  | ({
      role: `${string} scrollbar` | "scrollbar";
    } & C.CamelCaseScrollbarRoleAriaAttributes)
  | ({
      role: `${string} search` | "search";
    } & C.CamelCaseSearchRoleAriaAttributes)
  | ({
      role: `${string} searchbox` | "searchbox";
    } & C.CamelCaseSearchboxRoleAriaAttributes)
  | ({
      role: `${string} separator` | "separator";
    } & C.CamelCaseSeparatorRoleAriaAttributes)
  | ({
      role: `${string} slider` | "slider";
    } & C.CamelCaseSliderRoleAriaAttributes)
  | ({
      role: `${string} spinbutton` | "spinbutton";
    } & C.CamelCaseSpinbuttonRoleAriaAttributes)
  | ({
      role: `${string} status` | "status";
    } & C.CamelCaseStatusRoleAriaAttributes)
  | ({
      role: `${string} strong` | "strong";
    } & C.CamelCaseStrongRoleAriaAttributes)
  | ({
      role: `${string} subscript` | "subscript";
    } & C.CamelCaseSubscriptRoleAriaAttributes)
  | ({
      role: `${string} superscript` | "superscript";
    } & C.CamelCaseSuperscriptRoleAriaAttributes)
  | ({
      role: `${string} switch` | "switch";
    } & C.CamelCaseSwitchRoleAriaAttributes)
  | ({ role: `${string} tab` | "tab" } & C.CamelCaseTabRoleAriaAttributes)
  | ({ role: `${string} table` | "table" } & C.CamelCaseTableRoleAriaAttributes)
  | ({
      role: `${string} tablist` | "tablist";
    } & C.CamelCaseTablistRoleAriaAttributes)
  | ({
      role: `${string} tabpanel` | "tabpanel";
    } & C.CamelCaseTabpanelRoleAriaAttributes)
  | ({ role: `${string} term` | "term" } & C.CamelCaseTermRoleAriaAttributes)
  | ({
      role: `${string} textbox` | "textbox";
    } & C.CamelCaseTextboxRoleAriaAttributes)
  | ({ role: `${string} time` | "time" } & C.CamelCaseTimeRoleAriaAttributes)
  | ({ role: `${string} timer` | "timer" } & C.CamelCaseTimerRoleAriaAttributes)
  | ({
      role: `${string} toolbar` | "toolbar";
    } & C.CamelCaseToolbarRoleAriaAttributes)
  | ({
      role: `${string} tooltip` | "tooltip";
    } & C.CamelCaseTooltipRoleAriaAttributes)
  | ({ role: `${string} tree` | "tree" } & C.CamelCaseTreeRoleAriaAttributes)
  | ({
      role: `${string} treegrid` | "treegrid";
    } & C.CamelCaseTreegridRoleAriaAttributes)
  | ({
      role: `${string} treeitem` | "treeitem";
    } & C.CamelCaseTreeitemRoleAriaAttributes);
