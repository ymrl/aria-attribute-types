# aria-types

Type-safe [WAI-ARIA](https://www.w3.org/TR/wai-aria-1.2/) attributes for TypeScript.

## Overview

This package provides type definitions for WAI-ARIA attributes in both camelCase and kebab-case, designed for use in TypeScript environments such as React or other JSX-based frameworks.

In JSX, TypeScript does not perform type checking on unknown kebab-case attributes. As a result, typos in ARIA attributes can go unnoticed. To address this, aria-types offers:

- CamelCase ARIA props, such as `ariaLabel`, `ariaHidden`, etc., to enable full type checking in JSX.
- A conversion utility to transform camelCase ARIA props into kebab-case (ariaLabel → aria-label) for rendering to HTML.
- Role-based ARIA type definitions, ensuring only valid ARIA attributes are used for a given WAI-ARIA role.

This helps developers write more accessible, robust code with confidence and better editor support.



This package provides TypeScript types for the [WAI-ARIA](https://www.w3.org/TR/wai-aria-1.2/) specification. 
It includes types for ARIA roles, properties, and states, as well as utility functions for converting between camelCase and kebab-case attribute names.

It aims to complement JSX's insufficient support for aria-* attributes. 
To use WAI-ARIA attributes correctly by correctly defining attribute types for each role using camel case instead of kebab case which would allow undefined attributes.

## Usage

```tsx
import { convertCamelizedAttributes } from "aria-types";
import type {
  // Types for `link` role
  CamelCaseLinkRoleAriaAttributes,
  // All ARIA attributes types classified by `role` attribute
  CamelCaseRoleAttributes,
} from "aria-types";

export const Link = ({
  children,
  ...props
}: {
  children?: React.ReactNode;
  href: string;
  target?: string;
  className?: string;
} & (CamelCaseLinkRoleAriaAttributes | CamelCaseRoleAttributes)) => {
  return (
    <a
      // Convert camelCase attributes to kebab-case for HTML rendering.
      // It will affect only `^aria` attributes.
      {...convertCamelizedAttributes(props)}
    >
      {children}
    </a>
  );
};
```


