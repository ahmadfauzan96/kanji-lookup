import "bootstrap/dist/css/bootstrap.min.css";
import {
  getAllKanji,
  getAllKyouikuKanji,
  getGrade1Kanji,
  getGrade2Kanji,
  getGrade3Kanji,
  getGrade4Kanji,
  getGrade5Kanji,
  getGrade6Kanji,
  getHeisigKanji,
  getJinmeiyouKanji,
  getJouyouKanji,
  getSecondarySchoolKanji,
} from "@/lib/kanji-list";
import Ruby from "./ruby";
import styles from "./header.module.css";

export default async function Header() {
  const allKanji = await getAllKanji();
  const jouyouKanji = await getJouyouKanji();
  const jinmeiyouKanji = await getJinmeiyouKanji();
  const kyouikuKanji = await getAllKyouikuKanji();
  const grade1Kanji = await getGrade1Kanji();
  const grade2Kanji = await getGrade2Kanji();
  const grade3Kanji = await getGrade3Kanji();
  const grade4Kanji = await getGrade4Kanji();
  const grade5Kanji = await getGrade5Kanji();
  const grade6Kanji = await getGrade6Kanji();
  const secondarySchoolKanji = await getSecondarySchoolKanji();
  const heisigKanji = await getHeisigKanji();

  return (
    <header className={styles.header}>
      <div className="card">
        <div className="card-body">
          <h1>
            Kanji Lookup – <span lang="ja">漢字をご検索しましょう！</span>
          </h1>
          <p>
            Browse through all of our {allKanji.length} kanji{allKanji.length !== 1 ? "s" : ""} and
            look for informations of your favorite Japanese Kanji!
          </p>
          <p>
            Total of {jouyouKanji.length} <Ruby kanji="常用漢字" furigana="じょうようかんじ" />,{" "}
            {jinmeiyouKanji.length} <Ruby kanji="人名用漢字" furigana="じんめいようかんじ" />,{" "}
            {kyouikuKanji.length} <Ruby kanji="教育漢字" furigana="きょういくかんじ" />, and many
            more <Ruby kanji="漢字" furigana="かんじ" /> are available to browse!
          </p>
          <p>
            教育漢字 consists of {grade1Kanji.length} Grade 1, {grade2Kanji.length} Grade 2,{" "}
            {grade3Kanji.length} Grade 3, {grade4Kanji.length} Grade 4, {grade5Kanji.length} Grade
            5, and {grade6Kanji.length} Grade 6 漢字. The grade indicates year of primary school in
            Japan. The remaining {secondarySchoolKanji.length - 4} 常用漢字 are taught in secondary
            school (4 漢字 have double Unicode code points due to historical reasons, both are
            provided in this app). {heisigKanji.length} 漢字 are registered in{" "}
            <a href="https://en.wikipedia.org/wiki/Remembering_the_Kanji_and_Remembering_the_Hanzi">
              Remembering the Kanji
            </a>{" "}
            by <a href="https://en.wikipedia.org/wiki/James_Heisig">James Heisig</a>, each has their
            own unique keyword.
          </p>
          <p>
            Enter a <strong>single</strong> kanji to obtain its informations or words associated
            with that kanji. Use <em>hiragana</em> for kun-yomi searching and <em>katakana</em> for
            on-yomi searching. It may take a while for result to be displayed properly.
          </p>
        </div>
      </div>
    </header>
  );
}
