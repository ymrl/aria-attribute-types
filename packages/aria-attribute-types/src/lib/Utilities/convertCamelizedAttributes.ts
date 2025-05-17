export const convertCamelizedAttributes = <
  T = string | number | boolean | undefined,
>(
  props: Record<string, T>,
): Record<string, T> => {
  return Object.keys(props).reduce<Record<string, T>>((acc, key) => {
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
