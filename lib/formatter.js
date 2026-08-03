/**
 * Adds an English (or any Latin-based language) comma after an element in an array of strings, except for the last element.
 * @param {string[]} array - The array of strings.
 * @param {string} element - The current element.
 */
export const addCommaEN = (array, element) => (element !== array.at(-1) ? ", " : "");
/**
 * Adds a Japanese comma after an element in an array of strings, except for the last element.
 * @param {string[]} array - The array of strings.
 * @param {string} element - The current element.
 */
export const addCommaJA = (array, element) => (element !== array.at(-1) ? "、" : "");

/**
 * Adds an English (or any Latin-based language) semicolon after an element in an array of strings, except for the last element.
 * @param {string[]} array - The array of strings.
 * @param {string} element - The current element.
 */
export const addSemicolonEN = (array, element) => (element !== array.at(-1) ? "; " : "");
/**
 * Adds a Japanese semicolon after an element in an array of strings, except for the last element.
 * @param {string[]} array - The array of strings.
 * @param {string} element - The current element.
 */
export const addSemicolonJA = (array, element) => (element !== array.at(-1) ? "；" : "");
