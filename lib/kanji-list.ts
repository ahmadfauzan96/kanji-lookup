"use server";
import { KanjiInfo } from "@/lib/types";
// * All of these APIs return either an array of kanjis or an array of kanji information objects, depending on the endpoint used.
// * The enriched endpoints return arrays of kanji information objects.
// * The non-enriched endpoints return arrays of kanjis.

export async function getAllKanji(): Promise<string[]> {
  const response = await fetch("https://kanjiapi.dev/v1/kanji/all");
  return await response.json();
}

export async function getAllKanjiInformations(): Promise<KanjiInfo[]> {
  const response = await fetch("https://kanjiapi.dev/v1/kanji/all-enriched");
  return await response.json();
}

export async function getJoyoKanji(): Promise<string[]> {
  const response = await fetch("https://kanjiapi.dev/v1/kanji/joyo");
  return await response.json();
}

export async function getJoyoKanjiInformations(): Promise<KanjiInfo[]> {
  const response = await fetch("https://kanjiapi.dev/v1/kanji/joyo-enriched");
  return await response.json();
}

export async function getJouyouKanji(): Promise<string[]> {
  const response = await fetch("https://kanjiapi.dev/v1/kanji/jouyou");
  return await response.json();
}

export async function getJouyouKanjiInformations(): Promise<KanjiInfo[]> {
  const response = await fetch("https://kanjiapi.dev/v1/kanji/jouyou-enriched");
  return await response.json();
}

export async function getJinmeiyoKanji(): Promise<string[]> {
  const response = await fetch("https://kanjiapi.dev/v1/kanji/jinmeiyo");
  return await response.json();
}

export async function getJinmeiyoKanjiInformations(): Promise<KanjiInfo[]> {
  const response = await fetch("https://kanjiapi.dev/v1/kanji/jinmeiyo-enriched");
  return await response.json();
}

export async function getJinmeiyouKanji(): Promise<string[]> {
  const response = await fetch("https://kanjiapi.dev/v1/kanji/jinmeiyou");
  return await response.json();
}

export async function getJinmeiyouKanjiInformations(): Promise<KanjiInfo[]> {
  const response = await fetch("https://kanjiapi.dev/v1/kanji/jinmeiyou-enriched");
  return await response.json();
}

export async function getHeisigKanji(): Promise<string[]> {
  const response = await fetch("https://kanjiapi.dev/v1/kanji/heisig");
  return await response.json();
}

export async function getHeisigKanjiInformations(): Promise<KanjiInfo[]> {
  const response = await fetch("https://kanjiapi.dev/v1/kanji/heisig-enriched");
  return await response.json();
}

export async function getAllKyouikuKanji(): Promise<string[]> {
  const response = await fetch("https://kanjiapi.dev/v1/kanji/kyouiku");
  return await response.json();
}

export async function getAllKyouikuKanjiInformations(): Promise<KanjiInfo[]> {
  const response = await fetch("https://kanjiapi.dev/v1/kanji/kyouiku-enriched");
  return await response.json();
}

export async function getAllKyoikuKanji(): Promise<string[]> {
  const response = await fetch("https://kanjiapi.dev/v1/kanji/kyoiku");
  return await response.json();
}

export async function getAllKyoikuKanjiInformations(): Promise<KanjiInfo[]> {
  const response = await fetch("https://kanjiapi.dev/v1/kanji/kyoiku-enriched");
  return await response.json();
}

export async function getGrade1Kanji(): Promise<string[]> {
  const response = await fetch("https://kanjiapi.dev/v1/kanji/grade-1");
  return await response.json();
}

export async function getGrade1KanjiInformations(): Promise<KanjiInfo[]> {
  const response = await fetch("https://kanjiapi.dev/v1/kanji/grade-1-enriched");
  return await response.json();
}

export async function getGrade2Kanji(): Promise<string[]> {
  const response = await fetch("https://kanjiapi.dev/v1/kanji/grade-2");
  return await response.json();
}

