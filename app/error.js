"use client";
import Link from "next/link";
// import styles from "./page.module.css";

export default function ResultsError({ error }) {
  return (
    <div className="error">
      <main>
        <h2>An error occurred!</h2>
        <p>Unfortunately, something went wrong.</p>
        <p>{error.message}</p>
        <Link href="/">Go back</Link>
      </main>
    </div>
  );
}
