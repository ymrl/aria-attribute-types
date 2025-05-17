import { convertCamelizedAttributes } from "aria-attribute-types";
import type { ReactNode } from "react";
import type { CamelCaseRoleAttributes } from "aria-attribute-types";

export const Element = ({
  children,
  ...props
}: {
  children?: ReactNode;
  className?: string;
} & (CamelCaseRoleAttributes | { role?: undefined })) => {
  return <div {...convertCamelizedAttributes(props)}>{children}</div>;
};
