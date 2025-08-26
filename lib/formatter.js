export const addCommaEN = (array, element) => (element !== array.slice(-1)[0] ? ", " : "");
export const addCommaJA = (array, element) => (element !== array.slice(-1)[0] ? "、" : "");

export const addSemicolonEN = (array, element) => (element !== array.slice(-1)[0] ? "; " : "");
export const addSemicolonJA = (array, element) => (element !== array.slice(-1)[0] ? "；" : "");
