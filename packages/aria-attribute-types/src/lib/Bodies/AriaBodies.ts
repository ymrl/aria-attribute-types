import { Role } from "../Role";
import * as B from "./RoleAttributeBodies";

// prettier-ignore
export type AriaBodies<R extends Role> =
R extends "alert" | `${string} alert`
  ? B.AlertRoleAriaAttributeBodies
: R extends "alertdialog" | `${string} alertdialog`
  ? B.AlertdialogRoleAriaAttributeBodies
: R extends "application" | `${string} application`
  ? B.ApplicationRoleAriaAttributeBodies
: R extends "article" | `${string} article`
  ? B.ArticleRoleAriaAttributeBodies
: R extends "banner" | `${string} banner`
  ? B.BannerRoleAriaAttributeBodies
: R extends "blockquote" | `${string} blockquote`
  ? B.BlockquoteRoleAriaAttributeBodies
: R extends "button" | `${string} button`
  ? B.ButtonRoleAriaAttributeBodies
: R extends "caption" | `${string} caption`
  ? B.CaptionRoleAriaAttributeBodies
: R extends "cell" | `${string} cell`
  ? B.CellRoleAriaAttributeBodies
: R extends "checkbox" | `${string} checkbox`
  ? B.CheckboxRoleAriaAttributeBodies
: R extends "code" | `${string} code`
  ? B.CodeRoleAriaAttributeBodies
: R extends "columnheader" | `${string} columnheader`
  ? B.ColumnheaderRoleAriaAttributeBodies
: R extends "combobox" | `${string} combobox`
  ? B.ComboboxRoleAriaAttributeBodies
: R extends "complementary" | `${string} complementary`
  ? B.ComplementaryRoleAriaAttributeBodies
: R extends "contentinfo" | `${string} contentinfo`
  ? B.ContentinfoRoleAriaAttributeBodies
: R extends "definition" | `${string} definition`
  ? B.DefinitionRoleAriaAttributeBodies
: R extends "deletion" | `${string} deletion`
  ? B.DeletionRoleAriaAttributeBodies
: R extends "dialog" | `${string} dialog`
  ? B.DialogRoleAriaAttributeBodies
: R extends "directory" | `${string} directory`
  ? B.DirectoryRoleAriaAttributeBodies
: R extends "document" | `${string} document`
  ? B.DocumentRoleAriaAttributeBodies
: R extends "emphasis" | `${string} emphasis`
  ? B.EmphasisRoleAriaAttributeBodies
: R extends "feed" | `${string} feed`
  ? B.FeedRoleAriaAttributeBodies
: R extends "figure" | `${string} figure`
  ? B.FigureRoleAriaAttributeBodies
: R extends "form" | `${string} form`
  ? B.FormRoleAriaAttributeBodies
: R extends "generic" | `${string} generic`
  ? B.GenericRoleAriaAttributeBodies
: R extends "grid" | `${string} grid`
  ? B.GridRoleAriaAttributeBodies
: R extends "gridcell" | `${string} gridcell`
  ? B.GridcellRoleAriaAttributeBodies
: R extends "group" | `${string} group`
  ? B.GroupRoleAriaAttributeBodies
: R extends "heading" | `${string} heading`
  ? B.HeadingRoleAriaAttributeBodies
: R extends "img" | `${string} img`
  ? B.ImgRoleAriaAttributeBodies
: R extends "insertion" | `${string} insertion`
  ? B.InsertionRoleAriaAttributeBodies
: R extends "link" | `${string} link`
  ? B.LinkRoleAriaAttributeBodies
: R extends "list" | `${string} list`
  ? B.ListRoleAriaAttributeBodies
: R extends "listbox" | `${string} listbox`
  ? B.ListboxRoleAriaAttributeBodies
: R extends "listitem" | `${string} listitem`
  ? B.ListitemRoleAriaAttributeBodies
: R extends "log" | `${string} log`
  ? B.LogRoleAriaAttributeBodies
: R extends "main" | `${string} main`
  ? B.MainRoleAriaAttributeBodies
: R extends "marquee" | `${string} marquee`
  ? B.MarqueeRoleAriaAttributeBodies
: R extends "math" | `${string} math`
  ? B.MathRoleAriaAttributeBodies
: R extends "meter" | `${string} meter`
  ? B.MeterRoleAriaAttributeBodies
: R extends "menu" | `${string} menu`
  ? B.MenuRoleAriaAttributeBodies
