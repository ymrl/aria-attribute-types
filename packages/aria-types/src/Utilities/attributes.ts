export type KebabAria<T> = {
  [body in Extract<keyof T, string> as `aria-${Lowercase<body>}`]?: T[body];
};

export type CamelAria<T> = {
  [suffix in Extract<
    keyof T,
    string
  > as `aria${Capitalize<suffix>}`]?: T[suffix];
};
