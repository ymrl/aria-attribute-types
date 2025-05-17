import { convertCamelizedAttributes } from "aria-attribute-types";
import type { ReactNode } from "react";
import type {
  CamelCaseLinkRoleAriaAttributes,
  CamelCaseRoleAttributes,
} from "aria-attribute-types";

export const Link = ({
  children,
  ...props
}: {
  children?: ReactNode;
  href: string;
  target?: string;
  className?: string;
} & (CamelCaseLinkRoleAriaAttributes | CamelCaseRoleAttributes)) => {
  return <a {...convertCamelizedAttributes(props)}>{children}</a>;
};
