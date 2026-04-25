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
  const [entryInfo, setEntryInfo] = useState({ kanji: {}, words: undefined, reading: {} });

  const matches = useMediaQuery("(min-width:932px)");

  const noSuchEndpointNotice = "No such endpoint, see https://kanjiapi.dev/#!/documentation";

  const kanjiInfoHasEntries = Object.values(entryInfo.kanji).length !== 0;
  const kanjiInfoHasError =
    Object.keys(entryInfo.kanji).includes("error") ||
    Object.values(entryInfo.kanji).includes(noSuchEndpointNotice);

  const wordsInfoHasEntries =
    typeof entryInfo.words === "object" &&
    Object.values(entryInfo.words).every(
      word => Object.keys(word).includes("meanings") && Object.keys(word).includes("variants"),
    );
  const wordsInfoHasError =
    typeof entryInfo.words === "object" &&
    (Object.keys(entryInfo.words).includes("error") ||
      Object.values(entryInfo.words).includes(noSuchEndpointNotice));

  const readingInfoHasEntries = Object.values(entryInfo.reading).length !== 0;
  const readingInfoHasError =
    Object.keys(entryInfo.reading).includes("error") ||
    Object.values(entryInfo.reading).includes(noSuchEndpointNotice);

  async function getKanjiInfo(kanji) {
    setUserHasInputtedKanjiToGetInfo(false);
    setUserHasInputtedKanjiToGetWords(false);
    setUserHasInputtedKana(false);
    setIsLoading(true);
    try {
      const kanjiInformation = await getKanjiInformation(kanji);
      setEntryInfo(prevInfo => {
        const newInfo = { ...prevInfo };
        newInfo.kanji = kanjiInformation;
        newInfo.words = undefined;
        newInfo.reading = {};
        return newInfo;
      });
      setIsLoading(false);
    } catch (error) {
      throw new Error(error.message || "Could not retrieve information for this kanji.");
    }
    setUserHasInputtedKanjiToGetInfo(true);
  }

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
        newInfo.kanji = kanjiInformation;
        newInfo.words = wordsInformation;
        newInfo.reading = {};
        return newInfo;
      });
      setIsLoading(false);
    } catch (error) {
      throw new Error(error.message || "Could not retrieve words for this kanji.");
    }
    setUserHasInputtedKanjiToGetWords(true);
  }

  async function getReadingInfo(reading) {
    setUserHasInputtedKanjiToGetInfo(false);
    setUserHasInputtedKanjiToGetWords(false);
    setUserHasInputtedKana(false);
    setIsLoading(true);
    try {
      const readingInformation = await getKanjiWithReading(reading);
      setEntryInfo(prevInfo => {
        const newInfo = { ...prevInfo };
        newInfo.kanji = {};
        newInfo.words = undefined;
        newInfo.reading = readingInformation;
        return newInfo;
      });
      setIsLoading(false);
    } catch (error) {
      throw new Error(error.message || "Could not retrieve kanji for this reading.");
    }
    setUserHasInputtedKana(true);
  }

  return (
    <section className={styles.content}>
      <div className={styles.search}>
        <TextField
          id="filled-basic"
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
        {entryInfo.kanji && kanjiInfoHasEntries && !kanjiInfoHasError && !entryInfo.words ? (
          <KanjiInformation kanjiInformation={entryInfo.kanji} />
        ) : (
          userHasInputtedKanjiToGetInfo && (
            <SingleLineCard>
              Sorry, there is no information available for this kanji. Please make sure you enter a
              kanji (<em>not</em> kun-yomi or on-yomi) to obtain proper result.
            </SingleLineCard>
          )
        )}
        {entryInfo.words && wordsInfoHasEntries && !wordsInfoHasError && entryInfo.kanji ? (
          <WordsInformation kanji={entryInfo.kanji.kanji} wordsInformation={entryInfo.words} />
        ) : (
          userHasInputtedKanjiToGetWords && (
            <SingleLineCard>
              Sorry, there are no words for this kanji. Please make sure you enter a kanji (
              <em>not</em> kun-yomi or on-yomi) to obtain proper result.
            </SingleLineCard>
          )
        )}
        {entryInfo.reading && readingInfoHasEntries && !readingInfoHasError ? (
          <ReadingInformation readingInformation={entryInfo.reading} />
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
