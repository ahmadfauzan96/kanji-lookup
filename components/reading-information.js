import "bootstrap/dist/css/bootstrap.min.css";
import { addCommaJA } from "@/lib/formatter";

export default function ReadingInformation({ readingInformation }) {
  const { reading, "main_kanji": mainKanji, "name_kanji": nameKanji } = readingInformation;
  const mainKanjiLength = mainKanji.length;
  const nameKanjiLength = nameKanji.length;
  const totalKanji = mainKanjiLength + nameKanjiLength;

  return (
    <section className="card">
      <p className="card-header">
        Kanji{totalKanji > 1 ? "s" : ""} with <span lang="ja">{reading}</span> Reading{" "}
        <span lang="ja">「{totalKanji}字」</span>
      </p>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          As Main Reading :{" "}
          {mainKanjiLength > 0 ? (
            <>
              {mainKanji.map(kanji => (
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
              {nameKanji.map(kanji => (
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
    </section>
  );
}
