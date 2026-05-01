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
  getJLPTN1Kanji,
  getJLPTN2Kanji,
  getJLPTN3Kanji,
  getJLPTN4Kanji,
  getJLPTN5Kanji,
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
  const jlptN5Kanji = await getJLPTN5Kanji();
  const jlptN4Kanji = await getJLPTN4Kanji();
  const jlptN3Kanji = await getJLPTN3Kanji();
  const jlptN2Kanji = await getJLPTN2Kanji();
  const jlptN1Kanji = await getJLPTN1Kanji();
  const totalJLPTKanji = [
    jlptN5Kanji.length,
    jlptN4Kanji.length,
    jlptN3Kanji.length,
    jlptN2Kanji.length,
    jlptN1Kanji.length,
  ].reduce((acc, curr) => acc + curr, 0);
  const currentYear = new Date().getFullYear();

  return (
    <header className={styles.header}>
      <div className="card">
        <div className="card-body">
          <h1>
            Kanji Lookup –{" "}
            <span lang="ja">
              <Ruby kanji="漢字" furigana="かんじ" />
              をご
              <Ruby kanji="検索" furigana="けんさく" />
              しましょう！
            </span>
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
            provided in this app). {heisigKanji.length - 4} 漢字 (in addition to the 4 漢字 that
            have double Unicode code points) are registered in{" "}
            <a href="https://en.wikipedia.org/wiki/Remembering_the_Kanji_and_Remembering_the_Hanzi">
              Remembering the Kanji
            </a>{" "}
            by <a href="https://en.wikipedia.org/wiki/James_Heisig">James Heisig</a>, each has their
            own unique Heisig keyword.
          </p>
          <p>
            On the other hand, JLPT (Japanese Language Proficiency Test,{" "}
            <Ruby kanji="日本語能力試験" furigana="にほんごのうりょくしけん" />) is a standardized
            test to evaluate and certify the Japanese language proficiency of non-native speakers.
            Before 2010, the JLPT has 4 levels, from JLPT 4 (beginner) up to JLPT 1 (advanced). It
            was reformed in 2010, and now in {currentYear} it has 5 levels, from N5 (beginner) up to
            N1 (advanced). There are {totalJLPTKanji} 漢字 required to pass the JLPT. Among them,{" "}
            {jlptN5Kanji.length} are for N5, {jlptN4Kanji.length} for N4, {jlptN3Kanji.length} for
            N3, {jlptN2Kanji.length} for N2, and {jlptN1Kanji.length} for N1.
          </p>
          <p>
            Enter a <strong>single</strong> kanji to obtain its informations or words associated
            with that kanji. Use <em>hiragana</em> for kun-yomi searching and <em>katakana</em> for
            on-yomi searching. It may take a while for the results to be displayed properly.
          </p>
        </div>
      </div>
    </header>
  );
}
