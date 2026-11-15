// import localFont from "next/font/local";
import { ReactNode } from "react";
import "./globals.css";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata = {
  title: "Kanji Lookup",
  description: "Find information about your favorite 漢字 here!",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" dir="ltr">
      {/* <body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body> */}
      <body>{children}</body>
    </html>
  );
}
