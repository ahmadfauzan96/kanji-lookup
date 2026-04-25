// ? The following kanji are not present in the JIS X 0208 standard, but are included in the Jōyō Kanji list.
// * They are official variants of kanji that are missing from JIS X 0208.
export const theMissing4Kanji = [
  { officialJouyou: "𠮟", JISX0208Variant: "𠮟" },
  { officialJouyou: "塡", JISX0208Variant: "填" },
  { officialJouyou: "剝", JISX0208Variant: "剥" },
  { officialJouyou: "頰", JISX0208Variant: "頬" },
];

export const theJISX0208KanjiVariant = kanji =>
  theMissing4Kanji.find(({ officialJouyou }) => kanji === officialJouyou)?.JISX0208Variant;
