import { Jouyou4 } from "./types";

// ? The following kanji are not present in the JIS X 0208 standard, but are included in the Jōyō Kanji list.
// * They are official variants of kanji that are missing from JIS X 0208.
const theMissing4Kanji: Jouyou4[] = [
  { officialJouyou: "𠮟", JISX0208Variant: "𠮟" },
  { officialJouyou: "塡", JISX0208Variant: "填" },
  { officialJouyou: "剝", JISX0208Variant: "剥" },
  { officialJouyou: "頰", JISX0208Variant: "頬" },
];

/**
 * Retrieves the JIS X 0208 variant of a Jōyō kanji (常用漢字).
 * @param kanji The official Jōyō version of kanji.
 * @return The JIS X 0208 variant of kanji, if any.
 */
export const theJISX0208KanjiVariant = (kanji: string): string | undefined =>
  theMissing4Kanji.find(({ officialJouyou }) => kanji === officialJouyou)?.JISX0208Variant;
