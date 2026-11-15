"use client";
import Link from "next/link";
import type { JSX } from "react";
// import styles from "./page.module.css";

interface ResultsErrorProps {
  error: Error;
}

export default function ResultsError({ error }: ResultsErrorProps): JSX.Element {
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
