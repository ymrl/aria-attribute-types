export const convertCamelizedAttributes = (props: {
  [key: string]: unknown;
}): Record<string, unknown> => {
  return Object.keys(props).reduce((acc, key) => {
    if (key.startsWith("aria")) {
      const matched = key.match(/aria([A-Z][A-Za-z]+)/);
      if (matched) {
        const [, matchedStr] = matched;
        const kebab = matchedStr.toLowerCase();
        return { ...acc, [`aria-${kebab}`]: props[key] };
      }
    }
    return { ...acc, [key]: props[key] };
  }, {});
};
