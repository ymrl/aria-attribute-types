# aria-attribute-types

Type-safe [WAI-ARIA](https://www.w3.org/TR/wai-aria-1.2/) attributes for TypeScript.

## Overview

This package provides type definitions for WAI-ARIA attributes in both camelCase and kebab-case, designed for use in TypeScript environments such as React or other JSX-based frameworks.

In JSX, TypeScript does not perform type checking on unknown kebab-case attributes. As a result, typos in ARIA attributes can go unnoticed. To address this, aria-attribute-types offers:

- CamelCase ARIA props, such as `ariaLabel`, `ariaHidden`, etc., to enable full type checking in JSX.
- A conversion utility to transform camelCase ARIA props into kebab-case (ariaLabel → aria-label) for rendering to HTML.
- Role-based ARIA type definitions, ensuring only valid ARIA attributes are used for a given WAI-ARIA role.

This helps developers write more accessible, robust code with confidence and better editor support.

This package provides TypeScript types for the [WAI-ARIA](https://www.w3.org/TR/wai-aria-1.2/) specification.
It includes types for ARIA roles, properties, and states, as well as utility functions for converting between camelCase and kebab-case attribute names.

It aims to complement JSX's insufficient support for aria-\* attributes.
To use WAI-ARIA attributes correctly by correctly defining attribute types for each role using camel case instead of kebab case which would allow undefined attributes.

## Usage

```tsx
import { convertCamelizedAttributes } from "aria-attribute-types";
import type {
  // Types for `aria-*` attributes in camelCase
  CamelCaseAria,
  // Types for `role` attributes
  Role
} from "aria-attribute-types";

export const Link = ({
  children,
  ...props
}: {
  children?: React.ReactNode;
  href: string;
  target?: string;
  className?: string;
} & CamelCaseAria<R extends undefined ? "link" : R>) => {
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

## Included Types

There are three formats of types included in this package:

- **kebab-case**: ARIA attributes in kebab-case format, such as `aria-label`, `aria-describedby`, etc.
- **camelCase**: ARIA attributes in camelCase format, such as `ariaLabel`, `ariaDescribedBy`, etc.
- **Bodies**: camelCase ARIA attribute format excluding `aria-` prefix, such as `label`, `describedBy`, etc.


### Roles

Union types for WAI-ARIA roles:

- `DefinedRole`: Valid WAI-ARIA 1.2 roles excluding abstract roles.
- `Role`: Union type of `DefinedRole` and `\`${string} ${DefinedRole}\``.

```ts
import type { DefinedRole, Role } from "aria-attribute-types";

const role: DefinedRole = "button"; // Valid
const roleWithNamespace: Role = "newbutton button"; // Valid
```

### Attributes by Role


- `CamelCaseAria<R extends Role>`: camelCase ARIA attributes for a given role `R`.
- `KebabCaseAria<R extends Role>`: kebab-case ARIA attributes for a given role `R`.
- `AriaBodies<R extends Role>`: camelCase ARIA attribute bodies (without `aria-` prefix) for a given role `R`.

```ts
import type { CamelCaseAria, KebabCaseAria, AriaBodies, Role } from "aria-attribute-types";

const camelCaseAttributes: CamelCaseAria<"button"> = {
  ariaLabel: "Submit",
  ariaDisabled: false,
  ariaDescribedBy: "description-id",
  ariaPressed: true,
};
const kebabCaseAttributes: KebabCaseAria<"button"> = {
  "aria-label": "Submit",
  "aria-disabled": false,
  "aria-describedby": "description-id",
  "aria-pressed": true,
};
const ariaBodies: AriaBodies<"button"> = {
  label: "Submit",
  disabled: false,
  describedBy: "description-id",
  pressed: true,
};
```

### All Attributes

- `AllKebabCaseAriaAttributes`: All ARIA attributes in kebab-case format.
- `AllCamelCaseAriaAttributes`: All ARIA attributes in camelCase format.
- `AllAriaAttributeBodies`: All ARIA attribute bodies in camelCase format (without `aria-` prefix).


## Utility Functions

- `convertCamelizedAttributes(props: {[key: string]: unknown} ): Record<string, unknown>`: Converts camelCase ARIA attributes to kebab-case for HTML rendering.
