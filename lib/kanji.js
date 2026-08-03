"use server";

/**
 * @typedef {Object} KanjiInformation
 * @property {number|null} freq_mainichi_shinbun - A relative frequency ranking from an analysis of Mainichi Shinbun newspaper articles. The 2,501 most-used characters received a ranking (see the {@link https://www.edrdg.org/wiki/index.php/KANJIDIC_Project KANJIDIC} project for more information).
 * @property {number|null} grade - The official grade of the kanji (1-6 for {@link https://en.wikipedia.org/wiki/Kyōiku_kanji Kyōiku kanji}, 8 for the remaining {@link https://en.wikipedia.org/wiki/Jōyō_kanji Jōyō kanji}, 9 for {@link https://en.wikipedia.org/wiki/Jinmeiyō_kanji Jinmeiyō kanji}).
 * @property {string|null} heisig_en - The {@link https://en.wikipedia.org/wiki/Remembering_the_Kanji_and_Remembering_the_Hanzi Heisig} keyword associated with the kanji for English.
 * @property {number|null} jlpt - The {@link https://en.wikipedia.org/wiki/Japanese-Language_Proficiency_Test JLPT} test level for the kanji, from 5 (N5, easiest) to 1 (N1, hardest).
 * @property {string} kanji - The kanji itself.
 * @property {string[]} kun_readings - A list of kun readings associated with the kanji, in KANJIDIC order, which leads with the primary reading.
 * @property {string[]} meanings - A list of English meanings associated with the kanji, in KANJIDIC order, which leads with the primary meaning.
 * @property {string[]} name_readings - A list of readings that are only used in names associated with the kanji, in KANJIDIC order.
 * @property {string[]} notes - Any notes about the kanji or its fields.
 * @property {string[]} on_readings - A list of on readings associated with the kanji, in KANJIDIC order, which leads with the primary reading.
 * @property {number} stroke_count - The number of strokes necessary to write the kanji.
 * @property {string} unicode - The {@link https://en.wikipedia.org/wiki/Unicode Unicode} codepoint of the kanji.
 * @property {string|undefined} unihan_cjk_compatibility_variant - If the kanji is a compatibility variant character, the unified version of the character (see README.md Jinmeiyo section for more information).
 * @property {string|undefined} error - If something goes wrong, an object with an error message will be returned instead of the kanji information.
 */
/**
 * Fetches information about a specific kanji character.
 * @param {string} kanji
 * @return {Promise<KanjiInformation>}
 */
export async function getKanjiInformation(kanji) {
  const response = await fetch("https://kanjiapi.dev/v1/kanji/" + kanji); // * object
  const data = await response.json();
  return data;
}

/**
 * @typedef {Object} ReadingInformation
 * @property {string[]} main_kanji - A list of kanji that use the associated reading. Sorted alphabetically by Unicode value.
 * @property {string[]} name_kanji - A list of kanji that use the associated reading exclusively in names. Sorted alphabetically by Unicode value.
 * @property {string} reading - The reading itself.
 * @property {string|undefined} error - If something goes wrong, an object with an error message will be returned instead of the kanji information.
 */
/**
 * Fetches kanji characters associated with a specific reading.
 * @param {string} reading
 * @return {Promise<ReadingInformation>}
 */
export async function getKanjiWithReading(reading) {
  const response = await fetch("https://kanjiapi.dev/v1/reading/" + reading); // * object
  const data = await response.json();
  return data;
}

/**
 * @private @typedef {Object} WordVariant
 * @property {string[]} priorities - A list of strings designating frequency lists in which the variant appears. Sorted alphabetically.
 * @property {string} pronounced - The pronounced form of the variant (in Hiragana or Katakana).
 * @property {string} written - The written form of the variant (mostly in Kanji, but can be in Hiragana, Katakana, or Rōmaji).
 */
/**
 * @private @typedef {Object} WordMeaning
 * @property {string[]} glosses - A list of English equivalent terms for the particular meaning, in JMdict order, which is roughly by importance.
 */
/**
 * @typedef {Object} WordInformation
 * @property {WordVariant[]} variants - A list of written variations for the entry, in JMdict order, which runs from the most to the least common way of writing it. Rare and search-only spellings are included.
 * @property {WordMeaning[]} meanings - A list of distinct meanings that the entry has, in JMdict order, which leads with the primary meaning.
 */
/** @typedef {WordInformation[] & {error: string | undefined}} WordsInformation */
/**
 * Fetches words associated with a specific kanji character.
 * @param {string} kanji
 * @return {Promise<WordsInformation>} Returns an array of word information objects if the kanji has associated words, or an object with an error message if it does not.
 */
export async function getWordsAssociatedWithKanji(kanji) {
  const response = await fetch("https://kanjiapi.dev/v1/words/" + kanji); // * array or object
  const data = await response.json();
  return data;
}