export async function getGrade2KanjiInformations(): Promise<KanjiInfo[]> {
  const response = await fetch("https://kanjiapi.dev/v1/kanji/grade-2-enriched");
  return await response.json();
}

export async function getGrade3Kanji(): Promise<string[]> {
  const response = await fetch("https://kanjiapi.dev/v1/kanji/grade-3");
  return await response.json();
}

export async function getGrade3KanjiInformations(): Promise<KanjiInfo[]> {
  const response = await fetch("https://kanjiapi.dev/v1/kanji/grade-3-enriched");
  return await response.json();
}

export async function getGrade4Kanji(): Promise<string[]> {
  const response = await fetch("https://kanjiapi.dev/v1/kanji/grade-4");
  return await response.json();
}

export async function getGrade4KanjiInformations(): Promise<KanjiInfo[]> {
  const response = await fetch("https://kanjiapi.dev/v1/kanji/grade-4-enriched");
  return await response.json();
}

export async function getGrade5Kanji(): Promise<string[]> {
  const response = await fetch("https://kanjiapi.dev/v1/kanji/grade-5");
  return await response.json();
}

export async function getGrade5KanjiInformations(): Promise<KanjiInfo[]> {
  const response = await fetch("https://kanjiapi.dev/v1/kanji/grade-5-enriched");
  return await response.json();
}

export async function getGrade6Kanji(): Promise<string[]> {
  const response = await fetch("https://kanjiapi.dev/v1/kanji/grade-6");
  return await response.json();
}

export async function getGrade6KanjiInformations(): Promise<KanjiInfo[]> {
  const response = await fetch("https://kanjiapi.dev/v1/kanji/grade-6-enriched");
  return await response.json();
}

export async function getSecondarySchoolKanji(): Promise<string[]> {
  const response = await fetch("https://kanjiapi.dev/v1/kanji/grade-8");
  return await response.json();
}

export async function getSecondarySchoolKanjiInformations(): Promise<KanjiInfo[]> {
  const response = await fetch("https://kanjiapi.dev/v1/kanji/grade-8-enriched");
  return await response.json();
}

export async function getJLPTN5Kanji(): Promise<string[]> {
  const response = await fetch("https://kanjiapi.dev/v1/kanji/jlpt-5");
  return await response.json();
}

export async function getJLPTN5KanjiInformations(): Promise<KanjiInfo[]> {
  const response = await fetch("https://kanjiapi.dev/v1/kanji/jlpt-5-enriched");
  return await response.json();
}

export async function getJLPTN4Kanji(): Promise<string[]> {
  const response = await fetch("https://kanjiapi.dev/v1/kanji/jlpt-4");
  return await response.json();
}

export async function getJLPTN4KanjiInformations(): Promise<KanjiInfo[]> {
  const response = await fetch("https://kanjiapi.dev/v1/kanji/jlpt-4-enriched");
  return await response.json();
}

export async function getJLPTN3Kanji(): Promise<string[]> {
  const response = await fetch("https://kanjiapi.dev/v1/kanji/jlpt-3");
  return await response.json();
}

export async function getJLPTN3KanjiInformations(): Promise<KanjiInfo[]> {
  const response = await fetch("https://kanjiapi.dev/v1/kanji/jlpt-3-enriched");
  return await response.json();
}

export async function getJLPTN2Kanji(): Promise<string[]> {
  const response = await fetch("https://kanjiapi.dev/v1/kanji/jlpt-2");
  return await response.json();
}

export async function getJLPTN2KanjiInformations(): Promise<KanjiInfo[]> {
  const response = await fetch("https://kanjiapi.dev/v1/kanji/jlpt-2-enriched");
  return await response.json();
}

export async function getJLPTN1Kanji(): Promise<string[]> {
  const response = await fetch("https://kanjiapi.dev/v1/kanji/jlpt-1");
  return await response.json();
}

export async function getJLPTN1KanjiInformations(): Promise<KanjiInfo[]> {
  const response = await fetch("https://kanjiapi.dev/v1/kanji/jlpt-1-enriched");
  return await response.json();
}
