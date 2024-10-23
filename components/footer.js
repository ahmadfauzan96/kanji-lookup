import styles from "./footer.module.css";

export default function Footer() {
  function copyrightYear(createdYear) {
    const currentYear = new Date().getFullYear();
    return currentYear > createdYear
      ? createdYear + "-" + currentYear
      : currentYear === createdYear
      ? currentYear.toString()
      : "Not created yet.";
  }

  return (
    <footer className={styles.footer}>
      <p>
        Created with ❤️ by <a href="https://github.com/ahmadfauzan96">Ahmad Fauzan Bagaskoro</a> ©{" "}
        {copyrightYear(2024)}
      </p>
      <p>
        Kanji API provided by <a href="https://kanjiapi.dev/">kanjiapi.dev</a>
      </p>
    </footer>
  );
}
