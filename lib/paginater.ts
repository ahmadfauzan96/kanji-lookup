/**
 * Paginates an array into chunks of a specified size.
 * @return The paginated portion of the array for the specified page number.
 * @template T
 */
const paginate = <T>(array: T[], pageSize: number, pageNumber: number): T[] =>
  // * human-readable page numbers usually start with 1, so we reduce 1 in the first argument
  array.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
export default paginate;
