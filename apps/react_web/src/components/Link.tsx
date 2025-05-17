import { convertCamelizedAttributes } from "aria-types";
import type { ReactNode } from "react";
import type {
  CamelCaseLinkRoleAriaAttributes,
  CamelCaseRoleAttributes,
} from "aria-types";

export const Link = ({
  children,
  ...props
}: {
  children?: ReactNode;
  href: string;
  target?: string;
  className?: string;
} & (CamelCaseLinkRoleAriaAttributes | CamelCaseRoleAttributes)) => {
  return (
    <a
      {...convertCamelizedAttributes<string | number | boolean | undefined>(
        props,
      )}
    >
      {children}
    </a>
  );
};
