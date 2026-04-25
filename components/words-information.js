"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import Navbar from "./navbar";
import WordInformation from "./word-information";

export default function WordsInformation({ kanji, wordsInformation }) {
  const [activePage, setActivePage] = useState(1);
  const matches = useMediaQuery("(min-width:932px)");
  const totalInfo = wordsInformation.length;
  const activePageGroup = matches ? 5 : 3;

  function paginate(array, pageSize, pageNumber) {
    // * human-readable page numbers usually start with 1, so we reduce 1 in the first argument
    return array.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
  }

  return (
    <section className="card">
      <p className="card-header">
        Word{totalInfo > 1 ? "s" : ""} associated with <span lang="ja">{kanji}</span> ({totalInfo}{" "}
        entr{totalInfo > 1 ? "ies" : "y"})
      </p>
      {totalInfo > 0 ? (
        <div className="card-body">
          <Navbar
            activePage={activePage}
            activePageGroup={activePageGroup}
            paginate={paginate}
            setActivePage={setActivePage}
            totalInfo={totalInfo}
            wordsInformation={wordsInformation}
          />
          <WordInformation
            activePage={activePage}
            paginate={paginate}
            wordsInformation={wordsInformation}
          />
        </div>
      ) : (
        <p className="card-body">
          Sorry, there are no words associated with <span lang="ja">{kanji}</span>.
        </p>
      )}
    </section>
  );
}
