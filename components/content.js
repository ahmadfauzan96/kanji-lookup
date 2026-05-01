"use client";
import { useState } from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import TextField from "@mui/material/TextField";
import useMediaQuery from "@mui/material/useMediaQuery";
import { getKanjiInformation, getKanjiWithReading, getWordsAssociatedWithKanji } from "@/lib/kanji";
import SingleLineCard from "./single-line-card";
import KanjiInformation from "./kanji-information";
import WordsInformation from "./words-information";
import ReadingInformation from "./reading-information";
import styles from "./content.module.css";

export default function Content() {
  // ! using ref management instead of state management created a serious bug
  // * but the codes are kept for reference
  // const enteredTextRef = useRef();
  // const enteredText = enteredTextRef.current
  //   ? enteredTextRef.current.lastChild.firstChild.value
  //   : "";

  const [enteredText, setEnteredText] = useState("");
  const [userHasInputtedKanjiToGetInfo, setUserHasInputtedKanjiToGetInfo] = useState(false);
  const [userHasInputtedKanjiToGetWords, setUserHasInputtedKanjiToGetWords] = useState(false);
  const [userHasInputtedKana, setUserHasInputtedKana] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [entryInfo, setEntryInfo] = useState({
    kanji: "",
    kanjiInfo: {},
    wordsInfo: {},
    readingInfo: {},
  });

  const matches = useMediaQuery("(min-width:932px)");

  const noSuchEndpointNotice = "No such endpoint, see https://kanjiapi.dev/#!/documentation";

  // * Kanji Information
  const kanjiInfoKeys = Object.keys(entryInfo.kanjiInfo);
  const kanjiInfoValues = Object.values(entryInfo.kanjiInfo);
  const kanjiInfoHasEntries =
    kanjiInfoValues.length !== 0 &&
    kanjiInfoKeys.includes("kanji") &&
    kanjiInfoKeys.includes("jlpt") &&
    kanjiInfoKeys.includes("grade") &&
    kanjiInfoKeys.includes("meanings") &&
    kanjiInfoKeys.includes("unicode") &&
    kanjiInfoKeys.includes("notes") &&
    kanjiInfoKeys.includes("kun_readings") &&
    kanjiInfoKeys.includes("on_readings") &&
    kanjiInfoKeys.includes("name_readings") &&
    kanjiInfoKeys.includes("heisig_en") &&
    kanjiInfoKeys.includes("stroke_count") &&
    kanjiInfoKeys.includes("freq_mainichi_shinbun");
  const kanjiInfoHasError =
    kanjiInfoKeys.includes("error") || kanjiInfoValues.includes(noSuchEndpointNotice);
  async function getKanjiInfo(kanji) {
    setUserHasInputtedKanjiToGetInfo(false);
    setUserHasInputtedKanjiToGetWords(false);
    setUserHasInputtedKana(false);
    setIsLoading(true);
    try {
      const kanjiInformation = await getKanjiInformation(kanji);
      setEntryInfo(prevInfo => {
        const newInfo = { ...prevInfo };
        newInfo.kanji = kanjiInformation.kanji ?? "";
        newInfo.kanjiInfo = kanjiInformation ?? {};
        newInfo.wordsInfo = {};
        newInfo.readingInfo = {};
        return newInfo;
      });
    } catch (error) {
      throw new Error(error.message || "Could not retrieve informations for this kanji.");
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
  const wordsInfoHasError =
    wordsInfoKeys.includes("error") || wordsInfoValues.includes(noSuchEndpointNotice);
  async function getWordsInfo(kanji) {
    setUserHasInputtedKanjiToGetInfo(false);
    setUserHasInputtedKanjiToGetWords(false);
    setUserHasInputtedKana(false);
    setIsLoading(true);
    try {
      const kanjiInformation = await getKanjiInformation(kanji);
      const wordsInformation = await getWordsAssociatedWithKanji(kanji);
      setEntryInfo(prevInfo => {
        const newInfo = { ...prevInfo };
        newInfo.kanji = kanjiInformation.kanji ?? "";
        newInfo.kanjiInfo = {};
        newInfo.wordsInfo = wordsInformation ?? {};
        newInfo.readingInfo = {};
        return newInfo;
      });
    } catch (error) {
      throw new Error(error.message || "Could not retrieve words for this kanji.");
    }
    setIsLoading(false);
    setUserHasInputtedKanjiToGetWords(true);
  }

  // * Reading Information
  const readingInfoKeys = Object.keys(entryInfo.readingInfo);
  const readingInfoValues = Object.values(entryInfo.readingInfo);
  const readingInfoHasEntries =
    readingInfoValues.length !== 0 &&
    readingInfoKeys.includes("main_kanji") &&
    readingInfoKeys.includes("name_kanji") &&
    readingInfoKeys.includes("reading");
  const readingInfoHasError =
    readingInfoKeys.includes("error") || readingInfoValues.includes(noSuchEndpointNotice);
  async function getReadingInfo(reading) {
    setUserHasInputtedKanjiToGetInfo(false);
    setUserHasInputtedKanjiToGetWords(false);
    setUserHasInputtedKana(false);
    setIsLoading(true);
    try {
      const readingInformation = await getKanjiWithReading(reading);
      setEntryInfo(prevInfo => {
        const newInfo = { ...prevInfo };
        newInfo.kanji = "";
        newInfo.kanjiInfo = {};
        newInfo.wordsInfo = {};
        newInfo.readingInfo = readingInformation ?? {};
        return newInfo;
      });
    } catch (error) {
      throw new Error(error.message || "Could not retrieve kanjis for this reading.");
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
