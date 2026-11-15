"use client";
import { type JSX, useState } from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import TextField from "@mui/material/TextField";
import useMediaQuery from "@mui/material/useMediaQuery";
import { getKanjiInformation, getKanjiWithReading, getWordsAssociatedWithKanji } from "@/lib/kanji";
import type { KanjiInfo, ReadingInfo, WordsInfo } from "@/lib/types";
import SingleLineCard from "./single-line-card";
import KanjiInformation from "./kanji-information";
import WordsInformation from "./words-information";
import ReadingInformation from "./reading-information";
import styles from "./content.module.css";

interface EntryInfo {
  /** The kanji character. */
  kanji: string;
  /** The information about the kanji character. */
  kanjiInfo: KanjiInfo;
  /** The information about the words associated with the kanji character. */
  wordsInfo: WordsInfo | [];
  /** The information about the kanji characters associated with the reading. */
  readingInfo: ReadingInfo;
}

const emptyKanjiInfo: KanjiInfo = {
  freq_mainichi_shinbun: null,
  grade: null,
  heisig_en: null,
  jlpt: null,
  kanji: "",
  kun_readings: [],
  meanings: [],
  name_readings: [],
  notes: [],
  on_readings: [],
  stroke_count: 0,
  unicode: "",
  unihan_cjk_compatibility_variant: undefined,
  error: undefined,
};

const emptyReadingInfo: ReadingInfo = {
  main_kanji: [],
  name_kanji: [],
  reading: "",
  error: undefined,
};

