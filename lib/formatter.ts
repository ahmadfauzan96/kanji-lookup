/** Adds an English (or any Latin-based language) comma after an element in an array of strings, except for the last element. */
export const addCommaEN = (array: string[], currentElement: string) =>
  array.at(-1) !== currentElement ? ", " : "";
/** Adds a Japanese comma after an element in an array of strings, except for the last element. */
export const addCommaJA = (array: string[], currentElement: string) =>
  array.at(-1) !== currentElement ? "、" : "";

/** Adds an English (or any Latin-based language) semicolon after an element in an array of strings, except for the last element. */
export const addSemicolonEN = (array: string[], currentElement: string) =>
  array.at(-1) !== currentElement ? "; " : "";
/** Adds a Japanese semicolon after an element in an array of strings, except for the last element. */
export const addSemicolonJA = (array: string[], currentElement: string) =>
  array.at(-1) !== currentElement ? "；" : "";
