import type { JSX } from "react";

interface RubyProps {
  kanji: string;
  furigana: string;
}

/** A component for displaying a kanji character with furigana. */
export default function Ruby({ kanji, furigana }: RubyProps): JSX.Element {
  return (
    <ruby lang="ja" style={{ rubyAlign: "space-between" }}>
      {kanji}
      <rp>(</rp>
      <rt>{furigana}</rt>
      <rp>)</rp>
    </ruby>
  );
}
