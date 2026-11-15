import type { JSX } from "react";
import Header from "@/components/header";
import Content from "@/components/content";
import Footer from "@/components/footer";
import styles from "./page.module.css";

export default function Home(): JSX.Element {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <Content />
      </main>
      <Footer />
    </div>
  );
}