: R extends "menubar" | `${string} menubar`
  ? B.MenubarRoleAriaAttributeBodies
: R extends "menuitem" | `${string} menuitem`
  ? B.MenuitemRoleAriaAttributeBodies
: R extends "menuitemcheckbox" | `${string} menuitemcheckbox`
  ? B.MenuitemcheckboxRoleAriaAttributeBodies
: R extends "menuitemradio" | `${string} menuitemradio`
  ? B.MenuitemradioRoleAriaAttributeBodies
: R extends "navigation" | `${string} navigation`
  ? B.NavigationRoleAriaAttributeBodies
: R extends "none" | `${string} none`
  ? B.NoneRoleAriaAttributeBodies
: R extends "note" | `${string} note`
  ? B.NoteRoleAriaAttributeBodies
: R extends "option" | `${string} option`
  ? B.OptionRoleAriaAttributeBodies
: R extends "paragraph" | `${string} paragraph`
  ? B.ParagraphRoleAriaAttributeBodies
: R extends "presentation" | `${string} presentation`
  ? B.PresentationRoleAriaAttributeBodies
: R extends "progressbar" | `${string} progressbar`
  ? B.ProgressbarRoleAriaAttributeBodies
: R extends "radio" | `${string} radio`
  ? B.RadioRoleAriaAttributeBodies
: R extends "radiogroup" | `${string} radiogroup`
  ? B.RadiogroupRoleAriaAttributeBodies
: R extends "region" | `${string} region`
  ? B.RegionRoleAriaAttributeBodies
: R extends "row" | `${string} row`
  ? B.RowRoleAriaAttributeBodies
: R extends "rowgroup" | `${string} rowgroup`
  ? B.RowgroupRoleAriaAttributeBodies
: R extends "rowheader" | `${string} rowheader`
  ? B.RowheaderRoleAriaAttributeBodies
: R extends "scrollbar" | `${string} scrollbar`
  ? B.ScrollbarRoleAriaAttributeBodies
: R extends "search" | `${string} search`
  ? B.SearchRoleAriaAttributeBodies
: R extends "searchbox" | `${string} searchbox`
  ? B.SearchboxRoleAriaAttributeBodies
: R extends "separator" | `${string} separator`
  ? B.SeparatorRoleAriaAttributeBodies
: R extends "slider" | `${string} slider`
  ? B.SliderRoleAriaAttributeBodies
: R extends "spinbutton" | `${string} spinbutton`
  ? B.SpinbuttonRoleAriaAttributeBodies
: R extends "status" | `${string} status`
  ? B.StatusRoleAriaAttributeBodies
: R extends "strong" | `${string} strong`
  ? B.StrongRoleAriaAttributeBodies
: R extends "subscript" | `${string} subscript`
  ? B.SubscriptRoleAriaAttributeBodies
: R extends "superscript" | `${string} superscript`
  ? B.SuperscriptRoleAriaAttributeBodies
: R extends "switch" | `${string} switch`
  ? B.SwitchRoleAriaAttributeBodies
: R extends "tab" | `${string} tab`
  ? B.TabRoleAriaAttributeBodies
: R extends "table" | `${string} table`
  ? B.TableRoleAriaAttributeBodies
: R extends "tablist" | `${string} tablist`
  ? B.TablistRoleAriaAttributeBodies
: R extends "tabpanel" | `${string} tabpanel`
  ? B.TabpanelRoleAriaAttributeBodies
: R extends "term" | `${string} term`
  ? B.TermRoleAriaAttributeBodies
: R extends "textbox" | `${string} textbox`
  ? B.TextboxRoleAriaAttributeBodies
: R extends "time" | `${string} time`
  ? B.TimeRoleAriaAttributeBodies
: R extends "timer" | `${string} timer`
  ? B.TimerRoleAriaAttributeBodies
: R extends "toolbar" | `${string} toolbar`
  ? B.ToolbarRoleAriaAttributeBodies
: R extends "tooltip" | `${string} tooltip`
  ? B.TooltipRoleAriaAttributeBodies
: R extends "tree" | `${string} tree`
  ? B.TreeRoleAriaAttributeBodies
: R extends "treegrid" | `${string} treegrid`
  ? B.TreegridRoleAriaAttributeBodies
: R extends "treeitem" | `${string} treeitem`
  ? B.TreeitemRoleAriaAttributeBodies
: never;
