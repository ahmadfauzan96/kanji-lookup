export default function Ruby({ kanji, furigana }) {
  return (
    <ruby lang="ja" style={{ rubyAlign: "space-between" }}>
      {kanji}
      <rp>(</rp>
      <rt>{furigana}</rt>
      <rp>)</rp>
    </ruby>
  );
}
