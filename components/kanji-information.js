import "bootstrap/dist/css/bootstrap.min.css";
import { addCommaEN, addCommaJA } from "@/lib/formatter";
import { theJISX0208KanjiVariant } from "@/lib/the-missing-4-kanji";
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
    "unihan_cjk_compatibility_variant": unihanCJKUnifiedVariant,
  } = kanjiInformation;
  const kanjiIsOfficialVariantAndMissingFromJISX0208 = heisig && heisig.includes("[alt]");

  return (
    <section className="card">
      <p className="card-header">
        Kanji Informations for <span lang="ja">{kanji}</span>
      </p>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          Kun-yomi (
          <span lang="ja">
            <Ruby kanji="訓読" furigana="くんよ" />み
          </span>
          ) :{" "}
          {kunReadings.length > 0
            ? kunReadings.map(reading => (
                <span key={reading} lang="ja">
                  {reading + addCommaJA(kunReadings, reading)}
                </span>
              ))
            : "None"}
        </li>
        <li className="list-group-item">
          On-yomi (
          <span lang="ja">
            <Ruby kanji="音読" furigana="おんよ" />み
          </span>
          ) :{" "}
          {onReadings.length > 0
            ? onReadings.map(reading => (
                <span key={reading} lang="ja">
                  {reading + addCommaJA(onReadings, reading)}
                </span>
              ))
            : "None"}
        </li>
        <li className="list-group-item">
          Name Reading{nameReadings.length > 1 ? "s" : ""} :{" "}
          {nameReadings.length > 0
            ? nameReadings.map(reading => (
                <span key={reading} lang="ja">
                  {reading + addCommaJA(nameReadings, reading)}
                </span>
              ))
            : "None"}
        </li>
        <li className="list-group-item">New JLPT Level : {jlpt ? "N" + jlpt : "No data"}</li>
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
          {meanings.length > 0
            ? meanings.map(meaning => (
                <span key={meaning}>{meaning + addCommaEN(meanings, meaning)}</span>
              ))
            : "None"}
        </li>
        <li className="list-group-item">
          Heisig Keyword :{" "}
          {heisig
            ? kanjiIsOfficialVariantAndMissingFromJISX0208
              ? heisig.slice(0, heisig.length - 6)
              : heisig
            : "None"}
        </li>
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
          Note
          {notes.length > 1 || (notes.length <= 1 && kanjiIsOfficialVariantAndMissingFromJISX0208)
            ? "s"
            : ""}
          <ul className="list-group">
            {kanjiIsOfficialVariantAndMissingFromJISX0208 && (
              <li className="list-group-item">
                This kanji is one of the four official jōyō variant of the kanjis missing from JIS X
                0208. The JIS X 0208 variant for this kanji is {theJISX0208KanjiVariant(kanji)}.
              </li>
            )}
            {notes.length > 0 ? (
              notes.map(note => (
                <li className="list-group-item" key={note}>
                  {unihanCJKUnifiedVariant
                    ? note.split(".")[0] +
                      ". The unified variant for this kanji is `" +
                      unihanCJKUnifiedVariant +
                      "`."
                    : note}
                </li>
              ))
            ) : (
              <li className="list-group-item">
                There are no{kanjiIsOfficialVariantAndMissingFromJISX0208 && " additional"} notes
                available for this kanji.
              </li>
            )}
          </ul>
        </li>
      </ul>
    </section>
  );
}
