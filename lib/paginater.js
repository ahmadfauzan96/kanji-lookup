/**
 * Paginates an array into chunks of a specified size.
 * @param {T[]} array
 * @param {number} pageSize
 * @param {number} pageNumber
 * @return {T[]} The paginated portion of the array for the specified page number.
 * @template T
 */
export default function paginate(array, pageSize, pageNumber) {
  // * human-readable page numbers usually start with 1, so we reduce 1 in the first argument
  return array.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
}
