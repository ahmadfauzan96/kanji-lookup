export default function Ruby({ kanji, furigana }) {
  return (
    <ruby lang="ja">
      {kanji}
      <rp>(</rp>
      <rt>{furigana}</rt>
      <rp>)</rp>
    </ruby>
  );
}
