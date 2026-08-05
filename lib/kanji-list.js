"use server";
// * All of these APIs return either an array of kanjis or an array of kanji information objects, depending on the endpoint used.
// * The enriched endpoints return arrays of kanji information objects.
// * The non-enriched endpoints return arrays of kanjis.

/** @typedef {import("@/lib/kanji").KanjiInformation} KanjiInformation */

/**
 * @return {Promise<string[]>}
 */
export async function getAllKanji() {
  const response = await fetch("https://kanjiapi.dev/v1/kanji/all");
  const data = await response.json();
  return data;
}

/**
 * @return {Promise<KanjiInformation[]>}
 */
export async function getAllKanjiInformations() {
  const response = await fetch("https://kanjiapi.dev/v1/kanji/all-enriched");
  const data = await response.json();
  return data;
}

/**
 * @return {Promise<string[]>}
 */
export async function getJoyoKanji() {
  const response = await fetch("https://kanjiapi.dev/v1/kanji/joyo");
  const data = await response.json();
  return data;
}

/**
 * @return {Promise<KanjiInformation[]>}
 */
export async function getJoyoKanjiInformations() {
  const response = await fetch("https://kanjiapi.dev/v1/kanji/joyo-enriched");
  const data = await response.json();
  return data;
}

/**
 * @return {Promise<string[]>}
 */
export async function getJouyouKanji() {
  const response = await fetch("https://kanjiapi.dev/v1/kanji/jouyou");
  const data = await response.json();
  return data;
}

/**
 * @return {Promise<KanjiInformation[]>}
 */
export async function getJouyouKanjiInformations() {
  const response = await fetch("https://kanjiapi.dev/v1/kanji/jouyou-enriched");
  const data = await response.json();
  return data;
}

/**
 * @return {Promise<string[]>}
 */
export async function getJinmeiyoKanji() {
  const response = await fetch("https://kanjiapi.dev/v1/kanji/jinmeiyo");
  const data = await response.json();
  return data;
}

/**
 * @return {Promise<KanjiInformation[]>}
 */
export async function getJinmeiyoKanjiInformations() {
  const response = await fetch("https://kanjiapi.dev/v1/kanji/jinmeiyo-enriched");
  const data = await response.json();
  return data;
}

/**
 * @return {Promise<string[]>}
 */
export async function getJinmeiyouKanji() {
  const response = await fetch("https://kanjiapi.dev/v1/kanji/jinmeiyou");
  const data = await response.json();
  return data;
}

/**
 * @return {Promise<KanjiInformation[]>}
 */
export async function getJinmeiyouKanjiInformations() {
  const response = await fetch("https://kanjiapi.dev/v1/kanji/jinmeiyou-enriched");
  const data = await response.json();
  return data;
}

/**
 * @return {Promise<string[]>}
 */
export async function getHeisigKanji() {
  const response = await fetch("https://kanjiapi.dev/v1/kanji/heisig");
  const data = await response.json();
  return data;
}

/**
 * @return {Promise<KanjiInformation[]>}
 */
export async function getHeisigKanjiInformations() {
  const response = await fetch("https://kanjiapi.dev/v1/kanji/heisig-enriched");
  const data = await response.json();
  return data;
}

/**
 * @return {Promise<string[]>}
 */
export async function getAllKyouikuKanji() {
  const response = await fetch("https://kanjiapi.dev/v1/kanji/kyouiku");
  const data = await response.json();
  return data;
}

/**
 * @return {Promise<KanjiInformation[]>}
 */
export async function getAllKyouikuKanjiInformations() {
  const response = await fetch("https://kanjiapi.dev/v1/kanji/kyouiku-enriched");
  const data = await response.json();
  return data;
}

/**
 * @return {Promise<string[]>}
 */
export async function getAllKyoikuKanji() {
  const response = await fetch("https://kanjiapi.dev/v1/kanji/kyoiku");
  const data = await response.json();
  return data;
}

/**
 * @return {Promise<KanjiInformation[]>}
 */
export async function getAllKyoikuKanjiInformations() {
  const response = await fetch("https://kanjiapi.dev/v1/kanji/kyoiku-enriched");
  const data = await response.json();
  return data;
}

/**
 * @return {Promise<string[]>}
 */
export async function getGrade1Kanji() {
  const response = await fetch("https://kanjiapi.dev/v1/kanji/grade-1");
  const data = await response.json();
  return data;
}

/**
 * @return {Promise<KanjiInformation[]>}
 */
export async function getGrade1KanjiInformations() {
  const response = await fetch("https://kanjiapi.dev/v1/kanji/grade-1-enriched");
  const data = await response.json();
  return data;
}

/**
 * @return {Promise<string[]>}
 */
export async function getGrade2Kanji() {
  const response = await fetch("https://kanjiapi.dev/v1/kanji/grade-2");
  const data = await response.json();
  return data;
}

/**
 * @return {Promise<KanjiInformation[]>}
 */
