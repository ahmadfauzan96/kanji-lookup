/**
 * Adds an English (or any Latin-based language) comma after an element in an array of strings, except for the last element.
 * @param {string[]} array - The array of strings.
 * @param {string} element - The current element.
 */
export const addCommaEN = (array, element) => (array.at(-1) !== element ? ", " : "");
/**
 * Adds a Japanese comma after an element in an array of strings, except for the last element.
 * @param {string[]} array - The array of strings.
 * @param {string} element - The current element.
 */
export const addCommaJA = (array, element) => (array.at(-1) !== element ? "、" : "");

/**
 * Adds an English (or any Latin-based language) semicolon after an element in an array of strings, except for the last element.
 * @param {string[]} array - The array of strings.
 * @param {string} element - The current element.
 */
export const addSemicolonEN = (array, element) => (array.at(-1) !== element ? "; " : "");
/**
 * Adds a Japanese semicolon after an element in an array of strings, except for the last element.
 * @param {string[]} array - The array of strings.
 * @param {string} element - The current element.
 */
export const addSemicolonJA = (array, element) => (array.at(-1) !== element ? "；" : "");
