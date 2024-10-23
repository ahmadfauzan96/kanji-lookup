import "bootstrap/dist/css/bootstrap.min.css";
import { addCommaJA } from "@/lib/formatter";

export default function ReadingInformation({ readingInformation }) {
  const { reading, "main_kanji": mainKanji, "name_kanji": nameKanji } = readingInformation;

  return (
    <section className="card">
      <p className="card-header">
        Kanji{mainKanji.length + nameKanji.length > 1 ? "s" : ""} with{" "}
        <span lang="ja">{reading}</span> Reading{" "}
        <span lang="ja">「{mainKanji.length + nameKanji.length}字」</span>
      </p>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          As Main Reading :{" "}
          {mainKanji.length > 0 ? (
            <>
              {mainKanji.map(kanji => (
                <span key={kanji} lang="ja">
                  {kanji + addCommaJA(mainKanji, kanji)}
                </span>
              ))}
              <span lang="ja">「{mainKanji.length}字」</span>
            </>
          ) : (
            <span>None</span>
          )}
        </li>
        <li className="list-group-item">
          As Name Reading :{" "}
          {nameKanji.length > 0 ? (
            <>
              {nameKanji.map(kanji => (
                <span key={kanji} lang="ja">
                  {kanji + addCommaJA(nameKanji, kanji)}
                </span>
              ))}
              <span lang="ja">「{nameKanji.length}字」</span>
            </>
          ) : (
            <span>None</span>
          )}
        </li>
      </ul>
    </section>
  );
}
