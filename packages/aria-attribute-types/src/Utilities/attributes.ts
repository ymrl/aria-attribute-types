export type KebabAria<T> = {
  [body in Extract<keyof T, string> as `aria-${Lowercase<body>}`]?: T[body];
};

export type CamelAria<T> = {
  [body in Extract<keyof T, string> as `aria${Capitalize<body>}`]?: T[body];
};
