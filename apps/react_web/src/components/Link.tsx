import { convertCamelizedAttributes } from "aria-attribute-types";
import type { ReactNode } from "react";
import type { CamelCaseAria, Role } from "aria-attribute-types";

export const Link = <R extends Role | undefined>({
  children,
  ...props
}: {
  children?: ReactNode;
  href: string;
  target?: string;
  className?: string;
  role?: R;
} & CamelCaseAria<R extends undefined ? "link" : R>) => {
  return <a {...convertCamelizedAttributes(props)}>{children}</a>;
};
