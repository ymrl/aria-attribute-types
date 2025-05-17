import { convertCamelizedAttributes } from "aria-types";
import type { ReactNode } from "react";
import type { CamelCaseRoleAttributes } from "aria-types";

export const Element = ({
  children,
  ...props
}: {
  children?: ReactNode;
  className?: string;
} & (CamelCaseRoleAttributes | { role?: undefined })) => {
  return <div {...convertCamelizedAttributes(props)}>{children}</div>;
};
