"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import { type JSX, useState } from "react";
import type { WordsInfo } from "@/lib/types";
import Navbar from "./navbar";
import WordInformation from "./word-information";

interface WordsInformationProps {
  kanji: string;
  wordsInformation: WordsInfo | [];
}

export default function WordsInformation({
  kanji,
  wordsInformation,
}: WordsInformationProps): JSX.Element {
  const [activePage, setActivePage] = useState<number>(1);
  const totalInfo: number = Array.isArray(wordsInformation) ? wordsInformation.length : 0;

  return (
    <section className="card">
      <p className="card-header">
        Word{totalInfo > 1 ? "s" : ""} associated with <span lang="ja">{kanji}</span> ({totalInfo}{" "}
        {totalInfo > 1 ? "entries" : "entry"})
      </p>
      {Array.isArray(wordsInformation) ? (
        <div className="card-body">
          <Navbar
            activePage={activePage}
            setActivePage={setActivePage}
            totalInfo={totalInfo}
            list={wordsInformation}
          />
          <WordInformation activePage={activePage} wordsInformation={wordsInformation} />
        </div>
      ) : (
        <></>
      )}
    </section>
  );
}
