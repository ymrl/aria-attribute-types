import { convertCamelizedAttributes } from "aria-attribute-types";
import type { ReactNode } from "react";
import type { CamelCaseAria, Role } from "aria-attribute-types";

export const Element = <R extends Role | undefined = undefined>({
  children,
  ...props
}: {
  children?: ReactNode;
  className?: string;
  role?: R;
} & CamelCaseAria<R extends Role ? R : "generic">) => {
  return <div {...convertCamelizedAttributes(props)}>{children}</div>;
};
