import "bootstrap/dist/css/bootstrap.min.css";
import { addCommaEN, addCommaJA } from "@/lib/formatter";
import Ruby from "./ruby";

export default function KanjiInformation({ kanjiInformation }) {
  const {
    kanji,
    jlpt,
    grade,
    meanings,
    unicode,
    notes,
    "kun_readings": kunReadings,
    "on_readings": onReadings,
    "name_readings": nameReadings,
    "heisig_en": heisig,
    "stroke_count": strokeCount,
    "freq_mainichi_shinbun": mainichiShinbunFrequency,
  } = kanjiInformation;

  return (
    <section className="card">
      <p className="card-header">
        Kanji Informations for <span lang="ja">{kanji}</span>
      </p>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          Kun-yomi (<span lang="ja">訓読み</span>) :{" "}
          {kunReadings.length > 0 ? (
            kunReadings.map(reading => (
              <span key={reading} lang="ja">
                {reading + addCommaJA(kunReadings, reading)}
              </span>
            ))
          ) : (
            <span>None</span>
          )}
        </li>
        <li className="list-group-item">
          On-yomi (<span lang="ja">音読み</span>) :{" "}
          {onReadings.length > 0 ? (
            onReadings.map(reading => (
              <span key={reading} lang="ja">
                {reading + addCommaJA(onReadings, reading)}
              </span>
            ))
          ) : (
            <span>None</span>
          )}
        </li>
        <li className="list-group-item">
          Name Reading{nameReadings.length > 1 ? "s" : ""} :{" "}
          {nameReadings.length > 0 ? (
            nameReadings.map(reading => (
              <span key={reading} lang="ja">
                {reading + addCommaJA(nameReadings, reading)}
              </span>
            ))
          ) : (
            <span>None</span>
          )}
        </li>
        <li className="list-group-item">Pre-2010 JLPT Level : {jlpt ?? "No data"}</li>
        <li className="list-group-item">
          {grade >= 1 && grade <= 6
            ? "Primary School Grade : " + grade
            : "Kanji Type : " +
              (grade === 8
                ? "Jōyō Kanji (常用漢字, taught in Secondary School)"
                : grade === 9
                ? "Jinmeiyō Kanji (人名用漢字)"
                : "No data")}
        </li>
        <li className="list-group-item">
          Meaning{meanings.length > 1 ? "s" : ""} in English :{" "}
          {meanings.length > 0 ? (
            meanings.map(meaning => (
              <span key={meaning}>{meaning + addCommaEN(meanings, meaning)}</span>
            ))
          ) : (
            <span>None</span>
          )}
        </li>
        <li className="list-group-item">Heisig Keyword : {heisig ?? "None"}</li>
        <li className="list-group-item">
          Stroke Count{strokeCount > 1 ? "s" : ""} : {strokeCount}
        </li>
        <li className="list-group-item">Unicode Code Point : U+{unicode}</li>
        <li className="list-group-item">
          Frequenc{mainichiShinbunFrequency > 1 ? "ies" : "y"} in{" "}
          <a href="https://www.mainichi.co.jp/" lang="ja">
            <Ruby kanji="毎日新聞" furigana="まいにちしんぶん" />
          </a>{" "}
          : {mainichiShinbunFrequency ?? "No data"}
        </li>
        <li className="list-group-item">
          Note{notes > 1 ? "s" : ""} :{" "}
          {notes.length > 0 ? (
            notes.map(note => <span key={note}>{note + addCommaEN(notes, note)}</span>)
          ) : (
            <span>None</span>
          )}
        </li>
      </ul>
    </section>
  );
}
