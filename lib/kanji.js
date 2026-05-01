"use server";

export async function getKanjiInformation(kanji) {
  const response = await fetch("https://kanjiapi.dev/v1/kanji/" + kanji); // * object
  const data = await response.json();
  return data;
}

export async function getKanjiWithReading(reading) {
  const response = await fetch("https://kanjiapi.dev/v1/reading/" + reading); // * object
  const data = await response.json();
  return data;
}

export async function getWordsAssociatedWithKanji(kanji) {
  const response = await fetch("https://kanjiapi.dev/v1/words/" + kanji); // * array or object
  const data = await response.json();
  return data;
}
