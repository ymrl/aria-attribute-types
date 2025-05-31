export type Kebab<T> = {
  [body in Extract<keyof T, string> as `aria-${Lowercase<body>}`]?: T[body];
};

export type Camel<T> = {
  [body in Extract<keyof T, string> as `aria${Capitalize<body>}`]?: T[body];
};
