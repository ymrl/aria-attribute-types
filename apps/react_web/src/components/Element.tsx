import { convertCamelizedAttributes } from "aria-types";
import type { ReactNode } from "react";
import type { CamelCaseRoleAttributes } from "aria-types";

export const Element = ({
  children,
  ...props
}: {
  children?: ReactNode;
  className?: string;
} & CamelCaseRoleAttributes) => {
  return (
    <div
      {...convertCamelizedAttributes<string | number | boolean | undefined>(
        props,
      )}
    >
      {children}
    </div>
  );
};
