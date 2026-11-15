"use server";
import type { KanjiInfo, ReadingInfo, WordsInfo } from "./types";

/** Fetches information about a specific kanji character. */
export async function getKanjiInformation(kanji: string): Promise<KanjiInfo> {
  const response = await fetch("https://kanjiapi.dev/v1/kanji/" + kanji); // * object
  return await response.json();
}

/** Fetches kanji characters associated with a specific reading. */
export async function getKanjiWithReading(reading: string): Promise<ReadingInfo> {
  const response = await fetch("https://kanjiapi.dev/v1/reading/" + reading); // * object
  return await response.json();
}

/**
 * Fetches words associated with a specific kanji character.
 * @return Returns an array of word information objects if the kanji has associated words, or an object with an error message if it does not.
 */
export async function getWordsAssociatedWithKanji(kanji: string): Promise<WordsInfo> {
  const response = await fetch("https://kanjiapi.dev/v1/words/" + kanji); // * array or object
  return await response.json();
}
