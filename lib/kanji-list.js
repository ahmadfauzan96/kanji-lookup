"use server";
// * All of these APIs return an array of kanjis

export async function getAllKanji() {
  const response = await fetch("https://kanjiapi.dev/v1/kanji/all");
  const data = await response.json();
  return data;
}

export async function getJouyouKanji() {
  const response = await fetch("https://kanjiapi.dev/v1/kanji/joyo");
  const data = await response.json();
  return data;
}

export async function getJinmeiyouKanji() {
  const response = await fetch("https://kanjiapi.dev/v1/kanji/jinmeiyo");
  const data = await response.json();
  return data;
}

export async function getHeisigKanji() {
  const response = await fetch("https://kanjiapi.dev/v1/kanji/heisig");
  const data = await response.json();
  return data;
}

export async function getAllKyouikuKanji() {
  const response = await fetch("https://kanjiapi.dev/v1/kanji/kyoiku");
  const data = await response.json();
  return data;
}

export async function getGrade1Kanji() {
  const response = await fetch("https://kanjiapi.dev/v1/kanji/grade-1");
  const data = await response.json();
  return data;
}

export async function getGrade2Kanji() {
  const response = await fetch("https://kanjiapi.dev/v1/kanji/grade-2");
  const data = await response.json();
  return data;
}

export async function getGrade3Kanji() {
  const response = await fetch("https://kanjiapi.dev/v1/kanji/grade-3");
  const data = await response.json();
  return data;
}

export async function getGrade4Kanji() {
  const response = await fetch("https://kanjiapi.dev/v1/kanji/grade-4");
  const data = await response.json();
  return data;
}

export async function getGrade5Kanji() {
  const response = await fetch("https://kanjiapi.dev/v1/kanji/grade-5");
  const data = await response.json();
  return data;
}

export async function getGrade6Kanji() {
  const response = await fetch("https://kanjiapi.dev/v1/kanji/grade-6");
  const data = await response.json();
  return data;
}

export async function getSecondarySchoolKanji() {
  const response = await fetch("https://kanjiapi.dev/v1/kanji/grade-8");
  const data = await response.json();
  return data;
}