export default function Content(): JSX.Element {
  // ! using ref management instead of state management created a serious bug
  // * but the codes are kept for reference
  // const enteredTextRef = useRef();
  // const enteredText = enteredTextRef.current
  //   ? enteredTextRef.current.lastChild.firstChild.value
  //   : "";

  const [enteredText, setEnteredText] = useState<string>("");
  const [userHasInputtedKanjiToGetInfo, setUserHasInputtedKanjiToGetInfo] =
    useState<boolean>(false);
  const [userHasInputtedKanjiToGetWords, setUserHasInputtedKanjiToGetWords] =
    useState<boolean>(false);
  const [userHasInputtedKana, setUserHasInputtedKana] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [entryInfo, setEntryInfo] = useState<EntryInfo>({
    kanji: "",
    kanjiInfo: emptyKanjiInfo,
    wordsInfo: [],
    readingInfo: emptyReadingInfo,
  });

  const matches: boolean = useMediaQuery("(min-width:932px)");

  const noSuchEndpointNotice = "No such endpoint, see https://kanjiapi.dev/#!/documentation";

  // * Kanji Information
  const kanjiInfoHasEntries = entryInfo.kanjiInfo !== emptyKanjiInfo;
  const kanjiInfoHasError = entryInfo.kanjiInfo.error === noSuchEndpointNotice;
  async function getKanjiInfo(kanji: string): Promise<void> {
    setUserHasInputtedKanjiToGetInfo(false);
    setUserHasInputtedKanjiToGetWords(false);
    setUserHasInputtedKana(false);
    setIsLoading(true);
    try {
      const kanjiInformation = await getKanjiInformation(kanji);
      setEntryInfo(prevInfo => {
        const newInfo: EntryInfo = { ...prevInfo };
        newInfo.kanji = kanjiInformation.kanji ?? "";
        newInfo.kanjiInfo = kanjiInformation ?? emptyKanjiInfo;
        newInfo.wordsInfo = [];
        newInfo.readingInfo = emptyReadingInfo;
        return newInfo;
      });
    } catch (error) {
      throw new Error(
        (error instanceof Error && error.message) ||
          "Could not retrieve informations for this kanji.",
      );
    }
    setIsLoading(false);
    setUserHasInputtedKanjiToGetInfo(true);
  }

  // * Words Information
  const wordsInfoKeys = Object.keys(entryInfo.wordsInfo);
  const wordsInfoValues = Object.values(entryInfo.wordsInfo);
  const wordsInfoHasEntries =
    wordsInfoValues.length !== 0 &&
    wordsInfoValues.every(
      // * .every() can be used to make sure that all the entries in the array have the required keys, not just some of them
      // ! will return true if the array is empty, so it must be used together with the check for array length
      word => Object.keys(word).includes("meanings") && Object.keys(word).includes("variants"),
    );
  const wordsInfoHasError = wordsInfoKeys.includes("error");
  async function getWordsInfo(kanji: string): Promise<void> {
    setUserHasInputtedKanjiToGetInfo(false);
    setUserHasInputtedKanjiToGetWords(false);
    setUserHasInputtedKana(false);
    setIsLoading(true);
    try {
      const kanjiInformation = await getKanjiInformation(kanji);
      const wordsInformation = await getWordsAssociatedWithKanji(kanji);
      setEntryInfo(prevInfo => {
        const newInfo: EntryInfo = { ...prevInfo };
        newInfo.kanji = kanjiInformation.kanji ?? "";
        newInfo.kanjiInfo = emptyKanjiInfo;
        newInfo.wordsInfo = wordsInformation ?? [];
        newInfo.readingInfo = emptyReadingInfo;
        return newInfo;
      });
    } catch (error) {
      throw new Error(
        (error instanceof Error && error.message) || "Could not retrieve words for this kanji.",
      );
    }
    setIsLoading(false);
    setUserHasInputtedKanjiToGetWords(true);
  }

  // * Reading Information
  const readingInfoHasEntries = entryInfo.readingInfo !== emptyReadingInfo;
  const readingInfoHasError = entryInfo.readingInfo.error === noSuchEndpointNotice;
  async function getReadingInfo(reading: string): Promise<void> {
    setUserHasInputtedKanjiToGetInfo(false);
    setUserHasInputtedKanjiToGetWords(false);
    setUserHasInputtedKana(false);
    setIsLoading(true);
    try {
      const readingInformation = await getKanjiWithReading(reading);
      setEntryInfo(prevInfo => {
        const newInfo: EntryInfo = { ...prevInfo };
        newInfo.kanji = "";
        newInfo.kanjiInfo = emptyKanjiInfo;
        newInfo.wordsInfo = [];
        newInfo.readingInfo = readingInformation ?? emptyReadingInfo;
        return newInfo;
      });
    } catch (error) {
      throw new Error(
        (error instanceof Error && error.message) || "Could not retrieve kanjis for this reading.",
      );
    }
    setIsLoading(false);
    setUserHasInputtedKana(true);
  }

  return (
    <section className={styles.content}>
      <div className={styles.search}>
        <TextField
          id="filled-basic"
          type="text"
          // ref={enteredTextRef}
          value={enteredText}
          onChange={e => setEnteredText(e.target.value)}
          variant="outlined"
          fullWidth
          label="Enter your kanji/kun-yomi/on-yomi here"
        />
        <ButtonGroup
          variant="contained"
          orientation={matches ? "horizontal" : "vertical"}
          fullWidth
        >
          <Button
            onClick={async () => await getKanjiInfo(enteredText)}
            aria-label="Kanji Information"
          >
            Kanji Information
          </Button>
          <Button
            onClick={async () => await getWordsInfo(enteredText)}
            aria-label="Words Associated with the Kanji"
          >
            Words Associated with the Kanji
          </Button>
          <Button
            onClick={async () => await getReadingInfo(enteredText)}
            aria-label="Kanjis with Entered Reading"
          >
            Kanjis with the Reading
          </Button>
        </ButtonGroup>
        {isLoading && <SingleLineCard>Fetching data. Please wait...</SingleLineCard>}
        {!isLoading && kanjiInfoHasEntries && !kanjiInfoHasError ? (
          <KanjiInformation kanjiInformation={entryInfo.kanjiInfo} />
        ) : (
          userHasInputtedKanjiToGetInfo && (
            <SingleLineCard>
              Sorry, there is no information available for this entry. Please make sure you enter a
              kanji (<em>not</em> kun-yomi or on-yomi) to obtain proper result.
            </SingleLineCard>
          )
        )}
        {!isLoading && wordsInfoHasEntries && !wordsInfoHasError ? (
          <WordsInformation kanji={entryInfo.kanji} wordsInformation={entryInfo.wordsInfo} />
        ) : (
          userHasInputtedKanjiToGetWords &&
          (entryInfo.kanji !== "" ? (
            <SingleLineCard>
              Sorry, there are no words associated with <span lang="ja">{entryInfo.kanji}</span>.
            </SingleLineCard>
          ) : (
            <SingleLineCard>
              Sorry, there are no words for this entry. Please make sure you enter a kanji (
              <em>not</em> kun-yomi or on-yomi) to obtain proper result.
            </SingleLineCard>
          ))
        )}
        {!isLoading && readingInfoHasEntries && !readingInfoHasError ? (
          <ReadingInformation readingInformation={entryInfo.readingInfo} />
        ) : (
          userHasInputtedKana && (
            <SingleLineCard>
              Sorry, there are no kanji for this entry. Please make sure you enter{" "}
              <strong>kun-yomi</strong> or <strong>on-yomi</strong> properly to obtain proper
              result.
            </SingleLineCard>
          )
        )}
      </div>
    </section>
  );
}
