import type { JSX, ReactNode } from "react";
import "./globals.css";

export const metadata = {
  title: "Kanji Lookup – 漢字検索",
  description: "Find information about your favorite 漢字 here!",
  authors: [{ name: "Ahmad Fauzan Bagaskoro", url: "https://github.com/ahmadfauzan96" }],
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps): JSX.Element {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning={true}>
      <body>{children}</body>
    </html>
  );
}
