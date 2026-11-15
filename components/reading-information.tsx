import "bootstrap/dist/css/bootstrap.min.css";
import type { JSX } from "react";
import { addCommaJA } from "@/lib/formatter";
import type { ReadingInfo } from "@/lib/types";

interface ReadingInformationProps {
  readingInformation: ReadingInfo;
}

export default function ReadingInformation({
  readingInformation,
}: ReadingInformationProps): JSX.Element {
  const { reading, main_kanji: mainKanji, name_kanji: nameKanji } = readingInformation;
  const mainKanjiLength: number = mainKanji.length;
  const nameKanjiLength: number = nameKanji.length;
  const totalKanji: number = mainKanjiLength + nameKanjiLength;

  return (
    <section className="card">
      <p className="card-header">
        Kanji with <span lang="ja">{reading}</span> Reading{" "}
        <span lang="ja">「{totalKanji}字」</span>
      </p>
      <div className="card-body">
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            As Main Reading :{" "}
            {mainKanjiLength > 0 ? (
              <>
                {mainKanji.map<JSX.Element>((kanji: string) => (
                  <span key={kanji} lang="ja">
                    {kanji + addCommaJA(mainKanji, kanji)}
                  </span>
                ))}
                <span lang="ja">「{mainKanjiLength}字」</span>
              </>
            ) : (
              "None"
            )}
          </li>
          <li className="list-group-item">
            As Name Reading :{" "}
            {nameKanjiLength > 0 ? (
              <>
                {nameKanji.map<JSX.Element>((kanji: string) => (
                  <span key={kanji} lang="ja">
                    {kanji + addCommaJA(nameKanji, kanji)}
                  </span>
                ))}
                <span lang="ja">「{nameKanjiLength}字」</span>
              </>
            ) : (
              "None"
            )}
          </li>
        </ul>
      </div>
    </section>
  );
}
