"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { addCommaEN } from "@/lib/formatter";
import Ruby from "./ruby";

export default function WordsInformation({ kanji, wordsInformation }) {
  const [activePage, setActivePage] = useState(1);
  const [buttonIsActive, setButtonIsActive] = useState(true);
  const matches = useMediaQuery("(min-width:932px)");
  const totalInfo = wordsInformation.length;
  const activePageGroup = matches ? 5 : 3;

  function paginate(array, pageSize, pageNumber) {
    // * human-readable page numbers usually start with 1, so we reduce 1 in the first argument
    return array.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
  }

  function handlePageLinkButton(page) {
    setActivePage(page);
    setButtonIsActive(buttonIsActive => (page === activePage ? !buttonIsActive : buttonIsActive));
  }

  return (
    <section className="card">
      <p className="card-header">
        Word{totalInfo > 1 ? "s" : ""} associated with <span lang="ja">{kanji}</span> ({totalInfo}{" "}
        entr{totalInfo > 1 ? "ies" : "y"})
      </p>
      <nav aria-label="Results navigation">
        <ul className="pagination justify-content-center">
          <li className={"page-item" + (activePage === 1 && " disabled")}>
            <button className="page-link" lang="ja" onClick={() => handlePageLinkButton(1)}>
              最初
            </button>
          </li>
          <li className={"page-item" + (activePage === 1 && " disabled")}>
            <button
              className="page-link"
              lang="ja"
              onClick={() =>
                handlePageLinkButton(activePage !== 1 ? activePage - activePageGroup : 1)
              }
            >
              «
            </button>
          </li>
          <li className={"page-item" + (activePage === 1 && " disabled")}>
            <button
              className="page-link"
              lang="ja"
              onClick={() => handlePageLinkButton(activePage - 1)}
            >
              前
            </button>
          </li>
          {paginate(
            wordsInformation.map((_, index) => (
              <li
                key={index + 1}
                className={
                  "page-item" + (index + 1 === activePage && buttonIsActive ? " active" : "")
                }
                aria-current={index + 1 === activePage && buttonIsActive ? "page" : "false"}
              >
                <button className="page-link" onClick={() => handlePageLinkButton(index + 1)}>
                  {index + 1}
                </button>
              </li>
            )),
            activePageGroup,
            Math.ceil(activePage / activePageGroup)
          )}
          <li className={"page-item" + (activePage === totalInfo && " disabled")}>
            <button
              className="page-link"
              lang="ja"
              onClick={() => handlePageLinkButton(activePage + 1)}
            >
              後
            </button>
          </li>
          <li className={"page-item" + (activePage === totalInfo && " disabled")}>
            <button
              className="page-link"
              lang="ja"
              onClick={() =>
                handlePageLinkButton(
                  activePage !== totalInfo ? activePage + activePageGroup : totalInfo
                )
              }
            >
              »
            </button>
          </li>
          <li className={"page-item" + (activePage === totalInfo && " disabled")}>
            <button className="page-link" lang="ja" onClick={() => handlePageLinkButton(totalInfo)}>
              最後
            </button>
          </li>
        </ul>
      </nav>
      <ul className="list-group list-group-flush">
        {paginate(
          wordsInformation.map(({ meanings, variants }, index) => (
            <li className="list-group-item" key={index}>
              {variants.map(({ written, pronounced, priorities }, index) => (
                <div key={index}>
                  <p>
                    <Ruby kanji={written} furigana={pronounced} />
                  </p>
                  <p>
                    Priorit{priorities.length > 1 ? "ies" : "y"} :{" "}
                    {priorities.length > 0 ? (
                      priorities.map(priority => (
                        <span key={priority}>{priority + addCommaEN(priorities, priority)}</span>
                      ))
                    ) : (
                      <span>None</span>
                    )}
                  </p>
                </div>
              ))}
              {meanings.map(({ glosses }, index) => (
                <p key={index}>
                  {glosses.map(gloss => (
                    <span key={gloss}>{gloss + addCommaEN(glosses, gloss)}</span>
                  ))}
                </p>
              ))}
            </li>
          )),
          1,
          activePage
        )}
      </ul>
    </section>
  );
}