export async function getGrade2KanjiInformations() {
  const response = await fetch("https://kanjiapi.dev/v1/kanji/grade-2-enriched");
  const data = await response.json();
  return data;
}

/**
 * @return {Promise<string[]>}
 */
export async function getGrade3Kanji() {
  const response = await fetch("https://kanjiapi.dev/v1/kanji/grade-3");
  const data = await response.json();
  return data;
}

/**
 * @return {Promise<KanjiInformation[]>}
 */
export async function getGrade3KanjiInformations() {
  const response = await fetch("https://kanjiapi.dev/v1/kanji/grade-3-enriched");
  const data = await response.json();
  return data;
}

/**
 * @return {Promise<string[]>}
 */
export async function getGrade4Kanji() {
  const response = await fetch("https://kanjiapi.dev/v1/kanji/grade-4");
  const data = await response.json();
  return data;
}

/**
 * @return {Promise<KanjiInformation[]>}
 */
export async function getGrade4KanjiInformations() {
  const response = await fetch("https://kanjiapi.dev/v1/kanji/grade-4-enriched");
  const data = await response.json();
  return data;
}

/**
 * @return {Promise<string[]>}
 */
export async function getGrade5Kanji() {
  const response = await fetch("https://kanjiapi.dev/v1/kanji/grade-5");
  const data = await response.json();
  return data;
}

/**
 * @return {Promise<KanjiInformation[]>}
 */
export async function getGrade5KanjiInformations() {
  const response = await fetch("https://kanjiapi.dev/v1/kanji/grade-5-enriched");
  const data = await response.json();
  return data;
}

/**
 * @return {Promise<string[]>}
 */
export async function getGrade6Kanji() {
  const response = await fetch("https://kanjiapi.dev/v1/kanji/grade-6");
  const data = await response.json();
  return data;
}

/**
 * @return {Promise<KanjiInformation[]>}
 */
export async function getGrade6KanjiInformations() {
  const response = await fetch("https://kanjiapi.dev/v1/kanji/grade-6-enriched");
  const data = await response.json();
  return data;
}

/**
 * @return {Promise<string[]>}
 */
export async function getSecondarySchoolKanji() {
  const response = await fetch("https://kanjiapi.dev/v1/kanji/grade-8");
  const data = await response.json();
  return data;
}

/**
 * @return {Promise<KanjiInformation[]>}
 */
export async function getSecondarySchoolKanjiInformations() {
  const response = await fetch("https://kanjiapi.dev/v1/kanji/grade-8-enriched");
  const data = await response.json();
  return data;
}

/**
 * @return {Promise<string[]>}
 */
export async function getJLPTN5Kanji() {
  const response = await fetch("https://kanjiapi.dev/v1/kanji/jlpt-5");
  const data = await response.json();
  return data;
}

/**
 * @return {Promise<KanjiInformation[]>}
 */
export async function getJLPTN5KanjiInformations() {
  const response = await fetch("https://kanjiapi.dev/v1/kanji/jlpt-5-enriched");
  const data = await response.json();
  return data;
}

/**
 * @return {Promise<string[]>}
 */
export async function getJLPTN4Kanji() {
  const response = await fetch("https://kanjiapi.dev/v1/kanji/jlpt-4");
  const data = await response.json();
  return data;
}

/**
 * @return {Promise<KanjiInformation[]>}
 */
export async function getJLPTN4KanjiInformations() {
  const response = await fetch("https://kanjiapi.dev/v1/kanji/jlpt-4-enriched");
  const data = await response.json();
  return data;
}

/**
 * @return {Promise<string[]>}
 */
export async function getJLPTN3Kanji() {
  const response = await fetch("https://kanjiapi.dev/v1/kanji/jlpt-3");
  const data = await response.json();
  return data;
}

/**
 * @return {Promise<KanjiInformation[]>}
 */
export async function getJLPTN3KanjiInformations() {
  const response = await fetch("https://kanjiapi.dev/v1/kanji/jlpt-3-enriched");
  const data = await response.json();
  return data;
}

/**
 * @return {Promise<string[]>}
 */
export async function getJLPTN2Kanji() {
  const response = await fetch("https://kanjiapi.dev/v1/kanji/jlpt-2");
  const data = await response.json();
  return data;
}

/**
 * @return {Promise<KanjiInformation[]>}
 */
export async function getJLPTN2KanjiInformations() {
  const response = await fetch("https://kanjiapi.dev/v1/kanji/jlpt-2-enriched");
  const data = await response.json();
  return data;
}

/**
 * @return {Promise<string[]>}
 */
export async function getJLPTN1Kanji() {
  const response = await fetch("https://kanjiapi.dev/v1/kanji/jlpt-1");
  const data = await response.json();
  return data;
}

/**
 * @return {Promise<KanjiInformation[]>}
 */
export async function getJLPTN1KanjiInformations() {
  const response = await fetch("https://kanjiapi.dev/v1/kanji/jlpt-1-enriched");
  const data = await response.json();
  return data;
}
