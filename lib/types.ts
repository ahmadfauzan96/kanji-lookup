export interface KanjiInfo {
  /** A relative frequency ranking from an analysis of Mainichi Shinbun newspaper articles. The 2,501 most-used characters received a ranking (see the {@link https://www.edrdg.org/wiki/index.php/KANJIDIC_Project KANJIDIC} project for more information). */
  freq_mainichi_shinbun: number | null;
  /** The official grade of the kanji (1-6 for {@link https://en.wikipedia.org/wiki/Kyōiku_kanji Kyōiku kanji}, 8 for the remaining {@link https://en.wikipedia.org/wiki/Jōyō_kanji Jōyō kanji}, 9 for {@link https://en.wikipedia.org/wiki/Jinmeiyō_kanji Jinmeiyō kanji}). */
  grade: number | null;
  /** The {@link https://en.wikipedia.org/wiki/Remembering_the_Kanji_and_Remembering_the_Hanzi Heisig} keyword associated with the kanji for English. */
  heisig_en: string | null;
  /** The {@link https://en.wikipedia.org/wiki/Japanese-Language_Proficiency_Test JLPT} test level for the kanji, from 5 (N5, easiest) to 1 (N1, hardest). */
  jlpt: number | null;
  /** The kanji itself. */
  kanji: string;
  /** A list of kun readings associated with the kanji, in KANJIDIC order, which leads with the primary reading. */
  kun_readings: string[];
  /** A list of English meanings associated with the kanji, in KANJIDIC order, which leads with the primary meaning. */
  meanings: string[];
  /** A list of readings that are only used in names associated with the kanji, in KANJIDIC order. */
  name_readings: string[];
  /** Any notes about the kanji or its fields. */
  notes: string[];
  /** A list of on readings associated with the kanji, in KANJIDIC order, which leads with the primary reading. */
  on_readings: string[];
  /** The number of strokes necessary to write the kanji. */
  stroke_count: number;
  /** The {@link https://en.wikipedia.org/wiki/Unicode Unicode} codepoint of the kanji. */
  unicode: string;
  /** If the kanji is a compatibility variant character, the unified version of the character (see README.md Jinmeiyo section for more information). */
  unihan_cjk_compatibility_variant: string | undefined;
  /** If something goes wrong, an object with an error message will be returned instead of the kanji information. */
  error: string | undefined;
}

export interface ReadingInfo {
  /** A list of kanji that use the associated reading. Sorted alphabetically by Unicode value. */
  main_kanji: string[];
  /** A list of kanji that use the associated reading exclusively in names. Sorted alphabetically by Unicode value. */
  name_kanji: string[];
  /** The reading itself. */
  reading: string;
  /** If something goes wrong, an object with an error message will be returned instead of the kanji information. */
  error: string | undefined;
}

export interface WordVariant {
  /** A list of strings designating frequency lists in which the variant appears. Sorted alphabetically. */
  priorities: string[];
  /** The pronounced form of the variant (in Hiragana or Katakana). */
  pronounced: string;
  /** The written form of the variant (mostly in Kanji, but can be in Hiragana, Katakana, or Rōmaji). */
  written: string;
}

export interface WordMeaning {
  /** A list of English equivalent terms for the particular meaning, in JMdict order, which is roughly by importance. */
  glosses: string[];
}

export interface WordInfo {
  /** A list of written variations for the entry, in JMdict order, which runs from the most to the least common way of writing it. Rare and search-only spellings are included. */
  variants: WordVariant[];
  /** A list of distinct meanings that the entry has, in JMdict order, which leads with the primary meaning. */
  meanings: WordMeaning[];
}

export type WordsInfo = WordInfo[] & { error?: string | undefined };

export interface Jinmeiyou57 {
  compat: string;
  unified: string;
}

export interface Jouyou4 {
  officialJouyou: string;
  JISX0208Variant: string;
}
