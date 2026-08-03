/**
 * A component for displaying a kanji character with furigana.
 * @param {{kanji: string, furigana: string}} props
 */
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
