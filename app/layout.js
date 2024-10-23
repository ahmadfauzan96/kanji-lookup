import "./globals.css";

export const metadata = {
  title: "Kanji Lookup – 漢字検索",
  description: "Find information about your favorite 漢字 here!",
  authors: [
    { name: "Ahmad Fauzan Bagaskoro" },
    { name: "Ahmad Fauzan Bagaskoro", url: "https://github.com/ahmadfauzan96" },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr">
      <body>{children}</body>
    </html>
  );
}
