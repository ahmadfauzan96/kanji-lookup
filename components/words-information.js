"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Navbar from "./navbar";
import WordInformation from "./word-information";

/**
 * @param {{kanji: string, wordsInformation: import("@/lib/kanji").WordsInformation}} props
 */
export default function WordsInformation({ kanji, wordsInformation }) {
  const [activePage, setActivePage] = useState(1);
  const totalInfo = Array.isArray(wordsInformation) ? wordsInformation.length : 0;

  return (
    <section className="card">
      <p className="card-header">
        Word{totalInfo > 1 ? "s" : ""} associated with <span lang="ja">{kanji}</span> ({totalInfo}{" "}
        entr{totalInfo > 1 ? "ies" : "y"})
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
